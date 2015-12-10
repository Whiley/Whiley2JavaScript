function test(){//method() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r3 = new WyJS.Integer(2);
            var r4 = new WyJS.Integer(3);
            var r5 = new WyJS.Record(["f1", "f2"], [r3, r4], new WyJS.Type.Record(["f1", "f2"], [new WyJS.Type.Int(), new WyJS.Type.Int()]));
            var r2 = r5.clone();//assign %2 = %5  : {int f1,int f2}
            var r0 = r2.clone();//assign %0 = %2  : {int f1,int f2}
            var r7 = new WyJS.Integer(1);
            var r8 = new WyJS.Integer(3);
            var r9 = new WyJS.Record(["f1", "f2"], [r7, r8], new WyJS.Type.Record(["f1", "f2"], [new WyJS.Type.Int(), new WyJS.Type.Int()]));
            var r6 = r9.clone();//assign %6 = %9  : {int f1,int f2}
            var r1 = r6.clone();//assign %1 = %6  : {int f1,int f2}
            if(WyJS.equals(r0, r1, false)){
               control_flow_pc = 1649;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1649:
            var r10 = new WyJS.Integer(1);
            var r11 = new WyJS.Integer(1);
            r0.setValue("f1", r11);
            var r12 = new WyJS.Integer(1);
            var r13 = new WyJS.Integer(3);
            var r14 = new WyJS.Record(["f1", "f2"], [r12, r13], new WyJS.Type.Record(["f1", "f2"], [new WyJS.Type.Int(), new WyJS.Type.Int()]));
            if(WyJS.equals(r0, r14, true)){
               control_flow_pc = 1650;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1650:
            var r15 = new WyJS.Integer(1);
            var r16 = new WyJS.Integer(3);
            var r17 = new WyJS.Record(["f1", "f2"], [r15, r16], new WyJS.Type.Record(["f1", "f2"], [new WyJS.Type.Int(), new WyJS.Type.Int()]));
            if(WyJS.equals(r1, r17, true)){
               control_flow_pc = 1651;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1651:
            if(WyJS.equals(r0, r1, true)){
               control_flow_pc = 1652;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1652:
            return;
      }
   }
}

