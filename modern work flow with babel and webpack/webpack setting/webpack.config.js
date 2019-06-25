const path = require('path');
//path is a node module path property .and it has a method .resolve()
//.resolve() take 2 arguments (__dirname,'target folder'),like (__dirname,'dist/assets')


module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist/assets'),
        filename: 'bundle.js'
    }
};


//module.exports can only run in computer not browser 
//entry is a relative path './' current + folder + start_file.js
//set output:{path:""} ,path is a absolute path like /Documents/learning-javascript-ninja/modern work flow with babel and webpack/webpack setting
// but use node property path can use __dirname to navigate to the current folder path
//then set filename:''our_wanted_name.js' like "bundle.js"