const async_hooks = require('async_hooks');
const fs = require('fs');

// Возвращает текущий идентификатор выполнения.
function eid() {
    return async_hooks.executionAsyncId();
}

// Возвращает идентификатор ресурса, который вызвал обратный вызов.
function tid() {
    return async_hooks.triggerAsyncId();
}

// Определяет ресурс, который требует асинхронного отслеживания.
class MyResource extends async_hooks.AsyncResource {
    constructor() {
        super('MyResource');
    }
}

// Инициализирует и запускает ресурс.
const resource = new MyResource();
resource.runInAsyncScope(() => {
    // Теперь мы находимся в асинхронном контексте, созданном MyResource.
    fs.writeSync(1, `In async scope: ${eid()}\n`);
});
