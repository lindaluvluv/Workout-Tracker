const mongoose = require("mongoose");
const app = require("./app");
mongoose.connect(
  "mongodb+srv://linda:linda123@cluster0.8jnob.mongodb.net/workout?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  }
);
app.listen(process.env.PORT || 3000, function () {
  console.log("The server start at port 3000.");
});
