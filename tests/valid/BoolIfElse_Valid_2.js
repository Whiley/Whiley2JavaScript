function f$Z9bFaA$09$(r0){//function(bool) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = true;
            if(r0 === r1){
               control_flow_pc = 1326;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 1327;
            control_flow_repeat = true;
            continue outer;//goto label1327
         case 1326:
            var r2 = new WyJS.Integer(1);
            return r2;//return %2 : int
            control_flow_pc = 1328;
            control_flow_repeat = true;
            continue outer;//goto label1328
         case 1327:
            var r3 = new WyJS.Integer(0);
            return r3;//return %3 : int
         case 1328:
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
            var r0 = f$Z9bFaA$09$(r1);//invoke %0 = (%1) BoolIfElse_Valid_2:f : function(bool) -> int
            var r2 = new WyJS.Integer(1);
            if(WyJS.equals(r0, r2, true)){
               control_flow_pc = 1329;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1329:
            var r4 = false;
            var r3 = f$Z9bFaA$09$(r4);//invoke %3 = (%4) BoolIfElse_Valid_2:f : function(bool) -> int
            var r5 = new WyJS.Integer(0);
            if(WyJS.equals(r3, r5, true)){
               control_flow_pc = 1330;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1330:
            return;
      }
   }
}

