;(function() {
	tasks = {
		init: function() {
			console.log("Init method of task object literal called");
			this.test();
		}
		, test: function() {
			console.log("test method of task object on init()");
		}

	}

	tasks.init();
})();