/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
"use strict";

const compareLocations = require("./compareLocations");
const DependencyReference = require("./dependencies/DependencyReference");

class Dependency {
	constructor() {
		this.module = null;
		this.weak = false;
		this.optional = false;
		this.loc = undefined;
	}

	getResourceIdentifier() {
		return null;
	}

	// TODO webpack 5: rename to getReferences and always return an array
	/**
	 * Returns the referenced modules and exports
	 * @param {boolean=} allowMultiple opt-in into new behavior returning an array of references
	 * @returns {DependencyReference|DependencyReference[]} reference(s)
	 */
	getReference(allowMultiple) {
		if (!this.module) return null;
		return new DependencyReference(this.module, true, this.weak);
	}

	// Returns the exported names
	getExports() {
		return null;
	}

	getWarnings() {
		return null;
	}

	getErrors() {
		return null;
	}

	updateHash(hash) {
		hash.update((this.module && this.module.id) + "");
	}

	disconnect() {
		this.module = null;
	}
}
Dependency.compare = (a, b) => compareLocations(a.loc, b.loc);

module.exports = Dependency;
