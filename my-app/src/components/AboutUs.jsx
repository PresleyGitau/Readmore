import Navbar from "./Navbar";
import Footer from "./Footer";


const AboutUs = () => {
    return ( 
        <div className="container-fluid">
            <Navbar />
            <div className="container mt-5">
                <h2 className="text-center">About Read More Book Club</h2>
                <p className="text-muted text-center">A place for book lovers to connect, explore, and share.</p>
                
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card shadow p-4">
                            <p>
                                Welcome to <strong>Read More Book Club</strong>, where we bring together book enthusiasts from all walks of life. 
                                Whether you're a casual reader or a literary aficionado, our club is designed to create an engaging, welcoming 
                                environment for everyone.
                            </p>
                            <h4>Our Mission</h4>
                            <p>
                                Our mission is to foster a love for reading and intellectual discussions. We explore various genres, 
                                host book discussions, and organize meet-ups to connect with fellow book lovers.
                            </p>
                            <h4>What We Offer</h4>
                            <ul>
                                <li>Monthly book discussions</li>
                                <li>Guest author sessions</li>
                                <li>Virtual and physical meetups</li>
                                <li>Community book recommendations</li>
                            </ul>
                            <h4>Join Us</h4>
                            <p>
                                Become a member today and dive into the world of books with like-minded individuals! 
                                Contact us at <strong>info@readmorebookclub.com</strong> for more details.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
     );
}
 
export default AboutUs;