import axios from 'axios';
import {   BASE_URL } from './Constant'

const config = {
    headers : {
        "Content-type" : "application/json",
        "Accept"  : "application/json"
    }
}

export const callApi= async(resource) =>{
    const {data} = await axios.get(`${BASE_URL}/${resource}`,config ); 
    return data;    


}