function f(r0){//function([int]) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = r0.length;//lengthof %1 = %0 : [int]
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
            var r2 = [];
            var r1 = r2;//assign %1 = %2  : [void]
            var r0 = r1;//assign %0 = %1  : [int]
            var r3 = f(r0);//invoke %3 = (%0) ListGenerator_Valid_5:f : function([int]) -> int
            var r4 = 0;//const %4 = 0 : int
            if(r3  ==  r4){//ifeq %3, %4 goto label7 : int
               control_flow_pc = 7;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 7:
      }
   }
}

test();
