function run$Y9dFXc_$D$B3$j0VQ$B6$o0VR$35$d0VQ$J5$Z0$I$Z5$n0$S$w4$L0FN$k5$d0$O$w4$m$kB5$C0FN$F6$m0FP$V63y(r0, r1){//function(ConstrainedList_Valid_23:Matrix,ConstrainedList_Valid_23:Matrix) -> ConstrainedList_Valid_23:Matrix
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r9 = new WyJS.Integer(0);
            var r10 = new WyJS.Integer(0);
            var r11 = WyJS.ListGen(r9, r10, new WyJS.Type.List(new WyJS.Type.Int()));
            var r12 = r0.length();//lengthof %12 = %0 : int[][]
            var r13 = WyJS.ListGen(r11, r12, new WyJS.Type.List(new WyJS.Type.List(new WyJS.Type.Int())));
            var r8 = r13.clone(new WyJS.Type.List(new WyJS.Type.Int()));//assign %8 = %13  : int[][]
            var r2 = r8.clone(new WyJS.Type.List(new WyJS.Type.Int()));//assign %2 = %8  : int[][]
            var r15 = new WyJS.Integer(0);
            var r14 = r15;//assign %14 = %15  : int
            var r3 = r14;//assign %3 = %14  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case -2:
            var r17 = r0.length();//lengthof %17 = %0 : int[][]
            if(WyJS.gt(r3, r17, true)){
               control_flow_pc = 221;
               control_flow_repeat = true;
               continue outer;
            }
            var r19 = new WyJS.Integer(0);
            var r20 = r1.length();//lengthof %20 = %1 : int[][]
            var r21 = WyJS.ListGen(r19, r20, new WyJS.Type.List(new WyJS.Type.Int()));
            var r18 = r21.clone(new WyJS.Type.Int());//assign %18 = %21  : int[]
            var r4 = r18.clone(new WyJS.Type.Int());//assign %4 = %18  : int[]
            var r23 = new WyJS.Integer(0);
            var r22 = r23;//assign %22 = %23  : int
            var r5 = r22;//assign %5 = %22  : int
            control_flow_pc = -3;
            control_flow_repeat = true;
            break;
         case -3:
            var r25 = new WyJS.Integer(0);
            var r26 = r1.getValue(r25);
            var r27 = r26.length();//lengthof %27 = %26 : int[]
            if(WyJS.gt(r5, r27, true)){
               control_flow_pc = 223;
               control_flow_repeat = true;
               continue outer;
            }
            var r29 = new WyJS.Integer(0);
            var r28 = r29;//assign %28 = %29  : int
            var r6 = r28;//assign %6 = %28  : int
            var r31 = new WyJS.Integer(0);
            var r30 = r31;//assign %30 = %31  : int
            var r7 = r30;//assign %7 = %30  : int
            control_flow_pc = -4;
            control_flow_repeat = true;
            break;
         case -4:
            var r33 = r1.length();//lengthof %33 = %1 : int[][]
            if(WyJS.gt(r7, r33, true)){
               control_flow_pc = 225;
               control_flow_repeat = true;
               continue outer;
            }
            var r34 = r0.getValue(r3);
            var r35 = r34.getValue(r7);
            var r36 = r1.getValue(r7);
            var r37 = r36.getValue(r5);
            var r38 = r35.mul(r37);//mul %38 = %35, %37 : int
            var r39 = r6.add(r38);//add %39 = %6, %38 : int
            var r6 = r39;//assign %6 = %39  : int
            var r40 = new WyJS.Integer(1);
            var r41 = r7.add(r40);//add %41 = %7, %40 : int
            var r7 = r41;//assign %7 = %41  : int
            control_flow_pc = -4;
            control_flow_repeat = true;
            break;
            control_flow_pc = 225;
            control_flow_repeat = true;
            break;
         case 225:
            r4.setValue(r5, r6);
            var r42 = new WyJS.Integer(1);
            var r43 = r5.add(r42);//add %43 = %5, %42 : int
            var r5 = r43;//assign %5 = %43  : int
            control_flow_pc = -3;
            control_flow_repeat = true;
            break;
            control_flow_pc = 223;
            control_flow_repeat = true;
            break;
         case 223:
            r2.setValue(r3, r4);
            var r44 = new WyJS.Integer(1);
            var r45 = r3.add(r44);//add %45 = %3, %44 : int
            var r3 = r45;//assign %3 = %45  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case 221:
            return r2;//return %2 : int[][]
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
            var r4 = new WyJS.Integer(1);
            var r5 = new WyJS.Integer(2);
            var r6 = new WyJS.List([r4, r5], new WyJS.Type.List(new WyJS.Type.Int()));
            var r7 = new WyJS.Integer(3);
            var r8 = new WyJS.Integer(4);
            var r9 = new WyJS.List([r7, r8], new WyJS.Type.List(new WyJS.Type.Int()));
            var r10 = new WyJS.List([r6, r9], new WyJS.Type.List(new WyJS.Type.List(new WyJS.Type.Int())));
            var r3 = r10.clone(new WyJS.Type.List(new WyJS.Type.Int()));//assign %3 = %10  : int[][]
            var r0 = r3.clone(new WyJS.Type.List(new WyJS.Type.Int()));//assign %0 = %3  : int[][]
            var r12 = new WyJS.Integer(5);
            var r13 = new WyJS.Integer(6);
            var r14 = new WyJS.List([r12, r13], new WyJS.Type.List(new WyJS.Type.Int()));
            var r15 = new WyJS.Integer(7);
            var r16 = new WyJS.Integer(8);
            var r17 = new WyJS.List([r15, r16], new WyJS.Type.List(new WyJS.Type.Int()));
            var r18 = new WyJS.List([r14, r17], new WyJS.Type.List(new WyJS.Type.List(new WyJS.Type.Int())));
            var r11 = r18.clone(new WyJS.Type.List(new WyJS.Type.Int()));//assign %11 = %18  : int[][]
            var r1 = r11.clone(new WyJS.Type.List(new WyJS.Type.Int()));//assign %1 = %11  : int[][]
            var r20 = run$Y9dFXc_$D$B3$j0VQ$B6$o0VR$35$d0VQ$J5$Z0$I$Z5$n0$S$w4$L0FN$k5$d0$O$w4$m$kB5$C0FN$F6$m0FP$V63y(r0, r1);//invoke %20 = (%0, %1) ConstrainedList_Valid_23:run : function(ConstrainedList_Valid_23:Matrix,ConstrainedList_Valid_23:Matrix) -> ConstrainedList_Valid_23:Matrix
            var r19 = r20.clone(new WyJS.Type.List(new WyJS.Type.Int()));//assign %19 = %20  : int[][]
            var r2 = r19.clone(new WyJS.Type.List(new WyJS.Type.Int()));//assign %2 = %19  : int[][]
            var r21 = new WyJS.Integer(19);
            var r22 = new WyJS.Integer(22);
            var r23 = new WyJS.List([r21, r22], new WyJS.Type.List(new WyJS.Type.Int()));
            var r24 = new WyJS.Integer(43);
            var r25 = new WyJS.Integer(50);
            var r26 = new WyJS.List([r24, r25], new WyJS.Type.List(new WyJS.Type.Int()));
            var r27 = new WyJS.List([r23, r26], new WyJS.Type.List(new WyJS.Type.List(new WyJS.Type.Int())));
            if(WyJS.equals(r2, r27, true)){
               control_flow_pc = 226;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 226:
            return;
      }
   }
}

