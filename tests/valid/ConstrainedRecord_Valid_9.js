function Matrix$b9fFaWP8Z2$20kQ$s5$n0$S$76$W0FP$s5$_0$O$74$_0kN$w5$m0$O$w4$L0FN$k5$d0$O$w4$tN$o3$W0$S$76$d0$TFc_FD$B3$j0VQ$B6$o0VR$35$d0VQ$J5$Z0VJ$J5$Y0kQ$76$Z0kM$N4$W0$Q$Z5$Z0kM$Zn$VQ$35$ollcklkRW2(r0, r1, r2){//function(ConstrainedRecord_Valid_9:nat,ConstrainedRecord_Valid_9:nat,int[][]) -> ConstrainedRecord_Valid_9:Matrix
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r3 = new WyJS.Record(["data", "height", "width"], [r2, r1, r0], new WyJS.Type.Record(["data", "height", "width"], [new WyJS.Type.List(new WyJS.Type.List(new WyJS.Type.Int())), new WyJS.Type.Int(), new WyJS.Type.Int()]));
            return r3;//return %3 : {int[][] data,int height,int width}
            return;
      }
   }
}

function run$Y9dFXc_FD$B3$j0VQ$B6$o0VR$35$d0VQ$J5$Z0VJ$J5$Y0kQ$76$Z0kM$N4$W0$Q$Z5$Z0kM$ZY0FI$35$o0VR$Z5$s0WE(r0, r1){//function(ConstrainedRecord_Valid_9:Matrix,ConstrainedRecord_Valid_9:Matrix) -> ConstrainedRecord_Valid_9:Matrix
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
            var r12 = r0.fieldLoad("height");//fieldload %12 = %0 height : {int[][] data,int height,int width}
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
            var r19 = r0.fieldLoad("height");//fieldload %19 = %0 height : {int[][] data,int height,int width}
            if(WyJS.gt(r3, r19, true)){
               control_flow_pc = 1474;
               control_flow_repeat = true;
               continue outer;
            }
            var r21 = new WyJS.Integer(0);
            var r22 = r1.fieldLoad("width");//fieldload %22 = %1 width : {int[][] data,int height,int width}
            var r23 = WyJS.ListGen(r21, r22, new WyJS.Type.List(new WyJS.Type.Int()));
            var r20 = r23.clone(new WyJS.Type.Int());//assign %20 = %23  : int[]
            var r4 = r20.clone(new WyJS.Type.Int());//assign %4 = %20  : int[]
            var r25 = new WyJS.Integer(0);
            var r24 = r25;//assign %24 = %25  : int
            var r5 = r24;//assign %5 = %24  : int
            control_flow_pc = -3;
            control_flow_repeat = true;
            break;
         case -3:
            var r29 = r1.fieldLoad("width");//fieldload %29 = %1 width : {int[][] data,int height,int width}
            if(WyJS.gt(r5, r29, true)){
               control_flow_pc = 1477;
               control_flow_repeat = true;
               continue outer;
            }
            var r31 = new WyJS.Integer(0);
            var r30 = r31;//assign %30 = %31  : int
            var r6 = r30;//assign %6 = %30  : int
            var r33 = new WyJS.Integer(0);
            var r32 = r33;//assign %32 = %33  : int
            var r7 = r32;//assign %7 = %32  : int
            control_flow_pc = -4;
            control_flow_repeat = true;
            break;
         case -4:
            var r35 = r0.fieldLoad("width");//fieldload %35 = %0 width : {int[][] data,int height,int width}
            if(WyJS.gt(r7, r35, true)){
               control_flow_pc = 1479;
               control_flow_repeat = true;
               continue outer;
            }
            var r36 = r0.fieldLoad("data");//fieldload %36 = %0 data : {int[][] data,int height,int width}
            var r37 = r36.getValue(r3);
            var r38 = r37.getValue(r7);
            var r39 = r1.fieldLoad("data");//fieldload %39 = %1 data : {int[][] data,int height,int width}
            var r40 = r39.getValue(r7);
            var r41 = r40.getValue(r5);
            var r42 = r38.mul(r41);//mul %42 = %38, %41 : int
            var r43 = r6.add(r42);//add %43 = %6, %42 : int
            var r6 = r43;//assign %6 = %43  : int
            var r44 = new WyJS.Integer(1);
            var r45 = r7.add(r44);//add %45 = %7, %44 : int
            var r7 = r45;//assign %7 = %45  : int
            control_flow_pc = -4;
            control_flow_repeat = true;
            break;
            control_flow_pc = 1479;
            control_flow_repeat = true;
            break;
         case 1479:
            r4.setValue(r5, r6);
            var r46 = new WyJS.Integer(1);
            var r47 = r5.add(r46);//add %47 = %5, %46 : int
            var r5 = r47;//assign %5 = %47  : int
            control_flow_pc = -3;
            control_flow_repeat = true;
            break;
            control_flow_pc = 1477;
            control_flow_repeat = true;
            break;
         case 1477:
            r2.setValue(r3, r4);
            var r48 = new WyJS.Integer(1);
            var r49 = r3.add(r48);//add %49 = %3, %48 : int
            var r3 = r49;//assign %3 = %49  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case 1474:
            var r51 = r1.fieldLoad("width");//fieldload %51 = %1 width : {int[][] data,int height,int width}
            var r52 = r0.fieldLoad("height");//fieldload %52 = %0 height : {int[][] data,int height,int width}
            var r50 = Matrix$b9fFaWP8Z2$20kQ$s5$n0$S$76$W0FP$s5$_0$O$74$_0kN$w5$m0$O$w4$L0FN$k5$d0$O$w4$tN$o3$W0$S$76$d0$TFc_FD$B3$j0VQ$B6$o0VR$35$d0VQ$J5$Z0VJ$J5$Y0kQ$76$Z0kM$N4$W0$Q$Z5$Z0kM$Zn$VQ$35$ollcklkRW2(r51, r52, r2);//invoke %50 = (%51, %52, %2) ConstrainedRecord_Valid_9:Matrix : function(ConstrainedRecord_Valid_9:nat,ConstrainedRecord_Valid_9:nat,int[][]) -> ConstrainedRecord_Valid_9:Matrix
            return r50;//return %50 : {int[][] data,int height,int width}
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
            var r5 = new WyJS.Integer(2);
            var r6 = new WyJS.Integer(2);
            var r7 = new WyJS.Integer(1);
            var r8 = new WyJS.Integer(0);
            var r9 = new WyJS.List([r7, r8], new WyJS.Type.List(new WyJS.Type.Int()));
            var r10 = new WyJS.Integer(3);
            var r11 = r10.neg();//neg %11 = %10 : int
            var r12 = new WyJS.Integer(2);
            var r13 = new WyJS.List([r11, r12], new WyJS.Type.List(new WyJS.Type.Int()));
            var r14 = new WyJS.List([r9, r13], new WyJS.Type.List(new WyJS.Type.List(new WyJS.Type.Int())));
            var r4 = Matrix$b9fFaWP8Z2$20kQ$s5$n0$S$76$W0FP$s5$_0$O$74$_0kN$w5$m0$O$w4$L0FN$k5$d0$O$w4$tN$o3$W0$S$76$d0$TFc_FD$B3$j0VQ$B6$o0VR$35$d0VQ$J5$Z0VJ$J5$Y0kQ$76$Z0kM$N4$W0$Q$Z5$Z0kM$Zn$VQ$35$ollcklkRW2(r5, r6, r14);//invoke %4 = (%5, %6, %14) ConstrainedRecord_Valid_9:Matrix : function(ConstrainedRecord_Valid_9:nat,ConstrainedRecord_Valid_9:nat,int[][]) -> ConstrainedRecord_Valid_9:Matrix
            var r3 = r4.clone();//assign %3 = %4  : {int[][] data,int height,int width}
            var r0 = r3.clone();//assign %0 = %3  : {int[][] data,int height,int width}
            var r17 = new WyJS.Integer(2);
            var r18 = new WyJS.Integer(2);
            var r19 = new WyJS.Integer(1);
            var r20 = r19.neg();//neg %20 = %19 : int
            var r21 = new WyJS.Integer(4);
            var r22 = new WyJS.List([r20, r21], new WyJS.Type.List(new WyJS.Type.Int()));
            var r23 = new WyJS.Integer(3);
            var r24 = new WyJS.Integer(5);
            var r25 = new WyJS.List([r23, r24], new WyJS.Type.List(new WyJS.Type.Int()));
            var r26 = new WyJS.List([r22, r25], new WyJS.Type.List(new WyJS.Type.List(new WyJS.Type.Int())));
            var r16 = Matrix$b9fFaWP8Z2$20kQ$s5$n0$S$76$W0FP$s5$_0$O$74$_0kN$w5$m0$O$w4$L0FN$k5$d0$O$w4$tN$o3$W0$S$76$d0$TFc_FD$B3$j0VQ$B6$o0VR$35$d0VQ$J5$Z0VJ$J5$Y0kQ$76$Z0kM$N4$W0$Q$Z5$Z0kM$Zn$VQ$35$ollcklkRW2(r17, r18, r26);//invoke %16 = (%17, %18, %26) ConstrainedRecord_Valid_9:Matrix : function(ConstrainedRecord_Valid_9:nat,ConstrainedRecord_Valid_9:nat,int[][]) -> ConstrainedRecord_Valid_9:Matrix
            var r15 = r16.clone();//assign %15 = %16  : {int[][] data,int height,int width}
            var r1 = r15.clone();//assign %1 = %15  : {int[][] data,int height,int width}
            var r28 = run$Y9dFXc_FD$B3$j0VQ$B6$o0VR$35$d0VQ$J5$Z0VJ$J5$Y0kQ$76$Z0kM$N4$W0$Q$Z5$Z0kM$ZY0FI$35$o0VR$Z5$s0WE(r0, r1);//invoke %28 = (%0, %1) ConstrainedRecord_Valid_9:run : function(ConstrainedRecord_Valid_9:Matrix,ConstrainedRecord_Valid_9:Matrix) -> ConstrainedRecord_Valid_9:Matrix
            var r27 = r28.clone();//assign %27 = %28  : {int[][] data,int height,int width}
            var r2 = r27.clone();//assign %2 = %27  : {int[][] data,int height,int width}
            var r29 = new WyJS.Integer(1);
            var r30 = r29.neg();//neg %30 = %29 : int
            var r31 = new WyJS.Integer(4);
            var r32 = new WyJS.List([r30, r31], new WyJS.Type.List(new WyJS.Type.Int()));
            var r33 = new WyJS.Integer(9);
            var r34 = new WyJS.Integer(2);
            var r35 = r34.neg();//neg %35 = %34 : int
            var r36 = new WyJS.List([r33, r35], new WyJS.Type.List(new WyJS.Type.Int()));
            var r37 = new WyJS.List([r32, r36], new WyJS.Type.List(new WyJS.Type.List(new WyJS.Type.Int())));
            var r38 = new WyJS.Integer(2);
            var r39 = new WyJS.Integer(2);
            var r40 = new WyJS.Record(["data", "height", "width"], [r37, r38, r39], new WyJS.Type.Record(["data", "height", "width"], [new WyJS.Type.List(new WyJS.Type.List(new WyJS.Type.Int())), new WyJS.Type.Int(), new WyJS.Type.Int()]));
            if(WyJS.equals(r2, r40, true)){
               control_flow_pc = 1480;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1480:
            var r42 = new WyJS.Integer(3);
            var r43 = new WyJS.Integer(2);
            var r44 = new WyJS.Integer(1);
            var r45 = new WyJS.Integer(2);
            var r46 = new WyJS.Integer(3);
            var r47 = new WyJS.List([r44, r45, r46], new WyJS.Type.List(new WyJS.Type.Int()));
            var r48 = new WyJS.Integer(4);
            var r49 = new WyJS.Integer(5);
            var r50 = new WyJS.Integer(6);
            var r51 = new WyJS.List([r48, r49, r50], new WyJS.Type.List(new WyJS.Type.Int()));
            var r52 = new WyJS.List([r47, r51], new WyJS.Type.List(new WyJS.Type.List(new WyJS.Type.Int())));
            var r41 = Matrix$b9fFaWP8Z2$20kQ$s5$n0$S$76$W0FP$s5$_0$O$74$_0kN$w5$m0$O$w4$L0FN$k5$d0$O$w4$tN$o3$W0$S$76$d0$TFc_FD$B3$j0VQ$B6$o0VR$35$d0VQ$J5$Z0VJ$J5$Y0kQ$76$Z0kM$N4$W0$Q$Z5$Z0kM$Zn$VQ$35$ollcklkRW2(r42, r43, r52);//invoke %41 = (%42, %43, %52) ConstrainedRecord_Valid_9:Matrix : function(ConstrainedRecord_Valid_9:nat,ConstrainedRecord_Valid_9:nat,int[][]) -> ConstrainedRecord_Valid_9:Matrix
            var r0 = r41.clone();//assign %0 = %41  : {int[][] data,int height,int width}
            var r54 = new WyJS.Integer(2);
            var r55 = new WyJS.Integer(3);
            var r56 = new WyJS.Integer(1);
            var r57 = new WyJS.Integer(2);
            var r58 = new WyJS.List([r56, r57], new WyJS.Type.List(new WyJS.Type.Int()));
            var r59 = new WyJS.Integer(3);
            var r60 = new WyJS.Integer(4);
            var r61 = new WyJS.List([r59, r60], new WyJS.Type.List(new WyJS.Type.Int()));
            var r62 = new WyJS.Integer(5);
            var r63 = new WyJS.Integer(6);
            var r64 = new WyJS.List([r62, r63], new WyJS.Type.List(new WyJS.Type.Int()));
            var r65 = new WyJS.List([r58, r61, r64], new WyJS.Type.List(new WyJS.Type.List(new WyJS.Type.Int())));
            var r53 = Matrix$b9fFaWP8Z2$20kQ$s5$n0$S$76$W0FP$s5$_0$O$74$_0kN$w5$m0$O$w4$L0FN$k5$d0$O$w4$tN$o3$W0$S$76$d0$TFc_FD$B3$j0VQ$B6$o0VR$35$d0VQ$J5$Z0VJ$J5$Y0kQ$76$Z0kM$N4$W0$Q$Z5$Z0kM$Zn$VQ$35$ollcklkRW2(r54, r55, r65);//invoke %53 = (%54, %55, %65) ConstrainedRecord_Valid_9:Matrix : function(ConstrainedRecord_Valid_9:nat,ConstrainedRecord_Valid_9:nat,int[][]) -> ConstrainedRecord_Valid_9:Matrix
            var r1 = r53.clone();//assign %1 = %53  : {int[][] data,int height,int width}
            var r66 = run$Y9dFXc_FD$B3$j0VQ$B6$o0VR$35$d0VQ$J5$Z0VJ$J5$Y0kQ$76$Z0kM$N4$W0$Q$Z5$Z0kM$ZY0FI$35$o0VR$Z5$s0WE(r0, r1);//invoke %66 = (%0, %1) ConstrainedRecord_Valid_9:run : function(ConstrainedRecord_Valid_9:Matrix,ConstrainedRecord_Valid_9:Matrix) -> ConstrainedRecord_Valid_9:Matrix
            var r2 = r66.clone();//assign %2 = %66  : {int[][] data,int height,int width}
            var r67 = new WyJS.Integer(22);
            var r68 = new WyJS.Integer(28);
            var r69 = new WyJS.List([r67, r68], new WyJS.Type.List(new WyJS.Type.Int()));
            var r70 = new WyJS.Integer(49);
            var r71 = new WyJS.Integer(64);
            var r72 = new WyJS.List([r70, r71], new WyJS.Type.List(new WyJS.Type.Int()));
            var r73 = new WyJS.List([r69, r72], new WyJS.Type.List(new WyJS.Type.List(new WyJS.Type.Int())));
            var r74 = new WyJS.Integer(2);
            var r75 = new WyJS.Integer(2);
            var r76 = new WyJS.Record(["data", "height", "width"], [r73, r74, r75], new WyJS.Type.Record(["data", "height", "width"], [new WyJS.Type.List(new WyJS.Type.List(new WyJS.Type.Int())), new WyJS.Type.Int(), new WyJS.Type.Int()]));
            if(WyJS.equals(r2, r76, true)){
               control_flow_pc = 1481;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1481:
            var r78 = new WyJS.Integer(3);
            var r79 = new WyJS.Integer(2);
            var r80 = new WyJS.Integer(1);
            var r81 = new WyJS.Integer(2);
            var r82 = new WyJS.Integer(3);
            var r83 = new WyJS.List([r80, r81, r82], new WyJS.Type.List(new WyJS.Type.Int()));
            var r84 = new WyJS.Integer(4);
            var r85 = new WyJS.Integer(5);
            var r86 = new WyJS.Integer(6);
            var r87 = new WyJS.List([r84, r85, r86], new WyJS.Type.List(new WyJS.Type.Int()));
            var r88 = new WyJS.List([r83, r87], new WyJS.Type.List(new WyJS.Type.List(new WyJS.Type.Int())));
            var r77 = Matrix$b9fFaWP8Z2$20kQ$s5$n0$S$76$W0FP$s5$_0$O$74$_0kN$w5$m0$O$w4$L0FN$k5$d0$O$w4$tN$o3$W0$S$76$d0$TFc_FD$B3$j0VQ$B6$o0VR$35$d0VQ$J5$Z0VJ$J5$Y0kQ$76$Z0kM$N4$W0$Q$Z5$Z0kM$Zn$VQ$35$ollcklkRW2(r78, r79, r88);//invoke %77 = (%78, %79, %88) ConstrainedRecord_Valid_9:Matrix : function(ConstrainedRecord_Valid_9:nat,ConstrainedRecord_Valid_9:nat,int[][]) -> ConstrainedRecord_Valid_9:Matrix
            var r0 = r77.clone();//assign %0 = %77  : {int[][] data,int height,int width}
            var r90 = new WyJS.Integer(4);
            var r91 = new WyJS.Integer(3);
            var r92 = new WyJS.Integer(1);
            var r93 = new WyJS.Integer(2);
            var r94 = new WyJS.Integer(3);
            var r95 = new WyJS.Integer(4);
            var r96 = new WyJS.List([r92, r93, r94, r95], new WyJS.Type.List(new WyJS.Type.Int()));
            var r97 = new WyJS.Integer(5);
            var r98 = new WyJS.Integer(6);
            var r99 = new WyJS.Integer(7);
            var r100 = new WyJS.Integer(8);
            var r101 = new WyJS.List([r97, r98, r99, r100], new WyJS.Type.List(new WyJS.Type.Int()));
            var r102 = new WyJS.Integer(9);
            var r103 = new WyJS.Integer(10);
            var r104 = new WyJS.Integer(11);
            var r105 = new WyJS.Integer(12);
            var r106 = new WyJS.List([r102, r103, r104, r105], new WyJS.Type.List(new WyJS.Type.Int()));
            var r107 = new WyJS.List([r96, r101, r106], new WyJS.Type.List(new WyJS.Type.List(new WyJS.Type.Int())));
            var r89 = Matrix$b9fFaWP8Z2$20kQ$s5$n0$S$76$W0FP$s5$_0$O$74$_0kN$w5$m0$O$w4$L0FN$k5$d0$O$w4$tN$o3$W0$S$76$d0$TFc_FD$B3$j0VQ$B6$o0VR$35$d0VQ$J5$Z0VJ$J5$Y0kQ$76$Z0kM$N4$W0$Q$Z5$Z0kM$Zn$VQ$35$ollcklkRW2(r90, r91, r107);//invoke %89 = (%90, %91, %107) ConstrainedRecord_Valid_9:Matrix : function(ConstrainedRecord_Valid_9:nat,ConstrainedRecord_Valid_9:nat,int[][]) -> ConstrainedRecord_Valid_9:Matrix
            var r1 = r89.clone();//assign %1 = %89  : {int[][] data,int height,int width}
            var r108 = run$Y9dFXc_FD$B3$j0VQ$B6$o0VR$35$d0VQ$J5$Z0VJ$J5$Y0kQ$76$Z0kM$N4$W0$Q$Z5$Z0kM$ZY0FI$35$o0VR$Z5$s0WE(r0, r1);//invoke %108 = (%0, %1) ConstrainedRecord_Valid_9:run : function(ConstrainedRecord_Valid_9:Matrix,ConstrainedRecord_Valid_9:Matrix) -> ConstrainedRecord_Valid_9:Matrix
            var r2 = r108.clone();//assign %2 = %108  : {int[][] data,int height,int width}
            var r109 = new WyJS.Integer(38);
            var r110 = new WyJS.Integer(44);
            var r111 = new WyJS.Integer(50);
            var r112 = new WyJS.Integer(56);
            var r113 = new WyJS.List([r109, r110, r111, r112], new WyJS.Type.List(new WyJS.Type.Int()));
            var r114 = new WyJS.Integer(83);
            var r115 = new WyJS.Integer(98);
            var r116 = new WyJS.Integer(113);
            var r117 = new WyJS.Integer(128);
            var r118 = new WyJS.List([r114, r115, r116, r117], new WyJS.Type.List(new WyJS.Type.Int()));
            var r119 = new WyJS.List([r113, r118], new WyJS.Type.List(new WyJS.Type.List(new WyJS.Type.Int())));
            var r120 = new WyJS.Integer(2);
            var r121 = new WyJS.Integer(4);
            var r122 = new WyJS.Record(["data", "height", "width"], [r119, r120, r121], new WyJS.Type.Record(["data", "height", "width"], [new WyJS.Type.List(new WyJS.Type.List(new WyJS.Type.Int())), new WyJS.Type.Int(), new WyJS.Type.Int()]));
            if(WyJS.equals(r2, r122, true)){
               control_flow_pc = 1482;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1482:
            return;
      }
   }
}

