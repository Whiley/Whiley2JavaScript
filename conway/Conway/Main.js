function Board$Z9dFad_V5$32$k$VB$w4$Y0kQ$s5$r0FN$ZM0VF$w5$W0VR$F53P8c0$l$$B$72$U0kN$w5$i0kS$35$tC$s5$W0$SE(r0, r1){//function(102_conway:nat,102_conway:nat) -> 102_conway:Board
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r6 = new WyJS.List([], new WyJS.Type.List(new WyJS.Type.Void()));
            var r5 = r6.clone(new WyJS.Type.Void());//assign %5 = %6  : [void]
            var r2 = r5.clone(new WyJS.Type.Bool());//assign %2 = %5  : [bool]
            var r8 = new WyJS.Integer(0);
            var r7 = r8;//assign %7 = %8  : int
            var r3 = r7;//assign %3 = %7  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case -2:
            if(WyJS.gt(r3, r1, true)){
               control_flow_pc = 4;
               control_flow_repeat = true;
               continue outer;
            }
            var r10 = false;
            var r11 = new WyJS.List([r10], new WyJS.Type.List(new WyJS.Type.Bool()));
            var r12 = r2.append(r11);
            var r2 = r12.clone(new WyJS.Type.Bool());//assign %2 = %12  : [bool]
            var r13 = new WyJS.Integer(1);
            var r14 = r3.add(r13);//add %14 = %3, %13 : int
            var r3 = r14;//assign %3 = %14  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case 4:
            var r15 = r2.length();//lengthof %15 = %2 : [bool]
            if(WyJS.equals(r15, r1, true)){
               control_flow_pc = 5;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 5:
            var r17 = new WyJS.List([], new WyJS.Type.List(new WyJS.Type.Void()));
            var r16 = r17.clone(new WyJS.Type.Void());//assign %16 = %17  : [void]
            var r4 = r16.clone(new WyJS.Type.List(new WyJS.Type.Bool()));//assign %4 = %16  : [[bool]]
            var r18 = new WyJS.Integer(0);
            var r3 = r18;//assign %3 = %18  : int
            control_flow_pc = -3;
            control_flow_repeat = true;
            break;
         case -3:
            if(WyJS.gt(r3, r0, true)){
               control_flow_pc = 8;
               control_flow_repeat = true;
               continue outer;
            }
            var r22 = new WyJS.List([r2], new WyJS.Type.List(new WyJS.Type.List(new WyJS.Type.Bool())));
            var r23 = r4.append(r22);
            var r4 = r23.clone(new WyJS.Type.List(new WyJS.Type.Bool()));//assign %4 = %23  : [[bool]]
            var r24 = new WyJS.Integer(1);
            var r25 = r3.add(r24);//add %25 = %3, %24 : int
            var r3 = r25;//assign %3 = %25  : int
            control_flow_pc = -3;
            control_flow_repeat = true;
            break;
         case 8:
            var r26 = r4.length();//lengthof %26 = %4 : [[bool]]
            if(WyJS.equals(r26, r0, true)){
               control_flow_pc = 9;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 9:
            var r27 = new WyJS.Record(["cells", "height", "width"], [r4, r0, r1], new WyJS.Type.Record(["cells", "height", "width"], [new WyJS.Type.List(new WyJS.Type.List(new WyJS.Type.Bool())), new WyJS.Type.Int(), new WyJS.Type.Int()]));
            return r27;//return %27 : {[[bool]] cells,int height,int width}
            return;
      }
   }
}

