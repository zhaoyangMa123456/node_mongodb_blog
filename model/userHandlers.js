const userListModel = require('./userList')

/**
 * 插入
 */
function insert() {
    var User = new userListModel({
        name: '马朝阳',
        password: '123456',
        mobile: '15230303030',
        date: new Date()
    });

    User.save(function (err, res) {
        if (err) {
            console.log("Error:" + err);
        }
        else {
            console.log("Res:" + res);
        }
    });
}

insert();