import Footer from "./Footer";
import Navbar from "./Navbar";
import Carousel from "./Carousel";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const GetProducts = () => {
    let[products,setProducts] = useState([])
    let [error,setError] = useState("")
    let[loading,setLoading] = useState("")
    let[filteredProducts,setFilteredProduct] = useState([])


    const img_url = 'https://readmore.pythonanywhere.com/static/images/'

    const navigate = useNavigate()
    const getProducts = async() =>  {
        setError("")
        setLoading('Loading please wait....')


        try {
            const response = await axios.get("https://readmore.pythonanywhere.com/api/get_products")
            setLoading("")
            console.log("API Response:", response.data);
            setProducts(response.data)
            setFilteredProduct(response.data)

        } catch (error) {
            setLoading("")
            setError(error.message)
            console.error("Fetch error:", error);
            

            
        }
    }

    const handleSearch= (value) =>{
        const filtered = products.filter((product)=>
        product.product_name.toLowerCase().includes(value.toLowerCase()))
        setFilteredProduct(filtered)
    }

    useEffect(() => {
        getProducts()
    },[])
    useEffect(() => {
        console.log("Products:", products);
    }, [products]); 

    return ( 
        <div className="container-fluid">
            <Navbar/>
            <Carousel/>
            <h2>Available books</h2>
            <b className="text-warning">{loading}</b>
            <b className="text-danger">{error}</b>
            <div className="row justify-content-center my-3">
                <div className="col-md-4">
                    <input type="text" placeholder="Search product by name" className="type form-control" onChange={(e)=>handleSearch(e.target.value)} />
                </div>
            </div>
            <div className="row">
            {filteredProducts.map((product,index)=>(
                <div key={product.id || index} className="col-md-3 justify-content-center mb-4">
                <div className="card shadow">
                {console.log("Image URL:", img_url + product.product_photo)}
                    <img src={img_url + product.product_photo} alt="" className="product_img mt-4" />
                    <div className="card-body">
                        <h5 className="mt-2">{product.product_name}</h5>
                        <p className="text-muted">{product.product_desc.slice(0, 10)}</p>
                        <b className="text-warning">Ksh {product.product_cost}</b>
                        <button className="btn btn-dark w-100"
                        onClick={()=> navigate("/singleproduct",{state: {product}})}
                        >View Product</button>
                    </div>
                </div>
            </div>
            ))}
            </div>
            <Footer/>
        </div>
        
     );
}
 
export default GetProducts;