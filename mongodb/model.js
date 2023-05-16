const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://akshaymr8592:9946275C@cluster0.mzu8jji.mongodb.net/?retryWrites=true&w=majority")

//SCHEMA CREATION
let Schema = mongoose.Schema;

const studentSchema = new Schema({
    sname:String,
    sgrade:Number
});

var studemodel = mongoose.model("students",studentSchema);

module.exports=studemodel;