const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const dataSchema = new mongoose.Schema({
    nomeUsuario: String,
    emailUsuario: String,
    tipoUsuario:{type:Number, default:1},
    senhaUsuario: String,
},{
    timestamps:true
});

dataSchema.pre('save', function (next){
   if(!this.isModified('senhaUsuario')){
       return next();
   }
   this.senhaUsuario = bcrypt.hashSync(this.senhaUsuario, 10);
   next();
});

dataSchema.pre('findOneAndUpdate', function (next){
    var password = this.getUpdate().senhaUsuario+'';
    if(password.length<55){
        this.getUpdate().senhaUsuario = bcrypt.hashSync(password, 10);
    }
    next();
})

const Usuarios = mongoose.model("usuarios", dataSchema);

module.exports = Usuarios;