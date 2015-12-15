function f$Z9bFaA$WL1d$VG$J6$i0kN$F6$d0kQ$s5$U0VK$35$g0FP$F5$U0VB$$Y0VO$76$m$VQ$35$o0(r0){//function(Function_Valid_20:fr2nat) -> int
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
            var r3 = f$Z9bFaA$WL1d$VG$J6$i0kN$F6$d0kQ$s5$U0VK$35$g0FP$F5$U0VB$$Y0VO$76$m$VQ$35$o0(r0);//invoke %3 = (%0) Function_Valid_20:f : function(Function_Valid_20:fr2nat) -> int
            var r4 = new WyJS.Integer(1);
            if(WyJS.equals(r3, r4, true)){
               control_flow_pc = 490;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 490:
            return;
      }
   }
}

