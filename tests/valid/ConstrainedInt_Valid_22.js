function inc(r0){//function(ConstrainedInt_Valid_22:item) -> ConstrainedInt_Valid_22:item
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = 1;//const %1 = 1 : int
            var r2 = r0 + r1;//add %2 = %0, %1 : int
            var r3 = 7;//const %3 = 7 : int
            var r4 =             return r4;//return %4 : int
      }
   }
}

function get(r0, r1){//method(ConstrainedInt_Valid_22:item,int) -> [int]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r2 = 0;//const %2 = 0 : int
            if(r1  <=  r2){//ifle %1, %2 goto label2378 : int
               control_flow_pc = 2378;
               control_flow_repeat = true;
               continue outer;
            }
            var r4 = inc(r0);//invoke %4 = (%0) ConstrainedInt_Valid_22:inc : function(ConstrainedInt_Valid_22:item) -> ConstrainedInt_Valid_22:item
            var r5 = 1;//const %5 = 1 : int
            var r6 = r1 - r5;//sub %6 = %1, %5 : int
            var r3 = get(r4, r6);//invoke %3 = (%4, %6) ConstrainedInt_Valid_22:get : method(ConstrainedInt_Valid_22:item,int) -> [int]
            return r3;//return %3 : [int]
            control_flow_pc = 2379;
            control_flow_repeat = true;
            continue outer;//goto label2379
         case 2378:
            var r7 = [[77,111,110,100,97,121],[84,117,101,115,100,97,121],[87,101,100,110,101,115,100,97,121],[84,104,117,114,115,100,97,121],[70,114,105,100,97,121],[83,97,116,117,114,100,97,121],[83,117,110,100,97,121]];//const %7 = [[77,111,110,100,97,121],[84,117,101,115,100,97,121],[87,101,100,110,101,115,100,97,121],[84,104,117,114,115,100,97,121],[70,114,105,100,97,121],[83,97,116,117,114,100,97,121],[83,117,110,100,97,121]] : [[int+]+]
            var r8 = r7[r0];
            return r8;//return %8 : [int]
         case 2379:
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
            var r1 = 0;//const %1 = 0 : int
            var r2 = 0;//const %2 = 0 : int
            var r0 = get(r1, r2);//invoke %0 = (%1, %2) ConstrainedInt_Valid_22:get : method(ConstrainedInt_Valid_22:item,int) -> [int]
            var r3 = [77,111,110,100,97,121];//const %3 = [77,111,110,100,97,121] : [int+]
            if(r0.length ==  r3.length){
               var listComp = true;
               for(var i = 0; i<r0.length;i++){
                  if(r0[i]  !=  r3[i]){
                     listCompFail = false;
                  }
               }
               if(listComp){//ifeq %0, %3 goto label2380 : [int]
                  control_flow_pc = 2380;
                  control_flow_repeat = true;
                  continue outer;
               }
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2380:
            var r5 = 0;//const %5 = 0 : int
            var r6 = 1;//const %6 = 1 : int
            var r4 = get(r5, r6);//invoke %4 = (%5, %6) ConstrainedInt_Valid_22:get : method(ConstrainedInt_Valid_22:item,int) -> [int]
            var r7 = [84,117,101,115,100,97,121];//const %7 = [84,117,101,115,100,97,121] : [int+]
            if(r4.length ==  r7.length){
               var listComp = true;
               for(var i = 0; i<r4.length;i++){
                  if(r4[i]  !=  r7[i]){
                     listCompFail = false;
                  }
               }
               if(listComp){//ifeq %4, %7 goto label2381 : [int]
                  control_flow_pc = 2381;
                  control_flow_repeat = true;
                  continue outer;
               }
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2381:
            var r9 = 0;//const %9 = 0 : int
            var r10 = 2;//const %10 = 2 : int
            var r8 = get(r9, r10);//invoke %8 = (%9, %10) ConstrainedInt_Valid_22:get : method(ConstrainedInt_Valid_22:item,int) -> [int]
            var r11 = [87,101,100,110,101,115,100,97,121];//const %11 = [87,101,100,110,101,115,100,97,121] : [int+]
            if(r8.length ==  r11.length){
               var listComp = true;
               for(var i = 0; i<r8.length;i++){
                  if(r8[i]  !=  r11[i]){
                     listCompFail = false;
                  }
               }
               if(listComp){//ifeq %8, %11 goto label2382 : [int]
                  control_flow_pc = 2382;
                  control_flow_repeat = true;
                  continue outer;
               }
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2382:
            var r13 = 0;//const %13 = 0 : int
            var r14 = 3;//const %14 = 3 : int
            var r12 = get(r13, r14);//invoke %12 = (%13, %14) ConstrainedInt_Valid_22:get : method(ConstrainedInt_Valid_22:item,int) -> [int]
            var r15 = [84,104,117,114,115,100,97,121];//const %15 = [84,104,117,114,115,100,97,121] : [int+]
            if(r12.length ==  r15.length){
               var listComp = true;
               for(var i = 0; i<r12.length;i++){
                  if(r12[i]  !=  r15[i]){
                     listCompFail = false;
                  }
               }
               if(listComp){//ifeq %12, %15 goto label2383 : [int]
                  control_flow_pc = 2383;
                  control_flow_repeat = true;
                  continue outer;
               }
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2383:
            var r17 = 0;//const %17 = 0 : int
            var r18 = 4;//const %18 = 4 : int
            var r16 = get(r17, r18);//invoke %16 = (%17, %18) ConstrainedInt_Valid_22:get : method(ConstrainedInt_Valid_22:item,int) -> [int]
            var r19 = [70,114,105,100,97,121];//const %19 = [70,114,105,100,97,121] : [int+]
            if(r16.length ==  r19.length){
               var listComp = true;
               for(var i = 0; i<r16.length;i++){
                  if(r16[i]  !=  r19[i]){
                     listCompFail = false;
                  }
               }
               if(listComp){//ifeq %16, %19 goto label2384 : [int]
                  control_flow_pc = 2384;
                  control_flow_repeat = true;
                  continue outer;
               }
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2384:
            var r21 = 0;//const %21 = 0 : int
            var r22 = 5;//const %22 = 5 : int
            var r20 = get(r21, r22);//invoke %20 = (%21, %22) ConstrainedInt_Valid_22:get : method(ConstrainedInt_Valid_22:item,int) -> [int]
            var r23 = [83,97,116,117,114,100,97,121];//const %23 = [83,97,116,117,114,100,97,121] : [int+]
            if(r20.length ==  r23.length){
               var listComp = true;
               for(var i = 0; i<r20.length;i++){
                  if(r20[i]  !=  r23[i]){
                     listCompFail = false;
                  }
               }
               if(listComp){//ifeq %20, %23 goto label2385 : [int]
                  control_flow_pc = 2385;
                  control_flow_repeat = true;
                  continue outer;
               }
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2385:
            var r25 = 0;//const %25 = 0 : int
            var r26 = 6;//const %26 = 6 : int
            var r24 = get(r25, r26);//invoke %24 = (%25, %26) ConstrainedInt_Valid_22:get : method(ConstrainedInt_Valid_22:item,int) -> [int]
            var r27 = [83,117,110,100,97,121];//const %27 = [83,117,110,100,97,121] : [int+]
            if(r24.length ==  r27.length){
               var listComp = true;
               for(var i = 0; i<r24.length;i++){
                  if(r24[i]  !=  r27[i]){
                     listCompFail = false;
                  }
               }
               if(listComp){//ifeq %24, %27 goto label2386 : [int]
                  control_flow_pc = 2386;
                  control_flow_repeat = true;
                  continue outer;
               }
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2386:
            var r29 = 0;//const %29 = 0 : int
            var r30 = 7;//const %30 = 7 : int
            var r28 = get(r29, r30);//invoke %28 = (%29, %30) ConstrainedInt_Valid_22:get : method(ConstrainedInt_Valid_22:item,int) -> [int]
            var r31 = [77,111,110,100,97,121];//const %31 = [77,111,110,100,97,121] : [int+]
            if(r28.length ==  r31.length){
               var listComp = true;
               for(var i = 0; i<r28.length;i++){
                  if(r28[i]  !=  r31[i]){
                     listCompFail = false;
                  }
               }
               if(listComp){//ifeq %28, %31 goto label2387 : [int]
                  control_flow_pc = 2387;
                  control_flow_repeat = true;
                  continue outer;
               }
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2387:
            var r33 = 0;//const %33 = 0 : int
            var r34 = 8;//const %34 = 8 : int
            var r32 = get(r33, r34);//invoke %32 = (%33, %34) ConstrainedInt_Valid_22:get : method(ConstrainedInt_Valid_22:item,int) -> [int]
            var r35 = [84,117,101,115,100,97,121];//const %35 = [84,117,101,115,100,97,121] : [int+]
            if(r32.length ==  r35.length){
               var listComp = true;
               for(var i = 0; i<r32.length;i++){
                  if(r32[i]  !=  r35[i]){
                     listCompFail = false;
                  }
               }
               if(listComp){//ifeq %32, %35 goto label2388 : [int]
                  control_flow_pc = 2388;
                  control_flow_repeat = true;
                  continue outer;
               }
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2388:
            var r37 = 0;//const %37 = 0 : int
            var r38 = 9;//const %38 = 9 : int
            var r36 = get(r37, r38);//invoke %36 = (%37, %38) ConstrainedInt_Valid_22:get : method(ConstrainedInt_Valid_22:item,int) -> [int]
            var r39 = [87,101,100,110,101,115,100,97,121];//const %39 = [87,101,100,110,101,115,100,97,121] : [int+]
            if(r36.length ==  r39.length){
               var listComp = true;
               for(var i = 0; i<r36.length;i++){
                  if(r36[i]  !=  r39[i]){
                     listCompFail = false;
                  }
               }
               if(listComp){//ifeq %36, %39 goto label2389 : [int]
                  control_flow_pc = 2389;
                  control_flow_repeat = true;
                  continue outer;
               }
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2389:
            var r41 = 0;//const %41 = 0 : int
            var r42 = 10;//const %42 = 10 : int
            var r40 = get(r41, r42);//invoke %40 = (%41, %42) ConstrainedInt_Valid_22:get : method(ConstrainedInt_Valid_22:item,int) -> [int]
            var r43 = [84,104,117,114,115,100,97,121];//const %43 = [84,104,117,114,115,100,97,121] : [int+]
            if(r40.length ==  r43.length){
               var listComp = true;
               for(var i = 0; i<r40.length;i++){
                  if(r40[i]  !=  r43[i]){
                     listCompFail = false;
                  }
               }
               if(listComp){//ifeq %40, %43 goto label2390 : [int]
                  control_flow_pc = 2390;
                  control_flow_repeat = true;
                  continue outer;
               }
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2390:
            var r45 = 0;//const %45 = 0 : int
            var r46 = 11;//const %46 = 11 : int
            var r44 = get(r45, r46);//invoke %44 = (%45, %46) ConstrainedInt_Valid_22:get : method(ConstrainedInt_Valid_22:item,int) -> [int]
            var r47 = [70,114,105,100,97,121];//const %47 = [70,114,105,100,97,121] : [int+]
            if(r44.length ==  r47.length){
               var listComp = true;
               for(var i = 0; i<r44.length;i++){
                  if(r44[i]  !=  r47[i]){
                     listCompFail = false;
                  }
               }
               if(listComp){//ifeq %44, %47 goto label2391 : [int]
                  control_flow_pc = 2391;
                  control_flow_repeat = true;
                  continue outer;
               }
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2391:
            var r49 = 0;//const %49 = 0 : int
            var r50 = 12;//const %50 = 12 : int
            var r48 = get(r49, r50);//invoke %48 = (%49, %50) ConstrainedInt_Valid_22:get : method(ConstrainedInt_Valid_22:item,int) -> [int]
            var r51 = [83,97,116,117,114,100,97,121];//const %51 = [83,97,116,117,114,100,97,121] : [int+]
            if(r48.length ==  r51.length){
               var listComp = true;
               for(var i = 0; i<r48.length;i++){
                  if(r48[i]  !=  r51[i]){
                     listCompFail = false;
                  }
               }
               if(listComp){//ifeq %48, %51 goto label2392 : [int]
                  control_flow_pc = 2392;
                  control_flow_repeat = true;
                  continue outer;
               }
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2392:
            var r53 = 0;//const %53 = 0 : int
            var r54 = 13;//const %54 = 13 : int
            var r52 = get(r53, r54);//invoke %52 = (%53, %54) ConstrainedInt_Valid_22:get : method(ConstrainedInt_Valid_22:item,int) -> [int]
            var r55 = [83,117,110,100,97,121];//const %55 = [83,117,110,100,97,121] : [int+]
            if(r52.length ==  r55.length){
               var listComp = true;
               for(var i = 0; i<r52.length;i++){
                  if(r52[i]  !=  r55[i]){
                     listCompFail = false;
                  }
               }
               if(listComp){//ifeq %52, %55 goto label2393 : [int]
                  control_flow_pc = 2393;
                  control_flow_repeat = true;
                  continue outer;
               }
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2393:
            var r57 = 0;//const %57 = 0 : int
            var r58 = 14;//const %58 = 14 : int
            var r56 = get(r57, r58);//invoke %56 = (%57, %58) ConstrainedInt_Valid_22:get : method(ConstrainedInt_Valid_22:item,int) -> [int]
            var r59 = [77,111,110,100,97,121];//const %59 = [77,111,110,100,97,121] : [int+]
            if(r56.length ==  r59.length){
               var listComp = true;
               for(var i = 0; i<r56.length;i++){
                  if(r56[i]  !=  r59[i]){
                     listCompFail = false;
                  }
               }
               if(listComp){//ifeq %56, %59 goto label2394 : [int]
                  control_flow_pc = 2394;
                  control_flow_repeat = true;
                  continue outer;
               }
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2394:
            var r61 = 0;//const %61 = 0 : int
            var r62 = 15;//const %62 = 15 : int
            var r60 = get(r61, r62);//invoke %60 = (%61, %62) ConstrainedInt_Valid_22:get : method(ConstrainedInt_Valid_22:item,int) -> [int]
            var r63 = [84,117,101,115,100,97,121];//const %63 = [84,117,101,115,100,97,121] : [int+]
            if(r60.length ==  r63.length){
               var listComp = true;
               for(var i = 0; i<r60.length;i++){
                  if(r60[i]  !=  r63[i]){
                     listCompFail = false;
                  }
               }
               if(listComp){//ifeq %60, %63 goto label2395 : [int]
                  control_flow_pc = 2395;
                  control_flow_repeat = true;
                  continue outer;
               }
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2395:
      }
   }
}

test();
