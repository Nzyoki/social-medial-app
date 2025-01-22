import React,{ useState, useEffect} from "react";
import ReactDOM from "react-dom";
import axios from "axios";// used to make requests to an API
import profilepic from "./Profile pic.jpg";

function Profile() {
    const user={
        name: "Scolastica Nzyoki",
        email: "scolanzioki18@gmail.com",
        phone: "0710630996",
        bio:"I am a software developer",
        image: profilepic,
    }


  return (
    <div className="Profile">
        <img src={user.image} alt="Profile pic"  style={{width: "150px",height:"150px",borderRadius: "50%"}}/>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <p>{user.phone}</p>
        <p>{user.bio}</p>
    </div>
  );
}

export default Profile;