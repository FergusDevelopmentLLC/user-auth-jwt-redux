const getErrorMessage = ( response ) => {
  
  let errorMessage = ''
  
  if(response.errors) {
    errorMessage = Object.keys(response.errors).map((key) => `${key.capitalize()} ${[...new Set(response.errors[key])].join(', ')}`).join(', ') + '.'
  }
  else if(response.error) {
    errorMessage = response.error
  }
  
  return errorMessage
}

export default getErrorMessage