import {User} from "../model/user.js"

var name="Rahul"
export const getUser=(req,res)=>{
    console.log("I am in getUser function")
    User.find()
    .then(
        (result)=>{
            res.stauts(200).send(result)
        })
       .catch(
           (err)=>{
               res.status(500).send(err.message)
           }
       )
}


export const addUser=(req, res)=>{
    console.log("I am  in addUser function")
  const user=new User({
     name:req.body.name,
     age:req.body.age,
     gender:req.body.gender

  })
  user.save()
  .then(
      result=>{
      res.status(201).send(result)
      }

  )
  .catch(
      (err)=>{
        res.status(500).send(err.message)
      }
  )
    
}