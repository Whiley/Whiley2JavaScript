function f$Y9bF1B1Fs2(r0){//function(real) -> real
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = new WyJS.Real(0.0);
            var r2 = r1.sub(r0);//sub %2 = %1, %0 : real
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
            var r1 = new WyJS.Real(1.234);
            var r0 = f$Y9bF1B1Fs2(r1);//invoke %0 = (%1) RealSub_Valid_1:f : function(real) -> real
            var r2 = new WyJS.Real(-1.234);
            if(WyJS.equals(r0, r2, true)){
               control_flow_pc = 972;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 972:
            return;
      }
   }
}

