
$(document).on('ready', function(){

	var date = new Date();

	if (date.getHours()>12) {
		var isPm = true;
	}
	else {
		isPm = false;
	};

	var getTime = function () {
		
		var str = ""
		var d = new Date();
		var hrs = d.getHours();
		var minutes = d.getMinutes();

		if (minutes < 10) {
			minutes = "0"+minutes;
		};

		if (isPm === true) {
			hrs = hrs - 12;
		};

		return str = hrs.toString() + ":" + minutes.toString();
	};


	// var alarmClock = function(outShell,inShell,amPmLabel,clockScreen, clockText, amPmInd, amStat, fmStat){
	var outShell = $('<div class="outer-shell"></div>');
	var inShell = $('<div class="inner-shell"></div>');
	var amPmLabel = $('<div class="ampm-label"><ul><li>PM</li><li>Auto</li></ul></div>');
	var clockScreen = $('<div class="clock-screen"></div>');
	var clockText = $('<h1 class="remove-css clock-text">' +getTime()+ '</h1>');
	var amPmInd = $('<div class="ampm-ind"></div>');
	var amStat = $('<div class="am-stat radio-text"><pre class="remove-css">AM  53  60  70  90 110 140 170 <span class="subscript"> x10</span> KHz</pre></div>');
	var fmStat = $('<div class="fm-stat radio-text"><pre class="remove-css">FM  88  92  96   102  106  108     MHz</pre></div>');



		$('.main-container').append(outShell);
		outShell.append(inShell);
		inShell.append(amPmLabel);
		inShell.append(clockScreen);
		inShell.append(amStat);
		inShell.append(fmStat);
		if (isPm === true) {
			clockScreen.append(amPmInd);	
		};
		clockScreen.append(clockText);	


});



