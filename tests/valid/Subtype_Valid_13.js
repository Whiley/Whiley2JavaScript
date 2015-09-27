function test(){//method() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r2 = new WyJS.Integer(1);
            var r3 = new WyJS.Integer(5);
            var r4 = new WyJS.Record(["f", "g"], [r2, r3], new WyJS.Type.Record(["f", "g"], [new WyJS.Type.Int(), new WyJS.Type.Int()]));
            var r1 = r4.clone();//assign %1 = %4  : {int f,int g}
            var r0 = r1.clone();//assign %0 = %1  : {int f,int g}
            var r5 = new WyJS.Integer(2);
            var r6 = new WyJS.Integer(2);
            r0.setValue("g", r6);
            var r7 = new WyJS.Integer(1);
            var r8 = new WyJS.Integer(2);
            var r9 = new WyJS.Record(["f", "g"], [r7, r8], new WyJS.Type.Record(["f", "g"], [new WyJS.Type.Int(), new WyJS.Type.Int()]));
            if(WyJS.equals(r0, r9, true)){
               control_flow_pc = 519;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 519:
            return;
      }
   }
}

