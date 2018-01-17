import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { auth } from '../store'

/**
 * COMPONENT
 */
const AuthForm = (props) => {
  const { name, displayName, handleSubmit, error, cart } = props

  return (
    <div>
      <form onSubmit= { (evt, cart) => handleSubmit(evt, cart) } name={name}>
        {name === 'signup' &&
          <div>
            <div>
              <label htmlFor="firstName"><small>First Name</small></label>
              <input name="firstName" type="text" />
            </div>
            <div>
              <label htmlFor="lastName"><small>Last Name</small></label>
              <input name="lastName" type="text" />
            </div>
          </div>
        }
        <div>
          <label htmlFor="email"><small>Email</small></label>
          <input name="email" type="text" />
        </div>
        <div>
          <label htmlFor="password"><small>Password</small></label>
          <input name="password" type="password" />
        </div>
        <div>
          <button type="submit">{displayName}</button>
        </div>
        {error && error.response && <div> {error.response.data} </div>}
      </form>
      <div className="provider-link">
        <a href="/auth/google">{displayName} with Google</a>
      </div>
      <div className="provider-link">
        <a href="/auth/facebook">{displayName} with Facebook</a>
      </div>
    </div>
  )
}

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = (state) => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.user.error,
    cart: state.session.cart
  }
}

const mapSignup = (state) => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.user.error,
    cart: state.session.cart
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleSubmit(evt, cart) {
      evt.preventDefault()
      const formName = evt.target.name
      //Same form submit for login/signup. Login does not have firstname/lastname.
      let firstName = '', lastName = '';
      if (evt.target.firstName) firstName = evt.target.firstName.value
      if (evt.target.lastName) lastName = evt.target.lastName.value
      const email = evt.target.email.value
      const password = evt.target.password.value
      dispatch(auth(firstName, lastName, email, password, formName, cart))
    }
  }
}

export const Login = connect(mapLogin, mapDispatch)(AuthForm)
export const Signup = connect(mapSignup, mapDispatch)(AuthForm)

/**
 * PROP TYPES
 */
AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
}
