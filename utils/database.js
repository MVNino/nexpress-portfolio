// MongoDB connection URI
const uri =
  "mongodb+srv://ninomarlonvilla:<password>@cluster0.zwpbnot.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

export default connection = async () => {
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  client.connect((error) => {
    if (error) {
      console.error("Failed to connect to mongodb: ", error);
      return;
    }

    console.log("Connected to mongodb!");
  });
};
