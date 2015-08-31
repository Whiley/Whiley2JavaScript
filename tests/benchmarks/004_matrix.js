function buildMatrix$a9hFaWeL1P$$B$$2$o$kM$o5$W0$S$76$d0$T5$C0FN$F6$m0FP$V63P8c0$k$$B$F2$U0FQ$35$o0VR$Z5$sC$s5$W0$SRB9M7(r0, r1, r2, r3){//function(004_matrix:nat,004_matrix:nat,[int],int) -> 004_matrix:Matrix
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r7 = new WyJS.List([], new WyJS.Type.List(new WyJS.Type.Void()));
            var r6 = r7.clone(new WyJS.Type.Void());//assign %6 = %7  : [void]
            var r4 = r6.clone(new WyJS.Type.List(new WyJS.Type.Int()));//assign %4 = %6  : [[int]]
            var r9 = new WyJS.Integer(0);
            var r8 = r9;//assign %8 = %9  : int
            var r5 = r8;//assign %5 = %8  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case -2:
            if(WyJS.gt(r5, r1, true)){
               control_flow_pc = 4;
               control_flow_repeat = true;
               continue outer;
            }
            var r10 = r3.add(r0);//add %10 = %3, %0 : int
            var r11 = r2.sublist(r3, r10);
            var r12 = new WyJS.List([r11], new WyJS.Type.List(new WyJS.Type.List(new WyJS.Type.Int())));
            var r13 = r4.append(r12);
            var r4 = r13.clone(new WyJS.Type.List(new WyJS.Type.Int()));//assign %4 = %13  : [[int]]
            var r14 = new WyJS.Integer(1);
            var r15 = r5.add(r14);//add %15 = %5, %14 : int
            var r5 = r15;//assign %5 = %15  : int
            var r16 = r3.add(r0);//add %16 = %3, %0 : int
            var r3 = r16;//assign %3 = %16  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case 4:
            var r17 = Matrix$b9fFaWP8c0$k$$B$F2$U0FQ$35$o0VR$Z5$sO$o3$W0$S$76$d0$TFc_V5$$2$k$$C$w4$h0FN$F6$m0FP$Vr$VQ$35$ollcklkRW2(r0, r1, r4);//invoke %17 = (%0, %1, %4) 004_matrix:Matrix : function(004_matrix:nat,004_matrix:nat,[[int]]) -> 004_matrix:Matrix
            return r17;//return %17 : {[[int]] data,int height,int width}
            return;
      }
   }
}

function Matrix$b9fFaWP8c0$k$$B$F2$U0FQ$35$o0VR$Z5$sO$o3$W0$S$76$d0$TFc_V5$$2$k$$C$w4$h0FN$F6$m0FP$Vr$VQ$35$ollcklkRW2(r0, r1, r2){//function(004_matrix:nat,004_matrix:nat,[[int]]) -> 004_matrix:Matrix
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r3 = new WyJS.Record(["data", "height", "width"], [r2, r1, r0], new WyJS.Type.Record(["data", "height", "width"], [new WyJS.Type.List(new WyJS.Type.List(new WyJS.Type.Int())), new WyJS.Type.Int(), new WyJS.Type.Int()]));
            return r3;//return %3 : {[[int]] data,int height,int width}
            return;
      }
   }
}

