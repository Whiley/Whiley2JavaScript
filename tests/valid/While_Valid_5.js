function extract$a9bF5D537klcoHc2$i1$o$7C$N2Vm$sA$g1Vk$VC$H2$m$sA$eO$kC$12$uik2(r0){//function([int]) -> [While_Valid_5:nat]
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
            var r5 = r6.clone(new WyJS.Type.Void());//assign %5 = %6  : [void]
            var r2 = r5.clone(new WyJS.Type.Int());//assign %2 = %5  : [int]
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case -2:
            var r7 = new WyJS.Integer(0);
            if(WyJS.lt(r1, r7, false)){
               control_flow_pc = 1158;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = -3;
            control_flow_repeat = true;
            break;
         case -3:
            var r9 = new WyJS.Integer(0);
            if(WyJS.lt(r8, r9, false)){
               control_flow_pc = 1158;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = -3;
            control_flow_repeat = true;
            break;
            control_flow_pc = 1159;
            control_flow_repeat = true;
            continue outer;//goto label1159
         case 1158:
            throw {name: 'Assert Failed', message: 'fail'}
         case 1159:
            return;
            var r10 = r0.length();//lengthof %10 = %0 : [int]
            if(WyJS.gt(r1, r10, true)){
               control_flow_pc = 1160;
               control_flow_repeat = true;
               continue outer;
            }
            var r11 = r0.getValue(r1);
            var r12 = new WyJS.Integer(0);
            if(WyJS.lt(r11, r12, false)){
               control_flow_pc = 1161;
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
            var r14 = new WyJS.List([r13], new WyJS.Type.List(new WyJS.Type.Int()));
            var r15 = r2.append(r14);
            var r2 = r15.clone(new WyJS.Type.Int());//assign %2 = %15  : [int]
            control_flow_pc = 1161;
            control_flow_repeat = true;
            break;
         case 1161:
            var r16 = new WyJS.Integer(1);
            var r17 = r1.add(r16);//add %17 = %1, %16 : int
            var r1 = r17;//assign %1 = %17  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case 1160:
            return r2;//return %2 : [int]
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
            var r15 = new WyJS.List([r4, r6, r7, r8, r10, r11, r12, r13, r14], new WyJS.Type.List(new WyJS.Type.Int()));
            var r2 = extract$a9bF5D537klcoHc2$i1$o$7C$N2Vm$sA$g1Vk$VC$H2$m$sA$eO$kC$12$uik2(r15);//invoke %2 = (%15) While_Valid_5:extract : function([int]) -> [While_Valid_5:nat]
            var r1 = r2.clone(new WyJS.Type.Int());//assign %1 = %2  : [int]
            var r0 = r1.clone(new WyJS.Type.Int());//assign %0 = %1  : [int]
            var r16 = new WyJS.Integer(1);
            var r17 = new WyJS.Integer(2);
            var r18 = new WyJS.Integer(3);
            var r19 = new WyJS.Integer(2345);
            var r20 = new WyJS.Integer(4);
            var r21 = new WyJS.Integer(5);
            var r22 = new WyJS.List([r16, r17, r18, r19, r20, r21], new WyJS.Type.List(new WyJS.Type.Int()));
            if(WyJS.equals(r0, r22, true)){
               control_flow_pc = 1162;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1162:
            return;
      }
   }
}

