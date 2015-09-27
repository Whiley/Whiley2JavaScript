function append$Z9dFXWYl$1h3y$VW$sC$P2$s$VC$92$w$sA$g1Vk$VC$H2$m$sA$kG2$c1$t$7B$R2Vt$7C$c2Vo$sC$RvE(r0, r1){//function(Complex_Valid_8:Transition[],Complex_Valid_8:Transition) -> Complex_Valid_8:Transition[]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r5 = r0.length();//lengthof %5 = %0 : {int character,int from,int to}[]
            var r6 = new WyJS.Integer(1);
            var r7 = r5.add(r6);//add %7 = %5, %6 : int
            var r8 = WyJS.ListGen(r1, r7, new WyJS.Type.List(new WyJS.Type.Record(["character", "from", "to"], [new WyJS.Type.Int(), new WyJS.Type.Int(), new WyJS.Type.Int()])));
            var r4 = r8.clone(new WyJS.Type.Record(["character", "from", "to"], [new WyJS.Type.Int(), new WyJS.Type.Int(), new WyJS.Type.Int()]));//assign %4 = %8  : {int character,int from,int to}[]
            var r2 = r4.clone(new WyJS.Type.Record(["character", "from", "to"], [new WyJS.Type.Int(), new WyJS.Type.Int(), new WyJS.Type.Int()]));//assign %2 = %4  : {int character,int from,int to}[]
            var r10 = new WyJS.Integer(0);
            var r9 = r10;//assign %9 = %10  : int
            var r3 = r9;//assign %3 = %9  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case -2:
            var r12 = r0.length();//lengthof %12 = %0 : {int character,int from,int to}[]
            if(WyJS.gt(r3, r12, true)){
               control_flow_pc = 1650;
               control_flow_repeat = true;
               continue outer;
            }
            var r13 = r0.getValue(r3);
            var r14 = r0.getValue(r3);
            r2.setValue(r3, r14);
            var r15 = new WyJS.Integer(1);
            var r16 = r3.add(r15);//add %16 = %3, %15 : int
            var r3 = r16;//assign %3 = %16  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case 1650:
            return r2;//return %2 : {int character,int from,int to}[]
            return;
      }
   }
}

function add$Z9dFXd_k6$B3$j0FQ$$6$g0FO$V6$U0VK$35$g0FP$F5$U0$D3$J0VR$Z5$_0WL1U$kF$w5$h0$R$k5$_0$T$w4$L0FN$k5$d0$O$w4$sN$B6$o0VR$Z5$i0kOE(r0, r1){//function(Complex_Valid_8:Trie,Complex_Valid_8:string) -> Complex_Valid_8:Trie
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r3 = new WyJS.Integer(0);
            var r4 = new WyJS.Integer(0);
            var r2 = add$_9hFXWaL1U$kF$w5$h0$R$k5$_0$T$w4$L0FN$k5$d0$O$w4$sF$F4$m0FP$J53iFAWE$N7$T2Vq$$D$N2Vm$$E$y1$f$7B$N2Vo$VB$y1$RB$a2$u$FD$H2$r$sg2(r0, r3, r1, r4);//invoke %2 = (%0, %3, %1, %4) Complex_Valid_8:add : function(Complex_Valid_8:Trie,int,Complex_Valid_8:string,int) -> Complex_Valid_8:Trie
            return r2;//return %2 : {{int character,int from,int to}[] transitions}
            return;
      }
   }
}

