function lastIndexOf(r0, r1){//function([int],int) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r4 = r0.length;//lengthof %4 = %0 : [int]
            var r3 = r4;//assign %3 = %4  : int
            var r2 = r3;//assign %2 = %3  : int
            while(true){//loop (%2, %5, %6, %7, %8, %9, %10, %11)
               var r5 = 1;//const %5 = 1 : int
               var r6 = r2 - r5;//sub %6 = %2, %5 : int
               var r2 = r6;//assign %2 = %6  : int
               var r10 = 0;//const %10 = 0 : int
               if(r2  <  r10){//iflt %2, %10 goto label487 : int
                  control_flow_pc = 487;
                  control_flow_repeat = true;
                  continue outer;
               }
               var r11 = r0[r2];
               if(r11  ==  r1){//ifeq %11, %1 goto label487 : int
                  control_flow_pc = 487;
                  control_flow_repeat = true;
                  continue outer;
               }
            }
         case 487:
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
            var r1 = 1;//const %1 = 1 : int
            var r2 = 2;//const %2 = 2 : int
            var r3 = 3;//const %3 = 3 : int
            var r4 = 4;//const %4 = 4 : int
            var r5 = 5;//const %5 = 5 : int
            var r6 = 4;//const %6 = 4 : int
            var r7 = 3;//const %7 = 3 : int
            var r8 = 2;//const %8 = 2 : int
            var r9 = 1;//const %9 = 1 : int
            var r10 = [r1, r2, r3, r4, r5, r6, r7, r8, r9];
            var r11 = 1;//const %11 = 1 : int
            var r0 = lastIndexOf(r10, r11);//invoke %0 = (%10, %11) DoWhile_Valid_6:lastIndexOf : function([int],int) -> int
            var r12 = 8;//const %12 = 8 : int
            if(r0  ==  r12){//ifeq %0, %12 goto label488 : int
               control_flow_pc = 488;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 488:
            var r14 = 1;//const %14 = 1 : int
            var r15 = 2;//const %15 = 2 : int
            var r16 = 3;//const %16 = 3 : int
            var r17 = 4;//const %17 = 4 : int
            var r18 = 5;//const %18 = 5 : int
            var r19 = 4;//const %19 = 4 : int
            var r20 = 3;//const %20 = 3 : int
            var r21 = 2;//const %21 = 2 : int
            var r22 = 1;//const %22 = 1 : int
            var r23 = [r14, r15, r16, r17, r18, r19, r20, r21, r22];
            var r24 = 2;//const %24 = 2 : int
            var r13 = lastIndexOf(r23, r24);//invoke %13 = (%23, %24) DoWhile_Valid_6:lastIndexOf : function([int],int) -> int
            var r25 = 7;//const %25 = 7 : int
            if(r13  ==  r25){//ifeq %13, %25 goto label489 : int
               control_flow_pc = 489;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 489:
            var r27 = 1;//const %27 = 1 : int
            var r28 = 2;//const %28 = 2 : int
            var r29 = 3;//const %29 = 3 : int
            var r30 = 4;//const %30 = 4 : int
            var r31 = 5;//const %31 = 5 : int
            var r32 = 4;//const %32 = 4 : int
            var r33 = 3;//const %33 = 3 : int
            var r34 = 2;//const %34 = 2 : int
            var r35 = 1;//const %35 = 1 : int
            var r36 = [r27, r28, r29, r30, r31, r32, r33, r34, r35];
            var r37 = 3;//const %37 = 3 : int
            var r26 = lastIndexOf(r36, r37);//invoke %26 = (%36, %37) DoWhile_Valid_6:lastIndexOf : function([int],int) -> int
            var r38 = 6;//const %38 = 6 : int
            if(r26  ==  r38){//ifeq %26, %38 goto label490 : int
               control_flow_pc = 490;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 490:
            var r40 = 1;//const %40 = 1 : int
            var r41 = 2;//const %41 = 2 : int
            var r42 = 3;//const %42 = 3 : int
            var r43 = 4;//const %43 = 4 : int
            var r44 = 5;//const %44 = 5 : int
            var r45 = 4;//const %45 = 4 : int
            var r46 = 3;//const %46 = 3 : int
            var r47 = 2;//const %47 = 2 : int
            var r48 = 1;//const %48 = 1 : int
            var r49 = [r40, r41, r42, r43, r44, r45, r46, r47, r48];
            var r50 = 4;//const %50 = 4 : int
            var r39 = lastIndexOf(r49, r50);//invoke %39 = (%49, %50) DoWhile_Valid_6:lastIndexOf : function([int],int) -> int
            var r51 = 5;//const %51 = 5 : int
            if(r39  ==  r51){//ifeq %39, %51 goto label491 : int
               control_flow_pc = 491;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 491:
            var r53 = 1;//const %53 = 1 : int
            var r54 = 2;//const %54 = 2 : int
            var r55 = 3;//const %55 = 3 : int
            var r56 = 4;//const %56 = 4 : int
            var r57 = 5;//const %57 = 5 : int
            var r58 = 4;//const %58 = 4 : int
            var r59 = 3;//const %59 = 3 : int
            var r60 = 2;//const %60 = 2 : int
            var r61 = 1;//const %61 = 1 : int
            var r62 = [r53, r54, r55, r56, r57, r58, r59, r60, r61];
            var r63 = 5;//const %63 = 5 : int
            var r52 = lastIndexOf(r62, r63);//invoke %52 = (%62, %63) DoWhile_Valid_6:lastIndexOf : function([int],int) -> int
            var r64 = 4;//const %64 = 4 : int
            if(r52  ==  r64){//ifeq %52, %64 goto label492 : int
               control_flow_pc = 492;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 492:
      }
   }
}

test();