function multiply$Y9dFXc_V5$$2$k$$C$w4$h0FN$F6$m0FP$Vb0FI$35$o0VR$Z5$s0WE(r0, r1){//function(004_matrix:Matrix,004_matrix:Matrix) -> 004_matrix:Matrix
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r9 = new WyJS.List([], new WyJS.Type.List(new WyJS.Type.Void()));
            var r8 = r9.clone(new WyJS.Type.Void());//assign %8 = %9  : [void]
            var r2 = r8.clone(new WyJS.Type.List(new WyJS.Type.Int()));//assign %2 = %8  : [[int]]
            var r11 = new WyJS.Integer(0);
            var r10 = r11;//assign %10 = %11  : int
            var r3 = r10;//assign %3 = %10  : int
            control_flow_pc = -3;
            control_flow_repeat = true;
            break;
         case -3:
            var r13 = r0.fieldLoad("height");//fieldload %13 = %0 height : {[[int]] data,int height,int width}
            if(WyJS.gt(r3, r13, true)){
               control_flow_pc = 14;
               control_flow_repeat = true;
               continue outer;
            }
            var r15 = new WyJS.List([], new WyJS.Type.List(new WyJS.Type.Void()));
            var r14 = r15.clone(new WyJS.Type.Void());//assign %14 = %15  : [void]
            var r4 = r14.clone(new WyJS.Type.Int());//assign %4 = %14  : [int]
            var r17 = new WyJS.Integer(0);
            var r16 = r17;//assign %16 = %17  : int
            var r5 = r16;//assign %5 = %16  : int
            control_flow_pc = -4;
            control_flow_repeat = true;
            break;
         case -4:
            var r19 = r1.fieldLoad("width");//fieldload %19 = %1 width : {[[int]] data,int height,int width}
            if(WyJS.gt(r5, r19, true)){
               control_flow_pc = 16;
               control_flow_repeat = true;
               continue outer;
            }
            var r21 = new WyJS.Integer(0);
            var r20 = r21;//assign %20 = %21  : int
            var r6 = r20;//assign %6 = %20  : int
            var r23 = new WyJS.Integer(0);
            var r22 = r23;//assign %22 = %23  : int
            var r7 = r22;//assign %7 = %22  : int
            control_flow_pc = -5;
            control_flow_repeat = true;
            break;
         case -5:
            var r25 = r0.fieldLoad("width");//fieldload %25 = %0 width : {[[int]] data,int height,int width}
            if(WyJS.gt(r7, r25, true)){
               control_flow_pc = 18;
               control_flow_repeat = true;
               continue outer;
            }
            var r26 = r0.fieldLoad("data");//fieldload %26 = %0 data : {[[int]] data,int height,int width}
            var r27 = r26.getValue(r3);
            var r28 = r27.getValue(r7);
            var r29 = r1.fieldLoad("data");//fieldload %29 = %1 data : {[[int]] data,int height,int width}
            var r30 = r29.getValue(r7);
            var r31 = r30.getValue(r5);
            var r32 = r28.mul(r31);//mul %32 = %28, %31 : int
            var r33 = r6.add(r32);//add %33 = %6, %32 : int
            var r6 = r33;//assign %6 = %33  : int
            var r34 = new WyJS.Integer(1);
            var r35 = r7.add(r34);//add %35 = %7, %34 : int
            var r7 = r35;//assign %7 = %35  : int
            control_flow_pc = -5;
            control_flow_repeat = true;
            break;
            control_flow_pc = 18;
            control_flow_repeat = true;
            break;
         case 18:
            var r36 = new WyJS.List([r6], new WyJS.Type.List(new WyJS.Type.Int()));
            var r37 = r4.append(r36);
            var r4 = r37.clone(new WyJS.Type.Int());//assign %4 = %37  : [int]
            var r38 = new WyJS.Integer(1);
            var r39 = r5.add(r38);//add %39 = %5, %38 : int
            var r5 = r39;//assign %5 = %39  : int
            control_flow_pc = -4;
            control_flow_repeat = true;
            break;
            control_flow_pc = 16;
            control_flow_repeat = true;
            break;
         case 16:
            var r40 = new WyJS.List([r4], new WyJS.Type.List(new WyJS.Type.List(new WyJS.Type.Int())));
            var r41 = r2.append(r40);
            var r2 = r41.clone(new WyJS.Type.List(new WyJS.Type.Int()));//assign %2 = %41  : [[int]]
            var r42 = new WyJS.Integer(1);
            var r43 = r3.add(r42);//add %43 = %3, %42 : int
            var r3 = r43;//assign %3 = %43  : int
            control_flow_pc = -3;
            control_flow_repeat = true;
            break;
         case 14:
            var r45 = r1.fieldLoad("width");//fieldload %45 = %1 width : {[[int]] data,int height,int width}
            var r46 = r0.fieldLoad("height");//fieldload %46 = %0 height : {[[int]] data,int height,int width}
            var r44 = Matrix$b9fFaWP8c0$k$$B$F2$U0FQ$35$o0VR$Z5$sO$o3$W0$S$76$d0$TFc_V5$$2$k$$C$w4$h0FN$F6$m0FP$Vr$VQ$35$ollcklkRW2(r45, r46, r2);//invoke %44 = (%45, %46, %2) 004_matrix:Matrix : function(004_matrix:nat,004_matrix:nat,[[int]]) -> 004_matrix:Matrix
            return r44;//return %44 : {[[int]] data,int height,int width}
            return;
      }
   }
}

