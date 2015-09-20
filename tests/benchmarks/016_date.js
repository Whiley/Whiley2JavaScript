function Date$a9fF5eP8V0$k$FB$N2$U0$O$35$o0FO3$30FN$F6$_0WL1N$$B$32$q$kM$F5$W0$S$Jq$$O$35$tpH$2$V0VN$k5$y1$m$7B$c2Vm9$P2Vr$kC$c2$oikE(r0, r1, r2){//function(016_date:day,016_date:month,int) -> 016_date:Date
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r3 = new WyJS.Record(["day", "month", "year"], [r0, r1, r2], new WyJS.Type.Record(["day", "month", "year"], [new WyJS.Type.Int(), new WyJS.Type.Int(), new WyJS.Type.Int()]));
            return r3;//return %3 : {int day,int month,int year}
            return;
      }
   }
}

function next$Y9bFXL1N$$B$32$q$kM$F5$W0$S$J50$G$35$o0FOF7(r0){//function(016_date:Date) -> 016_date:Date
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r3 = r0.fieldLoad("month");//fieldload %3 = %0 month : {int day,int month,int year}
            var r4 = new WyJS.Integer(2);
            if(WyJS.equals(r3, r4, false)){
               control_flow_pc = 14;
               control_flow_repeat = true;
               continue outer;
            }
            var r5 = new WyJS.Integer(29);
            var r1 = r5;//assign %1 = %5  : int
            control_flow_pc = 15;
            control_flow_repeat = true;
            continue outer;//goto label15
         case 14:
            var r6 = r0.fieldLoad("month");//fieldload %6 = %0 month : {int day,int month,int year}
            var r7 = new WyJS.Integer(9);
            var r8 = new WyJS.Integer(4);
            var r9 = new WyJS.Integer(6);
            var r10 = new WyJS.Integer(11);
            var r11 = new WyJS.List([r7, r8, r9, r10], new WyJS.Type.List(new WyJS.Type.Int()));
            if(WyJS.in(r6, r11)){
               control_flow_pc = 16;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 17;
            control_flow_repeat = true;
            continue outer;//goto label17
         case 16:
            var r12 = new WyJS.Integer(30);
            var r1 = r12;//assign %1 = %12  : int
            control_flow_pc = 15;
            control_flow_repeat = true;
            continue outer;//goto label15
         case 17:
            var r13 = new WyJS.Integer(31);
            var r1 = r13;//assign %1 = %13  : int
         case 15:
            var r14 = r0.fieldLoad("day");//fieldload %14 = %0 day : {int day,int month,int year}
            if(WyJS.equals(r14, r1, false)){
               control_flow_pc = 18;
               control_flow_repeat = true;
               continue outer;
            }
            var r15 = new WyJS.Integer(1);
            var r16 = new WyJS.Integer(1);
            r0.setValue("day", r16);
            var r17 = r0.fieldLoad("month");//fieldload %17 = %0 month : {int day,int month,int year}
            var r18 = new WyJS.Integer(1);
            var r19 = r17.add(r18);//add %19 = %17, %18 : int
            var r20 = r0.fieldLoad("month");//fieldload %20 = %0 month : {int day,int month,int year}
            var r21 = new WyJS.Integer(1);
            var r22 = r20.add(r21);//add %22 = %20, %21 : int
            r0.setValue("month", r22);
            var r23 = r0.fieldLoad("month");//fieldload %23 = %0 month : {int day,int month,int year}
            var r24 = new WyJS.Integer(13);
            if(WyJS.equals(r23, r24, false)){
               control_flow_pc = 19;
               control_flow_repeat = true;
               continue outer;
            }
            var r25 = r0.fieldLoad("year");//fieldload %25 = %0 year : {int day,int month,int year}
            var r26 = new WyJS.Integer(1);
            var r27 = r25.add(r26);//add %27 = %25, %26 : int
            var r28 = r0.fieldLoad("year");//fieldload %28 = %0 year : {int day,int month,int year}
            var r29 = new WyJS.Integer(1);
            var r30 = r28.add(r29);//add %30 = %28, %29 : int
            r0.setValue("year", r30);
            var r31 = new WyJS.Integer(1);
            var r32 = new WyJS.Integer(1);
            r0.setValue("month", r32);
         case 19:
            control_flow_pc = 20;
            control_flow_repeat = true;
            continue outer;//goto label20
         case 18:
            var r33 = r0.fieldLoad("day");//fieldload %33 = %0 day : {int day,int month,int year}
            var r34 = new WyJS.Integer(1);
            var r35 = r33.add(r34);//add %35 = %33, %34 : int
            var r36 = r0.fieldLoad("day");//fieldload %36 = %0 day : {int day,int month,int year}
            var r37 = new WyJS.Integer(1);
            var r38 = r36.add(r37);//add %38 = %36, %37 : int
            r0.setValue("day", r38);
         case 20:
            return r0;//return %0 : {int day,int month,int year}
            return;
      }
   }
}

