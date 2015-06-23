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
            var r4 = new WyJS.Integer(2);
            var r5 = new WyJS.Integer(2);
            r0.f = r5;//update %0.f = %5 : {int f} -> {int f}
            var r6 = new WyJS.Integer(2);
            var r7 = {f: r6};//newrecord %7 = (%6) : {int f}
            if(WyJS.equals(r0, r7, true)){
               control_flow_pc = 494;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 494:
      }
   }
}

