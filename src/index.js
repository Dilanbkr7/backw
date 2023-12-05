const express = require("express") //invocar la libreria
const app = express() // crear instancia
const port = 3000


//CREAR UN MIDDLEWARE
app.use((req,res,next)=>{
    const {email,password} = req.body
    if (email ==="byron@gmail.com" && password==="12345"){
        next()
    }
    else{
        res.send("Usuario no registrado")
    }
})
app.get('/pedido',(req,res)=>{
    res.send(`Bienvenido -${req.body.email}- Listo para tomar su orden`)
})
app.listen(3000)