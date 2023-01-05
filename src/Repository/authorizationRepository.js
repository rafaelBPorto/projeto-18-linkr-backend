import connectionDb from "../Database/db.js";

export async function checkToken(token){
    const session = await connectionDb.query(`SELECT * FROM sessions WHERE token = $1`, [token]);
    if (session.rowCount === 0){
        return false;
    }
    return session.rows[0];
}