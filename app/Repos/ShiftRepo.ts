import ExceptionWithCode from 'App/Exceptions/ExceptionWithCode'
import BaseRepo from './BaseRepo'

class ModuleRepo extends BaseRepo {
  constructor() {
    super('shifts.json')
  }

async logVisit(request) {
    const location = {
        latitude: request.input('lat'),
        longitude: request.input('lng')
    }
    const shiftId = request.input('shift_id')
    const data = await this.readFile()
    const shiftIndex = data.findIndex(s => s.id === shiftId)

    if (shiftIndex === -1) throw new Error('Shift not found')

    const shift = data[shiftIndex]
    const logs = shift.visitLogs || []

    if (!logs.length) {
      logs.push({
        type: 'start',
        timestamp: new Date().toISOString(),
        location
      })
    } else if (logs.length && logs[0].type === 'start') {
      logs.push({
        type: 'end',
        timestamp: new Date().toISOString(),
        location
      })
    } else {
      throw new ExceptionWithCode('Both start and end already logged',400)
    }

    shift.visitLogs = logs
    data[shiftIndex] = shift

    await this.writeFile(data)
    return shift
  }
}

export default new ModuleRepo()
