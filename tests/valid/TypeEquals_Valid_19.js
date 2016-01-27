function f$b9bF5D537klcR0D5aL1f$$K$Z6$k0FO$J3$l0FS$35$g0kR$w4$L0FN$k5$d0$O$w4$l$FD3$d0VQ$F6$mC(r0){//function(TypeEquals_Valid_19:intr[][]) -> int[]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            if(WyJS.is(r0, new WyJS.Type.Array(new WyJS.Type.Array(new WyJS.Type.Int())))){
               control_flow_pc = 558;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 559;
            control_flow_repeat = true;
            continue outer;//goto label559
         case 558:
            var r1 = r0.length();//lengthof %1 = %0 : int[][]
            var r2 = new WyJS.Integer(0);
            if(WyJS.lt(r1, r2, true)){
               control_flow_pc = 559;
               control_flow_repeat = true;
               continue outer;
            }
            var r3 = new WyJS.Integer(0);
            var r4 = r0.getValue(r3);
            return r4;//return %4 : int[]
            control_flow_pc = 560;
            control_flow_repeat = true;
            continue outer;//goto label560
         case 559:
            var r5 = new WyJS.Integer(1);
            var r6 = new WyJS.Integer(2);
            var r7 = new WyJS.Integer(3);
            var r8 = new WyJS.Array([r5, r6, r7], new WyJS.Type.Array(new WyJS.Type.Int()));
            return r8;//return %8 : int[]
         case 560:
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
            var r1 = new WyJS.Integer(1);
            var r2 = new WyJS.Integer(2);
            var r3 = new WyJS.Integer(3);
            var r4 = new WyJS.Integer(4);
            var r5 = new WyJS.Integer(5);
            var r6 = new WyJS.Integer(6);
            var r7 = new WyJS.Integer(7);
            var r8 = new WyJS.Array([r1, r2, r3, r4, r5, r6, r7], new WyJS.Type.Array(new WyJS.Type.Int()));
            var r9 = new WyJS.Array([r8], new WyJS.Type.Array(new WyJS.Type.Array(new WyJS.Type.Int())));
            var r0 = f$b9bF5D537klcR0D5aL1f$$K$Z6$k0FO$J3$l0FS$35$g0kR$w4$L0FN$k5$d0$O$w4$l$FD3$d0VQ$F6$mC(r9);//invoke %0 = (%9) TypeEquals_Valid_19:f : function(TypeEquals_Valid_19:intr[][]) -> int[]
            var r10 = new WyJS.Integer(1);
            var r11 = new WyJS.Integer(2);
            var r12 = new WyJS.Integer(3);
            var r13 = new WyJS.Integer(4);
            var r14 = new WyJS.Integer(5);
            var r15 = new WyJS.Integer(6);
            var r16 = new WyJS.Integer(7);
            var r17 = new WyJS.Array([r10, r11, r12, r13, r14, r15, r16], new WyJS.Type.Array(new WyJS.Type.Int()));
            if(WyJS.equals(r0, r17, true)){
               control_flow_pc = 561;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 561:
            var r19 = new WyJS.Integer(0);
            var r20 = new WyJS.Integer(0);
            var r21 = WyJS.ArrayGen(r19, r20, new WyJS.Type.Array(new WyJS.Type.Int()));
            var r22 = new WyJS.Array([r21], new WyJS.Type.Array(new WyJS.Type.Array(new WyJS.Type.Int())));
            var r18 = f$b9bF5D537klcR0D5aL1f$$K$Z6$k0FO$J3$l0FS$35$g0kR$w4$L0FN$k5$d0$O$w4$l$FD3$d0VQ$F6$mC(r22);//invoke %18 = (%22) TypeEquals_Valid_19:f : function(TypeEquals_Valid_19:intr[][]) -> int[]
            var r23 = new WyJS.Integer(0);
            var r24 = new WyJS.Integer(0);
            var r25 = WyJS.ArrayGen(r23, r24, new WyJS.Type.Array(new WyJS.Type.Int()));
            if(WyJS.equals(r18, r25, true)){
               control_flow_pc = 562;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 562:
            var r27 = new WyJS.Integer(1);
            var r28 = new WyJS.Integer(2);
            var r29 = new WyJS.Real(2.01);
            var r30 = new WyJS.Array([r27, r28, r29], new WyJS.Type.Array(new WyJS.Type.Union([new WyJS.Type.Int(), new WyJS.Type.Real()])));
            var r31 = new WyJS.Array([r30], new WyJS.Type.Array(new WyJS.Type.Array(new WyJS.Type.Union([new WyJS.Type.Int(), new WyJS.Type.Real()]))));
            var r26 = f$b9bF5D537klcR0D5aL1f$$K$Z6$k0FO$J3$l0FS$35$g0kR$w4$L0FN$k5$d0$O$w4$l$FD3$d0VQ$F6$mC(r31);//invoke %26 = (%31) TypeEquals_Valid_19:f : function(TypeEquals_Valid_19:intr[][]) -> int[]
            var r32 = new WyJS.Integer(1);
            var r33 = new WyJS.Integer(2);
            var r34 = new WyJS.Integer(3);
            var r35 = new WyJS.Array([r32, r33, r34], new WyJS.Type.Array(new WyJS.Type.Int()));
            if(WyJS.equals(r26, r35, true)){
               control_flow_pc = 563;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 563:
            var r37 = new WyJS.Real(1.23);
            var r38 = new WyJS.Integer(2);
            var r39 = new WyJS.Real(2.01);
            var r40 = new WyJS.Array([r37, r38, r39], new WyJS.Type.Array(new WyJS.Type.Union([new WyJS.Type.Int(), new WyJS.Type.Real()])));
            var r41 = new WyJS.Array([r40], new WyJS.Type.Array(new WyJS.Type.Array(new WyJS.Type.Union([new WyJS.Type.Int(), new WyJS.Type.Real()]))));
            var r36 = f$b9bF5D537klcR0D5aL1f$$K$Z6$k0FO$J3$l0FS$35$g0kR$w4$L0FN$k5$d0$O$w4$l$FD3$d0VQ$F6$mC(r41);//invoke %36 = (%41) TypeEquals_Valid_19:f : function(TypeEquals_Valid_19:intr[][]) -> int[]
            var r42 = new WyJS.Integer(1);
            var r43 = new WyJS.Integer(2);
            var r44 = new WyJS.Integer(3);
            var r45 = new WyJS.Array([r42, r43, r44], new WyJS.Type.Array(new WyJS.Type.Int()));
            if(WyJS.equals(r36, r45, true)){
               control_flow_pc = 564;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 564:
            return;
      }
   }
}

