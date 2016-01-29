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
               control_flow_pc = 685;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 686;
            control_flow_repeat = true;
            continue outer;//goto label686
         case 685:
            var r2 = true;
            return r2;//return %2 : bool
            control_flow_pc = 687;
            control_flow_repeat = true;
            continue outer;//goto label687
         case 686:
            var r3 = false;
            return r3;//return %3 : bool
         case 687:
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
               control_flow_pc = 688;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 688:
            var r4 = false;
            var r3 = f$Y9bF19$W(r4);//invoke %3 = (%4) BoolIfElse_Valid_1:f : function(bool) -> bool
            var r5 = true;
            if(r3 === r5){
               control_flow_pc = 689;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 690;
            control_flow_repeat = true;
            continue outer;//goto label690
         case 689:
            throw {name: 'Assert Failed', message: 'fail'}
         case 690:
            return;
      }
   }
}

