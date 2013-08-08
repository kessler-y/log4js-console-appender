"use strict";
var layouts = require('log4js').layouts;

function consoleAppender(layout, consoleType) {
  layout = layout || layouts.colouredLayout;

  if (consoleType === 'error')  {
  	
  	return function(loggingEvent) {
		console.error(layout(loggingEvent));
	};	

  } else {

	return function(loggingEvent) {
		console.log(layout(loggingEvent));
	};	
	
  }
  
}

function configure(config) {
  var layout;
  if (config.layout) {
    layout = layouts.layout(config.layout.type, config.layout);
  }
  return consoleAppender(layout, config.streamType);
}

exports.appender = consoleAppender;
exports.configure = configure;