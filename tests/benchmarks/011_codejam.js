function parseJobs$b9dF5HYHCFc_k6$R6$c0FP$k5$_0FT$w1$g0FN$s5$b0kA$Z3$i0$S2$i0FN$FMAWJ$sD$F2Vo$VC$92Vw$s4$N2Vk$kC$D2VM$77$a1VW$78$Hm$ND$c2$t$7C$R2VnsNNP8g0$k$FB$32$U0kN$w5$Z0FO$c5$W0FQ2$90kQ$7q2(r0, r1){//function(whiley/lang/Int:nat,whiley/lang/ASCII:string) -> ([011_codejam:Job],whiley/lang/Int:nat)
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r4 = parseInt$NcH9ZWocJ53iFAWJ$sD$F2Vo$VC$92Vw$s4$N2Vk$kC$D2VM$77$a1VW$78$Hm$ND$c2$t$7C$R2VnFWBMA02$c$7B$Z2Vt$cB$ZQ$kC$12$ua$(r0, r1);//invoke %4 = (%0, %1) Parser:parseInt : function(int,whiley/lang/ASCII:string) -> (int|null,Parser:nat)
            var r2 = r4.tupleLoad(0);
            var r0 = r4.tupleLoad(1);
            if(WyJS.is(r2, new WyJS.Type.Null())){
               control_flow_pc = 0;
               control_flow_repeat = true;
               continue outer;
            }
            var r5 = parseNumJobs$b9fFaWocJ23P8w0$r0$P$Z5$g0FO$Z6$j$$Q$35$i0kO$w1$80VQ$Fr$VQ$35$opH74$i2$o$7C$N2Vm$7E$T0$q$7B$R2Vn$s4$11Vd$N7$H1VZB$a2$u$FD$H2$r$sBD5aL1Q$$B$32$l$kM$B5$j0$O$J5$e0FN$oq$VH$w5$X0(r2, r0, r1);//invoke %5 = (%2, %0, %1) 011_codejam:parseNumJobs : function(whiley/lang/Int:nat,whiley/lang/Int:nat,whiley/lang/ASCII:string) -> ([011_codejam:Job],whiley/lang/Int:nat)
            return r5;//return %5 : ([{int button,bool orange}],int)
            control_flow_pc = 1;
            control_flow_repeat = true;
            continue outer;//goto label1
         case 0:
            var r6 = new WyJS.List([], new WyJS.Type.List(new WyJS.Type.Void()));
            var r7 = new WyJS.Tuple([r6, r0], new WyJS.Type.Tuple([new WyJS.Type.List(new WyJS.Type.Void()), new WyJS.Type.Int()]));
            return r7;//return %7 : ([{int button,bool orange}],int)
         case 1:
            return;
      }
   }
}

