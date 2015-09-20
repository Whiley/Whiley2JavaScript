function parseInt$NcH9ZWocJ53iFAWJ$sD$F2Vo$VC$92Vw$s4$N2Vk$kC$D2VM$77$a1VW$78$Hm$ND$c2$t$7C$R2VnFWBMA02$c$7B$Z2Vt$cB$ZQ$kC$12$ua$(r0, r1){//function(int,whiley/lang/ASCII:string) -> (int|null,Parser:nat)
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r3 = r0;//assign %3 = %0  : int
            var r2 = r3;//assign %2 = %3  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case -2:
            var r4 = r1.length();//lengthof %4 = %1 : [int]
            if(WyJS.gt(r0, r4, true)){
               control_flow_pc = 59;
               control_flow_repeat = true;
               continue outer;
            }
            var r6 = r1.getValue(r0);
            var r5 = isDigit$Z9bF59$WL1d$kS$V5$d0$Q$J5$t0kA$k5$W0VQ$R5$j$FF$B4$20FH$Z30kN$V5$W0VR(r6);//invoke %5 = (%6) whiley/lang/ASCII:isDigit : function(whiley/lang/ASCII:char) -> bool
            var r7 = true;
            if(r5 === r7){
               control_flow_pc = 60;
               control_flow_repeat = true;
               break;
            }
            else{
               control_flow_pc = -3;
               control_flow_repeat = true;
               break;
            }
         case -3:
            control_flow_pc = 59;
            control_flow_repeat = true;
            continue outer;//goto label59
            control_flow_pc = 60;
            control_flow_repeat = true;
            break;
         case 60:
            var r8 = new WyJS.Integer(1);
            var r9 = r0.add(r8);//add %9 = %0, %8 : int
            var r0 = r9;//assign %0 = %9  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case 59:
            if(WyJS.equals(r0, r2, false)){
               control_flow_pc = 61;
               control_flow_repeat = true;
               continue outer;
            }
            var r10 = null;
            var r11 = new WyJS.Tuple([r10, r0], new WyJS.Type.Tuple([new WyJS.Type.Null(), new WyJS.Type.Int()]));
            return r11;//return %11 : (int|null,int)
         case 61:
            var r13 = r1.sublist(r2, r0);
            var r12 = parse$a9bF5J7J0WL1d$kS$V5$d0$Q$J5$t0kA$k5$W0VQ$R5$j$FF$B4$20FH$ZZ0kR$F6$m0FP$s5$bCWAB(r13);//invoke %12 = (%13) whiley/lang/Int:parse : function(whiley/lang/ASCII:string) -> null|int
            var r14 = new WyJS.Tuple([r12, r0], new WyJS.Type.Tuple([new WyJS.Type.Union([new WyJS.Type.Null(), new WyJS.Type.Int()]), new WyJS.Type.Int()]));
            return r14;//return %14 : (int|null,int)
            return;
      }
   }
}

