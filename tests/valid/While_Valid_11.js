function extract$a9bF5D537klcoHk2$i1$o$7C$N2Vm$sA$g1Vk$VC$H2$m$sA$X0VN5$R2Vk$ViAw(r0){//function([int]) -> [While_Valid_11:nat]
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
            var r6 = new WyJS.List([], new WyJS.Type.List(new WyJS.Type.Void()));
            r5 = r6.clone();//assign %5 = %6  : [void]
            r2 = r5.clone();//assign %2 = %5  : [int]
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case -2:
            var r7 = new WyJS.Integer(0);
            if(WyJS.lt(r1, r7, false)){
               control_flow_pc = 546;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = -3;
            control_flow_repeat = true;
            break;
         case -3:
            var r9 = new WyJS.Integer(0);
            if(WyJS.lt(r8, r9, false)){
               control_flow_pc = 546;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = -3;
            control_flow_repeat = true;
            break;
            control_flow_pc = 547;
            control_flow_repeat = true;
            continue outer;//goto label547
         case 546:
            throw {name: 'Assert Failed', message: 'fail'}
         case 547:
            var r10 = r0.length();//lengthof %10 = %0 : [int]
            if(WyJS.gt(r1, r10, true)){
               control_flow_pc = 548;
               control_flow_repeat = true;
               continue outer;
            }
            var r11 = r0.getValue(r1);
            var r12 = new WyJS.Integer(0);
            if(WyJS.gt(r11, r12, true)){
               control_flow_pc = 549;
               control_flow_repeat = true;
               break;
            }
            else{
               control_flow_pc = -4;
               control_flow_repeat = true;
               break;
            }
         case -4:
            var r13 = r0.getValue(r1);
            var r14 = r13.neg();//neg %14 = %13 : int
            var r15 = new WyJS.List([r14], new WyJS.Type.List(new WyJS.Type.Int()));
            var r16 = r2.append(r15);
            r2 = r16.clone();//assign %2 = %16  : [int]
            control_flow_pc = 550;
            control_flow_repeat = true;
            continue outer;//goto label550
            control_flow_pc = 550;
            control_flow_repeat = true;
            break;
         case 549:
            var r17 = r0.getValue(r1);
            var r18 = new WyJS.List([r17], new WyJS.Type.List(new WyJS.Type.Int()));
            var r19 = r2.append(r18);
            r2 = r19.clone();//assign %2 = %19  : [int]
            control_flow_pc = 550;
            control_flow_repeat = true;
            break;
         case 550:
            var r20 = new WyJS.Integer(1);
            var r21 = r1.add(r20);//add %21 = %1, %20 : int
            var r1 = r21;//assign %1 = %21  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case 548:
            return r2;//return %2 : [int]
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
            var r21 = new WyJS.List([r4, r5, r6, r8, r9, r10, r11, r12, r14, r15, r17, r18, r20], new WyJS.Type.List(new WyJS.Type.Int()));
            var r2 = extract$a9bF5D537klcoHk2$i1$o$7C$N2Vm$sA$g1Vk$VC$H2$m$sA$X0VN5$R2Vk$ViAw(r21);//invoke %2 = (%21) While_Valid_11:extract : function([int]) -> [While_Valid_11:nat]
            r1 = r2.clone();//assign %1 = %2  : [int]
            r0 = r1.clone();//assign %0 = %1  : [int]
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
            var r35 = new WyJS.List([r22, r23, r24, r25, r26, r27, r28, r29, r30, r31, r32, r33, r34], new WyJS.Type.List(new WyJS.Type.Int()));
            if(WyJS.equals(r0, r35, true)){
               control_flow_pc = 551;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 551:
            var r37 = new WyJS.List([], new WyJS.Type.List(new WyJS.Type.Void()));
            var r36 = extract$a9bF5D537klcoHk2$i1$o$7C$N2Vm$sA$g1Vk$VC$H2$m$sA$X0VN5$R2Vk$ViAw(r37);//invoke %36 = (%37) While_Valid_11:extract : function([int]) -> [While_Valid_11:nat]
            r0 = r36.clone();//assign %0 = %36  : [int]
            var r38 = new WyJS.List([], new WyJS.Type.List(new WyJS.Type.Void()));
            if(WyJS.equals(r0, r38, true)){
               control_flow_pc = 552;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 552:
      }
   }
}

