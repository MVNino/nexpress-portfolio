import mongoose from 'mongoose'

// MongoDB connection URI
const uri = "mongodb+srv://ninomarlonvilla:Nino236275@cluster0.zwpbnot.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

export async function connectToDatabase() {
  try {
    const connection = mongoose.connect(uri)

    return connection
  } catch(error) {
    console.error('ERROR LOG: ', error)
  }
};
