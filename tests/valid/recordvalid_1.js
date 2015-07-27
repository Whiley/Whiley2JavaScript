function test(){//method() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r3 = new WyJS.Integer(1);
            var r4 = new WyJS.Integer(2);
            var r5 = new WyJS.Record(["x", "y"], [r3, r4], new WyJS.Type.Record(["x", "y"], [new WyJS.Type.Int(), new WyJS.Type.Int()]));
            r2 = r5;//assign %2 = %5  : {int x,int y}
            r0 = r2;//assign %0 = %2  : {int x,int y}
            var r7 = new WyJS.Integer(1);
            var r8 = new WyJS.Integer(2);
            var r9 = new WyJS.Record(["x", "y"], [r7, r8], new WyJS.Type.Record(["x", "y"], [new WyJS.Type.Int(), new WyJS.Type.Int()]));
            r6 = r9;//assign %6 = %9  : {int x,int y}
            r1 = r6;//assign %1 = %6  : {int x,int y}
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

