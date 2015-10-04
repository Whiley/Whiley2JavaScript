function run(){
	var start = new Date().getTime();
	var i = 0;
	while(i < 10){
		var tf = main.TrafficLights$Y9_FP8F$o3$W0FP$sL6$F4$m0FN$N5$a0FP$B5$B0FP$R5$c0$S$B63y();
		tf = main.change$Y9bFXL13$C0FN$Z5$ip0$J0VR$35$a0VO$Z5$Y0$I$Z5$b0$P$F6$n0W(tf);
		tf = main.change$Y9bFXL13$C0FN$Z5$ip0$J0VR$35$a0VO$Z5$Y0$I$Z5$b0$P$F6$n0W(tf);
		tf = main.change$Y9bFXL13$C0FN$Z5$ip0$J0VR$35$a0VO$Z5$Y0$I$Z5$b0$P$F6$n0W(tf);
		tf = main.change$Y9bFXL13$C0FN$Z5$ip0$J0VR$35$a0VO$Z5$Y0$I$Z5$b0$P$F6$n0W(tf);
		i++;
	}
	var end = new Date().getTime();
	sysout.println((end - start)/10)
}