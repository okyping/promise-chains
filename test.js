import start from './index';

function prom1() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(2);
        }, 2000)
    });
}

function prom2() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve([2]);
        }, 2000)
    });
}

const promises = [
    prom1,
    prom2
];

start(promises).then(function (results) {
    console.log(results);
});