function parseInts$b9bF5J7J0WL1d$kS$V5$d0$Q$J5$t0kA$k5$W0VQ$R5$j$FF$B4$20FH$ZZ0kR$F6$m0FP$s5$bC0D5aA$(r0){//function(whiley/lang/ASCII:string) -> null|[int]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r5 = new WyJS.List([], new WyJS.Type.List(new WyJS.Type.Void()));
            var r4 = r5.clone(new WyJS.Type.Void());//assign %4 = %5  : [void]
            var r1 = r4.clone(new WyJS.Type.Int());//assign %1 = %4  : [int]
            var r8 = new WyJS.Integer(0);
            var r7 = skipWhiteSpace$Z9dFXd_V0$J$35$m0kR$J5$mC$s5$W0$SFc_F9$R6$c0FP$k5$_0FT$w1$g0FN$s5$b0kA$33$I0kF$Z3$8O$B6$o0VR$Z5$i0kO(r8, r0);//invoke %7 = (%8, %0) Parser:skipWhiteSpace : function(Parser:nat,whiley/lang/ASCII:string) -> Parser:nat
            var r6 = r7;//assign %6 = %7  : int
            var r2 = r6;//assign %2 = %6  : int
            control_flow_pc = -4;
            control_flow_repeat = true;
            break;
         case -4:
            var r9 = r0.length();//lengthof %9 = %0 : [int]
            if(WyJS.gt(r2, r9, true)){
               control_flow_pc = 62;
               control_flow_repeat = true;
               continue outer;
            }
            var r11 = parseInt$NcH9ZWocJ53iFAWJ$sD$F2Vo$VC$92Vw$s4$N2Vk$kC$D2VM$77$a1VW$78$Hm$ND$c2$t$7C$R2VnFWBMA02$c$7B$Z2Vt$cB$ZQ$kC$12$ua$(r2, r0);//invoke %11 = (%2, %0) Parser:parseInt : function(int,whiley/lang/ASCII:string) -> (int|null,Parser:nat)
            var r3 = r11.tupleLoad(0);
            var r2 = r11.tupleLoad(1);
            if(WyJS.is(r3, new WyJS.Type.Null())){
               control_flow_pc = 63;
               control_flow_repeat = true;
               break;
            }
            else{
               control_flow_pc = -5;
               control_flow_repeat = true;
               break;
            }
         case -5:
            var r12 = new WyJS.List([r3], new WyJS.Type.List(new WyJS.Type.Int()));
            var r13 = r1.append(r12);
            var r1 = r13.clone(new WyJS.Type.Int());//assign %1 = %13  : [int]
            var r14 = skipWhiteSpace$Z9dFXd_V0$J$35$m0kR$J5$mC$s5$W0$SFc_F9$R6$c0FP$k5$_0FT$w1$g0FN$s5$b0kA$33$I0kF$Z3$8O$B6$o0VR$Z5$i0kO(r2, r0);//invoke %14 = (%2, %0) Parser:skipWhiteSpace : function(Parser:nat,whiley/lang/ASCII:string) -> Parser:nat
            var r2 = r14;//assign %2 = %14  : int
            control_flow_pc = 64;
            control_flow_repeat = true;
            continue outer;//goto label64
            control_flow_pc = 64;
            control_flow_repeat = true;
            break;
         case 63:
            var r15 = null;
            return r15;//return %15 : null|[int]
            control_flow_pc = 64;
            control_flow_repeat = true;
            break;
         case 64:
            control_flow_pc = -4;
            control_flow_repeat = true;
            break;
         case 62:
            return r1;//return %1 : null|[int]
            return;
      }
   }
}

