var React = require('react');

var ConfirmBattle = function(props){
	return props.isLoading ?
		<div> Is Loading </div> :
		<div>Confirm Battle</div>

}

module.exports = ConfirmBattle;