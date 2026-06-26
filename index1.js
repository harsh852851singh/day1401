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

// update the data

app.put("/students/:id",(req,res) =>{
    //const id = req.body.parameter.id
    const{id} =req.params;
    const student =students.find(s => s.id ==id);
    //if student found =value...
    if(!student){
        return res.status(404).json({
            message:"students record founded"
        });
    }
    student.name =req.body.name;
    student.city =req.body.city;

    res.json({
        message:"record are updated",
        student
    });


});

app.delete("/students/:id",(req,res)=>{
    const id = req.params.id;
    const student = students.find(s => s.id ==id);
    if(!student){
        return res.status(404).json({
            message:"invalid id "
        });
    }
    students =students.filter(s => s.id !=id);
        res.json({
            message:"record deleted",
            students
        })
});






app.listen(3004,()=>{
    console.log("Hello Server is started");
});