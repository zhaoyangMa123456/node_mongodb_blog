var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/user")
const Schema = mongoose.Schema

const UserList = new Schema({
    name: String,
    password: String,
    mobile: String,
    createTime: {
        type: Date,
        default: Date.now()
    }
})
module.exports = mongoose.model('UserList', UserList)