function test$1A_7VkE(){//method() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r3 = new WyJS.Integer(2);
            var r4 = new WyJS.Record(["op"], [r3], new WyJS.Type.Record(["op"], [new WyJS.Type.Int()]));
            var r2 = r4;//assign %2 = %4  : {int op}
            var r0 = r2;//assign %0 = %2  : {int|[int] op}
            var r5 = new WyJS.Integer(1);
            var r6 = new WyJS.Integer(1);
            r0.setValue("op", r6);
            var r7 = r0;//assign %7 = %0  : {int op}
            var r1 = r7;//assign %1 = %7  : {int|[int] op}
            var r8 = new WyJS.Integer(1);
            var r9 = new WyJS.Record(["op"], [r8], new WyJS.Type.Record(["op"], [new WyJS.Type.Int()]));
            if(WyJS.equals(r1, r9, true)){
               control_flow_pc = 412;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 412:
            var r10 = new WyJS.Integer(1);
            var r11 = new WyJS.Integer(2);
            var r12 = new WyJS.Integer(3);
            var r13 = new WyJS.List([r10, r11, r12], new WyJS.Type.List(new WyJS.Type.Int()));
            var r14 = new WyJS.Record(["op"], [r13], new WyJS.Type.Record(["op"], [new WyJS.Type.List(new WyJS.Type.Int())]));
            var r0 = r14;//assign %0 = %14  : {[int] op}
            var r15 = new WyJS.Integer(1);
            var r16 = new WyJS.Integer(2);
            var r17 = new WyJS.Integer(3);
            var r18 = new WyJS.List([r15, r16, r17], new WyJS.Type.List(new WyJS.Type.Int()));
            var r19 = new WyJS.Record(["op"], [r18], new WyJS.Type.Record(["op"], [new WyJS.Type.List(new WyJS.Type.Int())]));
            if(WyJS.equals(r0, r19, true)){
               control_flow_pc = 413;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 413:
            return;
      }
   }
}

