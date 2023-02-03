import { useParams } from "react-router-dom"

const CartPage = () => {
    const { id } = useParams();
    console.log(id);
    return <p>This is a cart page</p>
}

export default CartPage