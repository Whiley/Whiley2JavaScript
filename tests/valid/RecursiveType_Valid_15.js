function test(){//method() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r5 = new WyJS.Integer(1);
            var r6 = new WyJS.Integer(1);
            var r7 = new WyJS.Integer(2);
            var r8 = {op: r5, left: r6, right: r7};//newrecord %8 = (%5, %6, %7) : {int left,int op,int right}
            var r4 = r8;//assign %4 = %8  : {int left,int op,int right}
            var r0 = r4;//assign %0 = %4  : X<int|{X left,int op,X right}>
            var r9 = r0;//assign %9 = %0  : {int left,int op,int right}
            var r1 = r9;//assign %1 = %9  : X<int|{X left,int op,X right}>
            var r10 = r0;//assign %10 = %0  : {int left,int op,int right}
            var r2 = r10;//assign %2 = %10  : X<int|{X left,int op,X right}>
            var r12 = new WyJS.Integer(2);
            var r13 = new WyJS.Integer(2);
            var r14 = {op: r0, left: r12, right: r13};//newrecord %14 = (%0, %12, %13) : {{int left,int op,int right} left,int op,int right}
            var r11 = r14;//assign %11 = %14  : {{int left,int op,int right} left,int op,int right}
            var r3 = r11;//assign %3 = %11  : X<int|{X left,int op,X right}>
            var r15 = new WyJS.Integer(1);
            var r16 = new WyJS.Integer(1);
            var r17 = new WyJS.Integer(2);
            var r18 = {op: r15, left: r16, right: r17};//newrecord %18 = (%15, %16, %17) : {int left,int op,int right}
            if(WyJS.equals(r2, r18, true)){
               control_flow_pc = 318;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 318:
            var r19 = new WyJS.Integer(1);
            var r20 = new WyJS.Integer(1);
            var r21 = new WyJS.Integer(2);
            var r22 = {op: r19, left: r20, right: r21};//newrecord %22 = (%19, %20, %21) : {int left,int op,int right}
            var r23 = new WyJS.Integer(2);
            var r24 = new WyJS.Integer(2);
            var r25 = {op: r22, left: r23, right: r24};//newrecord %25 = (%22, %23, %24) : {{int left,int op,int right} left,int op,int right}
            if(WyJS.equals(r3, r25, true)){
               control_flow_pc = 319;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 319:
      }
   }
}

