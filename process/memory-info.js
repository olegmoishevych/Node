// memory-info.js
(function() {
    if (window.performance && window.performance.memory) {
        console.log('Memory Performance:');
        console.log(`Total JS Heap Size: ${window.performance.memory.totalJSHeapSize}`);
        console.log(`Used JS Heap Size: ${window.performance.memory.usedJSHeapSize}`);
        console.log(`JS Heap Size Limit: ${window.performance.memory.jsHeapSizeLimit}`);
    } else {
        console.log("The performance.memory API is not available in this browser.");
    }
})();
