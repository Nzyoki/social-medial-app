import React from 'react';
import ReactDOM from 'react-dom';
import{ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; //css file for the toastify package

function Notifications() {

    const notifications=[
        "New friend request",
        "New message",
        "New follower",
        "Someone Commented on your post"
    ];
  return (
    <div className="Notifications">
        <h2>Notifications</h2>
        <ul>
            {notifications.map((notifications, index)=>(
                <li key={index}>{notifications}</li>
                ))}
        </ul>
    </div>
  );
}
export default Notifications;
