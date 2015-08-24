function f$Z9bF5D527RWz(r0){//function(int) -> [int]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r4 = new WyJS.Integer(1);
            var r5 = new WyJS.Integer(2);
            var r6 = new WyJS.Integer(64);
            var r7 = new WyJS.List([r4, r5, r6], new WyJS.Type.List(new WyJS.Type.Int()));
            r3 = r7.clone();//assign %3 = %7  : [int]
            r1 = r3.clone();//assign %1 = %3  : [int]
            r8 = r1.clone();//assign %8 = %1  : [int]
            r2 = r8.clone();//assign %2 = %8  : [int]
            var r9 = r1.length();//lengthof %9 = %1 : [int]
            if(WyJS.equals(r0, r9, true)){
               control_flow_pc = 2423;
               control_flow_repeat = true;
               continue outer;
            }
            var r10 = new WyJS.Integer(3);
            var r11 = new WyJS.Integer(2);
            var r12 = new WyJS.Integer(3);
            r2.setValue(r11, r12);
            control_flow_pc = 2424;
            control_flow_repeat = true;
            continue outer;//goto label2424
         case 2423:
            var r13 = new WyJS.Integer(2);
            r2.setValue(r13, r0);
         case 2424:
            var r14 = new WyJS.Integer(2);
            var r15 = r2.getValue(r14);
            var r16 = r1.length();//lengthof %16 = %1 : [int]
            if(WyJS.equals(r15, r16, true)){
               control_flow_pc = 2425;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2425:
            var r17 = r1.append(r2);
            return r17;//return %17 : [int]
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
            var r1 = new WyJS.Integer(2);
            var r0 = f$Z9bF5D527RWz(r1);//invoke %0 = (%1) ListAssign_Valid_7:f : function(int) -> [int]
            var r2 = new WyJS.Integer(1);
            var r3 = new WyJS.Integer(2);
            var r4 = new WyJS.Integer(64);
            var r5 = new WyJS.Integer(1);
            var r6 = new WyJS.Integer(2);
            var r7 = new WyJS.Integer(3);
            var r8 = new WyJS.List([r2, r3, r4, r5, r6, r7], new WyJS.Type.List(new WyJS.Type.Int()));
            if(WyJS.equals(r0, r8, true)){
               control_flow_pc = 2426;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2426:
            var r10 = new WyJS.Integer(3);
            var r9 = f$Z9bF5D527RWz(r10);//invoke %9 = (%10) ListAssign_Valid_7:f : function(int) -> [int]
            var r11 = new WyJS.Integer(1);
            var r12 = new WyJS.Integer(2);
            var r13 = new WyJS.Integer(64);
            var r14 = new WyJS.Integer(1);
            var r15 = new WyJS.Integer(2);
            var r16 = new WyJS.Integer(3);
            var r17 = new WyJS.List([r11, r12, r13, r14, r15, r16], new WyJS.Type.List(new WyJS.Type.Int()));
            if(WyJS.equals(r9, r17, true)){
               control_flow_pc = 2427;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2427:
      }
   }
}

