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
               control_flow_pc = 1139;
               control_flow_repeat = true;
               continue outer;
            }
             else if(WyJS.equals(r0, new WyJS.Integer(2), true)){
               control_flow_pc = 1140;
               control_flow_repeat = true;
               continue outer;
            }
            else{
               control_flow_pc = 1138;
               control_flow_repeat = true;
               continue outer;
            }
         case 1139:
            control_flow_pc = 1141;
            control_flow_repeat = true;
            continue outer;//goto label1141
            throw {name: 'Assert Failed', message: 'fail'}
         case 1141:
            return;
            control_flow_pc = 1138;
            control_flow_repeat = true;
            continue outer;//goto label1138
         case 1140:
            throw {name: 'Assert Failed', message: 'fail'}
            return;
            control_flow_pc = 1138;
            control_flow_repeat = true;
            continue outer;//goto label1138
         case 1138:
            throw {name: 'Assert Failed', message: 'fail'}
            return;
      }
   }
}

