function f$Z9bFaA$WL1j$kF$w5$i0kR$F6$m0FN$Z5$i0FO$F5$80VQ$F6$U0VK$35$g0FP$F5$U0VB$BY0kN$76$m$VQ$J6$h0(r0){//function(ConstrainedInt_Valid_23:cr2num) -> int
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

function test$1A_7VkE(){//method() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = new WyJS.Integer(3);
            var r0 = f$Z9bFaA$WL1j$kF$w5$i0kR$F6$m0FN$Z5$i0FO$F5$80VQ$F6$U0VK$35$g0FP$F5$U0VB$BY0kN$76$m$VQ$J6$h0(r1);//invoke %0 = (%1) ConstrainedInt_Valid_23:f : function(ConstrainedInt_Valid_23:cr2num) -> int
            var r2 = new WyJS.Integer(3);
            if(WyJS.equals(r0, r2, true)){
               control_flow_pc = 2380;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2380:
            return;
      }
   }
}

