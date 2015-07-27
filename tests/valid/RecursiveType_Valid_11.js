function test(){//method() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r4 = new WyJS.Integer(1);
            var r5 = new WyJS.Integer(1);
            var r6 = new WyJS.Integer(2);
            var r7 = new WyJS.Record(["op", "left", "right"], [r4, r5, r6]);
            var r3 = r7;//assign %3 = %7  : {int left,int op,int right}
            var r0 = r3;//assign %0 = %3  : X<int|{X left,int op,X right}>
            var r9 = new WyJS.Integer(2);
            var r10 = new WyJS.Integer(2);
            var r11 = new WyJS.Record(["op", "left", "right"], [r0, r9, r10]);
            var r8 = r11;//assign %8 = %11  : {{int left,int op,int right} left,int op,int right}
            var r1 = r8;//assign %1 = %8  : X<int|{X left,int op,X right}>
            var r13 = new WyJS.Integer(2);
            var r14 = new WyJS.Integer(3);
            var r15 = new WyJS.Integer(2);
            var r16 = new WyJS.Record(["op", "left", "right"], [r13, r14, r15]);
            var r17 = new WyJS.Integer(2);
            var r18 = new WyJS.Integer(2);
            var r19 = new WyJS.Record(["op", "left", "right"], [r16, r17, r18]);
            var r12 = r19;//assign %12 = %19  : {{int left,int op,int right} left,int op,int right}
            var r2 = r12;//assign %2 = %12  : X<int|{X left,int op,X right}>
            var r20 = new WyJS.Integer(1);
            var r21 = new WyJS.Integer(1);
            var r22 = new WyJS.Integer(2);
            var r23 = new WyJS.Record(["op", "left", "right"], [r20, r21, r22]);
            if(WyJS.equals(r0, r23, true)){
               control_flow_pc = 294;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 294:
            var r24 = new WyJS.Integer(1);
            var r25 = new WyJS.Integer(1);
            var r26 = new WyJS.Integer(2);
            var r27 = new WyJS.Record(["op", "left", "right"], [r24, r25, r26]);
            var r28 = new WyJS.Integer(2);
            var r29 = new WyJS.Integer(2);
            var r30 = new WyJS.Record(["op", "left", "right"], [r27, r28, r29]);
            if(WyJS.equals(r1, r30, true)){
               control_flow_pc = 295;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 295:
            var r31 = new WyJS.Integer(2);
            var r32 = new WyJS.Integer(3);
            var r33 = new WyJS.Integer(2);
            var r34 = new WyJS.Record(["op", "left", "right"], [r31, r32, r33]);
            var r35 = new WyJS.Integer(2);
            var r36 = new WyJS.Integer(2);
            var r37 = new WyJS.Record(["op", "left", "right"], [r34, r35, r36]);
            if(WyJS.equals(r2, r37, true)){
               control_flow_pc = 296;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 296:
      }
   }
}

