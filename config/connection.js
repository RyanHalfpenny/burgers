var mysql = require ('mysql');

var connection;

if (process.env.JAWSDB_URL)
{
	connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else
{
	connection = mysql.createConnection(
	{
		host: 'lg7j30weuqckmw07.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
		user: 'oqxl65wqofo0o0gr',
		password: 'js2g3ubazdj0rn1m',
		database: 'el01iru8kc88zurn'
	});
};


connection.connect(function(err) 
{
  if (err) 
  {
    console.error('error connecting: ' + err.stack);
    return;
  };
  console.log('connected as id ' + connection.threadId);
});

module.exports = connection;