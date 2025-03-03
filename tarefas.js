import fs from 'fs/promises';
import { v4 as uuidv4 } from 'uuid';
const path = 'tarefas.json'


export async function addTask(task = "Teste") {
    const existFile = await fs.access(path).then(() => true).catch(() => false);


    if (existFile) {
        const jsonObj = await convertFileJsonToJson()
        jsonObj.push(
            {
                status: 'pendente',
                task,
                id: uuidv4(),
            }
        )

        const jsonString = JSON.stringify(jsonObj)

        fs.writeFile(path, jsonString, 'utf-8').then(() => console.log('Tarefa adicionada com sucesso!!!')).catch((err) => { throw err });
        
    }
}

async function convertFileJsonToJson() {
    const json = await fs.readFile(path, 'utf8').then((result) => JSON.parse(result)).catch((err) => { throw err });

    return json
}