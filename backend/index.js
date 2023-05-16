// importing express
const express =require("express")

// 2 initialising
const app = new express();

app.use(express.urlencoded({extended:true}));
app.use(express.json()); 

//3 api creation

app.get('/',(req,res)=>{
     res.json("heloo welcome to backend")
}
)
 app.get('/u',(req,res)=>{
    res.json(" welcome to frontend")
 }
 )
 app.post('/signup',(req,res)=>{
    console.log("post")
    res.json(req.body.age)
 })

// 4.setting port
app.listen(3006,()=>{
    console.log("port 3005 is running")
})