function add$_9hFXWaL1U$kF$w5$h0$R$k5$_0$T$w4$L0FN$k5$d0$O$w4$sF$F4$m0FP$J53iFAWE$N7$T2Vq$$D$N2Vm$$E$y1$f$7B$N2Vo$VB$y1$RB$a2$u$FD$H2$r$sg2(r0, r1, r2, r3){//function(Complex_Valid_8:Trie,int,Complex_Valid_8:string,int) -> Complex_Valid_8:Trie
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r9 = r2.length();//lengthof %9 = %2 : int[]
            if(WyJS.equals(r9, r3, false)){
               control_flow_pc = 1652;
               control_flow_repeat = true;
               continue outer;
            }
            return r0;//return %0 : {{int character,int from,int to}[] transitions}
            control_flow_pc = 1653;
            control_flow_repeat = true;
            continue outer;//goto label1653
         case 1652:
            var r11 = r2.getValue(r3);
            var r10 = r11;//assign %10 = %11  : int
            var r4 = r10;//assign %4 = %10  : int
            var r13 = new WyJS.Integer(0);
            var r12 = r13;//assign %12 = %13  : int
            var r5 = r12;//assign %5 = %12  : int
            control_flow_pc = -3;
            control_flow_repeat = true;
            break;
         case -3:
            var r15 = r0.fieldLoad("transitions");//fieldload %15 = %0 transitions : {{int character,int from,int to}[] transitions}
            var r16 = r15.length();//lengthof %16 = %15 : {int character,int from,int to}[]
            if(WyJS.gt(r5, r16, true)){
               control_flow_pc = 1655;
               control_flow_repeat = true;
               continue outer;
            }
            var r18 = r0.fieldLoad("transitions");//fieldload %18 = %0 transitions : {{int character,int from,int to}[] transitions}
            var r19 = r18.getValue(r5);
            var r17 = r19.clone();//assign %17 = %19  : {int character,int from,int to}
            var r8 = r17.clone();//assign %8 = %17  : {int character,int from,int to}
            var r20 = r8.fieldLoad("from");//fieldload %20 = %8 from : {int character,int from,int to}
            if(WyJS.equals(r20, r1, false)){
               control_flow_pc = 1656;
               control_flow_repeat = true;
               break;
            }
            else{
               control_flow_pc = -4;
               control_flow_repeat = true;
               break;
            }
         case -4:
            var r21 = r8.fieldLoad("character");//fieldload %21 = %8 character : {int character,int from,int to}
            if(WyJS.equals(r21, r4, false)){
               control_flow_pc = 1656;
               control_flow_repeat = true;
               break;
            }
            else{
               control_flow_pc = -5;
               control_flow_repeat = true;
               break;
            }
         case -5:
            var r23 = r8.fieldLoad("to");//fieldload %23 = %8 to : {int character,int from,int to}
            var r24 = new WyJS.Integer(1);
            var r25 = r3.add(r24);//add %25 = %3, %24 : int
            var r22 = add$_9hFXWaL1U$kF$w5$h0$R$k5$_0$T$w4$L0FN$k5$d0$O$w4$sF$F4$m0FP$J53iFAWE$N7$T2Vq$$D$N2Vm$$E$y1$f$7B$N2Vo$VB$y1$RB$a2$u$FD$H2$r$sg2(r0, r23, r2, r25);//invoke %22 = (%0, %23, %2, %25) Complex_Valid_8:add : function(Complex_Valid_8:Trie,int,Complex_Valid_8:string,int) -> Complex_Valid_8:Trie
            return r22;//return %22 : {{int character,int from,int to}[] transitions}
            control_flow_pc = 1656;
            control_flow_repeat = true;
            break;
         case 1656:
            var r26 = new WyJS.Integer(1);
            var r27 = r5.add(r26);//add %27 = %5, %26 : int
            var r5 = r27;//assign %5 = %27  : int
            control_flow_pc = -3;
            control_flow_repeat = true;
            break;
         case 1655:
            var r29 = r0.fieldLoad("transitions");//fieldload %29 = %0 transitions : {{int character,int from,int to}[] transitions}
            var r30 = r29.length();//lengthof %30 = %29 : {int character,int from,int to}[]
            var r31 = new WyJS.Integer(1);
            var r32 = r30.add(r31);//add %32 = %30, %31 : int
            var r28 = r32;//assign %28 = %32  : int
            var r7 = r28;//assign %7 = %28  : int
            var r34 = new WyJS.Record(["character", "from", "to"], [r4, r1, r7], new WyJS.Type.Record(["character", "from", "to"], [new WyJS.Type.Int(), new WyJS.Type.Int(), new WyJS.Type.Int()]));
            var r33 = r34.clone();//assign %33 = %34  : {int character,int from,int to}
            var r8 = r33.clone();//assign %8 = %33  : {int character,int from,int to}
            var r36 = r0.fieldLoad("transitions");//fieldload %36 = %0 transitions : {{int character,int from,int to}[] transitions}
            var r35 = append$Z9dFXWYl$1h3y$VW$sC$P2$s$VC$92$w$sA$g1Vk$VC$H2$m$sA$kG2$c1$t$7B$R2Vt$7C$c2Vo$sC$RvE(r36, r8);//invoke %35 = (%36, %8) Complex_Valid_8:append : function(Complex_Valid_8:Transition[],Complex_Valid_8:Transition) -> Complex_Valid_8:Transition[]
            var r38 = r0.fieldLoad("transitions");//fieldload %38 = %0 transitions : {{int character,int from,int to}[] transitions}
            var r37 = append$Z9dFXWYl$1h3y$VW$sC$P2$s$VC$92$w$sA$g1Vk$VC$H2$m$sA$kG2$c1$t$7B$R2Vt$7C$c2Vo$sC$RvE(r38, r8);//invoke %37 = (%38, %8) Complex_Valid_8:append : function(Complex_Valid_8:Transition[],Complex_Valid_8:Transition) -> Complex_Valid_8:Transition[]
            r0.setValue("transitions", r37);
            var r40 = new WyJS.Integer(1);
            var r41 = r3.add(r40);//add %41 = %3, %40 : int
            var r39 = add$_9hFXWaL1U$kF$w5$h0$R$k5$_0$T$w4$L0FN$k5$d0$O$w4$sF$F4$m0FP$J53iFAWE$N7$T2Vq$$D$N2Vm$$E$y1$f$7B$N2Vo$VB$y1$RB$a2$u$FD$H2$r$sg2(r0, r7, r2, r41);//invoke %39 = (%0, %7, %2, %41) Complex_Valid_8:add : function(Complex_Valid_8:Trie,int,Complex_Valid_8:string,int) -> Complex_Valid_8:Trie
            return r39;//return %39 : {{int character,int from,int to}[] transitions}
         case 1653:
            return;
      }
   }
}

