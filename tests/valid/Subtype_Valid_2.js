function test(){//method() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r2 = new WyJS.Integer(1);
            var r3 = new WyJS.Record(["f"], [r2], new WyJS.Type.Record(["f"], [new WyJS.Type.Int()]));
            var r1 = r3.clone();//assign %1 = %3  : {int f}
            var r0 = r1.clone();//assign %0 = %1  : {int f}
            var r4 = r0.fieldLoad("f");//fieldload %4 = %0 f : {int f}
            var r5 = new WyJS.Integer(1);
            var r6 = r4.add(r5);//add %6 = %4, %5 : int
            var r7 = r0.fieldLoad("f");//fieldload %7 = %0 f : {int f}
            var r8 = new WyJS.Integer(1);
            var r9 = r7.add(r8);//add %9 = %7, %8 : int
            r0.setValue("f", r9);
            var r10 = new WyJS.Integer(2);
            var r11 = new WyJS.Record(["f"], [r10], new WyJS.Type.Record(["f"], [new WyJS.Type.Int()]));
            if(WyJS.equals(r0, r11, true)){
               control_flow_pc = 1298;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1298:
            return;
      }
   }
}

