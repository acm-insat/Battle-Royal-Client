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

export const teamname = {
  required: makeRule(true, 'Team name is required'),
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
