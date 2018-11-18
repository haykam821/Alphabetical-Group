# Alphabetical Group

Alphabetically groups an array of strings.

## Installation

Install with `npm`:

    npm install alphabetical-group

## Usage

First, require the module:

```js
const alphabeticalGroup = require("alphabetical-group");
```

Simply input an array of stringable values:

```js
alphabeticalGroup([
	"alpha",
	"bravo",
	"charlie",
	"Chestnut",
	"yesterday",
]);
```

This will return an object that will look like this:

```json
{
	"c": [
		"Chestnut",
		"charlie"
	],
	"a": [
		"alpha"
	],
	"b": [
		"bravo"
	],
	"y": [
		"yesterday"
	]
}
```