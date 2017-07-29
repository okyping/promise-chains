

function pushResult(results, result) {
    results.push(result);
    return results;
}

let getResult = pushResult.bind(null, []);

export default function start(tasks) {
    tasks = tasks || [];
    return tasks.reduce(function (promise, task) {
        return promise.then(task).then(getResult);
    }, Promise.resolve());
}