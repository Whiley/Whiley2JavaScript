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
            var r5 = {op: r2, left: r3, right: r4};//newrecord %5 = (%2, %3, %4) : {int left,int op,int right}
            var r1 = r5;//assign %1 = %5  : {int left,int op,int right}
            var r0 = r1;//assign %0 = %1  : X<int|{X left,int op,X right}>
            var r6 = r0.op;//fieldload %6 = %0 op : {int left,int op,int right}
            var r7 = new WyJS.Integer(1);
            if(WyJS.equals(r6, r7, true)){
               control_flow_pc = 296;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 296:
            var r8 = r0.left;//fieldload %8 = %0 left : {int left,int op,int right}
            var r9 = new WyJS.Integer(1);
            if(WyJS.equals(r8, r9, true)){
               control_flow_pc = 297;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 297:
            var r10 = r0.right;//fieldload %10 = %0 right : {int left,int op,int right}
            var r11 = new WyJS.Integer(2);
            if(WyJS.equals(r10, r11, true)){
               control_flow_pc = 298;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 298:
      }
   }
}

