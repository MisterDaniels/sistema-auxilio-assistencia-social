require('dotenv').config();

module.exports = {
    dialect: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || 'root',
    database: process.env.DB_NAME || 'assistencia-social',
    define: {
        timestamps: true,
        underscored: true
    }
};