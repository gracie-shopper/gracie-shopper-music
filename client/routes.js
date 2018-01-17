import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch, Router } from 'react-router-dom'
import PropTypes from 'prop-types'
import history from './history'
import { Main, Login, Signup, UserHome, Cart, Checkout, AllWatches, SingleWatch, AllOrders, SingleOrder, AllReviews, SingleReview } from './components'
import { AdminMain } from './Admin'
import { me, fetchWatches, fetchReviews } from './store'

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    const { isLoggedIn, isAdmin } = this.props
    return (
      <Router history={history}>
        <Switch>
          {isAdmin && <Route path="/admin" component={AdminMain} />}
          <Main>
            <Switch>
              {/* Routes placed here are available to all visitors */}
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
              <Route exact path="/watches" component={AllWatches} />
              <Route exact path="/watches/:watchId" component={SingleWatch} />
              <Route exact path="/reviews" component={AllReviews} />
              <Route exact path="/watches/:watchId/reviews" component={AllReviews} />
              <Route path="/watches/:watchId/reviews/:reviewId" component={SingleReview} />
              {
                isLoggedIn &&
                <Switch>
                  {/* Routes placed here are only available after logging in */}
                  <Route path="/home" component={UserHome} />
                  <Route exact path="/orders" component={AllOrders} />
                  <Route path="/orders/:orderId" component={SingleOrder} />
                </Switch>
              }
              <Route path="/cart" component={Cart} />
              <Route path="/checkout" component={Checkout} />
              {/* Display watches page as fallback */}
              <Route component={AllWatches} />
            </Switch>
          </Main>
        </Switch>
      </Router>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id,
    isAdmin: state.user.isAdmin
  }
}

const mapDispatch = (dispatch) => {
  return {
    loadInitialData() {
      dispatch(me())
      dispatch(fetchWatches())
      dispatch(fetchReviews())
    }
  }
}

export default connect(mapState, mapDispatch)(Routes)

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
