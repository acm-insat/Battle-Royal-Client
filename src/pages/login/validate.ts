import { makeRule } from "shared/helpers"

export const username = {
    required: makeRule(true, 'Username is required'),
}

export const password = {
    required: makeRule(true, 'Password is required'),
    minLength: makeRule(8, 'Password is 8 Characters minimum'),
    maxLength: makeRule(30, 'Password is 30 Characters maximum'),
  }