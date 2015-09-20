function match$Z9dFaW1Fc_F9$R6$c0FP$k5$_0FT$w1$g0FN$s5$b0kA$33$I0kF$Z3$8O$B6$o0VR$Z5$i0kOE(r0, r1){//function(whiley/lang/ASCII:string,whiley/lang/ASCII:string) -> bool
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r2 = r0.length();//lengthof %2 = %0 : [int]
            var r3 = new WyJS.Integer(0);
            if(WyJS.lt(r2, r3, true)){
               control_flow_pc = 100;
               control_flow_repeat = true;
               continue outer;
            }
            var r4 = new WyJS.Integer(0);
            var r5 = r0.getValue(r4);
            var r6 = new WyJS.Integer(94);
            if(WyJS.equals(r5, r6, false)){
               control_flow_pc = 100;
               control_flow_repeat = true;
               continue outer;
            }
            var r8 = new WyJS.Integer(1);
            var r9 = r0.length();//lengthof %9 = %0 : [int]
            var r10 = r0.sublist(r8, r9);
            var r7 = matchHere$Z9dFaW1Fc_F9$R6$c0FP$k5$_0FT$w1$g0FN$s5$b0kA$33$I0kF$Z3$8O$B6$o0VR$Z5$i0kOE(r10, r1);//invoke %7 = (%10, %1) 007_regex:matchHere : function(whiley/lang/ASCII:string,whiley/lang/ASCII:string) -> bool
            return r7;//return %7 : bool
         case 100:
            var r11 = matchHere$Z9dFaW1Fc_F9$R6$c0FP$k5$_0FT$w1$g0FN$s5$b0kA$33$I0kF$Z3$8O$B6$o0VR$Z5$i0kOE(r0, r1);//invoke %11 = (%0, %1) 007_regex:matchHere : function(whiley/lang/ASCII:string,whiley/lang/ASCII:string) -> bool
            var r12 = true;
            if(r11 === r12){
               control_flow_pc = 101;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 102;
            control_flow_repeat = true;
            continue outer;//goto label102
         case 101:
            var r13 = true;
            return r13;//return %13 : bool
         case 102:
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case -2:
            var r14 = r1.length();//lengthof %14 = %1 : [int]
            var r15 = new WyJS.Integer(0);
            if(WyJS.lt(r14, r15, true)){
               control_flow_pc = 103;
               control_flow_repeat = true;
               continue outer;
            }
            var r16 = matchHere$Z9dFaW1Fc_F9$R6$c0FP$k5$_0FT$w1$g0FN$s5$b0kA$33$I0kF$Z3$8O$B6$o0VR$Z5$i0kOE(r0, r1);//invoke %16 = (%0, %1) 007_regex:matchHere : function(whiley/lang/ASCII:string,whiley/lang/ASCII:string) -> bool
            var r17 = true;
            if(r16 === r17){
               control_flow_pc = 104;
               control_flow_repeat = true;
               break;
            }
            else{
               control_flow_pc = -3;
               control_flow_repeat = true;
               break;
            }
         case -3:
            control_flow_pc = 105;
            control_flow_repeat = true;
            continue outer;//goto label105
            control_flow_pc = 106;
            control_flow_repeat = true;
            break;
         case 104:
            var r18 = true;
            return r18;//return %18 : bool
            control_flow_pc = 106;
            control_flow_repeat = true;
            continue outer;//goto label106
            control_flow_pc = 106;
            control_flow_repeat = true;
            break;
         case 105:
            var r19 = new WyJS.Integer(1);
            var r20 = r1.length();//lengthof %20 = %1 : [int]
            var r21 = r1.sublist(r19, r20);
            var r1 = r21.clone(new WyJS.Type.Int());//assign %1 = %21  : [int]
            control_flow_pc = 106;
            control_flow_repeat = true;
            break;
         case 106:
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case 103:
            var r22 = false;
            return r22;//return %22 : bool
            return;
      }
   }
}

