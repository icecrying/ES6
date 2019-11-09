//async 函数是什么?      通俗的说就是Generator函数的另一种写法，这种写法更简洁，除此之外，async函数还对Genrator进行了一些改进
//两者对比：
const fs = require('fs');
function readFile(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path,'utf-8',(err,data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}
//以下是generator
/*
function* generator() {
    let a = yield readFile("./a.txt");
    console.log(a);
    let b = yield readFile("./b.txt");
    console.log(b);
    let c = yield readFile("./c.txt");
    console.log(c);
}
let gen = generator();
gen.next().value.then((data) => {
    console.log(data);
    return gen.next().value
}).then((data) => {
    console.log(data);
    return gen.next().value
}).then((data) => {
    console.log(data);
    return gen.next().value
});*/

//以下是async
async function asy() {
    let a = await readFile("./a.txt");
    console.log(a);
    let b = await readFile("./b.txt");
    console.log(b);
    let c = await readFile("./c.txt");
    console.log(c);
}
asy();