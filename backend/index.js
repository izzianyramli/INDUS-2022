const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const uri =
  "mongodb+srv://admin_ender1:ender1_2022@indus2022trial.gtdse.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db('sample_supplies');
    const sales = database.collection('sales');

    // Query for a sale that has the store location is 'Denver'
    const query = { storeLocation: 'Denver' };
    const sale = await sales.findOne(query);

    console.log(sale);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);