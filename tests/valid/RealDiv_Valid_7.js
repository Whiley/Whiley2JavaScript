function diver$Y9fFX7k7$WE(r0, r1, r2){//function(real,real,real) -> real
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r3 = r0.div(r1);//div %3 = %0, %1 : real
            var r4 = r3.div(r2);//div %4 = %3, %2 : real
            return r4;//return %4 : real
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
            var r1 = new WyJS.Real(1.2);
            var r2 = new WyJS.Real(3.4);
            var r3 = new WyJS.Real(4.5);
            var r0 = diver$Y9fFX7k7$WE(r1, r2, r3);//invoke %0 = (%1, %2, %3) RealDiv_Valid_7:diver : function(real,real,real) -> real
            var r4 = new WyJS.Real(4.0);
            var r5 = new WyJS.Real(51.0);
            var r6 = r4.div(r5);//div %6 = %4, %5 : real
            if(WyJS.equals(r0, r6, true)){
               control_flow_pc = 330;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 330:
            var r8 = new WyJS.Real(1000.0);
            var r9 = new WyJS.Real(300.0);
            var r10 = new WyJS.Real(400.0);
            var r7 = diver$Y9fFX7k7$WE(r8, r9, r10);//invoke %7 = (%8, %9, %10) RealDiv_Valid_7:diver : function(real,real,real) -> real
            var r11 = new WyJS.Real(1.0);
            var r12 = new WyJS.Real(120.0);
            var r13 = r11.div(r12);//div %13 = %11, %12 : real
            if(WyJS.equals(r7, r13, true)){
               control_flow_pc = 331;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 331:
            return;
      }
   }
}

