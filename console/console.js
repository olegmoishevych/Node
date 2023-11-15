class CustomConsole {
    constructor() {
        this.console = console;
    }

    log(message) {
        this.console.log(`[Log]: ${message}`);
    }

    error(message) {
        this.console.error(`[Error]: ${message}`);
    }

    warn(message) {
        this.console.warn(`[Warn]: ${message}`);
    }

}

const customConsole = new CustomConsole();
customConsole.log("Это тестовое сообщение.");
