function get(r0){//method(RecordAccess_Valid_1:Ptype) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = 1;//const %1 = 1 : int
            var r2 = 1;//const %2 = 1 : int
            var r4 = r3.mode;
            return r4;//return %4 : int
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
            var r1 = 2;//const %1 = 2 : int
            var r2 = {mode: r1};
            var r0 = get(r3);
            var r4 = 1;//const %4 = 1 : int
            if(r0  ==  r4){
               control_flow_pc = 0;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 0:
            var r6 = 3;//const %6 = 3 : int
            var r7 = 1;//const %7 = 1 : int
            var r8 = {mode: r6, x: r7};
            var r5 = get(r9);
            var r10 = 1;//const %10 = 1 : int
            if(r5  ==  r10){
               control_flow_pc = 1;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1:
      }
   }
}

test();
