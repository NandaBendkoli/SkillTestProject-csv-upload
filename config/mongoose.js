
const mongoose = require('mongoose');

const DB = "mongodb+srv://bendkolinanda12:Nanda123@cluster0.sj5feyg.mongodb.net/csv?retryWrites=true&w=majority";

mongoose.set('strictQuery', false);

(async () => {
    try {
        await mongoose.connect(DB);
        console.log('Connection successful!');

        const db = mongoose.connection;

        db.on('error', console.error.bind(console, "Error connecting to MongoDB"));

        db.once('open', function () {
            console.log('Connected to Database :: MongoDB');
        });
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
})();
