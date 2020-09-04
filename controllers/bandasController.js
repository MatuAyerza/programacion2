let listaBandas = require('../modules/bandas');
const controller = {
    index: (req, res) => {
        return res.render('listadoBandas', {listaBandas: listaBandas.lista, title: 'Lista de Bandas'});
    },
    id: (req, res) => {
        let idBanda = req.params.id
        bandaDetails = listaBandas.getBandaDetails(idBanda)
        return res.render('detalleBanda', {bandaDetails: bandaDetails, title: 'Detalles de '+ bandaDetails[0].nombre, bandasSimilares: listaBandas.porGenero(bandaDetails[0].genero)});
    },
    genero: (req, res) => {
        let generoSelected = req.params.genero
        generoList = listaBandas.porGenero(generoSelected)
        return res.render('porGenero', {generoList: generoList, title: 'Lista de Bandas de ' + generoList[0].genero});
    },
}

module.exports = controller