function setUp1$Y9_FP8c0$k$$B$F2$U0FQ$35$o0VR$Z5$sO$o3$W0$S$76$d0$TFs2(){//function() -> 004_matrix:Matrix
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r4 = new WyJS.Integer(3);
            var r5 = new WyJS.Integer(3);
            var r6 = new WyJS.Integer(1);
            var r7 = new WyJS.Integer(1);
            var r8 = new WyJS.Integer(1);
            var r9 = new WyJS.Integer(0);
            var r10 = new WyJS.Integer(0);
            var r11 = new WyJS.Integer(0);
            var r12 = new WyJS.Integer(1);
            var r13 = new WyJS.Integer(1);
            var r14 = new WyJS.Integer(1);
            var r15 = new WyJS.List([r6, r7, r8, r9, r10, r11, r12, r13, r14], new WyJS.Type.List(new WyJS.Type.Int()));
            var r16 = new WyJS.Integer(0);
            var r3 = buildMatrix$a9hFaWeL1P$$B$$2$o$kM$o5$W0$S$76$d0$T5$C0FN$F6$m0FP$V63P8c0$k$$B$F2$U0FQ$35$o0VR$Z5$sC$s5$W0$SRB9M7(r4, r5, r15, r16);//invoke %3 = (%4, %5, %15, %16) 004_matrix:buildMatrix : function(004_matrix:nat,004_matrix:nat,[int],int) -> 004_matrix:Matrix
            var r2 = r3.clone();//assign %2 = %3  : {[[int]] data,int height,int width}
            var r0 = r2.clone();//assign %0 = %2  : {[[int]] data,int height,int width}
            var r19 = new WyJS.Integer(3);
            var r20 = new WyJS.Integer(3);
            var r21 = new WyJS.Integer(2);
            var r22 = new WyJS.Integer(1);
            var r23 = new WyJS.Integer(2);
            var r24 = new WyJS.Integer(1);
            var r25 = new WyJS.Integer(0);
            var r26 = new WyJS.Integer(1);
            var r27 = new WyJS.Integer(2);
            var r28 = new WyJS.Integer(1);
            var r29 = new WyJS.Integer(2);
            var r30 = new WyJS.List([r21, r22, r23, r24, r25, r26, r27, r28, r29], new WyJS.Type.List(new WyJS.Type.Int()));
            var r31 = new WyJS.Integer(0);
            var r18 = buildMatrix$a9hFaWeL1P$$B$$2$o$kM$o5$W0$S$76$d0$T5$C0FN$F6$m0FP$V63P8c0$k$$B$F2$U0FQ$35$o0VR$Z5$sC$s5$W0$SRB9M7(r19, r20, r30, r31);//invoke %18 = (%19, %20, %30, %31) 004_matrix:buildMatrix : function(004_matrix:nat,004_matrix:nat,[int],int) -> 004_matrix:Matrix
            var r17 = r18.clone();//assign %17 = %18  : {[[int]] data,int height,int width}
            var r1 = r17.clone();//assign %1 = %17  : {[[int]] data,int height,int width}
            var r32 = multiply$Y9dFXc_V5$$2$k$$C$w4$h0FN$F6$m0FP$Vb0FI$35$o0VR$Z5$s0WE(r0, r1);//invoke %32 = (%0, %1) 004_matrix:multiply : function(004_matrix:Matrix,004_matrix:Matrix) -> 004_matrix:Matrix
            return r32;//return %32 : {[[int]] data,int height,int width}
            return;
      }
   }
}

