function test(){//method() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r2 = new WyJS.Integer(1);
            var r3 = {f: r2};//newrecord %3 = (%2) : {int f}
            var r1 = r3;//assign %1 = %3  : {int f}
            var r0 = r1;//assign %0 = %1  : {int f}
            var r4 = r0.f;//fieldload %4 = %0 f : {int f}
            var r5 = new WyJS.Integer(1);
            var r6 = r4.add(r5);//add %6 = %4, %5 : int
            var r7 = r0.f;//fieldload %7 = %0 f : {int f}
            var r8 = new WyJS.Integer(1);
            var r9 = r7.add(r8);//add %9 = %7, %8 : int
            r0.f = r9;//update %0.f = %9 : {int f} -> {int f}
            var r10 = new WyJS.Integer(2);
            var r11 = {f: r10};//newrecord %11 = (%10) : {int f}
            if(WyJS.equals(r0, r11, true)){
               control_flow_pc = 501;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 501:
      }
   }
}

