function test(){//method() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r2 = new WyJS.Integer(0);
            var r1 = r2;//assign %1 = %2  : int
            var r0 = r1;//assign %0 = %1  : int
            control_flow_pc = -3;
            control_flow_repeat = true;
            break;
         case -3:
            var r3 = new WyJS.Integer(3);
            if(WyJS.gt(r0, r3, true)){
               control_flow_pc = 1353;
               control_flow_repeat = true;
               continue outer;
            }
            var r4 = new WyJS.Integer(1);
            if(WyJS.equals(r0, r4, false)){
               control_flow_pc = 1354;
               control_flow_repeat = true;
               break;
            }
            else{
               control_flow_pc = -4;
               control_flow_repeat = true;
               break;
            }
         case -4:
            var r5 = new WyJS.Array([new WyJS.Integer(104), new WyJS.Integer(101), new WyJS.Integer(121)], new WyJS.Type.Array(new WyJS.Type.Int()));
            WyJS.debug(r5);
            control_flow_pc = -3;
            control_flow_repeat = true;
         case 1354:
            var r6 = new WyJS.Integer(1);
            var r7 = r0.add(r6);//add %7 = %0, %6 : int
            var r0 = r7;//assign %0 = %7  : int
            control_flow_pc = -3;
            control_flow_repeat = true;
            break;
         case 1353:
            var r8 = new WyJS.Integer(3);
            if(WyJS.equals(r0, r8, true)){
               control_flow_pc = 1355;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1355:
            return;
      }
   }
}

