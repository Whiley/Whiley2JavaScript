function set$_9dF5X1Fc1Ms(r0, r1){//function(byte,int) -> bool
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r4 = new WyJS.Byte("00000001b");
            var r5 = r4.sll(r1);//shl %5 = %4, %1 : byte
            var r3 = r5;//assign %3 = %5  : byte
            var r2 = r3;//assign %2 = %3  : byte
            var r6 = r0.and(r2);//and %6 = %0, %2 : byte
            if(WyJS.equals(r6, r2, true)){
               control_flow_pc = 108;
               control_flow_repeat = true;
               continue outer;
            }
            var r7 = false;
            control_flow_pc = 109;
            control_flow_repeat = true;
            continue outer;//goto label109
         case 108:
            var r7 = true;
         case 109:
            return r7;//return %7 : bool
            return;
      }
   }
}

function shr$Z9dFXd1Fs1E(r0, r1){//function(byte,int) -> byte
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case -2:
            var r2 = new WyJS.Integer(0);
            if(WyJS.lt(r1, r2, true)){
               control_flow_pc = 110;
               control_flow_repeat = true;
               continue outer;
            }
            var r3 = new WyJS.Integer(1);
            var r4 = r0.sll(r3);//shl %4 = %0, %3 : byte
            var r0 = r4;//assign %0 = %4  : byte
            var r5 = new WyJS.Integer(1);
            var r6 = r1.sub(r5);//sub %6 = %1, %5 : int
            var r1 = r6;//assign %1 = %6  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case 110:
            return r0;//return %0 : byte
            return;
      }
   }
}

