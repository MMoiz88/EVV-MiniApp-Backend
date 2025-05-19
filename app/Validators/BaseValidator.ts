import {validator} from '@ioc:Adonis/Core/Validator'

export default class BaseValidator {
  constructor() {
  }

  /**
   * Custom messages for validation failures. You can make use of dot notation `(.)`
   * for targeting nested fields and array expressions `(*)` for targeting all
   * children of an array. For example:
   *
   * {
   *   'profile.username.required': 'Username is required',
   *   'scores.*.number': 'Define scores as valid numbers'
   * }
   *
   */

  public reporter = validator.reporters.api

  public messages = {


    '*': (field, _rule) => {
      return `${_rule} Validation error on ${field}`
    },
    array: "{{field}} should be an array",
    nullable: "The {{field}} should exist",
    required: "The {{field}} is required",
    unique: "The {{field}} has already been taken",
    email: "The email is not valid",
    minLength: "The {{field}} should have atleast one item",
    maxLength: "The {{field}} should not greater than {{options.minLength}} character",
    confirmed: "The {{field}} doesn't match",
    otp_code: "The {{field}} is required",
    mobile: "The {{field}} format is invalid",
    number: "The {{field}} should be a number",
    exists: "The {{field}} does not exist",
    boolean : "The data is invalid, only 1 or 0 is allowed",
    "date.format" : "Invalid date format",
  }
}
