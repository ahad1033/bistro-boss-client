import { FaTrashAlt } from "react-icons/fa";
import userCart from "../../../Hooks/useCart";

const MyCart = () => {

    const [cart] = userCart();
    const total = cart.reduce((sum, item) => item.price + sum, 0);

    return (
        <div>
            <div className="uppercase font-semibold h-[60px] items-center flex justify-evenly">
                <h3>Total Items: {cart.length}</h3>
                <h3>Total Price: ${total}</h3>
                <button className="btn btn-warning btn-sm">PAY</button>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Food</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, index) => <tr
                                key={item._id}
                            >
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td className="text-end">${item.price}</td>
                                <td>
                                    <button className="btn btn-ghost btn-md text-white text-lg bg-red-600"><FaTrashAlt /></button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyCart;