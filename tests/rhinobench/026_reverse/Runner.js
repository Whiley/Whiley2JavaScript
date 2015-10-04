function run(){
	var i = 0;
	var start = new Date().getTime();
	while(i < 10){
		var list = new WyJS.List([new WyJS.Integer(1), new WyJS.Integer(2), new WyJS.Integer(3), new WyJS.Integer(4)], new WyJS.Type.List(new WyJS.Type.Int()));
		var list2 = main.reverse$Z9bF1D527RWz(list);
		sum$Z9dFas1FVYGs(list, new WyJS.Integer(0));
		sum$Z9dFas1FVYGs(list2, new WyJS.Integer(0))
		i++;
	}
	var end = new Date().getTime();
	sysout.println((end - start)/10)
}