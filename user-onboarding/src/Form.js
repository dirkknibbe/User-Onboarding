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
        <div><label>Name&nbsp;
            <div>
          <input
            value={values.first_name}
            onChange={onChange}
            name='first_name'
            type='text'
          /></div>
        </label>
        </div>

        <div><label>Email
            <div>
          <input
            value={values.email}
            onChange={onChange}
            name='email'
            type='text'
          /></div>
        </label>
        </div>

        <div>
        <label>Password
            <div>
          <input
            
            value={values.password}
            onChange={onChange}
            name='password'
            type={'password'}
          /></div>
        </label>
        </div>
        <div>
        <label>Confirm Password
            <div>
          <input
            value={values.confirmPassword}
            onChange={onChange}
            name='confirmPassword'
            type='text'
          /></div>
        </label>
        </div>
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
      <button disabled={disabled}>submit</button>
    </form>
  )
}
