function f(r0){//function(real) -> real
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = 0.0;//const %1 = 0.0 : real
            var r2 = r1 - r0;//sub %2 = %1, %0 : real
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
            var r1 = 1.234;//const %1 = 1.234 : real
            var r0 = f(r1);//invoke %0 = (%1) RealSub_Valid_2:f : function(real) -> real
            var r2 = -1.234;//const %2 = -1.234 : real
            if(r0  ==  r2){//ifeq %0, %2 goto label1780 : real
               control_flow_pc = 1780;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1780:
      }
   }
}

test();
