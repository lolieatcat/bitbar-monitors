let startTime = 1612137600; // 2021-02-01T00:00:00.000Z
let base = 0x7918 / (24*3600*30);
let now = Date.now() / 1000;

let value = (now - startTime) * base;
console.log('G:'+value.toFixed(0));