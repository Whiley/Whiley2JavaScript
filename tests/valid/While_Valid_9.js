function extract$Z9bF1D527RWz(r0){//function([int]) -> [int]
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
            var r6 = new WyJS.Integer(1);
            var r7 = new WyJS.List([r6], new WyJS.Type.List(new WyJS.Type.Int()));
            r5 = r7.clone();//assign %5 = %7  : [int]
            r2 = r5.clone();//assign %2 = %5  : [int]
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case -2:
            var r8 = r2.length();//lengthof %8 = %2 : [int]
            var r9 = new WyJS.Integer(0);
            if(WyJS.gt(r8, r9, false)){
               control_flow_pc = 1158;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1158:
            var r10 = r0.length();//lengthof %10 = %0 : [int]
            if(WyJS.gt(r1, r10, true)){
               control_flow_pc = 1159;
               control_flow_repeat = true;
               continue outer;
            }
            var r11 = new WyJS.Integer(1);
            var r12 = new WyJS.List([r11], new WyJS.Type.List(new WyJS.Type.Int()));
            var r13 = r2.append(r12);
            r2 = r13.clone();//assign %2 = %13  : [int]
            var r14 = new WyJS.Integer(1);
            var r15 = r1.add(r14);//add %15 = %1, %14 : int
            var r1 = r15;//assign %1 = %15  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case 1159:
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
            var r4 = new WyJS.Integer(2);
            var r5 = new WyJS.Integer(3);
            var r6 = new WyJS.Integer(4);
            var r7 = new WyJS.Integer(5);
            var r8 = new WyJS.Integer(6);
            var r9 = new WyJS.Integer(7);
            var r10 = new WyJS.List([r3, r4, r5, r6, r7, r8, r9], new WyJS.Type.List(new WyJS.Type.Int()));
            var r2 = extract$Z9bF1D527RWz(r10);//invoke %2 = (%10) While_Valid_9:extract : function([int]) -> [int]
            r1 = r2.clone();//assign %1 = %2  : [int]
            r0 = r1.clone();//assign %0 = %1  : [int]
            var r11 = new WyJS.Integer(1);
            var r12 = new WyJS.Integer(1);
            var r13 = new WyJS.Integer(1);
            var r14 = new WyJS.Integer(1);
            var r15 = new WyJS.Integer(1);
            var r16 = new WyJS.Integer(1);
            var r17 = new WyJS.Integer(1);
            var r18 = new WyJS.Integer(1);
            var r19 = new WyJS.List([r11, r12, r13, r14, r15, r16, r17, r18], new WyJS.Type.List(new WyJS.Type.Int()));
            if(WyJS.equals(r0, r19, true)){
               control_flow_pc = 1160;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1160:
            var r21 = new WyJS.List([], new WyJS.Type.List(new WyJS.Type.Void()));
            var r20 = extract$Z9bF1D527RWz(r21);//invoke %20 = (%21) While_Valid_9:extract : function([int]) -> [int]
            r0 = r20.clone();//assign %0 = %20  : [int]
            var r22 = new WyJS.Integer(1);
            var r23 = new WyJS.List([r22], new WyJS.Type.List(new WyJS.Type.Int()));
            if(WyJS.equals(r0, r23, true)){
               control_flow_pc = 1161;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1161:
      }
   }
}

