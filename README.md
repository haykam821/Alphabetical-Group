# Alphabetical Group

[![GitHub release](https://img.shields.io/github/release/haykam821/Alphabetical-Group.svg?style=popout&label=github)](https://github.com/haykam821/Alphabetical-Group/releases/latest)
[![npm](https://img.shields.io/npm/v/alphabetical-group.svg?style=popout&colorB=red)](https://www.npmjs.com/package/alphabetical-group)
[![Travis (.com)](https://img.shields.io/travis/com/haykam821/Alphabetical-Group.svg?style=popout)](https://travis-ci.com/haykam821/Alphabetical-Group)

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