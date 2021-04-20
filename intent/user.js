const request = require("request")
import {LINE_BEARER,LINE_NOTI_URL} from "../constant/config"
const users = async (agent) => {
    const data = [{
        name: "Thanachot",
        lname: "Tesjaroen"
    }, {
        name: "Patchara",
        lname: "Mangkorn"
    }]
    const config = {
        url:LINE_NOTI_URL,
        method:'POST',
        headers:{
            'Content-Type':"application/x-www-form-urlencoded",
            'Authorization':LINE_BEARER
        },
        form:{
            message:"hello noti"
        }
    }
    const round = 10
    for(let i = 0;i<round;i++){
        const result = await request(config)
    }
    agent.add(JSON.stringify(data))
}

export{
    users
}