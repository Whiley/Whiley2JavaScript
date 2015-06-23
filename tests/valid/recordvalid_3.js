function test(){//method() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r5 = new WyJS.Integer(1);
            var r6 = new WyJS.Record(["x"], [r5]);
            var r4 = r6;//assign %4 = %6  : {int x}
            var r0 = r4;//assign %0 = %4  : {int x}
            var r8 = new WyJS.Integer(1);
            var r9 = new WyJS.Record(["x"], [r8]);
            var r7 = r9;//assign %7 = %9  : {int x}
            var r1 = r7;//assign %1 = %7  : {int x}
            var r11 = new WyJS.Record(["y"], [r0]);
            var r10 = r11;//assign %10 = %11  : {{int x} y}
            var r2 = r10;//assign %2 = %10  : {{int x} y}
            var r13 = new WyJS.Record(["y"], [r1]);
            var r12 = r13;//assign %12 = %13  : {{int x} y}
            var r3 = r12;//assign %3 = %12  : {{int x} y}
            if(WyJS.equals(r2, r3, true)){
               control_flow_pc = 0;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 0:
      }
   }
}

