function f$Z9bFaA$0D5Wz(r0){//function([int]) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = r0.length();//lengthof %1 = %0 : [int]
            return r1;//return %1 : int
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
            var r4 = new WyJS.Integer(1);
            var r5 = new WyJS.Integer(2);
            var r6 = new WyJS.Integer(3);
            var r7 = new WyJS.List([r4, r5, r6], new WyJS.Type.List(new WyJS.Type.Int()));
            r3 = r7.clone();//assign %3 = %7  : [int]
            r0 = r3.clone();//assign %0 = %3  : [int]
            var r9 = new WyJS.Integer(5);
            var r10 = new WyJS.Integer(6);
            var r11 = new WyJS.Integer(7);
            var r12 = new WyJS.List([r9, r10, r11], new WyJS.Type.List(new WyJS.Type.Int()));
            r8 = r12.clone();//assign %8 = %12  : [int]
            r1 = r8.clone();//assign %1 = %8  : [int]
            var r15 = r0.append(r1);
            var r14 = f$Z9bFaA$0D5Wz(r15);//invoke %14 = (%15) ListAppend_Valid_11:f : function([int]) -> int
            var r13 = r14;//assign %13 = %14  : int
            var r2 = r13;//assign %2 = %13  : int
            var r16 = new WyJS.Integer(6);
            if(WyJS.equals(r2, r16, true)){
               control_flow_pc = 1950;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1950:
      }
   }
}

