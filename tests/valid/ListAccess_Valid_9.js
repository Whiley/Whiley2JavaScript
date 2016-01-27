function test(){//method() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r3 = new WyJS.Real(1.0);
            var r4 = new WyJS.Real(2.0);
            var r5 = new WyJS.Real(3.0);
            var r6 = new WyJS.Array([r3, r4, r5], new WyJS.Type.Array(new WyJS.Type.Real()));
            var r7 = new WyJS.Record(["items"], [r6], new WyJS.Type.Record(["items"], [new WyJS.Type.Array(new WyJS.Type.Real())]));
            var r2 = r7.clone();//assign %2 = %7  : {real[] items}
            var r0 = r2.clone();//assign %0 = %2  : {real[] items}
            var r9 = r0.fieldLoad("items");//fieldload %9 = %0 items : {real[] items}
            var r10 = new WyJS.Integer(1);
            var r11 = r9.getValue(r10);
            var r8 = r11;//assign %8 = %11  : real
            var r1 = r8;//assign %1 = %8  : real
            var r12 = new WyJS.Real(2.0);
            if(WyJS.equals(r1, r12, true)){
               control_flow_pc = 919;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 919:
            return;
      }
   }
}

