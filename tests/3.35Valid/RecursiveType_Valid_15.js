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
            var r8 = new WyJS.Record(["op", "left", "right"], [r5, r6, r7], new WyJS.Type.Record(["op", "left", "right"], '{int left,int op,int right}'));
            r4 = r8;//assign %4 = %8  : {int left,int op,int right}
            r0 = r4;//assign %0 = %4  : X<int|{X left,int op,X right}>
            r9 = r0;//assign %9 = %0  : {int left,int op,int right}
            r1 = r9;//assign %1 = %9  : X<int|{X left,int op,X right}>
            r10 = r0;//assign %10 = %0  : {int left,int op,int right}
            r2 = r10;//assign %2 = %10  : X<int|{X left,int op,X right}>
            var r12 = new WyJS.Integer(2);
            var r13 = new WyJS.Integer(2);
            var r14 = new WyJS.Record(["op", "left", "right"], [r0, r12, r13], new WyJS.Type.Record(["op", "left", "right"], '{{int left,int op,int right} left,int op,int right}'));
            r11 = r14;//assign %11 = %14  : {{int left,int op,int right} left,int op,int right}
            r3 = r11;//assign %3 = %11  : X<int|{X left,int op,X right}>
            var r15 = new WyJS.Integer(1);
            var r16 = new WyJS.Integer(1);
            var r17 = new WyJS.Integer(2);
            var r18 = new WyJS.Record(["op", "left", "right"], [r15, r16, r17], new WyJS.Type.Record(["op", "left", "right"], '{int left,int op,int right}'));
            if(WyJS.equals(r2, r18, true)){
               control_flow_pc = 303;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 303:
            var r19 = new WyJS.Integer(1);
            var r20 = new WyJS.Integer(1);
            var r21 = new WyJS.Integer(2);
            var r22 = new WyJS.Record(["op", "left", "right"], [r19, r20, r21], new WyJS.Type.Record(["op", "left", "right"], '{int left,int op,int right}'));
            var r23 = new WyJS.Integer(2);
            var r24 = new WyJS.Integer(2);
            var r25 = new WyJS.Record(["op", "left", "right"], [r22, r23, r24], new WyJS.Type.Record(["op", "left", "right"], '{{int left,int op,int right} left,int op,int right}'));
            if(WyJS.equals(r3, r25, true)){
               control_flow_pc = 304;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 304:
      }
   }
}

