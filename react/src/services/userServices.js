import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080/api/users';

axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
axios.defaults.headers.post['Accept'] = 'application/json';


//logIn
export const logInUser = async (user) => {
    try {
        const response = await axios.post('/logIN', user);
        console.log('responseAxios', response);
        return response.data;
    } catch (err) {
        console.log('err', err);
        throw err;
    }
};

//signup
export const signUpUser = async (user) =>{
    try{
        const response = await axios.post('/signup', user)
        console.log('responseAxios', response);
        return response.data;
    }
    catch(err){
        console.log('err', err);
        throw err;
    }
}