const path = require('path')

module.exports = {
    entry: {
        home: path.resolve(__dirname,'src/js/index.js'),
        price: path.resolve(__dirname, 'src/js/price.js'),
        contact: path.resolve(__dirname, 'src/js/contact.js'),
    }, 

    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js'
    }
}