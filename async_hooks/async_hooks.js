const async_hooks = require('async_hooks');
const fs = require('fs');

// Создаем новый экземпляр AsyncHook.
const hook = async_hooks.createHook({
    init(asyncId, type, triggerAsyncId) {
        fs.writeSync(1, `AsyncHook init: ${asyncId}, type: ${type}, trigger: ${triggerAsyncId}\n`);
    }
});

// Активируем хуки.
hook.enable();

// Функция для асинхронной операции, которая принимает callback и идентификатор.
function doAsyncOperation(name, callback) {
    fs.writeSync(1, `${name} started, executionAsyncId: ${async_hooks.executionAsyncId()}\n`);
    setTimeout(() => {
        fs.writeSync(1, `${name} in setTimeout callback, executionAsyncId: ${async_hooks.executionAsyncId()}\n`);
        callback();
    }, 100);
}

// Выполняем две асинхронные операции.
doAsyncOperation('Operation1', () => {
    fs.writeSync(1, 'Operation1 callback executed.\n');
});

doAsyncOperation('Operation2', () => {
    fs.writeSync(1, 'Operation2 callback executed.\n');
});
