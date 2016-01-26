function update$Y9bFXL1c$VF$w5$j0$Q$k3$d0kR$F6$U0VK$35$g0FP$F5$U0kB4$10kQ$35$m0$OF7(r0){//function(BoolList_Valid_3:Board) -> BoolList_Valid_3:Board
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r5 = r0.clone(new WyJS.Type.Array(new WyJS.Type.Bool()));//assign %5 = %0  : bool[][]
            var r1 = r5.clone(new WyJS.Type.Array(new WyJS.Type.Bool()));//assign %1 = %5  : bool[][]
            var r7 = new WyJS.Integer(0);
            var r6 = r7;//assign %6 = %7  : int
            var r2 = r6;//assign %2 = %6  : int
            control_flow_pc = -3;
            control_flow_repeat = true;
            break;
         case -3:
            var r18 = new WyJS.Integer(3);
            if(WyJS.gt(r2, r18, true)){
               control_flow_pc = 789;
               control_flow_repeat = true;
               continue outer;
            }
            var r20 = new WyJS.Integer(0);
            var r19 = r20;//assign %19 = %20  : int
            var r3 = r19;//assign %3 = %19  : int
            control_flow_pc = -4;
            control_flow_repeat = true;
            break;
         case -4:
            var r28 = new WyJS.Integer(3);
            if(WyJS.gt(r3, r28, true)){
               control_flow_pc = 793;
               control_flow_repeat = true;
               continue outer;
            }
            var r30 = countLiving$Z9fFa7i$3P8V1$10kQ$w5$g0$I$Z5$n0$S$w4$L0FN$k5$d0$O$w4$nJ$73$j0FN$76$Z0(r0, r2, r3);//invoke %30 = (%0, %2, %3) BoolList_Valid_3:countLiving : function(BoolList_Valid_3:Board,int,int) -> int
            var r29 = r30;//assign %29 = %30  : int
            var r4 = r29;//assign %4 = %29  : int
            var r31 = r0.getValue(r2);
            var r32 = r31.getValue(r3);
            var r33 = true;
            if(r32 === r33){
               control_flow_pc = 794;
               control_flow_repeat = true;
               break;
            }
            else{
               control_flow_pc = -5;
               control_flow_repeat = true;
               break;
            }
         case -5:
            control_flow_pc = 795;
            control_flow_repeat = true;
            continue outer;//goto label795
            control_flow_pc = -4;
            control_flow_repeat = true;
         case 794:
            if(WyJS.equals(r4, new WyJS.Integer(0), true)){
               control_flow_pc = 796;
               control_flow_repeat = true;
               continue outer;
            }
             else if(WyJS.equals(r4, new WyJS.Integer(1), true)){
               control_flow_pc = 796;
               control_flow_repeat = true;
               continue outer;
            }
             else if(WyJS.equals(r4, new WyJS.Integer(2), true)){
               control_flow_pc = 797;
               control_flow_repeat = true;
               continue outer;
            }
             else if(WyJS.equals(r4, new WyJS.Integer(3), true)){
               control_flow_pc = 797;
               control_flow_repeat = true;
               continue outer;
            }
            else{
               control_flow_pc = 795;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = -4;
            control_flow_repeat = true;
         case 796:
            var r34 = false;
            var r35 = false;
            r1.getValue(r2).setValue(r3, r35);
            control_flow_pc = 795;
            control_flow_repeat = true;
            continue outer;//goto label795
            control_flow_pc = -4;
            control_flow_repeat = true;
         case 797:
            control_flow_pc = 795;
            control_flow_repeat = true;
            continue outer;//goto label795
            control_flow_pc = -4;
            control_flow_repeat = true;
         case 795:
            var r36 = new WyJS.Integer(1);
            var r37 = r3.add(r36);//add %37 = %3, %36 : int
            var r3 = r37;//assign %3 = %37  : int
            control_flow_pc = -4;
            control_flow_repeat = true;
            break;
            control_flow_pc = -3;
            control_flow_repeat = true;
         case 793:
            var r38 = new WyJS.Integer(1);
            var r39 = r2.add(r38);//add %39 = %2, %38 : int
            var r2 = r39;//assign %2 = %39  : int
            control_flow_pc = -3;
            control_flow_repeat = true;
            break;
         case 789:
            return r1;//return %1 : bool[][]
            return;
      }
   }
}

