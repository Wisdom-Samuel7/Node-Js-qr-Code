const qrcode = require("qrcode")
const app = require("express")()
const fs = require("fs")

/*const data = {
  email: 'wisdomsamuel349@gmail.com',
  password: '$2a$10$7vY9eYjTIilYgLlTMrW13.KLqT/VZ1H41DL8VwS1vEw4RQlQ33khi',
  // _id: new ObjectId("651eface473f81c7eda28d82")
} */

const data = "https://www.google.com"

const str = JSON.stringify(data)

app.get("/",async (res,req)=>{
  try{
 await qrcode.toString(data,(err,code) =>{
    try{
      console.log(code)
    }catch(err){
      console.log(err)
    }
  
     })
     
  }catch(err){
    console.log(err)
    
  }

})


app.listen(2000,()=>{console.log("Qrcode On server port 2000")})