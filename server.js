const mongoose = require("mongoose");
const app = require("./app");
mongoose.connect(
  "mongodb+srv://qwer1234:qwer1234@cluster0.xa6fp.mongodb.net/workout?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  }
);
app.listen(process.env.PORT || 3000, function () {
  console.log("The server start at port 3000.");
});
