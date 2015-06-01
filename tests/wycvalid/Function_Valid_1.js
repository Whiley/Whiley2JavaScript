function f(r0){//function(real) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = 1;//const %1 = 1 : int
            return r1;//return %1 : int
      }
   }
}

function f(r0){//function(int) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = 2;//const %1 = 2 : int
            return r1;//return %1 : int
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
            var r1 = 1;//const %1 = 1 : int
            var r0 = f(r1);
            var r2 = 2;//const %2 = 2 : int
            if(r0  ==  r2){
               control_flow_pc = 176;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 176:
            var r4 = 1.23;//const %4 = 1.23 : real
            var r3 = f(r4);
            var r5 = 1;//const %5 = 1 : int
            if(r3  ==  r5){
               control_flow_pc = 177;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 177:
      }
   }
}

test();
