function test(){//method() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r2 = new WyJS.Integer(200);
            r1 = r2;//assign %1 = %2  : int
            r0 = r1;//assign %0 = %1  : int
            var r3 = new WyJS.Integer(200);
            if(WyJS.equals(r0, r3, true)){
               control_flow_pc = 1150;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1150:
            var r4 = new WyJS.Integer(1);
            r0 = r4;//assign %0 = %4  : int
            var r5 = new WyJS.Integer(1);
            if(WyJS.equals(r0, r5, true)){
               control_flow_pc = 1151;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1151:
            var r6 = new WyJS.Integer(0);
            r0 = r6;//assign %0 = %6  : int
            var r7 = new WyJS.Integer(0);
            if(WyJS.equals(r0, r7, true)){
               control_flow_pc = 1152;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1152:
            var r8 = new WyJS.Integer(24343);
            r0 = r8;//assign %0 = %8  : int
            var r9 = new WyJS.Integer(24343);
            if(WyJS.equals(r0, r9, true)){
               control_flow_pc = 1153;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1153:
            var r10 = new WyJS.Integer(2143);
            r0 = r10;//assign %0 = %10  : int
            var r11 = new WyJS.Integer(2143);
            if(WyJS.equals(r0, r11, true)){
               control_flow_pc = 1154;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1154:
            var r12 = new WyJS.Integer(2143);
            r0 = r12;//assign %0 = %12  : int
            var r13 = new WyJS.Integer(2143);
            if(WyJS.equals(r0, r13, true)){
               control_flow_pc = 1155;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1155:
      }
   }
}

