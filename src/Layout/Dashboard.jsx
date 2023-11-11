import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome, FaUtensils, FaBook, FaUsers } from 'react-icons/fa';
import useCart from "../Hooks/useCart";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {

    const [cart] = useCart();

    //TO DO---
    // const isAdmin = true;
    const [isAdmin] = useAdmin();

    return (
        <div className="drawer lg:drawer-open ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet />
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side bg-[#D1A054]">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full text-white">
                    {/* Sidebar content here */}
                    {
                        isAdmin ? <>
                            <li><NavLink to="/dashboard/home"><FaHome /> Admin Home</NavLink></li>
                            <li><NavLink to="/dashboard/reservations"><FaUtensils /> Add Items</NavLink></li>
                            <li><NavLink to="/dashboard/history">< FaWallet /> Manage Items</NavLink></li>
                            <li><NavLink to="/dashboard/history">< FaBook /> Manage Bookings</NavLink></li>
                            <li><NavLink to="/dashboard/allusers">< FaUsers /> All Users</NavLink></li>

                        </> : <>
                            <li><NavLink to="/dashboard/home"><FaHome /> User Home</NavLink></li>
                            <li><NavLink to="/dashboard/reservations"><FaCalendarAlt /> Reservations</NavLink></li>
                            <li><NavLink to="/dashboard/history">< FaWallet /> Payment History</NavLink></li>
                            <li>
                                <NavLink to="/dashboard/mycart"><FaShoppingCart />
                                    My Cart
                                    <span className="badge badge-secondary">+{cart?.length || 0}</span>
                                </NavLink>
                            </li>
                        </>
                    }

                    <div className="divider"></div>
                    <li><NavLink to="/"><FaHome /> Home</NavLink></li>
                    <li><NavLink to="/menu"><FaHome /> Our Menu</NavLink></li>
                    <li><NavLink to="/order/salad"><FaHome /> Order Food</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;