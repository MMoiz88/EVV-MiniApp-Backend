import {rules, schema} from '@ioc:Adonis/Core/Validator'
import {HttpContextContract} from '@ioc:Adonis/Core/HttpContext'
import BaseValidator from "App/Validators/BaseValidator";

export default class LogShiftValidator extends BaseValidator {
  constructor(protected ctx: HttpContextContract) {
    super()
  }
  public schema = schema.create({
    shift_id: schema.number([
      rules.unsigned(),
    ]),
    lat: schema.number([
      rules.range(-90, 90),
    ]),
    lng: schema.number([
      rules.range(-180, 180),
    ]),
  })
}
