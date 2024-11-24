// import React, {useState} from 'react'
// import { useDispatch } from 'react-redux'
// import { login } from '../slices/userSlice';
// import  {logInUser}  from '../services/userServices';
// import { useNavigate } from "react-router-dom";

// export default function Login(){
// const dispatch = useDispatch('');
// const [userName, setUserName] = useState('');
// const [userPassword, setUserPassword] = useState('');
// const navigate = useNavigate();

// const handleSubmit = async (e) => {
//     e.preventDefault();
//     if(!userName || !userPassword){
//         alert("שדות אלו הם חובה");
//         return;
//     }
//     const newUser = {
//         name : userName,
//         password : userPassword
//     };

//     try{
//         const response = await logInUser(newUser);
//         if(response.status=== 200){
//       // עדכון ה-state ב-Redux עם פרטי המשתמש ןהסטטוס
//         dispatch(login({user:response.user , isConected: true}));
//         navigate('/kk')}


// }
// catch (err) {
//   if(err.status===404){
//     alert("השם משתמש לא קיים במערכת")}
//   else if(err.status===409){
//      alert("הסיסמה לא נכונה!!!!!")}
//   else{
//    alert("!!!!!!!!!!!!!!!!!!!!!!!!!!!")}
// }
// };

// return (
//     <form onSubmit={handleSubmit} style={{ color: 'white' }}>
//       <div>
//         <label>שם משתמש</label>
//         <input 
//           type="text" 
//           value={userName} 
//           onChange={(e) => setUserName(e.target.value)} 
//         />
//       </div>
//       <div>
//         <label>סיסמה</label>
//         <input 
//           type="password" 
//           value={userPassword} 
//           onChange={(e) => setUserPassword(e.target.value)} 
//         />
//       </div>
//       <button type="submit">התחבר</button>
//     </form>
//   );
// }

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../slices/userSlice";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import "../styles/login.css";
import { Link } from 'react-router-dom';
import { Password } from "@mui/icons-material";



export default function Login() {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const navigate = useNavigate();

  // const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userName || !userPassword) {
      alert("שדות אלו הם חובה");
      return;
    }
    // setIsLoading(true); // מפעיל מצב טעינה

    const newUser = {
      name: userName,
      password: userPassword
    }
    //   try{
    //         const response = await logInUser(newUser);
    //         if(response.status=== 200){
    //       // עדכון ה-state ב-Redux עם פרטי המשתמש ןהסטטוס
    //         dispatch(login({user:response.user , isConected: true}));
    //         navigate('/kk')
    //       }
    //          }
    //   catch (err) {
    //   if(err.status===404){
    //     alert("השם משתמש לא קיים במערכת")
    //   }
    //   else if(err.status===409){
    //      alert("הסיסמה לא נכונה!!!!!")
    //     }
    //   else{
    //    alert("!!!!!!!!!!!!!!!!!!!!!!!!!!!")}
    // }
    //קריאה לפונקציה האנסיכרונית
    dispatch(login(newUser))
      .then((result) => {
        //במידה והבקשה הוצלחה
        if (result.meta.requestStatus === "fulfilled")
          navigate('/KK');
      })
      .catch((err) => {
        // if (err.statuse === 404)
        //   alert("השם משתמש לא קיים במערכת")
         if (err.statuse === 409)
          alert("הסיסמה לא נכונה!!!!!")
        // else
        //   alert("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
        console.log("err",err)
      })
  };

  return (
    <div className="container">
      <div className="image-container">
        <img src="/images/book2.jpg" alt="Books" />
      </div>
      <div className="form-container">
        <CssBaseline />
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          התחבר
        </Typography>
        <form onSubmit={handleSubmit} noValidate>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="שם משתמש"
            name="username"
            autoFocus
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="סיסמה"
            type="password"
            id="password"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
          />

          <button type="submit">התחבר</button>
          <div style={{ display: "flex", justifyContent: "space-between" }}>

            <Link to="/Signup" variant="body2">
              {"אין לך חשבון? הירשם עכשיו"}
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
