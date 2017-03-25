// Learning Automated Build with Let's Learn Test Driven JS
(function() {
	"use strict";

	
	desc("Default Build");
	task("default", [ "version" ], function(){
		console.log("\n BUILD SUCCESS\n");
	});

	desc("Check Node Version");
	task("version", function() {
		console.log("Checking Node Version: .");
		var expectedVersion = "v0.12.4"

		var packageJson = require("./package.json");
		var expectedVersion = "v" + packageJson.engines.node;

		var actualVersion = process.version;
		if (actualVersion !== expectedVersion) 
			fail("Node version does not match: expected " + expectedVersion + ", but was " + actualVersion);

	});
}());