import Footer from "./Footer";
import Navbar from "./Navbar";
import Carousel from "./Carousel";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const BookClub = () => {
    let [bookClubs, setBookClubs] = useState([]);
    let [error, setError] = useState("");
    let [loading, setLoading] = useState("");

    const img_url = 'https://readmore.pythonanywhere.com/static/Images/';
    const navigate = useNavigate();

    const getBookClubs = async () => {
        setError("");
        setLoading('Loading please wait....');

        try {
            const response = await axios.get("https://readmore.pythonanywhere.com/api/getbookclubs");
            setLoading("");
            console.log("API Response:", response.data);
            setBookClubs(response.data);
        } catch (error) {
            setLoading("");
            setError(error.message);
            console.error("Fetch error:", error);
        }
    };

    useEffect(() => {
        getBookClubs();
    }, []);

    useEffect(() => {
        console.log("Book Clubs:", bookClubs);
    }, [bookClubs]);

    return ( 
        <div className="container-fluid">
        <Navbar />
        <Carousel />
        <h2>Available Book Clubs</h2>
        <b className="text-warning">{loading}</b>
        <b className="text-danger">{error}</b>
        <div className="row">
            {bookClubs.map((club, index) => (
                <div key={club.id || index} className="col-md-3 justify-content-center mb-4">
                    <div className="card shadow">
                        {console.log("Image URL:", img_url + club.club_image)}
                        <img src={img_url + club.club_image} alt="Book Club" className="product_img mt-4" />
                        <div className="card-body">
                            <h5 className="mt-2">{club.club_name}</h5>
                            <p className="text-muted">{club.club_description.slice(0, 50)}...</p>
                            <b className="text-warning">Meeting Times: {club.meeting_times}</b>
                            <p>Contact: {club.contact_email}</p>
                            <button className="btn btn-dark w-100"
                                onClick={() => navigate("/singlebookclub", { state: { club } })}
                            >View Book Club</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        <Footer />
    </div>
       
                
         
     );
}
 
export default BookClub;