function match(r0, r1, r2){//function([byte],While_Valid_18:nat,While_Valid_18:nat) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r5 = r2;//assign %5 = %2  : int
            var r3 = r5;//assign %3 = %5  : int
            var r7 = 0;//const %7 = 0 : int
            var r6 = r7;//assign %6 = %7  : int
            var r4 = r6;//assign %4 = %6  : int
            while(true){//loop (%1, %3, %4, %8, %9, %10, %11, %12, %13, %14, %15, %16, %17, %18)
               if(r1  >=  r3){//ifge %1, %3 goto label584 : int
                  control_flow_pc = 584;
                  control_flow_repeat = true;
                  continue outer;
               }
               var r10 = r0.length;//lengthof %10 = %0 : [byte]
               if(r3  >=  r10){//ifge %3, %10 goto label584 : int
                  control_flow_pc = 584;
                  control_flow_repeat = true;
                  continue outer;
               }
               var r11 = r0[r1];
               var r12 = r0[r3];
               if(r11  !=  r12){//ifne %11, %12 goto label584 : byte
                  control_flow_pc = 584;
                  control_flow_repeat = true;
                  continue outer;
               }
               var r13 = 1;//const %13 = 1 : int
               var r14 = r1 + r13;//add %14 = %1, %13 : int
               var r1 = r14;//assign %1 = %14  : int
               var r15 = 1;//const %15 = 1 : int
               var r16 = r3 + r15;//add %16 = %3, %15 : int
               var r3 = r16;//assign %3 = %16  : int
               var r17 = 1;//const %17 = 1 : int
               var r18 = r4 + r17;//add %18 = %4, %17 : int
               var r4 = r18;//assign %4 = %18  : int
            }
         case 584:
            return r4;//return %4 : int
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
            var r3 = 00000000b;//const %3 = 00000000b : byte
            var r4 = 00000101b;//const %4 = 00000101b : byte
            var r5 = 00000000b;//const %5 = 00000000b : byte
            var r6 = 00000110b;//const %6 = 00000110b : byte
            var r7 = 00000000b;//const %7 = 00000000b : byte
            var r8 = 00000101b;//const %8 = 00000101b : byte
            var r9 = [r3, r4, r5, r6, r7, r8];
            var r2 = r9;//assign %2 = %9  : [byte]
            var r0 = r2;//assign %0 = %2  : [byte]
            var r12 = 0;//const %12 = 0 : int
            var r13 = r0.length;//lengthof %13 = %0 : [byte]
            var r14 = 2;//const %14 = 2 : int
            var r15 = r13 - r14;//sub %15 = %13, %14 : int
            var r11 = match(r0, r12, r15);//invoke %11 = (%0, %12, %15) While_Valid_18:match : function([byte],While_Valid_18:nat,While_Valid_18:nat) -> int
            var r10 = r11;//assign %10 = %11  : int
            var r1 = r10;//assign %1 = %10  : int
            var r16 = 2;//const %16 = 2 : int
            if(r1  ==  r16){//ifeq %1, %16 goto label585 : int
               control_flow_pc = 585;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 585:
      }
   }
}

test();
