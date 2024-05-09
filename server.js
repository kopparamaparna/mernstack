const express = require("express");
const cors = require("cors");
const { MongoClient} = require("mongodb"); 
const app = express();
app.use(cors());
app.use(express.json());

const upload = new MongoClient("mongodb+srv://aparnakopparam:aparna@aparna.pzq1tfc.mongodb.net/?retryWrites=true&w=majority&appName=aparna");

app.get("/posts", async (req, res) => {
    await upload.connect();
    let arr = await upload.db("one").collection("posts").find().toArray();
    res.json(arr);
});

app.post("/insert", async (req, res) => {
    await upload.connect();
    let res1 = await upload.db("one").collection("posts").insertOne({
        "p_id":parseInt(req.body.p_id),
        "title": req.body.title,
        "caption": req.body.caption,
        "content": req.body.content,
    });
    const { acknowledged } = res1;
    if (acknowledged) {
        res.json({ "message": "record inserted successfully" });
    } else {
        res.json({ "message": "record not inserted" });
    }
});
app.get("/details", async (req, res) => {
    await upload.connect();
    let arr = await upload.db("one").collection("details").find().toArray();
    res.json(arr);
});
app.post("/details", async (req, res) => {
    await upload.connect();
    let res1 = await upload.db("one").collection("details").insertOne({
        "name":req.body.name,
        "emailid": req.body.emailid,
        "Pwd": req.body.Pwd,
        "cpwd": req.body.cpwd,
    });
    const { acknowledged } = res1;
    if (acknowledged) {
        res.json({ "message": "login created successfully" });
    } else {
        res.json({ "message": "login failed" });
    }
});
app.delete("/delete",async (req,res)=>{
    await upload.connect();
    let res1 = await upload.db("one").collection("posts").deleteOne({"p_id":parseInt(req.body.p_id)});
    const {acknowledged} = res1;
    if(acknowledged){
        res.json({"message":"record deleted successfully !!!"});
    }else{
        res.json({"message":"record not deleted !!!"});
    }
});
app.listen(8014, () => {
    console.log("Server listening on port 8014");
});
