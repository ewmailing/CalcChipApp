/*
 * Single Window Application Template:
 * A basic starting point for your application.  Mostly a blank canvas.
 * 
 * In app.js, we generally take care of a few things:
 * - Bootstrap the application with any data we need
 * - Check for dependencies like device type, platform version or network connection
 * - Require and open our top-level UI component
 *  
 */

//bootstrap and check dependencies
if (Ti.version < 1.8 ) {
	alert('Sorry - this application template requires Titanium Mobile SDK 1.8 or later');	  	
}

var	calcexample = require("co.lanica.calcswig");

function measureFunction(workFunct,name,loopCount,sampleSize){
	var label_text;
	if(!loopCount) loopCount = 500;
	if(!sampleSize) sampleSize = 20;
	if(!name) name = "test";
	var results = [];
	var sum = 0;
	var i,j;

	for(j=0;j<sampleSize;j++){
		label_text = 'Testing '+Ti.version+' ('+Ti.buildDate+') with '+name+' (' + 100 * j / sampleSize + '%)...';
		var startTime = Date.now();
		for(i=0;i<loopCount;i++){
			workFunct();
		}
		var endTime = Date.now();
		results[j]=endTime-startTime;
		sum += results[j];
	}
	label_text = 'Results for ' + name + ' (Avg ' + (sum/sampleSize) + '): ' + results.join(', ');
	Ti.API.debug(label_text);	
}


function runSwigBenchmarks()
{
	var example_emptyCall = example.emptyCall;
	var example_returnDouble = example.returnDouble;
	var example_returnString = example.returnString;
	var example_passDouble = example.passDouble;
	var example_passString = example.passString;
	var example_passAndReturnDouble = example.passAndReturnDouble;
	var example_passAndReturnString = example.passAndReturnString;
	var example_pass2Double = example.pass2Double;
	var example_pass2String = example.pass2String;

	measureFunction(function(){example_emptyCall();},'example_emptyCall', 1000000, 1);

	measureFunction(function(){var retval = example_returnDouble();},'example_returnDouble', 1000000, 1);
	measureFunction(function(){example_passDouble(123.45);},'example_passDouble', 1000000, 1);
	measureFunction(function(){var retval = example_passAndReturnDouble(123.45);},'example_passAndReturnDouble', 1000000, 1);
	measureFunction(function(){example_pass2Double(123.45, 1.0);},'example_pass2Double', 1000000, 1);

	measureFunction(function(){var retval = example_returnString();},'example_returnString', 1000000, 1);
	measureFunction(function(){example_passString("Hello World");},'example_passString', 1000000, 1);
	measureFunction(function(){var retval = example_passAndReturnString("Hello World");},'example_passAndReturnString', 1000000, 1);
	measureFunction(function(){example_pass2String("Hello", "World");},'example_pass2String', 1000000, 1);

	measureFunction(function(){example.measure_c_function();},'example.measure_c_function();', 1, 1);

	
}

function javascript_addFunction(a, b)
{
	return a+b;
}
function runJavascriptBenchmarks()
{
	var javascript_emptyCall = function() { };

	measureFunction(function(){javascript_emptyCall();},'javascript_emptyCall', 10000000, 1);
	measureFunction(function(){var retval = javascript_addFunction(123.45, 1.0);},'javascript_addFunction', 10000000, 1);
	measureFunction(function(){var temp = new Date();},'new Date()', 10000000, 1);
}


