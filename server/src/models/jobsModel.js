import queryExec from "../config/dbConnection.js";

export const getJobsmodel = async () => {
    try {
        const result = await queryExec(`select 
   j.id,
  o.name,
  j.workType,
  j.scheduledTime,
  h.houseNO,
  h.street,
  h.area,
  h.city,
  h.state,
  h.pin
  from  jobs j
  join house_owners o on o.id = j.ownerId
  join houses h on h.id = j.houseId where status = "pending"
  `)
        return result
    }
    catch (err) {
        throw err
    }
}
export const getAcceptedjobsModel = async (id,value) => {
    try {
    const result = await queryExec(`select 
   j.id,
   j.workType,
   o.name,
   j.scheduledTime,
  h.houseNO,
  h.street,
  h.area,
  h.city,
  h.state,
  h.pin
  from  jobs j
  join house_owners o on o.id = j.ownerId
  join houses h on h.id = j.houseId
  join workers w on w.id = j.workerId where status =? and w.id =?`,[value,id])
 return result
    }
    catch (err) {
        throw err
    }
}

export const createJobModel = async (data) => {
    try {
        const result = await queryExec(
            `insert into jobs(ownerId,houseID,workType,description,status,scheduledTime)
             values(?,?,?,?,?,?)`, [...data]
        )
        return result
    }
    catch (err) {
        throw err
    }
}

export const acceptJobmodel = async (id,data,workerId) => {
    try {
        const result = await queryExec(
            `update jobs set status=?,workerId=? where id =?`, [data,workerId,id]
        )
        return result
    }
    catch (err) {
        throw err
    }

}