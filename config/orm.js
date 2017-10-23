var connection = require("./connection.js");

// Object Relational Mapper (ORM)

var orm = {
  selectAll: function(tabelInput, cb) {
      var queryString = "SELECT * FROM " + tabelInput + ";";
      connection.query(queryString, function(err, res){
          if(err) throw err;
          else {
              cb(res);
          }
      })
  },
  insertOne: function() {

  },
  updateOne: function() {

  }
};

module.exports = orm;