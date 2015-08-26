function add$Z9dFXd_k6$B3$j0FQ$$6$g0FO$V6$U0VK$35$g0FP$F5$U0$D3$J0VR$Z5$_0WL1U$kF$w5$h0$R$k5$_0$T$w4$L0FN$k5$d0$O$w4$sN$B6$o0VR$Z5$i0kOE(r0, r1){//function(Complex_Valid_8:Trie,Complex_Valid_8:string) -> Complex_Valid_8:Trie
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r3 = new WyJS.Integer(0);
            var r2 = add$_9fFXWP8w0$20kQ$o5$k0$Q$J5$s0kM$N4$W0$Q$Z5$Z0kM$V20$K$76$d0FOFs1h3y$VW$sC$P2$s$VC$92$w$sA$g1Vk$VC$H2$m$sA$kl$ND$c2$t$7C$R2Vny2(r0, r3, r1);//invoke %2 = (%0, %3, %1) Complex_Valid_8:add : function(Complex_Valid_8:Trie,int,Complex_Valid_8:string) -> Complex_Valid_8:Trie
            return r2;//return %2 : {[{int character,int from,int to}] transitions}
            return;
      }
   }
}

function add$_9fFXWP8w0$20kQ$o5$k0$Q$J5$s0kM$N4$W0$Q$Z5$Z0kM$V20$K$76$d0FOFs1h3y$VW$sC$P2$s$VC$92$w$sA$g1Vk$VC$H2$m$sA$kl$ND$c2$t$7C$R2Vny2(r0, r1, r2){//function(Complex_Valid_8:Trie,int,Complex_Valid_8:string) -> Complex_Valid_8:Trie
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r8 = r2.length();//lengthof %8 = %2 : [int]
            var r9 = new WyJS.Integer(0);
            if(WyJS.equals(r8, r9, false)){
               control_flow_pc = 1591;
               control_flow_repeat = true;
               continue outer;
            }
            return r0;//return %0 : {[{int character,int from,int to}] transitions}
            control_flow_pc = 1592;
            control_flow_repeat = true;
            continue outer;//goto label1592
         case 1591:
            var r11 = new WyJS.Integer(0);
            var r12 = r2.getValue(r11);
            var r10 = r12;//assign %10 = %12  : int
            var r3 = r10;//assign %3 = %10  : int
            var r14 = new WyJS.Integer(0);
            var r13 = r14;//assign %13 = %14  : int
            var r4 = r13;//assign %4 = %13  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case -2:
            var r15 = new WyJS.Integer(0);
            if(WyJS.gt(r4, r15, true)){
               control_flow_pc = 1593;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1593:
            return;
            var r16 = r0.fieldLoad("transitions");//fieldload %16 = %0 transitions : {[{int character,int from,int to}] transitions}
            var r17 = r16.length();//lengthof %17 = %16 : [{int character,int from,int to}]
            if(WyJS.gt(r4, r17, true)){
               control_flow_pc = 1594;
               control_flow_repeat = true;
               continue outer;
            }
            var r19 = r0.fieldLoad("transitions");//fieldload %19 = %0 transitions : {[{int character,int from,int to}] transitions}
            var r20 = r19.getValue(r4);
            var r18 = r20;//assign %18 = %20  : {int character,int from,int to}
            var r7 = r18;//assign %7 = %18  : {int character,int from,int to}
            var r21 = r7.fieldLoad("from");//fieldload %21 = %7 from : {int character,int from,int to}
            if(WyJS.equals(r21, r1, false)){
               control_flow_pc = 1595;
               control_flow_repeat = true;
               break;
            }
            else{
               control_flow_pc = -3;
               control_flow_repeat = true;
               break;
            }
         case -3:
            var r22 = r7.fieldLoad("character");//fieldload %22 = %7 character : {int character,int from,int to}
            if(WyJS.equals(r22, r3, false)){
               control_flow_pc = 1595;
               control_flow_repeat = true;
               break;
            }
            else{
               control_flow_pc = -4;
               control_flow_repeat = true;
               break;
            }
         case -4:
            var r24 = r7.fieldLoad("to");//fieldload %24 = %7 to : {int character,int from,int to}
            var r25 = new WyJS.Integer(1);
            var r26 = r2.length();//lengthof %26 = %2 : [int]
            var r27 = r2.sublist(r25, r26);
            var r23 = add$_9fFXWP8w0$20kQ$o5$k0$Q$J5$s0kM$N4$W0$Q$Z5$Z0kM$V20$K$76$d0FOFs1h3y$VW$sC$P2$s$VC$92$w$sA$g1Vk$VC$H2$m$sA$kl$ND$c2$t$7C$R2Vny2(r0, r24, r27);//invoke %23 = (%0, %24, %27) Complex_Valid_8:add : function(Complex_Valid_8:Trie,int,Complex_Valid_8:string) -> Complex_Valid_8:Trie
            return r23;//return %23 : {[{int character,int from,int to}] transitions}
            control_flow_pc = 1595;
            control_flow_repeat = true;
            break;
         case 1595:
            var r28 = new WyJS.Integer(1);
            var r29 = r4.add(r28);//add %29 = %4, %28 : int
            var r4 = r29;//assign %4 = %29  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case 1594:
            var r31 = r0.fieldLoad("transitions");//fieldload %31 = %0 transitions : {[{int character,int from,int to}] transitions}
            var r32 = r31.length();//lengthof %32 = %31 : [{int character,int from,int to}]
            var r33 = new WyJS.Integer(1);
            var r34 = r32.add(r33);//add %34 = %32, %33 : int
            var r30 = r34;//assign %30 = %34  : int
            var r6 = r30;//assign %6 = %30  : int
            var r36 = new WyJS.Record(["character", "from", "to"], [r3, r1, r6], new WyJS.Type.Record(["character", "from", "to"], [new WyJS.Type.Int(), new WyJS.Type.Int(), new WyJS.Type.Int()]));
            var r35 = r36;//assign %35 = %36  : {int character,int from,int to}
            var r7 = r35;//assign %7 = %35  : {int character,int from,int to}
            var r37 = r0.fieldLoad("transitions");//fieldload %37 = %0 transitions : {[{int character,int from,int to}] transitions}
            var r38 = new WyJS.List([r7], new WyJS.Type.List(new WyJS.Type.Record(["character", "from", "to"], [new WyJS.Type.Int(), new WyJS.Type.Int(), new WyJS.Type.Int()])));
            var r39 = r37.append(r38);
            var r40 = r0.fieldLoad("transitions");//fieldload %40 = %0 transitions : {[{int character,int from,int to}] transitions}
            var r41 = new WyJS.List([r7], new WyJS.Type.List(new WyJS.Type.Record(["character", "from", "to"], [new WyJS.Type.Int(), new WyJS.Type.Int(), new WyJS.Type.Int()])));
            var r42 = r40.append(r41);
            r0.setValue("transitions", r42);
            var r44 = new WyJS.Integer(1);
            var r45 = r2.length();//lengthof %45 = %2 : [int]
            var r46 = r2.sublist(r44, r45);
            var r43 = add$_9fFXWP8w0$20kQ$o5$k0$Q$J5$s0kM$N4$W0$Q$Z5$Z0kM$V20$K$76$d0FOFs1h3y$VW$sC$P2$s$VC$92$w$sA$g1Vk$VC$H2$m$sA$kl$ND$c2$t$7C$R2Vny2(r0, r6, r46);//invoke %43 = (%0, %6, %46) Complex_Valid_8:add : function(Complex_Valid_8:Trie,int,Complex_Valid_8:string) -> Complex_Valid_8:Trie
            return r43;//return %43 : {[{int character,int from,int to}] transitions}
         case 1592:
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
            var r2 = contains$a9fF5ec$3P8w0$20kQ$o5$k0$Q$J5$s0kM$N4$W0$Q$Z5$Z0kM$V20$K$76$d0FOMc_k6$B3$j0FQ$$6$g0FO$V6$U0VK$35$g0FP$F5$U0$D5$n0$S$76$d0VQ$RqE(r0, r3, r1);//invoke %2 = (%0, %3, %1) Complex_Valid_8:contains : function(Complex_Valid_8:Trie,int,Complex_Valid_8:string) -> bool
            return r2;//return %2 : bool
            return;
      }
   }
}

