import axios from "axios";
import { useState } from "react";


const Http =()=>{
    const[datas,PostData]=useState(
        {"userId":'',"title":'',"id":''}
    )
    async function fetchPosts()
    {
        try{
            const response=await axios.post("https://jsonplaceholder.typicode.com/posts",datas)
            if(! response.status===201)
            {
                throw new Error('Invalid response')
            }
            
        }catch(error)
        {
            console.log(error.message)
        }
        console.log("success");
    }
    const changeHandler = (e) => 
    {
        PostData( {...datas,[e.target.name]: e.target.value} )
    
    }
    return(
        <div>
            UserId:
            <input type="text" name="userId" value={datas.userId} onChange={changeHandler} /><br/>
            title:
            <input type="text" name="title" value={datas.title} onChange={changeHandler} /><br/>
            Id:
            <input type="text" name="id" value={datas.id} onChange={changeHandler}/><br/>
            <button onClick={fetchPosts}>Submit</button>
        </div>
    )

}
export default Http;