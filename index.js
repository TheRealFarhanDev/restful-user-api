import express from 'express';
import userRoutes from './routes/users.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
}
)

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});