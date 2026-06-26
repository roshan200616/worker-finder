import queryExec from "../config/dbConnection.js";

export const getHouseOwnersModel = async () => {
    try {
        const result = await queryExec(`select * from house_owners`)
        console.log(result)
        return result

    }
    catch (err) {
        throw err
    }
}
export const getHouseOwnersByIdModel = async (id) => {
    try {
        const result = await queryExec(`select * from house_owners where id = ?`, [id])
        return result
    }
    catch (err) {
        throw err
    }
}
export const createHouseOwnerModel = async (data) => {
    try {
        console.log(data)
        const result = await queryExec(`insert into house_owners (name,mobileNo,email,password,area,city,state,pin,latitude,longitude) values (?,?,?,?,?,?,?,?,?,?)`, [...data])
        return result
    }
    catch (err) {
        throw err
    }
}
export const updateHouseOwnerModel = async (id, data,set) => {
    try {
        
        const result = await queryExec(`update house_owners set ${set} where id=?`, [...data, id])
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
