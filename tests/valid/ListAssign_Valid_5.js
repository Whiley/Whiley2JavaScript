function move$a9fFa8sNFVk4sNJP8c1$B0FP$B6$o0FF$B6$n0FP$R5$i0kM$N4$W0$Q$Z5$Z0kM$J20VQ$Z5$i0$SE(r0, r1, r2){//function(int,int,ListAssign_Valid_5:nint[][]) -> ListAssign_Valid_5:nint[][]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r5 = r2.getValue(r0);
            var r6 = new WyJS.Integer(1);
            var r7 = r0.add(r6);//add %7 = %0, %6 : int
            var r8 = r5.getValue(r7);
            var r4 = r8;//assign %4 = %8  : null|int
            var r3 = r4;//assign %3 = %4  : null|int
            var r9 = null;
            var r10 = new WyJS.Integer(1);
            var r11 = r0.add(r10);//add %11 = %0, %10 : int
            var r12 = null;
            r2.getValue(r0).setValue(r11, r12);
            var r13 = new WyJS.Integer(1);
            var r14 = r1.add(r13);//add %14 = %1, %13 : int
            r2.getValue(r1).setValue(r14, r3);
            return r2;//return %2 : null|int[][]
            return;
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
            var r2 = new WyJS.Integer(1);
            var r3 = new WyJS.Integer(2);
            var r4 = new WyJS.Integer(3);
            var r5 = new WyJS.List([r2, r3, r4], new WyJS.Type.List(new WyJS.Type.Int()));
            var r6 = new WyJS.Integer(4);
            var r7 = new WyJS.Integer(5);
            var r8 = new WyJS.Integer(6);
            var r9 = new WyJS.List([r6, r7, r8], new WyJS.Type.List(new WyJS.Type.Int()));
            var r10 = new WyJS.Integer(7);
            var r11 = new WyJS.Integer(8);
            var r12 = new WyJS.Integer(9);
            var r13 = new WyJS.List([r10, r11, r12], new WyJS.Type.List(new WyJS.Type.Int()));
            var r14 = new WyJS.List([r5, r9, r13], new WyJS.Type.List(new WyJS.Type.List(new WyJS.Type.Int())));
            var r1 = r14.clone(new WyJS.Type.List(new WyJS.Type.Int()));//assign %1 = %14  : int[][]
            var r0 = r1.clone(new WyJS.Type.List(new WyJS.Type.Union([new WyJS.Type.Null(), new WyJS.Type.Int()])));//assign %0 = %1  : null|int[][]
            var r16 = new WyJS.Integer(0);
            var r17 = new WyJS.Integer(1);
            var r15 = move$a9fFa8sNFVk4sNJP8c1$B0FP$B6$o0FF$B6$n0FP$R5$i0kM$N4$W0$Q$Z5$Z0kM$J20VQ$Z5$i0$SE(r16, r17, r0);//invoke %15 = (%16, %17, %0) ListAssign_Valid_5:move : function(int,int,ListAssign_Valid_5:nint[][]) -> ListAssign_Valid_5:nint[][]
            var r0 = r15.clone(new WyJS.Type.List(new WyJS.Type.Union([new WyJS.Type.Null(), new WyJS.Type.Int()])));//assign %0 = %15  : null|int[][]
            var r18 = new WyJS.Integer(1);
            var r19 = null;
            var r20 = new WyJS.Integer(3);
            var r21 = new WyJS.List([r18, r19, r20], new WyJS.Type.List(new WyJS.Type.Union([new WyJS.Type.Null(), new WyJS.Type.Int()])));
            var r22 = new WyJS.Integer(4);
            var r23 = new WyJS.Integer(5);
            var r24 = new WyJS.Integer(2);
            var r25 = new WyJS.List([r22, r23, r24], new WyJS.Type.List(new WyJS.Type.Int()));
            var r26 = new WyJS.Integer(7);
            var r27 = new WyJS.Integer(8);
            var r28 = new WyJS.Integer(9);
            var r29 = new WyJS.List([r26, r27, r28], new WyJS.Type.List(new WyJS.Type.Int()));
            var r30 = new WyJS.List([r21, r25, r29], new WyJS.Type.List(new WyJS.Type.List(new WyJS.Type.Union([new WyJS.Type.Null(), new WyJS.Type.Int()]))));
            if(WyJS.equals(r0, r30, true)){
               control_flow_pc = 6;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 6:
            return;
      }
   }
}

