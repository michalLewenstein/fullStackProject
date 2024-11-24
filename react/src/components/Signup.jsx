import React,{useState} from "react";
import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
import {signup} from '../slices/userSlice'


export default function Signup(){
const dispatch=useDispatch();
const navigate = useNavigate();
const [userName, setUserName]=useState('');
const [userPassword, setUserPassword]=useState('');
const [userEmail, setUserEmail]=useState('');
const [userWriter, setUserWriter]=useState('');
const [userImage, setUserImage]=useState('');

const handleSubmit = async(e) =>{
    e.preventDefault();
    if(!userName||!userPassword||!userEmail||!userWriter){
        alert("אלו שדות חובה!")
        return
    }
 const newUser ={
    name : userName,
    password : userPassword,
    email : userEmail,
    writer : userWriter,
    image : userImage
 }
        

    dispatch(signup(newUser))
    .then(result =>{
       if(result.meta.requestStatus==="fulfilled")
        navigate('/kk')
    })
    .catch(err=>{
      console.log("err",err);
    })

};
// catch (err) {
// if(err.status===409){
// alert("השם משתמש כבר קיים במערכת")}
// else{
// alert("!!!!!!!!!!!!!!!!!!!!!!!!!!!")}
// }
// };

return (
    <form onSubmit={handleSubmit} style={{ color: 'white' }}>
      <div>
        <label>שם משתמש</label>
        <input 
          type="text" 
          value={userName} 
          onChange={(e) => setUserName(e.target.value)} 
        />
      </div>
      <div>
        <label>סיסמה</label>
        <input 
          type="password" 
          value={userPassword} 
          onChange={(e) => setUserPassword(e.target.value)} 
        />
      </div>
      <div>
        <label>מייל</label>
        <input 
          type="mail" 
          value={userEmail} 
          onChange={(e) => setUserEmail(e.target.value)} 
        />
      </div>
      <div>
        <label>האם כותב</label>
        <input 
          type="text" 
          value={userWriter} 
          onChange={(e) => setUserWriter(e.target.value)} 
        />
      </div>
      <div>
        <label> תמונת משתמש</label>
        <input 
          type="file" 
          value={userImage} 
          onChange={(e) => setUserImage(e.target.files[0])} 
        />
      </div>
      <button type="submit">הרשם</button>
    </form>
  );

}