function matchHere$Z9dFaW1Fc_F9$R6$c0FP$k5$_0FT$w1$g0FN$s5$b0kA$33$I0kF$Z3$8O$B6$o0VR$Z5$i0kOE(r0, r1){//function(whiley/lang/ASCII:string,whiley/lang/ASCII:string) -> bool
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r2 = r0.length();//lengthof %2 = %0 : [int]
            var r3 = new WyJS.Integer(0);
            if(WyJS.equals(r2, r3, false)){
               control_flow_pc = 107;
               control_flow_repeat = true;
               continue outer;
            }
            var r4 = true;
            return r4;//return %4 : bool
            control_flow_pc = 108;
            control_flow_repeat = true;
            continue outer;//goto label108
         case 107:
            var r5 = r0.length();//lengthof %5 = %0 : [int]
            var r6 = new WyJS.Integer(1);
            if(WyJS.lt(r5, r6, true)){
               control_flow_pc = 109;
               control_flow_repeat = true;
               continue outer;
            }
            var r7 = new WyJS.Integer(1);
            var r8 = r0.getValue(r7);
            var r9 = new WyJS.Integer(42);
            if(WyJS.equals(r8, r9, false)){
               control_flow_pc = 109;
               control_flow_repeat = true;
               continue outer;
            }
            var r11 = new WyJS.Integer(0);
            var r12 = r0.getValue(r11);
            var r13 = new WyJS.Integer(2);
            var r14 = r0.length();//lengthof %14 = %0 : [int]
            var r15 = r0.sublist(r13, r14);
            var r10 = matchStar$_9fF5Xc$3P8Z1$r0$P$Z5$g0FO$Z6$j$$Q$35$i0kO$w1$00kJ$B3$80FH3$Y0$P$35$mpH74$i2$o$7C$N2Vm$7E$T0$q$7B$R2Vn$s4$11Vd$N7$H1VZB$a2$u$FD$H2$r$sgz(r12, r15, r1);//invoke %10 = (%12, %15, %1) 007_regex:matchStar : function(whiley/lang/ASCII:char,whiley/lang/ASCII:string,whiley/lang/ASCII:string) -> bool
            return r10;//return %10 : bool
            control_flow_pc = 108;
            control_flow_repeat = true;
            continue outer;//goto label108
         case 109:
            var r16 = r0.length();//lengthof %16 = %0 : [int]
            var r17 = new WyJS.Integer(1);
            if(WyJS.equals(r16, r17, false)){
               control_flow_pc = 110;
               control_flow_repeat = true;
               continue outer;
            }
            var r18 = new WyJS.Integer(0);
            var r19 = r0.getValue(r18);
            var r20 = new WyJS.Integer(36);
            if(WyJS.equals(r19, r20, false)){
               control_flow_pc = 110;
               control_flow_repeat = true;
               continue outer;
            }
            var r21 = r1.length();//lengthof %21 = %1 : [int]
            var r22 = new WyJS.Integer(0);
            if(WyJS.equals(r21, r22, true)){
               control_flow_pc = 111;
               control_flow_repeat = true;
               continue outer;
            }
            var r23 = false;
            control_flow_pc = 112;
            control_flow_repeat = true;
            continue outer;//goto label112
         case 111:
            var r23 = true;
         case 112:
            return r23;//return %23 : bool
            control_flow_pc = 108;
            control_flow_repeat = true;
            continue outer;//goto label108
         case 110:
            var r24 = r1.length();//lengthof %24 = %1 : [int]
            var r25 = new WyJS.Integer(0);
            if(WyJS.lt(r24, r25, true)){
               control_flow_pc = 113;
               control_flow_repeat = true;
               continue outer;
            }
            var r26 = new WyJS.Integer(0);
            var r27 = r0.getValue(r26);
            var r28 = new WyJS.Integer(46);
            if(WyJS.equals(r27, r28, true)){
               control_flow_pc = 114;
               control_flow_repeat = true;
               continue outer;
            }
            var r29 = new WyJS.Integer(0);
            var r30 = r0.getValue(r29);
            var r31 = new WyJS.Integer(0);
            var r32 = r1.getValue(r31);
            if(WyJS.equals(r30, r32, false)){
               control_flow_pc = 113;
               control_flow_repeat = true;
               continue outer;
            }
         case 114:
            var r34 = new WyJS.Integer(1);
            var r35 = r0.length();//lengthof %35 = %0 : [int]
            var r36 = r0.sublist(r34, r35);
            var r37 = new WyJS.Integer(1);
            var r38 = r1.length();//lengthof %38 = %1 : [int]
            var r39 = r1.sublist(r37, r38);
            var r33 = matchHere$Z9dFaW1Fc_F9$R6$c0FP$k5$_0FT$w1$g0FN$s5$b0kA$33$I0kF$Z3$8O$B6$o0VR$Z5$i0kOE(r36, r39);//invoke %33 = (%36, %39) 007_regex:matchHere : function(whiley/lang/ASCII:string,whiley/lang/ASCII:string) -> bool
            return r33;//return %33 : bool
            control_flow_pc = 108;
            control_flow_repeat = true;
            continue outer;//goto label108
         case 113:
            var r40 = false;
            return r40;//return %40 : bool
         case 108:
            return;
      }
   }
}

