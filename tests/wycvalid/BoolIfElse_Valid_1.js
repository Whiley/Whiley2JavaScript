function f(r0){//function(bool) -> bool
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = true;//const %1 = true : bool
            if(r0  ==  r1){
               control_flow_pc = 97;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 98;
            control_flow_repeat = true;
            continue outer;
         case 97:
            var r2 = true;//const %2 = true : bool
            return r2;//return %2 : bool
            control_flow_pc = 99;
            control_flow_repeat = true;
            continue outer;
         case 98:
            var r3 = false;//const %3 = false : bool
            return r3;//return %3 : bool
         case 99:
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
            var r2 = true;//const %2 = true : bool
            if(r0  ==  r2){
               control_flow_pc = 100;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 100:
            var r4 = false;//const %4 = false : bool
            var r3 = f(r4);
            var r5 = true;//const %5 = true : bool
            if(r3  ==  r5){
               control_flow_pc = 101;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 102;
            control_flow_repeat = true;
            continue outer;
         case 101:
            throw {name: 'Assert Failed', message: 'fail'}
         case 102:
      }
   }
}

test();
