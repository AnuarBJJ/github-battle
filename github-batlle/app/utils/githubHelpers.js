var axios = require('axios');

var id = "YOUR_COIENT_ID";
var sec = "YOUR_SECRET_ID";
var params = "?client_id" + id + "&client_secret=" + sec;

function getUserInfo(username){
	return axios.get('http://api.github.com/users/'+ username + params);
}

var helpers = {
	getPlayersInfo: function(players){
		return axios.all(players.map(function(username){
			return getUserInfo(username);
		})).then(function(info){
			return info.map(function(user){
				return user.data;
			})
		})
	}
};

module.exports = helpers;