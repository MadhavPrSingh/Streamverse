const mongoose = require("mongoose");


const conn1 = mongoose.connect("mongodb://0.0.0.0:27017/Register")
.then(() => {
  console.log('connection succesful');
}).catch((e) => {
  console.log(e);
})