function contains$_9dF5X1Fc_k6$B3$j0FQ$$6$g0FO$V6$U0VK$35$g0FP$F5$U0$D3$J0VR$Z5$_pHs2$51Vr$cC$V2$q$cB$k2Vj$k9$12$q$7C$72Vj$$62Vt$VD$Z2Vo$kC$Dv(r0, r1){//function(Complex_Valid_8:Trie,Complex_Valid_8:string) -> bool
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r3 = new WyJS.Integer(0);
            var r4 = new WyJS.Integer(0);
            var r2 = contains$a9hF5e79$WL1U$kF$w5$h0$R$k5$_0$T$w4$L0FN$k5$d0$O$w4$sF$F4$m0FP$Jq4P8w0$20kQ$o5$k0$Q$J5$s0kM$N4$W0$Q$Z5$Z0kM$VY0kR$F6$m0FP$s5$bC(r0, r3, r1, r4);//invoke %2 = (%0, %3, %1, %4) Complex_Valid_8:contains : function(Complex_Valid_8:Trie,int,Complex_Valid_8:string,int) -> bool
            return r2;//return %2 : bool
            return;
      }
   }
}

function contains$a9hF5e79$WL1U$kF$w5$h0$R$k5$_0$T$w4$L0FN$k5$d0$O$w4$sF$F4$m0FP$Jq4P8w0$20kQ$o5$k0$Q$J5$s0kM$N4$W0$Q$Z5$Z0kM$VY0kR$F6$m0FP$s5$bC(r0, r1, r2, r3){//function(Complex_Valid_8:Trie,int,Complex_Valid_8:string,int) -> bool
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r7 = r2.length();//lengthof %7 = %2 : int[]
            if(WyJS.equals(r7, r3, false)){
               control_flow_pc = 1658;
               control_flow_repeat = true;
               continue outer;
            }
            var r8 = true;
            return r8;//return %8 : bool
            control_flow_pc = 1659;
            control_flow_repeat = true;
            continue outer;//goto label1659
         case 1658:
            var r10 = r2.getValue(r3);
            var r9 = r10;//assign %9 = %10  : int
            var r4 = r9;//assign %4 = %9  : int
            var r12 = new WyJS.Integer(0);
            var r11 = r12;//assign %11 = %12  : int
            var r5 = r11;//assign %5 = %11  : int
            control_flow_pc = -6;
            control_flow_repeat = true;
            break;
         case -6:
            var r14 = r0.fieldLoad("transitions");//fieldload %14 = %0 transitions : {{int character,int from,int to}[] transitions}
            var r15 = r14.length();//lengthof %15 = %14 : {int character,int from,int to}[]
            if(WyJS.gt(r5, r15, true)){
               control_flow_pc = 1661;
               control_flow_repeat = true;
               continue outer;
            }
            var r17 = r0.fieldLoad("transitions");//fieldload %17 = %0 transitions : {{int character,int from,int to}[] transitions}
            var r18 = r17.getValue(r5);
            var r16 = r18.clone();//assign %16 = %18  : {int character,int from,int to}
            var r6 = r16.clone();//assign %6 = %16  : {int character,int from,int to}
            var r19 = r6.fieldLoad("from");//fieldload %19 = %6 from : {int character,int from,int to}
            if(WyJS.equals(r19, r1, false)){
               control_flow_pc = 1662;
               control_flow_repeat = true;
               break;
            }
            else{
               control_flow_pc = -7;
               control_flow_repeat = true;
               break;
            }
         case -7:
            var r20 = r6.fieldLoad("character");//fieldload %20 = %6 character : {int character,int from,int to}
            if(WyJS.equals(r20, r4, false)){
               control_flow_pc = 1662;
               control_flow_repeat = true;
               break;
            }
            else{
               control_flow_pc = -8;
               control_flow_repeat = true;
               break;
            }
         case -8:
            var r22 = r6.fieldLoad("to");//fieldload %22 = %6 to : {int character,int from,int to}
            var r23 = new WyJS.Integer(1);
            var r24 = r3.add(r23);//add %24 = %3, %23 : int
            var r21 = contains$a9hF5e79$WL1U$kF$w5$h0$R$k5$_0$T$w4$L0FN$k5$d0$O$w4$sF$F4$m0FP$Jq4P8w0$20kQ$o5$k0$Q$J5$s0kM$N4$W0$Q$Z5$Z0kM$VY0kR$F6$m0FP$s5$bC(r0, r22, r2, r24);//invoke %21 = (%0, %22, %2, %24) Complex_Valid_8:contains : function(Complex_Valid_8:Trie,int,Complex_Valid_8:string,int) -> bool
            return r21;//return %21 : bool
            control_flow_pc = 1662;
            control_flow_repeat = true;
            break;
         case 1662:
            var r25 = new WyJS.Integer(1);
            var r26 = r5.add(r25);//add %26 = %5, %25 : int
            var r5 = r26;//assign %5 = %26  : int
            control_flow_pc = -6;
            control_flow_repeat = true;
            break;
         case 1661:
            var r27 = false;
            return r27;//return %27 : bool
         case 1659:
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
            var r2 = new WyJS.Record([transitions] ,[new WyJS.List([], new WyJS.Type.List(new WyJS.Type.Void()))] ,new WyJS.Type.Record(["transitions"], [new WyJS.Type.List(new WyJS.Type.Void())]));
            var r1 = r2.clone();//assign %1 = %2  : {void[] transitions}
            var r0 = r1.clone();//assign %0 = %1  : {{int character,int from,int to}[] transitions}
            var r4 = new WyJS.List([new WyJS.Integer(104), new WyJS.Integer(101), new WyJS.Integer(108), new WyJS.Integer(108), new WyJS.Integer(111)], new WyJS.Type.List(new WyJS.Type.Int()));
            var r3 = add$Z9dFXd_k6$B3$j0FQ$$6$g0FO$V6$U0VK$35$g0FP$F5$U0$D3$J0VR$Z5$_0WL1U$kF$w5$h0$R$k5$_0$T$w4$L0FN$k5$d0$O$w4$sN$B6$o0VR$Z5$i0kOE(r0, r4);//invoke %3 = (%0, %4) Complex_Valid_8:add : function(Complex_Valid_8:Trie,Complex_Valid_8:string) -> Complex_Valid_8:Trie
            var r0 = r3.clone();//assign %0 = %3  : {{int character,int from,int to}[] transitions}
            var r6 = new WyJS.List([new WyJS.Integer(119), new WyJS.Integer(111), new WyJS.Integer(114), new WyJS.Integer(108), new WyJS.Integer(100)], new WyJS.Type.List(new WyJS.Type.Int()));
            var r5 = add$Z9dFXd_k6$B3$j0FQ$$6$g0FO$V6$U0VK$35$g0FP$F5$U0$D3$J0VR$Z5$_0WL1U$kF$w5$h0$R$k5$_0$T$w4$L0FN$k5$d0$O$w4$sN$B6$o0VR$Z5$i0kOE(r0, r6);//invoke %5 = (%0, %6) Complex_Valid_8:add : function(Complex_Valid_8:Trie,Complex_Valid_8:string) -> Complex_Valid_8:Trie
            var r0 = r5.clone();//assign %0 = %5  : {{int character,int from,int to}[] transitions}
            var r8 = new WyJS.List([new WyJS.Integer(104), new WyJS.Integer(101), new WyJS.Integer(108), new WyJS.Integer(112)], new WyJS.Type.List(new WyJS.Type.Int()));
            var r7 = add$Z9dFXd_k6$B3$j0FQ$$6$g0FO$V6$U0VK$35$g0FP$F5$U0$D3$J0VR$Z5$_0WL1U$kF$w5$h0$R$k5$_0$T$w4$L0FN$k5$d0$O$w4$sN$B6$o0VR$Z5$i0kOE(r0, r8);//invoke %7 = (%0, %8) Complex_Valid_8:add : function(Complex_Valid_8:Trie,Complex_Valid_8:string) -> Complex_Valid_8:Trie
            var r0 = r7.clone();//assign %0 = %7  : {{int character,int from,int to}[] transitions}
            var r10 = new WyJS.List([new WyJS.Integer(104), new WyJS.Integer(101), new WyJS.Integer(108), new WyJS.Integer(108), new WyJS.Integer(111)], new WyJS.Type.List(new WyJS.Type.Int()));
            var r9 = contains$_9dF5X1Fc_k6$B3$j0FQ$$6$g0FO$V6$U0VK$35$g0FP$F5$U0$D3$J0VR$Z5$_pHs2$51Vr$cC$V2$q$cB$k2Vj$k9$12$q$7C$72Vj$$62Vt$VD$Z2Vo$kC$Dv(r0, r10);//invoke %9 = (%0, %10) Complex_Valid_8:contains : function(Complex_Valid_8:Trie,Complex_Valid_8:string) -> bool
            var r11 = true;
            if(r9 === r11){
               control_flow_pc = 1663;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1663:
            var r13 = new WyJS.List([new WyJS.Integer(98), new WyJS.Integer(108), new WyJS.Integer(97), new WyJS.Integer(104)], new WyJS.Type.List(new WyJS.Type.Int()));
            var r12 = contains$_9dF5X1Fc_k6$B3$j0FQ$$6$g0FO$V6$U0VK$35$g0FP$F5$U0$D3$J0VR$Z5$_pHs2$51Vr$cC$V2$q$cB$k2Vj$k9$12$q$7C$72Vj$$62Vt$VD$Z2Vo$kC$Dv(r0, r13);//invoke %12 = (%0, %13) Complex_Valid_8:contains : function(Complex_Valid_8:Trie,Complex_Valid_8:string) -> bool
            var r14 = true;
            if(r12 === r14){
               control_flow_pc = 1664;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 1665;
            control_flow_repeat = true;
            continue outer;//goto label1665
         case 1664:
            throw {name: 'Assert Failed', message: 'fail'}
         case 1665:
            var r16 = new WyJS.List([new WyJS.Integer(104), new WyJS.Integer(101), new WyJS.Integer(108)], new WyJS.Type.List(new WyJS.Type.Int()));
            var r15 = contains$_9dF5X1Fc_k6$B3$j0FQ$$6$g0FO$V6$U0VK$35$g0FP$F5$U0$D3$J0VR$Z5$_pHs2$51Vr$cC$V2$q$cB$k2Vj$k9$12$q$7C$72Vj$$62Vt$VD$Z2Vo$kC$Dv(r0, r16);//invoke %15 = (%0, %16) Complex_Valid_8:contains : function(Complex_Valid_8:Trie,Complex_Valid_8:string) -> bool
            var r17 = true;
            if(r15 === r17){
               control_flow_pc = 1666;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1666:
            var r19 = new WyJS.List([new WyJS.Integer(100), new WyJS.Integer(97), new WyJS.Integer(118), new WyJS.Integer(101)], new WyJS.Type.List(new WyJS.Type.Int()));
            var r18 = contains$_9dF5X1Fc_k6$B3$j0FQ$$6$g0FO$V6$U0VK$35$g0FP$F5$U0$D3$J0VR$Z5$_pHs2$51Vr$cC$V2$q$cB$k2Vj$k9$12$q$7C$72Vj$$62Vt$VD$Z2Vo$kC$Dv(r0, r19);//invoke %18 = (%0, %19) Complex_Valid_8:contains : function(Complex_Valid_8:Trie,Complex_Valid_8:string) -> bool
            var r20 = true;
            if(r18 === r20){
               control_flow_pc = 1667;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 1668;
            control_flow_repeat = true;
            continue outer;//goto label1668
         case 1667:
            throw {name: 'Assert Failed', message: 'fail'}
         case 1668:
            return;
      }
   }
}

