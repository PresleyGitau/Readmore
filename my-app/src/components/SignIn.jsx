import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
const SignIn = () => {
    let [username,setUsername] = useState("")
    let[password,setPassword] = useState("")
    let[loading,setLoading] = useState("")
    let[success,setSuccess] = useState("")
    let[error,setError] = useState("")
    const navigate = useNavigate()
    const submitForm = async (e) =>{
        e.preventDefault();
        try {
            setError("")
            setSuccess("")
            setLoading("loading please wait")
            const data = new FormData()
            data.append('username', username)
            data.append("password", password)

            const response = await axios.post("https://readmore.pythonanywhere.com/api/signin",data)
            if(response.data.user){
                localStorage.setItem("user",JSON.stringify(response.data.user))
                navigate("/")
            }else {
                setError(response.data.message);
            }
            
        } catch (error) {
            setLoading("")
            setError("Something went wrong")
            
        }
    }

    const togglePassword = () => {
        const passwordInput = document.getElementById("password")
        const icon = document.getElementById("icon")
        let current_type = passwordInput.getAttribute("type")
        let new_type = ""
        if(current_type ==="password"){
            new_type = "text"
            icon.classList.remove("bi-eye-fill")
            icon.classList.add("bi-eye-slash-fill")
        }else{
            new_type = "password"
        }
        passwordInput.setAttribute("type",new_type)
    }




    
    return ( 
        <div className=" row justify-content-center ">
                <Navbar/>
            <div className="card shadow col-md-6">
                <h2>Sign In</h2>
                <b className="text-warning">{loading}</b>
                <b className="text-danger">{error}</b>
                <b className="text-success">{success}</b>
                <form onSubmit = {submitForm}>
                    

                    <input type="text"  required placeholder = "Enter your username"className="form-control"onChange={(e)=>setUsername(e.target.value)}  value = {username} />
                    <br />
                    <div className="input-group">
                    <input type="password" required placeholder="Enter your Password" 
                    id="password"
                    className="form-control"onChange={(e)=>setPassword(e.target.value)}  value = {password} />
                    <span className="input-group-text" onClick={togglePassword}><i  id="icon"class="bi bi-eye-fill"></i></span>
                    </div>
                        <br />
                    <button className="btn btn-primary" type="Submit">Sign In</button>

                </form>
                <p>Do not have an account? <Link to = "/signup">Signup</Link></p>




            </div>
        </div>
     );
}
 
export default SignIn;