function parseIntLines$Ncm8Z041KFc_F9$R6$c0FP$k5$_0FT$w1$g0FN$s5$b0kA$33$I0kF$Z3$8O$B6$o0VR$Z5$i0kOIVYWWYlt12(r0){//function(whiley/lang/ASCII:string) -> null|[[int]]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r6 = new WyJS.List([], new WyJS.Type.List(new WyJS.Type.Void()));
            var r5 = r6.clone(new WyJS.Type.Void());//assign %5 = %6  : [void]
            var r1 = r5.clone(new WyJS.Type.List(new WyJS.Type.Int()));//assign %1 = %5  : [[int]]
            var r9 = new WyJS.Integer(0);
            var r8 = skipWhiteSpace$Z9dFXd_V0$J$35$m0kR$J5$mC$s5$W0$SFc_F9$R6$c0FP$k5$_0FT$w1$g0FN$s5$b0kA$33$I0kF$Z3$8O$B6$o0VR$Z5$i0kO(r9, r0);//invoke %8 = (%9, %0) Parser:skipWhiteSpace : function(Parser:nat,whiley/lang/ASCII:string) -> Parser:nat
            var r7 = r8;//assign %7 = %8  : int
            var r2 = r7;//assign %2 = %7  : int
            control_flow_pc = -6;
            control_flow_repeat = true;
            break;
         case -6:
            var r10 = r0.length();//lengthof %10 = %0 : [int]
            if(WyJS.gt(r2, r10, true)){
               control_flow_pc = 65;
               control_flow_repeat = true;
               continue outer;
            }
            var r12 = new WyJS.List([], new WyJS.Type.List(new WyJS.Type.Void()));
            var r11 = r12.clone(new WyJS.Type.Void());//assign %11 = %12  : [void]
            var r3 = r11.clone(new WyJS.Type.Int());//assign %3 = %11  : [int]
            control_flow_pc = -7;
            control_flow_repeat = true;
            break;
         case -7:
            var r14 = r0.getValue(r2);
            var r13 = isWhiteSpace$Z9bF59$WL1d$kS$V5$d0$Q$J5$t0kA$k5$W0VQ$R5$j$FF$B4$20FH$Z30kN$V5$W0VR(r14);//invoke %13 = (%14) Parser:isWhiteSpace : function(whiley/lang/ASCII:char) -> bool
            var r15 = true;
            if(r13 === r15){
               control_flow_pc = 66;
               control_flow_repeat = true;
               continue outer;
            }
            var r17 = parseInt$NcH9ZWocJ53iFAWJ$sD$F2Vo$VC$92Vw$s4$N2Vk$kC$D2VM$77$a1VW$78$Hm$ND$c2$t$7C$R2VnFWBMA02$c$7B$Z2Vt$cB$ZQ$kC$12$ua$(r2, r0);//invoke %17 = (%2, %0) Parser:parseInt : function(int,whiley/lang/ASCII:string) -> (int|null,Parser:nat)
            var r4 = r17.tupleLoad(0);
            var r2 = r17.tupleLoad(1);
            if(WyJS.is(r4, new WyJS.Type.Null())){
               control_flow_pc = 67;
               control_flow_repeat = true;
               break;
            }
            else{
               control_flow_pc = -8;
               control_flow_repeat = true;
               break;
            }
         case -8:
            var r18 = new WyJS.List([r4], new WyJS.Type.List(new WyJS.Type.Int()));
            var r19 = r3.append(r18);
            var r3 = r19.clone(new WyJS.Type.Int());//assign %3 = %19  : [int]
            var r20 = skipLineSpace$Z9dFXd_V0$J$35$m0kR$J5$mC$s5$W0$SFc_F9$R6$c0FP$k5$_0FT$w1$g0FN$s5$b0kA$33$I0kF$Z3$8O$B6$o0VR$Z5$i0kO(r2, r0);//invoke %20 = (%2, %0) Parser:skipLineSpace : function(Parser:nat,whiley/lang/ASCII:string) -> Parser:nat
            var r2 = r20;//assign %2 = %20  : int
            control_flow_pc = 68;
            control_flow_repeat = true;
            continue outer;//goto label68
            control_flow_pc = 68;
            control_flow_repeat = true;
            break;
         case 67:
            var r21 = null;
            return r21;//return %21 : null|[[int]]
            control_flow_pc = 68;
            control_flow_repeat = true;
            break;
         case 68:
            control_flow_pc = -7;
            control_flow_repeat = true;
            break;
            control_flow_pc = 66;
            control_flow_repeat = true;
            break;
         case 66:
            var r22 = new WyJS.List([r3], new WyJS.Type.List(new WyJS.Type.List(new WyJS.Type.Int())));
            var r23 = r1.append(r22);
            var r1 = r23.clone(new WyJS.Type.List(new WyJS.Type.Int()));//assign %1 = %23  : [[int]]
            var r24 = skipWhiteSpace$Z9dFXd_V0$J$35$m0kR$J5$mC$s5$W0$SFc_F9$R6$c0FP$k5$_0FT$w1$g0FN$s5$b0kA$33$I0kF$Z3$8O$B6$o0VR$Z5$i0kO(r2, r0);//invoke %24 = (%2, %0) Parser:skipWhiteSpace : function(Parser:nat,whiley/lang/ASCII:string) -> Parser:nat
            var r2 = r24;//assign %2 = %24  : int
            control_flow_pc = -6;
            control_flow_repeat = true;
            break;
         case 65:
            return r1;//return %1 : null|[[int]]
            return;
      }
   }
}

