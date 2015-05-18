function f(r0, r1, r2){//function({int},int,int) -> {int}
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r4 = 0;//const %4 = 0 : int
            if(r3  ==  r4){
               control_flow_pc = 69;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 69:
            control_flow_pc = 71;
            control_flow_repeat = true;
            continue outer;
         case 70:
            throw {name: 'Assert Failed', message: 'fail'}
         case 71:
            return r0;//return %0 : {int}
      }
   }
}

function test(){//method() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = 10;//const %1 = 10 : int
            var r2 = 11;//const %2 = 11 : int
            var r3 = 12;//const %3 = 12 : int
            var r4 = 13;//const %4 = 13 : int
            var r5 = 14;//const %5 = 14 : int
            var r7 = 10;//const %7 = 10 : int
            var r8 = 15;//const %8 = 15 : int
            var r0 = f(r6, r7, r8);
            var r9 = 10;//const %9 = 10 : int
            var r10 = 11;//const %10 = 11 : int
            var r11 = 12;//const %11 = 12 : int
            var r12 = 13;//const %12 = 13 : int
            var r13 = 14;//const %13 = 14 : int
            if(r0  ==  r14){
               control_flow_pc = 72;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 72:
            var r17 = 10;//const %17 = 10 : int
            var r18 = 10;//const %18 = 10 : int
            var r15 = f(r16, r17, r18);
            if(r15  ==  r19){
               control_flow_pc = 73;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 73:
      }
   }
}

test();
