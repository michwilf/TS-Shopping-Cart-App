import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import { useShoppingCart } from '../context/ShoppingCartContext'
import { formatCurrency } from '../utils/formatCurrency'

type StoreItemProps = {
    id: number
    name: string
    price: number
    imgUrl: string
}

const StoreItem = ({ id, name, price, imgUrl }: StoreItemProps) => {

    const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart} = useShoppingCart()

    const quantity = getItemQuantity(id);


  return (
      <Card className="h-100 mb-4 ">
          <Card.Img src={imgUrl} variant="top" height="200px" style={{ objectFit: "cover" }} />
          <Card.Body className="d-flex flex-column">
              <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                  <span className="fs-2">{name}</span>
                <span className="ms-2 text-muted">{formatCurrency(price)}</span>
              </Card.Title>
              <div className="mt-auto">
                  {quantity === 0 ? (
                      <button onClick={() => increaseCartQuantity(id)} className="btn btn-primary w-100">Add to cart</button>
                  ) : (
                          <div className="align-items-center">
                          <div className="d-flex justify-content-between align-items-center">
                              <button onClick={() => decreaseCartQuantity(id)} className="btn btn-outline-primary">-</button>
                              <div>
                                  <span className="fs-4">{quantity}</span>
                            </div>
                              <button onClick={() => increaseCartQuantity(id)} className="btn btn-outline-primary">+</button>
                              </div>
                              <div className="mt-3 text-center">
                                  <button onClick={() => removeFromCart(id)} className="btn btn-outline-danger">Remove</button>
                                </div>
                </div>)}
              </div>
          </Card.Body>
    </Card>
  )
}

export default StoreItem