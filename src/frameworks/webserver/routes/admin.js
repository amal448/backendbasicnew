import { Router } from "express";

export default function adminrouter(){
    const router=Router()
    
    router.get('/',(req,res)=>{
        res.json({message:"This is my response"})
    })
}