function parseNumJobs$b9fFaWocJ23P8w0$r0$P$Z5$g0FO$Z6$j$$Q$35$i0kO$w1$80VQ$Fr$VQ$35$opH74$i2$o$7C$N2Vm$7E$T0$q$7B$R2Vn$s4$11Vd$N7$H1VZB$a2$u$FD$H2$r$sBD5aL1Q$$B$32$l$kM$B5$j0$O$J5$e0FN$oq$VH$w5$X0(r0, r1, r2){//function(whiley/lang/Int:nat,whiley/lang/Int:nat,whiley/lang/ASCII:string) -> ([011_codejam:Job],whiley/lang/Int:nat)
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r6 = new WyJS.Integer(0);
            if(WyJS.equals(r0, r6, false)){
               control_flow_pc = 2;
               control_flow_repeat = true;
               continue outer;
            }
            var r7 = new WyJS.List([], new WyJS.Type.List(new WyJS.Type.Void()));
            var r8 = new WyJS.Tuple([r7, r1], new WyJS.Type.Tuple([new WyJS.Type.List(new WyJS.Type.Void()), new WyJS.Type.Int()]));
            return r8;//return %8 : ([{int button,bool orange}],int)
            control_flow_pc = 3;
            control_flow_repeat = true;
            continue outer;//goto label3
         case 2:
            var r9 = skipWhiteSpace$Z9dFXd_V0$J$35$m0kR$J5$mC$s5$W0$SFc_F9$R6$c0FP$k5$_0FT$w1$g0FN$s5$b0kA$33$I0kF$Z3$8O$B6$o0VR$Z5$i0kO(r1, r2);//invoke %9 = (%1, %2) Parser:skipWhiteSpace : function(Parser:nat,whiley/lang/ASCII:string) -> Parser:nat
            var r1 = r9;//assign %1 = %9  : int
            var r10 = r2.length();//lengthof %10 = %2 : [int]
            if(WyJS.gt(r1, r10, true)){
               control_flow_pc = 4;
               control_flow_repeat = true;
               continue outer;
            }
            var r15 = r2.getValue(r1);
            var r16 = new WyJS.Integer(79);
            if(WyJS.equals(r15, r16, true)){
               control_flow_pc = 5;
               control_flow_repeat = true;
               continue outer;
            }
            var r17 = false;
            control_flow_pc = 6;
            control_flow_repeat = true;
            continue outer;//goto label6
         case 5:
            var r17 = true;
         case 6:
            var r14 = r17;//assign %14 = %17  : bool
            var r5 = r14;//assign %5 = %14  : bool
            var r19 = new WyJS.Integer(1);
            var r20 = r1.add(r19);//add %20 = %1, %19 : int
            var r18 = skipWhiteSpace$Z9dFXd_V0$J$35$m0kR$J5$mC$s5$W0$SFc_F9$R6$c0FP$k5$_0FT$w1$g0FN$s5$b0kA$33$I0kF$Z3$8O$B6$o0VR$Z5$i0kO(r20, r2);//invoke %18 = (%20, %2) Parser:skipWhiteSpace : function(Parser:nat,whiley/lang/ASCII:string) -> Parser:nat
            var r1 = r18;//assign %1 = %18  : int
            var r21 = parseInt$NcH9ZWocJ53iFAWJ$sD$F2Vo$VC$92Vw$s4$N2Vk$kC$D2VM$77$a1VW$78$Hm$ND$c2$t$7C$R2VnFWBMA02$c$7B$Z2Vt$cB$ZQ$kC$12$ua$(r1, r2);//invoke %21 = (%1, %2) Parser:parseInt : function(int,whiley/lang/ASCII:string) -> (int|null,Parser:nat)
            var r3 = r21.tupleLoad(0);
            var r1 = r21.tupleLoad(1);
            if(WyJS.is(r3, new WyJS.Type.Null())){
               control_flow_pc = 4;
               control_flow_repeat = true;
               continue outer;
            }
            var r23 = new WyJS.Integer(1);
            var r24 = r0.sub(r23);//sub %24 = %0, %23 : int
            var r22 = parseNumJobs$b9fFaWocJ23P8w0$r0$P$Z5$g0FO$Z6$j$$Q$35$i0kO$w1$80VQ$Fr$VQ$35$opH74$i2$o$7C$N2Vm$7E$T0$q$7B$R2Vn$s4$11Vd$N7$H1VZB$a2$u$FD$H2$r$sBD5aL1Q$$B$32$l$kM$B5$j0$O$J5$e0FN$oq$VH$w5$X0(r24, r1, r2);//invoke %22 = (%24, %1, %2) 011_codejam:parseNumJobs : function(whiley/lang/Int:nat,whiley/lang/Int:nat,whiley/lang/ASCII:string) -> ([011_codejam:Job],whiley/lang/Int:nat)
            var r4 = r22.tupleLoad(0);
            var r1 = r22.tupleLoad(1);
            var r25 = new WyJS.Record(["button", "orange"], [r3, r5], new WyJS.Type.Record(["button", "orange"], [new WyJS.Type.Int(), new WyJS.Type.Bool()]));
            var r26 = new WyJS.List([r25], new WyJS.Type.List(new WyJS.Type.Record(["button", "orange"], [new WyJS.Type.Int(), new WyJS.Type.Bool()])));
            var r27 = r26.append(r4);
            var r4 = r27.clone(new WyJS.Type.Record(["button", "orange"], [new WyJS.Type.Int(), new WyJS.Type.Bool()]));//assign %4 = %27  : [{int button,bool orange}]
            var r28 = new WyJS.Tuple([r4, r1], new WyJS.Type.Tuple([new WyJS.Type.List(new WyJS.Type.Record(["button", "orange"], [new WyJS.Type.Int(), new WyJS.Type.Bool()])), new WyJS.Type.Int()]));
            return r28;//return %28 : ([{int button,bool orange}],int)
         case 4:
            var r29 = new WyJS.List([], new WyJS.Type.List(new WyJS.Type.Void()));
            var r30 = new WyJS.Tuple([r29, r1], new WyJS.Type.Tuple([new WyJS.Type.List(new WyJS.Type.Void()), new WyJS.Type.Int()]));
            return r30;//return %30 : ([{int button,bool orange}],int)
         case 3:
            return;
      }
   }
}

