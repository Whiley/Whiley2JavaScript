function loop2(r0, r1){//function(int,int) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r5 = 0;//const %5 = 0 : int
            var r4 = r5;//assign %4 = %5  : int
            var r2 = r4;//assign %2 = %4  : int
            var r7 = 0;//const %7 = 0 : int
            var r6 = r7;//assign %6 = %7  : int
            var r3 = r6;//assign %3 = %6  : int
            while(true){//loop (%2, %3, %8, %9, %10, %11)
               if(r3  >=  r0){//ifge %3, %0 goto label718 : int
                  control_flow_pc = 718;
                  control_flow_repeat = true;
                  continue outer;
               }
               var r9 = 1;//const %9 = 1 : int
               var r10 = r3 + r9;//add %10 = %3, %9 : int
               var r3 = r10;//assign %3 = %10  : int
               var r11 = r2 + r1;//add %11 = %2, %1 : int
               var r2 = r11;//assign %2 = %11  : int
            }
         case 718:
            var r12 = r1 * r0;//mul %12 = %1, %0 : int
            if(r2  ==  r12){//ifeq %2, %12 goto label719 : int
               control_flow_pc = 719;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 719:
            return r2;//return %2 : int
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
            var r1 = 5;//const %1 = 5 : int
            var r2 = 10;//const %2 = 10 : int
            var r0 = loop2(r1, r2);//invoke %0 = (%1, %2) While_Valid_32:loop2 : function(int,int) -> int
            var r3 = 50;//const %3 = 50 : int
            if(r0  ==  r3){//ifeq %0, %3 goto label720 : int
               control_flow_pc = 720;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 720:
      }
   }
}

test();
