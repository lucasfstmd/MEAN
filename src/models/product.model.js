const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    nomeProduto: String,
    descricaoProduto: String,
    precoProduto: Number,
    qntProduto:{type:Number, default:0}
},{
    timestamps:true
});

const Produtos = mongoose.model("produtos", dataSchema);
module.exports = Produtos;