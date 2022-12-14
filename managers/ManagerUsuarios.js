const fs = require('fs/promises');
const {existsSync} = require ('fs');


class ManagerUsuarios {
    static idCounter = 0;
    constructor(path) {
        this.path = path;
    }

    async consultarUsuarios() {
        if (existsSync(this.path)) {
            const data = await fs.readFile(this.path, 'utf-8');
            console.log(data);
            const users = JSON.parse(data);
            return users;
        } else {
            return [];
        }
    }


    async crearUsuarios(usuario) {
        const users = await this.consultarUsuarios();
        if (!users.length) {
            ManagerUsuarios.idCounter = 1;
        } else {
            ManagerUsuarios.idCounter = users[users.length -1].id +1;
        }
    
    const newUsers = {
        id: ManagerUsuarios.idCounter,
        ...usuario
    };
    
    users.push(newUsers);
    await fs.writeFile(this.path, JSON.stringify(users, null, '\t'));
    return newUsers; 
    
    }
}

module.exports = ManagerUsuarios;