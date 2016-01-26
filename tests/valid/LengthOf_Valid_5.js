function len$Z9bFaA$WL1c$$I$J5$i0kO$F6$c0kI$N5$U0VK$35$g0FP$F5$U0FC3$g0FP$B6$o0(r0){//function(LengthOf_Valid_5:list) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = r0.length();//lengthof %1 = %0 : int[]
            return r1;//return %1 : int
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
            var r3 = new WyJS.Integer(1);
            var r4 = new WyJS.Integer(2);
            var r5 = new WyJS.Array([r3, r4], new WyJS.Type.Array(new WyJS.Type.Int()));
            var r2 = r5.clone(new WyJS.Type.Int());//assign %2 = %5  : int[]
            var r0 = r2.clone(new WyJS.Type.Int());//assign %0 = %2  : int[]
            var r6 = len$Z9bFaA$WL1c$$I$J5$i0kO$F6$c0kI$N5$U0VK$35$g0FP$F5$U0FC3$g0FP$B6$o0(r0);//invoke %6 = (%0) LengthOf_Valid_5:len : function(LengthOf_Valid_5:list) -> int
            var r7 = new WyJS.Integer(2);
            if(WyJS.equals(r6, r7, true)){
               control_flow_pc = 731;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 731:
            var r9 = new WyJS.Array([new WyJS.Integer(72), new WyJS.Integer(101), new WyJS.Integer(108), new WyJS.Integer(108), new WyJS.Integer(111), new WyJS.Integer(32), new WyJS.Integer(87), new WyJS.Integer(111), new WyJS.Integer(114), new WyJS.Integer(108), new WyJS.Integer(100)], new WyJS.Type.Array(new WyJS.Type.Int()));
            var r8 = r9.clone(new WyJS.Type.Int());//assign %8 = %9  : int[]
            var r1 = r8.clone(new WyJS.Type.Int());//assign %1 = %8  : int[]
            var r10 = len$Z9bFaA$WL1c$$I$J5$i0kO$F6$c0kI$N5$U0VK$35$g0FP$F5$U0FC3$g0FP$B6$o0(r1);//invoke %10 = (%1) LengthOf_Valid_5:len : function(LengthOf_Valid_5:list) -> int
            var r11 = new WyJS.Integer(11);
            if(WyJS.equals(r10, r11, true)){
               control_flow_pc = 732;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 732:
            return;
      }
   }
}

