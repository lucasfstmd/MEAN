const Produtos = require('../models/product.model');

module.exports = {
    async index(req, res){
        const produto = await Produtos.find();
        res.json({produto})
    },
    async create(req, res){
        const {nomeProduto, descricaoProduto, precoProduto, qntProduto} = req.body;

        let data = {};
        let product = Produtos.findOne({nomeProduto});
        if(!produto){
            data = {nomeProduto, descricaoProduto, precoProduto, qntProduto};
            produto = await Produtos.create(data);

            return  res.status(200).json(product);
        }else{
            return  res.status(500).json(product);
        }
    },
    async details(req, res){
        const {_id} = req.params;
        const produto = await Produtos.findOne({_id});

        res.json(produto);
    },
    async delete(req, res){
        const {_id} = req.params;
        const produto = await Produtos.findByIdAndDelete({_id})

        return res.json(produto);
    },
    async update(req, res){
        const {_id, nomeProduto, descricaoProduto, precoProduto, qntProduto} = req.body;
        const data = {nomeProduto, descricaoProduto, precoProduto, qntProduto};

        const produto = await Produtos.findOneAndUpdate({_id}, data, {new:true});

        return req.json(produto);
    }
}