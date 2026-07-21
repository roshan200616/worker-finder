import queryExec from "../config/dbConnection.js";

export const LoginModel = async (email, tableName) => {
   try {
      const result = await queryExec(`select 
        * from ${tableName} where email = ?`, [email])
      return result
   }
   catch (err) {
      throw err
   }
}