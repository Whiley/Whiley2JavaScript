function atob$Z9bFaL1j$kF$w5$i0kR$F6$m0FN$Z5$i0FO$F5$80VQ$F6$U0VK$35$g0FP$F5$U0FB$V20VN$s5$W0$SFc_kA$B3$j0VQ$B6$o0VR$35$d0VQ$J5$Z0FH$s5$o0kM$N4$W0$Q$Z5$Z0kM$32$sF$35$i0FN$F6(r0){//function(ConstrainedInt_Valid_18:anat) -> ConstrainedInt_Valid_18:bnat
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

function btoa$Z9bFaL1j$kF$w5$i0kR$F6$m0FN$Z5$i0FO$F5$80VQ$F6$U0VK$35$g0FP$F5$U0FB$V20FN$s5$W0$SFc_kA$B3$j0VQ$B6$o0VR$35$d0VQ$J5$Z0FH$s5$o0kM$N4$W0$Q$Z5$Z0kM$32$sF$75$i0FN$F6(r0){//function(ConstrainedInt_Valid_18:bnat) -> ConstrainedInt_Valid_18:anat
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
            var r3 = atob$Z9bFaL1j$kF$w5$i0kR$F6$m0FN$Z5$i0FO$F5$80VQ$F6$U0VK$35$g0FP$F5$U0FB$V20VN$s5$W0$SFc_kA$B3$j0VQ$B6$o0VR$35$d0VQ$J5$Z0FH$s5$o0kM$N4$W0$Q$Z5$Z0kM$32$sF$35$i0FN$F6(r0);//invoke %3 = (%0) ConstrainedInt_Valid_18:atob : function(ConstrainedInt_Valid_18:anat) -> ConstrainedInt_Valid_18:bnat
            var r4 = new WyJS.Integer(1);
            if(WyJS.equals(r3, r4, true)){
               control_flow_pc = 1371;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1371:
            var r5 = btoa$Z9bFaL1j$kF$w5$i0kR$F6$m0FN$Z5$i0FO$F5$80VQ$F6$U0VK$35$g0FP$F5$U0FB$V20FN$s5$W0$SFc_kA$B3$j0VQ$B6$o0VR$35$d0VQ$J5$Z0FH$s5$o0kM$N4$W0$Q$Z5$Z0kM$32$sF$75$i0FN$F6(r0);//invoke %5 = (%0) ConstrainedInt_Valid_18:btoa : function(ConstrainedInt_Valid_18:bnat) -> ConstrainedInt_Valid_18:anat
            var r6 = new WyJS.Integer(1);
            if(WyJS.equals(r5, r6, true)){
               control_flow_pc = 1372;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1372:
            return;
      }
   }
}