function processJobs$_9bFaL1U$kS$V5$d0$Q$J5$t0kA$k5$W0VQ$R5$j$FH$s5$oC$s5$W0$SFVY0d_k5$$2$l$FB$w4$Y0kQ$F5$_0VP$35$hC$c3$j0VNz(r0){//function([011_codejam:Job]) -> whiley/lang/Int:nat
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r13 = new WyJS.Integer(1);
            var r12 = r13;//assign %12 = %13  : int
            var r1 = r12;//assign %1 = %12  : int
            var r15 = new WyJS.Integer(1);
            var r14 = r15;//assign %14 = %15  : int
            var r2 = r14;//assign %2 = %14  : int
            var r17 = new WyJS.Integer(0);
            var r16 = r17;//assign %16 = %17  : int
            var r3 = r16;//assign %3 = %16  : int
            var r19 = new WyJS.Integer(0);
            var r18 = r19;//assign %18 = %19  : int
            var r4 = r18;//assign %4 = %18  : int
            var r21 = new WyJS.Integer(0);
            var r20 = r21;//assign %20 = %21  : int
            var r5 = r20;//assign %5 = %20  : int
            var r23 = new WyJS.Integer(0);
            var r22 = r23;//assign %22 = %23  : int
            var r6 = r22;//assign %6 = %22  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case -2:
            var r25 = r0.length();//lengthof %25 = %0 : [{int button,bool orange}]
            if(WyJS.gt(r6, r25, true)){
               control_flow_pc = 8;
               control_flow_repeat = true;
               continue outer;
            }
            var r27 = r0.getValue(r6);
            var r26 = r27.clone();//assign %26 = %27  : {int button,bool orange}
            var r7 = r26.clone();//assign %7 = %26  : {int button,bool orange}
            var r28 = r7.fieldLoad("orange");//fieldload %28 = %7 orange : {int button,bool orange}
            var r29 = true;
            if(r28 === r29){
               control_flow_pc = 9;
               control_flow_repeat = true;
               break;
            }
            else{
               control_flow_pc = -3;
               control_flow_repeat = true;
               break;
            }
         case -3:
            control_flow_pc = 10;
            control_flow_repeat = true;
            continue outer;//goto label10
            control_flow_pc = 11;
            control_flow_repeat = true;
            break;
         case 9:
            var r32 = r7.fieldLoad("button");//fieldload %32 = %7 button : {int button,bool orange}
            var r33 = r32.sub(r1);//sub %33 = %32, %1 : int
            var r31 = abs$Y9bFXA$W(r33);//invoke %31 = (%33) whiley/lang/Math:abs : function(int) -> int
            var r30 = r31;//assign %30 = %31  : int
            var r10 = r30;//assign %10 = %30  : int
            var r36 = new WyJS.Integer(0);
            var r37 = r10.sub(r3);//sub %37 = %10, %3 : int
            var r35 = max$Y9dFXs1Fs2(r36, r37);//invoke %35 = (%36, %37) whiley/lang/Math:max : function(int,int) -> int
            var r38 = new WyJS.Integer(1);
            var r39 = r35.add(r38);//add %39 = %35, %38 : int
            var r34 = r39;//assign %34 = %39  : int
            var r11 = r34;//assign %11 = %34  : int
            var r40 = r5.add(r11);//add %40 = %5, %11 : int
            var r5 = r40;//assign %5 = %40  : int
            var r41 = r4.add(r11);//add %41 = %4, %11 : int
            var r4 = r41;//assign %4 = %41  : int
            var r42 = new WyJS.Integer(0);
            var r3 = r42;//assign %3 = %42  : int
            var r43 = r7.fieldLoad("button");//fieldload %43 = %7 button : {int button,bool orange}
            var r1 = r43;//assign %1 = %43  : int
            control_flow_pc = 11;
            control_flow_repeat = true;
            continue outer;//goto label11
            control_flow_pc = 11;
            control_flow_repeat = true;
            break;
         case 10:
            var r46 = r7.fieldLoad("button");//fieldload %46 = %7 button : {int button,bool orange}
            var r47 = r46.sub(r2);//sub %47 = %46, %2 : int
            var r45 = abs$Y9bFXA$W(r47);//invoke %45 = (%47) whiley/lang/Math:abs : function(int) -> int
            var r44 = r45;//assign %44 = %45  : int
            var r10 = r44;//assign %10 = %44  : int
            var r50 = new WyJS.Integer(0);
            var r51 = r10.sub(r4);//sub %51 = %10, %4 : int
            var r49 = max$Y9dFXs1Fs2(r50, r51);//invoke %49 = (%50, %51) whiley/lang/Math:max : function(int,int) -> int
            var r52 = new WyJS.Integer(1);
            var r53 = r49.add(r52);//add %53 = %49, %52 : int
            var r48 = r53;//assign %48 = %53  : int
            var r11 = r48;//assign %11 = %48  : int
            var r54 = r5.add(r11);//add %54 = %5, %11 : int
            var r5 = r54;//assign %5 = %54  : int
            var r55 = r3.add(r11);//add %55 = %3, %11 : int
            var r3 = r55;//assign %3 = %55  : int
            var r56 = new WyJS.Integer(0);
            var r4 = r56;//assign %4 = %56  : int
            var r57 = r7.fieldLoad("button");//fieldload %57 = %7 button : {int button,bool orange}
            var r2 = r57;//assign %2 = %57  : int
            control_flow_pc = 11;
            control_flow_repeat = true;
            break;
         case 11:
            var r58 = new WyJS.Integer(1);
            var r59 = r6.add(r58);//add %59 = %6, %58 : int
            var r6 = r59;//assign %6 = %59  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case 8:
            return r5;//return %5 : int
            return;
      }
   }
}

