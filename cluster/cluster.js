const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
    console.log(`Master process is running`);

    // Fork workers.
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    // Отслеживаем выход рабочих процессов
    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker process died, pid: ${worker.process.pid}`);
        // Здесь можно решить, перезапустить рабочий процесс или нет
    });

    // Функция для остановки всех рабочих процессов
    function shutdownAllWorkers() {
        for (const id in cluster.workers) {
            cluster.workers[id].send('shutdown');
            cluster.workers[id].disconnect();
            setTimeout(() => {
                if (cluster.workers[id]) {
                    cluster.workers[id].kill();
                }
            }, 5000);
        }
    }

    // Вы можете вызвать эту функцию когда вам нужно, чтобы остановить все процессы, например через какое-то API или событие.

} else {
    // Workers can share any TCP connection
    // In this case it is an HTTP server
    console.log(`Worker process started, pid: ${process.pid}`);

    process.on('message', (message) => {
        if (message === 'shutdown') {
            // Очистка перед выходом
            console.log(`Shutting down worker ${process.pid}`);
            // Закрыть все соединения, таймеры, файлы и т.д., здесь в вашей функции performComputation
            // ...
            process.exit(0); // Выход после завершения всех операций
        }
    });

    // Представим, что вычислительная функция вызывается здесь для имитации работы
}
