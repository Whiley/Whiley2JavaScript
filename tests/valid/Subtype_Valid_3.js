function test(){//method() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r2 = new WyJS.Integer(1);
            var r3 = new WyJS.Integer(3);
            var r4 = {f: r2, g: r3};//newrecord %4 = (%2, %3) : {int f,int g}
            var r5 = new WyJS.Integer(4);
            var r6 = new WyJS.Integer(8);
            var r7 = {f: r5, g: r6};//newrecord %7 = (%5, %6) : {int f,int g}
            var r8 = [r4, r7];
            var r1 = r8;//assign %1 = %8  : [{int f,int g}]
            var r0 = r1;//assign %0 = %1  : [{int f,int g}]
            var r9 = new WyJS.Integer(2);
            var r10 = new WyJS.Integer(0);
            var r11 = new WyJS.Integer(2);
            r0[r10] = r11;//update %0[%10].f = %11 : [{int f,int g}] -> [{int f,int g}]
            var r12 = new WyJS.Integer(2);
            var r13 = new WyJS.Integer(3);
            var r14 = {f: r12, g: r13};//newrecord %14 = (%12, %13) : {int f,int g}
            var r15 = new WyJS.Integer(4);
            var r16 = new WyJS.Integer(8);
            var r17 = {f: r15, g: r16};//newrecord %17 = (%15, %16) : {int f,int g}
            var r18 = [r14, r17];
            if(WyJS.equals(r0, r18, true)){
               control_flow_pc = 1255;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1255:
      }
   }
}

