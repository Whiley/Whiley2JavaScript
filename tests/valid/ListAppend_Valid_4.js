function append$Z9bF1D527RWz(r0){//function([int]) -> [int]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r4 = new WyJS.List([], new WyJS.Type.List(new WyJS.Type.Void()));
            r3 = r4.clone();//assign %3 = %4  : [void]
            r1 = r3.clone();//assign %1 = %3  : [int]
            var r6 = new WyJS.Integer(0);
            var r5 = r6;//assign %5 = %6  : int
            var r2 = r5;//assign %2 = %5  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case -2:
            var r7 = r0.length();//lengthof %7 = %0 : [int]
            if(WyJS.gt(r2, r7, true)){
               control_flow_pc = 1698;
               control_flow_repeat = true;
               continue outer;
            }
            var r8 = r0.getValue(r2);
            var r9 = new WyJS.List([r8], new WyJS.Type.List(new WyJS.Type.Int()));
            var r10 = r9.append(r1);
            r1 = r10.clone();//assign %1 = %10  : [int]
            var r11 = new WyJS.Integer(1);
            var r12 = r2.add(r11);//add %12 = %2, %11 : int
            var r2 = r12;//assign %2 = %12  : int
         case 1698:
            return r1;//return %1 : [int]
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
            var r3 = new WyJS.List([97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122]);
            var r2 = append$Z9bF1D527RWz(r3);//invoke %2 = (%3) ListAppend_Valid_4:append : function([int]) -> [int]
            r1 = r2.clone();//assign %1 = %2  : [int]
            r0 = r1.clone();//assign %0 = %1  : [int]
            var r4 = new WyJS.Integer(122);
            var r5 = new WyJS.Integer(121);
            var r6 = new WyJS.Integer(120);
            var r7 = new WyJS.Integer(119);
            var r8 = new WyJS.Integer(118);
            var r9 = new WyJS.Integer(117);
            var r10 = new WyJS.Integer(116);
            var r11 = new WyJS.Integer(115);
            var r12 = new WyJS.Integer(114);
            var r13 = new WyJS.Integer(113);
            var r14 = new WyJS.Integer(112);
            var r15 = new WyJS.Integer(111);
            var r16 = new WyJS.Integer(110);
            var r17 = new WyJS.Integer(109);
            var r18 = new WyJS.Integer(108);
            var r19 = new WyJS.Integer(107);
            var r20 = new WyJS.Integer(106);
            var r21 = new WyJS.Integer(105);
            var r22 = new WyJS.Integer(104);
            var r23 = new WyJS.Integer(103);
            var r24 = new WyJS.Integer(102);
            var r25 = new WyJS.Integer(101);
            var r26 = new WyJS.Integer(100);
            var r27 = new WyJS.Integer(99);
            var r28 = new WyJS.Integer(98);
            var r29 = new WyJS.Integer(97);
            var r30 = new WyJS.List([r4, r5, r6, r7, r8, r9, r10, r11, r12, r13, r14, r15, r16, r17, r18, r19, r20, r21, r22, r23, r24, r25, r26, r27, r28, r29], new WyJS.Type.List(new WyJS.Type.Int()));
            if(WyJS.equals(r0, r30, true)){
               control_flow_pc = 1699;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1699:
      }
   }
}

