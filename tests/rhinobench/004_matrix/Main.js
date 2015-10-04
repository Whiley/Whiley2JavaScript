function Matrix$b9fFaWP8F$o3$W0FP$sa0FI$35$o0VR$Z5$s0WL13$C0FN$Z5$iC$s5$W0$SRB9RBBMs(r0, r1, r2){//function(Main:nat,Main:nat,int[][]) -> Main:Matrix
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

function multiply$Y9dFXc_$0FI$35$d0VQ5$C0FN$F6$m0FP$V631(r0, r1){//function(Main:Matrix,Main:Matrix) -> Main:Matrix
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r8 = new WyJS.Integer(0);
            var r9 = r1.fieldLoad("width");//fieldload %9 = %1 width : {int[][] data,int height,int width}
            var r10 = WyJS.ListGen(r8, r9, new WyJS.Type.List(new WyJS.Type.Int()));
            var r11 = r0.fieldLoad("height");//fieldload %11 = %0 height : {int[][] data,int height,int width}
            var r12 = WyJS.ListGen(r10, r11, new WyJS.Type.List(new WyJS.Type.List(new WyJS.Type.Int())));
            var r7 = r12.clone(new WyJS.Type.List(new WyJS.Type.Int()));//assign %7 = %12  : int[][]
            var r2 = r7.clone(new WyJS.Type.List(new WyJS.Type.Int()));//assign %2 = %7  : int[][]
            var r14 = new WyJS.Integer(0);
            var r13 = r14;//assign %13 = %14  : int
            var r3 = r13;//assign %3 = %13  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case -2:
            var r16 = r0.fieldLoad("height");//fieldload %16 = %0 height : {int[][] data,int height,int width}
            if(WyJS.gt(r3, r16, true)){
               control_flow_pc = 12;
               control_flow_repeat = true;
               continue outer;
            }
            var r18 = new WyJS.Integer(0);
            var r17 = r18;//assign %17 = %18  : int
            var r4 = r17;//assign %4 = %17  : int
            control_flow_pc = -3;
            control_flow_repeat = true;
            break;
         case -3:
            var r20 = r1.fieldLoad("width");//fieldload %20 = %1 width : {int[][] data,int height,int width}
            if(WyJS.gt(r4, r20, true)){
               control_flow_pc = 14;
               control_flow_repeat = true;
               continue outer;
            }
            var r22 = new WyJS.Integer(0);
            var r21 = r22;//assign %21 = %22  : int
            var r5 = r21;//assign %5 = %21  : int
            var r24 = new WyJS.Integer(0);
            var r23 = r24;//assign %23 = %24  : int
            var r6 = r23;//assign %6 = %23  : int
            control_flow_pc = -4;
            control_flow_repeat = true;
            break;
         case -4:
            var r26 = r0.fieldLoad("width");//fieldload %26 = %0 width : {int[][] data,int height,int width}
            if(WyJS.gt(r6, r26, true)){
               control_flow_pc = 16;
               control_flow_repeat = true;
               continue outer;
            }
            var r27 = r0.fieldLoad("data");//fieldload %27 = %0 data : {int[][] data,int height,int width}
            var r28 = r27.getValue(r3);
            var r29 = r28.getValue(r6);
            var r30 = r1.fieldLoad("data");//fieldload %30 = %1 data : {int[][] data,int height,int width}
            var r31 = r30.getValue(r6);
            var r32 = r31.getValue(r4);
            var r33 = r29.mul(r32);//mul %33 = %29, %32 : int
            var r34 = r5.add(r33);//add %34 = %5, %33 : int
            var r5 = r34;//assign %5 = %34  : int
            var r35 = new WyJS.Integer(1);
            var r36 = r6.add(r35);//add %36 = %6, %35 : int
            var r6 = r36;//assign %6 = %36  : int
            control_flow_pc = -4;
            control_flow_repeat = true;
            break;
            control_flow_pc = 16;
            control_flow_repeat = true;
            break;
         case 16:
            r2.getValue(r3).setValue(r4, r5);
            var r37 = new WyJS.Integer(1);
            var r38 = r4.add(r37);//add %38 = %4, %37 : int
            var r4 = r38;//assign %4 = %38  : int
            control_flow_pc = -3;
            control_flow_repeat = true;
            break;
            control_flow_pc = 14;
            control_flow_repeat = true;
            break;
         case 14:
            var r39 = new WyJS.Integer(1);
            var r40 = r3.add(r39);//add %40 = %3, %39 : int
            var r3 = r40;//assign %3 = %40  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case 12:
            var r42 = r1.fieldLoad("width");//fieldload %42 = %1 width : {int[][] data,int height,int width}
            var r43 = r0.fieldLoad("height");//fieldload %43 = %0 height : {int[][] data,int height,int width}
            var r41 = exports.Matrix$b9fFaWP8F$o3$W0FP$sa0FI$35$o0VR$Z5$s0WL13$C0FN$Z5$iC$s5$W0$SRB9RBBMs(r42, r43, r2);//invoke %41 = (%42, %43, %2) Main:Matrix : function(Main:nat,Main:nat,int[][]) -> Main:Matrix
            return r41;//return %41 : {int[][] data,int height,int width}
            return;
      }
   }
}

