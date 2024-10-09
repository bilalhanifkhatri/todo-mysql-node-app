import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';
import todoRoutes from './routes/todoRoutes.js';

const app = express();
const port = 3000;

// Get the current directory path dynamically
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Set 'views' folder location inside the 'src' directory
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/', todoRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
