function test$1A_7VkE(){//method() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r3 = new WyJS.List([new WyJS.Integer(97), new WyJS.Integer(98), new WyJS.Integer(99), new WyJS.Integer(100), new WyJS.Integer(101), new WyJS.Integer(102), new WyJS.Integer(103), new WyJS.Integer(104), new WyJS.Integer(106), new WyJS.Integer(107), new WyJS.Integer(108)], new WyJS.Type.List(new WyJS.Type.Int()));
            var r2 = r3.clone(new WyJS.Type.Int());//assign %2 = %3  : [int+]
            var r0 = r2.clone(new WyJS.Type.Int());//assign %0 = %2  : [int]
            var r5 = new WyJS.Integer(0);
            var r6 = new WyJS.Integer(2);
            var r7 = r0.sublist(r5, r6);
            var r4 = r7.clone(new WyJS.Type.Int());//assign %4 = %7  : [int+]
            var r1 = r4.clone(new WyJS.Type.Int());//assign %1 = %4  : [int]
            var r8 = new WyJS.List([new WyJS.Integer(97), new WyJS.Integer(98)], new WyJS.Type.List(new WyJS.Type.Int()));
            if(WyJS.equals(r1, r8, true)){
               control_flow_pc = 2233;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2233:
            var r9 = new WyJS.Integer(1);
            var r10 = new WyJS.Integer(3);
            var r11 = r0.sublist(r9, r10);
            var r1 = r11.clone(new WyJS.Type.Int());//assign %1 = %11  : [int+]
            var r12 = new WyJS.List([new WyJS.Integer(98), new WyJS.Integer(99)], new WyJS.Type.List(new WyJS.Type.Int()));
            if(WyJS.equals(r1, r12, true)){
               control_flow_pc = 2234;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2234:
            var r13 = new WyJS.Integer(2);
            var r14 = r0.length();//lengthof %14 = %0 : [int+]
            var r15 = r0.sublist(r13, r14);
            var r1 = r15.clone(new WyJS.Type.Int());//assign %1 = %15  : [int+]
            var r16 = new WyJS.List([new WyJS.Integer(99), new WyJS.Integer(100), new WyJS.Integer(101), new WyJS.Integer(102), new WyJS.Integer(103), new WyJS.Integer(104), new WyJS.Integer(106), new WyJS.Integer(107), new WyJS.Integer(108)], new WyJS.Type.List(new WyJS.Type.Int()));
            if(WyJS.equals(r1, r16, true)){
               control_flow_pc = 2235;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2235:
            return;
      }
   }
}

