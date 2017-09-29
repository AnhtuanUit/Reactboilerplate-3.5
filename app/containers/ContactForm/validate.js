const validate = values => {
  // IMPORTANT: values is an Immutable.Map here!
  const errors = {}

  if (!values.get('firstName')) {
    errors.firstName = 'Required'
  }

  if (!values.get('email')) {
    errors.email = 'Required'
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.get('email'))
  ) {
    errors.email = 'Invalid email address'
  }

  if (!values.get('lastName')) {
    errors.lastName = 'Required'
  }

  if (!values.get('content')) {
    errors.content = 'Required'
  }

  if (!values.get('response')) {
    errors.response = 'Required'
  }

  return errors
}

export default validate
