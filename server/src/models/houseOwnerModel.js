import queryExec from "../config/dbConnection.js";

export const getHouseOwnersModel = async () => {
    try {
        const result = await queryExec(`select * from house_owners`)
        return result
    }
    catch (err) {
        throw err
    }
}
export const getHouseOwnersByIdModel = async (id) => {
    try {
        const result = await queryExec(`select * from house_owners where id = ?`, [id])
        return result[0]
    }
    catch (err) {
        throw err
    }
}
export const createHouseOwnerModel = async (data) => {
    try {
        const result = await queryExec(`insert into house_owners (name,mobileNo,email,password,area,city,state,pin,latitude,longitude) values (?,?,?,?,?,?,?,?,?,?)`, [data])
        return result
    }
    catch (err) {
        throw err
    }
}
export const updateHouseOwnerModel = async (id, data) => {
    try {
        const result = await queryExec(`update house_owners set name=?,mobileNo=?,email=?,area=?,city=?,state=?,pin=?,latitude=?,longitude=? where id=?`, [...data, id])
        return result
    }
    catch (err) {
        throw err
    }

}
export const deleteHouseOwnerModel = async (id) => {
    try {
        const result = await queryExec(`delete from house_owners where id=?`, [id])
        return result
    }
    catch (err) {
        throw err
    }
}
