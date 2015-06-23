function test(){//method() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r3 = new WyJS.Integer(1);
            var r4 = new WyJS.Record(["x"], [r3]);
            var r2 = r4;//assign %2 = %4  : {int x}
            var r0 = r2;//assign %0 = %2  : {int x}
            var r6 = new WyJS.Integer(1);
            var r7 = new WyJS.Record(["x"], [r6]);
            var r5 = r7;//assign %5 = %7  : {int x}
            var r1 = r5;//assign %1 = %5  : {int x}
            if(WyJS.equals(r0, r1, true)){
               control_flow_pc = 0;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 0:
      }
   }
}

