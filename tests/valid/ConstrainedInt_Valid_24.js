function strlen$Z9bFaA$WL1j$kF$w5$i0kR$F6$m0FN$Z5$i0FO$F5$80VQ$F6$U0VK$35$g0FP$F5$U0VB$F25$B3$U0kR$F6$m0FP$s5$bx(r0){//function(ConstrainedInt_Valid_24:C_string) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r3 = new WyJS.Integer(0);
            var r2 = r3;//assign %2 = %3  : int
            var r1 = r2;//assign %1 = %2  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case -2:
            var r4 = new WyJS.Integer(0);
            if(WyJS.lt(r1, r4, false)){
               control_flow_pc = 2386;
               control_flow_repeat = true;
               continue outer;
            }
            var r5 = r0.length();//lengthof %5 = %0 : [int]
            if(WyJS.lt(r1, r5, false)){
               control_flow_pc = 2387;
               control_flow_repeat = true;
               continue outer;
            }
         case 2386:
            throw {name: 'Assert Failed', message: 'fail'}
         case 2387:
            return;
            var r6 = r0.getValue(r1);
            var r7 = new WyJS.Integer(0);
            if(WyJS.equals(r6, r7, true)){
               control_flow_pc = 2388;
               control_flow_repeat = true;
               continue outer;
            }
            var r8 = new WyJS.Integer(1);
            var r9 = r1.add(r8);//add %9 = %1, %8 : int
            var r1 = r9;//assign %1 = %9  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case 2388:
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
            var r2 = new WyJS.Integer(72);
            var r3 = new WyJS.Integer(101);
            var r4 = new WyJS.Integer(108);
            var r5 = new WyJS.Integer(108);
            var r6 = new WyJS.Integer(111);
            var r7 = new WyJS.Integer(87);
            var r8 = new WyJS.Integer(111);
            var r9 = new WyJS.Integer(114);
            var r10 = new WyJS.Integer(108);
            var r11 = new WyJS.Integer(100);
            var r12 = new WyJS.Integer(0);
            var r13 = new WyJS.List([r2, r3, r4, r5, r6, r7, r8, r9, r10, r11, r12], new WyJS.Type.List(new WyJS.Type.Int()));
            var r14 = WyJS.cast(new WyJS.Type.List(new WyJS.Type.Int()), r13);
            var r1 = r14.clone(new WyJS.Type.Int());//assign %1 = %14  : [int]
            var r0 = r1.clone(new WyJS.Type.Int());//assign %0 = %1  : [int]
            var r15 = strlen$Z9bFaA$WL1j$kF$w5$i0kR$F6$m0FN$Z5$i0FO$F5$80VQ$F6$U0VK$35$g0FP$F5$U0VB$F25$B3$U0kR$F6$m0FP$s5$bx(r0);//invoke %15 = (%0) ConstrainedInt_Valid_24:strlen : function(ConstrainedInt_Valid_24:C_string) -> int
            var r16 = new WyJS.Integer(10);
            if(WyJS.equals(r15, r16, true)){
               control_flow_pc = 2389;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2389:
            return;
      }
   }
}

