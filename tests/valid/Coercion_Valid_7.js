function f$_9bFaA$0J70GW2(r0){//function(int|bool) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            if(WyJS.is(r0, new WyJS.Type.Int())){
               control_flow_pc = 1426;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 1427;
            control_flow_repeat = true;
            continue outer;//goto label1427
         case 1426:
            return r0;//return %0 : int
            control_flow_pc = 1428;
            control_flow_repeat = true;
            continue outer;//goto label1428
         case 1427:
            var r1 = new WyJS.Integer(1);
            return r1;//return %1 : int
         case 1428:
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
               control_flow_pc = 1429;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1429:
            var r4 = new WyJS.Integer(123);
            var r3 = f$_9bFaA$0J70GW2(r4);//invoke %3 = (%4) Coercion_Valid_7:f : function(int|bool) -> int
            var r5 = new WyJS.Integer(123);
            if(WyJS.equals(r3, r5, true)){
               control_flow_pc = 1430;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1430:
            return;
      }
   }
}

