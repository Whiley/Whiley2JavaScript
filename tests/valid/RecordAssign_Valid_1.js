function test$1A_7VkE(){//method() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r4 = new WyJS.Integer(1);
            var r5 = null;/n            var r6 = new WyJS.Record(["x", "y"], [r4, r5], new WyJS.Type.Record(["x", "y"], [new WyJS.Type.Int(), new WyJS.Type.Null()]));
            var r3 = r6;//assign %3 = %6  : {int x,null y}
            var r0 = r3;//assign %0 = %3  : {int|real x,int|null y}
            var r8 = new WyJS.Real(1.5);
            var r9 = new WyJS.Integer(1);
            var r10 = new WyJS.Record(["x", "y"], [r8, r9], new WyJS.Type.Record(["x", "y"], [new WyJS.Type.Real(), new WyJS.Type.Int()]));
            var r7 = r10;//assign %7 = %10  : {real x,int y}
            var r1 = r7;//assign %1 = %7  : {int|real x,int|null y}
            var r12 = new WyJS.Real(1.7);
            var r13 = null;/n            var r14 = new WyJS.Record(["x", "y"], [r12, r13], new WyJS.Type.Record(["x", "y"], [new WyJS.Type.Real(), new WyJS.Type.Null()]));
            var r11 = r14;//assign %11 = %14  : {real x,null y}
            var r2 = r11;//assign %2 = %11  : {int|real x,int|null y}
      }
   }
}

