function sum(r0){//function([While_Valid_3:nat]) -> While_Valid_3:nat
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
            var control_flow_repeat0 = true;
            var control_flow_pc0 = -1;
            outer0:
            while(control_flow_repeat0){
               while(true){
                  control_flow_repeat0 = false
                  switch(control_flow_pc0){
                     case -1 :
                        var r7 = 0;//const %7 = 0 : int
                        if(r1  <  r7){
                           control_flow_pc0 = 1;
                           control_flow_0 = true;
                           continue outer0;
                        }
                        var r8 = 0;//const %8 = 0 : int
                        if(r2  >=  r8){
                           control_flow_pc0 = 2;
                           control_flow_0 = true;
                           continue outer0;
                        }
                     case 1:
                        throw {name: 'Assert Failed', message: 'fail'}
                     case 2:
                        var r9 = r0.length;
                        if(r1  >=  r9){
                           control_flow_pc0 = 3;
                           control_flow_0 = true;
                           continue outer0;
                        }
                        var r10 = r0[r1];
                        var r11 = r2 + r10;//add %11 = %2, %10 : int
                        var r2 = r11;//assign %2 = %11  : int
                        var r12 = 1;//const %12 = 1 : int
                        var r13 = r1 + r12;//add %13 = %1, %12 : int
                        var r1 = r13;//assign %1 = %13  : int
                  }
               }
            }
         case 3:
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
            var r1 = [];
            var r0 = sum(r1);
            var r2 = 0;//const %2 = 0 : int
            if(r0  ==  r2){
               control_flow_pc = 4;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 4:
            var r4 = 1;//const %4 = 1 : int
            var r5 = 2;//const %5 = 2 : int
            var r6 = 3;//const %6 = 3 : int
            var r7 = [r4, r5, r6];
            var r3 = sum(r7);
            var r8 = 6;//const %8 = 6 : int
            if(r3  ==  r8){
               control_flow_pc = 5;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 5:
            var r10 = 12387;//const %10 = 12387 : int
            var r11 = 98123;//const %11 = 98123 : int
            var r12 = 12398;//const %12 = 12398 : int
            var r13 = 12309;//const %13 = 12309 : int
            var r14 = 0;//const %14 = 0 : int
            var r15 = [r10, r11, r12, r13, r14];
            var r9 = sum(r15);
            var r16 = 135217;//const %16 = 135217 : int
            if(r9  ==  r16){
               control_flow_pc = 6;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 6:
      }
   }
}

test();
