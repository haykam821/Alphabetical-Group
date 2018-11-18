const groupBy = require("lodash.groupby");

/**
 * Group an array alphabetically.
 * @param {*[]} input An array of stringifiable values.
 */
function alphabeticalGroup(input = []) {
	return groupBy(input.sort(), item => {
		return item.toString()[0].toLowerCase();
	});
}
module.exports = alphabeticalGroup;