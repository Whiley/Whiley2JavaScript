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
               control_flow_pc = 751;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 752;
            control_flow_repeat = true;
            continue outer;//goto label752
         case 751:
            var r2 = true;
            return r2;//return %2 : bool
            control_flow_pc = 753;
            control_flow_repeat = true;
            continue outer;//goto label753
         case 752:
            var r3 = false;
            return r3;//return %3 : bool
         case 753:
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
               control_flow_pc = 754;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 754:
            var r4 = false;
            var r3 = f$Y9bF19$W(r4);//invoke %3 = (%4) BoolIfElse_Valid_1:f : function(bool) -> bool
            var r5 = true;
            if(r3 === r5){
               control_flow_pc = 755;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 756;
            control_flow_repeat = true;
            continue outer;//goto label756
         case 755:
            throw {name: 'Assert Failed', message: 'fail'}
         case 756:
            return;
      }
   }
}

