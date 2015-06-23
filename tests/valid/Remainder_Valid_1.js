function f(r0, r1){//function(int,int) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r2 =             return r2;//return %2 : int
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
            var r1 = 10;//const %1 = 10 : int
            var r2 = 5;//const %2 = 5 : int
            var r0 = f(r1, r2);//invoke %0 = (%1, %2) Remainder_Valid_1:f : function(int,int) -> int
            var r3 = 0;//const %3 = 0 : int
            if(r0  ==  r3){//ifeq %0, %3 goto label2039 : int
               control_flow_pc = 2039;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2039:
            var r5 = 10;//const %5 = 10 : int
            var r6 = 4;//const %6 = 4 : int
            var r4 = f(r5, r6);//invoke %4 = (%5, %6) Remainder_Valid_1:f : function(int,int) -> int
            var r7 = 2;//const %7 = 2 : int
            if(r4  ==  r7){//ifeq %4, %7 goto label2040 : int
               control_flow_pc = 2040;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2040:
            var r9 = 1;//const %9 = 1 : int
            var r10 = 4;//const %10 = 4 : int
            var r8 = f(r9, r10);//invoke %8 = (%9, %10) Remainder_Valid_1:f : function(int,int) -> int
            var r11 = 1;//const %11 = 1 : int
            if(r8  ==  r11){//ifeq %8, %11 goto label2041 : int
               control_flow_pc = 2041;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2041:
            var r13 = 103;//const %13 = 103 : int
            var r14 = 2;//const %14 = 2 : int
            var r12 = f(r13, r14);//invoke %12 = (%13, %14) Remainder_Valid_1:f : function(int,int) -> int
            var r15 = 1;//const %15 = 1 : int
            if(r12  ==  r15){//ifeq %12, %15 goto label2042 : int
               control_flow_pc = 2042;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2042:
            var r17 = 10;//const %17 = 10 : int
            var r18 = -r17;//neg %18 = %17 : int
            var r19 = 5;//const %19 = 5 : int
            var r16 = f(r18, r19);//invoke %16 = (%18, %19) Remainder_Valid_1:f : function(int,int) -> int
            var r20 = 0;//const %20 = 0 : int
            if(r16  ==  r20){//ifeq %16, %20 goto label2043 : int
               control_flow_pc = 2043;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2043:
            var r22 = 10;//const %22 = 10 : int
            var r23 = -r22;//neg %23 = %22 : int
            var r24 = 4;//const %24 = 4 : int
            var r21 = f(r23, r24);//invoke %21 = (%23, %24) Remainder_Valid_1:f : function(int,int) -> int
            var r25 = 2;//const %25 = 2 : int
            var r26 = -r25;//neg %26 = %25 : int
            if(r21  ==  r26){//ifeq %21, %26 goto label2044 : int
               control_flow_pc = 2044;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2044:
            var r28 = 1;//const %28 = 1 : int
            var r29 = -r28;//neg %29 = %28 : int
            var r30 = 4;//const %30 = 4 : int
            var r27 = f(r29, r30);//invoke %27 = (%29, %30) Remainder_Valid_1:f : function(int,int) -> int
            var r31 = 1;//const %31 = 1 : int
            var r32 = -r31;//neg %32 = %31 : int
            if(r27  ==  r32){//ifeq %27, %32 goto label2045 : int
               control_flow_pc = 2045;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2045:
            var r34 = 103;//const %34 = 103 : int
            var r35 = -r34;//neg %35 = %34 : int
            var r36 = 2;//const %36 = 2 : int
            var r33 = f(r35, r36);//invoke %33 = (%35, %36) Remainder_Valid_1:f : function(int,int) -> int
            var r37 = 1;//const %37 = 1 : int
            var r38 = -r37;//neg %38 = %37 : int
            if(r33  ==  r38){//ifeq %33, %38 goto label2046 : int
               control_flow_pc = 2046;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2046:
            var r40 = 10;//const %40 = 10 : int
            var r41 = -r40;//neg %41 = %40 : int
            var r42 = 5;//const %42 = 5 : int
            var r43 = -r42;//neg %43 = %42 : int
            var r39 = f(r41, r43);//invoke %39 = (%41, %43) Remainder_Valid_1:f : function(int,int) -> int
            var r44 = 0;//const %44 = 0 : int
            if(r39  ==  r44){//ifeq %39, %44 goto label2047 : int
               control_flow_pc = 2047;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2047:
            var r46 = 10;//const %46 = 10 : int
            var r47 = -r46;//neg %47 = %46 : int
            var r48 = 4;//const %48 = 4 : int
            var r49 = -r48;//neg %49 = %48 : int
            var r45 = f(r47, r49);//invoke %45 = (%47, %49) Remainder_Valid_1:f : function(int,int) -> int
            var r50 = 2;//const %50 = 2 : int
            var r51 = -r50;//neg %51 = %50 : int
            if(r45  ==  r51){//ifeq %45, %51 goto label2048 : int
               control_flow_pc = 2048;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2048:
            var r53 = 1;//const %53 = 1 : int
            var r54 = -r53;//neg %54 = %53 : int
            var r55 = 4;//const %55 = 4 : int
            var r56 = -r55;//neg %56 = %55 : int
            var r52 = f(r54, r56);//invoke %52 = (%54, %56) Remainder_Valid_1:f : function(int,int) -> int
            var r57 = 1;//const %57 = 1 : int
            var r58 = -r57;//neg %58 = %57 : int
            if(r52  ==  r58){//ifeq %52, %58 goto label2049 : int
               control_flow_pc = 2049;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2049:
            var r60 = 103;//const %60 = 103 : int
            var r61 = -r60;//neg %61 = %60 : int
            var r62 = 2;//const %62 = 2 : int
            var r63 = -r62;//neg %63 = %62 : int
            var r59 = f(r61, r63);//invoke %59 = (%61, %63) Remainder_Valid_1:f : function(int,int) -> int
            var r64 = 1;//const %64 = 1 : int
            var r65 = -r64;//neg %65 = %64 : int
            if(r59  ==  r65){//ifeq %59, %65 goto label2050 : int
               control_flow_pc = 2050;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2050:
            var r67 = 10;//const %67 = 10 : int
            var r68 = 5;//const %68 = 5 : int
            var r69 = -r68;//neg %69 = %68 : int
            var r66 = f(r67, r69);//invoke %66 = (%67, %69) Remainder_Valid_1:f : function(int,int) -> int
            var r70 = 0;//const %70 = 0 : int
            if(r66  ==  r70){//ifeq %66, %70 goto label2051 : int
               control_flow_pc = 2051;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2051:
            var r72 = 10;//const %72 = 10 : int
            var r73 = 4;//const %73 = 4 : int
            var r74 = -r73;//neg %74 = %73 : int
            var r71 = f(r72, r74);//invoke %71 = (%72, %74) Remainder_Valid_1:f : function(int,int) -> int
            var r75 = 2;//const %75 = 2 : int
            if(r71  ==  r75){//ifeq %71, %75 goto label2052 : int
               control_flow_pc = 2052;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2052:
            var r77 = 1;//const %77 = 1 : int
            var r78 = 4;//const %78 = 4 : int
            var r79 = -r78;//neg %79 = %78 : int
            var r76 = f(r77, r79);//invoke %76 = (%77, %79) Remainder_Valid_1:f : function(int,int) -> int
            var r80 = 1;//const %80 = 1 : int
            if(r76  ==  r80){//ifeq %76, %80 goto label2053 : int
               control_flow_pc = 2053;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2053:
            var r82 = 103;//const %82 = 103 : int
            var r83 = 2;//const %83 = 2 : int
            var r84 = -r83;//neg %84 = %83 : int
            var r81 = f(r82, r84);//invoke %81 = (%82, %84) Remainder_Valid_1:f : function(int,int) -> int
            var r85 = 1;//const %85 = 1 : int
            if(r81  ==  r85){//ifeq %81, %85 goto label2054 : int
               control_flow_pc = 2054;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2054:
      }
   }
}

test();
