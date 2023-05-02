'use strict';

const firebaseApp = require('../db');
const db = firebaseApp.database();
const ref = db.ref('/example');

const addTask = async (req, res, next) => {
    try {
        // Obtem os dados do Front
        const data = req.body;
        // 
        const pushed = await ref.push(data).then(() => {
            console.log('Data pushed successfully');
        }).catch((err) => {
            console.log('Fail to push data: ' + err.message);
        });

        res.status(200).send("Record saved sucessfuly\n" + pushed);
    } catch (err) {
        res.status(404).send(err.message);
    }
};

const getTasks = async (req, res, next) => {
    try {
        // Lê os dados do nó "/example"
        await ref.once("value").then((snapshot) => {
            const read = snapshot.val();
            console.log(read); // exibe os dados lidos
        }).catch((err) => {
            console.error("Erro ao ler os dados: ", err.message);
        });
        res.send('Record read successfuly\n' + read);
    } catch (err) {
        res.status(404).send(err.message);
    }
};