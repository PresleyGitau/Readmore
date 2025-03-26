import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";

import axios from "axios";
import { useState } from "react";

const SingleProduct = () => {
    const {product} = useLocation().state|| {};
    const img_url = "https://readmore.pythonanywhere.com/static/images/"



    let [phone,setPhone] = useState("")
    let [loading,setLoading] = useState("")
    let [error,setError] = useState("")
    let [success,setSuccess] = useState("")

    const submitForm = async (e) =>{
        e.preventDefault()
        setError("")
        setSuccess("")
        setLoading("Please wait....processing payment..")
        try {
            const data = new FormData()
            data.append("amount",product.product_cost)
            data.append("phone",phone)

            const response = await axios.post("https://readmore.pythonanywhere.com/api/mpesa_payment",data)
            setLoading("")
            setSuccess(response.data.message)
        } catch (error) {
            setLoading("")
            setError(error.message)
        }
    }
    return ( 
        <div className="row justify-center mt-3">
            <Navbar/>
            <div className="col-md-3 card shadow">
            <img src={img_url + product.product_photo} alt={product.product_name} />
            </div>
            <div className="col-md-3 card shadow">
                <h2>{product.product_name}</h2>
                <button className="btn btn-primary">KSH{product.product_cost}</button>
                <p className="text-muted">{product.product_desc}</p>
                <b className="text-warning">{loading}</b>
                <b className="text-danger">{error} </b>
                <b className="text-success"> {success} </b>
                <form onSubmit={submitForm}>
                    <input type="number" readOnly value={product.product_cost} className="form-control" /><br />
                    <input type="tel" required placeholder="Enter Mpesa No 254XXXXXXXX" className="form-control" onChange = {(e)=>setPhone(e.target.value)} /> <br/>
                    <button className="btn btn-primary">Pay Now</button>
                </form>

            </div>
        </div>
     );
}
 
export default SingleProduct;