import mysql from "mysql2/promise";
console.log(process.env.DB_HOST)
console.log(process.env.DB_USER)
console.log(process.env.DB_PASSWORD)

const db = await mysql.createConnection(
      {
        host: process.env.DB_HOST,
        user: process.env.DB_USER ,
        password: process.env.DB_PASSWORD,
        database: "worker_find"
    }
)
console.log("database connected")
export default async function queryExec(queryStr,queryOption=[]) {
    try{
        const [rows] = await db.execute(queryStr,queryOption);
        return rows
    }
    catch(err){
        throw err
    }
 }