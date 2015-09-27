function isLetter$Z9bF59$WA$(r0){//function(int) -> bool
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = new WyJS.Integer(97);
            if(WyJS.gt(r1, r0, false)){
               control_flow_pc = 158;
               control_flow_repeat = true;
               continue outer;
            }
            var r2 = new WyJS.Integer(122);
            if(WyJS.lt(r0, r2, true)){
               control_flow_pc = 159;
               control_flow_repeat = true;
               continue outer;
            }
         case 158:
            var r3 = new WyJS.Integer(65);
            if(WyJS.gt(r3, r0, false)){
               control_flow_pc = 160;
               control_flow_repeat = true;
               continue outer;
            }
            var r4 = new WyJS.Integer(90);
            if(WyJS.lt(r0, r4, true)){
               control_flow_pc = 159;
               control_flow_repeat = true;
               continue outer;
            }
         case 160:
            var r5 = false;
            control_flow_pc = 161;
            control_flow_repeat = true;
            continue outer;//goto label161
         case 159:
            var r5 = true;
         case 161:
            return r5;//return %5 : bool
            return;
      }
   }
}

function f$Z9bFaA$WL1s$kF$w5$i0kR$F6$m0FN$Z5$i0FO$F5$B0FP$B6$o0kM$N4$W0$Q$Z5$Z0kM$32$lJ$B6$o0FN$F6$_0(r0){//function(ConstrainedList_Valid_11:state) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = r0.fieldLoad("pos");//fieldload %1 = %0 pos : {int[] input,int pos}
            var r2 = r0.fieldLoad("input");//fieldload %2 = %0 input : {int[] input,int pos}
            var r3 = r2.length();//lengthof %3 = %2 : int[]
            if(WyJS.gt(r1, r3, true)){
               control_flow_pc = 162;
               control_flow_repeat = true;
               continue outer;
            }
            var r5 = r0.fieldLoad("input");//fieldload %5 = %0 input : {int[] input,int pos}
            var r6 = r0.fieldLoad("pos");//fieldload %6 = %0 pos : {int[] input,int pos}
            var r7 = r5.getValue(r6);
            var r4 = isLetter$Z9bF59$WA$(r7);//invoke %4 = (%7) ConstrainedList_Valid_11:isLetter : function(int) -> bool
            var r8 = true;
            if(r4 === r8){
               control_flow_pc = 163;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 162;
            control_flow_repeat = true;
            continue outer;//goto label162
         case 163:
            var r9 = r0.fieldLoad("input");//fieldload %9 = %0 input : {int[] input,int pos}
            var r10 = r0.fieldLoad("pos");//fieldload %10 = %0 pos : {int[] input,int pos}
            var r11 = r9.getValue(r10);
            return r11;//return %11 : int
         case 162:
            var r12 = new WyJS.Integer(32);
            return r12;//return %12 : int
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
            var r1 = new WyJS.List([new WyJS.Integer(104), new WyJS.Integer(101), new WyJS.Integer(108), new WyJS.Integer(108), new WyJS.Integer(111)], new WyJS.Type.List(new WyJS.Type.Int()));
            var r2 = new WyJS.Integer(0);
            var r3 = new WyJS.Record(["input", "pos"], [r1, r2], new WyJS.Type.Record(["input", "pos"], [new WyJS.Type.List(new WyJS.Type.Int()), new WyJS.Type.Int()]));
            var r0 = f$Z9bFaA$WL1s$kF$w5$i0kR$F6$m0FN$Z5$i0FO$F5$B0FP$B6$o0kM$N4$W0$Q$Z5$Z0kM$32$lJ$B6$o0FN$F6$_0(r3);//invoke %0 = (%3) ConstrainedList_Valid_11:f : function(ConstrainedList_Valid_11:state) -> int
            var r4 = new WyJS.Integer(104);
            if(WyJS.equals(r0, r4, true)){
               control_flow_pc = 164;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 164:
            return;
      }
   }
}

