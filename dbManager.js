import sqlite3 from "sqlite3";
import { open } from "sqlite";
const db = new sqlite3.Database('./test.db')


const getUserUrls = async() =>{
    let users = [];
    const db = await openDb();
    users = await db.all("SELECT url, theme FROM Users");
    await db.close();
    return users
}

const registerHook = async (username, url, theme) =>{
        const db = await openDb();
        await db.run("INSERT INTO Users (username, url, theme) VALUES (?,?,?)", [username, url, theme]);
        await db.close();
        console.log(`Webhook registered: ${url}`);
}

const unregisterHook = async (username, theme) =>{
    const db = await openDb();
    await db.run("DELETE FROM Users WHERE username = ? AND theme = ?", [username, theme]);
    await db.close();
}

async function openDb() {
    return open({
        filename: "test.db",
        driver: sqlite3.Database,
    });
}


export {registerHook, getUserUrls, unregisterHook}