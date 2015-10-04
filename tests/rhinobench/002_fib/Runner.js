function run(){
	var i = 0;
	var j = 0;
	var start = new Date().getTime();
		while(i < 41){
			var x = fib$Y9bFXL13$C0FN$Z5$iC$s5$W0$SFs2(new WyJS.Integer(i));
			i++;
		}
		j++;
	var end = new Date().getTime();
	sysout.println("time for 10 executions:" + (end - start)/10);

}