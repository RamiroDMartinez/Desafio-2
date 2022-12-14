const ManagerUsuarios = require ('./managers/ManagerUsuarios');

const manager = new ManagerUsuarios ('./data/Usuarios.json');

const usersManager =  async () => {
    try {
        let users =  await manager.consultarUsuarios();
        console.log(users);

        const newUsers1 = {
            nombre: "Ramiro",
            apallido: "Martinez",
            edad: 40,
            curso: "Programacion Backend"
        };
        const user1Result = await manager.crearUsuarios(newUsers1);
        console.log(user1Result);

        users =  await manager.consultarUsuarios();
        console.log(users);

        const newUsers2 = {
            nombre: "Gabriela",
            apallido: "Barrios",
            edad:26,
            curso:"Javascript"
        };
        const user2Result = await manager.crearUsuarios(newUsers2);
        console.log(user2Result);

        users = await manager.consultarUsuarios();
        console.log(users);
    }
    catch (error) {
        console.log(error);
    }
}
usersManager(); 
