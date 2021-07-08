const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/agilegroup", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});


// try {
//   mongoose.connect(
//     "mongodb+srv://aavash:K2YBdhDnfvByRhNs@cluster0.qtokp.mongodb.net/AgileFinal?retryWrites=true&w=majority",
//     {
//       useNewUrlParser: true,
//       useCreateIndex: true,
//       useFindAndModify: false,
//       useUnifiedTopology: true,
//     },
//     () => console.log("connected")
//   );
// } catch (error) {
//   console.log("could not connect");
// }
