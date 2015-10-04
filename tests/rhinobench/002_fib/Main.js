
function fib$Y9bFXL13$C0FN$Z5$iC$s5$W0$SFs2(r0){//function(Main:nat) -> Main:nat
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = new WyJS.Integer(1);
            if(WyJS.gt(r0, r1, false)){
               control_flow_pc = 1;
               control_flow_repeat = true;
               continue outer;
            }
            return r0;//return %0 : int
            control_flow_pc = 2;
            control_flow_repeat = true;
            continue outer;//goto label2
         case 1:
            var r3 = new WyJS.Integer(1);
            var r4 = r0.sub(r3);//sub %4 = %0, %3 : int
            var r2 = fib$Y9bFXL13$C0FN$Z5$iC$s5$W0$SFs2(r4);//invoke %2 = (%4) Main:fib : function(Main:nat) -> Main:nat
            var r6 = new WyJS.Integer(2);
            var r7 = r0.sub(r6);//sub %7 = %0, %6 : int
            var r5 = fib$Y9bFXL13$C0FN$Z5$iC$s5$W0$SFs2(r7);//invoke %5 = (%7) Main:fib : function(Main:nat) -> Main:nat
            var r8 = r2.add(r5);//add %8 = %2, %5 : int
            return r8;//return %8 : int
         case 2:
            return;
      }
   }
}
