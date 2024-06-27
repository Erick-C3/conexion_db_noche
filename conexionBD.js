const { createConnection } = require("mysql2/promise");

async function crearConexion() {
    return await createConnection({
        host: "localhost",
        user: "root",
        database: "restaurante",
        password: "123123"
    });
}


async function main() {
    const conexionBD = await crearConexion();
    const [resultado] = await conexionBD.query("SELECT * FROM platos;");
    console.table(resultado);
    conexionBD.end();
}


main();