function f$_9bFaA$0J70GW2(r0){//function(int|bool) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            if(WyJS.is(r0, new WyJS.Type.Int())){
               control_flow_pc = 782;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 783;
            control_flow_repeat = true;
            continue outer;//goto label783
         case 782:
            return r0;//return %0 : int
            control_flow_pc = 784;
            control_flow_repeat = true;
            continue outer;//goto label784
         case 783:
            var r1 = new WyJS.Integer(1);
            return r1;//return %1 : int
         case 784:
            return;
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
            var r1 = true;
            var r0 = f$_9bFaA$0J70GW2(r1);//invoke %0 = (%1) Coercion_Valid_7:f : function(int|bool) -> int
            var r2 = new WyJS.Integer(1);
            if(WyJS.equals(r0, r2, true)){
               control_flow_pc = 785;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 785:
            var r4 = new WyJS.Integer(123);
            var r3 = f$_9bFaA$0J70GW2(r4);//invoke %3 = (%4) Coercion_Valid_7:f : function(int|bool) -> int
            var r5 = new WyJS.Integer(123);
            if(WyJS.equals(r3, r5, true)){
               control_flow_pc = 786;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 786:
            return;
      }
   }
}

