const Carousel = () => {
    return ( 
        <section className="row">
        <div className="col-md-12">
            <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="Images/book4.jpg" alt="" className="d-block w-100"height="550px"/>
                    </div>
                    <div className="carousel-item">
                        <img src="Images/download.png" alt="" className="d-block w-100"height="550px"/>

                    </div>
                    <div className="carousel-item">
                        <img src="Images/idek.webp" alt="" className="d-block w-100" height="550px"/>
                        <div className="carousel-caption">
                            <h2>Believe in Yourself Paperback</h2>
                            <p>In Believe in Yourself, Dr. Murphy stresses about having faith in ones abilities, believing in the inner self and in having the courage to chase your dream, come what may</p>
                            <button className="btn-warning">Buy Now</button>
                        </div>
                    </div>
                </div>
                <a 
                href="#myCarousel" 
                className="carousel-control-prev"
                data-bs-slide="prev"
                ><span className="carousel-control-prev-icon"
                  

                ></span> </a>

                <a href="#myCarousel"
                 className="carousel-control-next"
                 data-bs-slide="next">
                 <span className="carousel-control-next-icon"></span>
                 
                 </a>
                 <ol className="carousel-indicators">
                    <li data-bs-target="#myCarousel" data-bs-slide-to="0" className="active"></li>
                    <li data-bs-target="#myCarousel" data-bs-slide-to="1"></li>
                    <li data-bs-target="#myCarousel" data-bs-slide-to="2"></li>
                 </ol>

            </div>
        </div>
     </section>
     );
}
 
export default Carousel;