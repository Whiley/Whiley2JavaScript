function test$1A_7VkE(){//method() -> void
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
               control_flow_pc = 2305;
               control_flow_repeat = true;
               continue outer;
            }
             else if(WyJS.equals(r0, new WyJS.Integer(2), true)){
               control_flow_pc = 2306;
               control_flow_repeat = true;
               continue outer;
            }
            else{
               control_flow_pc = 2304;
               control_flow_repeat = true;
               continue outer;
            }
         case 2305:
            control_flow_pc = 2307;
            control_flow_repeat = true;
            continue outer;//goto label2307
            throw {name: 'Assert Failed', message: 'fail'}
         case 2307:
            return;
            control_flow_pc = 2304;
            control_flow_repeat = true;
            continue outer;//goto label2304
         case 2306:
            throw {name: 'Assert Failed', message: 'fail'}
            return;
            control_flow_pc = 2304;
            control_flow_repeat = true;
            continue outer;//goto label2304
         case 2304:
            throw {name: 'Assert Failed', message: 'fail'}
            return;
      }
   }
}

