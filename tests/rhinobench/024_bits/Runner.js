function run(){
	var x = 0;
	var start = new Date().getTime();
	while( x < 10){
		var bits = new WyJS.List([false], new WyJS.Type.List(new WyJS.Type.Bool()));
		var i = 0;
		while( i < 16){
			value$_9bFaA$0D539w2(bits);
			bits = increment$Z9bF1D527FWz(bits);
			i++;
		}
		x++;
	}
	var end = new Date().getTime();
	sysout.println((end - start)/10);
}