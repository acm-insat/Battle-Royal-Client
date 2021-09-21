import { makeRule } from "shared/helpers"

export const username = {
    required: makeRule(true, 'Username is required'),
    pattern: makeRule(
        /^[a-zA-Z0-9-_]+$/,
        'Username can only contain letters, numbers, dashes and underscores'
    ),
}

export const password = {
    required: true,
    minLength: 8,
    maxLength: 20,
  }