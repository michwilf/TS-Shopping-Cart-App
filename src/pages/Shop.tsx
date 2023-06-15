import React from 'react'
import { Col, Row } from 'react-bootstrap'
import storeItems from '../data/items.json'
import StoreItem from '../components/StoreItem'

export const Shop = () => {


  return (
      <>
          <h1>Shop</h1>
          <Row md={2} xs={1} lg={3}>
              {storeItems.map(item => (
                  <Col className="my-2">
                      <StoreItem {...item} />
                  </Col>
                ))}
          </Row>
      </>
  )
}
