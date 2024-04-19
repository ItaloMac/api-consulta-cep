const { buscarEndereco } = require('utils-playground')
const fs = require('fs/promises');
const path = require('path');


async function procurarCep (req, res) {
    const {cepBuscado} = req.params
    
    try {
        const enderecosJSON = await fs.readFile(path.join(__dirname, '../enderecos.json'));

        const enderecos = JSON.parse(enderecosJSON);
        console.log('Conteúdo do arquivo JSON:', enderecos);


        for (let i = 0; i < enderecos.length; i++) {
            if (enderecos[i].cep === cepBuscado ) {
                return res.json(enderecos[i])        }
        }

        res.status(404).json({error: 'CEP NAO ENCONTRADO'});
    } catch (error) {
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
    


}

module.exports = {
    procurarCep
}