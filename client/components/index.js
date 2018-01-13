/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */
export {default as Main} from './Main'
export {default as UserHome} from './UserHome'
export {Login, Signup} from './AuthForm'
export {default as AllWatches} from './AllWatches'
export {default as SingleWatch} from './SingleWatch'
export {default as UserCart} from './UserCart'
export {default as VisitorCart} from './VisitorCart'
export {default as AllOrders} from './AllOrders'