function countLiving$Z9fFa7i$3P8V1$10kQ$w5$g0$I$Z5$n0$S$w4$L0FN$k5$d0$O$w4$nJ$73$j0FN$76$Z0(r0, r1, r2){//function(BoolList_Valid_3:Board,int,int) -> int
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
            var r5 = isAlive$Z9fFa7i$3P8V1$10kQ$w5$g0$I$Z5$n0$S$w4$L0FN$k5$d0$O$w4$nJ$73$j0FN$76$Z0(r0, r7, r9);//invoke %5 = (%0, %7, %9) BoolList_Valid_3:isAlive : function(BoolList_Valid_3:Board,int,int) -> int
            var r4 = r5;//assign %4 = %5  : int
            var r3 = r4;//assign %3 = %4  : int
            var r11 = new WyJS.Integer(1);
            var r12 = r1.sub(r11);//sub %12 = %1, %11 : int
            var r10 = isAlive$Z9fFa7i$3P8V1$10kQ$w5$g0$I$Z5$n0$S$w4$L0FN$k5$d0$O$w4$nJ$73$j0FN$76$Z0(r0, r12, r2);//invoke %10 = (%0, %12, %2) BoolList_Valid_3:isAlive : function(BoolList_Valid_3:Board,int,int) -> int
            var r13 = r3.add(r10);//add %13 = %3, %10 : int
            var r3 = r13;//assign %3 = %13  : int
            var r15 = new WyJS.Integer(1);
            var r16 = r1.sub(r15);//sub %16 = %1, %15 : int
            var r17 = new WyJS.Integer(1);
            var r18 = r2.add(r17);//add %18 = %2, %17 : int
            var r14 = isAlive$Z9fFa7i$3P8V1$10kQ$w5$g0$I$Z5$n0$S$w4$L0FN$k5$d0$O$w4$nJ$73$j0FN$76$Z0(r0, r16, r18);//invoke %14 = (%0, %16, %18) BoolList_Valid_3:isAlive : function(BoolList_Valid_3:Board,int,int) -> int
            var r19 = r3.add(r14);//add %19 = %3, %14 : int
            var r3 = r19;//assign %3 = %19  : int
            var r21 = new WyJS.Integer(1);
            var r22 = r2.sub(r21);//sub %22 = %2, %21 : int
            var r20 = isAlive$Z9fFa7i$3P8V1$10kQ$w5$g0$I$Z5$n0$S$w4$L0FN$k5$d0$O$w4$nJ$73$j0FN$76$Z0(r0, r1, r22);//invoke %20 = (%0, %1, %22) BoolList_Valid_3:isAlive : function(BoolList_Valid_3:Board,int,int) -> int
            var r23 = r3.add(r20);//add %23 = %3, %20 : int
            var r3 = r23;//assign %3 = %23  : int
            var r25 = new WyJS.Integer(1);
            var r26 = r2.add(r25);//add %26 = %2, %25 : int
            var r24 = isAlive$Z9fFa7i$3P8V1$10kQ$w5$g0$I$Z5$n0$S$w4$L0FN$k5$d0$O$w4$nJ$73$j0FN$76$Z0(r0, r1, r26);//invoke %24 = (%0, %1, %26) BoolList_Valid_3:isAlive : function(BoolList_Valid_3:Board,int,int) -> int
            var r27 = r3.add(r24);//add %27 = %3, %24 : int
            var r3 = r27;//assign %3 = %27  : int
            var r29 = new WyJS.Integer(1);
            var r30 = r1.add(r29);//add %30 = %1, %29 : int
            var r31 = new WyJS.Integer(1);
            var r32 = r2.sub(r31);//sub %32 = %2, %31 : int
            var r28 = isAlive$Z9fFa7i$3P8V1$10kQ$w5$g0$I$Z5$n0$S$w4$L0FN$k5$d0$O$w4$nJ$73$j0FN$76$Z0(r0, r30, r32);//invoke %28 = (%0, %30, %32) BoolList_Valid_3:isAlive : function(BoolList_Valid_3:Board,int,int) -> int
            var r33 = r3.add(r28);//add %33 = %3, %28 : int
            var r3 = r33;//assign %3 = %33  : int
            var r35 = new WyJS.Integer(1);
            var r36 = r1.add(r35);//add %36 = %1, %35 : int
            var r34 = isAlive$Z9fFa7i$3P8V1$10kQ$w5$g0$I$Z5$n0$S$w4$L0FN$k5$d0$O$w4$nJ$73$j0FN$76$Z0(r0, r36, r2);//invoke %34 = (%0, %36, %2) BoolList_Valid_3:isAlive : function(BoolList_Valid_3:Board,int,int) -> int
            var r37 = r3.add(r34);//add %37 = %3, %34 : int
            var r3 = r37;//assign %3 = %37  : int
            var r39 = new WyJS.Integer(1);
            var r40 = r1.add(r39);//add %40 = %1, %39 : int
            var r41 = new WyJS.Integer(1);
            var r42 = r2.add(r41);//add %42 = %2, %41 : int
            var r38 = isAlive$Z9fFa7i$3P8V1$10kQ$w5$g0$I$Z5$n0$S$w4$L0FN$k5$d0$O$w4$nJ$73$j0FN$76$Z0(r0, r40, r42);//invoke %38 = (%0, %40, %42) BoolList_Valid_3:isAlive : function(BoolList_Valid_3:Board,int,int) -> int
            var r43 = r3.add(r38);//add %43 = %3, %38 : int
            var r3 = r43;//assign %3 = %43  : int
            return r3;//return %3 : int
            return;
      }
   }
}

