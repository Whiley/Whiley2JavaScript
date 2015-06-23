function f(r0){//function(bool) -> bool
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = true;
            if(r0 === r1){
               control_flow_pc = 1274;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 1275;
            control_flow_repeat = true;
            continue outer;//goto label1275
         case 1274:
            var r2 = true;
            return r2;//return %2 : bool
            control_flow_pc = 1276;
            control_flow_repeat = true;
            continue outer;//goto label1276
         case 1275:
            var r3 = false;
            return r3;//return %3 : bool
         case 1276:
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
            var r0 = f(r1);//invoke %0 = (%1) BoolIfElse_Valid_1:f : function(bool) -> bool
            var r2 = true;
            if(r0 === r2){
               control_flow_pc = 1277;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1277:
            var r4 = false;
            var r3 = f(r4);//invoke %3 = (%4) BoolIfElse_Valid_1:f : function(bool) -> bool
            var r5 = true;
            if(r3 === r5){
               control_flow_pc = 1278;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 1279;
            control_flow_repeat = true;
            continue outer;//goto label1279
         case 1278:
            throw {name: 'Assert Failed', message: 'fail'}
         case 1279:
      }
   }
}

