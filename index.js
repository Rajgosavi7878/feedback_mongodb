const express = require("express");
const cors = require("cors");
const {MongoClient} = require("mongodb");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/save", async (req,res)=>{
	const url = "mongodb+srv://gosaviraj66:HquMuGOUxp1Uj2ra@cluster0.wp0gj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
	const client = new MongoClient(url);
	const db = client.db("ss_19march25");
	const coll = db.collection("student");
	const doc = {"name":req.body.name,"company":req.body.company,"pkg":req.body.pkg};
	console.log(doc);
	const result = await coll.insertOne(doc)
	.then(result => res.send(result))
	.catch(error => res.send(error));
});

app.listen(11000,()=>{console.log("ready to serve @ 11000");});


// HquMuGOUxp1Uj2ra