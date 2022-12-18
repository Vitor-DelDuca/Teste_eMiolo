// import sqlite3 from "sqlite3";
// import { dirname } from "path";
// import { fileURLToPath } from "url";


// sqlite3.verbose()
// const filePath = dirname(fileURLToPath(import.meta.url)) + "/database.db"
// const Database = new sqlite3.Database(filePath)

// const tabelaRegistro = `CREATE TABLE IF NOT EXISTS registro (id INTEGER PRIMARY KEY AUTOINCREMENT, email VARCHAR, password VARCHAR)`

// Database.run(tabelaRegistro, e => {
//     if (e) {
//         console.log(e.message)
//     } else {
//         console.log('Tabela criada com sucesso')
//     }
// })

// class Registrados {
//     static create(email, password) {
//         const query = `INSERT INTO registro (email, password) VALUES (?, ?)`
//         return new Promise((resolve, reject)=> {
//             Database.run(query, [email, password], e => {
//                 if (e) {
//                     reject(e.message)
//                 } else {
//                     resolve('Usuário Cadastrado')
//                 }
//             })
//         })
//     }

//     static findAll() {
//         const query = `SELECT * FROM registro`
//         return new Promise((resolve, reject)=> {
//             Database.run(query, (e, rows) => {
//                 if (e) {
//                     reject(e.message)
//                 } else {
//                     resolve(rows)
//                 }
//             })
//         })
//     }
// }



// export default Registrados