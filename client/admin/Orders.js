import React, { Component } from 'react'
import { Table, Segment, Dropdown, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { OrdersModal } from './index'

class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: ''
    };

    this.filterOrder = this.filterOrder.bind(this);
    this.renderOrderSearch = this.renderOrderSearch.bind(this);
  }

  render() {
    return (
      <div>
        <Segment attached="bottom">
          {this.renderOrderSearch()}
          <Table selectable celled padded attached="bottom">
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell textAlign="center" width={2}>Order Id</Table.HeaderCell>
                <Table.HeaderCell textAlign="center" width={2}>Status</Table.HeaderCell>
                <Table.HeaderCell textAlign="center" width={2}>User</Table.HeaderCell>
                <Table.HeaderCell textAlign="center" width={2}>CreatedAt</Table.HeaderCell>
                <Table.HeaderCell textAlign="center" width={2}>UpdatedAt</Table.HeaderCell>
                <Table.HeaderCell textAlign="center" width={2}>Watches</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {this.props.users.length ? this.props.orders
              .filter(this.filterOrder)
              .map(order =>
                <OrdersModal key={order.id} order={order} users={this.props.users} />
              ) : null}
            </Table.Body>
          </Table>
        </Segment>
      </div>
    )
  }

  filterOrder = (order) => {
    const statusMatch = new RegExp(this.state.status, 'i');
    return statusMatch.test(order.status)
  }

  renderOrderSearch = () => {
    const statuses = ['created', 'processing', 'cancelled', 'completed']
    let statusOptions = [{key: 'select', value: '', text: 'Select a Status'}]
    statuses.map((status, i) => {
      statusOptions.push({key: i, value: status, text: status});
    })
    return (
      <div className="order-status-dropdown">
        <Dropdown
          button
          floating
          labeled
          options={statusOptions}
          text="Select Status"
          search
          onChange={(evt, { value }) => this.setState({ status: value })}
        />
      </div>
    );
  }
}

const mapStateToProps = ({orders, users}) => ({orders, users})

export default withRouter(connect(mapStateToProps)(Orders))
