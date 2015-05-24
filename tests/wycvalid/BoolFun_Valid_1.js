function f(r0){//function(bool) -> bool
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            return r0;//return %0 : bool
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
            var r2 = true;//const %2 = true : bool
            var r1 = r2;//assign %1 = %2  : bool
            var r0 = r1;//assign %0 = %1  : bool
            var r3 = f(r0);
            var r4 = true;//const %4 = true : bool
            if(r3  ==  r4){
               control_flow_pc = 82;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 82:
            var r5 = false;//const %5 = false : bool
            var r0 = r5;//assign %0 = %5  : bool
            var r6 = f(r0);
            var r7 = true;//const %7 = true : bool
            if(r6  ==  r7){
               control_flow_pc = 83;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 84;
            control_flow_repeat = true;
            continue outer;
         case 83:
            throw {name: 'Assert Failed', message: 'fail'}
         case 84:
      }
   }
}

test();
