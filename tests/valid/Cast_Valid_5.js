function toUnsignedInt(r0){//function(byte) -> int
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
            var r6 = 1;//const %6 = 1 : int
            var r5 = r6;//assign %5 = %6  : int
            var r2 = r5;//assign %2 = %5  : int
            while(true){//loop (%0, %1, %2, %7, %8, %9, %10, %11, %12, %13, %14, %15)
               var r7 = 00000000b;//const %7 = 00000000b : byte
               if(r0  ==  r7){//ifeq %0, %7 goto label2026 : byte
                  control_flow_pc = 2026;
                  control_flow_repeat = true;
                  continue outer;
               }
               var r8 = 00000001b;//const %8 = 00000001b : byte
               var r9 =                var r10 = 00000001b;//const %10 = 00000001b : byte
               if(r9  !=  r10){
                  var r12 = 1;//const %12 = 1 : int
                  var r13 =                   var r0 = r13;//assign %0 = %13  : byte
                  var r14 = 2;//const %14 = 2 : int
                  var r15 = r2 * r14;//mul %15 = %2, %14 : int
                  var r2 = r15;//assign %2 = %15  : int
                  continue;
               }
               var r11 = r1 + r2;//add %11 = %1, %2 : int
               var r1 = r11;//assign %1 = %11  : int
               var r12 = 1;//const %12 = 1 : int
               var r13 =                var r0 = r13;//assign %0 = %13  : byte
               var r14 = 2;//const %14 = 2 : int
               var r15 = r2 * r14;//mul %15 = %2, %14 : int
               var r2 = r15;//assign %2 = %15  : int
            }
         case 2026:
            return r1;//return %1 : int
      }
   }
}

function toUnsignedByte(r0){//function(Cast_Valid_5:u8) -> byte
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r5 = 00000001b;//const %5 = 00000001b : byte
            var r4 = r5;//assign %4 = %5  : byte
            var r1 = r4;//assign %1 = %4  : byte
            var r7 = 00000000b;//const %7 = 00000000b : byte
            var r6 = r7;//assign %6 = %7  : byte
            var r2 = r6;//assign %2 = %6  : byte
            var r9 = 0;//const %9 = 0 : int
            var r8 = r9;//assign %8 = %9  : int
            var r3 = r8;//assign %3 = %8  : int
            while(true){//loop (%0, %1, %2, %3, %10, %11, %12, %13, %14, %15, %16, %17, %18, %19, %20)
               var r10 = 8;//const %10 = 8 : int
               if(r3  >=  r10){//ifge %3, %10 goto label2028 : int
                  control_flow_pc = 2028;
                  control_flow_repeat = true;
                  continue outer;
               }
               var r11 = 2;//const %11 = 2 : int
               var r12 =                var r13 = 1;//const %13 = 1 : int
               if(r12  !=  r13){
                  var r15 = 2;//const %15 = 2 : int
                  var r16 = r0 / r15;//div %16 = %0, %15 : int
                  var r0 = r16;//assign %0 = %16  : int
                  var r17 = 1;//const %17 = 1 : int
                  var r18 =                   var r1 = r18;//assign %1 = %18  : byte
                  var r19 = 1;//const %19 = 1 : int
                  var r20 = r3 + r19;//add %20 = %3, %19 : int
                  var r3 = r20;//assign %3 = %20  : int
                  continue;
               }
               var r14 =                var r2 = r14;//assign %2 = %14  : byte
               var r15 = 2;//const %15 = 2 : int
               var r16 = r0 / r15;//div %16 = %0, %15 : int
               var r0 = r16;//assign %0 = %16  : int
               var r17 = 1;//const %17 = 1 : int
               var r18 =                var r1 = r18;//assign %1 = %18  : byte
               var r19 = 1;//const %19 = 1 : int
               var r20 = r3 + r19;//add %20 = %3, %19 : int
               var r3 = r20;//assign %3 = %20  : int
            }
         case 2028:
            return r2;//return %2 : byte
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
            var r3 = 32;//const %3 = 32 : int
            var r2 = r3;//assign %2 = %3  : int
            var r0 = r2;//assign %0 = %2  : int
            while(true){//loop (%0, %1, %4, %5, %6, %7, %8, %9)
               var r4 = 127;//const %4 = 127 : int
               if(r0  >=  r4){//ifge %0, %4 goto label2030 : int
                  control_flow_pc = 2030;
                  control_flow_repeat = true;
                  continue outer;
               }
               var r7 = toUnsignedByte(r0);//invoke %7 = (%0) Cast_Valid_5:toUnsignedByte : function(Cast_Valid_5:u8) -> byte
               var r6 = toUnsignedInt(r7);//invoke %6 = (%7) Cast_Valid_5:toUnsignedInt : function(byte) -> int
               var r5 = r6;//assign %5 = %6  : int
               var r1 = r5;//assign %1 = %5  : int
               var r8 = 1;//const %8 = 1 : int
               var r9 = r0 + r8;//add %9 = %0, %8 : int
               var r0 = r9;//assign %0 = %9  : int
            }
         case 2030:
      }
   }
}

test();
