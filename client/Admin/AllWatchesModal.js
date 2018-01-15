import React from 'react'
import { Table, Modal, ModalHeader as Header, ModalContent as Content } from 'semantic-ui-react'
import { AllWatchesTableRow } from './index'

const AllWatchesModal = (props) => {
  const { watch, users } = props
  //let orderUser = users.find(user => user.id === order.userId)
  //let name = `${orderUser.firstName} ${orderUser.lastName}`
  return (
    <Modal trigger={<Table.Row><AllWatchesTableRow watch={watch} /></Table.Row>}>
      <Header>WATCH ID: {watch.id}</Header>
      <Content>
        <ul>
          <li>Make: {watch.Make}</li>
          <li>Created At: {watch.createdAt}</li>
          <li>Updated At: {watch.updatedAt}</li>
          {/*
          <li>Watches: </li>
            {order.watches.map(watch => (
            <div key={watch.id}>
              {watch.make} {watch.model}
              <ul>
                <li>Year: {watch.year}</li>
                <li>Complications: {watch.complications}</li>
                <li>Image: {watch.imageUrl}</li>
                <li>Order Price: {watch.order_watch.fixedPrice}</li>
                <li>Order Quantity: {watch.order_watch.quantity}</li>
              </ul>
            </div>
            ))}
           */}
        </ul>
      </Content>
    </Modal>
  )
}

export default AllWatchesModal
