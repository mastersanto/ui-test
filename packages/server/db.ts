import mongoose from 'mongoose';
 
export default function connectDB() {
  const uri = 'mongodb+srv://admin:admin1234@cluster0.wzgi4tu.mongodb.net/zemoga?retryWrites=true&w=majority&appName=Cluster0';
  
  try {
    mongoose.connect(uri);
  } catch (err: any) {
    console.log(err.message);
    process.exit(1);
  }

  const dbConnection = mongoose.connection;

  dbConnection.once('open', () => {
    console.log(`Database connected: ${uri}`);
  });
 
  dbConnection.on('error', (err) => {
    console.error(`Connection error: ${err}`);
  });
}
