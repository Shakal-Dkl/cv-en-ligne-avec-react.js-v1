import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Profile = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch("https://api.github.com/users/github-john-doe");
    const json = await response.json();
    setUsers(json);
  }

  useEffect(() => {
    getUsers();
   
  },[])


  

  return (
    <div>
      <Header />
      <main>
        <h1>Github user</h1>
        <h2>{users.name}</h2>
        <img src={users.avatar_url} alt={`${users.name}'s avatar`} width="200" />
        <p>{users.bio}</p>
        <p>Abonnés: {users.followers}</p>
        <p>Abonnements: {users.following}</p>
        <p>Créé le le: {users.created_at}</p>
        <p>Modifié le: {users.updated_at}</p>
        <Link to>URL repositories: {users.html_url}</Link>
      </main>
      <Footer/>
    </div>
  );
};

export default Profile;