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
               control_flow_pc = 1143;
               control_flow_repeat = true;
               continue outer;
            }
             else if(WyJS.equals(r0, new WyJS.Integer(2), true)){
               control_flow_pc = 1144;
               control_flow_repeat = true;
               continue outer;
            }
            else{
               control_flow_pc = 1142;
               control_flow_repeat = true;
               continue outer;
            }
         case 1143:
            control_flow_pc = 1145;
            control_flow_repeat = true;
            continue outer;//goto label1145
            throw {name: 'Assert Failed', message: 'fail'}
         case 1145:
            return;
            control_flow_pc = 1142;
            control_flow_repeat = true;
            continue outer;//goto label1142
         case 1144:
            throw {name: 'Assert Failed', message: 'fail'}
            return;
            control_flow_pc = 1142;
            control_flow_repeat = true;
            continue outer;//goto label1142
         case 1142:
            throw {name: 'Assert Failed', message: 'fail'}
            return;
      }
   }
}
