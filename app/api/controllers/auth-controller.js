require('../../config/setup')
const userModel = require('../models/user-model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
    create: function (req, res, next) {

        userModel.create({ nombre: req.body.nombre, email: req.body.email, password: req.body.password }, function (err, result) {
            if (err)
                next(err);
            else
                res.json({ status: "Ok", message: "Se agrego al usuario de forma satisfactoria" });

        });
    },
    authenticate: function (req, res, next) {
        userModel.findOne({ email: req.body.email }, function (err, userInfo) {
            if (err) {
                next(err);
            } else {
                if (bcrypt.compareSync(req.body.password, userInfo.password)) {
                    const token = jwt.sign({ id: userInfo._id }, req.app.get('secretKey'), { expiresIn: process.env.CADUCIDAD_TOKEN });
                    res.json({ user: userInfo, token: token });
                } else {
                    res.json({ status: "Error", message: "Usuario o password invalido" });
                }
            }
        });
    },
}