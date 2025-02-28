import fs from 'fs';

export function addTask(task = "Teste") {
    const existFile = fs.existsSync('tarefas.json')
    console.log("🚀 ~ addTask ~ existFile:", existFile)
    

    if (existFile) {
        
    }

    // fs.appendFile('tarefas.json', task , function (err) {
    //     if (err) throw err;
    //     console.log('Saved!');
    //   });
}