function f$Z9bFaA$WL1i$kF$w5$i0kR$F6$m0FN$Z5$i0FO$F5$80VQ$F6$U0VK$35$g0FP$F5$U0VC2$i0FS$o5(r0){//function(ConstrainedInt_Valid_6:num) -> int
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

function g$Y9dFXs1Fs2(r0, r1){//function(int,int) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r2 = f$Z9bFaA$WL1i$kF$w5$i0kR$F6$m0FN$Z5$i0FO$F5$80VQ$F6$U0VK$35$g0FP$F5$U0VC2$i0FS$o5(r1);//invoke %2 = (%1) ConstrainedInt_Valid_6:f : function(ConstrainedInt_Valid_6:num) -> int
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
            var r2 = new WyJS.Integer(2);
            var r0 = g$Y9dFXs1Fs2(r1, r2);//invoke %0 = (%1, %2) ConstrainedInt_Valid_6:g : function(int,int) -> int
            var r3 = new WyJS.Integer(2);
            if(WyJS.equals(r0, r3, true)){
               control_flow_pc = 550;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 550:
            return;
      }
   }
}

