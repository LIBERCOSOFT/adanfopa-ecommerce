import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    const connector = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })

    console.log(`Database connected to ${connector.connection.host}`.cyan)
  } catch (err) {
    console.error(`Error: ${err.message}`.red.bold)
    process.exit(1)
  }
}

export default connectDB