function isAlive$Z9fFa7i$3P8V1$10kQ$w5$g0$I$Z5$n0$S$w4$L0FN$k5$d0$O$w4$nJ$73$j0FN$76$Z0(r0, r1, r2){//function(BoolList_Valid_3:Board,int,int) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r6 = r0.length();//lengthof %6 = %0 : bool[][]
            var r5 = r6;//assign %5 = %6  : int
            var r3 = r5;//assign %3 = %5  : int
            var r7 = new WyJS.Integer(0);
            if(WyJS.lt(r1, r7, false)){
               control_flow_pc = 798;
               control_flow_repeat = true;
               continue outer;
            }
            if(WyJS.lt(r1, r3, false)){
               control_flow_pc = 799;
               control_flow_repeat = true;
               continue outer;
            }
         case 798:
            var r8 = new WyJS.Integer(0);
            return r8;//return %8 : int
         case 799:
            var r10 = new WyJS.Integer(0);
            var r11 = r0.getValue(r10);
            var r12 = r11.length();//lengthof %12 = %11 : bool[]
            var r9 = r12;//assign %9 = %12  : int
            var r4 = r9;//assign %4 = %9  : int
            var r13 = new WyJS.Integer(0);
            if(WyJS.lt(r2, r13, false)){
               control_flow_pc = 800;
               control_flow_repeat = true;
               continue outer;
            }
            if(WyJS.lt(r2, r4, false)){
               control_flow_pc = 801;
               control_flow_repeat = true;
               continue outer;
            }
         case 800:
            var r14 = new WyJS.Integer(0);
            return r14;//return %14 : int
         case 801:
            var r15 = r0.getValue(r1);
            var r16 = r15.getValue(r2);
            var r17 = true;
            if(r16 === r17){
               control_flow_pc = 802;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 803;
            control_flow_repeat = true;
            continue outer;//goto label803
         case 802:
            var r18 = new WyJS.Integer(1);
            return r18;//return %18 : int
            control_flow_pc = 804;
            control_flow_repeat = true;
            continue outer;//goto label804
         case 803:
            var r19 = new WyJS.Integer(0);
            return r19;//return %19 : int
         case 804:
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
            var r3 = false;
            var r4 = true;
            var r5 = false;
            var r6 = new WyJS.Array([r3, r4, r5], new WyJS.Type.Array(new WyJS.Type.Bool()));
            var r7 = false;
            var r8 = true;
            var r9 = false;
            var r10 = new WyJS.Array([r7, r8, r9], new WyJS.Type.Array(new WyJS.Type.Bool()));
            var r11 = false;
            var r12 = true;
            var r13 = false;
            var r14 = new WyJS.Array([r11, r12, r13], new WyJS.Type.Array(new WyJS.Type.Bool()));
            var r15 = new WyJS.Array([r6, r10, r14], new WyJS.Type.Array(new WyJS.Type.Array(new WyJS.Type.Bool())));
            var r2 = r15.clone(new WyJS.Type.Array(new WyJS.Type.Bool()));//assign %2 = %15  : bool[][]
            var r0 = r2.clone(new WyJS.Type.Array(new WyJS.Type.Bool()));//assign %0 = %2  : bool[][]
            var r17 = update$Y9bFXL1c$VF$w5$j0$Q$k3$d0kR$F6$U0VK$35$g0FP$F5$U0kB4$10kQ$35$m0$OF7(r0);//invoke %17 = (%0) BoolList_Valid_3:update : function(BoolList_Valid_3:Board) -> BoolList_Valid_3:Board
            var r16 = r17.clone(new WyJS.Type.Array(new WyJS.Type.Bool()));//assign %16 = %17  : bool[][]
            var r1 = r16.clone(new WyJS.Type.Array(new WyJS.Type.Bool()));//assign %1 = %16  : bool[][]
            var r18 = false;
            var r19 = true;
            var r20 = false;
            var r21 = new WyJS.Array([r18, r19, r20], new WyJS.Type.Array(new WyJS.Type.Bool()));
            var r22 = false;
            var r23 = true;
            var r24 = false;
            var r25 = new WyJS.Array([r22, r23, r24], new WyJS.Type.Array(new WyJS.Type.Bool()));
            var r26 = false;
            var r27 = true;
            var r28 = false;
            var r29 = new WyJS.Array([r26, r27, r28], new WyJS.Type.Array(new WyJS.Type.Bool()));
            var r30 = new WyJS.Array([r21, r25, r29], new WyJS.Type.Array(new WyJS.Type.Array(new WyJS.Type.Bool())));
            if(WyJS.equals(r0, r30, true)){
               control_flow_pc = 805;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 805:
            var r31 = false;
            var r32 = false;
            var r33 = false;
            var r34 = new WyJS.Array([r31, r32, r33], new WyJS.Type.Array(new WyJS.Type.Bool()));
            var r35 = false;
            var r36 = true;
            var r37 = false;
            var r38 = new WyJS.Array([r35, r36, r37], new WyJS.Type.Array(new WyJS.Type.Bool()));
            var r39 = false;
            var r40 = false;
            var r41 = false;
            var r42 = new WyJS.Array([r39, r40, r41], new WyJS.Type.Array(new WyJS.Type.Bool()));
            var r43 = new WyJS.Array([r34, r38, r42], new WyJS.Type.Array(new WyJS.Type.Array(new WyJS.Type.Bool())));
            if(WyJS.equals(r1, r43, true)){
               control_flow_pc = 806;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 806:
            return;
      }
   }
}

