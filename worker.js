const { Worker } = require('bullmq');
const { IORedis } = require('ioredis');

// Create a connection to Redis
const connection = {
    host: "127.0.0.1",
    port: 6379
};

const sendEmail = () => new Promise((resolve, reject) => {
    setTimeout(() => resolve(), 5000);
});

const worker = new Worker('email-queue', async (job) => {
    console.log(job.id, job.data.email, job.data.subject, job.data.body);
    await sendEmail();
    console.log("job done");
}, { connection });

