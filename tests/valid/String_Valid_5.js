function indexOf(r0, r1){//function(int,[int]) -> int|null
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r4 = 0;//const %4 = 0 : int
            var r3 = r4;//assign %3 = %4  : int
            var r2 = r3;//assign %2 = %3  : int
            while(true){//loop (%2, %5, %6, %7, %8)
               var r5 = r1.length;//lengthof %5 = %1 : [int]
               if(r2  >=  r5){//ifge %2, %5 goto label2214 : int
                  control_flow_pc = 2214;
                  control_flow_repeat = true;
                  continue outer;
               }
               var r6 = r1[r2];
               if(r0  !=  r6){
                  var r7 = 1;//const %7 = 1 : int
                  var r8 = r2 + r7;//add %8 = %2, %7 : int
                  var r2 = r8;//assign %2 = %8  : int
                  continue;
               }
               return r2;//return %2 : null|int
               var r7 = 1;//const %7 = 1 : int
               var r8 = r2 + r7;//add %8 = %2, %7 : int
               var r2 = r8;//assign %2 = %8  : int
            }
         case 2214:
            var r9 = null;//const %9 = null : null
            return r9;//return %9 : null|int
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
            var r1 = 72;//const %1 = 72 : int
            var r2 = [72,101,108,108,111,32,87,111,114,108,100];//const %2 = [72,101,108,108,111,32,87,111,114,108,100] : [int+]
            var r0 = indexOf(r1, r2);//invoke %0 = (%1, %2) String_Valid_5:indexOf : function(int,[int]) -> int|null
            var r3 = 0;//const %3 = 0 : int
            if(r0  ==  r3){//ifeq %0, %3 goto label2216 : null|int
               control_flow_pc = 2216;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2216:
            var r5 = 101;//const %5 = 101 : int
            var r6 = [72,101,108,108,111,32,87,111,114,108,100];//const %6 = [72,101,108,108,111,32,87,111,114,108,100] : [int+]
            var r4 = indexOf(r5, r6);//invoke %4 = (%5, %6) String_Valid_5:indexOf : function(int,[int]) -> int|null
            var r7 = 1;//const %7 = 1 : int
            if(r4  ==  r7){//ifeq %4, %7 goto label2217 : null|int
               control_flow_pc = 2217;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2217:
            var r9 = 108;//const %9 = 108 : int
            var r10 = [72,101,108,108,111,32,87,111,114,108,100];//const %10 = [72,101,108,108,111,32,87,111,114,108,100] : [int+]
            var r8 = indexOf(r9, r10);//invoke %8 = (%9, %10) String_Valid_5:indexOf : function(int,[int]) -> int|null
            var r11 = 2;//const %11 = 2 : int
            if(r8  ==  r11){//ifeq %8, %11 goto label2218 : null|int
               control_flow_pc = 2218;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2218:
            var r13 = 111;//const %13 = 111 : int
            var r14 = [72,101,108,108,111,32,87,111,114,108,100];//const %14 = [72,101,108,108,111,32,87,111,114,108,100] : [int+]
            var r12 = indexOf(r13, r14);//invoke %12 = (%13, %14) String_Valid_5:indexOf : function(int,[int]) -> int|null
            var r15 = 4;//const %15 = 4 : int
            if(r12  ==  r15){//ifeq %12, %15 goto label2219 : null|int
               control_flow_pc = 2219;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2219:
            var r17 = 32;//const %17 = 32 : int
            var r18 = [72,101,108,108,111,32,87,111,114,108,100];//const %18 = [72,101,108,108,111,32,87,111,114,108,100] : [int+]
            var r16 = indexOf(r17, r18);//invoke %16 = (%17, %18) String_Valid_5:indexOf : function(int,[int]) -> int|null
            var r19 = 5;//const %19 = 5 : int
            if(r16  ==  r19){//ifeq %16, %19 goto label2220 : null|int
               control_flow_pc = 2220;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2220:
            var r21 = 87;//const %21 = 87 : int
            var r22 = [72,101,108,108,111,32,87,111,114,108,100];//const %22 = [72,101,108,108,111,32,87,111,114,108,100] : [int+]
            var r20 = indexOf(r21, r22);//invoke %20 = (%21, %22) String_Valid_5:indexOf : function(int,[int]) -> int|null
            var r23 = 6;//const %23 = 6 : int
            if(r20  ==  r23){//ifeq %20, %23 goto label2221 : null|int
               control_flow_pc = 2221;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2221:
            var r25 = 114;//const %25 = 114 : int
            var r26 = [72,101,108,108,111,32,87,111,114,108,100];//const %26 = [72,101,108,108,111,32,87,111,114,108,100] : [int+]
            var r24 = indexOf(r25, r26);//invoke %24 = (%25, %26) String_Valid_5:indexOf : function(int,[int]) -> int|null
            var r27 = 8;//const %27 = 8 : int
            if(r24  ==  r27){//ifeq %24, %27 goto label2222 : null|int
               control_flow_pc = 2222;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2222:
            var r29 = 100;//const %29 = 100 : int
            var r30 = [72,101,108,108,111,32,87,111,114,108,100];//const %30 = [72,101,108,108,111,32,87,111,114,108,100] : [int+]
            var r28 = indexOf(r29, r30);//invoke %28 = (%29, %30) String_Valid_5:indexOf : function(int,[int]) -> int|null
            var r31 = 10;//const %31 = 10 : int
            if(r28  ==  r31){//ifeq %28, %31 goto label2223 : null|int
               control_flow_pc = 2223;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2223:
            var r33 = 122;//const %33 = 122 : int
            var r34 = [72,101,108,108,111,32,87,111,114,108,100];//const %34 = [72,101,108,108,111,32,87,111,114,108,100] : [int+]
            var r32 = indexOf(r33, r34);//invoke %32 = (%33, %34) String_Valid_5:indexOf : function(int,[int]) -> int|null
            var r35 = null;//const %35 = null : null
            if(r32  ==  r35){//ifeq %32, %35 goto label2224 : null|int
               control_flow_pc = 2224;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2224:
            var r37 = 49;//const %37 = 49 : int
            var r38 = [72,101,108,108,111,32,87,111,114,108,100];//const %38 = [72,101,108,108,111,32,87,111,114,108,100] : [int+]
            var r36 = indexOf(r37, r38);//invoke %36 = (%37, %38) String_Valid_5:indexOf : function(int,[int]) -> int|null
            var r39 = null;//const %39 = null : null
            if(r36  ==  r39){//ifeq %36, %39 goto label2225 : null|int
               control_flow_pc = 2225;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2225:
      }
   }
}

test();
