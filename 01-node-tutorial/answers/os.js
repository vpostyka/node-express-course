const os = require('os');

console.log('OS Platform: ', os.platform());
console.log('OS CPU architecture: ', os.arch());
console.log('OS CPU information: ', os.cpus());
console.log('Free memory: ', os.freemem());
console.log('Total memory: ', os.totalmem());
console.log('OS Uptime: ', os.uptime());