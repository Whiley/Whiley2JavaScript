function f$Y9bFXA$W(r0){//function(int) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = new WyJS.Integer(0);
            if(WyJS.gt(r0, r1, true)){
               control_flow_pc = 639;
               control_flow_repeat = true;
               continue outer;
            }
            var r2 = new WyJS.Integer(0);
            return r2;//return %2 : int
            control_flow_pc = 640;
            control_flow_repeat = true;
            continue outer;//goto label640
         case 639:
            return r0;//return %0 : int
         case 640:
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
            var r1 = new WyJS.Integer(1);
            var r0 = f$Y9bFXA$W(r1);//invoke %0 = (%1) Import_Valid_1:f : function(int) -> int
            var r2 = new WyJS.Integer(1);
            if(WyJS.equals(r0, r2, true)){
               control_flow_pc = 641;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 641:
            return;
      }
   }
}

