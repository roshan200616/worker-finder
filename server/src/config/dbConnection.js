import mysql from "mysql2/promise";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import dotenv from "dotenv";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config({ path: join(__dirname, "../../.env") });


const db = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

console.log("database connected");
export default async function queryExec(queryStr, queryOption=[]) {
    try {
        
        const [rows] = await db.execute(queryStr, queryOption);
        return rows;
    } catch(err) {
        throw err;
    }
}