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
               control_flow_pc = 1265;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 1266;
            control_flow_repeat = true;
            continue outer;//goto label1266
         case 1265:
            var r2 = true;
            return r2;//return %2 : bool
            control_flow_pc = 1267;
            control_flow_repeat = true;
            continue outer;//goto label1267
         case 1266:
            var r3 = false;
            return r3;//return %3 : bool
         case 1267:
      }
   }
}

function test$1A_7VkE(){//method() -> void
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
               control_flow_pc = 1268;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1268:
            var r4 = false;
            var r3 = f$Y9bF19$W(r4);//invoke %3 = (%4) BoolIfElse_Valid_1:f : function(bool) -> bool
            var r5 = true;
            if(r3 === r5){
               control_flow_pc = 1269;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 1270;
            control_flow_repeat = true;
            continue outer;//goto label1270
         case 1269:
            throw {name: 'Assert Failed', message: 'fail'}
         case 1270:
      }
   }
}

