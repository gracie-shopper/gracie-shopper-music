import React from 'react'
import { connect } from 'react-redux'
import { Table, List } from 'semantic-ui-react'
import { OrderStatusForm } from './index'
import { updateOrder } from '../store'

const SingleOrder = (props) => {
  const { order } = props
  return (
    <Table selectable definition size="large" celled padded attached="bottom">
      <Table.Body >
        <Table.Row>
          <Table.Cell textAlign="center">Status</Table.Cell>
          <Table.Cell>
            <OrderStatusForm order={order} />
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell textAlign="center">CreatedAt</Table.Cell>
          <Table.Cell>{order.createdAt}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell textAlign="center">UpdatedAt</Table.Cell>
          <Table.Cell>{order.updatedAt}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell textAlign="center">Watches</Table.Cell>
          <Table.Cell >
            <List selection divided verticalAlign="middle">
              {order.watches.map((watch) => (
                <List.Item key={watch.id}>
                  <List.Content>
                    <List.Header>ID: {watch.id}</List.Header>
                    Price: {watch.order_watch.quantity}<br />
                    Quantity: {watch.order_watch.fixedPrice}
                  </List.Content>
                </List.Item>
              ))}
            </List>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleFormSubmit(status) {
      dispatch(updateOrder(status))
    }
  };
};

export default connect(null, mapDispatchToProps)(SingleOrder)
