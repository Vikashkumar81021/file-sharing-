import axios from 'axios'
const apI_URL="http://localhost:3000"
export const uploadFile=async(data)=>{
    
 try {
     let resp= await axios.post(`${apI_URL}/upload`,data)
     return resp.data
 } catch (error) {
    console.log("While calling Api",error.message);
 }
}