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

export const name = {
  required: makeRule(true, 'Team name is required'),
  pattern: makeRule(
      /^[a-zA-Z0-9-_ ]+$/,
      'Team name can only contain letters, numbers, dashes and underscores'
  ),
}


export const fullname = id => ({
  required: makeRule(true, `(${id}) Full Name is required`),
})

export const email = id => ({
  required: makeRule(true, `(${id}) Email is required`),
})

export const phone = id => ({
  required: makeRule(true, `(${id}) Phone is required`),
})



export const defaults = {
  name: '',
  members: [
    {
      fullname: '',
      email: '',
      phone: '',
      isMember: false,
    }
  ],
  onsite: false,

}