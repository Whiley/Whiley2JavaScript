function extract$a9bF5D537klcoHc2$i1$o$7C$N2Vm$sA$g1Vk$VC$H2$m$sA$eO$kC$12$uik2(r0){//function(int[]) -> While_Valid_5:nat[]
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
               control_flow_pc = 658;
               control_flow_repeat = true;
               continue outer;
            }
            var r18 = r0.getValue(r1);
            var r19 = new WyJS.Integer(0);
            if(WyJS.lt(r18, r19, false)){
               control_flow_pc = 659;
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
            var r21 = r0.getValue(r1);
            r2.setValue(r1, r21);
            control_flow_pc = -3;
            control_flow_repeat = true;
         case 659:
            var r22 = new WyJS.Integer(1);
            var r23 = r1.add(r22);//add %23 = %1, %22 : int
            var r1 = r23;//assign %1 = %23  : int
            control_flow_pc = -3;
            control_flow_repeat = true;
            break;
         case 658:
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
            var r3 = new WyJS.Integer(2);
            var r4 = r3.neg();//neg %4 = %3 : int
            var r5 = new WyJS.Integer(3);
            var r6 = r5.neg();//neg %6 = %5 : int
            var r7 = new WyJS.Integer(1);
            var r8 = new WyJS.Integer(2);
            var r9 = new WyJS.Integer(23);
            var r10 = r9.neg();//neg %10 = %9 : int
            var r11 = new WyJS.Integer(3);
            var r12 = new WyJS.Integer(2345);
            var r13 = new WyJS.Integer(4);
            var r14 = new WyJS.Integer(5);
            var r15 = new WyJS.Array([r4, r6, r7, r8, r10, r11, r12, r13, r14], new WyJS.Type.Array(new WyJS.Type.Int()));
            var r2 = extract$a9bF5D537klcoHc2$i1$o$7C$N2Vm$sA$g1Vk$VC$H2$m$sA$eO$kC$12$uik2(r15);//invoke %2 = (%15) While_Valid_5:extract : function(int[]) -> While_Valid_5:nat[]
            var r1 = r2.clone(new WyJS.Type.Int());//assign %1 = %2  : int[]
            var r0 = r1.clone(new WyJS.Type.Int());//assign %0 = %1  : int[]
            var r16 = new WyJS.Integer(0);
            var r17 = new WyJS.Integer(0);
            var r18 = new WyJS.Integer(1);
            var r19 = new WyJS.Integer(2);
            var r20 = new WyJS.Integer(0);
            var r21 = new WyJS.Integer(3);
            var r22 = new WyJS.Integer(2345);
            var r23 = new WyJS.Integer(4);
            var r24 = new WyJS.Integer(5);
            var r25 = new WyJS.Array([r16, r17, r18, r19, r20, r21, r22, r23, r24], new WyJS.Type.Array(new WyJS.Type.Int()));
            if(WyJS.equals(r0, r25, true)){
               control_flow_pc = 660;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 660:
            return;
      }
   }
}

