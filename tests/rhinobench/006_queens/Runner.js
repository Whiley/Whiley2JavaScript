function run(){
	var x = 0;
	var start = new Date().getTime();
	while(x < 10){
		var i = 10;
		var list = WyJS.ListGen(new WyJS.Tuple([0,0], new WyJS.Type.Tuple([new WyJS.Type.Int(), new WyJS.Type.Int()])), new WyJS.Integer(i), new WyJS.Type.Tuple([new WyJS.Type.Int(), new WyJS.Type.Int()]));
		var sol = main.run$b9fF5esNBV$62IAWE$sD$F2Vo$VC$92Vw$s4$N2Vk$kC$D2VM$78$R2$u5$R2Vk$ViAoHV$c8$12Vo$kh0$c$sC$avE(list, new WyJS.Integer(0), new WyJS.Integer(i));
		x++;
	}
	var end = new Date().getTime();
	sysout.println((end - start)/10);
}