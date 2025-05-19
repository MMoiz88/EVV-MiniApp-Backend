import { promises as fs } from 'fs'
import path from 'path'

export default class BaseRepo {
  private filePath: string

  constructor(filename: string) {
    this.filePath = path.join(__dirname, '..', 'data', filename)
  }

  protected async readFile() {
    try {
      const data = await fs.readFile(this.filePath, 'utf-8')
      return JSON.parse(data)
    } catch (err) {
      if (err.code === 'ENOENT') {
        await this.writeFile([])
        return []
      }
      throw err
    }
  }

  protected async writeFile(data: any[]) {
    await fs.writeFile(this.filePath, JSON.stringify(data, null, 2))
  }

  async index(orderBy = 'id', direction: 'asc' | 'desc' = 'asc') {
    let data = await this.readFile()
    return data.sort((a, b) =>
      direction === 'asc' ? a[orderBy] - b[orderBy] : b[orderBy] - a[orderBy]
    )

    
  }

  async store(input: any) {
    const data = await this.readFile()
    const newId = data.length ? Math.max(...data.map(d => d.id)) + 1 : 1
    const newRow = { id: newId, ...input }
    data.push(newRow)
    await this.writeFile(data)
    return newRow
  }

  async show(id: number) {
    const data = await this.readFile()
    const row = data.find(item => item.id === id)
    if (!row) throw new Error('Record not found')
    return row
  }

  async update(id: number, input: any) {
    const data = await this.readFile()
    const index = data.findIndex(item => item.id === id)
    if (index === -1) throw new Error('Record not found')
    data[index] = { ...data[index], ...input }
    await this.writeFile(data)
    return data[index]
  }

  async delete(id: number) {
    let data = await this.readFile()
    const index = data.findIndex(item => item.id === id)
    if (index === -1) throw new Error('Record not found')
    data.splice(index, 1)
    await this.writeFile(data)
  }
}
