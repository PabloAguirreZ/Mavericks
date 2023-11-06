/*instalar npm i body-parcer*/

const mongoose = require('mongoose')
const model = require('../models/user')

const options = {
    page: 1,
    limit: 3
};

exports.getData = (req, res) => {
    model.paginate({}, options, (err, comentarios) => {
        res.send({
            items: comentarios
        })
    })
}

exports.insertData = (req, res) => {
    const data = document.getElementById("intr").value
    model.create(data, (err, comentarios) => {
        if (err) {
            res.status(422.).send({ error: 'Error' })
        } else {
            res.send({ data: comentarios })
        }

    })
}