function parseReal$OcH9ZWocJ53P8N$$4$W0VR$B6$_0VR2$i0FN$FMAWJ$sD$F2Vo$VC$92Vw$s4$N2Vk$kC$D2VM$77$a1VW$78$Hm$ND$c2$t$7C$R2VnFWRNRW8VGsE(r0, r1){//function(Parser:nat,whiley/lang/ASCII:string) -> (null|real,int)
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r3 = r0;//assign %3 = %0  : int
            var r2 = r3;//assign %2 = %3  : int
            control_flow_pc = -9;
            control_flow_repeat = true;
            break;
         case -9:
            var r4 = r1.length();//lengthof %4 = %1 : [int]
            if(WyJS.gt(r0, r4, true)){
               control_flow_pc = 69;
               control_flow_repeat = true;
               continue outer;
            }
            var r6 = r1.getValue(r0);
            var r5 = isDigit$Z9bF59$WL1d$kS$V5$d0$Q$J5$t0kA$k5$W0VQ$R5$j$FF$B4$20FH$Z30kN$V5$W0VR(r6);//invoke %5 = (%6) whiley/lang/ASCII:isDigit : function(whiley/lang/ASCII:char) -> bool
            var r7 = true;
            if(r5 === r7){
               control_flow_pc = 70;
               control_flow_repeat = true;
               break;
            }
            else{
               control_flow_pc = -10;
               control_flow_repeat = true;
               break;
            }
         case -10:
            var r8 = r1.getValue(r0);
            var r9 = new WyJS.Integer(46);
            if(WyJS.equals(r8, r9, false)){
               control_flow_pc = 69;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 70;
            control_flow_repeat = true;
            break;
         case 70:
            var r10 = new WyJS.Integer(1);
            var r11 = r0.add(r10);//add %11 = %0, %10 : int
            var r0 = r11;//assign %0 = %11  : int
            control_flow_pc = -9;
            control_flow_repeat = true;
            break;
         case 69:
            if(WyJS.equals(r0, r2, false)){
               control_flow_pc = 71;
               control_flow_repeat = true;
               continue outer;
            }
            var r12 = null;
            var r13 = new WyJS.Tuple([r12, r0], new WyJS.Type.Tuple([new WyJS.Type.Null(), new WyJS.Type.Int()]));
            return r13;//return %13 : (null|real,int)
         case 71:
            var r15 = r1.sublist(r2, r0);
            var r14 = parse$a9bF5J7J0WL1d$kS$V5$d0$Q$J5$t0kA$k5$W0VQ$R5$j$FF$B4$20FH$ZZ0kR$F6$m0FP$s5$bC0B1z(r15);//invoke %14 = (%15) whiley/lang/Real:parse : function(whiley/lang/ASCII:string) -> null|real
            var r16 = new WyJS.Tuple([r14, r0], new WyJS.Type.Tuple([new WyJS.Type.Union([new WyJS.Type.Null(), new WyJS.Type.Real()]), new WyJS.Type.Int()]));
            return r16;//return %16 : (null|real,int)
            return;
      }
   }
}

