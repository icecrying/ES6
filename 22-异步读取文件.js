let fs = require('fs');
/*
//下面这段代码时异步读取的
fs.readFile('./a.txt','utf-8',(err,data)=>{
    console.log(data)
});
fs.readFile('./b.txt','utf-8',(err,data)=>{
    console.log(data)
});
fs.readFile('./c.txt','utf-8',(err,data)=>{
    console.log(data)
});*/

//解决方案1：Promise方法
function readFile(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path,'utf-8',(err,data) => {
            if (err) {
                reject(err)
            }else {
                resolve(data)
            }
        })
    })
}
/*readFile('./a.txt').then((data) => {
    console.log(data);
    return readFile('./b.txt')
}).then((data) => {
    console.log(data);
    return readFile('./c.txt')
}).then((data) => {
    console.log(data);
});*/

//2.解决方案2：Generator函数
function* generator() {
    yield readFile('./a.txt');
    yield readFile('./b.txt');
    yield readFile('./c.txt');
}
let gen = generator();
gen.next().value.then((data) => {
    console.log(data);
    return gen.next().value
}).then((data2) => {
    console.log(data2);
    return gen.next().value
}).then((data3) => {
    console.log(data3);
});

/*

//3.解决方案3：利用co插件
let co = require('co');
let gen = generator();
function* generator() {
    let a = yield readFile('./a.txt');
    console.log(a);
    let b = yield readFile('./b.txt');
    let c = yield readFile('./c.txt');
}

co(gen);*/
