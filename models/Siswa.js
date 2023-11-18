const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    nama : {
        type: String,
        required: [true, 'Silahkan isikan nama siswa'],
        unique: true
    },

    sekolah : {
        type: String,
        required: [true, 'Silahkan isikan nama sekolah'],
    },

    nis : {
        type: String,
        required: [true, 'Silahkan isikan nis siswa'],
    },

    tempat_lahir : {
        type: String,
        required: [true, 'Silahkan isikan tempat lahir siswa'],
    },

    alamat : {
        type: String,
        required: [true, 'Silahkan isikan alamat siswa'],
    },
})

module.exports = mongoose.model('Siswa', UserSchema)