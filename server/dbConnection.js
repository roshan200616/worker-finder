import mysql from "mysql2/promise";
const db = await mysql.createConnection(
      {
        host: "localhost",
        user: "root",
        password: "Root1234@",
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