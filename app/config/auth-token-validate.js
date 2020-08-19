const jwt = require('jsonwebtoken');

const validateTokenAccess = (req, res, next) => {
    
    jwt.verify(req.headers['x-access-token'], req.app.get('secretKey'), function (err, decoded) {
        if (err) {
            res.status(401);
            res.json({ status: "NO-AUTORIZADO", message: err.message });
        } else {
            // add user id to request
            //req.body.userId = decoded.id;
            //console.log(decoded.id);
            next();
        }
    });
}

module.exports = validateTokenAccess;