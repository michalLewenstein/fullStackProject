import { configureStore } from "@reduxjs/toolkit"
import userDetailsReducer from '../slices/userSlice'

export const store = configureStore({
    reducer:{
        //user=שם שקראנו לקטע של המשתמשים המאוחסנים בstor 
        //כותבים את השם שהגדרנו בתוספת reducer
        userDetails : userDetailsReducer,
    },
}) 