const fs = require('fs');
const { WASI } = require('wasi');
const wasi = new WASI({
  args: process.argv,
  env: process.env,
  preopens: {
    '/sandbox': '/some/real/path/that/you/want/to/access'
  }
});
const importObject = { wasi_snapshot_preview1: wasi.wasiImport };

(async () => {
  const wasmBuffer = fs.readFileSync('./your_compiled_wasm_file.wasm');
  const { instance } = await WebAssembly.instantiate(wasmBuffer, importObject);
  wasi.start(instance);
})();
