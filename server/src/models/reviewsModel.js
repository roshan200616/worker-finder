import queryExec from "../config/dbConnection.js"

export const getReviewsModelByWorkerId = async (id) => {
    try {
        const result = await queryExec(`
            SELECT
    r.rating,
    r.review,
    j.workType,
    o.owner_name
    FROM reviews r
    JOIN jobs j
    ON r.jobId = j.id
    JOIN house_owners o
    ON j.ownerId = o.id
    join workers w on  j.workerId = w.id 
    where w.id= ? and r.deletedAt is null`,[id])
    return result 
    }
     catch(err){
        throw err
     }
}
export const getReviewsModel = async (id) => {
    try {
        const result = await queryExec(`    
        SELECT
    r.rating,
    r.review,
    j.workType,
    o.owner_name
    from reviews r
    join jobs j  on r.jobId =j.id
    join house_owners o on j.ownerId = o.id
    join workers w on j.workerId = w.id
    where w.id = ? and r.deletedAt is null`,[id])
    return result 
    }
    catch(err){
        throw err
    }
}
    

export const createReviewModel = async (data) =>{
    try{
        const result = await queryExec(`insert into reviews(jobId,rating,review) values(?,?,?)`,[...data])
        return result
    }
    catch(err){
        throw err
    }
}

export const updateReviewModel = async(id,data,sets)=>{
    try{
        
        const result = await queryExec(`update reviews set ${sets} where id =?`,[...data,id])
        return result
    }
    catch(err){
        throw err
    }
}
 
export const softDeleteReviewModel= async(id)=>{
    try{
        const result = await queryExec(`update reviews set deletedAt = NOW() where id = ?`,[id])
        return result 
    }
    catch(err){
        throw err
    }
}
export const hardDeleteReviewModel = async(id)=>{
    try{
        const result = await queryExec(`delete from reviews where id = ?`,[id])
        return result
    }
    catch(err){
        throw err
    }
}



