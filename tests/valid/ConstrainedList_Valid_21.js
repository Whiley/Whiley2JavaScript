function Cash(r0){//function([ConstrainedList_Valid_21:nat]) -> ConstrainedList_Valid_21:Cash
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
            while(true){//loop (%1, %2, %3, %16, %17, %18, %20, %21, %22, %23, %24, %25, %26, %27, %28, %29, %30, %31)
               var r21 = r0.length;//lengthof %21 = %0 : [int]
               if(WyJS.gt(r2, r21, true)){
                  control_flow_pc = 188;
                  control_flow_repeat = true;
                  continue outer;
               }
               var r23 = r0[r2];
               var r22 = r23;//assign %22 = %23  : int
               var r3 = r22;//assign %3 = %22  : int
               var r24 = r1[r3];
               var r25 = new WyJS.Integer(1);
               var r26 = r24.add(r25);//add %26 = %24, %25 : int
               var r27 = r1[r3];
               var r28 = new WyJS.Integer(1);
               var r29 = r27.add(r28);//add %29 = %27, %28 : int
               r1[r3] = r29;//update %1[%3] = %29 : [int] -> [int]
               var r30 = new WyJS.Integer(1);
               var r31 = r2.add(r30);//add %31 = %2, %30 : int
               var r2 = r31;//assign %2 = %31  : int
            }
         case 188:
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
            var r3 = new WyJS.Integer(5);
            var r4 = new WyJS.Integer(1);
            var r5 = [r3, r4];
            var r2 = Cash(r5);//invoke %2 = (%5) ConstrainedList_Valid_21:Cash : function([ConstrainedList_Valid_21:nat]) -> ConstrainedList_Valid_21:Cash
            var r1 = r2;//assign %1 = %2  : [int]
            var r0 = r1;//assign %0 = %1  : [int]
            var r6 = new WyJS.Integer(0);
            var r7 = new WyJS.Integer(1);
            var r8 = new WyJS.Integer(0);
            var r9 = new WyJS.Integer(0);
            var r10 = new WyJS.Integer(0);
            var r11 = new WyJS.Integer(1);
            var r12 = new WyJS.Integer(0);
            var r13 = new WyJS.Integer(0);
            var r14 = [r6, r7, r8, r9, r10, r11, r12, r13];
            if(WyJS.equals(r0, r14, true)){
               control_flow_pc = 189;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 189:
            var r16 = new WyJS.Integer(6);
            var r17 = new WyJS.Integer(2);
            var r18 = new WyJS.Integer(4);
            var r19 = [r16, r17, r18];
            var r15 = Cash(r19);//invoke %15 = (%19) ConstrainedList_Valid_21:Cash : function([ConstrainedList_Valid_21:nat]) -> ConstrainedList_Valid_21:Cash
            var r0 = r15;//assign %0 = %15  : [int]
            var r20 = new WyJS.Integer(0);
            var r21 = new WyJS.Integer(0);
            var r22 = new WyJS.Integer(1);
            var r23 = new WyJS.Integer(0);
            var r24 = new WyJS.Integer(1);
            var r25 = new WyJS.Integer(0);
            var r26 = new WyJS.Integer(1);
            var r27 = new WyJS.Integer(0);
            var r28 = [r20, r21, r22, r23, r24, r25, r26, r27];
            if(WyJS.equals(r0, r28, true)){
               control_flow_pc = 190;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 190:
            var r30 = new WyJS.Integer(5);
            var r31 = new WyJS.Integer(5);
            var r32 = new WyJS.Integer(3);
            var r33 = [r30, r31, r32];
            var r29 = Cash(r33);//invoke %29 = (%33) ConstrainedList_Valid_21:Cash : function([ConstrainedList_Valid_21:nat]) -> ConstrainedList_Valid_21:Cash
            var r0 = r29;//assign %0 = %29  : [int]
            var r34 = new WyJS.Integer(0);
            var r35 = new WyJS.Integer(0);
            var r36 = new WyJS.Integer(0);
            var r37 = new WyJS.Integer(1);
            var r38 = new WyJS.Integer(0);
            var r39 = new WyJS.Integer(2);
            var r40 = new WyJS.Integer(0);
            var r41 = new WyJS.Integer(0);
            var r42 = [r34, r35, r36, r37, r38, r39, r40, r41];
            if(WyJS.equals(r0, r42, true)){
               control_flow_pc = 191;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 191:
      }
   }
}

