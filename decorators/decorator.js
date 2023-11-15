function measureRuntime(target, name, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function(...args) {
        const start = performance.now();
        const result = originalMethod.apply(this, args);
        const finish = performance.now();
        console.log(`${name} выполнен за ${finish - start} миллисекунд`);
        return result;
    };
    return descriptor;
}

class MyClass {
    @measureRuntime
    doSomething() {
        console.log('hello')
    }
}

const myClassInstance = new MyClass();
myClassInstance.doSomething();
