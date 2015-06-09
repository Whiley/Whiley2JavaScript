function f(r0){//function(RecordAssign_Valid_2:rec2) -> RecordAssign_Valid_2:rec2
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = 1;//const %1 = 1 : int
            var r2 = 1;//const %2 = 1 : int
            r0.current.x = r2;//update %0.current.x = %2 : {{int x} current} -> {{int x} current}
            return r0;//return %0 : {{int x} current}
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
            var r2 = 0;//const %2 = 0 : int
            var r3 = {x: r2};//newrecord %3 = (%2) : {int x}
            var r4 = {current: r3};//newrecord %4 = (%3) : {{int x} current}
            var r1 = r4;//assign %1 = %4  : {{int x} current}
            var r0 = r1;//assign %0 = %1  : {{int x} current}
            var r5 = f(r0);//invoke %5 = (%0) RecordAssign_Valid_2:f : function(RecordAssign_Valid_2:rec2) -> RecordAssign_Valid_2:rec2
            var r6 = 1;//const %6 = 1 : int
            var r7 = {x: r6};//newrecord %7 = (%6) : {int x}
            var r8 = {current: r7};//newrecord %8 = (%7) : {{int x} current}
            if(JSON.stringify(r5) ==  JSON.stringify(r8)){//ifeq %5, %8 goto label0 : {{int x} current}
               control_flow_pc = 0;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 0:
      }
   }
}

test();
