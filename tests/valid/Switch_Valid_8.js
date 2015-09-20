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
               control_flow_pc = 2109;
               control_flow_repeat = true;
               continue outer;
            }
             else if(WyJS.equals(r0, new WyJS.Integer(2), true)){
               control_flow_pc = 2110;
               control_flow_repeat = true;
               continue outer;
            }
            else{
               control_flow_pc = 2108;
               control_flow_repeat = true;
               continue outer;
            }
         case 2109:
            control_flow_pc = 2111;
            control_flow_repeat = true;
            continue outer;//goto label2111
            throw {name: 'Assert Failed', message: 'fail'}
         case 2111:
            return;
            control_flow_pc = 2108;
            control_flow_repeat = true;
            continue outer;//goto label2108
         case 2110:
            throw {name: 'Assert Failed', message: 'fail'}
            return;
            control_flow_pc = 2108;
            control_flow_repeat = true;
            continue outer;//goto label2108
         case 2108:
            throw {name: 'Assert Failed', message: 'fail'}
            return;
      }
   }
}

