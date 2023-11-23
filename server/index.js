console.log(process.env.LANG);


const sever = require('live-server');

const params = {
  host: 'localhost',
  port: 3000,
  open: false,
  root: './client'
}

ServiceWorkerRegistration.start(params)