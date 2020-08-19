# NODEJS(JS) + EXPRESS + MONGOOSE

*Author: Luis Córdova Leon*

## NPM Packages:
Packages required:
```nodejs
npm i express
npm i body-parser
npm i bcrypt
npm i jsonwebtoken
```

## Installation
You need to install NodeJS in your PC
```bash
npm intall
```

## Usage

Fist: You should change values in config/setup.js

Program run in PORT 3000
```nodejs
process.env.PORT = process.env.PORT || 3000;
```

Change 'localhost connection' by your connection MongoDB
```nodejs
process.env.URLDB = process.env.URLDB || 'localhost connection';
```
(Optional) Change if you want a token for long time
```nodejs
process.env.CADUCIDAD_TOKEN = '1h';
```

(Optional) Change the SEED, this encrypt your TOKEN
```nodejs
process.env.SEED_AUTENTICATION = process.env.SEED_AUTENTICATION || 'este-es-el-seed-desarrollo';
```

## License
NO LICENCES