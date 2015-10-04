function partition$Z9bF1D527oHV$cC$12Vo$kh1VW$sC$N2Vr$Fi2{//function(main:Color[]) -> main:Color[]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r5 = new WyJS.Integer(0);
            var r4 = r5;//assign %4 = %5  : int
            var r1 = r4;//assign %1 = %4  : int
            var r7 = new WyJS.Integer(0);
            var r6 = r7;//assign %6 = %7  : int
            var r2 = r6;//assign %2 = %6  : int
            var r9 = r0.length();//lengthof %9 = %0 : int[]
            var r10 = new WyJS.Integer(1);
            var r11 = r9.sub(r10);//sub %11 = %9, %10 : int
            var r8 = r11;//assign %8 = %11  : int
            var r3 = r8;//assign %3 = %8  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case -2:
            if(WyJS.gt(r2, r3, false)){
               control_flow_pc = 3;
               control_flow_repeat = true;
               continue outer;
            }
            var r14 = r0.getValue(r2);
            var r15 = new WyJS.Integer(1);
            if(WyJS.gt(r14, r15, true)){
               control_flow_pc = 4;
               control_flow_repeat = true;
               break;
            }
            else{
               control_flow_pc = -3;
               control_flow_repeat = true;
               break;
            }
         case -3:
            var r16 = swap$_9fFXOsNFVk4P8F$o5$W0FP$sL0kF$w5$g0kQ$7r(r0, r1, r2);//invoke %16 = (%0, %1, %2) main:swap : function(main:Color[],int,int) -> main:Color[]
            var r0 = r16.clone(new WyJS.Type.Int());//assign %0 = %16  : int[]
            var r17 = new WyJS.Integer(1);
            var r18 = r1.add(r17);//add %18 = %1, %17 : int
            var r1 = r18;//assign %1 = %18  : int
            var r19 = new WyJS.Integer(1);
            var r20 = r2.add(r19);//add %20 = %2, %19 : int
            var r2 = r20;//assign %2 = %20  : int
            control_flow_pc = 5;
            control_flow_repeat = true;
            continue outer;//goto label5
            control_flow_pc = 5;
            control_flow_repeat = true;
            break;
         case 4:
            var r21 = r0.getValue(r2);
            var r22 = new WyJS.Integer(1);
            if(WyJS.lt(r21, r22, true)){
               control_flow_pc = 6;
               control_flow_repeat = true;
               break;
            }
            else{
               control_flow_pc = -4;
               control_flow_repeat = true;
               break;
            }
         case -4:
            var r23 = swap$_9fFXOsNFVk4P8F$o5$W0FP$sL0kF$w5$g0kQ$7r(r0, r2, r3);//invoke %23 = (%0, %2, %3) main:swap : function(main:Color[],int,int) -> main:Color[]
            var r0 = r23.clone(new WyJS.Type.Int());//assign %0 = %23  : int[]
            var r24 = new WyJS.Integer(1);
            var r25 = r3.sub(r24);//sub %25 = %3, %24 : int
            var r3 = r25;//assign %3 = %25  : int
            control_flow_pc = 5;
            control_flow_repeat = true;
            continue outer;//goto label5
            control_flow_pc = 5;
            control_flow_repeat = true;
            break;
         case 6:
            var r26 = new WyJS.Integer(1);
            var r27 = r2.add(r26);//add %27 = %2, %26 : int
            var r2 = r27;//assign %2 = %27  : int
            control_flow_pc = 5;
            control_flow_repeat = true;
            break;
         case 5:
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case 3:
            return r0;//return %0 : int[]
            return;
      }
   }
}

function swap$_9fFXOsNFVk4P8F$o5$W0FP$sL0kF$w5$g0kQ$7r(r0, r1, r2){//function(main:Color[],int,int) -> main:Color[]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r5 = r0.getValue(r1);
            var r4 = r5;//assign %4 = %5  : int
            var r3 = r4;//assign %3 = %4  : int
            var r6 = r0.getValue(r2);
            var r7 = r0.getValue(r2);
            r0.setValue(r1, r7);
            r0.setValue(r2, r3);
            return r0;//return %0 : int[]
            return;
      }
   }
}