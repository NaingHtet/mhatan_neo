var dynamodb = require('./aws/dynamodb');

exports.getPassword = function(email, callback) {
  var params = {
  	"TableName": "User",
  	"Key": {
  		"Email": {
  			"S": email
  		}
  	},
  	"AttributesToGet": ["Password"]
  };

  dynamodb.getItem(params, function(err, data) {
  	if (err) {
  		console.log(err);
  	} else {
      if (data.Item) {
  		  var password = data.Item.Password.S;
  		  callback(err, password);
      } else {
        callback("No Password", password);
      }
  	}
  });
};

exports.checkUuid = function(uuid, callback) {
  var params = {
    "TableName": "User",
    
  }

}

exports.registerUser = function(email, password, penname, uuid, callback){
  console.log(password);
  var params = {
    "TableName": "User",
    "Item": {
      "Email": {
        "S": email
      },
      "Password": {
        "S": password
      },
      "PenName": {
        "S": penname
      },
      "UserId": {
        "S": uuid
      }
    },
    "Expected": {
      "Email": {
        "Exists": false
      }
    }
  };

  dynamodb.putItem(params, function(err, data) {
    if(err) {
      console.log(err);
    } else {
      callback(err, data);
    }
  });

};