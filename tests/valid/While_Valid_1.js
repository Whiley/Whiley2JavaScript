function reverse$Z9bF1D527RWz(r0){//function([int]) -> [int]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r4 = r0.length();//lengthof %4 = %0 : [int]
            var r3 = r4;//assign %3 = %4  : int
            var r1 = r3;//assign %1 = %3  : int
            var r6 = new WyJS.List([], new WyJS.Type.List(new WyJS.Type.Void()));
            r5 = r6.clone();//assign %5 = %6  : [void]
            r2 = r5.clone();//assign %2 = %5  : [int]
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case -2:
            var r7 = r0.length();//lengthof %7 = %0 : [int]
            if(WyJS.lt(r1, r7, true)){
               control_flow_pc = 1118;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1118:
            var r8 = new WyJS.Integer(0);
            if(WyJS.lt(r1, r8, true)){
               control_flow_pc = 1119;
               control_flow_repeat = true;
               continue outer;
            }
            var r9 = new WyJS.Integer(1);
            var r10 = r1.sub(r9);//sub %10 = %1, %9 : int
            var r1 = r10;//assign %1 = %10  : int
            var r11 = r0.getValue(r1);
            var r12 = new WyJS.List([r11], new WyJS.Type.List(new WyJS.Type.Int()));
            var r13 = r2.append(r12);
            r2 = r13.clone();//assign %2 = %13  : [int]
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case 1119:
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
            var r8 = new WyJS.List([r3, r4, r5, r6, r7], new WyJS.Type.List(new WyJS.Type.Int()));
            var r2 = reverse$Z9bF1D527RWz(r8);//invoke %2 = (%8) While_Valid_1:reverse : function([int]) -> [int]
            r1 = r2.clone();//assign %1 = %2  : [int]
            r0 = r1.clone();//assign %0 = %1  : [int]
            var r9 = new WyJS.Integer(5);
            var r10 = new WyJS.Integer(4);
            var r11 = new WyJS.Integer(3);
            var r12 = new WyJS.Integer(2);
            var r13 = new WyJS.Integer(1);
            var r14 = new WyJS.List([r9, r10, r11, r12, r13], new WyJS.Type.List(new WyJS.Type.Int()));
            if(WyJS.equals(r0, r14, true)){
               control_flow_pc = 1120;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1120:
      }
   }
}

