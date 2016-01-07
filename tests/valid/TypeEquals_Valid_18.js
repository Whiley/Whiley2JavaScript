function f$a9bF5D537klcRWL1f$$K$Z6$k0FO$J3$l0FS$35$g0kR$w4$L0FN$k5$d0$O$w4$l$$D3$d0VQ$F6$mx(r0){//function(TypeEquals_Valid_18:intr[]) -> int[]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            if(WyJS.is(r0, new WyJS.Type.List(new WyJS.Type.Int()))){
               control_flow_pc = 563;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 564;
            control_flow_repeat = true;
            continue outer;//goto label564
         case 563:
            return r0;//return %0 : int[]
            control_flow_pc = 565;
            control_flow_repeat = true;
            continue outer;//goto label565
         case 564:
            var r1 = new WyJS.Integer(1);
            var r2 = new WyJS.Integer(2);
            var r3 = new WyJS.Integer(3);
            var r4 = new WyJS.List([r1, r2, r3], new WyJS.Type.List(new WyJS.Type.Int()));
            return r4;//return %4 : int[]
         case 565:
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
            var r8 = new WyJS.List([r1, r2, r3, r4, r5, r6, r7], new WyJS.Type.List(new WyJS.Type.Int()));
            var r0 = f$a9bF5D537klcRWL1f$$K$Z6$k0FO$J3$l0FS$35$g0kR$w4$L0FN$k5$d0$O$w4$l$$D3$d0VQ$F6$mx(r8);//invoke %0 = (%8) TypeEquals_Valid_18:f : function(TypeEquals_Valid_18:intr[]) -> int[]
            var r9 = new WyJS.Integer(1);
            var r10 = new WyJS.Integer(2);
            var r11 = new WyJS.Integer(3);
            var r12 = new WyJS.Integer(4);
            var r13 = new WyJS.Integer(5);
            var r14 = new WyJS.Integer(6);
            var r15 = new WyJS.Integer(7);
            var r16 = new WyJS.List([r9, r10, r11, r12, r13, r14, r15], new WyJS.Type.List(new WyJS.Type.Int()));
            if(WyJS.equals(r0, r16, true)){
               control_flow_pc = 566;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 566:
            var r18 = new WyJS.Integer(0);
            var r19 = new WyJS.Integer(0);
            var r20 = WyJS.ListGen(r18, r19, new WyJS.Type.List(new WyJS.Type.Int()));
            var r17 = f$a9bF5D537klcRWL1f$$K$Z6$k0FO$J3$l0FS$35$g0kR$w4$L0FN$k5$d0$O$w4$l$$D3$d0VQ$F6$mx(r20);//invoke %17 = (%20) TypeEquals_Valid_18:f : function(TypeEquals_Valid_18:intr[]) -> int[]
            var r21 = new WyJS.Integer(0);
            var r22 = new WyJS.Integer(0);
            var r23 = WyJS.ListGen(r21, r22, new WyJS.Type.List(new WyJS.Type.Int()));
            if(WyJS.equals(r17, r23, true)){
               control_flow_pc = 567;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 567:
            var r25 = new WyJS.Integer(1);
            var r26 = new WyJS.Integer(2);
            var r27 = new WyJS.Real(2.01);
            var r28 = new WyJS.List([r25, r26, r27], new WyJS.Type.List(new WyJS.Type.Union([new WyJS.Type.Int(), new WyJS.Type.Real()])));
            var r24 = f$a9bF5D537klcRWL1f$$K$Z6$k0FO$J3$l0FS$35$g0kR$w4$L0FN$k5$d0$O$w4$l$$D3$d0VQ$F6$mx(r28);//invoke %24 = (%28) TypeEquals_Valid_18:f : function(TypeEquals_Valid_18:intr[]) -> int[]
            var r29 = new WyJS.Integer(1);
            var r30 = new WyJS.Integer(2);
            var r31 = new WyJS.Integer(3);
            var r32 = new WyJS.List([r29, r30, r31], new WyJS.Type.List(new WyJS.Type.Int()));
            if(WyJS.equals(r24, r32, true)){
               control_flow_pc = 568;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 568:
            var r34 = new WyJS.Real(1.23);
            var r35 = new WyJS.Integer(2);
            var r36 = new WyJS.Real(2.01);
            var r37 = new WyJS.List([r34, r35, r36], new WyJS.Type.List(new WyJS.Type.Union([new WyJS.Type.Int(), new WyJS.Type.Real()])));
            var r33 = f$a9bF5D537klcRWL1f$$K$Z6$k0FO$J3$l0FS$35$g0kR$w4$L0FN$k5$d0$O$w4$l$$D3$d0VQ$F6$mx(r37);//invoke %33 = (%37) TypeEquals_Valid_18:f : function(TypeEquals_Valid_18:intr[]) -> int[]
            var r38 = new WyJS.Integer(1);
            var r39 = new WyJS.Integer(2);
            var r40 = new WyJS.Integer(3);
            var r41 = new WyJS.List([r38, r39, r40], new WyJS.Type.List(new WyJS.Type.Int()));
            if(WyJS.equals(r33, r41, true)){
               control_flow_pc = 569;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 569:
            return;
      }
   }
}

