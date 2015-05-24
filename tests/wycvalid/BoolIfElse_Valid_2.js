function f(r0){//function(bool) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = true;//const %1 = true : bool
            if(r0  ==  r1){
               control_flow_pc = 105;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 106;
            control_flow_repeat = true;
            continue outer;
         case 105:
            var r2 = 1;//const %2 = 1 : int
            return r2;//return %2 : int
            control_flow_pc = 107;
            control_flow_repeat = true;
            continue outer;
         case 106:
            var r3 = 0;//const %3 = 0 : int
            return r3;//return %3 : int
         case 107:
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
            var r1 = true;//const %1 = true : bool
            var r0 = f(r1);
            var r2 = 1;//const %2 = 1 : int
            if(r0  ==  r2){
               control_flow_pc = 108;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 108:
            var r4 = false;//const %4 = false : bool
            var r3 = f(r4);
            var r5 = 0;//const %5 = 0 : int
            if(r3  ==  r5){
               control_flow_pc = 109;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 109:
      }
   }
}

test();
