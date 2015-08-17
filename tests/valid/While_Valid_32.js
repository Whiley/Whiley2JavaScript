function loop2$Y9dFXs1Fs2(r0, r1){//function(int,int) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r5 = new WyJS.Integer(0);
            var r4 = r5;//assign %4 = %5  : int
            var r2 = r4;//assign %2 = %4  : int
            var r7 = new WyJS.Integer(0);
            var r6 = r7;//assign %6 = %7  : int
            var r3 = r6;//assign %3 = %6  : int
            while(true){//loop (%2, %3, %8, %9, %10, %11)
               if(WyJS.lt(r3, r0, true)){
                  control_flow_pc = 710;
                  control_flow_repeat = true;
                  continue outer;
               }
               throw {name: 'Assert Failed', message: 'fail'}
            case 710:
               var r8 = r1.mul(r3);//mul %8 = %1, %3 : int
               if(WyJS.equals(r2, r8, true)){
                  control_flow_pc = 711;
                  control_flow_repeat = true;
                  continue outer;
               }
               throw {name: 'Assert Failed', message: 'fail'}
            case 711:
               var r9 = new WyJS.Integer(1);
               var r10 = r3.add(r9);//add %10 = %3, %9 : int
               var r3 = r10;//assign %3 = %10  : int
               var r11 = r2.add(r1);//add %11 = %2, %1 : int
               var r2 = r11;//assign %2 = %11  : int
            }
         case 712:
            var r12 = r1.mul(r0);//mul %12 = %1, %0 : int
            if(WyJS.equals(r2, r12, true)){
               control_flow_pc = 713;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 713:
            return r2;//return %2 : int
      }
   }
}

function test$1A_7VkE(){//method() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = new WyJS.Integer(5);
            var r2 = new WyJS.Integer(10);
            var r0 = loop2$Y9dFXs1Fs2(r1, r2);//invoke %0 = (%1, %2) While_Valid_32:loop2 : function(int,int) -> int
            var r3 = new WyJS.Integer(50);
            if(WyJS.equals(r0, r3, true)){
               control_flow_pc = 714;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 714:
      }
   }
}