function contains$a9fF5ec$3P8w0$20kQ$o5$k0$Q$J5$s0kM$N4$W0$Q$Z5$Z0kM$V20$K$76$d0FOMc_k6$B3$j0FQ$$6$g0FO$V6$U0VK$35$g0FP$F5$U0$D5$n0$S$76$d0VQ$RqE(r0, r1, r2){//function(Complex_Valid_8:Trie,int,Complex_Valid_8:string) -> bool
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r6 = r2.length();//lengthof %6 = %2 : [int]
            var r7 = new WyJS.Integer(0);
            if(WyJS.equals(r6, r7, false)){
               control_flow_pc = 1597;
               control_flow_repeat = true;
               continue outer;
            }
            var r8 = true;
            return r8;//return %8 : bool
            control_flow_pc = 1598;
            control_flow_repeat = true;
            continue outer;//goto label1598
         case 1597:
            var r10 = new WyJS.Integer(0);
            var r11 = r2.getValue(r10);
            var r9 = r11;//assign %9 = %11  : int
            var r3 = r9;//assign %3 = %9  : int
            var r13 = new WyJS.Integer(0);
            var r12 = r13;//assign %12 = %13  : int
            var r4 = r12;//assign %4 = %12  : int
            control_flow_pc = -5;
            control_flow_repeat = true;
            break;
         case -5:
            var r14 = new WyJS.Integer(0);
            if(WyJS.gt(r4, r14, true)){
               control_flow_pc = 1599;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1599:
            return;
            var r15 = r0.fieldLoad("transitions");//fieldload %15 = %0 transitions : {[{int character,int from,int to}] transitions}
            var r16 = r15.length();//lengthof %16 = %15 : [{int character,int from,int to}]
            if(WyJS.gt(r4, r16, true)){
               control_flow_pc = 1600;
               control_flow_repeat = true;
               continue outer;
            }
            var r18 = r0.fieldLoad("transitions");//fieldload %18 = %0 transitions : {[{int character,int from,int to}] transitions}
            var r19 = r18.getValue(r4);
            var r17 = r19;//assign %17 = %19  : {int character,int from,int to}
            var r5 = r17;//assign %5 = %17  : {int character,int from,int to}
            var r20 = r5.fieldLoad("from");//fieldload %20 = %5 from : {int character,int from,int to}
            if(WyJS.equals(r20, r1, false)){
               control_flow_pc = 1601;
               control_flow_repeat = true;
               break;
            }
            else{
               control_flow_pc = -6;
               control_flow_repeat = true;
               break;
            }
         case -6:
            var r21 = r5.fieldLoad("character");//fieldload %21 = %5 character : {int character,int from,int to}
            if(WyJS.equals(r21, r3, false)){
               control_flow_pc = 1601;
               control_flow_repeat = true;
               break;
            }
            else{
               control_flow_pc = -7;
               control_flow_repeat = true;
               break;
            }
         case -7:
            var r23 = r5.fieldLoad("to");//fieldload %23 = %5 to : {int character,int from,int to}
            var r24 = new WyJS.Integer(1);
            var r25 = r2.length();//lengthof %25 = %2 : [int]
            var r26 = r2.sublist(r24, r25);
            var r22 = contains$a9fF5ec$3P8w0$20kQ$o5$k0$Q$J5$s0kM$N4$W0$Q$Z5$Z0kM$V20$K$76$d0FOMc_k6$B3$j0FQ$$6$g0FO$V6$U0VK$35$g0FP$F5$U0$D5$n0$S$76$d0VQ$RqE(r0, r23, r26);//invoke %22 = (%0, %23, %26) Complex_Valid_8:contains : function(Complex_Valid_8:Trie,int,Complex_Valid_8:string) -> bool
            return r22;//return %22 : bool
            control_flow_pc = 1601;
            control_flow_repeat = true;
            break;
         case 1601:
            var r27 = new WyJS.Integer(1);
            var r28 = r4.add(r27);//add %28 = %4, %27 : int
            var r4 = r28;//assign %4 = %28  : int
            control_flow_pc = -5;
            control_flow_repeat = true;
            break;
         case 1600:
            var r29 = false;
            return r29;//return %29 : bool
         case 1598:
            return;
      }
   }
}

