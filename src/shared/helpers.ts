export const getRole = () => {
  return 'FIGHTER'
}

export const getHeader = (defaults: any) => ({
  headers: {
    ...defaults,
    authorization: `Bearer ${localStorage.getItem('token')}`,
  },
})

export const makeRule = (value: any, message: string = '') => {
  return {
    value,
    message,
  }
}

export const getFormErrors = (errors: any) =>
  Object.keys(errors).map(key => errors[key].message)
