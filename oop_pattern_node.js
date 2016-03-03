/*
*	Test object - oop_pattern_node.js
*   This object is a template for node.js with oop-object-pattern approach
*/

var app = require('server');
var lib = require('lib.js');

var obj = OOPTestObject.prototype;

function OOPTestObject(){
	this.test_int = 0;
	this.test_array = [];
	this.callback = null;
};

//Configure step
obj.configure = function(val, data, cb){
	this.clean();

	this.test_int = val;
	this.test_array = data;
	this.callback = cb;

	//auto execute? this.execute();
};

obj.execute = function() {
	for(var idx in this.test_array){
		this.test_int = this.test_int + this.test_array[idx];
	}

	//Could be recursive by calling itself. Don't forget the test to break up with recursivity

	if(this.callback!=null) this.callback();
};

obj.getResult = function(){
	return this.test_int;
};


//Utils

obj.clean = function(){
	this.test_int = 0;
	this.test_array = [];
	this.callback = null;
};

module.exports = OOPTestObject;


/**********
* Sample use:
*
* var OOPTest = require('oop_pattern_node.js');
* var myObj = new OOPTest();
*
* myObj.configure(0, [3,2,1], null);
* myObj.execute();
*
*/