function test$1A_7VkE(){//method() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r2 = new WyJS.Record([transitions] ,[new WyJS.List([], new WyJS.Type.List(new WyJS.Type.Void()))] ,new WyJS.Type.Record(["transitions"], [new WyJS.Type.List(new WyJS.Type.Void())]));
            var r1 = r2;//assign %1 = %2  : {[void] transitions}
            var r0 = r1;//assign %0 = %1  : {[{int character,int from,int to}] transitions}
            var r4 = new WyJS.List([new WyJS.Integer(104), new WyJS.Integer(101), new WyJS.Integer(108), new WyJS.Integer(108), new WyJS.Integer(111)], new WyJS.Type.List(new WyJS.Type.Int()));
            var r3 = add$Z9dFXd_k6$B3$j0FQ$$6$g0FO$V6$U0VK$35$g0FP$F5$U0$D3$J0VR$Z5$_0WL1U$kF$w5$h0$R$k5$_0$T$w4$L0FN$k5$d0$O$w4$sN$B6$o0VR$Z5$i0kOE(r0, r4);//invoke %3 = (%0, %4) Complex_Valid_8:add : function(Complex_Valid_8:Trie,Complex_Valid_8:string) -> Complex_Valid_8:Trie
            var r0 = r3;//assign %0 = %3  : {[{int character,int from,int to}] transitions}
            var r6 = new WyJS.List([new WyJS.Integer(119), new WyJS.Integer(111), new WyJS.Integer(114), new WyJS.Integer(108), new WyJS.Integer(100)], new WyJS.Type.List(new WyJS.Type.Int()));
            var r5 = add$Z9dFXd_k6$B3$j0FQ$$6$g0FO$V6$U0VK$35$g0FP$F5$U0$D3$J0VR$Z5$_0WL1U$kF$w5$h0$R$k5$_0$T$w4$L0FN$k5$d0$O$w4$sN$B6$o0VR$Z5$i0kOE(r0, r6);//invoke %5 = (%0, %6) Complex_Valid_8:add : function(Complex_Valid_8:Trie,Complex_Valid_8:string) -> Complex_Valid_8:Trie
            var r0 = r5;//assign %0 = %5  : {[{int character,int from,int to}] transitions}
            var r8 = new WyJS.List([new WyJS.Integer(104), new WyJS.Integer(101), new WyJS.Integer(108), new WyJS.Integer(112)], new WyJS.Type.List(new WyJS.Type.Int()));
            var r7 = add$Z9dFXd_k6$B3$j0FQ$$6$g0FO$V6$U0VK$35$g0FP$F5$U0$D3$J0VR$Z5$_0WL1U$kF$w5$h0$R$k5$_0$T$w4$L0FN$k5$d0$O$w4$sN$B6$o0VR$Z5$i0kOE(r0, r8);//invoke %7 = (%0, %8) Complex_Valid_8:add : function(Complex_Valid_8:Trie,Complex_Valid_8:string) -> Complex_Valid_8:Trie
            var r0 = r7;//assign %0 = %7  : {[{int character,int from,int to}] transitions}
            var r10 = new WyJS.List([new WyJS.Integer(104), new WyJS.Integer(101), new WyJS.Integer(108), new WyJS.Integer(108), new WyJS.Integer(111)], new WyJS.Type.List(new WyJS.Type.Int()));
            var r9 = contains$_9dF5X1Fc_k6$B3$j0FQ$$6$g0FO$V6$U0VK$35$g0FP$F5$U0$D3$J0VR$Z5$_pHs2$51Vr$cC$V2$q$cB$k2Vj$k9$12$q$7C$72Vj$$62Vt$VD$Z2Vo$kC$Dv(r0, r10);//invoke %9 = (%0, %10) Complex_Valid_8:contains : function(Complex_Valid_8:Trie,Complex_Valid_8:string) -> bool
            var r11 = true;
            if(r9 === r11){
               control_flow_pc = 1602;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1602:
            var r13 = new WyJS.List([new WyJS.Integer(98), new WyJS.Integer(108), new WyJS.Integer(97), new WyJS.Integer(104)], new WyJS.Type.List(new WyJS.Type.Int()));
            var r12 = contains$_9dF5X1Fc_k6$B3$j0FQ$$6$g0FO$V6$U0VK$35$g0FP$F5$U0$D3$J0VR$Z5$_pHs2$51Vr$cC$V2$q$cB$k2Vj$k9$12$q$7C$72Vj$$62Vt$VD$Z2Vo$kC$Dv(r0, r13);//invoke %12 = (%0, %13) Complex_Valid_8:contains : function(Complex_Valid_8:Trie,Complex_Valid_8:string) -> bool
            var r14 = true;
            if(r12 === r14){
               control_flow_pc = 1603;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 1604;
            control_flow_repeat = true;
            continue outer;//goto label1604
         case 1603:
            throw {name: 'Assert Failed', message: 'fail'}
         case 1604:
            var r16 = new WyJS.List([new WyJS.Integer(104), new WyJS.Integer(101), new WyJS.Integer(108)], new WyJS.Type.List(new WyJS.Type.Int()));
            var r15 = contains$_9dF5X1Fc_k6$B3$j0FQ$$6$g0FO$V6$U0VK$35$g0FP$F5$U0$D3$J0VR$Z5$_pHs2$51Vr$cC$V2$q$cB$k2Vj$k9$12$q$7C$72Vj$$62Vt$VD$Z2Vo$kC$Dv(r0, r16);//invoke %15 = (%0, %16) Complex_Valid_8:contains : function(Complex_Valid_8:Trie,Complex_Valid_8:string) -> bool
            var r17 = true;
            if(r15 === r17){
               control_flow_pc = 1605;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1605:
            var r19 = new WyJS.List([new WyJS.Integer(100), new WyJS.Integer(97), new WyJS.Integer(118), new WyJS.Integer(101)], new WyJS.Type.List(new WyJS.Type.Int()));
            var r18 = contains$_9dF5X1Fc_k6$B3$j0FQ$$6$g0FO$V6$U0VK$35$g0FP$F5$U0$D3$J0VR$Z5$_pHs2$51Vr$cC$V2$q$cB$k2Vj$k9$12$q$7C$72Vj$$62Vt$VD$Z2Vo$kC$Dv(r0, r19);//invoke %18 = (%0, %19) Complex_Valid_8:contains : function(Complex_Valid_8:Trie,Complex_Valid_8:string) -> bool
            var r20 = true;
            if(r18 === r20){
               control_flow_pc = 1606;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 1607;
            control_flow_repeat = true;
            continue outer;//goto label1607
         case 1606:
            throw {name: 'Assert Failed', message: 'fail'}
         case 1607:
            return;
      }
   }
}

