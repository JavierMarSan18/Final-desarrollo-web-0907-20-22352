const db = require('../config/sqlite3/mydb.js');

const getProducts = async() => {
    return await new Promise((resolve, reject) => {
        const connection = db.getConnection();
        connection.all(`SELECT id, nombre, precio, codigo, existencia FROM productos`, (err, rows) => {
            if (err) {
                reject(err);
                connection.close();
            }
            resolve(rows);
        });
        connection.close();
    });
}

const getProductById = async(id) => {
    return await new Promise((resolve, reject) => {
        const connection = db.getConnection();
        connection.get(`SELECT id, nombre, precio, codigo, existencia FROM productos WHERE id = ?`, [id], (err, row) => {
            if (err) {
                reject(err);
                connection.close();
            }
            resolve(row);
        });
        connection.close();
    });
}

const createProduct = async(product) => {
    return new Promise((resolve, reject) => {
        const connection = db.getConnection();
        connection.run(`INSERT INTO productos (nombre, precio, codigo, existencia) VALUES (?, ?, ?, ?)`, [product.nombre, product.precio, product.codigo, product.existencia], function(err) {
            if (err) {
                reject(err);
                connection.close();
                return;
            }      
            resolve(this.lastID);
            connection.close();
        });
    });

}

const updateProduct = async(product) => {
    return await new Promise((resolve, reject) => {
        const connection = db.getConnection();
        connection.run(`UPDATE productos SET nombre = ?, precio = ?, codigo = ?, existencia = ? WHERE id = ?`, [product.nombre, product.precio, product.codigo, product.existencia, product.id], function(err) {
            if (err) {
                reject(err);
                connection.close();
                return;
            }      
            resolve(this.lastID);
            connection.close();
        });
    });
}

const deleteProduct = async(id) => {
    return await new Promise((resolve, reject) => {
        const connection = db.getConnection();
        connection.run(`DELETE FROM productos WHERE id = ?`, [id], function(err) {
            if (err) {
                reject(err);
                connection.close();
                return;
            }      
            resolve(this.lastID);
            connection.close();
        });
    });

}

module.exports = {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
}