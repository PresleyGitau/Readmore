import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const AddProducts = () => {

    let[product_name,setProductName] = useState("")
    let [product_desc,setProductDesc] = useState("")
    let [product_cost,setProductCost] = useState("")
    
    let[product_photo,setProductPhoto] = useState("")
    let[genre,setGenre] = useState("")

    const navigate = useNavigate();
    const user = localStorage.getItem("user")
    const checkUser = () => {
        if(!user) {
            localStorage.clear()
            return Navigate("/signin")
        }

    }
    
    useEffect(() => {
        if (!user) {
            localStorage.clear();
            navigate("/signin");
        }
    }, [user, navigate]);
    let fileinputref = useRef(null)
    let [loading,setLoading] = useState("")
    let [error,setError] = useState("")
    let [success,setSuccess] = useState("")
    

    const submitForm = async(e) => {
        e.preventDefault()

        try {
            setError("")
            setSuccess("")
            setLoading("Loading please Wait")
            

            const data = new FormData()
            data.append("product_name",product_name)
            data.append("product_desc",product_desc)
            data.append("product_cost",product_cost)
            
            data.append("product_photo",product_photo)
            data.append("genre",genre)
            const response = await axios.post("https://readmore.pythonanywhere.com/api/addproduct",data)

            setLoading('')
            setSuccess(response.data.success)
            setProductName("")
            setProductDesc("")
            setProductCost("")
            setGenre("")
            fileinputref.current.value=""

        } catch (error) {
            setLoading("")
            setError(error.message)
            setSuccess("")


            
        }
    }


    return ( 
        <div className=" row justify-content-center">
                <Navbar/>
            <div className="card shadow col-md-6">
                <h2>AddBook</h2>

                <b className="text-warning">{loading}</b>
                <b className="text-danger">{error}</b>
                <b className="text-success">{success}</b>
                <form onSubmit={submitForm}>
                    <input type="text" required placeholder="Book name"  className="form-control" 
                    onChange={(e) =>setProductName (e.target.value)} value={product_name}/>
                    <br />
                    <input type="text" required placeholder="Book description" className="form-control"
                    onChange={(e) =>setProductDesc(e.target.value)} value={product_desc} />
                    <br />
                    <input type="number" required placeholder="Book cost" className="form-control"
                    onChange={(e) =>setProductCost(e.target.value)} value={product_cost} />
                    <br />
                    <input type="text" required placeholder="Genre" className="form-control" 
                    onChange={(e) =>setGenre(e.target.value)} value = {genre}
                    />
                    <br />
                    <input type="file" required 
                    ref={fileinputref}
                    placeholder="Book Photo" className="form-control" 
                    onChange={(e)=>setProductPhoto(e.target.files[0])}  files={product_photo}/> 
                    <br />
                    <button className="btn btn-primary">Add book</button>

                </form>
            </div>
        </div>
     );
}
 
export default AddProducts;