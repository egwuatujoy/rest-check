import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://mongo:E62yeb2az56NQeWv@cluster0.bpglfdu.mongodb.net/restAPI?retryWrites=true&w=majority', {
          useNewUrlParser: true,
          useUnifiedTopology: true
        });
        console.log('Connected to MongoDB');
      } catch (err) {
        console.error('Error connecting to MongoDB:', err);
      }
}

export default connectDB