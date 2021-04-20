const express = require("express")
const {WebhookClient} = require("dialogflow-fulfillment")
const {welcome} = require("./intent/welcome")
const {noti} = require("./intent/noti")
const {users} = require("./intent/user")
const app = express()

app.post("/dialogflow",express.json(),(req,res)=>{
    const agent = new WebhookClient({ request: req, response: res });
    let intentMap = new Map();
    console.log("req: ",req.body.queryResult.queryText);
    intentMap.set("welcome", welcome);
    intentMap.set("notify", noti);
    intentMap.set("users", users);
    // intentMap.set("Default Fallback Intent", defaultFallback);
    agent.handleRequest(intentMap);
})

app.listen(3333,()=>{
    console.log("SEVER IS RUNNING AT PORT 3333");
})