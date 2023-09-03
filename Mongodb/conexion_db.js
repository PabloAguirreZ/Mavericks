const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://Juan_Osorio:(aca va la password )@myfirstdb.cce896t.mongodb.net/?retryWrites=true&w=majority";


const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
   
    await client.connect();
    
    await client.db("admin").command({ ping: 1 });
    console.log("good se conecto");
  } finally {
    
    await client.close();
  }
}
run().catch(console.dir);
