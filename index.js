const groupBy = require("lodash.groupby");

function alphabeticalGroup(input = []) {
	return groupBy(input.sort(), item => {
		return item.toString()[0].toLowerCase();
	});
}
module.exports = alphabeticalGroup;