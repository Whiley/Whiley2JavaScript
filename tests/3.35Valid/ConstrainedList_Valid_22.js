function inc(r0){//function([ConstrainedList_Valid_22:nat]) -> [ConstrainedList_Valid_22:nat]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r4 = new WyJS.Integer(0);
            r3 = r4;//assign %3 = %4  : int
            r1 = r3;//assign %1 = %3  : int
            var r6 = new WyJS.Integer(0);
            r5 = r6;//assign %5 = %6  : int
            r2 = r5;//assign %2 = %5  : int
            while(true){//loop (%0, %1, %2, %7, %8, %9, %10, %11, %12, %13, %14, %15, %16, %17, %18, %19)
               var r8 = r0.length;//lengthof %8 = %0 : [int]
               if(WyJS.gt(r2, r8, true)){
                  control_flow_pc = 194;
                  control_flow_repeat = true;
                  continue outer;
               }
               var r9 = r0.length;//lengthof %9 = %0 : [int]
               if(WyJS.gt(r1, r9, true)){
                  var r16 = new WyJS.Integer(1);
                  var r17 = r1.add(r16);//add %17 = %1, %16 : int
                  r1 = r17;//assign %1 = %17  : int
                  var r18 = new WyJS.Integer(1);
                  var r19 = r2.add(r18);//add %19 = %2, %18 : int
                  r2 = r19;//assign %2 = %19  : int
                  continue;
               }
               var r10 = r0.getValue(r1);
               var r11 = new WyJS.Integer(1);
               var r12 = r10.add(r11);//add %12 = %10, %11 : int
               var r13 = r0.getValue(r1);
               var r14 = new WyJS.Integer(1);
               var r15 = r13.add(r14);//add %15 = %13, %14 : int
               r0.setValue(r1, r15);//update %0[%1] = %15 : [int] -> [int]
            }
         case 194:
            while(true){//quantify %20 in %0 (%21) : [int]
               var r21 = new WyJS.Integer(0);
               if(WyJS.lt(r20, r21, false)){
                  control_flow_pc = 196;
                  control_flow_repeat = true;
                  continue outer;
               }
            }
            control_flow_pc = 197;
            control_flow_repeat = true;
            continue outer;//goto label197
         case 196:
            throw {name: 'Assert Failed', message: 'fail'}
         case 197:
            return r0;//return %0 : [int]
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
            var r1 = new WyJS.Integer(0);
            var r2 = new WyJS.List([r1], new WyJS.List('int'));
            var r0 = inc(r2);//invoke %0 = (%2) ConstrainedList_Valid_22:inc : function([ConstrainedList_Valid_22:nat]) -> [ConstrainedList_Valid_22:nat]
            var r3 = new WyJS.Integer(1);
            var r4 = new WyJS.List([r3], new WyJS.List('int'));
            if(WyJS.equals(r0, r4, true)){
               control_flow_pc = 198;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 198:
            var r6 = new WyJS.Integer(1);
            var r7 = new WyJS.Integer(2);
            var r8 = new WyJS.Integer(3);
            var r9 = new WyJS.List([r6, r7, r8], new WyJS.List('int'));
            var r5 = inc(r9);//invoke %5 = (%9) ConstrainedList_Valid_22:inc : function([ConstrainedList_Valid_22:nat]) -> [ConstrainedList_Valid_22:nat]
            var r10 = new WyJS.Integer(2);
            var r11 = new WyJS.Integer(3);
            var r12 = new WyJS.Integer(4);
            var r13 = new WyJS.List([r10, r11, r12], new WyJS.List('int'));
            if(WyJS.equals(r5, r13, true)){
               control_flow_pc = 199;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 199:
            var r15 = new WyJS.Integer(10);
            var r16 = new WyJS.Integer(9);
            var r17 = new WyJS.Integer(8);
            var r18 = new WyJS.Integer(7);
            var r19 = new WyJS.Integer(6);
            var r20 = new WyJS.Integer(5);
            var r21 = new WyJS.Integer(4);
            var r22 = new WyJS.Integer(3);
            var r23 = new WyJS.Integer(2);
            var r24 = new WyJS.Integer(1);
            var r25 = new WyJS.Integer(0);
            var r26 = new WyJS.List([r15, r16, r17, r18, r19, r20, r21, r22, r23, r24, r25], new WyJS.List('int'));
            var r14 = inc(r26);//invoke %14 = (%26) ConstrainedList_Valid_22:inc : function([ConstrainedList_Valid_22:nat]) -> [ConstrainedList_Valid_22:nat]
            var r27 = new WyJS.Integer(11);
            var r28 = new WyJS.Integer(10);
            var r29 = new WyJS.Integer(9);
            var r30 = new WyJS.Integer(8);
            var r31 = new WyJS.Integer(7);
            var r32 = new WyJS.Integer(6);
            var r33 = new WyJS.Integer(5);
            var r34 = new WyJS.Integer(4);
            var r35 = new WyJS.Integer(3);
            var r36 = new WyJS.Integer(2);
            var r37 = new WyJS.Integer(1);
            var r38 = new WyJS.List([r27, r28, r29, r30, r31, r32, r33, r34, r35, r36, r37], new WyJS.List('int'));
            if(WyJS.equals(r14, r38, true)){
               control_flow_pc = 200;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 200:
      }
   }
}