function update$Y9bFXL1P$FB$$2$m$kM$B5$j0VQ$R6$W0FT4$10kQ$35$m0$OF7(r0){//function(102_conway:Board) -> 102_conway:Board
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r9 = r0.fieldLoad("cells");//fieldload %9 = %0 cells : {[[bool]] cells,int height,int width}
            var r8 = r9.clone(new WyJS.Type.List(new WyJS.Type.Bool()));//assign %8 = %9  : [[bool]]
            var r1 = r8.clone(new WyJS.Type.List(new WyJS.Type.Bool()));//assign %1 = %8  : [[bool]]
            var r11 = r0.fieldLoad("height");//fieldload %11 = %0 height : {[[bool]] cells,int height,int width}
            var r10 = r11;//assign %10 = %11  : int
            var r2 = r10;//assign %2 = %10  : int
            var r13 = r0.fieldLoad("width");//fieldload %13 = %0 width : {[[bool]] cells,int height,int width}
            var r12 = r13;//assign %12 = %13  : int
            var r3 = r12;//assign %3 = %12  : int
            var r15 = new WyJS.Integer(0);
            var r14 = r15;//assign %14 = %15  : int
            var r4 = r14;//assign %4 = %14  : int
            control_flow_pc = -4;
            control_flow_repeat = true;
            break;
         case -4:
            if(WyJS.gt(r4, r2, true)){
               control_flow_pc = 12;
               control_flow_repeat = true;
               continue outer;
            }
            var r21 = new WyJS.Integer(0);
            var r20 = r21;//assign %20 = %21  : int
            var r5 = r20;//assign %5 = %20  : int
            control_flow_pc = -5;
            control_flow_repeat = true;
            break;
         case -5:
            if(WyJS.gt(r5, r3, true)){
               control_flow_pc = 15;
               control_flow_repeat = true;
               continue outer;
            }
            var r26 = countLiving$Z9fFa7i$3P8c0$l$$B$72$U0kN$w5$i0kS$35$tK$73$j0FN$76$Z0(r0, r4, r5);//invoke %26 = (%0, %4, %5) 102_conway:countLiving : function(102_conway:Board,int,int) -> int
            var r25 = r26;//assign %25 = %26  : int
            var r6 = r25;//assign %6 = %25  : int
            var r27 = r0.fieldLoad("cells");//fieldload %27 = %0 cells : {[[bool]] cells,int height,int width}
            var r28 = r27.length();//lengthof %28 = %27 : [[bool]]
            if(WyJS.lt(r4, r28, false)){
               control_flow_pc = 16;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 16:
            var r29 = r0.fieldLoad("cells");//fieldload %29 = %0 cells : {[[bool]] cells,int height,int width}
            var r30 = r29.getValue(r4);
            var r31 = r30.length();//lengthof %31 = %30 : [bool]
            if(WyJS.lt(r5, r31, false)){
               control_flow_pc = 17;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 17:
            var r33 = r0.fieldLoad("cells");//fieldload %33 = %0 cells : {[[bool]] cells,int height,int width}
            var r34 = r33.getValue(r4);
            var r35 = r34.getValue(r5);
            var r32 = r35;//assign %32 = %35  : bool
            var r7 = r32;//assign %7 = %32  : bool
            var r36 = true;
            if(r7 === r36){
               control_flow_pc = 18;
               control_flow_repeat = true;
               break;
            }
            else{
               control_flow_pc = -6;
               control_flow_repeat = true;
               break;
            }
         case -6:
            control_flow_pc = 19;
            control_flow_repeat = true;
            continue outer;//goto label19
            control_flow_pc = 24;
            control_flow_repeat = true;
            break;
         case 18:
            if(WyJS.equals(r6, new WyJS.Integer(0), true)){
               control_flow_pc = 21;
               control_flow_repeat = true;
               continue outer;
            }
             else if(WyJS.equals(r6, new WyJS.Integer(1), true)){
               control_flow_pc = 21;
               control_flow_repeat = true;
               continue outer;
            }
             else if(WyJS.equals(r6, new WyJS.Integer(2), true)){
               control_flow_pc = 22;
               control_flow_repeat = true;
               continue outer;
            }
             else if(WyJS.equals(r6, new WyJS.Integer(3), true)){
               control_flow_pc = 22;
               control_flow_repeat = true;
               continue outer;
            }
             else if(WyJS.equals(r6, new WyJS.Integer(4), true)){
               control_flow_pc = 23;
               control_flow_repeat = true;
               continue outer;
            }
             else if(WyJS.equals(r6, new WyJS.Integer(5), true)){
               control_flow_pc = 23;
               control_flow_repeat = true;
               continue outer;
            }
             else if(WyJS.equals(r6, new WyJS.Integer(6), true)){
               control_flow_pc = 23;
               control_flow_repeat = true;
               continue outer;
            }
             else if(WyJS.equals(r6, new WyJS.Integer(7), true)){
               control_flow_pc = 23;
               control_flow_repeat = true;
               continue outer;
            }
             else if(WyJS.equals(r6, new WyJS.Integer(8), true)){
               control_flow_pc = 23;
               control_flow_repeat = true;
               continue outer;
            }
            else{
               control_flow_pc = 20;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 24;
            control_flow_repeat = true;
            break;
         case 21:
            var r37 = false;
            var r38 = false;
            r1.getValue(r4).setValue(r5, r38);
            control_flow_pc = 20;
            control_flow_repeat = true;
            continue outer;//goto label20
            control_flow_pc = 24;
            control_flow_repeat = true;
            break;
         case 22:
            control_flow_pc = 20;
            control_flow_repeat = true;
            continue outer;//goto label20
            control_flow_pc = 24;
            control_flow_repeat = true;
            break;
         case 23:
            var r39 = false;
            var r40 = false;
            r1.getValue(r4).setValue(r5, r40);
            control_flow_pc = 20;
            control_flow_repeat = true;
            continue outer;//goto label20
            control_flow_pc = 24;
            control_flow_repeat = true;
            break;
         case 20:
            control_flow_pc = 24;
            control_flow_repeat = true;
            continue outer;//goto label24
            control_flow_pc = 24;
            control_flow_repeat = true;
            break;
         case 19:
            var r41 = new WyJS.Integer(3);
            if(WyJS.equals(r6, r41, false)){
               control_flow_pc = 24;
               control_flow_repeat = true;
               break;
            }
            else{
               control_flow_pc = -7;
               control_flow_repeat = true;
               break;
            }
         case -7:
            var r42 = true;
            var r43 = true;
            r1.getValue(r4).setValue(r5, r43);
            control_flow_pc = 24;
            control_flow_repeat = true;
            break;
         case 24:
            var r44 = new WyJS.Integer(1);
            var r45 = r5.add(r44);//add %45 = %5, %44 : int
            var r5 = r45;//assign %5 = %45  : int
            control_flow_pc = -5;
            control_flow_repeat = true;
            break;
            control_flow_pc = 15;
            control_flow_repeat = true;
            break;
         case 15:
            var r46 = new WyJS.Integer(1);
            var r47 = r4.add(r46);//add %47 = %4, %46 : int
            var r4 = r47;//assign %4 = %47  : int
            control_flow_pc = -4;
            control_flow_repeat = true;
            break;
         case 12:
            var r48 = new WyJS.Record(["cells", "height", "width"], [r1, r2, r3], new WyJS.Type.Record(["cells", "height", "width"], [new WyJS.Type.List(new WyJS.Type.List(new WyJS.Type.Bool())), new WyJS.Type.Int(), new WyJS.Type.Int()]));
            return r48;//return %48 : {[[bool]] cells,int height,int width}
            return;
      }
   }
}

function countLiving$Z9fFa7i$3P8c0$l$$B$72$U0kN$w5$i0kS$35$tK$73$j0FN$76$Z0(r0, r1, r2){//function(102_conway:Board,int,int) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r6 = new WyJS.Integer(1);
            var r7 = r1.sub(r6);//sub %7 = %1, %6 : int
            var r8 = new WyJS.Integer(1);
            var r9 = r2.sub(r8);//sub %9 = %2, %8 : int
            var r5 = isAlive$Z9fFa7i$3P8c0$l$$B$72$U0kN$w5$i0kS$35$tK$73$j0FN$76$Z0(r0, r7, r9);//invoke %5 = (%0, %7, %9) 102_conway:isAlive : function(102_conway:Board,int,int) -> int
            var r4 = r5;//assign %4 = %5  : int
            var r3 = r4;//assign %3 = %4  : int
            var r11 = new WyJS.Integer(1);
            var r12 = r1.sub(r11);//sub %12 = %1, %11 : int
            var r10 = isAlive$Z9fFa7i$3P8c0$l$$B$72$U0kN$w5$i0kS$35$tK$73$j0FN$76$Z0(r0, r12, r2);//invoke %10 = (%0, %12, %2) 102_conway:isAlive : function(102_conway:Board,int,int) -> int
            var r13 = r3.add(r10);//add %13 = %3, %10 : int
            var r3 = r13;//assign %3 = %13  : int
            var r15 = new WyJS.Integer(1);
            var r16 = r1.sub(r15);//sub %16 = %1, %15 : int
            var r17 = new WyJS.Integer(1);
            var r18 = r2.add(r17);//add %18 = %2, %17 : int
            var r14 = isAlive$Z9fFa7i$3P8c0$l$$B$72$U0kN$w5$i0kS$35$tK$73$j0FN$76$Z0(r0, r16, r18);//invoke %14 = (%0, %16, %18) 102_conway:isAlive : function(102_conway:Board,int,int) -> int
            var r19 = r3.add(r14);//add %19 = %3, %14 : int
            var r3 = r19;//assign %3 = %19  : int
            var r21 = new WyJS.Integer(1);
            var r22 = r2.sub(r21);//sub %22 = %2, %21 : int
            var r20 = isAlive$Z9fFa7i$3P8c0$l$$B$72$U0kN$w5$i0kS$35$tK$73$j0FN$76$Z0(r0, r1, r22);//invoke %20 = (%0, %1, %22) 102_conway:isAlive : function(102_conway:Board,int,int) -> int
            var r23 = r3.add(r20);//add %23 = %3, %20 : int
            var r3 = r23;//assign %3 = %23  : int
            var r25 = new WyJS.Integer(1);
            var r26 = r2.add(r25);//add %26 = %2, %25 : int
            var r24 = isAlive$Z9fFa7i$3P8c0$l$$B$72$U0kN$w5$i0kS$35$tK$73$j0FN$76$Z0(r0, r1, r26);//invoke %24 = (%0, %1, %26) 102_conway:isAlive : function(102_conway:Board,int,int) -> int
            var r27 = r3.add(r24);//add %27 = %3, %24 : int
            var r3 = r27;//assign %3 = %27  : int
            var r29 = new WyJS.Integer(1);
            var r30 = r1.add(r29);//add %30 = %1, %29 : int
            var r31 = new WyJS.Integer(1);
            var r32 = r2.sub(r31);//sub %32 = %2, %31 : int
            var r28 = isAlive$Z9fFa7i$3P8c0$l$$B$72$U0kN$w5$i0kS$35$tK$73$j0FN$76$Z0(r0, r30, r32);//invoke %28 = (%0, %30, %32) 102_conway:isAlive : function(102_conway:Board,int,int) -> int
            var r33 = r3.add(r28);//add %33 = %3, %28 : int
            var r3 = r33;//assign %3 = %33  : int
            var r35 = new WyJS.Integer(1);
            var r36 = r1.add(r35);//add %36 = %1, %35 : int
            var r34 = isAlive$Z9fFa7i$3P8c0$l$$B$72$U0kN$w5$i0kS$35$tK$73$j0FN$76$Z0(r0, r36, r2);//invoke %34 = (%0, %36, %2) 102_conway:isAlive : function(102_conway:Board,int,int) -> int
            var r37 = r3.add(r34);//add %37 = %3, %34 : int
            var r3 = r37;//assign %3 = %37  : int
            var r39 = new WyJS.Integer(1);
            var r40 = r1.add(r39);//add %40 = %1, %39 : int
            var r41 = new WyJS.Integer(1);
            var r42 = r2.add(r41);//add %42 = %2, %41 : int
            var r38 = isAlive$Z9fFa7i$3P8c0$l$$B$72$U0kN$w5$i0kS$35$tK$73$j0FN$76$Z0(r0, r40, r42);//invoke %38 = (%0, %40, %42) 102_conway:isAlive : function(102_conway:Board,int,int) -> int
            var r43 = r3.add(r38);//add %43 = %3, %38 : int
            var r3 = r43;//assign %3 = %43  : int
            return r3;//return %3 : int
            return;
      }
   }
}

