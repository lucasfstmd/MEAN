const Usuario = require('../models/user.model');

module.exports = {
    async index(req, res){
        const user = await Usuario.find();
        res.json({user})
    },
    async create(req, res){
        const {nomeUsuario, emailUsuario, tipoUsuario, senhaUsuario} = req.body;

        let data = {};
        let user = Usuario.findOne({emailUsuario});
        if(!user){
            data = {nomeUsuario, emailUsuario, tipoUsuario, senhaUsuario};
            user = await Usuario.create(data);

            return  res.status(200).json(user);
        }else{
            return  res.status(500).json(user);
        }
    },
    async details(req, res){
        const {_id} = req.params;
        const user = await Usuario.findOne({_id});

        res.json(user);
    },
    async delete(req, res){
        const {_id} = req.params;
        const user = await Usuario.findByIdAndDelete({_id})

        return res.json(user);
    },
    async update(req, res){
        const {_id, nomeUsuario, emailUsuario, tipoUsuario, senhaUsuario} = req.body;
        const data = {nomeUsuario, emailUsuario, tipoUsuario, senhaUsuario};

        const user = await Usuario.findOneAndUpdate({_id}, data, {new:true});

        return req.json(user);
    }
}