function parseReals$b9bF5J7J0WL1d$kS$V5$d0$Q$J5$t0kA$k5$W0VQ$R5$j$FF$B4$20FH$ZZ0kR$F6$m0FP$s5$bC0D55B1E(r0){//function(whiley/lang/ASCII:string) -> null|[real]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r5 = new WyJS.List([], new WyJS.Type.List(new WyJS.Type.Void()));
            var r4 = r5.clone(new WyJS.Type.Void());//assign %4 = %5  : [void]
            var r1 = r4.clone(new WyJS.Type.Real());//assign %1 = %4  : [real]
            var r8 = new WyJS.Integer(0);
            var r7 = skipWhiteSpace$Z9dFXd_V0$J$35$m0kR$J5$mC$s5$W0$SFc_F9$R6$c0FP$k5$_0FT$w1$g0FN$s5$b0kA$33$I0kF$Z3$8O$B6$o0VR$Z5$i0kO(r8, r0);//invoke %7 = (%8, %0) Parser:skipWhiteSpace : function(Parser:nat,whiley/lang/ASCII:string) -> Parser:nat
            var r6 = r7;//assign %6 = %7  : int
            var r2 = r6;//assign %2 = %6  : int
            control_flow_pc = -11;
            control_flow_repeat = true;
            break;
         case -11:
            var r9 = r0.length();//lengthof %9 = %0 : [int]
            if(WyJS.gt(r2, r9, true)){
               control_flow_pc = 72;
               control_flow_repeat = true;
               continue outer;
            }
            var r11 = parseReal$OcH9ZWocJ53P8N$$4$W0VR$B6$_0VR2$i0FN$FMAWJ$sD$F2Vo$VC$92Vw$s4$N2Vk$kC$D2VM$77$a1VW$78$Hm$ND$c2$t$7C$R2VnFWRNRW8VGsE(r2, r0);//invoke %11 = (%2, %0) Parser:parseReal : function(Parser:nat,whiley/lang/ASCII:string) -> (null|real,int)
            var r3 = r11.tupleLoad(0);
            var r2 = r11.tupleLoad(1);
            if(WyJS.is(r3, new WyJS.Type.Null())){
               control_flow_pc = 73;
               control_flow_repeat = true;
               break;
            }
            else{
               control_flow_pc = -12;
               control_flow_repeat = true;
               break;
            }
         case -12:
            var r12 = new WyJS.List([r3], new WyJS.Type.List(new WyJS.Type.Real()));
            var r13 = r1.append(r12);
            var r1 = r13.clone(new WyJS.Type.Real());//assign %1 = %13  : [real]
            var r14 = skipWhiteSpace$Z9dFXd_V0$J$35$m0kR$J5$mC$s5$W0$SFc_F9$R6$c0FP$k5$_0FT$w1$g0FN$s5$b0kA$33$I0kF$Z3$8O$B6$o0VR$Z5$i0kO(r2, r0);//invoke %14 = (%2, %0) Parser:skipWhiteSpace : function(Parser:nat,whiley/lang/ASCII:string) -> Parser:nat
            var r2 = r14;//assign %2 = %14  : int
            control_flow_pc = 74;
            control_flow_repeat = true;
            continue outer;//goto label74
            control_flow_pc = 74;
            control_flow_repeat = true;
            break;
         case 73:
            var r15 = null;
            return r15;//return %15 : null|[real]
            control_flow_pc = 74;
            control_flow_repeat = true;
            break;
         case 74:
            control_flow_pc = -11;
            control_flow_repeat = true;
            break;
         case 72:
            return r1;//return %1 : null|[real]
            return;
      }
   }
}

function parseString$_9dF5HY1CFc_V0$J$35$m0kR$J5$mC$s5$W0$Sh3H0Vv$$C$H2$q$cB$m2VM$VC$12$r$sB$T0VV$N9$51VZ$782Vt$VD$Z2Vo$kC$Dv(r0, r1){//function(Parser:nat,whiley/lang/ASCII:string) -> (whiley/lang/ASCII:string,Parser:nat)
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r3 = r0;//assign %3 = %0  : int
            var r2 = r3;//assign %2 = %3  : int
            control_flow_pc = -13;
            control_flow_repeat = true;
            break;
         case -13:
            var r4 = r1.length();//lengthof %4 = %1 : [int]
            if(WyJS.gt(r0, r4, true)){
               control_flow_pc = 75;
               control_flow_repeat = true;
               continue outer;
            }
            var r6 = r1.getValue(r0);
            var r5 = isWhiteSpace$Z9bF59$WL1d$kS$V5$d0$Q$J5$t0kA$k5$W0VQ$R5$j$FF$B4$20FH$Z30kN$V5$W0VR(r6);//invoke %5 = (%6) Parser:isWhiteSpace : function(whiley/lang/ASCII:char) -> bool
            var r7 = true;
            if(r5 === r7){
               control_flow_pc = 75;
               control_flow_repeat = true;
               continue outer;
            }
            var r8 = new WyJS.Integer(1);
            var r9 = r0.add(r8);//add %9 = %0, %8 : int
            var r0 = r9;//assign %0 = %9  : int
            control_flow_pc = -13;
            control_flow_repeat = true;
            break;
         case 75:
            var r10 = r1.sublist(r2, r0);
            var r11 = new WyJS.Tuple([r10, r0], new WyJS.Type.Tuple([new WyJS.Type.List(new WyJS.Type.Int()), new WyJS.Type.Int()]));
            return r11;//return %11 : ([int],int)
            return;
      }
   }
}

