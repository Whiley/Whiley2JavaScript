function f$Y9bF19$W(r0){//function(bool) -> bool
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = true;
            if(r0 === r1){
               control_flow_pc = 1320;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 1321;
            control_flow_repeat = true;
            continue outer;//goto label1321
         case 1320:
            var r2 = true;
            return r2;//return %2 : bool
            control_flow_pc = 1322;
            control_flow_repeat = true;
            continue outer;//goto label1322
         case 1321:
            var r3 = false;
            return r3;//return %3 : bool
         case 1322:
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
            var r0 = f$Y9bF19$W(r1);//invoke %0 = (%1) BoolIfElse_Valid_1:f : function(bool) -> bool
            var r2 = true;
            if(r0 === r2){
               control_flow_pc = 1323;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1323:
            var r4 = false;
            var r3 = f$Y9bF19$W(r4);//invoke %3 = (%4) BoolIfElse_Valid_1:f : function(bool) -> bool
            var r5 = true;
            if(r3 === r5){
               control_flow_pc = 1324;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 1325;
            control_flow_repeat = true;
            continue outer;//goto label1325
         case 1324:
            throw {name: 'Assert Failed', message: 'fail'}
         case 1325:
            return;
      }
   }
}

