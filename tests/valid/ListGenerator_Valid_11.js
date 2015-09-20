function test(){//method() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r2 = false;
            var r3 = new WyJS.Integer(2);
            var r4 = WyJS.ListGen(r2, r3, new WyJS.Type.List(new WyJS.Type.Bool()));
            var r1 = r4.clone(new WyJS.Type.Bool());//assign %1 = %4  : bool[]
            var r0 = r1.clone(new WyJS.Type.Bool());//assign %0 = %1  : bool[]
            var r5 = new WyJS.Integer(0);
            var r6 = r0.getValue(r5);
            var r7 = false;
            if(r6 === r7){
               control_flow_pc = 256;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 256:
            var r8 = r0.length();//lengthof %8 = %0 : bool[]
            var r9 = new WyJS.Integer(2);
            if(WyJS.equals(r8, r9, true)){
               control_flow_pc = 257;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 257:
            return;
      }
   }
}

