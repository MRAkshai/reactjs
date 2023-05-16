//1. import
const  express =require('express');
const studemodel = require('./model');
const cors = require('cors')
//2. intialisation
const app = new express();

//middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors())

//3 app
//to post data
app.post('/create',(req,res)=>{
   var result = new studemodel(req.body)// passing data
    result.save()
    res.send("data added");
});
// to view data 
app.get('/view',async(req,res)=>{
    var data = await studemodel.find();
    res.json(data);
})
//delete
app.delete('/delete/:id',async(req,res)=>{

    var id =req.params.id;
    await studemodel.findByIdAndDelete(id);
    res.send("deleted")

})
app.put('/put/:id',async(req,res)=>{
    let id = req.params.id
    await studemodel.findByIdAndUpdate(id,req.body);
    res.send("updated")

    
})

//4.port
app.listen(3005,()=>{
    console.log("port is running");

}
    )