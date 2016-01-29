function extract$a9bF5D537klcoHk2$i1$o$7C$N2Vm$sA$g1Vk$VC$H2$m$sA$X0VN5$R2Vk$ViAw(r0){//function(int[]) -> While_Valid_11:nat[]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r4 = new WyJS.Integer(0);
            var r3 = r4;//assign %3 = %4  : int
            var r1 = r3;//assign %1 = %3  : int
            var r6 = new WyJS.Integer(0);
            var r7 = r0.length();//lengthof %7 = %0 : int[]
            var r8 = WyJS.ArrayGen(r6, r7, new WyJS.Type.Array(new WyJS.Type.Int()));
            var r5 = r8.clone(new WyJS.Type.Int());//assign %5 = %8  : int[]
            var r2 = r5.clone(new WyJS.Type.Int());//assign %2 = %5  : int[]
            control_flow_pc = -3;
            control_flow_repeat = true;
            break;
         case -3:
            var r17 = r0.length();//lengthof %17 = %0 : int[]
            if(WyJS.gt(r1, r17, true)){
               control_flow_pc = 584;
               control_flow_repeat = true;
               continue outer;
            }
            var r18 = r0.getValue(r1);
            var r19 = new WyJS.Integer(0);
            if(WyJS.gt(r18, r19, true)){
               control_flow_pc = 585;
               control_flow_repeat = true;
               break;
            }
            else{
               control_flow_pc = -4;
               control_flow_repeat = true;
               break;
            }
         case -4:
            var r20 = r0.getValue(r1);
            var r21 = r20.neg();//neg %21 = %20 : int
            var r22 = r0.getValue(r1);
            var r23 = r22.neg();//neg %23 = %22 : int
            r2.setValue(r1, r23);
            control_flow_pc = 586;
            control_flow_repeat = true;
            continue outer;//goto label586
            control_flow_pc = -3;
            control_flow_repeat = true;
         case 585:
            var r24 = r0.getValue(r1);
            var r25 = r0.getValue(r1);
            r2.setValue(r1, r25);
            control_flow_pc = -3;
            control_flow_repeat = true;
         case 586:
            var r26 = new WyJS.Integer(1);
            var r27 = r1.add(r26);//add %27 = %1, %26 : int
            var r1 = r27;//assign %1 = %27  : int
            control_flow_pc = -3;
            control_flow_repeat = true;
            break;
         case 584:
            return r2;//return %2 : int[]
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
            var r3 = new WyJS.Integer(1);
            var r4 = r3.neg();//neg %4 = %3 : int
            var r5 = new WyJS.Integer(2);
            var r6 = new WyJS.Integer(3);
            var r7 = new WyJS.Integer(4);
            var r8 = r7.neg();//neg %8 = %7 : int
            var r9 = new WyJS.Integer(5);
            var r10 = new WyJS.Integer(6);
            var r11 = new WyJS.Integer(7);
            var r12 = new WyJS.Integer(23987);
            var r13 = new WyJS.Integer(23897);
            var r14 = r13.neg();//neg %14 = %13 : int
            var r15 = new WyJS.Integer(0);
            var r16 = new WyJS.Integer(1);
            var r17 = r16.neg();//neg %17 = %16 : int
            var r18 = new WyJS.Integer(1);
            var r19 = new WyJS.Integer(2389);
            var r20 = r19.neg();//neg %20 = %19 : int
            var r21 = new WyJS.Array([r4, r5, r6, r8, r9, r10, r11, r12, r14, r15, r17, r18, r20], new WyJS.Type.Array(new WyJS.Type.Int()));
            var r2 = extract$a9bF5D537klcoHk2$i1$o$7C$N2Vm$sA$g1Vk$VC$H2$m$sA$X0VN5$R2Vk$ViAw(r21);//invoke %2 = (%21) While_Valid_11:extract : function(int[]) -> While_Valid_11:nat[]
            var r1 = r2.clone(new WyJS.Type.Int());//assign %1 = %2  : int[]
            var r0 = r1.clone(new WyJS.Type.Int());//assign %0 = %1  : int[]
            var r22 = new WyJS.Integer(1);
            var r23 = new WyJS.Integer(2);
            var r24 = new WyJS.Integer(3);
            var r25 = new WyJS.Integer(4);
            var r26 = new WyJS.Integer(5);
            var r27 = new WyJS.Integer(6);
            var r28 = new WyJS.Integer(7);
            var r29 = new WyJS.Integer(23987);
            var r30 = new WyJS.Integer(23897);
            var r31 = new WyJS.Integer(0);
            var r32 = new WyJS.Integer(1);
            var r33 = new WyJS.Integer(1);
            var r34 = new WyJS.Integer(2389);
            var r35 = new WyJS.Array([r22, r23, r24, r25, r26, r27, r28, r29, r30, r31, r32, r33, r34], new WyJS.Type.Array(new WyJS.Type.Int()));
            if(WyJS.equals(r0, r35, true)){
               control_flow_pc = 587;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 587:
            var r37 = new WyJS.Integer(0);
            var r38 = new WyJS.Integer(0);
            var r39 = WyJS.ArrayGen(r37, r38, new WyJS.Type.Array(new WyJS.Type.Int()));
            var r36 = extract$a9bF5D537klcoHk2$i1$o$7C$N2Vm$sA$g1Vk$VC$H2$m$sA$X0VN5$R2Vk$ViAw(r39);//invoke %36 = (%39) While_Valid_11:extract : function(int[]) -> While_Valid_11:nat[]
            var r0 = r36.clone(new WyJS.Type.Int());//assign %0 = %36  : int[]
            var r40 = new WyJS.Integer(0);
            var r41 = new WyJS.Integer(0);
            var r42 = WyJS.ArrayGen(r40, r41, new WyJS.Type.Array(new WyJS.Type.Int()));
            if(WyJS.equals(r0, r42, true)){
               control_flow_pc = 588;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 588:
            return;
      }
   }
}

