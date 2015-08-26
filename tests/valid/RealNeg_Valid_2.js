function f$Y9bF1B1Fs2(r0){//function(real) -> real
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = r0.neg();//neg %1 = %0 : real
            return r1;//return %1 : real
            return;
      }
   }
}

function test$1A_7VkE(){//method() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = new WyJS.Real(1.2);
            var r0 = f$Y9bF1B1Fs2(r1);//invoke %0 = (%1) RealNeg_Valid_2:f : function(real) -> real
            var r2 = new WyJS.Real(-1.2);
            if(WyJS.equals(r0, r2, true)){
               control_flow_pc = 1273;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1273:
            var r4 = new WyJS.Real(0.00001);
            var r3 = f$Y9bF1B1Fs2(r4);//invoke %3 = (%4) RealNeg_Valid_2:f : function(real) -> real
            var r5 = new WyJS.Real(-0.00001);
            if(WyJS.equals(r3, r5, true)){
               control_flow_pc = 1274;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1274:
            var r7 = new WyJS.Real(5632.0);
            var r6 = f$Y9bF1B1Fs2(r7);//invoke %6 = (%7) RealNeg_Valid_2:f : function(real) -> real
            var r8 = new WyJS.Real(-5632.0);
            if(WyJS.equals(r6, r8, true)){
               control_flow_pc = 1275;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1275:
            return;
      }
   }
}

