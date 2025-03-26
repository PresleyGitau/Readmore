import { Link, useNavigate } from "react-router-dom";


const Navbar = () => {


    const user =JSON.parse(localStorage.getItem("user"))
    const navigate = useNavigate()
    const handleLogout =()=> {
        localStorage.clear()
        navigate("/signin")
    }
    return ( 
        <section className="row">
        <div className="col-md-12">
            <div className="navbar navbar-expand-md navbar-light bg-light">
                <Link to="/" className="navbar-brand">ReadMore bookclub</Link>
                <button className="navbar-toggler" data-bs-target="#prada" data-bs-toggle="collapse">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="prada">
                    <div className="navbar-nav">
                        <Link to="/" className="nav-link">Home</Link>
                        <Link to="/getbookclub" className="nav-link">Bookclub</Link>
                        <Link to="/addbookclub" className="nav-link">Addbookclub</Link>
                        <Link to="/addproducts" className="nav-link">Addbook</Link>
                        <Link to="/aboutus" className="nav-link">AboutUs</Link>


                    </div>
                <div className="form-container collapse navbar-collapse">
                    {user && (
                        <div className="navbar-nav ms-auto">
                            <b className="text-success nav-link">Hello{user.username}</b>
                            <button className="nav-link" onClick={handleLogout}>Logout</button>
                        </div>
                    )}
                    {!user &&(
                        <div className="navbar-nav ms-auto">
                            <Link to="/signin">Login</Link>
                            <Link to="/signup">Register</Link>

                        </div>
                    )}
                </div>
                </div>



            </div>
        </div>
     </section>
     );
}
 
export default Navbar;