function setUp2$Y9_FP8c0$k$$B$F2$U0FQ$35$o0VR$Z5$sO$o3$W0$S$76$d0$TFs2(){//function() -> 004_matrix:Matrix
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r4 = new WyJS.Integer(3);
            var r5 = new WyJS.Integer(3);
            var r6 = new WyJS.Integer(3);
            var r7 = new WyJS.Integer(6);
            var r8 = new WyJS.Integer(4);
            var r9 = new WyJS.Integer(2);
            var r10 = new WyJS.Integer(2);
            var r11 = new WyJS.Integer(2);
            var r12 = new WyJS.Integer(1);
            var r13 = new WyJS.Integer(2);
            var r14 = new WyJS.Integer(3);
            var r15 = new WyJS.List([r6, r7, r8, r9, r10, r11, r12, r13, r14], new WyJS.Type.List(new WyJS.Type.Int()));
            var r16 = new WyJS.Integer(0);
            var r3 = buildMatrix$a9hFaWeL1P$$B$$2$o$kM$o5$W0$S$76$d0$T5$C0FN$F6$m0FP$V63P8c0$k$$B$F2$U0FQ$35$o0VR$Z5$sC$s5$W0$SRB9M7(r4, r5, r15, r16);//invoke %3 = (%4, %5, %15, %16) 004_matrix:buildMatrix : function(004_matrix:nat,004_matrix:nat,[int],int) -> 004_matrix:Matrix
            var r2 = r3.clone();//assign %2 = %3  : {[[int]] data,int height,int width}
            var r0 = r2.clone();//assign %0 = %2  : {[[int]] data,int height,int width}
            var r19 = new WyJS.Integer(3);
            var r20 = new WyJS.Integer(3);
            var r21 = new WyJS.Integer(4);
            var r22 = new WyJS.Integer(2);
            var r23 = new WyJS.Integer(4);
            var r24 = new WyJS.Integer(5);
            var r25 = new WyJS.Integer(1);
            var r26 = new WyJS.Integer(1);
            var r27 = new WyJS.Integer(1);
            var r28 = new WyJS.Integer(2);
            var r29 = new WyJS.Integer(9);
            var r30 = new WyJS.List([r21, r22, r23, r24, r25, r26, r27, r28, r29], new WyJS.Type.List(new WyJS.Type.Int()));
            var r31 = new WyJS.Integer(0);
            var r18 = buildMatrix$a9hFaWeL1P$$B$$2$o$kM$o5$W0$S$76$d0$T5$C0FN$F6$m0FP$V63P8c0$k$$B$F2$U0FQ$35$o0VR$Z5$sC$s5$W0$SRB9M7(r19, r20, r30, r31);//invoke %18 = (%19, %20, %30, %31) 004_matrix:buildMatrix : function(004_matrix:nat,004_matrix:nat,[int],int) -> 004_matrix:Matrix
            var r17 = r18.clone();//assign %17 = %18  : {[[int]] data,int height,int width}
            var r1 = r17.clone();//assign %1 = %17  : {[[int]] data,int height,int width}
            var r32 = multiply$Y9dFXc_V5$$2$k$$C$w4$h0FN$F6$m0FP$Vb0FI$35$o0VR$Z5$s0WE(r0, r1);//invoke %32 = (%0, %1) 004_matrix:multiply : function(004_matrix:Matrix,004_matrix:Matrix) -> 004_matrix:Matrix
            return r32;//return %32 : {[[int]] data,int height,int width}
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
            var r0 = setUp1$Y9_FP8c0$k$$B$F2$U0FQ$35$o0VR$Z5$sO$o3$W0$S$76$d0$TFs2();//invoke %0 = () 004_matrix:setUp1 : function() -> 004_matrix:Matrix
            var r2 = new WyJS.Integer(3);
            var r3 = new WyJS.Integer(3);
            var r4 = new WyJS.Integer(5);
            var r5 = new WyJS.Integer(2);
            var r6 = new WyJS.Integer(5);
            var r7 = new WyJS.Integer(0);
            var r8 = new WyJS.Integer(0);
            var r9 = new WyJS.Integer(0);
            var r10 = new WyJS.Integer(5);
            var r11 = new WyJS.Integer(2);
            var r12 = new WyJS.Integer(5);
            var r13 = new WyJS.List([r4, r5, r6, r7, r8, r9, r10, r11, r12], new WyJS.Type.List(new WyJS.Type.Int()));
            var r14 = new WyJS.Integer(0);
            var r1 = buildMatrix$a9hFaWeL1P$$B$$2$o$kM$o5$W0$S$76$d0$T5$C0FN$F6$m0FP$V63P8c0$k$$B$F2$U0FQ$35$o0VR$Z5$sC$s5$W0$SRB9M7(r2, r3, r13, r14);//invoke %1 = (%2, %3, %13, %14) 004_matrix:buildMatrix : function(004_matrix:nat,004_matrix:nat,[int],int) -> 004_matrix:Matrix
            if(WyJS.equals(r0, r1, true)){
               control_flow_pc = 19;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 19:
            var r15 = setUp2$Y9_FP8c0$k$$B$F2$U0FQ$35$o0VR$Z5$sO$o3$W0$S$76$d0$TFs2();//invoke %15 = () 004_matrix:setUp2 : function() -> 004_matrix:Matrix
            var r17 = new WyJS.Integer(3);
            var r18 = new WyJS.Integer(3);
            var r19 = new WyJS.Integer(46);
            var r20 = new WyJS.Integer(20);
            var r21 = new WyJS.Integer(54);
            var r22 = new WyJS.Integer(20);
            var r23 = new WyJS.Integer(10);
            var r24 = new WyJS.Integer(28);
            var r25 = new WyJS.Integer(17);
            var r26 = new WyJS.Integer(10);
            var r27 = new WyJS.Integer(33);
            var r28 = new WyJS.List([r19, r20, r21, r22, r23, r24, r25, r26, r27], new WyJS.Type.List(new WyJS.Type.Int()));
            var r29 = new WyJS.Integer(0);
            var r16 = buildMatrix$a9hFaWeL1P$$B$$2$o$kM$o5$W0$S$76$d0$T5$C0FN$F6$m0FP$V63P8c0$k$$B$F2$U0FQ$35$o0VR$Z5$sC$s5$W0$SRB9M7(r17, r18, r28, r29);//invoke %16 = (%17, %18, %28, %29) 004_matrix:buildMatrix : function(004_matrix:nat,004_matrix:nat,[int],int) -> 004_matrix:Matrix
            if(WyJS.equals(r15, r16, true)){
               control_flow_pc = 20;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 20:
            return;
      }
   }
}

