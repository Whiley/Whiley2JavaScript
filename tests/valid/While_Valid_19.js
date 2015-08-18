function test$1A_7VkE(){//method() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r2 = new WyJS.List([], new WyJS.Type.List(new WyJS.Type.Void()));
            r1 = r2.clone();//assign %1 = %2  : [void]
            r0 = r1.clone();//assign %0 = %1  : [[int]]
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case -2:
            var r3 = r0.length();//lengthof %3 = %0 : [[void]]
            var r4 = new WyJS.Integer(5);
            if(WyJS.gt(r3, r4, true)){
               control_flow_pc = 580;
               control_flow_repeat = true;
               continue outer;
            }
            var r5 = new WyJS.List([], new WyJS.Type.List(new WyJS.Type.Void()));
            var r6 = new WyJS.List([r5], new WyJS.Type.List(new WyJS.Type.List(new WyJS.Type.Void())));
            var r7 = r0.append(r6);
            r0 = r7.clone();//assign %0 = %7  : [[void]]
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case 580:
            var r8 = new WyJS.List([], new WyJS.Type.List(new WyJS.Type.Void()));
            var r9 = new WyJS.List([], new WyJS.Type.List(new WyJS.Type.Void()));
            var r10 = new WyJS.List([], new WyJS.Type.List(new WyJS.Type.Void()));
            var r11 = new WyJS.List([], new WyJS.Type.List(new WyJS.Type.Void()));
            var r12 = new WyJS.List([], new WyJS.Type.List(new WyJS.Type.Void()));
            var r13 = new WyJS.List([r8, r9, r10, r11, r12], new WyJS.Type.List(new WyJS.Type.List(new WyJS.Type.Void())));
            if(WyJS.equals(r0, r13, true)){
               control_flow_pc = 581;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 581:
      }
   }
}

