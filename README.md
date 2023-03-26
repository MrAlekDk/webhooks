To integrate with the running Webhook server:
1. Send a post request to one of these endpoints: /memes, /jokes or /quotes
    The payload for the post request should be in the following format: {"username": "yourUsername",
    "url": "Your Webhooks url"}
2. A Status 200 will be returned to indicated that your Hook is saved in the db.
3. Every 30 seconds a meme, joke or quote is send to the subscribers of either Webhook.
4. To unregister again, send a post request to either /memes-unregister, /jokes-unregister or /quotes-unregister (depending on what endpoint was subscribed to)
    The payload should be in the following format: {"username": "yourUsername",
    "theme": "TheEndpointTheme"}
    
    
The repository has a client.js which can be used to test the client end of the Webhook app.
