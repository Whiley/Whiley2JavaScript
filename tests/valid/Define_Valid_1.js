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
            var r9 = new WyJS.Integer(1);
            var r10 = new WyJS.Integer(2);
            var r11 = new WyJS.Record(["x", "y"], [r9, r10], new WyJS.Type.Record(["x", "y"], [new WyJS.Type.Int(), new WyJS.Type.Int()]));
            var r8 = r11;//assign %8 = %11  : {int x,int y}
            var r1 = r8;//assign %1 = %8  : {int x,int y}
            var r13 = r1.fieldLoad("x");//fieldload %13 = %1 x : {int x,int y}
            var r12 = r13;//assign %12 = %13  : int
            var r2 = r12;//assign %2 = %12  : int
            var r14 = new WyJS.Integer(1);
            if(WyJS.equals(r2, r14, true)){
               control_flow_pc = 534;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 534:
            var r15 = new WyJS.Integer(0);
            var r16 = r0.getValue(r15);
            var r17 = new WyJS.Integer(1);
            if(WyJS.equals(r16, r17, true)){
               control_flow_pc = 535;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 535:
      }
   }
}
