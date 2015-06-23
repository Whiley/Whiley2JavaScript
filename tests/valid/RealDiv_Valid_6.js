function g(r0){//function(real) -> real
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = 3.0;//const %1 = 3.0 : real
            var r2 = r0 / r1;//div %2 = %0, %1 : real
            return r2;//return %2 : real
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
            var r1 = 0.234;//const %1 = 0.234 : real
            var r0 = g(r1);//invoke %0 = (%1) RealDiv_Valid_6:g : function(real) -> real
            var r2 = 0.468;//const %2 = 0.468 : real
            var r3 = 6.0;//const %3 = 6.0 : real
            var r4 = r2 / r3;//div %4 = %2, %3 : real
            if(r0  ==  r4){//ifeq %0, %4 goto label460 : real
               control_flow_pc = 460;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 460:
      }
   }
}

test();
