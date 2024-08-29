import express from 'express'


const app = express()
const PORT= 3000


app.get('/message',(req,res)=>{

    res.json({message:'Hello, World!'})
})


app.listen(PORT,()=>{

    console.log("server starte on port ", PORT)
})