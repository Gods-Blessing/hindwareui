import axios from "axios";

interface ApiCall{
    url: string,
    requestType: string
}


export const Fetching = async(url:string, requestType:string)=>{
    let response = await axios.get(url);
    // console.log(response);
    return response.data;
}

export const getALLdata = (url:string, reqType:string)=>{
    Fetching(url, reqType).then((data)=>{
        // console.log(data);
        return data;
    }).catch((error)=>{
        // console.log(error);  
    })    
}

export const GetData = (url:any, jsonData?:any)=>
    axios.get(url)
        .then(response => {
          // console.log('Response:', response.data);
        //   console.log(url);
        //   console.log(new Date().getMonth());
          
          
          return response.data
        })
        .catch(error => {
          // console.error('Error:', error);
          return error
        });





