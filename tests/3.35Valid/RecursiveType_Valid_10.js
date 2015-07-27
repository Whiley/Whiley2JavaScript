function test(){//method() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r2 = new WyJS.Integer(1);
            var r3 = new WyJS.Integer(1);
            var r4 = new WyJS.Integer(2);
            var r5 = new WyJS.Record(["op", "left", "right"], [r2, r3, r4], new WyJS.Type.Record(["op", "left", "right"], '{int left,int op,int right}'));
            r1 = r5;//assign %1 = %5  : {int left,int op,int right}
            r0 = r1;//assign %0 = %1  : X<int|{X left,int op,X right}>
            var r6 = r0.fieldLoad("op");//fieldload %6 = %0 op : {int left,int op,int right}
            var r7 = new WyJS.Integer(1);
            if(WyJS.equals(r6, r7, true)){
               control_flow_pc = 281;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 281:
            var r8 = r0.fieldLoad("left");//fieldload %8 = %0 left : {int left,int op,int right}
            var r9 = new WyJS.Integer(1);
            if(WyJS.equals(r8, r9, true)){
               control_flow_pc = 282;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 282:
            var r10 = r0.fieldLoad("right");//fieldload %10 = %0 right : {int left,int op,int right}
            var r11 = new WyJS.Integer(2);
            if(WyJS.equals(r10, r11, true)){
               control_flow_pc = 283;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 283:
      }
   }
}

