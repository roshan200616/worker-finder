import queryExec from "../config/dbConnection.js";

export const getWorkersModel = async () => {
    try {
        const result = await queryExec(`select * from workers`)
        return result
    }
    catch (err) {
        throw err
    }
}

export const getWorkersByIdModel = async (id)=>{
    try{
        const result = await queryExec(`select * from workers where id=?`,[id])
        return result[0]
    }
    catch(err){
        throw err
    }
}

export const createWorkersModel = async (data)=>{
    try{
        const result = await queryExec(`insert into Workers( name,
            mobileNo,
            email,
            password,
            area,
            city,
            state,
            pin,
            latitude,
            longitude),values(?,?,?,?,?,?,?,?,?,?)`,[data])
        return result
    }
    catch(err){
        throw err
    }
}

export const updateWorkerModel = async(id,data,sets)=>{
    try{
        const result = await queryExec(`upate workers set ${sets} where id =?`,[id,...data])
        return result
    }
    catch(err){
        throw err
    }
}

export const deleteWorkerModel = async(id)=>{
    try{
        const result = await queryExec(`delete from workers where id=?`[id])
        return result
    }
    catch(err){
        throw err
    }
}