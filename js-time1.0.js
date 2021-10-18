/*
	JS-Time included via Robson04.
	Copyright (C) 2021-10-16.
*/

$(document).ready(function(){
	var d = new Date();
	SecondUpdate();

	if($(".jt-year")[0]){
		var year = d.getFullYear();
		$(".jt-year").html(year);
	}

	if($(".jt-month")[0]){
		var month = d.getMonth();
		$(".jt-month").html(month + 1);
	}

	if($(".jt-month-name")[0]){
		var monthname = getMonthName(d);
		$(".jt-month-name").html(monthname);
	}

	if($(".jt-day")[0]){
		var day = d.getDate();
		$(".jt-day").html(day);
	}

	if($(".jt-date")[0]){
		var year = d.getFullYear(), month = d.getMonth(), day = d.getDate(), pattern = $(".jt-date").html();
		var tmp_days = pattern.search("DD"), tmp_months = (pattern.search("MM") != -1 ? (pattern.search("MM")) : pattern.search("MN")), tmp_years = pattern.search("YYYY");
		var string;
		if(tmp_days < tmp_months && tmp_days < tmp_years) { //tmp_days first
			separator = pattern.substring(2, 3);
			string = day + separator;
			if(tmp_months < tmp_years)
				string = string + formatDateNumber((pattern.search("MM") != -1 ? (month) : (getMonthName(d)))) + separator + year;
			else string = string + year + separator + formatDateNumber((pattern.search("MM") != -1 ? (month) : (getMonthName(d))));
		}
		else if(tmp_months < tmp_days && tmp_months < tmp_years) {
			separator = pattern.substring(2, 3); 
			string =  formatDateNumber((pattern.search("MM") != -1 ? (month) : (getMonthName(d)))) + separator;
			if(tmp_days < tmp_years)
				string = string + day + separator + year;
			else string = string + year + separator + day;
		}
		else {
			separator = pattern.substring(4, 5);
			string = year + separator;
			if(tmp_days < tmp_years) {
				string = string + day + formatDateNumber((pattern.search("MM") != -1 ? (month) : (getMonthName(d))));
			}
			else string = string + formatDateNumber((pattern.search("MM") != -1 ? (month) : (getMonthName(d)))) + separator + day;
		}
		$(".jt-date").html(string);
	}
});

function getMonthName(date){
	var month = date.getMonth(), lang = $("html").attr("lang");
	const name_EN = ["January", "February", "March", "April", "May", "June", "Juli", "August", "September", "October", "November", "December"];
	const name_PL = ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień."];
	const name_DE = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];
	if(lang != undefined) {
		if(lang == "pl") return name_PL[month];
		else if(lang == "de") return name_DE[month];
		else return name_EN[month];
	}
	else {
		console.log('%cWarning: Use lang attribute in <html>. Example: <html lang="en">. Default set langauge is English.', 'color: red;');
		return name_EN[month];
	}
}

function formatDateNumber(num) {
	if(Number.isInteger(num) == true) {
		if(num <= 9) return num = '0' + num;
		else return num;
	}
}

function SecondUpdate() {
	checkActualTimeClass(); //jt-time
	checkHoursClass(); //jt-hours
	checkMinutesClass(); //jt-minutes
	checkSecondsClass(); //jt-seconds
}

function checkActualTimeClass(){
	var d = new Date;
	if($(".jt-time").attr("jt-update") == "true")
		setTimeout(checkActualTimeClass, 1000);
	$(".jt-time").html(d.toLocaleTimeString());
};

function checkHoursClass() {
	var attrupdate = $(".jt-hour").attr("jt-update");
	var d = new Date, hours = d.getHours();
	$(".jt-hour").html(formatDateNumber(hours));
	if(attrupdate == "true")
		setTimeout(checkHoursClass, 1000);
}

function checkMinutesClass() {
	var attrupdate = $(".jt-minute").attr("jt-update");
	var d = new Date, minutes = d.getMinutes();
	$(".jt-minute").html(formatDateNumber(minutes));
	if(attrupdate == "true")
		setTimeout(checkMinutesClass, 1000);
}

function checkSecondsClass() {
	var attrupdate = $(".jt-second").attr("jt-update");
	var d = new Date, seconds = d.getSeconds();
	$(".jt-second").html(formatDateNumber(seconds));
	if(attrupdate == "true")
		setTimeout(checkSecondsClass, 1000);
}