function isAlive$Z9fFa7i$3P8c0$l$$B$72$U0kN$w5$i0kS$35$tK$73$j0FN$76$Z0(r0, r1, r2){//function(102_conway:Board,int,int) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r3 = new WyJS.Integer(0);
            if(WyJS.lt(r1, r3, false)){
               control_flow_pc = 25;
               control_flow_repeat = true;
               continue outer;
            }
            var r4 = r0.fieldLoad("height");//fieldload %4 = %0 height : {[[bool]] cells,int height,int width}
            if(WyJS.lt(r1, r4, false)){
               control_flow_pc = 26;
               control_flow_repeat = true;
               continue outer;
            }
         case 25:
            var r5 = new WyJS.Integer(0);
            return r5;//return %5 : int
         case 26:
            var r6 = new WyJS.Integer(0);
            if(WyJS.lt(r2, r6, false)){
               control_flow_pc = 27;
               control_flow_repeat = true;
               continue outer;
            }
            var r7 = r0.fieldLoad("width");//fieldload %7 = %0 width : {[[bool]] cells,int height,int width}
            if(WyJS.lt(r2, r7, false)){
               control_flow_pc = 28;
               control_flow_repeat = true;
               continue outer;
            }
         case 27:
            var r8 = new WyJS.Integer(0);
            return r8;//return %8 : int
         case 28:
            var r9 = r0.fieldLoad("cells");//fieldload %9 = %0 cells : {[[bool]] cells,int height,int width}
            var r10 = r9.getValue(r1);
            var r11 = r10.getValue(r2);
            var r12 = true;
            if(r11 === r12){
               control_flow_pc = 29;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 30;
            control_flow_repeat = true;
            continue outer;//goto label30
         case 29:
            var r13 = new WyJS.Integer(1);
            return r13;//return %13 : int
            control_flow_pc = 31;
            control_flow_repeat = true;
            continue outer;//goto label31
         case 30:
            var r14 = new WyJS.Integer(0);
            return r14;//return %14 : int
         case 31:
            return;
      }
   }
}