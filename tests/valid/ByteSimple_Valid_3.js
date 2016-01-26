function test(){//method() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r3 = new WyJS.Byte(1);
            var r2 = r3;//assign %2 = %3  : byte
            var r0 = r2;//assign %0 = %2  : byte
            var r5 = new WyJS.Integer(0);
            var r4 = r5;//assign %4 = %5  : int
            var r1 = r4;//assign %1 = %4  : int
            var r6 = r0.srl(r1);//shr %6 = %0, %1 : byte
            var r0 = r6;//assign %0 = %6  : byte
            if(WyJS.equals(r0, r0, true)){
               control_flow_pc = 1448;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1448:
            return;
      }
   }
}

