const Footer = () => {
    return ( 
        <div>
            <section className="row bg-dark p-4">
    <div className="col-md-4 text-light">
        <h2>About Us</h2>
       <p>Welcome to READMORE BOOKCLUB where we offer both available bookclubs and available books that you can purchase and read both online and physically</p>
       <p>Exploring the activities and selections of the ReadMore Book Club can provide insightful content for your writing. This informal group, the longest-running at the Loveland Public Library, convenes on the second Wednesday of each month from 10:00 to 11:30 a.m. in the Erion Room. They delve into a diverse array of literary fiction and nonfiction, fostering lively discussions among passionate readers. </p>
    </div>
    <div className="col-md-4 text-light">
        <h2>Leave a comment</h2>
        <form action="">
            <input type="email" placeholder="Enter your email" className="form-control"/><br/>
            <textarea placeholder="Leave a comment" rows="7" className="form-control"></textarea>
            <br/>
            <input type="submit" value="send message" className="btn btn-outline-danger"/>
        </form>
    </div>

    <div className="col-md-4">
        <h4 className="text-center text-light">Stay connected</h4>
        <br/>
        <a href="htts://facebook.com"><img src="Images/fb.png" alt=""/></a>
        <a href="https://instagram.com"><img src="Images/in.png" alt=""/></a>
        <p className="text-light">Online Book Club: A free online community boasting over 5 million members, offering features like original reviews, book tracking, and discussion forums</p>
        <p className="text-light">We are loacated <br />
        at Nuria bookstore bazzar plaza <br />
        Nairobi,Kenya</p>

    </div>
    </section>
    <footer className="bg-dark text-white text-center p-2">
        <h5>Developed by E.Presley &copy; 2025. All rights reserved</h5>
    </footer>

        </div>
     );
}
 
export default Footer;