(function(){
	var bc={};
	var table = 'fZodR9XQDSUm21yCkr6zBqiveYah8bt4xsWpHnJE7jL5VG3guMTKNPAwcF';
	var tr = {};
	for(var i=0;i<58;i++)
		tr[table[i]]=i;
	var s = [9,8,1,6,2,4,0,7,3,5];
	var xor = 177451812;
	var add = '100618342136696320';
	lPlus = function(x,y){
		return bc.lli.ccall('lPlus','string',['string','string'],[String(x),String(y)]);
	}
	lSub = function(x,y){
		return bc.lli.ccall('lSub','string',['string','string'],[String(x),String(y)]);
	}
	lMult = function(x,y){
		return bc.lli.ccall('lMult','string',['string','string'],[String(x),String(y)]);
	}
	lDiv = function(x,y){
		return bc.lli.ccall('lDiv','string',['string','string'],[String(x),String(y)]);
	}
	lPow = function(x,y){
		return bc.lli.ccall('lPow','string',['string','number'],[String(x),Number(y)]);
	}
	lMode = function(x,y){
		return bc.lli.ccall('lMode','string',['string','string'],[String(x),String(y)]);
	}
	bc.atob = function(avid){
		var x = Number(avid);
		if(x == 'NaN') throw new Error("avid must be a number");
		x = lPlus(String(x^xor),add);
		r=['','','','','','','','','',''];
		for(var i=0;i<10;i++)
			r[s[i]] = table[lMode(lDiv(x,lPow('58',i)),58)];
		return r.join('');
	}
	bc.btoa = function(bvid){
		var x = String(bvid);
		if(x.length!=10) throw new Error("bvid error");
		var r = '0';
		for(var i=0;i<10;i++)
			r = lPlus(lMult(tr[x[s[i]]],lPow('58',i)),r);
		return Number(lSub(r,add))^xor;
	}
	if (typeof module !== 'undefined' && typeof exports === 'object') {
		bc.lli=require('./lli.js');
		module.exports = bc;
	} else if (typeof define === 'function' && define.amd) {
		define('bili-convert',['./lli.js'],function(lli){bc.lli=lli;return bc});
	} else if (typeof window !== 'undefined') {
		bc.lli=window.Module;
		window.bc = bc;
	} else {
		this.bc = bc;
	}
}).call(function() {
	return this || (typeof window !== 'undefined' ? window : global);
}());