const {Queue} = require('bullmq');
const notificationQueue = new Queue('email-queue' , {
    connection : {
        host : "127.0.0.1" ,
        port : 6379 
    }
});


async function init(){
    const res = await notificationQueue.add(
        "Email to paras" , 
        {
            email : "paras.nagpal743@gmail.com" ,
            subject : "welcome to mess" ,
            body : "hey paras , the food here is delicious . welcome "
        }
    )
    console.log("Job added to the queue" , res.id);
}
init();