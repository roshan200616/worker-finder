import queryExec from "../config/dbConnection.js";

export const getWorkersModel = async () => {
    try {
        const result = await queryExec(`select 
            name,
            mobileNo,
            email,
            area,
            city,
            state,
            pin
            from workers where deletedAt is null`)
        return result
    }
    catch (err) {
        throw err
    }
}

export const getWorkerByIdModel = async (id)=>{
    try{
        const result = await queryExec(`select  name,
            mobileNo,
            email,
            area,
            city,
            state,
            pin
             from workers where id=? `,[id])
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
            longitude)values(?,?,?,?,?,?,?,?,?,?)`,[...data])
        return result
    }
    catch(err){
        throw err
    }
}

export const updateWorkerModel = async(id,data,sets)=>{
    try{
        
        const result = await queryExec(`update workers set ${sets} where id =?`,[...data,id])
        return result
    }
    catch(err){
        throw err
    }
}
export const softDeleteModel = async (id) => {
    try {
        const result = await queryExec(
            `UPDATE workers 
             SET deletedAt = CURRENT_TIMESTAMP()
             WHERE id = ? AND deletedAt IS NULL`,
            [id]
        );

        return result;
    } catch (err) {
        throw err;
    }
};


export const deleteWorkerModel = async(id)=>{
    try{
        const result = await queryExec(`delete from workers where id=?`[id])
        return result
    }
    catch(err){
        throw err
    }
}
