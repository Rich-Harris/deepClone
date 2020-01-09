// https://github.com/Rich-Harris/deepClone
// --------------------------------------
//
// MIT licensed. Go nuts.

(function ( global ) {

	'use strict';

	var deepClone;

	deepClone = function ( obj ) {
		var key, i, result;

		// if it's a primitive, do nothing
		if ( typeof obj !== 'object' || !obj ) {
			return obj;
		}

		// if it's an array, iterate
		if ( Object.prototype.toString.call( obj ) === '[object Array]' ) {
			result = [];

			i = obj.length;
			while ( i-- ) {
				if ( obj.hasOwnProperty( i ) ) {
					if ( typeof obj[i] === 'object' ) {
						result[i] = deepClone( obj[i] );
					}

					else {
						result[i] = obj[i];
					}
				}
			}
		}

		// if it's an object, enumerate
		else {
			result = {};

			for ( key in obj ) {
				if ( obj.hasOwnProperty( key ) ) {
					if ( typeof obj[ key ] === 'object' ) {
						result[ key ] = deepClone( obj[ key ] );
					}

					else {
						result[ key ] = obj[ key ];
					}
				}
			}
		}

		return result;
	};

	// export as CommonJS module...
	if ( global.module && global.module.exports ) {
		global.module.exports = deepClone;
	}

	// ... or as AMD module...
	else if ( global.define && global.define.amd ) {
		global.define( function () { return deepClone; });
	}

	// ... or as browser global
	else {
		global.deepClone = deepClone;
	}

}( this ));
