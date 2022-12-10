import mongoose from 'mongoose'
import dotenv from "dotenv"
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);



dotenv.config({ path: __dirname + '/.env' });


const connectDB = async () => {

      //database connection
      try {

            //added mongoDB Atlas connection
            const conn = await mongoose.connect(process.env.MONGO_URI || "mongodb+srv://seona:seona@cluster0.0p1p6fp.mongodb.net/?retryWrites=true&w=majority", {
                  useUnifiedTopology: true,
                  useNewUrlParser: true,
                  useCreateIndex: true
            })

            //database connected alert
            console.log(`MongoDB Connected: ${conn.connection.host}`)
      }
      catch (error) {
            console.error(`Error: ${error.message}`) 
            process.exit(1)
      }
}

export default connectDB