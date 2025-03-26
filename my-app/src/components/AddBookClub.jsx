import axios from "axios";
import { useEffect, useRef, useState } from "react";
import {  useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const AddBookClub = () => {


  let [club_name, setClubName] = useState("");
  let [club_description, setClubDescription] = useState("");
  let [meeting_times, setMeetingTimes] = useState("");
  let [contact_email, setContactEmail] = useState("");
  let [club_image, setClubImage] = useState(null);

  const navigate = useNavigate();
  const user = localStorage.getItem("user");

  useEffect(() => {
      if (!user) {
          localStorage.clear();
          navigate("/signin");
      }
  }, [user, navigate]);

  let fileInputRef = useRef(null);
  let [loading, setLoading] = useState("");
  let [error, setError] = useState("");
  let [success, setSuccess] = useState("");

  const submitForm = async (e) => {
      e.preventDefault();

      try {
          setError("");
          setSuccess("");
          setLoading("Loading, please wait...");

          const data = new FormData();
          data.append("club_name", club_name);
          data.append("club_description", club_description);
          data.append("meeting_times", meeting_times);
          data.append("contact_email", contact_email);
          data.append("club_image", club_image);

          const response = await axios.post("https://readmore.pythonanywhere.com/api/addbookclub", data);

          setLoading("");
          setSuccess(response.data.success);
          setClubName("");
          setClubDescription("");
          setMeetingTimes("");
          setContactEmail("");
          fileInputRef.current.value = "";
      } catch (error) {
          setLoading("");
          setError(error.message);
      }
  };

  return ( 
    
          <div className="row justify-content-center">
            <Navbar/>
          <div className="card shadow col-md-6">
              <h2>Add Book Club</h2>
              <b className="text-warning">{loading}</b>
              <b className="text-danger">{error}</b>
              <b className="text-success">{success}</b>
              <form onSubmit={submitForm}>
                  <input type="text" required placeholder="Book Club Name" className="form-control" 
                      onChange={(e) => setClubName(e.target.value)} value={club_name} />
                  <br />
                  <input type="text" required placeholder="Description" className="form-control" 
                      onChange={(e) => setClubDescription(e.target.value)} value={club_description} />
                  <br />
                  <input type="text" required placeholder="Meeting Times" className="form-control" 
                      onChange={(e) => setMeetingTimes(e.target.value)} value={meeting_times} />
                  <br />
                  <input type="email" required placeholder="Contact Email" className="form-control" 
                      onChange={(e) => setContactEmail(e.target.value)} value={contact_email} />
                  <br />
                  <input type="file" required ref={fileInputRef} className="form-control" 
                      onChange={(e) => setClubImage(e.target.files[0])} />
                  <br />
                  <button className="btn btn-primary">Add Book Club</button>
              </form>
          </div>
      </div>
   );
}
 
export default AddBookClub; 