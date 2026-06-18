const mongoose = require("mongoose");

const profileDb = mongoose.createConnection(process.env.MONGO_URI);
const logsDb = mongoose.createConnection(process.env.MONGO_LOGS_URI)

profileDb.on("connected", () => {
  console.log("Connected to profile database");   
});

logsDb.on("connected", () => {
  console.error('Connected to logs database');
});

profileDb.on("error", (err) => {
    console.error('Profile database connection error:', err);
});

logsDb.on("error", (err) => {
    console.error('Logs database connection error:', err);
});

module.exports = {
    profileDb,
    logsDb
}