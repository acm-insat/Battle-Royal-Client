import { makeRule } from 'shared/helpers'
/*
	supported validators
		required
		min
		max
		minLength
		maxLength
		pattern: REGEX
		validate
*/

export const username = {
  required: makeRule(true, 'Username is Required'),
  pattern: makeRule(
    /^[a-zA-Z0-9-_]+$/,
    'Username should contain only letters, numbers, dashes and underscores'
  ),
}

export const password = {
  required: true,
  minLength: 8,
  maxLength: 20,
}

export const name = {
  required: true,
}
