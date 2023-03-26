import { getUserUrls, registerHook, unregisterHook} from "./dbManager.js";
import express from "express";
const app = express();
app.use(express.json());

//meme webhook register
app.post('/memes',( req, res ) => {
    let user = req.body
    console.log( 'received webhook', user);
    registerHook(user.username, user.url, "memes")
    res.sendStatus( 200 );
});

//meme webhook unregister
app.post('/memes-unregister',( req, res ) => {
    let user = req.body
    console.log( 'received webhook', user);
    unregisterHook(user.username, "memes")
    res.sendStatus( 200 );
});

//jokes webhook register
app.post('/jokes',( req, res ) => {
    let user = req.body
    console.log( 'received webhook', user);
    registerHook(user.username, user.url, "jokes")
    res.sendStatus( 200 );
});

//jokes webhook unregister
app.post('/jokes-unregister',( req, res ) => {
    let user = req.body
    console.log( 'received webhook', user);
    unregisterHook(user.username, "jokes")
    res.sendStatus( 200 );
});

//quotes webhook register
app.post('/quotes',( req, res ) => {
    let user = req.body
    console.log( 'received webhook', user);
    registerHook(user.username, user.url, "quotes")
    res.sendStatus( 200 );
});

//quotes webhook unregister
app.post('/quotes',( req, res ) => {
    let user = req.body
    console.log( 'received webhook', user);
    unregisterHook(user.username, "quotes")
    res.sendStatus( 200 );
});

//interval to send messages to webhooks
setInterval(async () => {
    try {
        const users = await getUserUrls()
        console.log(`Sending webhooks to ${users.length} endpoints`);
        users.forEach(async (user) => {
            let mes = "";
            if(user.theme === "memes")
                mes = "Putins meme dog Doge is nice";
            else if(user.theme === "jokes")
                mes = "What's the best thing about Switzerland? I don't know, but the flag is a big plus.";
            else
                mes = "Oscar Wilde: Be yourself; everyone else is already taken.";

            try {
                await fetch(user.url, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({data: mes}),
                });
            } catch (err) {
                console.error(err.message);
            }
        });
    } catch (err) {
        console.error(err.message);
    }
}, 300000);


app.listen( 8000, () => console.log( 'Node.js server started on port 8000.' ) );