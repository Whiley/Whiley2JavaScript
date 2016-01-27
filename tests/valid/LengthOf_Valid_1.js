function len$Z9bFaA$WL1c$$I$J5$i0kO$F6$c0kI$N5$U0VK$35$g0FP$F5$U0FB3$g0FP$B6$o0(r0){//function(LengthOf_Valid_1:list) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = r0.length();//lengthof %1 = %0 : bool[]|int[]
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
            var r5 = new WyJS.Integer(3);
            var r6 = new WyJS.Array([r3, r4, r5], new WyJS.Type.Array(new WyJS.Type.Int()));
            var r2 = r6.clone(new WyJS.Type.Int());//assign %2 = %6  : int[]
            var r0 = r2.clone(new WyJS.Type.Int());//assign %0 = %2  : int[]
            var r7 = len$Z9bFaA$WL1c$$I$J5$i0kO$F6$c0kI$N5$U0VK$35$g0FP$F5$U0FB3$g0FP$B6$o0(r0);//invoke %7 = (%0) LengthOf_Valid_1:len : function(LengthOf_Valid_1:list) -> int
            var r8 = new WyJS.Integer(3);
            if(WyJS.equals(r7, r8, true)){
               control_flow_pc = 696;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 696:
            var r10 = true;
            var r11 = false;
            var r12 = true;
            var r13 = new WyJS.Array([r10, r11, r12], new WyJS.Type.Array(new WyJS.Type.Bool()));
            var r9 = r13.clone(new WyJS.Type.Bool());//assign %9 = %13  : bool[]
            var r1 = r9.clone(new WyJS.Type.Bool());//assign %1 = %9  : bool[]
            var r14 = len$Z9bFaA$WL1c$$I$J5$i0kO$F6$c0kI$N5$U0VK$35$g0FP$F5$U0FB3$g0FP$B6$o0(r1);//invoke %14 = (%1) LengthOf_Valid_1:len : function(LengthOf_Valid_1:list) -> int
            var r15 = new WyJS.Integer(3);
            if(WyJS.equals(r14, r15, true)){
               control_flow_pc = 697;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 697:
            return;
      }
   }
}

