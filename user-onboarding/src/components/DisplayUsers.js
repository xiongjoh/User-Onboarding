import React from "react";

export default function DisplayUsers({userDetails}) {

    return (
        <div className="user container">
            <h2>{userDetails.name}</h2>
            <p>Role: {userDetails.role}</p>
            <p>Email: {userDetails.email}</p>
            <p>Password: {userDetails.password}</p>
        </div>
    )
}