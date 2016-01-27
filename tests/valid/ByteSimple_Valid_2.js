function test(){//method() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r2 = new WyJS.Byte(1);
            var r1 = r2;//assign %1 = %2  : byte
            var r0 = r1;//assign %0 = %1  : byte
            var r3 = new WyJS.Integer(1);
            var r4 = r0.shl(r3);//shl %4 = %0, %3 : byte
            var r5 = new WyJS.Byte(2);
            if(WyJS.equals(r4, r5, true)){
               control_flow_pc = 1417;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1417:
            return;
      }
   }
}

