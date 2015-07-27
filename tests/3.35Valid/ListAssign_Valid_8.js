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
            var r6 = new WyJS.List([r3, r4, r5], new WyJS.List('int'));
            var r7 = new WyJS.Integer(0);
            var r8 = new WyJS.List([r7], new WyJS.List('int'));
            var r9 = new WyJS.List([r6, r8], new WyJS.List('[int]'));
            r2 = r9.clone();//assign %2 = %9  : [[int]]
            r0 = r2.clone();//assign %0 = %2  : [[int]]
            r10 = r0.clone();//assign %10 = %0  : [[int]]
            r1 = r10.clone();//assign %1 = %10  : [[int]]
            var r11 = new WyJS.Integer(3);
            var r12 = new WyJS.Integer(4);
            var r13 = new WyJS.Integer(5);
            var r14 = new WyJS.List([r11, r12, r13], new WyJS.List('int'));
            var r15 = new WyJS.Integer(0);
            var r16 = new WyJS.Integer(3);
            var r17 = new WyJS.Integer(4);
            var r18 = new WyJS.Integer(5);
            var r19 = new WyJS.List([r16, r17, r18], new WyJS.List('int'));
            r1.setValue(r15, r19);//update %1[%15] = %19 : [[int]] -> [[int]]
            var r20 = new WyJS.Integer(0);
            var r21 = r0.getValue(r20);
            var r22 = new WyJS.Integer(1);
            var r23 = new WyJS.Integer(2);
            var r24 = new WyJS.Integer(3);
            var r25 = new WyJS.List([r22, r23, r24], new WyJS.List('int'));
            if(WyJS.equals(r21, r25, true)){
               control_flow_pc = 2393;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2393:
            var r26 = new WyJS.Integer(1);
            var r27 = r0.getValue(r26);
            var r28 = new WyJS.Integer(0);
            var r29 = new WyJS.List([r28], new WyJS.List('int'));
            if(WyJS.equals(r27, r29, true)){
               control_flow_pc = 2394;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2394:
            var r30 = new WyJS.Integer(0);
            var r31 = r1.getValue(r30);
            var r32 = new WyJS.Integer(3);
            var r33 = new WyJS.Integer(4);
            var r34 = new WyJS.Integer(5);
            var r35 = new WyJS.List([r32, r33, r34], new WyJS.List('int'));
            if(WyJS.equals(r31, r35, true)){
               control_flow_pc = 2395;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2395:
            var r36 = new WyJS.Integer(1);
            var r37 = r1.getValue(r36);
            var r38 = new WyJS.Integer(0);
            var r39 = new WyJS.List([r38], new WyJS.List('int'));
            if(WyJS.equals(r37, r39, true)){
               control_flow_pc = 2396;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2396:
      }
   }
}

