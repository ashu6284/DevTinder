const mongoose = require("mongoose");
const dbConnect = async () => {
  await mongoose.connect(
    "mongodb+srv://ashu_jaiswal:V9awczZKxcPt10Bb@mycluster.5pppt.mongodb.net/devTinder"
  );
};
module.exports = { dbConnect };
