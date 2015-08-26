function test$1A_7VkE(){//method() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r2 = new WyJS.Integer(1);
            var r3 = new WyJS.Integer(1);
            var r4 = new WyJS.Record(["x", "y"], [r2, r3], new WyJS.Type.Record(["x", "y"], [new WyJS.Type.Int(), new WyJS.Type.Int()]));
            var r1 = r4;//assign %1 = %4  : {int x,int y}
            var r0 = r1;//assign %0 = %1  : {int x,int y}
            var r5 = r0.fieldLoad("y");//fieldload %5 = %0 y : {int x,int y}
            var r6 = new WyJS.Integer(1);
            if(WyJS.equals(r5, r6, true)){
               control_flow_pc = 1386;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1386:
            var r7 = r0.fieldLoad("x");//fieldload %7 = %0 x : {int x,int y}
            var r8 = new WyJS.Integer(1);
            if(WyJS.equals(r7, r8, true)){
               control_flow_pc = 1387;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1387:
            return;
      }
   }
}

