const { buscarEndereco } = require('utils-playground')
const fs = require('fs/promises');


async function procurarCep (req, res) {
    const cep = req.params.cep
    
    const enderecosJSON = await fs.readFile('enderecos.json');

    const enderecos = JSON.parse(enderecosJSON);

    const arrayDeEnderecos = JSON.stringify(enderecos);

    for (let i = 0; i <= arrayDeEnderecos.length; i++) {
        if (arrayDeEnderecos[i].cep == cep ) {
            return res.json(arrayDeEnderecos[i])        }
    }


}

module.exports = {
    procurarCep
}