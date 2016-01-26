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
               control_flow_pc = 764;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 765;
            control_flow_repeat = true;
            continue outer;//goto label765
         case 764:
            var r2 = true;
            return r2;//return %2 : bool
            control_flow_pc = 766;
            control_flow_repeat = true;
            continue outer;//goto label766
         case 765:
            var r3 = false;
            return r3;//return %3 : bool
         case 766:
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
               control_flow_pc = 767;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 767:
            var r4 = false;
            var r3 = f$Y9bF19$W(r4);//invoke %3 = (%4) BoolIfElse_Valid_1:f : function(bool) -> bool
            var r5 = true;
            if(r3 === r5){
               control_flow_pc = 768;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 769;
            control_flow_repeat = true;
            continue outer;//goto label769
         case 768:
            throw {name: 'Assert Failed', message: 'fail'}
         case 769:
            return;
      }
   }
}

