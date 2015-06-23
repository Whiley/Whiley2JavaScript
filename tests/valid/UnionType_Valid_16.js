function test(){//method() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r3 = new WyJS.Integer(2);
            var r4 = {op: r3};//newrecord %4 = (%3) : {int op}
            var r2 = r4;//assign %2 = %4  : {int op}
            var r0 = r2;//assign %0 = %2  : {int|[int] op}
            var r5 = new WyJS.Integer(1);
            var r6 = new WyJS.Integer(1);
            r0.op = r6;//update %0.op = %6 : {int op} -> {int op}
            var r7 = r0;//assign %7 = %0  : {int op}
            var r1 = r7;//assign %1 = %7  : {int|[int] op}
            var r8 = new WyJS.Integer(1);
            var r9 = {op: r8};//newrecord %9 = (%8) : {int op}
            if(WyJS.equals(r1, r9, true)){
               control_flow_pc = 418;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 418:
            var r10 = new WyJS.Integer(1);
            var r11 = new WyJS.Integer(2);
            var r12 = new WyJS.Integer(3);
            var r13 = [r10, r11, r12];
            var r14 = {op: r13};//newrecord %14 = (%13) : {[int] op}
            var r0 = r14;//assign %0 = %14  : {[int] op}
            var r15 = new WyJS.Integer(1);
            var r16 = new WyJS.Integer(2);
            var r17 = new WyJS.Integer(3);
            var r18 = [r15, r16, r17];
            var r19 = {op: r18};//newrecord %19 = (%18) : {[int] op}
            if(WyJS.equals(r0, r19, true)){
               control_flow_pc = 419;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 419:
      }
   }
}

