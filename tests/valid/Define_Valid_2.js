function test(){//method() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r2 = new WyJS.Real(1.0);
            var r3 = new WyJS.Real(2.23);
            var r4 = new WyJS.Record(["x", "y"], [r2, r3], new WyJS.Type.Record(["x", "y"], [new WyJS.Type.Real(), new WyJS.Type.Real()]));
            var r1 = r4.clone();//assign %1 = %4  : {real x,real y}
            var r0 = r1.clone();//assign %0 = %1  : {real x,real y}
            var r5 = new WyJS.Real(1.0);
            var r6 = new WyJS.Real(2.23);
            var r7 = new WyJS.Record(["x", "y"], [r5, r6], new WyJS.Type.Record(["x", "y"], [new WyJS.Type.Real(), new WyJS.Type.Real()]));
            if(WyJS.equals(r0, r7, true)){
               control_flow_pc = 1217;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1217:
            return;
      }
   }
}

