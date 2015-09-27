function f$Y9dFXs1Fs2(r0, r1){//function(int,int) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r2 = r0.rem(r1);//rem %2 = %0, %1 : int
            return r2;//return %2 : int
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
            var r1 = new WyJS.Integer(10);
            var r2 = new WyJS.Integer(5);
            var r0 = f$Y9dFXs1Fs2(r1, r2);//invoke %0 = (%1, %2) Remainder_Valid_1:f : function(int,int) -> int
            var r3 = new WyJS.Integer(0);
            if(WyJS.equals(r0, r3, true)){
               control_flow_pc = 2114;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2114:
            var r5 = new WyJS.Integer(10);
            var r6 = new WyJS.Integer(4);
            var r4 = f$Y9dFXs1Fs2(r5, r6);//invoke %4 = (%5, %6) Remainder_Valid_1:f : function(int,int) -> int
            var r7 = new WyJS.Integer(2);
            if(WyJS.equals(r4, r7, true)){
               control_flow_pc = 2115;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2115:
            var r9 = new WyJS.Integer(1);
            var r10 = new WyJS.Integer(4);
            var r8 = f$Y9dFXs1Fs2(r9, r10);//invoke %8 = (%9, %10) Remainder_Valid_1:f : function(int,int) -> int
            var r11 = new WyJS.Integer(1);
            if(WyJS.equals(r8, r11, true)){
               control_flow_pc = 2116;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2116:
            var r13 = new WyJS.Integer(103);
            var r14 = new WyJS.Integer(2);
            var r12 = f$Y9dFXs1Fs2(r13, r14);//invoke %12 = (%13, %14) Remainder_Valid_1:f : function(int,int) -> int
            var r15 = new WyJS.Integer(1);
            if(WyJS.equals(r12, r15, true)){
               control_flow_pc = 2117;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2117:
            var r17 = new WyJS.Integer(10);
            var r18 = r17.neg();//neg %18 = %17 : int
            var r19 = new WyJS.Integer(5);
            var r16 = f$Y9dFXs1Fs2(r18, r19);//invoke %16 = (%18, %19) Remainder_Valid_1:f : function(int,int) -> int
            var r20 = new WyJS.Integer(0);
            if(WyJS.equals(r16, r20, true)){
               control_flow_pc = 2118;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2118:
            var r22 = new WyJS.Integer(10);
            var r23 = r22.neg();//neg %23 = %22 : int
            var r24 = new WyJS.Integer(4);
            var r21 = f$Y9dFXs1Fs2(r23, r24);//invoke %21 = (%23, %24) Remainder_Valid_1:f : function(int,int) -> int
            var r25 = new WyJS.Integer(2);
            var r26 = r25.neg();//neg %26 = %25 : int
            if(WyJS.equals(r21, r26, true)){
               control_flow_pc = 2119;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2119:
            var r28 = new WyJS.Integer(1);
            var r29 = r28.neg();//neg %29 = %28 : int
            var r30 = new WyJS.Integer(4);
            var r27 = f$Y9dFXs1Fs2(r29, r30);//invoke %27 = (%29, %30) Remainder_Valid_1:f : function(int,int) -> int
            var r31 = new WyJS.Integer(1);
            var r32 = r31.neg();//neg %32 = %31 : int
            if(WyJS.equals(r27, r32, true)){
               control_flow_pc = 2120;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2120:
            var r34 = new WyJS.Integer(103);
            var r35 = r34.neg();//neg %35 = %34 : int
            var r36 = new WyJS.Integer(2);
            var r33 = f$Y9dFXs1Fs2(r35, r36);//invoke %33 = (%35, %36) Remainder_Valid_1:f : function(int,int) -> int
            var r37 = new WyJS.Integer(1);
            var r38 = r37.neg();//neg %38 = %37 : int
            if(WyJS.equals(r33, r38, true)){
               control_flow_pc = 2121;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2121:
            var r40 = new WyJS.Integer(10);
            var r41 = r40.neg();//neg %41 = %40 : int
            var r42 = new WyJS.Integer(5);
            var r43 = r42.neg();//neg %43 = %42 : int
            var r39 = f$Y9dFXs1Fs2(r41, r43);//invoke %39 = (%41, %43) Remainder_Valid_1:f : function(int,int) -> int
            var r44 = new WyJS.Integer(0);
            if(WyJS.equals(r39, r44, true)){
               control_flow_pc = 2122;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2122:
            var r46 = new WyJS.Integer(10);
            var r47 = r46.neg();//neg %47 = %46 : int
            var r48 = new WyJS.Integer(4);
            var r49 = r48.neg();//neg %49 = %48 : int
            var r45 = f$Y9dFXs1Fs2(r47, r49);//invoke %45 = (%47, %49) Remainder_Valid_1:f : function(int,int) -> int
            var r50 = new WyJS.Integer(2);
            var r51 = r50.neg();//neg %51 = %50 : int
            if(WyJS.equals(r45, r51, true)){
               control_flow_pc = 2123;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2123:
            var r53 = new WyJS.Integer(1);
            var r54 = r53.neg();//neg %54 = %53 : int
            var r55 = new WyJS.Integer(4);
            var r56 = r55.neg();//neg %56 = %55 : int
            var r52 = f$Y9dFXs1Fs2(r54, r56);//invoke %52 = (%54, %56) Remainder_Valid_1:f : function(int,int) -> int
            var r57 = new WyJS.Integer(1);
            var r58 = r57.neg();//neg %58 = %57 : int
            if(WyJS.equals(r52, r58, true)){
               control_flow_pc = 2124;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2124:
            var r60 = new WyJS.Integer(103);
            var r61 = r60.neg();//neg %61 = %60 : int
            var r62 = new WyJS.Integer(2);
            var r63 = r62.neg();//neg %63 = %62 : int
            var r59 = f$Y9dFXs1Fs2(r61, r63);//invoke %59 = (%61, %63) Remainder_Valid_1:f : function(int,int) -> int
            var r64 = new WyJS.Integer(1);
            var r65 = r64.neg();//neg %65 = %64 : int
            if(WyJS.equals(r59, r65, true)){
               control_flow_pc = 2125;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2125:
            var r67 = new WyJS.Integer(10);
            var r68 = new WyJS.Integer(5);
            var r69 = r68.neg();//neg %69 = %68 : int
            var r66 = f$Y9dFXs1Fs2(r67, r69);//invoke %66 = (%67, %69) Remainder_Valid_1:f : function(int,int) -> int
            var r70 = new WyJS.Integer(0);
            if(WyJS.equals(r66, r70, true)){
               control_flow_pc = 2126;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2126:
            var r72 = new WyJS.Integer(10);
            var r73 = new WyJS.Integer(4);
            var r74 = r73.neg();//neg %74 = %73 : int
            var r71 = f$Y9dFXs1Fs2(r72, r74);//invoke %71 = (%72, %74) Remainder_Valid_1:f : function(int,int) -> int
            var r75 = new WyJS.Integer(2);
            if(WyJS.equals(r71, r75, true)){
               control_flow_pc = 2127;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2127:
            var r77 = new WyJS.Integer(1);
            var r78 = new WyJS.Integer(4);
            var r79 = r78.neg();//neg %79 = %78 : int
            var r76 = f$Y9dFXs1Fs2(r77, r79);//invoke %76 = (%77, %79) Remainder_Valid_1:f : function(int,int) -> int
            var r80 = new WyJS.Integer(1);
            if(WyJS.equals(r76, r80, true)){
               control_flow_pc = 2128;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2128:
            var r82 = new WyJS.Integer(103);
            var r83 = new WyJS.Integer(2);
            var r84 = r83.neg();//neg %84 = %83 : int
            var r81 = f$Y9dFXs1Fs2(r82, r84);//invoke %81 = (%82, %84) Remainder_Valid_1:f : function(int,int) -> int
            var r85 = new WyJS.Integer(1);
            if(WyJS.equals(r81, r85, true)){
               control_flow_pc = 2129;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2129:
            return;
      }
   }
}

