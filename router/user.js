import express from "express"
import { addUser, getUser,deleteUserById ,updateUserById,getUserById} from "../controller/user.js"
const router=express.Router()
router.get("/",getUser)
router.get("/:id", getUserById)
router.post("/", addUser)
router.delete("/:id", deleteUserById)
// router.put()
router.put("/:id", updateUserById)
export default router
