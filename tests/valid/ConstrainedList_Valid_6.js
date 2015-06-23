function Cash(r0){//function([ConstrainedList_Valid_6:nat]) -> ConstrainedList_Valid_6:Cash
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r5 = new WyJS.Integer(0);
            var r6 = new WyJS.Integer(0);
            var r7 = new WyJS.Integer(0);
            var r8 = new WyJS.Integer(0);
            var r9 = new WyJS.Integer(0);
            var r10 = new WyJS.Integer(0);
            var r11 = new WyJS.Integer(0);
            var r12 = new WyJS.Integer(0);
            var r13 = [r5, r6, r7, r8, r9, r10, r11, r12];
            var r4 = r13;//assign %4 = %13  : [int]
            var r1 = r4;//assign %1 = %4  : [int]
            var r15 = new WyJS.Integer(0);
            var r14 = r15;//assign %14 = %15  : int
            var r2 = r14;//assign %2 = %14  : int
            while(true){//loop (%1, %2, %16, %17, %18, %19, %20, %21, %22, %23, %24, %25, %26, %27, %28, %29, %30, %31, %32)
               var r22 = r0.length;//lengthof %22 = %0 : [int]
               if(WyJS.gt(r2, r22, true)){
                  control_flow_pc = 1754;
                  control_flow_repeat = true;
                  continue outer;
               }
               var r24 = r0[r2];
               var r23 = r24;//assign %23 = %24  : int
               var r20 = r23;//assign %20 = %23  : int
               var r25 = r1[r20];
               var r26 = new WyJS.Integer(1);
               var r27 = r25.add(r26);//add %27 = %25, %26 : int
               var r28 = r1[r20];
               var r29 = new WyJS.Integer(1);
               var r30 = r28.add(r29);//add %30 = %28, %29 : int
               r1[r20] = r30;//update %1[%20] = %30 : [int] -> [int]
               var r31 = new WyJS.Integer(1);
               var r32 = r2.add(r31);//add %32 = %2, %31 : int
               var r2 = r32;//assign %2 = %32  : int
            }
         case 1754:
            return r1;//return %1 : [int]
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
            var r1 = new WyJS.Integer(5);
            var r2 = new WyJS.Integer(1);
            var r3 = [r1, r2];
            var r0 = Cash(r3);//invoke %0 = (%3) ConstrainedList_Valid_6:Cash : function([ConstrainedList_Valid_6:nat]) -> ConstrainedList_Valid_6:Cash
            var r4 = new WyJS.Integer(0);
            var r5 = new WyJS.Integer(1);
            var r6 = new WyJS.Integer(0);
            var r7 = new WyJS.Integer(0);
            var r8 = new WyJS.Integer(0);
            var r9 = new WyJS.Integer(1);
            var r10 = new WyJS.Integer(0);
            var r11 = new WyJS.Integer(0);
            var r12 = [r4, r5, r6, r7, r8, r9, r10, r11];
            if(WyJS.equals(r0, r12, true)){
               control_flow_pc = 1755;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1755:
            var r14 = new WyJS.Integer(6);
            var r15 = new WyJS.Integer(2);
            var r16 = new WyJS.Integer(4);
            var r17 = [r14, r15, r16];
            var r13 = Cash(r17);//invoke %13 = (%17) ConstrainedList_Valid_6:Cash : function([ConstrainedList_Valid_6:nat]) -> ConstrainedList_Valid_6:Cash
            var r18 = new WyJS.Integer(0);
            var r19 = new WyJS.Integer(0);
            var r20 = new WyJS.Integer(1);
            var r21 = new WyJS.Integer(0);
            var r22 = new WyJS.Integer(1);
            var r23 = new WyJS.Integer(0);
            var r24 = new WyJS.Integer(1);
            var r25 = new WyJS.Integer(0);
            var r26 = [r18, r19, r20, r21, r22, r23, r24, r25];
            if(WyJS.equals(r13, r26, true)){
               control_flow_pc = 1756;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1756:
            var r28 = new WyJS.Integer(5);
            var r29 = new WyJS.Integer(5);
            var r30 = new WyJS.Integer(3);
            var r31 = [r28, r29, r30];
            var r27 = Cash(r31);//invoke %27 = (%31) ConstrainedList_Valid_6:Cash : function([ConstrainedList_Valid_6:nat]) -> ConstrainedList_Valid_6:Cash
            var r32 = new WyJS.Integer(0);
            var r33 = new WyJS.Integer(0);
            var r34 = new WyJS.Integer(0);
            var r35 = new WyJS.Integer(1);
            var r36 = new WyJS.Integer(0);
            var r37 = new WyJS.Integer(2);
            var r38 = new WyJS.Integer(0);
            var r39 = new WyJS.Integer(0);
            var r40 = [r32, r33, r34, r35, r36, r37, r38, r39];
            if(WyJS.equals(r27, r40, true)){
               control_flow_pc = 1757;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1757:
      }
   }
}

