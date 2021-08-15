export const getRole = () => {
  return 'FIGHTER'
}

export const getHeader = (defaults: any) => ({
  headers: {
    ...defaults,
    authorization: `Bearer ${localStorage.getItem('token')}`,
  },
})
