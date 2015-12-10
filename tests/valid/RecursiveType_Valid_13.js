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
            var r7 = new WyJS.Record(["left", "op", "right"], [r4, r5, r6], new WyJS.Type.Record(["left", "op", "right"], [new WyJS.Type.Int(), new WyJS.Type.Int(), new WyJS.Type.Int()]));
            var r3 = r7.clone();//assign %3 = %7  : {int left,int op,int right}
            var r0 = r3;//assign %0 = %3  : X<int|{X left,int op,X right}>
            var r9 = new WyJS.Integer(2);
            var r10 = new WyJS.Integer(2);
            var r11 = new WyJS.Record(["left", "op", "right"], [r0, r9, r10], new WyJS.Type.Record(["left", "op", "right"], [new WyJS.Type.Record(["left", "op", "right"], [new WyJS.Type.Int(), new WyJS.Type.Int(), new WyJS.Type.Int()]), new WyJS.Type.Int(), new WyJS.Type.Int()]));
            var r8 = r11.clone();//assign %8 = %11  : {{int left,int op,int right} left,int op,int right}
            var r1 = r8;//assign %1 = %8  : X<int|{X left,int op,X right}>
            var r13 = new WyJS.Integer(2);
            var r14 = new WyJS.Integer(3);
            var r15 = new WyJS.Integer(2);
            var r16 = new WyJS.Record(["left", "op", "right"], [r13, r14, r15], new WyJS.Type.Record(["left", "op", "right"], [new WyJS.Type.Int(), new WyJS.Type.Int(), new WyJS.Type.Int()]));
            var r17 = new WyJS.Integer(2);
            var r18 = new WyJS.Integer(2);
            var r19 = new WyJS.Record(["left", "op", "right"], [r16, r17, r18], new WyJS.Type.Record(["left", "op", "right"], [new WyJS.Type.Record(["left", "op", "right"], [new WyJS.Type.Int(), new WyJS.Type.Int(), new WyJS.Type.Int()]), new WyJS.Type.Int(), new WyJS.Type.Int()]));
            var r12 = r19.clone();//assign %12 = %19  : {{int left,int op,int right} left,int op,int right}
            var r2 = r12;//assign %2 = %12  : X<int|{X left,int op,X right}>
            var r20 = new WyJS.Integer(1);
            var r21 = new WyJS.Integer(1);
            var r22 = new WyJS.Integer(2);
            var r23 = new WyJS.Record(["left", "op", "right"], [r20, r21, r22], new WyJS.Type.Record(["left", "op", "right"], [new WyJS.Type.Int(), new WyJS.Type.Int(), new WyJS.Type.Int()]));
            if(WyJS.equals(r0, r23, true)){
               control_flow_pc = 245;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 245:
            var r24 = new WyJS.Integer(1);
            var r25 = new WyJS.Integer(1);
            var r26 = new WyJS.Integer(2);
            var r27 = new WyJS.Record(["left", "op", "right"], [r24, r25, r26], new WyJS.Type.Record(["left", "op", "right"], [new WyJS.Type.Int(), new WyJS.Type.Int(), new WyJS.Type.Int()]));
            var r28 = new WyJS.Integer(2);
            var r29 = new WyJS.Integer(2);
            var r30 = new WyJS.Record(["left", "op", "right"], [r27, r28, r29], new WyJS.Type.Record(["left", "op", "right"], [new WyJS.Type.Record(["left", "op", "right"], [new WyJS.Type.Int(), new WyJS.Type.Int(), new WyJS.Type.Int()]), new WyJS.Type.Int(), new WyJS.Type.Int()]));
            if(WyJS.equals(r1, r30, true)){
               control_flow_pc = 246;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 246:
            var r31 = new WyJS.Integer(2);
            var r32 = new WyJS.Integer(3);
            var r33 = new WyJS.Integer(2);
            var r34 = new WyJS.Record(["left", "op", "right"], [r31, r32, r33], new WyJS.Type.Record(["left", "op", "right"], [new WyJS.Type.Int(), new WyJS.Type.Int(), new WyJS.Type.Int()]));
            var r35 = new WyJS.Integer(2);
            var r36 = new WyJS.Integer(2);
            var r37 = new WyJS.Record(["left", "op", "right"], [r34, r35, r36], new WyJS.Type.Record(["left", "op", "right"], [new WyJS.Type.Record(["left", "op", "right"], [new WyJS.Type.Int(), new WyJS.Type.Int(), new WyJS.Type.Int()]), new WyJS.Type.Int(), new WyJS.Type.Int()]));
            if(WyJS.equals(r2, r37, true)){
               control_flow_pc = 247;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 247:
            return;
      }
   }
}

