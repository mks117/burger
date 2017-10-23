var connection = require("./connection.js");

function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }
  
  function objToSql(ob) {
    var arr = [];
  
    for (var key in ob) {
      if (Object.hasOwnProperty.call(ob, key)) {
        arr.push(key + "=" + ob[key]);
      }
    }
  
    return arr.toString();
  }

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
  insertOne: function(table, cols, vals, cb) {
    var queryString = "INSERT INTO  " + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, vals, function(err, res) {
        if(err) {
            throw err;
        }
        cb(res);
    });
  },
  updateOne: function(table, objColVals, condition, cb) {
    var queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  //delete
  delete: function(table, condition, cb) {
    var queryString = "DELETE FROM " + table;
    queryString += " WHERE " + condition;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if(err) {
        throw err;
      }

      cb(result);
    });
  }
};

module.exports = orm;