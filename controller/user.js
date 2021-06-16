import { User } from "../model/user.js"
var name="Rahul"

export const getUser=(req, res)=>{
    if(req.query.age){
        getUserByAge(req,res)
    }else{
        console.log("I am in getUser function")
        User.find()
            .then(
                (result)=>{
                    res.status(200).send(result)
                }
            )
            .catch(
                (err)=>{
                    res.status(500).send(err.message)
                }
            )
        
    }
   
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
export const deleteUserById=(req, res)=>{
    User.findByIdAndDelete(req.params.id)
        .then(
            result=>{
                res.status(200).send(result)
            }
        )
        .catch(
            (err)=>{
                res.status(500).send(err.message)
            }
        )
}
export const updateUserById=(req, res)=>{
    User.findByIdAndUpdate(req.params.id,{
        age:req.body.age,
        name:req.body.name,
        gender:req.body.gender
    })
        .then(
            result=>{
                res.status(200).send(result)
            }
        )
        .catch(
            (err)=>{
                res.status(500).send(err.message)
            }
        )
}
export const getUserById=(req, res)=>{
    User.findById(req.params.id)
    .then(
        result=>{
            res.status(200).send(result)
        }
    )
    .catch(
        (err)=>{
            res.status(500).send(err.message)
        }
    )
}
export const getUserByAge=(req, res)=>{
    User.aggregate(
        [{$sort:{age:1}}]
    ).then(
        result=>{
            res.status(200).send(result)
        }
    )
    .catch(
        (err)=>{
            res.status(500).send(err.message)
        }
    )
}