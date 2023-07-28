import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const FoodCard = ({ item }) => {

    const { name, image, price, recipe, _id } = item;
    const { user } = useContext(AuthContext);

    const handleAddToCart = item => {
        console.log(item);
        if(user && user.email) {
            const cartItem = { menuItemId: _id, name, image, price, email: user.email}
            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
            .then(res => res.json())
            .then(data => {
                if (data.insertedID) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Successfully added to cart',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
        }
        else{
            Swal.fire({
                title: 'Please Login to Order Food',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              })
        }
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Food" /></figure>
            <p className="bg-slate-900 text-white absolute right-0 mr-4 mt-4 px-4 rounded">${price}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => handleAddToCart(item) } className="btn btn-outline border-0 bg-slate-100 border-orange-400 border-b-4 text-orange-500 mt-3">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;