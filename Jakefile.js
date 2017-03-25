// Learning Automated Build with Let's Learn Test Driven JS
(function() {
	"use strict";

	var EXPECTED_NODE_VERSION = "v0.12.4"
	desc("Default Build");
	task("default", [ "version" ], function(){
		console.log("\n BUILD SUCCESS\n");
	});

	desc("Check Node Version");
	task("version", function() {
		console.log("Checking Node Version: .");
		var actualVersion = process.version;
		if (actualVersion !== EXPECTED_NODE_VERSION) 
			fail("Node version does not match: expected " + EXPECTED_NODE_VERSION + ", but was " + actualVersion);

	});
}());