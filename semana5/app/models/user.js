const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// el esquema se asigna a la coleccion
// define el formato de todo el doc en la coleccion
//toda las propiedades deben definise un SchemaType
const userSchema = new Schema({
    fulln: String,
    email: String,
    password: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;