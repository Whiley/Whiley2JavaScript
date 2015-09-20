function test(){//method() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r2 = new WyJS.Integer(0);
            var r3 = true;
            var r4 = new WyJS.Record(["code", "flag"], [r2, r3], new WyJS.Type.Record(["code", "flag"], [new WyJS.Type.Int(), new WyJS.Type.Bool()]));
            var r1 = r4.clone();//assign %1 = %4  : {int code,bool flag}
            var r0 = r1.clone();//assign %0 = %1  : {int code,bool flag}
            var r5 = new WyJS.Integer(0);
            var r6 = true;
            var r7 = new WyJS.Record(["code", "flag"], [r5, r6], new WyJS.Type.Record(["code", "flag"], [new WyJS.Type.Int(), new WyJS.Type.Bool()]));
            if(WyJS.equals(r0, r7, true)){
               control_flow_pc = 1348;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1348:
            var r8 = false;
            var r9 = false;
            r0.setValue("flag", r9);
            var r10 = new WyJS.Integer(0);
            var r11 = false;
            var r12 = new WyJS.Record(["code", "flag"], [r10, r11], new WyJS.Type.Record(["code", "flag"], [new WyJS.Type.Int(), new WyJS.Type.Bool()]));
            if(WyJS.equals(r0, r12, true)){
               control_flow_pc = 1349;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1349:
            return;
      }
   }
}

