function reverse(r0){//function([int]) -> [int]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r4 = r0.length;
            var r3 = r4;//assign %3 = %4  : int
            var r1 = r3;//assign %1 = %3  : int
            var r6 = [];
            var r5 = r6;//assign %5 = %6  : [void]
            var r2 = r5;//assign %2 = %5  : [int]
            var control_flow_repeat0 = true;
            var control_flow_pc0 = -1;
            outer0:
            while(control_flow_repeat0){
               while(true){
                  control_flow_repeat0 = false
                  switch(control_flow_pc0){
                     case -1 :
                        var r7 = r0.length;
                        if(r1  <=  r7){
                           control_flow_pc0 = 0;
                           control_flow_0 = true;
                           continue outer0;
                        }
                        throw {name: 'Assert Failed', message: 'fail'}
                     case 0:
                        var r8 = 0;//const %8 = 0 : int
                        if(r1  <=  r8){
                           control_flow_pc0 = 1;
                           control_flow_0 = true;
                           continue outer0;
                        }
                        var r9 = 1;//const %9 = 1 : int
                        var r10 = r1 - r9;//sub %10 = %1, %9 : int
                        var r1 = r10;//assign %1 = %10  : int
                        var r11 = r0[r1];
                        var r12 = [r11];
                        var r2 = r13;//assign %2 = %13  : [int]
                  }
               }
            }
         case 1:
            return r2;//return %2 : [int]
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
            var r4 = 2;//const %4 = 2 : int
            var r5 = 3;//const %5 = 3 : int
            var r6 = 4;//const %6 = 4 : int
            var r7 = 5;//const %7 = 5 : int
            var r8 = [r3, r4, r5, r6, r7];
            var r2 = reverse(r8);
            var r1 = r2;//assign %1 = %2  : [int]
            var r0 = r1;//assign %0 = %1  : [int]
            var r9 = 5;//const %9 = 5 : int
            var r10 = 4;//const %10 = 4 : int
            var r11 = 3;//const %11 = 3 : int
            var r12 = 2;//const %12 = 2 : int
            var r13 = 1;//const %13 = 1 : int
            var r14 = [r9, r10, r11, r12, r13];
            if(r0  ==  r14){
               control_flow_pc = 2;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2:
      }
   }
}

test();
