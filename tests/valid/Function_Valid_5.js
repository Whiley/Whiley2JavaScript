function g$Y9bFXL1c$VG$J6$i0kN$F6$d0kQ$s5$U0VK$35$g0FP$F5$U0FC5$a0VR$F2$i0FN$F631(r0){//function(Function_Valid_5:fr4nat) -> Function_Valid_5:fr4nat
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = new WyJS.Integer(1);
            var r2 = r0.add(r1);//add %2 = %0, %1 : int
            return r2;//return %2 : int
            return;
      }
   }
}

function f$Z9bFaA$WL1c$VG$J6$i0kN$F6$d0kQ$s5$U0VK$35$g0FP$F5$U0FC5$a0VR$F2$i0FN$F6(r0){//function(Function_Valid_5:fr4nat) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            return r0;//return %0 : int
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
            var r2 = new WyJS.Integer(1);
            var r1 = r2;//assign %1 = %2  : int
            var r0 = r1;//assign %0 = %1  : int
            var r4 = g$Y9bFXL1c$VG$J6$i0kN$F6$d0kQ$s5$U0VK$35$g0FP$F5$U0FC5$a0VR$F2$i0FN$F631(r0);//invoke %4 = (%0) Function_Valid_5:g : function(Function_Valid_5:fr4nat) -> Function_Valid_5:fr4nat
            var r3 = f$Z9bFaA$WL1c$VG$J6$i0kN$F6$d0kQ$s5$U0VK$35$g0FP$F5$U0FC5$a0VR$F2$i0FN$F6(r4);//invoke %3 = (%4) Function_Valid_5:f : function(Function_Valid_5:fr4nat) -> int
            var r5 = new WyJS.Integer(2);
            if(WyJS.equals(r3, r5, true)){
               control_flow_pc = 1010;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1010:
            return;
      }
   }
}

