function test(){//method() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r2 = new WyJS.Integer(1);
            var r1 = r2;//assign %1 = %2  : int
            var r0 = r1;//assign %0 = %1  : int
            if(WyJS.equals(r0, new WyJS.Integer(1), true)){
               control_flow_pc = 2381;
               control_flow_repeat = true;
               continue outer;
            }
             else if(WyJS.equals(r0, new WyJS.Integer(2), true)){
               control_flow_pc = 2382;
               control_flow_repeat = true;
               continue outer;
            }
            else{
               control_flow_pc = 2380;
               control_flow_repeat = true;
               continue outer;
            }
         case 2381:
            control_flow_pc = 2383;
            control_flow_repeat = true;
            continue outer;//goto label2383
            throw {name: 'Assert Failed', message: 'fail'}
         case 2383:
            return;
            control_flow_pc = 2380;
            control_flow_repeat = true;
            continue outer;//goto label2380
         case 2382:
            throw {name: 'Assert Failed', message: 'fail'}
            return;
            control_flow_pc = 2380;
            control_flow_repeat = true;
            continue outer;//goto label2380
         case 2380:
            throw {name: 'Assert Failed', message: 'fail'}
            return;
      }
   }
}

