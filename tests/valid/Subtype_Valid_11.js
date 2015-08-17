function test$1A_7VkE(){//method() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r2 = new WyJS.Integer(1);
            var r3 = new WyJS.Record(["f"], [r2], new WyJS.Type.Record(["f"], [new WyJS.Type.Int()]));
            var r1 = r3;//assign %1 = %3  : {int f}
            var r0 = r1;//assign %0 = %1  : {int f}
            var r4 = new WyJS.Integer(2);
            var r5 = new WyJS.Integer(2);
            r0.setValue("f", r5);
            var r6 = new WyJS.Integer(2);
            var r7 = new WyJS.Record(["f"], [r6], new WyJS.Type.Record(["f"], [new WyJS.Type.Int()]));
            if(WyJS.equals(r0, r7, true)){
               control_flow_pc = 489;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 489:
      }
   }
}

