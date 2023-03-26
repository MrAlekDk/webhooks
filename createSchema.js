//const sqlite3 = require('sqlite3').verbose();
import sqlite3 from "sqlite3";
const db = new sqlite3.Database('./test.db');

const createSchema = ()=>{
    db.serialize(() => {
        db.run("CREATE TABLE Users (id Integer, username Text, url Text, theme Text)");
    
        const stmt = db.prepare("INSERT INTO Users VALUES (?)");
        
        stmt.finalize();
    
        db.each("SELECT rowid AS id, info FROM Users", (err, row) => {
            console.log(row.id + ": " + row.info);
        });
    });
    db.close();
}

createSchema()