function matchStar$_9fF5Xc$3P8Z1$r0$P$Z5$g0FO$Z6$j$$Q$35$i0kO$w1$00kJ$B3$80FH3$Y0$P$35$mpH74$i2$o$7C$N2Vm$7E$T0$q$7B$R2Vn$s4$11Vd$N7$H1VZB$a2$u$FD$H2$r$sgz(r0, r1, r2){//function(whiley/lang/ASCII:char,whiley/lang/ASCII:string,whiley/lang/ASCII:string) -> bool
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r3 = matchHere$Z9dFaW1Fc_F9$R6$c0FP$k5$_0FT$w1$g0FN$s5$b0kA$33$I0kF$Z3$8O$B6$o0VR$Z5$i0kOE(r1, r2);//invoke %3 = (%1, %2) 007_regex:matchHere : function(whiley/lang/ASCII:string,whiley/lang/ASCII:string) -> bool
            var r4 = true;
            if(r3 === r4){
               control_flow_pc = 115;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 116;
            control_flow_repeat = true;
            continue outer;//goto label116
         case 115:
            var r5 = true;
            return r5;//return %5 : bool
         case 116:
            control_flow_pc = -4;
            control_flow_repeat = true;
            break;
         case -4:
            var r6 = r2.length();//lengthof %6 = %2 : [int]
            var r7 = new WyJS.Integer(0);
            if(WyJS.equals(r6, r7, true)){
               control_flow_pc = 117;
               control_flow_repeat = true;
               continue outer;
            }
            var r8 = new WyJS.Integer(0);
            var r9 = r2.getValue(r8);
            if(WyJS.equals(r9, r0, true)){
               control_flow_pc = 118;
               control_flow_repeat = true;
               break;
            }
            else{
               control_flow_pc = -5;
               control_flow_repeat = true;
               break;
            }
         case -5:
            var r10 = new WyJS.Integer(46);
            if(WyJS.equals(r0, r10, false)){
               control_flow_pc = 117;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 121;
            control_flow_repeat = true;
            break;
         case 118:
            var r11 = matchHere$Z9dFaW1Fc_F9$R6$c0FP$k5$_0FT$w1$g0FN$s5$b0kA$33$I0kF$Z3$8O$B6$o0VR$Z5$i0kOE(r1, r2);//invoke %11 = (%1, %2) 007_regex:matchHere : function(whiley/lang/ASCII:string,whiley/lang/ASCII:string) -> bool
            var r12 = true;
            if(r11 === r12){
               control_flow_pc = 119;
               control_flow_repeat = true;
               break;
            }
            else{
               control_flow_pc = -6;
               control_flow_repeat = true;
               break;
            }
         case -6:
            control_flow_pc = 120;
            control_flow_repeat = true;
            continue outer;//goto label120
            control_flow_pc = 121;
            control_flow_repeat = true;
            break;
         case 119:
            var r13 = true;
            return r13;//return %13 : bool
            control_flow_pc = 121;
            control_flow_repeat = true;
            continue outer;//goto label121
            control_flow_pc = 121;
            control_flow_repeat = true;
            break;
         case 120:
            var r14 = new WyJS.Integer(1);
            var r15 = r2.length();//lengthof %15 = %2 : [int]
            var r16 = r2.sublist(r14, r15);
            var r2 = r16.clone(new WyJS.Type.Int());//assign %2 = %16  : [int]
            control_flow_pc = 121;
            control_flow_repeat = true;
            break;
         case 121:
            control_flow_pc = -4;
            control_flow_repeat = true;
            break;
         case 117:
            var r17 = matchHere$Z9dFaW1Fc_F9$R6$c0FP$k5$_0FT$w1$g0FN$s5$b0kA$33$I0kF$Z3$8O$B6$o0VR$Z5$i0kOE(r1, r2);//invoke %17 = (%1, %2) 007_regex:matchHere : function(whiley/lang/ASCII:string,whiley/lang/ASCII:string) -> bool
            var r18 = true;
            if(r17 === r18){
               control_flow_pc = 122;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 123;
            control_flow_repeat = true;
            continue outer;//goto label123
         case 122:
            var r19 = true;
            return r19;//return %19 : bool
         case 123:
            var r20 = false;
            return r20;//return %20 : bool
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
            var r1 = new WyJS.List([new WyJS.Integer(97)], new WyJS.Type.List(new WyJS.Type.Int()));
            var r2 = new WyJS.List([new WyJS.Integer(97), new WyJS.Integer(97)], new WyJS.Type.List(new WyJS.Type.Int()));
            var r0 = match$Z9dFaW1Fc_F9$R6$c0FP$k5$_0FT$w1$g0FN$s5$b0kA$33$I0kF$Z3$8O$B6$o0VR$Z5$i0kOE(r1, r2);//invoke %0 = (%1, %2) 007_regex:match : function(whiley/lang/ASCII:string,whiley/lang/ASCII:string) -> bool
            var r3 = true;
            if(r0 === r3){
               control_flow_pc = 124;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 124:
            var r5 = new WyJS.List([new WyJS.Integer(98)], new WyJS.Type.List(new WyJS.Type.Int()));
            var r6 = new WyJS.List([new WyJS.Integer(97)], new WyJS.Type.List(new WyJS.Type.Int()));
            var r4 = match$Z9dFaW1Fc_F9$R6$c0FP$k5$_0FT$w1$g0FN$s5$b0kA$33$I0kF$Z3$8O$B6$o0VR$Z5$i0kOE(r5, r6);//invoke %4 = (%5, %6) 007_regex:match : function(whiley/lang/ASCII:string,whiley/lang/ASCII:string) -> bool
            var r7 = true;
            if(r4 === r7){
               control_flow_pc = 125;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 126;
            control_flow_repeat = true;
            continue outer;//goto label126
         case 125:
            throw {name: 'Assert Failed', message: 'fail'}
         case 126:
            var r9 = new WyJS.List([new WyJS.Integer(98), new WyJS.Integer(42)], new WyJS.Type.List(new WyJS.Type.Int()));
            var r10 = new WyJS.List([new WyJS.Integer(97), new WyJS.Integer(98), new WyJS.Integer(99)], new WyJS.Type.List(new WyJS.Type.Int()));
            var r8 = match$Z9dFaW1Fc_F9$R6$c0FP$k5$_0FT$w1$g0FN$s5$b0kA$33$I0kF$Z3$8O$B6$o0VR$Z5$i0kOE(r9, r10);//invoke %8 = (%9, %10) 007_regex:match : function(whiley/lang/ASCII:string,whiley/lang/ASCII:string) -> bool
            var r11 = true;
            if(r8 === r11){
               control_flow_pc = 127;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 127:
            var r13 = new WyJS.List([new WyJS.Integer(98), new WyJS.Integer(42), new WyJS.Integer(97)], new WyJS.Type.List(new WyJS.Type.Int()));
            var r14 = new WyJS.List([new WyJS.Integer(99), new WyJS.Integer(97), new WyJS.Integer(98), new WyJS.Integer(97), new WyJS.Integer(98), new WyJS.Integer(97), new WyJS.Integer(98), new WyJS.Integer(99), new WyJS.Integer(97), new WyJS.Integer(98), new WyJS.Integer(98), new WyJS.Integer(99), new WyJS.Integer(99), new WyJS.Integer(98), new WyJS.Integer(97)], new WyJS.Type.List(new WyJS.Type.Int()));
            var r12 = match$Z9dFaW1Fc_F9$R6$c0FP$k5$_0FT$w1$g0FN$s5$b0kA$33$I0kF$Z3$8O$B6$o0VR$Z5$i0kOE(r13, r14);//invoke %12 = (%13, %14) 007_regex:match : function(whiley/lang/ASCII:string,whiley/lang/ASCII:string) -> bool
            var r15 = true;
            if(r12 === r15){
               control_flow_pc = 128;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 128:
            var r17 = new WyJS.List([new WyJS.Integer(98), new WyJS.Integer(99), new WyJS.Integer(42), new WyJS.Integer(97), new WyJS.Integer(99)], new WyJS.Type.List(new WyJS.Type.Int()));
            var r18 = new WyJS.List([new WyJS.Integer(99), new WyJS.Integer(97), new WyJS.Integer(98), new WyJS.Integer(97), new WyJS.Integer(98), new WyJS.Integer(97), new WyJS.Integer(98), new WyJS.Integer(99), new WyJS.Integer(97), new WyJS.Integer(98), new WyJS.Integer(98), new WyJS.Integer(99), new WyJS.Integer(99), new WyJS.Integer(98), new WyJS.Integer(97)], new WyJS.Type.List(new WyJS.Type.Int()));
            var r16 = match$Z9dFaW1Fc_F9$R6$c0FP$k5$_0FT$w1$g0FN$s5$b0kA$33$I0kF$Z3$8O$B6$o0VR$Z5$i0kOE(r17, r18);//invoke %16 = (%17, %18) 007_regex:match : function(whiley/lang/ASCII:string,whiley/lang/ASCII:string) -> bool
            var r19 = true;
            if(r16 === r19){
               control_flow_pc = 129;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 130;
            control_flow_repeat = true;
            continue outer;//goto label130
         case 129:
            throw {name: 'Assert Failed', message: 'fail'}
         case 130:
            var r21 = new WyJS.List([new WyJS.Integer(46)], new WyJS.Type.List(new WyJS.Type.Int()));
            var r22 = new WyJS.List([new WyJS.Integer(97), new WyJS.Integer(98), new WyJS.Integer(98)], new WyJS.Type.List(new WyJS.Type.Int()));
            var r20 = match$Z9dFaW1Fc_F9$R6$c0FP$k5$_0FT$w1$g0FN$s5$b0kA$33$I0kF$Z3$8O$B6$o0VR$Z5$i0kOE(r21, r22);//invoke %20 = (%21, %22) 007_regex:match : function(whiley/lang/ASCII:string,whiley/lang/ASCII:string) -> bool
            var r23 = true;
            if(r20 === r23){
               control_flow_pc = 131;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 131:
            var r25 = new WyJS.List([new WyJS.Integer(97), new WyJS.Integer(98), new WyJS.Integer(42), new WyJS.Integer(97), new WyJS.Integer(36)], new WyJS.Type.List(new WyJS.Type.Int()));
            var r26 = new WyJS.List([new WyJS.Integer(97), new WyJS.Integer(98), new WyJS.Integer(99), new WyJS.Integer(97), new WyJS.Integer(98), new WyJS.Integer(97)], new WyJS.Type.List(new WyJS.Type.Int()));
            var r24 = match$Z9dFaW1Fc_F9$R6$c0FP$k5$_0FT$w1$g0FN$s5$b0kA$33$I0kF$Z3$8O$B6$o0VR$Z5$i0kOE(r25, r26);//invoke %24 = (%25, %26) 007_regex:match : function(whiley/lang/ASCII:string,whiley/lang/ASCII:string) -> bool
            var r27 = true;
            if(r24 === r27){
               control_flow_pc = 132;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 132:
            return;
      }
   }
}