function toString$Z9bFaL1d$kS$V5$d0$Q$J5$t0kA$k5$W0VQ$R5$j$FF$B4$20FH$ZZ0kR$F6$m0FP$s5$b0WL1N$$B$32$q$kM$F5$W0$S$J50$G$35$o0FO(r0){//function(016_date:Date) -> whiley/lang/ASCII:string
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r2 = r0.fieldLoad("day");//fieldload %2 = %0 day : {int day,int month,int year}
            var r1 = toString$Z9bFaL1d$kS$V5$d0$Q$J5$t0kA$k5$W0VQ$R5$j$FF$B4$20FH$ZZ0kR$F6$m0FP$s5$b0WA$(r2);//invoke %1 = (%2) whiley/lang/Int:toString : function(int) -> whiley/lang/ASCII:string
            var r3 = new WyJS.List([new WyJS.Integer(47)], new WyJS.Type.List(new WyJS.Type.Int()));
            var r4 = r1.append(r3);
            var r6 = r0.fieldLoad("month");//fieldload %6 = %0 month : {int day,int month,int year}
            var r5 = toString$Z9bFaL1d$kS$V5$d0$Q$J5$t0kA$k5$W0VQ$R5$j$FF$B4$20FH$ZZ0kR$F6$m0FP$s5$b0WA$(r6);//invoke %5 = (%6) whiley/lang/Int:toString : function(int) -> whiley/lang/ASCII:string
            var r7 = r4.append(r5);
            var r8 = new WyJS.List([new WyJS.Integer(47)], new WyJS.Type.List(new WyJS.Type.Int()));
            var r9 = r7.append(r8);
            var r11 = r0.fieldLoad("year");//fieldload %11 = %0 year : {int day,int month,int year}
            var r10 = toString$Z9bFaL1d$kS$V5$d0$Q$J5$t0kA$k5$W0VQ$R5$j$FF$B4$20FH$ZZ0kR$F6$m0FP$s5$b0WA$(r11);//invoke %10 = (%11) whiley/lang/Int:toString : function(int) -> whiley/lang/ASCII:string
            var r12 = r9.append(r10);
            return r12;//return %12 : [int]
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
            var r4 = new WyJS.Integer(1);
            var r5 = new WyJS.Integer(1);
            var r6 = new WyJS.Integer(2000);
            var r3 = Date$a9fF5eP8V0$k$FB$N2$U0$O$35$o0FO3$30FN$F6$_0WL1N$$B$32$q$kM$F5$W0$S$Jq$$O$35$tpH$2$V0VN$k5$y1$m$7B$c2Vm9$P2Vr$kC$c2$oikE(r4, r5, r6);//invoke %3 = (%4, %5, %6) 016_date:Date : function(016_date:day,016_date:month,int) -> 016_date:Date
            var r2 = r3.clone();//assign %2 = %3  : {int day,int month,int year}
            var r0 = r2.clone();//assign %0 = %2  : {int day,int month,int year}
            var r7 = next$Y9bFXL1N$$B$32$q$kM$F5$W0$S$J50$G$35$o0FOF7(r0);//invoke %7 = (%0) 016_date:next : function(016_date:Date) -> 016_date:Date
            var r9 = new WyJS.Integer(2);
            var r10 = new WyJS.Integer(1);
            var r11 = new WyJS.Integer(2000);
            var r8 = Date$a9fF5eP8V0$k$FB$N2$U0$O$35$o0FO3$30FN$F6$_0WL1N$$B$32$q$kM$F5$W0$S$Jq$$O$35$tpH$2$V0VN$k5$y1$m$7B$c2Vm9$P2Vr$kC$c2$oikE(r9, r10, r11);//invoke %8 = (%9, %10, %11) 016_date:Date : function(016_date:day,016_date:month,int) -> 016_date:Date
            if(WyJS.equals(r7, r8, true)){
               control_flow_pc = 21;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 21:
            var r13 = new WyJS.Integer(0);
            var r12 = r13;//assign %12 = %13  : int
            var r1 = r12;//assign %1 = %12  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case -2:
            var r14 = new WyJS.Integer(10);
            if(WyJS.gt(r1, r14, true)){
               control_flow_pc = 22;
               control_flow_repeat = true;
               continue outer;
            }
            var r15 = next$Y9bFXL1N$$B$32$q$kM$F5$W0$S$J50$G$35$o0FOF7(r0);//invoke %15 = (%0) 016_date:next : function(016_date:Date) -> 016_date:Date
            var r0 = r15.clone();//assign %0 = %15  : {int day,int month,int year}
            var r16 = new WyJS.Integer(1);
            var r17 = r1.add(r16);//add %17 = %1, %16 : int
            var r1 = r17;//assign %1 = %17  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case 22:
            var r19 = new WyJS.Integer(12);
            var r20 = new WyJS.Integer(1);
            var r21 = new WyJS.Integer(2000);
            var r18 = Date$a9fF5eP8V0$k$FB$N2$U0$O$35$o0FO3$30FN$F6$_0WL1N$$B$32$q$kM$F5$W0$S$Jq$$O$35$tpH$2$V0VN$k5$y1$m$7B$c2Vm9$P2Vr$kC$c2$oikE(r19, r20, r21);//invoke %18 = (%19, %20, %21) 016_date:Date : function(016_date:day,016_date:month,int) -> 016_date:Date
            if(WyJS.equals(r0, r18, true)){
               control_flow_pc = 23;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 23:
            return;
      }
   }
}

