import fs from 'fs/promises';
import { v4 as uuidv4 } from 'uuid';
const path = 'tarefas.json'


export async function addTask(titleTaks) {
    const existFile = await fs.access(path).then(() => true).catch(() => false);
    const task = {
        status: 'pendente',
        titleTaks,
        id: uuidv4(),
    }
    let jsonObj = [task]

    if (existFile) {
        jsonObj = await convertFileJsonToJson()
        jsonObj.push(
            task
        )
    }

    const jsonString = JSON.stringify(jsonObj)

    fs.writeFile(path, jsonString, 'utf-8').then(() => console.log('Tarefa adicionada com sucesso!!!')).catch((err) => { throw err });
}

async function convertFileJsonToJson() {
    const json = await fs.readFile(path, 'utf8').then((result) => JSON.parse(result)).catch((err) => { throw err });

    return json
}