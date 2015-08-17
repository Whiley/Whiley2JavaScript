function f$_9bFaL1s$kF$w5$i0kR$F6$m0FN$Z5$i0FO$F5$B0FP$B6$o0kM$N4$W0$Q$Z5$Z0kM$32$oJ$R6$d0FO$76$Z00D5ZAw2(r0){//function([int]) -> ConstrainedList_Valid_14:wierd
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = new WyJS.Integer(1);
            var r2 = new WyJS.Integer(0);
            var r3 = new WyJS.Integer(1);
            r0.setValue(r2, r3);
            return r0;//return %0 : [int]
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
            var r1 = new WyJS.Integer(1);
            var r2 = r1.neg();//neg %2 = %1 : int
            var r3 = new WyJS.Integer(2);
            var r4 = r3.neg();//neg %4 = %3 : int
            var r5 = new WyJS.List([r2, r4], new WyJS.Type.List(new WyJS.Type.Int()));
            var r0 = f$_9bFaL1s$kF$w5$i0kR$F6$m0FN$Z5$i0FO$F5$B0FP$B6$o0kM$N4$W0$Q$Z5$Z0kM$32$oJ$R6$d0FO$76$Z00D5ZAw2(r5);//invoke %0 = (%5) ConstrainedList_Valid_14:f : function([int]) -> ConstrainedList_Valid_14:wierd
            var r6 = new WyJS.Integer(1);
            var r7 = new WyJS.Integer(2);
            var r8 = r7.neg();//neg %8 = %7 : int
            var r9 = new WyJS.List([r6, r8], new WyJS.Type.List(new WyJS.Type.Int()));
            if(WyJS.equals(r0, r9, true)){
               control_flow_pc = 156;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 156:
      }
   }
}

