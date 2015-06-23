function count(r0, r1){//function(int,int) -> int
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
            var r7 = r0 * r1;//mul %7 = %0, %1 : int
            var r6 = r7;//assign %6 = %7  : int
            var r3 = r6;//assign %3 = %6  : int
            while(true){//loop (%2, %8, %9)
               if(r2  >=  r3){//ifge %2, %3 goto label660 : int
                  control_flow_pc = 660;
                  control_flow_repeat = true;
                  continue outer;
               }
               var r8 = 1;//const %8 = 1 : int
               var r9 = r2 + r8;//add %9 = %2, %8 : int
               var r2 = r9;//assign %2 = %9  : int
            }
         case 660:
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
            var r1 = 0;//const %1 = 0 : int
            var r2 = 0;//const %2 = 0 : int
            var r0 = count(r1, r2);//invoke %0 = (%1, %2) While_Valid_27:count : function(int,int) -> int
            var r3 = 0;//const %3 = 0 : int
            if(r0  ==  r3){//ifeq %0, %3 goto label661 : int
               control_flow_pc = 661;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 661:
            var r5 = 1;//const %5 = 1 : int
            var r6 = 1;//const %6 = 1 : int
            var r4 = count(r5, r6);//invoke %4 = (%5, %6) While_Valid_27:count : function(int,int) -> int
            var r7 = 1;//const %7 = 1 : int
            if(r4  ==  r7){//ifeq %4, %7 goto label662 : int
               control_flow_pc = 662;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 662:
            var r9 = 5;//const %9 = 5 : int
            var r10 = 5;//const %10 = 5 : int
            var r8 = count(r9, r10);//invoke %8 = (%9, %10) While_Valid_27:count : function(int,int) -> int
            var r11 = 25;//const %11 = 25 : int
            if(r8  ==  r11){//ifeq %8, %11 goto label663 : int
               control_flow_pc = 663;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 663:
      }
   }
}

test();
