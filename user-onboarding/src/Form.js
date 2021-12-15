import React from 'react'

export default function FriendForm(props) {
  const {
    values,
    submit,
    change,
    disabled,
    errors,
  } = props

  const onSubmit = evt => {
    evt.preventDefault()
    submit()
  }

  const onChange = evt => {

    const { name, value, checked, type } = evt.target
    const valueToUse = type === 'checkbox' ? checked : value;
    change(name, valueToUse)
  }

  return (
    <form className='form container' onSubmit={onSubmit}>
      <div className='form-group submit'>
        <h2>Add a new User!</h2>

        
        <button disabled={disabled}>submit</button>

        <div className='errors'>
         
          <div>{errors.name}</div>
          <div>{errors.email}</div>
          <div>{errors.password}</div>
          <div>{errors.confirmPassword}</div>
          <div>{errors.termsOfService}</div>
        </div>
      </div>

      <div className='form-group inputs'>
        <h4>New User Sign-up</h4>
        <label>Name&nbsp;
          <input
            value={values.first_name}
            onChange={onChange}
            name='first_name'
            type='text'
          />
        </label>

        <label>Email
          <input
            value={values.email}
            onChange={onChange}
            name='email'
            type='text'
          />
        </label>
        <label>Password
          <input
            value={values.password}
            onChange={onChange}
            name='password'
            type='text'
          />
        </label>
        <label>Confirm Password
          <input
            value={values.confirmPassword}
            onChange={onChange}
            name='confirmPassword'
            type='text'
          />
        </label>
      </div>

      <div className='form-group checkboxes'>
        <label>Terms of Service
          <input
            type='checkbox'
            value={values.termsOfService}
            onChange={onChange}
            name='termsOfService'
          />
        </label>
      </div>
    </form>
  )
}
