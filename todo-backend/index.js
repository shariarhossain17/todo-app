const express = require("express");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 8800;

app.use(cors());
app.use(express.json());
// post,get,put,patch,delete

// c = create  -> post
// r=read  -> get
// u=update -> put and patch
// d=delete  -> delete

const uri =
  "mongodb+srv://todo:lSRVhSKEoQEePV6h@cluster0.04b2hpp.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection

    const todoCollection = client.db("todo-application").collection("todo");

    // post
    app.post("/todo", async (req, res) => {
      const todoData = req.body;
      const result = await todoCollection.insertOne(todoData);
      res.send(result);
    });

    // get -> read

    app.get("/todo", async (req, res) => {
      const result = await todoCollection.find({}).toArray();
      res.send(result);
    });

    app.get("/todo/:email", async (req, res) => {
      const userEmail = req.params.email;
      const result = await todoCollection
        .find({
          email: userEmail,
        })
        .toArray();
      res.send(result);
    });


    app.delete("/todo/:id",async(req,res)=>{
        const id = req.params.id;
        const query= {_id:new ObjectId(id)};
        const result = await todoCollection.deleteOne(query);
        res.send(result)
    })


    app.put("/todo/:id",async(req,res) => {
        const id = req.params.id;
        const data=req.body;
        const filter={_id:new ObjectId(id)};
        const updateDoc={
            $set:data,
        }

        const result = await todoCollection.updateOne(filter,updateDoc);

        res.send(result)
    })


    app.patch("/todo/:id",async(req,res) => {
        const id = req.params.id;
        const data=req.body;
        const filter={_id:new ObjectId(id)};
        const updateDoc={
            $set:{status:true},
        }

        const result = await todoCollection.updateOne(filter,updateDoc);

        res.send(result)
    })



    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello world from todo app");
});

app.listen(port, () => {
  console.log(`server running on ${port}`);
});