function buildMatrix$a9hFaWeL13$C0FN$Z5$iO$o3$W0$S$76$d0$TFc_$0FI$35$d0VQ2$i0FN$F66Ym41(r0, r1, r2, r3){//function(Main:nat,Main:nat,int[],int) -> Main:Matrix
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r8 = new WyJS.Integer(0);
            var r9 = WyJS.ListGen(r8, r0, new WyJS.Type.List(new WyJS.Type.Int()));
            var r10 = WyJS.ListGen(r9, r1, new WyJS.Type.List(new WyJS.Type.List(new WyJS.Type.Int())));
            var r7 = r10.clone(new WyJS.Type.List(new WyJS.Type.Int()));//assign %7 = %10  : int[][]
            var r4 = r7.clone(new WyJS.Type.List(new WyJS.Type.Int()));//assign %4 = %7  : int[][]
            var r12 = new WyJS.Integer(0);
            var r11 = r12;//assign %11 = %12  : int
            var r5 = r11;//assign %5 = %11  : int
            control_flow_pc = -5;
            control_flow_repeat = true;
            break;
         case -5:
            if(WyJS.gt(r5, r1, true)){
               control_flow_pc = 18;
               control_flow_repeat = true;
               continue outer;
            }
            var r14 = new WyJS.Integer(0);
            var r13 = r14;//assign %13 = %14  : int
            var r6 = r13;//assign %6 = %13  : int
            control_flow_pc = -6;
            control_flow_repeat = true;
            break;
         case -6:
            if(WyJS.gt(r6, r0, true)){
               control_flow_pc = 19;
               control_flow_repeat = true;
               continue outer;
            }
            var r15 = r3.add(r6);//add %15 = %3, %6 : int
            var r16 = r2.getValue(r15);
            var r17 = r3.add(r6);//add %17 = %3, %6 : int
            var r18 = r2.getValue(r17);
            r4.getValue(r5).setValue(r6, r18);
            var r19 = new WyJS.Integer(1);
            var r20 = r6.add(r19);//add %20 = %6, %19 : int
            var r6 = r20;//assign %6 = %20  : int
            control_flow_pc = -6;
            control_flow_repeat = true;
            break;
            control_flow_pc = 19;
            control_flow_repeat = true;
            break;
         case 19:
            var r21 = new WyJS.Integer(1);
            var r22 = r5.add(r21);//add %22 = %5, %21 : int
            var r5 = r22;//assign %5 = %22  : int
            var r23 = r3.add(r0);//add %23 = %3, %0 : int
            var r3 = r23;//assign %3 = %23  : int
            control_flow_pc = -5;
            control_flow_repeat = true;
            break;
         case 18:
         // console.log(r0);
         // console.log(r1);
        // console.log(r4.list);
            var r24 = exports.Matrix$b9fFaWP8F$o3$W0FP$sa0FI$35$o0VR$Z5$s0WL13$C0FN$Z5$iC$s5$W0$SRB9RBBMs(r0, r1, r4);//invoke %24 = (%0, %1, %4) Main:Matrix : function(Main:nat,Main:nat,int[][]) -> Main:Matrix
            return r24;//return %24 : {int[][] data,int height,int width}
            return;
      }
   }
}
