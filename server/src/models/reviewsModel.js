import queryExec from "../config/dbConnection.js"

export const getReviewsModelByOwnerId = async (id) => {
    try {
        const result = await queryExec(`
            SELECT
    r.id,
    r.rating,
    r.review,
    j.workType,
    o.name,
    w.name
    FROM reviews r
    JOIN jobs j
    ON r.jobId = j.id
    JOIN house_owners o
    ON j.ownerId = o.id
    join workers w on  j.workerId = w.id 
    where w.id= ?`,[id])
    return result 
    }
     catch(err){
        throw err
     }
}

export const createReviewModel = async (data) =>{
    try{
        const result = await queryExec(`insert into reviews(rating,review,jobId) values(?,?,?)`,[...data])
        return result
    }
    catch(err){
        throw err
    }
}