function runTitaniumBenchmarks()
{
/* Aliasing like this doesn't work due to the way Titanium implemented their (v8) bridge. */
/*
	var tiexample_emptyCall = calcexample.emptyCall;
	var tiexample_returnDouble = calcexample.returnDouble;
	var tiexample_returnString = calcexample.returnString;
	var tiexample_passDouble = calcexample.passDouble;
	var tiexample_passString = calcexample.passString;
	var tiexample_passAndReturnDouble = calcexample.passAndReturnDouble;
	var tiexample_passAndReturnString = calcexample.passAndReturnString;
	var tiexample_pass2Double = calcexample.pass2Double;
	var tiexample_pass2String = calcexample.pass2String;

	var tiexample_returnDoubleArray2 = calcexample.returnDoubleArray2;
	var tiexample_returnStringArray2 = calcexample.returnStringArray2;


	measureFunction(function(){tiexample_emptyCall();},'tiexample_emptyCall', 10000000, 1);
	measureFunction(function(){var retval = tiexample_returnDouble();},'tiexample_returnDouble', 10000000, 1);
	measureFunction(function(){var retval = tiexample_returnString();},'tiexample_returnString', 10000000, 1);
	measureFunction(function(){tiexample_passDouble(123.45);},'tiexample_passDouble', 10000000, 1);
	measureFunction(function(){tiexample_passString("Hello World");},'tiexample_passString', 10000000, 1);
	measureFunction(function(){var retval = tiexample_passAndReturnDouble(123.45);},'tiexample_passAndReturnDouble', 10000000, 1);
	measureFunction(function(){var retval = tiexample_passAndReturnString("Hello World");},'tiexample_passAndReturnString', 10000000, 1);
	measureFunction(function(){tiexample_pass2Double(123.45, 1.0);},'tiexample_pass2Double', 10000000, 1);
	measureFunction(function(){tiexample_pass2String("Hello", "World");},'tiexample_pass2String', 10000000, 1);

	measureFunction(function(){calcexample.propDoub = 123.45;},'calcexample.propDoub = 123.45', 10000000, 1);
	measureFunction(function(){var retval = calcexample.propDoub;},'var retval = calcexample.propDoub', 10000000, 1);
	measureFunction(function(){calcexample.propStr = "Hello World";},'calcexample.propStr = "Hello World"', 10000000, 1);
	measureFunction(function(){var retval = calcexample.propStr;},'var retval = calcexample.propStr', 10000000, 1);

	measureFunction(function(){var retval = tiexample_returnDoubleArray2();},'tiexample_returnDoubleArray2', 10000000, 1);
	measureFunction(function(){var retval = tiexample_returnStringArray2();},'tiexample_returnStringArray2', 10000000, 1);
*/

	measureFunction(function(){calcexample.emptyCall();},'calcexample.emptyCall', 100000, 1);
//	measureFunction(function(){var retval = calcexample.returnDouble();},'calcexample.returnDouble', 100000, 1);
//	measureFunction(function(){var retval = calcexample.myRetDoub();},'calcexample.returnDouble', 100000, 1);
	measureFunction(function(){var retval = calcexample.propDoub;},'var retval = calcexample.propDoub', 100000, 1);
	measureFunction(function(){calcexample.passDouble(123.45);},'calcexample.passDouble', 100000, 1);
	measureFunction(function(){calcexample.propDoub = 123.45;},'calcexample.propDoub = 123.45', 100000, 1);
	measureFunction(function(){var retval = calcexample.passAndReturnDouble(123.45);},'calcexample.passAndReturnDouble', 100000, 1);
	measureFunction(function(){calcexample.pass2Double(123.45, 1.0);},'calcexample.pass2Double', 100000, 1);

//	measureFunction(function(){var retval = calcexample.returnString();},'calcexample.returnString', 100000, 1);
//	measureFunction(function(){var retval = calcexample.myRetStr();},'calcexample.returnString', 100000, 1);
	measureFunction(function(){var retval = calcexample.propStr;},'var retval = calcexample.propStr', 100000, 1);
	measureFunction(function(){calcexample.passString("Hello World");},'calcexample.passString', 100000, 1);
	measureFunction(function(){calcexample.propStr = "Hello World";},'calcexample.propStr = "Hello World"', 100000, 1);
	measureFunction(function(){var retval = calcexample.passAndReturnString("Hello World");},'calcexample.passAndReturnString', 100000, 1);
	measureFunction(function(){calcexample.pass2String("Hello", "World");},'calcexample.pass2String', 100000, 1);


//	measureFunction(function(){var retval = calcexample.returnDoubleArray2();},'calcexample.returnDoubleArray2', 10000000, 1);
//	measureFunction(function(){var retval = calcexample.returnStringArray2();},'calcexample.returnStringArray2', 10000000, 1);

}





// This is a single context application with multiple windows in a stack
(function() {
	//render appropriate components based on the platform and form factor
	var osname = Ti.Platform.osname,
		version = Ti.Platform.version,
		height = Ti.Platform.displayCaps.platformHeight,
		width = Ti.Platform.displayCaps.platformWidth;
	
	//considering tablet to have one dimension over 900px - this is imperfect, so you should feel free to decide
	//yourself what you consider a tablet form factor for android
	var isTablet = osname === 'ipad' || (osname === 'android' && (width > 899 || height > 899));
	
	var Window;
	if (isTablet) {
		Window = require('ui/tablet/ApplicationWindow');
	}
	else {
		// Android uses platform-specific properties to create windows.
		// All other platforms follow a similar UI pattern.
		if (osname === 'android') {
			Window = require('ui/handheld/android/ApplicationWindow');
		}
		else {
			Window = require('ui/handheld/ApplicationWindow');
		}
	}
	var the_window = new Window();
	
	
	var btn1 = Ti.UI.createButton({width:200,height:60,left:10,top:110,title:'Run SWIG'});
	btn1.addEventListener('click',function()
		{
			runSwigBenchmarks();
			
		}
	);
	the_window.add(btn1);

	var btn2 = Ti.UI.createButton({width:200,height:60,left:10,top:190,title:'Run Javascript'});
	btn2.addEventListener('click',function()
		{
			runJavascriptBenchmarks();
		}
	);
	the_window.add(btn2);

	var btn3 = Ti.UI.createButton({width:200,height:60,left:10,top:270,title:'Run Titanium'});
	btn3.addEventListener('click',function()
		{
			runTitaniumBenchmarks();
		}
	);
	the_window.add(btn3);

/*
	var btn3 = Ti.UI.createButton({width:200,height:60,left:10,top:650,title:'Run Titanium'});
	btn3.addEventListener('click',function()
		{
			runTitaniumBenchmarks();
		}
	);
	the_window.add(btn3);
*/



	the_window.open();
	
	
var sometext = calcexample.example();
Ti.API.info("module example is => " + sometext);

calcexample.emptyCall();
Ti.API.info("calcexample emptyCall is => " );

var themod = example.my_mod(10, 4);
Ti.API.info("module my_mod is => " + themod);




})();

