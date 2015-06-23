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
            var r7 = {op: r4, left: r5, right: r6};//newrecord %7 = (%4, %5, %6) : {int left,int op,int right}
            var r3 = r7;//assign %3 = %7  : {int left,int op,int right}
            var r0 = r3;//assign %0 = %3  : X<int|{X left,int op,X right}>
            var r9 = new WyJS.Integer(2);
            var r10 = new WyJS.Integer(2);
            var r11 = {op: r0, left: r9, right: r10};//newrecord %11 = (%0, %9, %10) : {{int left,int op,int right} left,int op,int right}
            var r8 = r11;//assign %8 = %11  : {{int left,int op,int right} left,int op,int right}
            var r1 = r8;//assign %1 = %8  : X<int|{X left,int op,X right}>
            var r13 = new WyJS.Integer(2);
            var r14 = new WyJS.Integer(3);
            var r15 = new WyJS.Integer(2);
            var r16 = {op: r13, left: r14, right: r15};//newrecord %16 = (%13, %14, %15) : {int left,int op,int right}
            var r17 = new WyJS.Integer(2);
            var r18 = new WyJS.Integer(2);
            var r19 = {op: r16, left: r17, right: r18};//newrecord %19 = (%16, %17, %18) : {{int left,int op,int right} left,int op,int right}
            var r12 = r19;//assign %12 = %19  : {{int left,int op,int right} left,int op,int right}
            var r2 = r12;//assign %2 = %12  : X<int|{X left,int op,X right}>
            var r20 = new WyJS.Integer(1);
            var r21 = new WyJS.Integer(1);
            var r22 = new WyJS.Integer(2);
            var r23 = {op: r20, left: r21, right: r22};//newrecord %23 = (%20, %21, %22) : {int left,int op,int right}
            if(WyJS.equals(r0, r23, true)){
               control_flow_pc = 300;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 300:
            var r24 = new WyJS.Integer(1);
            var r25 = new WyJS.Integer(1);
            var r26 = new WyJS.Integer(2);
            var r27 = {op: r24, left: r25, right: r26};//newrecord %27 = (%24, %25, %26) : {int left,int op,int right}
            var r28 = new WyJS.Integer(2);
            var r29 = new WyJS.Integer(2);
            var r30 = {op: r27, left: r28, right: r29};//newrecord %30 = (%27, %28, %29) : {{int left,int op,int right} left,int op,int right}
            if(WyJS.equals(r1, r30, true)){
               control_flow_pc = 301;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 301:
            var r31 = new WyJS.Integer(2);
            var r32 = new WyJS.Integer(3);
            var r33 = new WyJS.Integer(2);
            var r34 = {op: r31, left: r32, right: r33};//newrecord %34 = (%31, %32, %33) : {int left,int op,int right}
            var r35 = new WyJS.Integer(2);
            var r36 = new WyJS.Integer(2);
            var r37 = {op: r34, left: r35, right: r36};//newrecord %37 = (%34, %35, %36) : {{int left,int op,int right} left,int op,int right}
            if(WyJS.equals(r2, r37, true)){
               control_flow_pc = 302;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 302:
      }
   }
}