function parseStrings$Z9bF5D527oH74$i2$o$7C$N2Vm$7E$T0$q$7B$R2Vn$s4$11Vd$N7$H1VZB$a2$u$FD$H2$r$sgz(r0){//function(whiley/lang/ASCII:string) -> [whiley/lang/ASCII:string]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r5 = new WyJS.List([], new WyJS.Type.List(new WyJS.Type.Void()));
            var r4 = r5.clone(new WyJS.Type.Void());//assign %4 = %5  : [void]
            var r1 = r4.clone(new WyJS.Type.List(new WyJS.Type.Int()));//assign %1 = %4  : [[int]]
            var r8 = new WyJS.Integer(0);
            var r7 = skipWhiteSpace$Z9dFXd_V0$J$35$m0kR$J5$mC$s5$W0$SFc_F9$R6$c0FP$k5$_0FT$w1$g0FN$s5$b0kA$33$I0kF$Z3$8O$B6$o0VR$Z5$i0kO(r8, r0);//invoke %7 = (%8, %0) Parser:skipWhiteSpace : function(Parser:nat,whiley/lang/ASCII:string) -> Parser:nat
            var r6 = r7;//assign %6 = %7  : int
            var r2 = r6;//assign %2 = %6  : int
            control_flow_pc = -14;
            control_flow_repeat = true;
            break;
         case -14:
            var r9 = r0.length();//lengthof %9 = %0 : [int]
            if(WyJS.gt(r2, r9, true)){
               control_flow_pc = 76;
               control_flow_repeat = true;
               continue outer;
            }
            var r11 = parseString$_9dF5HY1CFc_V0$J$35$m0kR$J5$mC$s5$W0$Sh3H0Vv$$C$H2$q$cB$m2VM$VC$12$r$sB$T0VV$N9$51VZ$782Vt$VD$Z2Vo$kC$Dv(r2, r0);//invoke %11 = (%2, %0) Parser:parseString : function(Parser:nat,whiley/lang/ASCII:string) -> (whiley/lang/ASCII:string,Parser:nat)
            var r3 = r11.tupleLoad(0);
            var r2 = r11.tupleLoad(1);
            var r12 = new WyJS.List([r3], new WyJS.Type.List(new WyJS.Type.List(new WyJS.Type.Int())));
            var r13 = r1.append(r12);
            var r1 = r13.clone(new WyJS.Type.List(new WyJS.Type.Int()));//assign %1 = %13  : [[int]]
            var r14 = skipWhiteSpace$Z9dFXd_V0$J$35$m0kR$J5$mC$s5$W0$SFc_F9$R6$c0FP$k5$_0FT$w1$g0FN$s5$b0kA$33$I0kF$Z3$8O$B6$o0VR$Z5$i0kO(r2, r0);//invoke %14 = (%2, %0) Parser:skipWhiteSpace : function(Parser:nat,whiley/lang/ASCII:string) -> Parser:nat
            var r2 = r14;//assign %2 = %14  : int
            control_flow_pc = -14;
            control_flow_repeat = true;
            break;
         case 76:
            return r1;//return %1 : [[int]]
            return;
      }
   }
}

function skipWhiteSpace$Z9dFXd_V0$J$35$m0kR$J5$mC$s5$W0$SFc_F9$R6$c0FP$k5$_0FT$w1$g0FN$s5$b0kA$33$I0kF$Z3$8O$B6$o0VR$Z5$i0kO(r0, r1){//function(Parser:nat,whiley/lang/ASCII:string) -> Parser:nat
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            control_flow_pc = -15;
            control_flow_repeat = true;
            break;
         case -15:
            var r2 = r1.length();//lengthof %2 = %1 : [int]
            if(WyJS.gt(r0, r2, true)){
               control_flow_pc = 77;
               control_flow_repeat = true;
               continue outer;
            }
            var r4 = r1.getValue(r0);
            var r3 = isWhiteSpace$Z9bF59$WL1d$kS$V5$d0$Q$J5$t0kA$k5$W0VQ$R5$j$FF$B4$20FH$Z30kN$V5$W0VR(r4);//invoke %3 = (%4) Parser:isWhiteSpace : function(whiley/lang/ASCII:char) -> bool
            var r5 = true;
            if(r3 === r5){
               control_flow_pc = 78;
               control_flow_repeat = true;
               break;
            }
            else{
               control_flow_pc = -16;
               control_flow_repeat = true;
               break;
            }
         case -16:
            control_flow_pc = 77;
            control_flow_repeat = true;
            continue outer;//goto label77
            control_flow_pc = 78;
            control_flow_repeat = true;
            break;
         case 78:
            var r6 = new WyJS.Integer(1);
            var r7 = r0.add(r6);//add %7 = %0, %6 : int
            var r0 = r7;//assign %0 = %7  : int
            control_flow_pc = -15;
            control_flow_repeat = true;
            break;
         case 77:
            return r0;//return %0 : int
            return;
      }
   }
}

