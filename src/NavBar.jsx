
import { NavLink } from "react-router-dom";
function NavBar() {
    const navbar = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingRight: '30px'
    }

    const navStyle = {
        backgroundColor: 'rgb(240 240 240)',
        padding: '1px',
        borderRadius: '15px'
    }
    return (
        <>
            <center>
                <div><h2>Welcome to E-commece site</h2></div>
                <div style={navStyle}><h3 style={navbar}>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/products">Products</NavLink>
                    <NavLink to="/history">History</NavLink>
                    <NavLink to="/invoice">Invoice</NavLink>
                    {/* only for admin */}
                    <NavLink to="/newproduct">Add Product</NavLink>
                    <NavLink to="/dashboard">Dashboard</NavLink>
                    <NavLink to="/inventory">Inventory</NavLink>
                </h3>
                </div>
            </center>
        </>
    )
}
export default NavBar;