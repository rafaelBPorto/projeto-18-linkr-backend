import getAllUsersRepository from "../Repository/getUsersRepository.js";


// export async function search(req,res){
//     const {name} = req.body;

//     try{
//         const searching = await connectionDb.query(
//             `SELECT * FROM users WHERE name ILIKE $1`, [name]
//         )
//         console.log(searching)
//         return res.send(searching.rows)
//     }catch(err){
//         res.status(500).send(err.message)
//     }
// }

export async function getAllUsersController(req, res) {
    try {
        const users =  await getAllUsersRepository();
        return res.status(200).send(users);
    } catch (err) {
        return res.sendStatus(500);
    }
}