import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom"
import Navbar from "./Navbar"


const SignUp = () => {


   
        let [username, setUsername] = useState("")
        let[email, setEmail] = useState('')
        let[phone, setPhone]=useState("")
        let[password, setPassword]=useState("")
        let [genre,setGenre] = useState("")
        let[loading,setLoading] = useState("")
        let[error,setError]=useState("")
        let[success,setSuccess]=useState("")

        const submitForm = async (e)=> {
            e.preventDefault();
            try {
               setLoading('Please wait as we upload your data') 
    
               const data = new FormData()
               data.append("username",username)
               data.append("email",email)
               data.append('phone',phone)
               data.append('password',password)
               data.append("genre",genre)
    
               const response = await axios.post(
                   "https://readmore.pythonanywhere.com/api/signup",
                   data);
    
                   setLoading("")
                   setError("")
                   setSuccess(response.data.success)
                   setUsername("")
                   setEmail('')
                   setPhone("")
                   setPassword("")
                   setGenre("")
            } catch (error) {
                setLoading('');
                setError(error.message);
            }
    
    }


    return (
        <div className="row justify-content-center pt-4">

            <div className="card shadow col-md-6">
                <Navbar/>
                <form onSubmit ={submitForm}>
                    <h2>Sign up form</h2>
                    <b className="text-warning">{loading}</b>
                    <b className="text-danger">{error}</b>
                    <b className="text-success">{success}</b>
                    <input type="text" required placeholder="Enter username" className="form-control"onChange={(e)=>setUsername(e.target.value)}  value = {username} /> 
                    <br />
                    <input type="email" required placeholder="Enter your email" className="form-control"onChange={(e)=>setEmail(e.target.value)} value = {email} />
                    <br />
                    <input type="tel" required placeholder="Enter your telephone number" className="form-control"onChange={(e)=>setPhone(e.target.value)} value = {phone} />
                    <br />
                    <input type="password" required placeholder="Enter your password" className="form-control"onChange={(e)=>setPassword(e.target.value)} value={password} />
                    <br />
                    <select name=""  required id="" className="form-control">
                        <option value="">Choose your favourite genre</option>
                        <option value="">Romance</option>
                        <option value="">Mystery</option>
                        <option value="">Murder</option>
                        <option value="">Action</option>
                        <option value="">Comedy</option>
                        onChange={(e)=>setGenre(e.target.value)} value = {genre}
                    </select>
                    <br />
                    <button className="btn btn-primary" type = "submit">Sign Up</button>
                    <br />
                    <p>Do you have an account? <Link to = "/signin">SignIn</Link></p>
                
                </form>
            </div>

        </div>
    );
}

export default SignUp;