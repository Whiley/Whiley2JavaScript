function sum(r0){//function([Assume_Valid_1:nat]) -> Assume_Valid_1:nat
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r4 = 0;//const %4 = 0 : int
            var r3 = r4;//assign %3 = %4  : int
            var r1 = r3;//assign %1 = %3  : int
            var r6 = 0;//const %6 = 0 : int
            var r5 = r6;//assign %5 = %6  : int
            var r2 = r5;//assign %2 = %5  : int
            while(true){//loop (%1, %2, %7, %8, %9, %10, %11, %12, %13)
               var r8 = r0.length;//lengthof %8 = %0 : [int]
               if(r2  >=  r8){//ifge %2, %8 goto label2457 : int
                  control_flow_pc = 2457;
                  control_flow_repeat = true;
                  continue outer;
               }
               var r10 = r0[r2];
               var r11 = r1 + r10;//add %11 = %1, %10 : int
               var r1 = r11;//assign %1 = %11  : int
               var r12 = 1;//const %12 = 1 : int
               var r13 = r2 + r12;//add %13 = %2, %12 : int
               var r2 = r13;//assign %2 = %13  : int
            }
         case 2457:
            return r1;//return %1 : int
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
            var r3 = 0;//const %3 = 0 : int
            var r4 = 1;//const %4 = 1 : int
            var r5 = 2;//const %5 = 2 : int
            var r6 = 3;//const %6 = 3 : int
            var r7 = [r3, r4, r5, r6];
            var r2 = sum(r7);//invoke %2 = (%7) Assume_Valid_1:sum : function([Assume_Valid_1:nat]) -> Assume_Valid_1:nat
            var r1 = r2;//assign %1 = %2  : int
            var r0 = r1;//assign %0 = %1  : int
            var r8 = 6;//const %8 = 6 : int
            if(r0  ==  r8){//ifeq %0, %8 goto label2459 : int
               control_flow_pc = 2459;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2459:
      }
   }
}

test();
