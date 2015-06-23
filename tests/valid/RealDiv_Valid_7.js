function diver(r0, r1, r2){//function(real,real,real) -> real
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r3 = r0 / r1;//div %3 = %0, %1 : real
            var r4 = r3 / r2;//div %4 = %3, %2 : real
            return r4;//return %4 : real
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
            var r1 = 1.2;//const %1 = 1.2 : real
            var r2 = 3.4;//const %2 = 3.4 : real
            var r3 = 4.5;//const %3 = 4.5 : real
            var r0 = diver(r1, r2, r3);//invoke %0 = (%1, %2, %3) RealDiv_Valid_7:diver : function(real,real,real) -> real
            var r4 = 4.0;//const %4 = 4.0 : real
            var r5 = 51.0;//const %5 = 51.0 : real
            var r6 = r4 / r5;//div %6 = %4, %5 : real
            if(r0  ==  r6){//ifeq %0, %6 goto label463 : real
               control_flow_pc = 463;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 463:
            var r8 = 1000.0;//const %8 = 1000.0 : real
            var r9 = 300.0;//const %9 = 300.0 : real
            var r10 = 400.0;//const %10 = 400.0 : real
            var r7 = diver(r8, r9, r10);//invoke %7 = (%8, %9, %10) RealDiv_Valid_7:diver : function(real,real,real) -> real
            var r11 = 1.0;//const %11 = 1.0 : real
            var r12 = 120.0;//const %12 = 120.0 : real
            var r13 = r11 / r12;//div %13 = %11, %12 : real
            if(r7  ==  r13){//ifeq %7, %13 goto label464 : real
               control_flow_pc = 464;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 464:
      }
   }
}

test();
