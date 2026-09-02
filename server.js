require('dotenv').config();

const express = require('express');
const cors = require('cors');

const connectDB = require('./config/db.js');
const routes = require('./routes/routes.js');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use('/api', routes);

const PORT = process.env.PORT || 5000;

const startServer = async () => {
    try {
        // Wait for MongoDB connection
        await connectDB();

        // Start server only after MongoDB connects
        app.listen(PORT, '0.0.0.0', () => {
            console.log(`Server running on port ${PORT}`);
        });

    } catch (error) {
        console.error('Failed to start server:', error.message);
        process.exit(1);
    }
};

startServer();