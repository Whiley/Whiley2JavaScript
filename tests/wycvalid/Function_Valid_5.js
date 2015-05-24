function g(r0){//function(Function_Valid_5:fr4nat) -> Function_Valid_5:fr4nat
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = 1;//const %1 = 1 : int
            var r2 = r0 + r1;//add %2 = %0, %1 : int
            return r2;//return %2 : int
      }
   }
}

function f(r0){//function(Function_Valid_5:fr4nat) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            return r0;//return %0 : int
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
            var r2 = 1;//const %2 = 1 : int
            var r1 = r2;//assign %1 = %2  : int
            var r0 = r1;//assign %0 = %1  : int
            var r4 = g(r0);
            var r3 = f(r4);
            var r5 = 2;//const %5 = 2 : int
            if(r3  ==  r5){
               control_flow_pc = 128;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 128:
      }
   }
}

test();
