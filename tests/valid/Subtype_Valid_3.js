function test(){//method() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r2 = new WyJS.Integer(1);
            var r3 = new WyJS.Integer(3);
            var r4 = new WyJS.Record(["f", "g"], [r2, r3], new WyJS.Type.Record(["f", "g"], [new WyJS.Type.Int(), new WyJS.Type.Int()]));
            var r5 = new WyJS.Integer(4);
            var r6 = new WyJS.Integer(8);
            var r7 = new WyJS.Record(["f", "g"], [r5, r6], new WyJS.Type.Record(["f", "g"], [new WyJS.Type.Int(), new WyJS.Type.Int()]));
            var r8 = new WyJS.Array([r4, r7], new WyJS.Type.Array(new WyJS.Type.Record(["f", "g"], [new WyJS.Type.Int(), new WyJS.Type.Int()])));
            var r1 = r8.clone(new WyJS.Type.Record(["f", "g"], [new WyJS.Type.Int(), new WyJS.Type.Int()]));//assign %1 = %8  : {int f,int g}[]
            var r0 = r1.clone(new WyJS.Type.Record(["f", "g"], [new WyJS.Type.Int(), new WyJS.Type.Int()]));//assign %0 = %1  : {int f,int g}[]
            var r9 = new WyJS.Integer(2);
            var r10 = new WyJS.Integer(0);
            var r11 = new WyJS.Integer(2);
            r0.getValue(r10).setValue("f", r11);
            var r12 = new WyJS.Integer(2);
            var r13 = new WyJS.Integer(3);
            var r14 = new WyJS.Record(["f", "g"], [r12, r13], new WyJS.Type.Record(["f", "g"], [new WyJS.Type.Int(), new WyJS.Type.Int()]));
            var r15 = new WyJS.Integer(4);
            var r16 = new WyJS.Integer(8);
            var r17 = new WyJS.Record(["f", "g"], [r15, r16], new WyJS.Type.Record(["f", "g"], [new WyJS.Type.Int(), new WyJS.Type.Int()]));
            var r18 = new WyJS.Array([r14, r17], new WyJS.Type.Array(new WyJS.Type.Record(["f", "g"], [new WyJS.Type.Int(), new WyJS.Type.Int()])));
            if(WyJS.equals(r0, r18, true)){
               control_flow_pc = 743;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 743:
            return;
      }
   }
}

