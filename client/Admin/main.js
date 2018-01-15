import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { AdminHeader, AdminMenu, AllOrders, AllWatches } from './index'

const Main = () => {
  return (
    <div>
      <AdminHeader />
      <div className="admin">
        <AdminMenu />
        <Switch>
          <Route path="/admin/watches" component={AllWatches} />
          <Route path="/admin/orders" component={AllOrders} />
        </Switch>
      </div>
    </div>
  )
}

export default Main
