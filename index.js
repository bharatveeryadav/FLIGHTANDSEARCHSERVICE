const express =require('express')
const {PORT} = require('./src/config/serverConfig')
 
const setupAndStartServer =async() =>{
    const app =express()
    
    app.listen(PORT,()=>{
        console.log(`Server is running on port ${PORT}`)
    })
        
}

setupAndStartServer()