function and$Y9dFXc1Fs2(r0, r1){//function(byte,byte) -> byte
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r6 = new WyJS.Byte("00000001b");
            var r5 = r6;//assign %5 = %6  : byte
            var r2 = r5;//assign %2 = %5  : byte
            var r8 = new WyJS.Byte("00000000b");
            var r7 = r8;//assign %7 = %8  : byte
            var r3 = r7;//assign %3 = %7  : byte
            var r10 = new WyJS.Integer(0);
            var r9 = r10;//assign %9 = %10  : int
            var r4 = r9;//assign %4 = %9  : int
            control_flow_pc = -3;
            control_flow_repeat = true;
            break;
         case -3:
            var r11 = new WyJS.Integer(8);
            if(WyJS.gt(r4, r11, true)){
               control_flow_pc = 111;
               control_flow_repeat = true;
               continue outer;
            }
            var r12 = set$_9dF5X1Fc1Ms(r0, r4);//invoke %12 = (%0, %4) Byte_Valid_9:set : function(byte,int) -> bool
            var r13 = true;
            if(r12 === r13){
               control_flow_pc = 112;
               control_flow_repeat = true;
               break;
            }
            else{
               control_flow_pc = -4;
               control_flow_repeat = true;
               break;
            }
         case -4:
            control_flow_pc = 113;
            control_flow_repeat = true;
            continue outer;//goto label113
            control_flow_pc = -3;
            control_flow_repeat = true;
            break;
         case 112:
            var r14 = set$_9dF5X1Fc1Ms(r1, r4);//invoke %14 = (%1, %4) Byte_Valid_9:set : function(byte,int) -> bool
            var r15 = true;
            if(r14 === r15){
               control_flow_pc = 114;
               control_flow_repeat = true;
               break;
            }
            else{
               control_flow_pc = -5;
               control_flow_repeat = true;
               break;
            }
         case -5:
            control_flow_pc = 113;
            control_flow_repeat = true;
            continue outer;//goto label113
            control_flow_pc = -3;
            control_flow_repeat = true;
            break;
         case 114:
            var r16 = r3.or(r2);//or %16 = %3, %2 : byte
            var r3 = r16;//assign %3 = %16  : byte
            control_flow_pc = -3;
            control_flow_repeat = true;
            break;
         case 113:
            var r17 = new WyJS.Integer(1);
            var r18 = r2.sll(r17);//shl %18 = %2, %17 : byte
            var r2 = r18;//assign %2 = %18  : byte
            var r19 = new WyJS.Integer(1);
            var r20 = r4.add(r19);//add %20 = %4, %19 : int
            var r4 = r20;//assign %4 = %20  : int
            control_flow_pc = -3;
            control_flow_repeat = true;
            break;
         case 111:
            return r3;//return %3 : byte
            return;
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
            var r4 = new WyJS.Integer(0);
            var r3 = r4;//assign %3 = %4  : int
            var r0 = r3;//assign %0 = %3  : int
            control_flow_pc = -6;
            control_flow_repeat = true;
            break;
         case -6:
            var r6 = new WyJS.List([new WyJS.Byte("10000000b"), new WyJS.Byte("10000001b"), new WyJS.Byte("10000010b"), new WyJS.Byte("10000011b"), new WyJS.Byte("10000100b"), new WyJS.Byte("10000101b"), new WyJS.Byte("10000110b"), new WyJS.Byte("10000111b"), new WyJS.Byte("10001000b"), new WyJS.Byte("10001001b"), new WyJS.Byte("10001010b"), new WyJS.Byte("10001011b"), new WyJS.Byte("10001100b"), new WyJS.Byte("10001101b"), new WyJS.Byte("10001110b"), new WyJS.Byte("10001111b"), new WyJS.Byte("10010000b"), new WyJS.Byte("10010001b"), new WyJS.Byte("10010010b"), new WyJS.Byte("10010011b"), new WyJS.Byte("10010100b"), new WyJS.Byte("10010101b"), new WyJS.Byte("10010110b"), new WyJS.Byte("10010111b"), new WyJS.Byte("10011000b"), new WyJS.Byte("10011001b"), new WyJS.Byte("10011010b"), new WyJS.Byte("10011011b"), new WyJS.Byte("10011100b"), new WyJS.Byte("10011101b"), new WyJS.Byte("10011110b"), new WyJS.Byte("10011111b"), new WyJS.Byte("10100000b"), new WyJS.Byte("10100001b"), new WyJS.Byte("10100010b"), new WyJS.Byte("10100011b"), new WyJS.Byte("10100100b"), new WyJS.Byte("10100101b"), new WyJS.Byte("10100110b"), new WyJS.Byte("10100111b"), new WyJS.Byte("10101000b"), new WyJS.Byte("10101001b"), new WyJS.Byte("10101010b"), new WyJS.Byte("10101011b"), new WyJS.Byte("10101100b"), new WyJS.Byte("10101101b"), new WyJS.Byte("10101110b"), new WyJS.Byte("10101111b"), new WyJS.Byte("10110000b"), new WyJS.Byte("10110001b"), new WyJS.Byte("10110010b"), new WyJS.Byte("10110011b"), new WyJS.Byte("10110100b"), new WyJS.Byte("10110101b"), new WyJS.Byte("10110110b"), new WyJS.Byte("10110111b"), new WyJS.Byte("10111000b"), new WyJS.Byte("10111001b"), new WyJS.Byte("10111010b"), new WyJS.Byte("10111011b"), new WyJS.Byte("10111100b"), new WyJS.Byte("10111101b"), new WyJS.Byte("10111110b"), new WyJS.Byte("10111111b"), new WyJS.Byte("11000000b"), new WyJS.Byte("11000001b"), new WyJS.Byte("11000010b"), new WyJS.Byte("11000011b"), new WyJS.Byte("11000100b"), new WyJS.Byte("11000101b"), new WyJS.Byte("11000110b"), new WyJS.Byte("11000111b"), new WyJS.Byte("11001000b"), new WyJS.Byte("11001001b"), new WyJS.Byte("11001010b"), new WyJS.Byte("11001011b"), new WyJS.Byte("11001100b"), new WyJS.Byte("11001101b"), new WyJS.Byte("11001110b"), new WyJS.Byte("11001111b"), new WyJS.Byte("11010000b"), new WyJS.Byte("11010001b"), new WyJS.Byte("11010010b"), new WyJS.Byte("11010011b"), new WyJS.Byte("11010100b"), new WyJS.Byte("11010101b"), new WyJS.Byte("11010110b"), new WyJS.Byte("11010111b"), new WyJS.Byte("11011000b"), new WyJS.Byte("11011001b"), new WyJS.Byte("11011010b"), new WyJS.Byte("11011011b"), new WyJS.Byte("11011100b"), new WyJS.Byte("11011101b"), new WyJS.Byte("11011110b"), new WyJS.Byte("11011111b"), new WyJS.Byte("11100000b"), new WyJS.Byte("11100001b"), new WyJS.Byte("11100010b"), new WyJS.Byte("11100011b"), new WyJS.Byte("11100100b"), new WyJS.Byte("11100101b"), new WyJS.Byte("11100110b"), new WyJS.Byte("11100111b"), new WyJS.Byte("11101000b"), new WyJS.Byte("11101001b"), new WyJS.Byte("11101010b"), new WyJS.Byte("11101011b"), new WyJS.Byte("11101100b"), new WyJS.Byte("11101101b"), new WyJS.Byte("11101110b"), new WyJS.Byte("11101111b"), new WyJS.Byte("11110000b"), new WyJS.Byte("11110001b"), new WyJS.Byte("11110010b"), new WyJS.Byte("11110011b"), new WyJS.Byte("11110100b"), new WyJS.Byte("11110101b"), new WyJS.Byte("11110110b"), new WyJS.Byte("11110111b"), new WyJS.Byte("11111000b"), new WyJS.Byte("11111001b"), new WyJS.Byte("11111010b"), new WyJS.Byte("11111011b"), new WyJS.Byte("11111100b"), new WyJS.Byte("11111101b"), new WyJS.Byte("11111110b"), new WyJS.Byte("11111111b"), new WyJS.Byte("00000000b"), new WyJS.Byte("00000001b"), new WyJS.Byte("00000010b"), new WyJS.Byte("00000011b"), new WyJS.Byte("00000100b"), new WyJS.Byte("00000101b"), new WyJS.Byte("00000110b"), new WyJS.Byte("00000111b"), new WyJS.Byte("00001000b"), new WyJS.Byte("00001001b"), new WyJS.Byte("00001010b"), new WyJS.Byte("00001011b"), new WyJS.Byte("00001100b"), new WyJS.Byte("00001101b"), new WyJS.Byte("00001110b"), new WyJS.Byte("00001111b"), new WyJS.Byte("00010000b"), new WyJS.Byte("00010001b"), new WyJS.Byte("00010010b"), new WyJS.Byte("00010011b"), new WyJS.Byte("00010100b"), new WyJS.Byte("00010101b"), new WyJS.Byte("00010110b"), new WyJS.Byte("00010111b"), new WyJS.Byte("00011000b"), new WyJS.Byte("00011001b"), new WyJS.Byte("00011010b"), new WyJS.Byte("00011011b"), new WyJS.Byte("00011100b"), new WyJS.Byte("00011101b"), new WyJS.Byte("00011110b"), new WyJS.Byte("00011111b"), new WyJS.Byte("00100000b"), new WyJS.Byte("00100001b"), new WyJS.Byte("00100010b"), new WyJS.Byte("00100011b"), new WyJS.Byte("00100100b"), new WyJS.Byte("00100101b"), new WyJS.Byte("00100110b"), new WyJS.Byte("00100111b"), new WyJS.Byte("00101000b"), new WyJS.Byte("00101001b"), new WyJS.Byte("00101010b"), new WyJS.Byte("00101011b"), new WyJS.Byte("00101100b"), new WyJS.Byte("00101101b"), new WyJS.Byte("00101110b"), new WyJS.Byte("00101111b"), new WyJS.Byte("00110000b"), new WyJS.Byte("00110001b"), new WyJS.Byte("00110010b"), new WyJS.Byte("00110011b"), new WyJS.Byte("00110100b"), new WyJS.Byte("00110101b"), new WyJS.Byte("00110110b"), new WyJS.Byte("00110111b"), new WyJS.Byte("00111000b"), new WyJS.Byte("00111001b"), new WyJS.Byte("00111010b"), new WyJS.Byte("00111011b"), new WyJS.Byte("00111100b"), new WyJS.Byte("00111101b"), new WyJS.Byte("00111110b"), new WyJS.Byte("00111111b"), new WyJS.Byte("01000000b"), new WyJS.Byte("01000001b"), new WyJS.Byte("01000010b"), new WyJS.Byte("01000011b"), new WyJS.Byte("01000100b"), new WyJS.Byte("01000101b"), new WyJS.Byte("01000110b"), new WyJS.Byte("01000111b"), new WyJS.Byte("01001000b"), new WyJS.Byte("01001001b"), new WyJS.Byte("01001010b"), new WyJS.Byte("01001011b"), new WyJS.Byte("01001100b"), new WyJS.Byte("01001101b"), new WyJS.Byte("01001110b"), new WyJS.Byte("01001111b"), new WyJS.Byte("01010000b"), new WyJS.Byte("01010001b"), new WyJS.Byte("01010010b"), new WyJS.Byte("01010011b"), new WyJS.Byte("01010100b"), new WyJS.Byte("01010101b"), new WyJS.Byte("01010110b"), new WyJS.Byte("01010111b"), new WyJS.Byte("01011000b"), new WyJS.Byte("01011001b"), new WyJS.Byte("01011010b"), new WyJS.Byte("01011011b"), new WyJS.Byte("01011100b"), new WyJS.Byte("01011101b"), new WyJS.Byte("01011110b"), new WyJS.Byte("01011111b"), new WyJS.Byte("01100000b"), new WyJS.Byte("01100001b"), new WyJS.Byte("01100010b"), new WyJS.Byte("01100011b"), new WyJS.Byte("01100100b"), new WyJS.Byte("01100101b"), new WyJS.Byte("01100110b"), new WyJS.Byte("01100111b"), new WyJS.Byte("01101000b"), new WyJS.Byte("01101001b"), new WyJS.Byte("01101010b"), new WyJS.Byte("01101011b"), new WyJS.Byte("01101100b"), new WyJS.Byte("01101101b"), new WyJS.Byte("01101110b"), new WyJS.Byte("01101111b"), new WyJS.Byte("01110000b"), new WyJS.Byte("01110001b"), new WyJS.Byte("01110010b"), new WyJS.Byte("01110011b"), new WyJS.Byte("01110100b"), new WyJS.Byte("01110101b"), new WyJS.Byte("01110110b"), new WyJS.Byte("01110111b"), new WyJS.Byte("01111000b"), new WyJS.Byte("01111001b"), new WyJS.Byte("01111010b"), new WyJS.Byte("01111011b"), new WyJS.Byte("01111100b"), new WyJS.Byte("01111101b"), new WyJS.Byte("01111110b")], new WyJS.Type.List(new WyJS.Type.Byte()));
            var r7 = r6.length();//lengthof %7 = %6 : byte[]
            if(WyJS.gt(r0, r7, true)){
               control_flow_pc = 116;
               control_flow_repeat = true;
               continue outer;
            }
            var r9 = new WyJS.List([new WyJS.Byte("10000000b"), new WyJS.Byte("10000001b"), new WyJS.Byte("10000010b"), new WyJS.Byte("10000011b"), new WyJS.Byte("10000100b"), new WyJS.Byte("10000101b"), new WyJS.Byte("10000110b"), new WyJS.Byte("10000111b"), new WyJS.Byte("10001000b"), new WyJS.Byte("10001001b"), new WyJS.Byte("10001010b"), new WyJS.Byte("10001011b"), new WyJS.Byte("10001100b"), new WyJS.Byte("10001101b"), new WyJS.Byte("10001110b"), new WyJS.Byte("10001111b"), new WyJS.Byte("10010000b"), new WyJS.Byte("10010001b"), new WyJS.Byte("10010010b"), new WyJS.Byte("10010011b"), new WyJS.Byte("10010100b"), new WyJS.Byte("10010101b"), new WyJS.Byte("10010110b"), new WyJS.Byte("10010111b"), new WyJS.Byte("10011000b"), new WyJS.Byte("10011001b"), new WyJS.Byte("10011010b"), new WyJS.Byte("10011011b"), new WyJS.Byte("10011100b"), new WyJS.Byte("10011101b"), new WyJS.Byte("10011110b"), new WyJS.Byte("10011111b"), new WyJS.Byte("10100000b"), new WyJS.Byte("10100001b"), new WyJS.Byte("10100010b"), new WyJS.Byte("10100011b"), new WyJS.Byte("10100100b"), new WyJS.Byte("10100101b"), new WyJS.Byte("10100110b"), new WyJS.Byte("10100111b"), new WyJS.Byte("10101000b"), new WyJS.Byte("10101001b"), new WyJS.Byte("10101010b"), new WyJS.Byte("10101011b"), new WyJS.Byte("10101100b"), new WyJS.Byte("10101101b"), new WyJS.Byte("10101110b"), new WyJS.Byte("10101111b"), new WyJS.Byte("10110000b"), new WyJS.Byte("10110001b"), new WyJS.Byte("10110010b"), new WyJS.Byte("10110011b"), new WyJS.Byte("10110100b"), new WyJS.Byte("10110101b"), new WyJS.Byte("10110110b"), new WyJS.Byte("10110111b"), new WyJS.Byte("10111000b"), new WyJS.Byte("10111001b"), new WyJS.Byte("10111010b"), new WyJS.Byte("10111011b"), new WyJS.Byte("10111100b"), new WyJS.Byte("10111101b"), new WyJS.Byte("10111110b"), new WyJS.Byte("10111111b"), new WyJS.Byte("11000000b"), new WyJS.Byte("11000001b"), new WyJS.Byte("11000010b"), new WyJS.Byte("11000011b"), new WyJS.Byte("11000100b"), new WyJS.Byte("11000101b"), new WyJS.Byte("11000110b"), new WyJS.Byte("11000111b"), new WyJS.Byte("11001000b"), new WyJS.Byte("11001001b"), new WyJS.Byte("11001010b"), new WyJS.Byte("11001011b"), new WyJS.Byte("11001100b"), new WyJS.Byte("11001101b"), new WyJS.Byte("11001110b"), new WyJS.Byte("11001111b"), new WyJS.Byte("11010000b"), new WyJS.Byte("11010001b"), new WyJS.Byte("11010010b"), new WyJS.Byte("11010011b"), new WyJS.Byte("11010100b"), new WyJS.Byte("11010101b"), new WyJS.Byte("11010110b"), new WyJS.Byte("11010111b"), new WyJS.Byte("11011000b"), new WyJS.Byte("11011001b"), new WyJS.Byte("11011010b"), new WyJS.Byte("11011011b"), new WyJS.Byte("11011100b"), new WyJS.Byte("11011101b"), new WyJS.Byte("11011110b"), new WyJS.Byte("11011111b"), new WyJS.Byte("11100000b"), new WyJS.Byte("11100001b"), new WyJS.Byte("11100010b"), new WyJS.Byte("11100011b"), new WyJS.Byte("11100100b"), new WyJS.Byte("11100101b"), new WyJS.Byte("11100110b"), new WyJS.Byte("11100111b"), new WyJS.Byte("11101000b"), new WyJS.Byte("11101001b"), new WyJS.Byte("11101010b"), new WyJS.Byte("11101011b"), new WyJS.Byte("11101100b"), new WyJS.Byte("11101101b"), new WyJS.Byte("11101110b"), new WyJS.Byte("11101111b"), new WyJS.Byte("11110000b"), new WyJS.Byte("11110001b"), new WyJS.Byte("11110010b"), new WyJS.Byte("11110011b"), new WyJS.Byte("11110100b"), new WyJS.Byte("11110101b"), new WyJS.Byte("11110110b"), new WyJS.Byte("11110111b"), new WyJS.Byte("11111000b"), new WyJS.Byte("11111001b"), new WyJS.Byte("11111010b"), new WyJS.Byte("11111011b"), new WyJS.Byte("11111100b"), new WyJS.Byte("11111101b"), new WyJS.Byte("11111110b"), new WyJS.Byte("11111111b"), new WyJS.Byte("00000000b"), new WyJS.Byte("00000001b"), new WyJS.Byte("00000010b"), new WyJS.Byte("00000011b"), new WyJS.Byte("00000100b"), new WyJS.Byte("00000101b"), new WyJS.Byte("00000110b"), new WyJS.Byte("00000111b"), new WyJS.Byte("00001000b"), new WyJS.Byte("00001001b"), new WyJS.Byte("00001010b"), new WyJS.Byte("00001011b"), new WyJS.Byte("00001100b"), new WyJS.Byte("00001101b"), new WyJS.Byte("00001110b"), new WyJS.Byte("00001111b"), new WyJS.Byte("00010000b"), new WyJS.Byte("00010001b"), new WyJS.Byte("00010010b"), new WyJS.Byte("00010011b"), new WyJS.Byte("00010100b"), new WyJS.Byte("00010101b"), new WyJS.Byte("00010110b"), new WyJS.Byte("00010111b"), new WyJS.Byte("00011000b"), new WyJS.Byte("00011001b"), new WyJS.Byte("00011010b"), new WyJS.Byte("00011011b"), new WyJS.Byte("00011100b"), new WyJS.Byte("00011101b"), new WyJS.Byte("00011110b"), new WyJS.Byte("00011111b"), new WyJS.Byte("00100000b"), new WyJS.Byte("00100001b"), new WyJS.Byte("00100010b"), new WyJS.Byte("00100011b"), new WyJS.Byte("00100100b"), new WyJS.Byte("00100101b"), new WyJS.Byte("00100110b"), new WyJS.Byte("00100111b"), new WyJS.Byte("00101000b"), new WyJS.Byte("00101001b"), new WyJS.Byte("00101010b"), new WyJS.Byte("00101011b"), new WyJS.Byte("00101100b"), new WyJS.Byte("00101101b"), new WyJS.Byte("00101110b"), new WyJS.Byte("00101111b"), new WyJS.Byte("00110000b"), new WyJS.Byte("00110001b"), new WyJS.Byte("00110010b"), new WyJS.Byte("00110011b"), new WyJS.Byte("00110100b"), new WyJS.Byte("00110101b"), new WyJS.Byte("00110110b"), new WyJS.Byte("00110111b"), new WyJS.Byte("00111000b"), new WyJS.Byte("00111001b"), new WyJS.Byte("00111010b"), new WyJS.Byte("00111011b"), new WyJS.Byte("00111100b"), new WyJS.Byte("00111101b"), new WyJS.Byte("00111110b"), new WyJS.Byte("00111111b"), new WyJS.Byte("01000000b"), new WyJS.Byte("01000001b"), new WyJS.Byte("01000010b"), new WyJS.Byte("01000011b"), new WyJS.Byte("01000100b"), new WyJS.Byte("01000101b"), new WyJS.Byte("01000110b"), new WyJS.Byte("01000111b"), new WyJS.Byte("01001000b"), new WyJS.Byte("01001001b"), new WyJS.Byte("01001010b"), new WyJS.Byte("01001011b"), new WyJS.Byte("01001100b"), new WyJS.Byte("01001101b"), new WyJS.Byte("01001110b"), new WyJS.Byte("01001111b"), new WyJS.Byte("01010000b"), new WyJS.Byte("01010001b"), new WyJS.Byte("01010010b"), new WyJS.Byte("01010011b"), new WyJS.Byte("01010100b"), new WyJS.Byte("01010101b"), new WyJS.Byte("01010110b"), new WyJS.Byte("01010111b"), new WyJS.Byte("01011000b"), new WyJS.Byte("01011001b"), new WyJS.Byte("01011010b"), new WyJS.Byte("01011011b"), new WyJS.Byte("01011100b"), new WyJS.Byte("01011101b"), new WyJS.Byte("01011110b"), new WyJS.Byte("01011111b"), new WyJS.Byte("01100000b"), new WyJS.Byte("01100001b"), new WyJS.Byte("01100010b"), new WyJS.Byte("01100011b"), new WyJS.Byte("01100100b"), new WyJS.Byte("01100101b"), new WyJS.Byte("01100110b"), new WyJS.Byte("01100111b"), new WyJS.Byte("01101000b"), new WyJS.Byte("01101001b"), new WyJS.Byte("01101010b"), new WyJS.Byte("01101011b"), new WyJS.Byte("01101100b"), new WyJS.Byte("01101101b"), new WyJS.Byte("01101110b"), new WyJS.Byte("01101111b"), new WyJS.Byte("01110000b"), new WyJS.Byte("01110001b"), new WyJS.Byte("01110010b"), new WyJS.Byte("01110011b"), new WyJS.Byte("01110100b"), new WyJS.Byte("01110101b"), new WyJS.Byte("01110110b"), new WyJS.Byte("01110111b"), new WyJS.Byte("01111000b"), new WyJS.Byte("01111001b"), new WyJS.Byte("01111010b"), new WyJS.Byte("01111011b"), new WyJS.Byte("01111100b"), new WyJS.Byte("01111101b"), new WyJS.Byte("01111110b")], new WyJS.Type.List(new WyJS.Type.Byte()));
            var r10 = r9.getValue(r0);
            var r8 = r10;//assign %8 = %10  : byte
            var r1 = r8;//assign %1 = %8  : byte
            var r12 = new WyJS.Integer(0);
            var r11 = r12;//assign %11 = %12  : int
            var r2 = r11;//assign %2 = %11  : int
            control_flow_pc = -7;
            control_flow_repeat = true;
            break;
         case -7:
            var r13 = new WyJS.Integer(9);
            if(WyJS.gt(r2, r13, true)){
               control_flow_pc = 117;
               control_flow_repeat = true;
               continue outer;
            }
            var r14 = new WyJS.Byte("10101010b");
            var r15 = r14.sll(r2);//shl %15 = %14, %2 : byte
            var r16 = r1.and(r15);//and %16 = %1, %15 : byte
            var r19 = new WyJS.Byte("10101010b");
            var r18 = shr$Z9dFXd1Fs1E(r19, r2);//invoke %18 = (%19, %2) Byte_Valid_9:shr : function(byte,int) -> byte
            var r17 = and$Y9dFXc1Fs2(r1, r18);//invoke %17 = (%1, %18) Byte_Valid_9:and : function(byte,byte) -> byte
            if(WyJS.equals(r16, r17, true)){
               control_flow_pc = 118;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 118:
            var r20 = new WyJS.Integer(1);
            var r21 = r2.add(r20);//add %21 = %2, %20 : int
            var r2 = r21;//assign %2 = %21  : int
            control_flow_pc = -7;
            control_flow_repeat = true;
            break;
            control_flow_pc = -6;
            control_flow_repeat = true;
            break;
         case 117:
            var r22 = new WyJS.Integer(1);
            var r23 = r0.add(r22);//add %23 = %0, %22 : int
            var r0 = r23;//assign %0 = %23  : int
            control_flow_pc = -6;
            control_flow_repeat = true;
            break;
         case 116:
            return;
      }
   }
}

