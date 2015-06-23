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
            var r5 = {f1: r3, f2: r4};//newrecord %5 = (%3, %4) : {int f1,int f2}
            var r2 = r5;//assign %2 = %5  : {int f1,int f2}
            var r0 = r2;//assign %0 = %2  : {int f1,int f2}
            var r7 = new WyJS.Integer(1);
            var r8 = new WyJS.Integer(3);
            var r9 = {f1: r7, f2: r8};//newrecord %9 = (%7, %8) : {int f1,int f2}
            var r6 = r9;//assign %6 = %9  : {int f1,int f2}
            var r1 = r6;//assign %1 = %6  : {int f1,int f2}
            if(WyJS.equals(r0, r1, false)){
               control_flow_pc = 1233;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1233:
            var r10 = new WyJS.Integer(1);
            var r11 = new WyJS.Integer(1);
            r0.f1 = r11;//update %0.f1 = %11 : {int f1,int f2} -> {int f1,int f2}
            var r12 = new WyJS.Integer(1);
            var r13 = new WyJS.Integer(3);
            var r14 = {f1: r12, f2: r13};//newrecord %14 = (%12, %13) : {int f1,int f2}
            if(WyJS.equals(r0, r14, true)){
               control_flow_pc = 1234;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1234:
            var r15 = new WyJS.Integer(1);
            var r16 = new WyJS.Integer(3);
            var r17 = {f1: r15, f2: r16};//newrecord %17 = (%15, %16) : {int f1,int f2}
            if(WyJS.equals(r1, r17, true)){
               control_flow_pc = 1235;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1235:
            if(WyJS.equals(r0, r1, true)){
               control_flow_pc = 1236;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1236:
      }
   }
}

