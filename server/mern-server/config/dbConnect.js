const mongoose = require('mongoose')
const dbConnect = async () => {
    try {
        await mongoose.connect(
          "mongodb+srv://vanss2808:dneBd0C8boHLajxw@cluster0.x5aqgya.mongodb.net/"
        );
        console.log("Db connected Successfully");
      } catch (error) {
        console.log(error.message);
        process.exit(1);
      }
}
dbConnect();
