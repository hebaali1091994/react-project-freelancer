const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL)
    
.then(() => {
        console.log("DBConnecting Succesful");
}).catch((err) => {
    console.log(err)
})
exports.mongoose;