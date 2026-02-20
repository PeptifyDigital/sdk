const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const peptideRoutes = require("./routes/peptides");

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/peptides", peptideRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
