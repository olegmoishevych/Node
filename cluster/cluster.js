const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
    console.log(`Master process is running`);

    // Fork workers
    for (let i = 0; i < numCPUs; i++) {
        console.log(`Forking worker ${i+1}`);
        cluster.fork();
    }
    // Master process
} else {
    // Флаг состояния вычисления
    let keepComputing = true;

    // Функция вычисления с возможностью остановки
    const performComputation = () => {
        let sum = 0;
        for (let i = 0; i < 1e8; i++) {
            if (!keepComputing) {
                return sum; // Возвращает сумму при получении сигнала остановки
            }
            sum += Math.sqrt(i);
        }
        return sum;
    };

    // Обработчик для изменения состояния вычислений
    process.on('message', (msg) => {
        if (msg === 'stopComputation') {
            keepComputing = false; // Устанавливаем флаг в false для остановки вычисления
        } else if (msg === 'startComputation') {
            keepComputing = true; // Убедитесь, что вычисление активно перед запуском
            const result = performComputation();
            process.send({ result });
        }
    });
    console.log('res2')

    console.log(`Worker process started, pid: ${process.pid}`);
    // Другие действия рабочего процесса...
}
