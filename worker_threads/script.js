const { Worker, isMainThread, parentPort } = require('worker_threads');

if (isMainThread) {

  console.log('Запускаем основной поток.');

  const worker = new Worker(__filename);

  worker.on('message', message => {
    console.log(`Сообщение от Worker: ${message}`);
  });

  worker.on('exit', () => {
    console.log('Worker завершил выполнение.');
  });

  console.log('Основной поток продолжает работать.');
} else {

  console.log('Запускаем Worker Thread.');

  let sum = 0;
  for (let i = 0; i < 1e9; i++) {
    sum += i;
  }

  parentPort.postMessage(`Результат: ${sum}`);
}
