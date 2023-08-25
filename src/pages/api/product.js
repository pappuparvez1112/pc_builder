const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://pcbuildernextjs:pcbuilder1218@cluster0.71qjupv.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run(req, res) {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    const productCollection = client.db("pcbuilder").collection("product");

    if (req.method === "GET") {
      const product = await productCollection.find().toArray();
      res.send({ message: "success", status: 200, data: product });
    }

    // if (req.method === "POST") {
    //   const news = req.body;
    //   const result = await newsCollection.insertOne(news);
    //   res.json(result);
    // }
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}

export default run;
