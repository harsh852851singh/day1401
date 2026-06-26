const express =require("express")

const app = express();

let students =[
    {id :1, name: "gaurav", city:" sahjanwa"},
    {id :2, name: "yadav", city:" sahjanwa"},

];

app.use(express.json());

app.get("/",(req,res) => {
    res.send("API IS RUNNING");
});

app.get("/students",(req,res)=>{
    res.json({
        message:"All students",
        data:students
    })
});

app.post("/students",(req,res)=>{
    const { id , name ,city } =req.body;
    const newstudent = {id, name ,city};
    students.push(newstudent);
    res.json({
        message:"Record is Added",
        student:newstudent,
        data:students
    })



});

app.listen(3004,()=>{
    console.log("Hello Server is started");
});