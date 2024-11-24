import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {logInUser, signUpUser} from '../services/userServices'

//=====login
export const login = createAsyncThunk("user/login", async(newUser)=>{
  try{
    const userData = await logInUser(newUser);
   return userData.data;
  }
  catch(err){
    return rejectWithValue(err.response.data.message);
  }
  // const userData= await logInUser(newUser);
  // return userData;

})
//=====signup
export const signup = createAsyncThunk("user/signup", async(newUser)=>{
  const userData = await signUpUser(newUser);
  return userData
})

const initialState = {
    user: null, // נתוני המשתמש, יתחילו כ-null עד שהמשתמש יתחבר
    isConected: false, // האם המשתמש מחובר
    loading : false,
    error : null
  }

  export const userSlice = createSlice({
    //שם שנותנים לחתיכה זו כדי להשתמש בה בstor
    name: 'userDetails',
    initialState,
    reducers:{
    logout : (state ) =>{
      state.isConected = false;
      state.user = null;
    },
    },
   extraReducers:(builder) =>{
    builder
    //==========login
    //הפעולה הסתיימה
    .addCase(login.fulfilled, (state, actions)=>{
      state.user=actions.payload;
    })
    //אמצע הפעלה
    .addCase(login.pending, (state)=>{
      //פותח מצב טעינה
     state.loading = true;
     //איפוס הודעת שגיאה במידה ונשארה ההודעה הקודמת
     state.error = null
    })
    //טיפול במצב בו הפעולה נכשלה
    .addCase(login.rejected, (state, action)=>{
      state.loading = false;
      state.error = action.error.message;
    })
    //==========signup
    .addCase(signup.fulfilled, (state, action)=>{
      state.user=action.payload
    })
    .addCase(signup.pending, (state)=>{
      state.loading=true;
      state.error=null;
    })
    .addCase(signup.rejected, (state , action)=>{
      state.loading=false;
      state.error=action.error.message;
    })
   }
  })

  //ייצוא אקשנים-פעולות
  export const { logout} = userSlice.actions

  //יצוא רדוסר
  export default userSlice.reducer