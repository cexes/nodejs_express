const { Console } = require('console')
const express = require('express')
const app =  express()
const port = 300
const path = require('path')

const basePath = path.join(__dirname,'templates')

const checkAtuh = function(req,res,next){

     req.authStatus = true
      if(req.authStatus){
        console.log('Está logado')
        next()
      }else{
        console.log('Não esta. Passe por login para continuar')
      }
}

 app.use(checkAtuh )
 app.get('/',(req, res)=>
 
   {
      res.sendFile(`${basePath}/index.html`)
   }
 )

 app.listen(port,()=>
 
     {
         console.log('Aplicação rodando na porta 300')
     }
 
 
 
  )