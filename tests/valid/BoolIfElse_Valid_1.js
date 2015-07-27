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
               control_flow_pc = 1268;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 1269;
            control_flow_repeat = true;
            continue outer;//goto label1269
         case 1268:
            var r2 = true;
            return r2;//return %2 : bool
            control_flow_pc = 1270;
            control_flow_repeat = true;
            continue outer;//goto label1270
         case 1269:
            var r3 = false;
            return r3;//return %3 : bool
         case 1270:
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
               control_flow_pc = 1271;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1271:
            var r4 = false;
            var r3 = f(r4);//invoke %3 = (%4) BoolIfElse_Valid_1:f : function(bool) -> bool
            var r5 = true;
            if(r3 === r5){
               control_flow_pc = 1272;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 1273;
            control_flow_repeat = true;
            continue outer;//goto label1273
         case 1272:
            throw {name: 'Assert Failed', message: 'fail'}
         case 1273:
      }
   }
}

