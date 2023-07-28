import userCart from "../../../Hooks/useCart";

const MyCart = () => {

    const [ cart ] = userCart();
    const total = cart.reduce((sum, item) => item.price + sum, 0);

    return (
        <div>
            <h3>Total Items: {cart.length}</h3>
            <h3>Total Price: ${total}</h3>
            <button className="btn btn-warning btn-sm">PAY</button>
        </div>
    );
};

export default MyCart;