const simpleHttp = require('./simpleHttp/simpleHttp.js')

simpleHttp.get('http://jsonplaceholder.typicode.com/todos/1', (err, data)=>{
    if(err){
        console.error('Ошибка при GET запросе', err)
        return
    }

    const todo = JSON.parse(data);
    console.log('Res:', todo)
})

