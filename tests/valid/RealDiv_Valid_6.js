function g$Y9bF1B1Fs2(r0){//function(real) -> real
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = new WyJS.Real(3.0);
            var r2 = r0.div(r1);//div %2 = %0, %1 : real
            return r2;//return %2 : real
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
            var r1 = new WyJS.Real(0.234);
            var r0 = g$Y9bF1B1Fs2(r1);//invoke %0 = (%1) RealDiv_Valid_6:g : function(real) -> real
            var r2 = new WyJS.Real(0.468);
            var r3 = new WyJS.Real(6.0);
            var r4 = r2.div(r3);//div %4 = %2, %3 : real
            if(WyJS.equals(r0, r4, true)){
               control_flow_pc = 330;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 330:
            return;
      }
   }
}

