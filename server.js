/** Express router providing user related routes
 * @module routers/users
 * @requires express
 */

require('dotenv').config();
/**
 * express module
 * @const
 */
const express = require('express');

/**
 * Starts Cors
 * @const
 */
const cors = require('cors');

/**
 * Set PORT
 * @const
 */
const PORT = process.env.PORT || 4000;


/**
 * Create Express Server
 * @const
 */
const app = express();

/**
 * Configure cors
 */
app.use(cors());

/**
 * Parse request body to Json
 */
app.use(express.json());


/**
 * @swagger
 * /api/usuarios:
 *   user:
 *     description: Conduce to routes of users to check their method (POST-GET-PUT-DELETE).
*/
app.use('/api/usuarios', require('./routes/usuarios'));


const user = process.env.USER
/**
 * @listens
 * description: Start the server to listen calls
*/
app.listen(PORT, () => {
    console.log(`Server running at port: ${PORT}\nCreated by: ${user}`);
});