function isWhiteSpace$Z9bF59$WL1d$kS$V5$d0$Q$J5$t0kA$k5$W0VQ$R5$j$FF$B4$20FH$Z30kN$V5$W0VR(r0){//function(whiley/lang/ASCII:char) -> bool
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = new WyJS.Integer(32);
            if(WyJS.equals(r0, r1, true)){
               control_flow_pc = 79;
               control_flow_repeat = true;
               continue outer;
            }
            var r2 = new WyJS.Integer(9);
            if(WyJS.equals(r0, r2, true)){
               control_flow_pc = 79;
               control_flow_repeat = true;
               continue outer;
            }
            var r3 = new WyJS.Integer(10);
            if(WyJS.equals(r0, r3, true)){
               control_flow_pc = 79;
               control_flow_repeat = true;
               continue outer;
            }
            var r4 = new WyJS.Integer(13);
            if(WyJS.equals(r0, r4, true)){
               control_flow_pc = 79;
               control_flow_repeat = true;
               continue outer;
            }
            var r5 = false;
            control_flow_pc = 80;
            control_flow_repeat = true;
            continue outer;//goto label80
         case 79:
            var r5 = true;
         case 80:
            return r5;//return %5 : bool
            return;
      }
   }
}

function skipLineSpace$Z9dFXd_V0$J$35$m0kR$J5$mC$s5$W0$SFc_F9$R6$c0FP$k5$_0FT$w1$g0FN$s5$b0kA$33$I0kF$Z3$8O$B6$o0VR$Z5$i0kO(r0, r1){//function(Parser:nat,whiley/lang/ASCII:string) -> Parser:nat
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            control_flow_pc = -17;
            control_flow_repeat = true;
            break;
         case -17:
            var r2 = r1.length();//lengthof %2 = %1 : [int]
            if(WyJS.gt(r0, r2, true)){
               control_flow_pc = 81;
               control_flow_repeat = true;
               continue outer;
            }
            var r4 = r1.getValue(r0);
            var r3 = isLineSpace$Z9bF59$WL1d$kS$V5$d0$Q$J5$t0kA$k5$W0VQ$R5$j$FF$B4$20FH$Z30kN$V5$W0VR(r4);//invoke %3 = (%4) Parser:isLineSpace : function(whiley/lang/ASCII:char) -> bool
            var r5 = true;
            if(r3 === r5){
               control_flow_pc = 82;
               control_flow_repeat = true;
               break;
            }
            else{
               control_flow_pc = -18;
               control_flow_repeat = true;
               break;
            }
         case -18:
            control_flow_pc = 81;
            control_flow_repeat = true;
            continue outer;//goto label81
            control_flow_pc = 82;
            control_flow_repeat = true;
            break;
         case 82:
            var r6 = new WyJS.Integer(1);
            var r7 = r0.add(r6);//add %7 = %0, %6 : int
            var r0 = r7;//assign %0 = %7  : int
            control_flow_pc = -17;
            control_flow_repeat = true;
            break;
         case 81:
            return r0;//return %0 : int
            return;
      }
   }
}

function isLineSpace$Z9bF59$WL1d$kS$V5$d0$Q$J5$t0kA$k5$W0VQ$R5$j$FF$B4$20FH$Z30kN$V5$W0VR(r0){//function(whiley/lang/ASCII:char) -> bool
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = new WyJS.Integer(32);
            if(WyJS.equals(r0, r1, true)){
               control_flow_pc = 83;
               control_flow_repeat = true;
               continue outer;
            }
            var r2 = new WyJS.Integer(9);
            if(WyJS.equals(r0, r2, true)){
               control_flow_pc = 83;
               control_flow_repeat = true;
               continue outer;
            }
            var r3 = false;
            control_flow_pc = 84;
            control_flow_repeat = true;
            continue outer;//goto label84
         case 83:
            var r3 = true;
         case 84:
            return r3;//return %3 : bool
            return;
      }
   }
}

