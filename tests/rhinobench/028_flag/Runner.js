function run(){
	var i = 0;
	var start = new Date().getTime();
	while(i < 10){
		var list = new WyJS.List([new WyJS.Integer(1), new WyJS.Integer(0), new WyJS.Integer(2), new WyJS.Integer(1)], new WyJS.Type.List(new WyJS.Type.Int()));
		var color = main.partition$Z9bF1D527oHV$cC$12Vo$kh1VW$sC$N2Vr$Fi2(list);
		i++;
	}
	var end = new Date().getTime();
	sysout.println((end - start)/10)

}