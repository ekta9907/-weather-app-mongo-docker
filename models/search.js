const mongoose =  require('mongoose');

const searchSchema = new mongoose.Schema(
{
city : {
    type : String,
    required : true

}

},
{
timestamps :true
}


);

module.exports = mongoose.model(
"searchSchema",
searchSchema

);