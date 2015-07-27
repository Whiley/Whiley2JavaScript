function inc(r0){//function(ConstrainedInt_Valid_22:item) -> ConstrainedInt_Valid_22:item
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = new WyJS.Integer(1);
            var r2 = r0.add(r1);//add %2 = %0, %1 : int
            var r3 = new WyJS.Integer(7);
            var r4 = r2.rem(r3);//rem %4 = %2, %3 : int
            return r4;//return %4 : int
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
            var r2 = new WyJS.Integer(0);
            if(WyJS.lt(r1, r2, true)){
               control_flow_pc = 2372;
               control_flow_repeat = true;
               continue outer;
            }
            var r4 = inc(r0);//invoke %4 = (%0) ConstrainedInt_Valid_22:inc : function(ConstrainedInt_Valid_22:item) -> ConstrainedInt_Valid_22:item
            var r5 = new WyJS.Integer(1);
            var r6 = r1.sub(r5);//sub %6 = %1, %5 : int
            var r3 = get(r4, r6);//invoke %3 = (%4, %6) ConstrainedInt_Valid_22:get : method(ConstrainedInt_Valid_22:item,int) -> [int]
            return r3;//return %3 : [int]
            control_flow_pc = 2373;
            control_flow_repeat = true;
            continue outer;//goto label2373
         case 2372:
            var r7 = new WyJS.List([[77,111,110,100,97,121],[84,117,101,115,100,97,121],[87,101,100,110,101,115,100,97,121],[84,104,117,114,115,100,97,121],[70,114,105,100,97,121],[83,97,116,117,114,100,97,121],[83,117,110,100,97,121]]);
            var r8 = r7.getValue(r0);
            return r8;//return %8 : [int]
         case 2373:
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
            var r1 = new WyJS.Integer(0);
            var r2 = new WyJS.Integer(0);
            var r0 = get(r1, r2);//invoke %0 = (%1, %2) ConstrainedInt_Valid_22:get : method(ConstrainedInt_Valid_22:item,int) -> [int]
            var r3 = new WyJS.List([77,111,110,100,97,121]);
            if(WyJS.equals(r0, r3, true)){
               control_flow_pc = 2374;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2374:
            var r5 = new WyJS.Integer(0);
            var r6 = new WyJS.Integer(1);
            var r4 = get(r5, r6);//invoke %4 = (%5, %6) ConstrainedInt_Valid_22:get : method(ConstrainedInt_Valid_22:item,int) -> [int]
            var r7 = new WyJS.List([84,117,101,115,100,97,121]);
            if(WyJS.equals(r4, r7, true)){
               control_flow_pc = 2375;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2375:
            var r9 = new WyJS.Integer(0);
            var r10 = new WyJS.Integer(2);
            var r8 = get(r9, r10);//invoke %8 = (%9, %10) ConstrainedInt_Valid_22:get : method(ConstrainedInt_Valid_22:item,int) -> [int]
            var r11 = new WyJS.List([87,101,100,110,101,115,100,97,121]);
            if(WyJS.equals(r8, r11, true)){
               control_flow_pc = 2376;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2376:
            var r13 = new WyJS.Integer(0);
            var r14 = new WyJS.Integer(3);
            var r12 = get(r13, r14);//invoke %12 = (%13, %14) ConstrainedInt_Valid_22:get : method(ConstrainedInt_Valid_22:item,int) -> [int]
            var r15 = new WyJS.List([84,104,117,114,115,100,97,121]);
            if(WyJS.equals(r12, r15, true)){
               control_flow_pc = 2377;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2377:
            var r17 = new WyJS.Integer(0);
            var r18 = new WyJS.Integer(4);
            var r16 = get(r17, r18);//invoke %16 = (%17, %18) ConstrainedInt_Valid_22:get : method(ConstrainedInt_Valid_22:item,int) -> [int]
            var r19 = new WyJS.List([70,114,105,100,97,121]);
            if(WyJS.equals(r16, r19, true)){
               control_flow_pc = 2378;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2378:
            var r21 = new WyJS.Integer(0);
            var r22 = new WyJS.Integer(5);
            var r20 = get(r21, r22);//invoke %20 = (%21, %22) ConstrainedInt_Valid_22:get : method(ConstrainedInt_Valid_22:item,int) -> [int]
            var r23 = new WyJS.List([83,97,116,117,114,100,97,121]);
            if(WyJS.equals(r20, r23, true)){
               control_flow_pc = 2379;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2379:
            var r25 = new WyJS.Integer(0);
            var r26 = new WyJS.Integer(6);
            var r24 = get(r25, r26);//invoke %24 = (%25, %26) ConstrainedInt_Valid_22:get : method(ConstrainedInt_Valid_22:item,int) -> [int]
            var r27 = new WyJS.List([83,117,110,100,97,121]);
            if(WyJS.equals(r24, r27, true)){
               control_flow_pc = 2380;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2380:
            var r29 = new WyJS.Integer(0);
            var r30 = new WyJS.Integer(7);
            var r28 = get(r29, r30);//invoke %28 = (%29, %30) ConstrainedInt_Valid_22:get : method(ConstrainedInt_Valid_22:item,int) -> [int]
            var r31 = new WyJS.List([77,111,110,100,97,121]);
            if(WyJS.equals(r28, r31, true)){
               control_flow_pc = 2381;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2381:
            var r33 = new WyJS.Integer(0);
            var r34 = new WyJS.Integer(8);
            var r32 = get(r33, r34);//invoke %32 = (%33, %34) ConstrainedInt_Valid_22:get : method(ConstrainedInt_Valid_22:item,int) -> [int]
            var r35 = new WyJS.List([84,117,101,115,100,97,121]);
            if(WyJS.equals(r32, r35, true)){
               control_flow_pc = 2382;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2382:
            var r37 = new WyJS.Integer(0);
            var r38 = new WyJS.Integer(9);
            var r36 = get(r37, r38);//invoke %36 = (%37, %38) ConstrainedInt_Valid_22:get : method(ConstrainedInt_Valid_22:item,int) -> [int]
            var r39 = new WyJS.List([87,101,100,110,101,115,100,97,121]);
            if(WyJS.equals(r36, r39, true)){
               control_flow_pc = 2383;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2383:
            var r41 = new WyJS.Integer(0);
            var r42 = new WyJS.Integer(10);
            var r40 = get(r41, r42);//invoke %40 = (%41, %42) ConstrainedInt_Valid_22:get : method(ConstrainedInt_Valid_22:item,int) -> [int]
            var r43 = new WyJS.List([84,104,117,114,115,100,97,121]);
            if(WyJS.equals(r40, r43, true)){
               control_flow_pc = 2384;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2384:
            var r45 = new WyJS.Integer(0);
            var r46 = new WyJS.Integer(11);
            var r44 = get(r45, r46);//invoke %44 = (%45, %46) ConstrainedInt_Valid_22:get : method(ConstrainedInt_Valid_22:item,int) -> [int]
            var r47 = new WyJS.List([70,114,105,100,97,121]);
            if(WyJS.equals(r44, r47, true)){
               control_flow_pc = 2385;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2385:
            var r49 = new WyJS.Integer(0);
            var r50 = new WyJS.Integer(12);
            var r48 = get(r49, r50);//invoke %48 = (%49, %50) ConstrainedInt_Valid_22:get : method(ConstrainedInt_Valid_22:item,int) -> [int]
            var r51 = new WyJS.List([83,97,116,117,114,100,97,121]);
            if(WyJS.equals(r48, r51, true)){
               control_flow_pc = 2386;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2386:
            var r53 = new WyJS.Integer(0);
            var r54 = new WyJS.Integer(13);
            var r52 = get(r53, r54);//invoke %52 = (%53, %54) ConstrainedInt_Valid_22:get : method(ConstrainedInt_Valid_22:item,int) -> [int]
            var r55 = new WyJS.List([83,117,110,100,97,121]);
            if(WyJS.equals(r52, r55, true)){
               control_flow_pc = 2387;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2387:
            var r57 = new WyJS.Integer(0);
            var r58 = new WyJS.Integer(14);
            var r56 = get(r57, r58);//invoke %56 = (%57, %58) ConstrainedInt_Valid_22:get : method(ConstrainedInt_Valid_22:item,int) -> [int]
            var r59 = new WyJS.List([77,111,110,100,97,121]);
            if(WyJS.equals(r56, r59, true)){
               control_flow_pc = 2388;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2388:
            var r61 = new WyJS.Integer(0);
            var r62 = new WyJS.Integer(15);
            var r60 = get(r61, r62);//invoke %60 = (%61, %62) ConstrainedInt_Valid_22:get : method(ConstrainedInt_Valid_22:item,int) -> [int]
            var r63 = new WyJS.List([84,117,101,115,100,97,121]);
            if(WyJS.equals(r60, r63, true)){
               control_flow_pc = 2389;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2389:
      }
   }
}

