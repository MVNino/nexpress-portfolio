import mongoose from 'mongoose'

export async function connectToDatabase() {
  // Mongo DB URI
  const uri = process.env.MONGO_DB_URI

  try {
    const connection = mongoose.connect(uri)

    return connection
  } catch(error) {
    console.error('ERROR LOG: ', error)
  }
};
