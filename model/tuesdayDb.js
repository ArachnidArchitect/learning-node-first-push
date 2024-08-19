import {pool} from '../config/config.js'




const getUsersDb = async()=>{
    let [data] = await pool.query('SELECT * FROM users');
    return data
}
const getUserDb = async(id)=>{
    let [data] = await pool.query('SELECT * FROM users WHERE id = ?', [id])
    return data
}
const getUsernameDb = async(username)=>{
    let [data] = await pool.query('SELECT * FROM users WHERE username = ?', [username])
    return data
}
const getFruitsDb = async()=>{
    let [data] = await pool.query('SELECT * FROM fruits');
    return data
}

const updateUserDb = async(name, surname, age, fav_coding_lang, fav_car, eye_color,username, password, id)=>{
    await pool.query('UPDATE users SET name = ?, surname =?, age=?, fav_coding_lang=?, fav_car=?, eye_color=?,username=?, password=? WHERE id = ?', [name, surname, age, fav_coding_lang, fav_car, eye_color,username, password, id])
}
const insertUserDb = async(name, surname, age, fav_coding_lang, fav_car, eye_color,username, password)=>{
    await pool.query('INSERT INTO users (name, surname, age, fav_coding_lang, fav_car, eye_color,username, password ) VALUES(?,?,?,?,?,?,?,?)', [name, surname, age, fav_coding_lang, fav_car, eye_color,username, password])
}
const deleteUserDb = async(id)=>{
    await pool.query('DELETE FROM users WHERE id = ?', [id])
}


export{getUsersDb,getUserDb, updateUserDb, insertUserDb, deleteUserDb, getUsernameDb, getFruitsDb}