function extract(r0){//function([int]) -> [While_Valid_5:nat]
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
            var r6 = [];
            var r5 = r6;//assign %5 = %6  : [void]
            var r2 = r5;//assign %2 = %5  : [int]
            loopBegin0:
            while(true){
               var r7 = 0;//const %7 = 0 : int
               if(r1  <  r7){
                  control_flow_pc = 121;
                  control_flow_repeat = true;
                  continue outer;
               }
               var r10 = r0.length;
               if(r1  >=  r10){
                  control_flow_pc = 123;
                  control_flow_repeat = true;
                  continue outer;
               }
               var r11 = r0[r1];
               var r12 = 0;//const %12 = 0 : int
               if(r11  <  r12){
                  control_flow_pc = 124;
                  control_flow_repeat = true;
                  continue outer;
               }
               var r13 = r0[r1];
               var r14 = [r13];
               var r2 = r15;//assign %2 = %15  : [int]
            }
         case 124:
            var r16 = 1;//const %16 = 1 : int
            var r17 = r1 + r16;//add %17 = %1, %16 : int
            var r1 = r17;//assign %1 = %17  : int
            continue loopBegin0;
         case 123:
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
            var r3 = 2;//const %3 = 2 : int
            var r4 = -r3;
            var r5 = 3;//const %5 = 3 : int
            var r6 = -r5;
            var r7 = 1;//const %7 = 1 : int
            var r8 = 2;//const %8 = 2 : int
            var r9 = 23;//const %9 = 23 : int
            var r10 = -r9;
            var r11 = 3;//const %11 = 3 : int
            var r12 = 2345;//const %12 = 2345 : int
            var r13 = 4;//const %13 = 4 : int
            var r14 = 5;//const %14 = 5 : int
            var r15 = [r4, r6, r7, r8, r10, r11, r12, r13, r14];
            var r2 = extract(r15);
            var r1 = r2;//assign %1 = %2  : [int]
            var r0 = r1;//assign %0 = %1  : [int]
            var r16 = 1;//const %16 = 1 : int
            var r17 = 2;//const %17 = 2 : int
            var r18 = 3;//const %18 = 3 : int
            var r19 = 2345;//const %19 = 2345 : int
            var r20 = 4;//const %20 = 4 : int
            var r21 = 5;//const %21 = 5 : int
            var r22 = [r16, r17, r18, r19, r20, r21];
            if(r0.length ==  r22.length){
               var listComp = true;
               for(var i = 0; i<r0.length;i++){
                  if(r0[i]  !=  r22[i]){
                     listCompFail = false;
                  }
               }
               if(listComp){
                  control_flow_pc = 125;
                  control_flow_repeat = true;
                  continue outer;
               }
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 125:
      }
   }
}

test();
