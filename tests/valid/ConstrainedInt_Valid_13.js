function f(r0){//function(ConstrainedInt_Valid_13:code) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r3 = r0.op;//fieldload %3 = %0 op : {int op,[int] payload}
            var r2 = r3;//assign %2 = %3  : int
            var r1 = r2;//assign %1 = %2  : int
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
            var r2 = 1;//const %2 = 1 : int
            var r3 = [r2];
            var r4 = {op: r1, payload: r3};//newrecord %4 = (%1, %3) : {int op,[int] payload}
            var r0 = f(r4);//invoke %0 = (%4) ConstrainedInt_Valid_13:f : function(ConstrainedInt_Valid_13:code) -> int
            var r5 = 1;//const %5 = 1 : int
            if(r0  ==  r5){//ifeq %0, %5 goto label2344 : int
               control_flow_pc = 2344;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2344:
      }
   }
}

test();
