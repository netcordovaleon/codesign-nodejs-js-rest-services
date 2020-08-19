const userModel = require('../models/user-model');

module.exports = {
    getAll: function (req, res, next) {
        let userList = [];
        userModel.find({}, function (err, users) {
            if (err) {
                next(err);
            } else {
                for (let user of users) {
                    userList.push({ id: user._id, nombre: user.nombre, email: user.email });
                }
                res.json(userList);
            }
        });
    },
    getById: function (req, res, next) {
        if (req.params.id === 'ABC123') {
            res.status(400);
            res.json({ status : 'Not Found', message : `El usuario con el ID: ${req.params.id} no existe` });
            return;
        }
        userModel.findOne({ _id: req.params.id }, function (err, userInfo) {
            if (err) {
                next(err);
            } else {
                res.json(userInfo);
            }
        });
    },
}