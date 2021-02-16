import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

const ProfileDisplay = () => {

  const [profile, setProfile] = useState('');
  const {key} = useParams();

  console.log(profile);
  
  //Test push login to display data
  useEffect(() => {
  const API_BASE_URL = "http://localhost:1337/auth/local";

  const payload = {
    identifier: "kentsbrockman",
    password: "123456"
  };

  fetch(API_BASE_URL, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
    })
    .then(response => {
      if (response.status === 200) {
        response.json()
        .then(data => {
          console.log(data)
          setProfile(data.user)
        })
      } else {
        console.log("LoginFetch - Unexpected error - No response from the endpoint.")
      }
    })
  .catch(error => {
    console.error(error);
  });
}, [key]);

  return (
    <>
      <h1>Coucou user connecté 🔥</h1>
      <p>Id: {profile.username}</p>
    </>
  );
};

export default ProfileDisplay;