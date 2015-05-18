function f(r0){//function(int) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            return r0;//return %0 : int
      }
   }
}

function Point(r0, r1){//function(int,int) -> Function_Valid_13:Point
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r2 = f(r0);
            var r3 = f(r1);
            if(r2  ==  r3){
               control_flow_pc = 45;
               control_flow_repeat = true;
               continue outer;
            }
            return r4;//return %4 : {int x,int y}
            control_flow_pc = 46;
            control_flow_repeat = true;
            continue outer;
         case 45:
            var r5 = 1;//const %5 = 1 : int
            var r6 = 1;//const %6 = 1 : int
            var r7 = -r6;
            return r8;//return %8 : {int x,int y}
         case 46:
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
            var r3 = 1;//const %3 = 1 : int
            var r4 = 1;//const %4 = 1 : int
            var r2 = Point(r3, r4);
            var r1 = r2;//assign %1 = %2  : {int x,int y}
            var r0 = r1;//assign %0 = %1  : {int x,int y}
            var r5 = 1;//const %5 = 1 : int
            var r6 = 1;//const %6 = 1 : int
            var r7 = -r6;
            if(r0  ==  r8){
               control_flow_pc = 47;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 47:
            var r10 = 1;//const %10 = 1 : int
            var r11 = 2;//const %11 = 2 : int
            var r9 = Point(r10, r11);
            var r0 = r9;//assign %0 = %9  : {int x,int y}
            var r12 = 1;//const %12 = 1 : int
            var r13 = 2;//const %13 = 2 : int
            if(r0  ==  r14){
               control_flow_pc = 48;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 48:
      }
   }
}

test();
