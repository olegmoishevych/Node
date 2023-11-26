const { performance, PerformanceObserver } = require('perf_hooks');

const obs = new PerformanceObserver((items) => {
  items.getEntries().forEach((entry) => {
    console.log(`${entry.name}: ${entry.duration}`);
  });
  performance.clearMarks();
});

obs.observe({ entryTypes: ['measure'] });

performance.mark('A');
performance.mark('B');

performance.measure('A to B', 'A', 'B');
