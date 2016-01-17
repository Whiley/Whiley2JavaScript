function f$Z9bFaA$WL1j$kF$w5$i0kR$F6$m0FN$Z5$i0FO$F5$80VQ$F6$U0VK$35$g0FP$F5$U0FB$$n$VQ$J6$h0(r0){//function(ConstrainedInt_Valid_10:num) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r2 = r0;//assign %2 = %0  : int
            var r1 = r2;//assign %1 = %2  : int
            return r1;//return %1 : int
            return;
      }
   }
}

function g$Z9dFXt1Fc_kA$B3$j0VQ$B6$o0VR$35$d0VQ$J5$Z0FH$s5$o0kM$N4$W0$Q$Z5$Z0kM$32$kB$s5$W0$SE(r0, r1){//function(int,ConstrainedInt_Valid_10:nat) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r2 = f$Z9bFaA$WL1j$kF$w5$i0kR$F6$m0FN$Z5$i0FO$F5$80VQ$F6$U0VK$35$g0FP$F5$U0FB$$n$VQ$J6$h0(r1);//invoke %2 = (%1) ConstrainedInt_Valid_10:f : function(ConstrainedInt_Valid_10:num) -> int
            return r2;//return %2 : int
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
            var r2 = new WyJS.Integer(3);
            var r0 = g$Z9dFXt1Fc_kA$B3$j0VQ$B6$o0VR$35$d0VQ$J5$Z0FH$s5$o0kM$N4$W0$Q$Z5$Z0kM$32$kB$s5$W0$SE(r1, r2);//invoke %0 = (%1, %2) ConstrainedInt_Valid_10:g : function(int,ConstrainedInt_Valid_10:nat) -> int
            var r3 = new WyJS.Integer(3);
            if(WyJS.equals(r0, r3, true)){
               control_flow_pc = 1376;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1376:
            return;
      }
   }
}

