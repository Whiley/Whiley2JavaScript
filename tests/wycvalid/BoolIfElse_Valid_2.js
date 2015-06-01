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
               control_flow_pc = 160;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 161;
            control_flow_repeat = true;
            continue outer;
         case 160:
            var r2 = 1;//const %2 = 1 : int
            return r2;//return %2 : int
            control_flow_pc = 162;
            control_flow_repeat = true;
            continue outer;
         case 161:
            var r3 = 0;//const %3 = 0 : int
            return r3;//return %3 : int
         case 162:
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
               control_flow_pc = 163;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 163:
            var r4 = false;//const %4 = false : bool
            var r3 = f(r4);
            var r5 = 0;//const %5 = 0 : int
            if(r3  ==  r5){
               control_flow_pc = 164;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 164:
      }
   }
}

test();
