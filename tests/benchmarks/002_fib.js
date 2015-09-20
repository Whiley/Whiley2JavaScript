function fib$Y9bFXL16$k$$B$72$U0VO$Z5$XC$s5$W0$SFs2(r0){//function(002_fib:nat) -> 002_fib:nat
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = new WyJS.Integer(1);
            if(WyJS.gt(r0, r1, false)){
               control_flow_pc = 86;
               control_flow_repeat = true;
               continue outer;
            }
            return r0;//return %0 : int
            control_flow_pc = 87;
            control_flow_repeat = true;
            continue outer;//goto label87
         case 86:
            var r3 = new WyJS.Integer(1);
            var r4 = r0.sub(r3);//sub %4 = %0, %3 : int
            var r2 = fib$Y9bFXL16$k$$B$72$U0VO$Z5$XC$s5$W0$SFs2(r4);//invoke %2 = (%4) 002_fib:fib : function(002_fib:nat) -> 002_fib:nat
            var r6 = new WyJS.Integer(2);
            var r7 = r0.sub(r6);//sub %7 = %0, %6 : int
            var r5 = fib$Y9bFXL16$k$$B$72$U0VO$Z5$XC$s5$W0$SFs2(r7);//invoke %5 = (%7) 002_fib:fib : function(002_fib:nat) -> 002_fib:nat
            var r8 = r2.add(r5);//add %8 = %2, %5 : int
            return r8;//return %8 : int
         case 87:
            return;
      }
   }
}

function test(){//method() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = new WyJS.Integer(2);
            var r0 = fib$Y9bFXL16$k$$B$72$U0VO$Z5$XC$s5$W0$SFs2(r1);//invoke %0 = (%1) 002_fib:fib : function(002_fib:nat) -> 002_fib:nat
            var r2 = new WyJS.Integer(1);
            if(WyJS.equals(r0, r2, true)){
               control_flow_pc = 88;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 88:
            var r4 = new WyJS.Integer(10);
            var r3 = fib$Y9bFXL16$k$$B$72$U0VO$Z5$XC$s5$W0$SFs2(r4);//invoke %3 = (%4) 002_fib:fib : function(002_fib:nat) -> 002_fib:nat
            var r5 = new WyJS.Integer(55);
            if(WyJS.equals(r3, r5, true)){
               control_flow_pc = 89;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 89:
            var r7 = new WyJS.Integer(23);
            var r6 = fib$Y9bFXL16$k$$B$72$U0VO$Z5$XC$s5$W0$SFs2(r7);//invoke %6 = (%7) 002_fib:fib : function(002_fib:nat) -> 002_fib:nat
            var r8 = new WyJS.Integer(28657);
            if(WyJS.equals(r6, r8, true)){
               control_flow_pc = 90;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 90:
            return;
      }
   }
}

