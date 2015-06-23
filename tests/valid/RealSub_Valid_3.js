function suber(r0, r1, r2){//function(real,real,real) -> real
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r3 = r0 - r1;//sub %3 = %0, %1 : real
            var r4 = r3 - r2;//sub %4 = %3, %2 : real
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
            var r0 = suber(r1, r2, r3);//invoke %0 = (%1, %2, %3) RealSub_Valid_3:suber : function(real,real,real) -> real
            var r4 = -6.7;//const %4 = -6.7 : real
            if(r0  ==  r4){//ifeq %0, %4 goto label1781 : real
               control_flow_pc = 1781;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1781:
            var r6 = 1000.0;//const %6 = 1000.0 : real
            var r7 = 300.0;//const %7 = 300.0 : real
            var r8 = 400.0;//const %8 = 400.0 : real
            var r5 = suber(r6, r7, r8);//invoke %5 = (%6, %7, %8) RealSub_Valid_3:suber : function(real,real,real) -> real
            var r9 = 300.0;//const %9 = 300.0 : real
            if(r5  ==  r9){//ifeq %5, %9 goto label1782 : real
               control_flow_pc = 1782;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1782:
      }
   }
}

test();
