function f$3AbF59$WL1P$VN$w5$j0$Q$F6$t0$R$J5$k$FBN$VN$w5$j0$Q$s5$p0$Q$kq2(r0){//method(booltype01:boolnull) -> bool
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            if(WyJS.is(r0, new WyJS.Type.Bool())){
               control_flow_pc = 0;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 1;
            control_flow_repeat = true;
            continue outer;//goto label1
         case 0:
            return r0;//return %0 : bool
         case 1:
            var r1 = true;
            return r1;//return %1 : bool
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
            var r2 = false;
            var r1 = r2;//assign %1 = %2  : bool
            var r0 = r1;//assign %0 = %1  : null|bool
            var r3 = true;
            if(r0 === r3){
               control_flow_pc = 2;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 3;
            control_flow_repeat = true;
            continue outer;//goto label3
         case 2:
            throw {name: 'Assert Failed', message: 'fail'}
         case 3:
      }
   }
}

