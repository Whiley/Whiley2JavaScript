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
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case -2:
            var r3 = new WyJS.Integer(2);
            if(WyJS.equals(r0, r3, false)){
               control_flow_pc = 310;
               control_flow_repeat = true;
               break;
            }
            else{
               control_flow_pc = -3;
               control_flow_repeat = true;
               break;
            }
         case -3:
            control_flow_pc = 311;
            control_flow_repeat = true;
            continue outer;//goto label311
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case 310:
            var r4 = new WyJS.Integer(1);
            var r5 = r0.add(r4);//add %5 = %0, %4 : int
            var r0 = r5;//assign %0 = %5  : int
            var r6 = new WyJS.Integer(5);
            if(WyJS.gt(r0, r6, true)){
               control_flow_pc = 311;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case 311:
            var r7 = new WyJS.Integer(2);
            if(WyJS.equals(r0, r7, true)){
               control_flow_pc = 312;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 312:
            return;
      }
   }
}

