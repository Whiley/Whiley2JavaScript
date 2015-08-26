function suber$Y9fFX7k7$WE(r0, r1, r2){//function(real,real,real) -> real
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r3 = r0.sub(r1);//sub %3 = %0, %1 : real
            var r4 = r3.sub(r2);//sub %4 = %3, %2 : real
            return r4;//return %4 : real
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
            var r2 = new WyJS.Real(3.4);
            var r3 = new WyJS.Real(4.5);
            var r0 = suber$Y9fFX7k7$WE(r1, r2, r3);//invoke %0 = (%1, %2, %3) RealSub_Valid_3:suber : function(real,real,real) -> real
            var r4 = new WyJS.Real(-6.7);
            if(WyJS.equals(r0, r4, true)){
               control_flow_pc = 1783;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1783:
            var r6 = new WyJS.Real(1000.0);
            var r7 = new WyJS.Real(300.0);
            var r8 = new WyJS.Real(400.0);
            var r5 = suber$Y9fFX7k7$WE(r6, r7, r8);//invoke %5 = (%6, %7, %8) RealSub_Valid_3:suber : function(real,real,real) -> real
            var r9 = new WyJS.Real(300.0);
            if(WyJS.equals(r5, r9, true)){
               control_flow_pc = 1784;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1784:
            return;
      }
   }
}

