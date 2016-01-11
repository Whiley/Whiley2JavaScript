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
               control_flow_pc = 85;
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
         case 85:
            return r0;//return %0 : byte
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
            control_flow_pc = -3;
            control_flow_repeat = true;
            break;
         case -3:
            var r6 = new WyJS.List([new WyJS.Byte("10000000b"), new WyJS.Byte("10000001b"), new WyJS.Byte("10000010b"), new WyJS.Byte("10000011b"), new WyJS.Byte("10000100b"), new WyJS.Byte("10000101b"), new WyJS.Byte("10000110b"), new WyJS.Byte("10000111b"), new WyJS.Byte("10001000b"), new WyJS.Byte("10001001b"), new WyJS.Byte("10001010b"), new WyJS.Byte("10001011b"), new WyJS.Byte("10001100b"), new WyJS.Byte("10001101b"), new WyJS.Byte("10001110b"), new WyJS.Byte("10001111b"), new WyJS.Byte("10010000b"), new WyJS.Byte("10010001b"), new WyJS.Byte("10010010b"), new WyJS.Byte("10010011b"), new WyJS.Byte("10010100b"), new WyJS.Byte("10010101b"), new WyJS.Byte("10010110b"), new WyJS.Byte("10010111b"), new WyJS.Byte("10011000b"), new WyJS.Byte("10011001b"), new WyJS.Byte("10011010b"), new WyJS.Byte("10011011b"), new WyJS.Byte("10011100b"), new WyJS.Byte("10011101b"), new WyJS.Byte("10011110b"), new WyJS.Byte("10011111b"), new WyJS.Byte("10100000b"), new WyJS.Byte("10100001b"), new WyJS.Byte("10100010b"), new WyJS.Byte("10100011b"), new WyJS.Byte("10100100b"), new WyJS.Byte("10100101b"), new WyJS.Byte("10100110b"), new WyJS.Byte("10100111b"), new WyJS.Byte("10101000b"), new WyJS.Byte("10101001b"), new WyJS.Byte("10101010b"), new WyJS.Byte("10101011b"), new WyJS.Byte("10101100b"), new WyJS.Byte("10101101b"), new WyJS.Byte("10101110b"), new WyJS.Byte("10101111b"), new WyJS.Byte("10110000b"), new WyJS.Byte("10110001b"), new WyJS.Byte("10110010b"), new WyJS.Byte("10110011b"), new WyJS.Byte("10110100b"), new WyJS.Byte("10110101b"), new WyJS.Byte("10110110b"), new WyJS.Byte("10110111b"), new WyJS.Byte("10111000b"), new WyJS.Byte("10111001b"), new WyJS.Byte("10111010b"), new WyJS.Byte("10111011b"), new WyJS.Byte("10111100b"), new WyJS.Byte("10111101b"), new WyJS.Byte("10111110b"), new WyJS.Byte("10111111b"), new WyJS.Byte("11000000b"), new WyJS.Byte("11000001b"), new WyJS.Byte("11000010b"), new WyJS.Byte("11000011b"), new WyJS.Byte("11000100b"), new WyJS.Byte("11000101b"), new WyJS.Byte("11000110b"), new WyJS.Byte("11000111b"), new WyJS.Byte("11001000b"), new WyJS.Byte("11001001b"), new WyJS.Byte("11001010b"), new WyJS.Byte("11001011b"), new WyJS.Byte("11001100b"), new WyJS.Byte("11001101b"), new WyJS.Byte("11001110b"), new WyJS.Byte("11001111b"), new WyJS.Byte("11010000b"), new WyJS.Byte("11010001b"), new WyJS.Byte("11010010b"), new WyJS.Byte("11010011b"), new WyJS.Byte("11010100b"), new WyJS.Byte("11010101b"), new WyJS.Byte("11010110b"), new WyJS.Byte("11010111b"), new WyJS.Byte("11011000b"), new WyJS.Byte("11011001b"), new WyJS.Byte("11011010b"), new WyJS.Byte("11011011b"), new WyJS.Byte("11011100b"), new WyJS.Byte("11011101b"), new WyJS.Byte("11011110b"), new WyJS.Byte("11011111b"), new WyJS.Byte("11100000b"), new WyJS.Byte("11100001b"), new WyJS.Byte("11100010b"), new WyJS.Byte("11100011b"), new WyJS.Byte("11100100b"), new WyJS.Byte("11100101b"), new WyJS.Byte("11100110b"), new WyJS.Byte("11100111b"), new WyJS.Byte("11101000b"), new WyJS.Byte("11101001b"), new WyJS.Byte("11101010b"), new WyJS.Byte("11101011b"), new WyJS.Byte("11101100b"), new WyJS.Byte("11101101b"), new WyJS.Byte("11101110b"), new WyJS.Byte("11101111b"), new WyJS.Byte("11110000b"), new WyJS.Byte("11110001b"), new WyJS.Byte("11110010b"), new WyJS.Byte("11110011b"), new WyJS.Byte("11110100b"), new WyJS.Byte("11110101b"), new WyJS.Byte("11110110b"), new WyJS.Byte("11110111b"), new WyJS.Byte("11111000b"), new WyJS.Byte("11111001b"), new WyJS.Byte("11111010b"), new WyJS.Byte("11111011b"), new WyJS.Byte("11111100b"), new WyJS.Byte("11111101b"), new WyJS.Byte("11111110b"), new WyJS.Byte("11111111b"), new WyJS.Byte("00000000b"), new WyJS.Byte("00000001b"), new WyJS.Byte("00000010b"), new WyJS.Byte("00000011b"), new WyJS.Byte("00000100b"), new WyJS.Byte("00000101b"), new WyJS.Byte("00000110b"), new WyJS.Byte("00000111b"), new WyJS.Byte("00001000b"), new WyJS.Byte("00001001b"), new WyJS.Byte("00001010b"), new WyJS.Byte("00001011b"), new WyJS.Byte("00001100b"), new WyJS.Byte("00001101b"), new WyJS.Byte("00001110b"), new WyJS.Byte("00001111b"), new WyJS.Byte("00010000b"), new WyJS.Byte("00010001b"), new WyJS.Byte("00010010b"), new WyJS.Byte("00010011b"), new WyJS.Byte("00010100b"), new WyJS.Byte("00010101b"), new WyJS.Byte("00010110b"), new WyJS.Byte("00010111b"), new WyJS.Byte("00011000b"), new WyJS.Byte("00011001b"), new WyJS.Byte("00011010b"), new WyJS.Byte("00011011b"), new WyJS.Byte("00011100b"), new WyJS.Byte("00011101b"), new WyJS.Byte("00011110b"), new WyJS.Byte("00011111b"), new WyJS.Byte("00100000b"), new WyJS.Byte("00100001b"), new WyJS.Byte("00100010b"), new WyJS.Byte("00100011b"), new WyJS.Byte("00100100b"), new WyJS.Byte("00100101b"), new WyJS.Byte("00100110b"), new WyJS.Byte("00100111b"), new WyJS.Byte("00101000b"), new WyJS.Byte("00101001b"), new WyJS.Byte("00101010b"), new WyJS.Byte("00101011b"), new WyJS.Byte("00101100b"), new WyJS.Byte("00101101b"), new WyJS.Byte("00101110b"), new WyJS.Byte("00101111b"), new WyJS.Byte("00110000b"), new WyJS.Byte("00110001b"), new WyJS.Byte("00110010b"), new WyJS.Byte("00110011b"), new WyJS.Byte("00110100b"), new WyJS.Byte("00110101b"), new WyJS.Byte("00110110b"), new WyJS.Byte("00110111b"), new WyJS.Byte("00111000b"), new WyJS.Byte("00111001b"), new WyJS.Byte("00111010b"), new WyJS.Byte("00111011b"), new WyJS.Byte("00111100b"), new WyJS.Byte("00111101b"), new WyJS.Byte("00111110b"), new WyJS.Byte("00111111b"), new WyJS.Byte("01000000b"), new WyJS.Byte("01000001b"), new WyJS.Byte("01000010b"), new WyJS.Byte("01000011b"), new WyJS.Byte("01000100b"), new WyJS.Byte("01000101b"), new WyJS.Byte("01000110b"), new WyJS.Byte("01000111b"), new WyJS.Byte("01001000b"), new WyJS.Byte("01001001b"), new WyJS.Byte("01001010b"), new WyJS.Byte("01001011b"), new WyJS.Byte("01001100b"), new WyJS.Byte("01001101b"), new WyJS.Byte("01001110b"), new WyJS.Byte("01001111b"), new WyJS.Byte("01010000b"), new WyJS.Byte("01010001b"), new WyJS.Byte("01010010b"), new WyJS.Byte("01010011b"), new WyJS.Byte("01010100b"), new WyJS.Byte("01010101b"), new WyJS.Byte("01010110b"), new WyJS.Byte("01010111b"), new WyJS.Byte("01011000b"), new WyJS.Byte("01011001b"), new WyJS.Byte("01011010b"), new WyJS.Byte("01011011b"), new WyJS.Byte("01011100b"), new WyJS.Byte("01011101b"), new WyJS.Byte("01011110b"), new WyJS.Byte("01011111b"), new WyJS.Byte("01100000b"), new WyJS.Byte("01100001b"), new WyJS.Byte("01100010b"), new WyJS.Byte("01100011b"), new WyJS.Byte("01100100b"), new WyJS.Byte("01100101b"), new WyJS.Byte("01100110b"), new WyJS.Byte("01100111b"), new WyJS.Byte("01101000b"), new WyJS.Byte("01101001b"), new WyJS.Byte("01101010b"), new WyJS.Byte("01101011b"), new WyJS.Byte("01101100b"), new WyJS.Byte("01101101b"), new WyJS.Byte("01101110b"), new WyJS.Byte("01101111b"), new WyJS.Byte("01110000b"), new WyJS.Byte("01110001b"), new WyJS.Byte("01110010b"), new WyJS.Byte("01110011b"), new WyJS.Byte("01110100b"), new WyJS.Byte("01110101b"), new WyJS.Byte("01110110b"), new WyJS.Byte("01110111b"), new WyJS.Byte("01111000b"), new WyJS.Byte("01111001b"), new WyJS.Byte("01111010b"), new WyJS.Byte("01111011b"), new WyJS.Byte("01111100b"), new WyJS.Byte("01111101b"), new WyJS.Byte("01111110b")], new WyJS.Type.List(new WyJS.Type.Byte()));
            var r7 = r6.length();//lengthof %7 = %6 : byte[]
            if(WyJS.gt(r0, r7, true)){
               control_flow_pc = 87;
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
            control_flow_pc = -4;
            control_flow_repeat = true;
            break;
         case -4:
            var r14 = new WyJS.Integer(9);
            if(WyJS.gt(r2, r14, true)){
               control_flow_pc = 89;
               control_flow_repeat = true;
               continue outer;
            }
            var r15 = r1.sll(r2);//shl %15 = %1, %2 : byte
            var r16 = shr$Z9dFXd1Fs1E(r1, r2);//invoke %16 = (%1, %2) Byte_Valid_5:shr : function(byte,int) -> byte
            if(WyJS.equals(r15, r16, true)){
               control_flow_pc = 90;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 90:
            var r17 = new WyJS.Integer(1);
            var r18 = r2.add(r17);//add %18 = %2, %17 : int
            var r2 = r18;//assign %2 = %18  : int
            control_flow_pc = -4;
            control_flow_repeat = true;
            break;
            control_flow_pc = -3;
            control_flow_repeat = true;
            break;
         case 89:
            var r19 = new WyJS.Integer(1);
            var r20 = r0.add(r19);//add %20 = %0, %19 : int
            var r0 = r20;//assign %0 = %20  : int
            control_flow_pc = -3;
            control_flow_repeat = true;
            break;
         case 87:
            return;
      }
   }
}

