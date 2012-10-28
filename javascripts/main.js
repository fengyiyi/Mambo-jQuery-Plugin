/*
 * Mambo jQuery Plugin
 * @author: Valerio Barrila aka NinjaTux
 * @twitter: ninjatux2k
 */(function(a,b,c,d){"use strict";function i(b,c){this.element=b;this.options=a.extend(!0,{},f,c);this._defaults=f;this._name=e;this.init()}var e="mambo",f={internalCircle:{line:"#000",fill:"#FF0000"},percentage:{drawUnfilled:!1,color:"#00FF00",unfilledColor:"rgb(166, 166, 166)"},drawShadow:!1,displayValue:!0},g=Math.PI/180,h=2*Math.PI;i.prototype.init=function(){if(this.checkCanvas()){this.context=this.element.getContext("2d");this.value=this.getValueDegrees();this.points=this.getPoints();a(this.element).css({width:this.points.width+"px",height:this.points.width+"px"});this.linesAndRadiuses=this.getLinesAndRadiuses();this.drawPercentage();this.options.percentage.drawUnfilled&&this.drawExtraPercentage();this.drawInternalCircle();this.options.drawShadow&&this.drawShadow();this.drawText()}};i.prototype.drawInternalCircle=function(){this.context.beginPath();this.context.arc(this.points.x,this.points.x,this.linesAndRadiuses.internalRadius,0,h,!1);this.context.fillStyle=this.options.internalCircle.fill;this.context.lineWidth=this.linesAndRadiuses.internalLine;this.context.strokeStyle=this.options.internalCircle.line;this.context.stroke();this.context.fill()};i.prototype.drawPercentage=function(){this.context.beginPath();this.context.lineWidth=this.linesAndRadiuses.extLine;this.context.arc(this.points.x,this.points.x,this.linesAndRadiuses.externalRadius,this.points.angle.start,this.points.angle.end,!1);this.context.strokeStyle=this.options.percentage.color;this.context.stroke()};i.prototype.drawExtraPercentage=function(){this.context.beginPath();this.context.lineWidth=this.linesAndRadiuses.extLine;this.context.arc(this.points.x,this.points.x,this.linesAndRadiuses.externalRadius,this.points.angle.start,this.points.angle.end,!0);this.context.strokeStyle=this.options.percentage.unfilledColor;this.context.stroke()};i.prototype.drawShadow=function(){this.context.beginPath();this.context.arc(this.points.x,this.points.x,this.linesAndRadiuses.shadowRadius,0,h,!1);this.context.shadowColor="#cbcbcb";this.context.lineWidth=this.linesAndRadiuses.shadowLine;this.context.strokeStyle="rgba(255,255,255, 0.3)";this.context.stroke()};i.prototype.drawText=function(){var a;this.context.textAlign="center";this.context.fillStyle="white";this.context.textBaseline="bottom";if(this.options.displayValue){a=this.points.width/3.5;this.context.font="bold "+a+"px helvetica";this.context.fillText(this.options.text,this.points.x,this.points.x+this.linesAndRadiuses.internalRadius/25);this.context.fillText(this.options.value+"%",this.points.x,this.points.x+this.linesAndRadiuses.internalRadius/1.5)}else{a=this.points.width/2.5;this.context.font="bold "+a+"px helvetica";this.context.fillText(this.options.text,this.points.x,this.points.x+this.linesAndRadiuses.internalRadius/2)}};i.prototype.getValueDegrees=function(){if(this.options.value)return this.options.value===100||this.options.value==="100"?359.99964:this.options.value*3.6;var a=parseInt(this.element.getAttribute("data-value"),10);return a===100?359.9964:a*3.6};i.prototype.checkCanvas=function(){return!!this.element.getContext&&!!this.element.getContext("2d")};i.prototype.getPoints=function(){return{width:this.element.width,x:this.element.width/2,angle:{start:270*g,end:(this.value-90)*g}}};i.prototype.getLinesAndRadiuses=function(){var a=this.points.width/9,b=this.points.width/30,c=this.points.x-b/2,d=c+b*2-a,e=this.points.width/35,f=d-a/2;return{shadowLine:b,shadowRadius:c,extLine:a,externalRadius:d,internalLine:e,internalRadius:f}};a.fn[e]=function(b){return this.each(function(){a.data(this,"plugin_"+e)||a.data(this,"plugin_"+e,new i(this,b))})}})(jQuery,window,document);
/*
 * Main application script
 */
;(function ($, window, undefined) {
	'use strict';
	var $doc = $(document),
		Modernizr = window.Modernizr;
	// Start orbit plugin
	$(document.getElementById('showcase')).orbit({ fluid: '16x5', timer: false });
	// Mambo demo
	$(document.getElementById('full-features')).mambo({value: 65, text: {label: "Cr", displayValue: true, textColor: "#11929E"}, internalCircle: { fill: '#FFF9B1', line: '#9AB285'}, percentage: {drawUnfilled: true, color: "#FFB896", unfilledColor: "#B2A589"}, drawShadow: true});
	$(document.getElementById('only-label')).mambo({value: 35, displayValue: false, text: "Ti", internalCircle: { fill: 'rgb(81, 56, 110)', line: 'rgb(42, 35, 51)'}, percentage: {drawUnfilled: true, color: "rgb(101, 83, 122)", unfilledColor: "rgb(101, 101, 102)"}, drawShadow: true});
	$(document.getElementById('label-percentage')).mambo({value: 65, text: "Cr", internalCircle: { fill: 'rgb(109, 172, 212)', line: 'rgb(69, 132, 188)'}, percentage: {drawUnfilled: true, color: "rgb(148, 207, 251)", unfilledColor: "rgb(166, 166, 166)"}, drawShadow: true});
	$(document.getElementById('just-badge')).mambo({value: 65, text: "Cr", internalCircle: { fill: 'rgb(109, 172, 212)', line: 'rgb(69, 132, 188)'}, percentage: {drawUnfilled: true, color: "rgb(148, 207, 251)", unfilledColor: "rgb(166, 166, 166)"}, drawShadow: true});
	// Hide address bar on mobile devices
	if (Modernizr.touch) {
		$(window).load(function () {
			setTimeout(function () {
				window.scrollTo(0, 1);
			}, 0);
		});
	}
})(jQuery, this);