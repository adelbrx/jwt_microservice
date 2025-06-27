import express from "express";
import jwtRoutes from "./routes/jwtRoutes.js";

const app = express();
app.use(express.json());

app.use("/jwt", jwtRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`JWT Microservice running on http://localhost:${PORT}`);
});
