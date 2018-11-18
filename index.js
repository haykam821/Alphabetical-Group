const groupBy = require("lodash.groupby");

/**
 * Groups an array alphabetically.
 * @param {*[]} input An array of stringifiable values.
 * @returns {Object} An object mapping characters to the values that start with it.
 */
function alphabeticalGroup(input = []) {
	return groupBy(input.sort(), item => {
		return item.toString()[0].toLowerCase();
	});
}
module.exports = alphabeticalGroup;