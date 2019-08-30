const sqlite3 = require('sqlite3');
const db = new sqlite3.Database(':memory:');

module.exports =
{  
    createTable()
    {
        db.run(`CREATE TABLE CARTOES (id INTEGER PRIMARY KEY, nome TEXT, limite NUMERIC(10,2), renda NUMERIC(10,2))`, (err, row) => { console.log(row);  console.log(err) });
    },

    insert(nome, limite, renda, call)
    {
        db.run(`INSERT INTO CARTOES(nome, limite, renda) VALUES ('${nome}', ${limite}, ${renda})`, (err, row) => { call(err, row) });
    },

    getAll(call)
    {
        db.all(`SELECT * FROM CARTOES `, (err, row) => call(row) ); 
    },

    get(id, call)
    {
        db.all(`SELECT * FROM CARTOES WHERE id = ${id}`, (err, row) => call(row) ); 
    },

    del(id, call)
    {
        db.run(`DELETE FROM CARTOES WHERE id = ${id}`, (err, row) => call(err, row));
    }
};