import { Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/items.json"
import { formatCurrency } from "../utils/formatCurrency";

type CartItemProps = {
    id: number
    quantity: number
}


export function CartItem({ id, quantity }: CartItemProps) {
    const { removeFromCart } = useShoppingCart();
    
    const item = storeItems.find(item => item.id === id)
    if (!item) return null
    
    return (
        <Stack direction="horizontal" className="d-flex align-items-center" gap={2}>
            <img src={item.imgUrl} alt={item.name} style={{ width: "125px", height: "75px", objectFit: "cover"}} />
            <div className="me-auto">
                <div>
                    {item.name}
                    {quantity > 1 && (<span className="text-muted">
                        x{quantity}
                    </span>)}
                </div>
                <div className="text-muted">
                    {formatCurrency(item.price)}
                </div>
            </div>
            <div>
                {formatCurrency(item.price * quantity)}
            </div>
            <button onClick={() => removeFromCart(id)} className="btn btn-outline-danger">&times;</button>
        </Stack>

    )
}