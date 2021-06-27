import express from "express"

import { addUser, getUser } from "../controller/user.js"
//making router var to be able to use get,post http methods. all methods are availbl.
const router=express.Router()
//here inside router.get fun we can give url here our url is localhost="/"=root
router.get("/name",getUser)
//localhos:8080/user/name url for http get
router.post("/", addUser)  //localhos:8080/user url for http post


//this router we need to use in index.js file
export default router;