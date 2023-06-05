let express = require('express')
let app = express()
let PORT = 3000

app.listen(PORT,function(){
    console.log('Server started with PORT 3000')
})

app.get('/',function(req,res){
    res.send('Success')
})

app.get('/home',(req,res)=>{
    res.json({
        message: 'home success'
    })
})

app.post('/login',function(req,res){
    res.json({
        message: 'login success'
    })
})

//Export the express api
module.exports = app

