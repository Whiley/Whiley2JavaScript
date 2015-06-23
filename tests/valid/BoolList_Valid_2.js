function play(r0){//function([bool]) -> [bool]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r3 = r0;//assign %3 = %0  : [bool]
            var r1 = r3;//assign %1 = %3  : [bool]
            var r5 = 0;//const %5 = 0 : int
            var r4 = r5;//assign %4 = %5  : int
            var r2 = r4;//assign %2 = %4  : int
            while(true){//loop (%1, %2, %6, %7, %8, %9, %10, %11, %12, %13, %14)
               var r6 = r0.length;//lengthof %6 = %0 : [bool]
               if(r2  >=  r6){//ifge %2, %6 goto label1300 : int
                  control_flow_pc = 1300;
                  control_flow_repeat = true;
                  continue outer;
               }
               var r7 = isAlive(r2, r0);//invoke %7 = (%2, %0) BoolList_Valid_2:isAlive : function(int,[bool]) -> bool
               var r8 = true;//const %8 = true : bool
               if(r7  ==  r8){
                  var r9 = true;//const %9 = true : bool
                  var r10 = true;//const %10 = true : bool
                  r1[r2] = r10;//update %1[%2] = %10 : [bool] -> [bool]
                  control_flow_pc = 1303;
                  control_flow_repeat = true;
                  continue outer;//goto label1303
               case 1302:
                  continue;
               }
               var r9 = true;//const %9 = true : bool
               var r10 = true;//const %10 = true : bool
               r1[r2] = r10;//update %1[%2] = %10 : [bool] -> [bool]
               var r11 = false;//const %11 = false : bool
               var r12 = false;//const %12 = false : bool
               r1[r2] = r12;//update %1[%2] = %12 : [bool] -> [bool]
               var r13 = 1;//const %13 = 1 : int
               var r14 = r2 + r13;//add %14 = %2, %13 : int
               var r2 = r14;//assign %2 = %14  : int
            }
         case 1300:
            return r1;//return %1 : [bool]
      }
   }
}

function isAlive(r0, r1){//function(int,[bool]) -> bool
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r2 = 0;//const %2 = 0 : int
            if(r0  <=  r2){//ifle %0, %2 goto label1304 : int
               control_flow_pc = 1304;
               control_flow_repeat = true;
               continue outer;
            }
            var r3 = 1;//const %3 = 1 : int
            var r4 = r0 + r3;//add %4 = %0, %3 : int
            var r5 = r1.length;//lengthof %5 = %1 : [bool]
            if(r4  >=  r5){//ifge %4, %5 goto label1304 : int
               control_flow_pc = 1304;
               control_flow_repeat = true;
               continue outer;
            }
            var r6 = 1;//const %6 = 1 : int
            var r7 = r0 - r6;//sub %7 = %0, %6 : int
            var r8 = r1[r7];
            var r9 = true;//const %9 = true : bool
            if(r8  ==  r9){//ifeq %8, %9 goto label1305 : bool
               control_flow_pc = 1305;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 1304;
            control_flow_repeat = true;
            continue outer;//goto label1304
         case 1305:
            var r10 = 1;//const %10 = 1 : int
            var r11 = r0 + r10;//add %11 = %0, %10 : int
            var r12 = r1[r11];
            var r13 = true;//const %13 = true : bool
            if(r12  ==  r13){//ifeq %12, %13 goto label1306 : bool
               control_flow_pc = 1306;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 1304;
            control_flow_repeat = true;
            continue outer;//goto label1304
         case 1306:
            var r14 = true;//const %14 = true : bool
            return r14;//return %14 : bool
            control_flow_pc = 1307;
            control_flow_repeat = true;
            continue outer;//goto label1307
         case 1304:
            var r15 = false;//const %15 = false : bool
            return r15;//return %15 : bool
         case 1307:
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
            var r2 = true;//const %2 = true : bool
            var r3 = true;//const %3 = true : bool
            var r4 = true;//const %4 = true : bool
            var r5 = true;//const %5 = true : bool
            var r6 = true;//const %6 = true : bool
            var r7 = true;//const %7 = true : bool
            var r8 = true;//const %8 = true : bool
            var r9 = [r2, r3, r4, r5, r6, r7, r8];
            var r1 = r9;//assign %1 = %9  : [bool]
            var r0 = r1;//assign %0 = %1  : [bool]
            var r10 = true;//const %10 = true : bool
            var r11 = true;//const %11 = true : bool
            var r12 = true;//const %12 = true : bool
            var r13 = true;//const %13 = true : bool
            var r14 = true;//const %14 = true : bool
            var r15 = true;//const %15 = true : bool
            var r16 = true;//const %16 = true : bool
            var r17 = [r10, r11, r12, r13, r14, r15, r16];
            if(r0.length ==  r17.length){
               var listComp = true;
               for(var i = 0; i<r0.length;i++){
                  if(r0[i]  !=  r17[i]){
                     listCompFail = false;
                  }
               }
               if(listComp){//ifeq %0, %17 goto label1308 : [bool]
                  control_flow_pc = 1308;
                  control_flow_repeat = true;
                  continue outer;
               }
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1308:
            var r18 = play(r0);//invoke %18 = (%0) BoolList_Valid_2:play : function([bool]) -> [bool]
            var r0 = r18;//assign %0 = %18  : [bool]
            var r19 = false;//const %19 = false : bool
            var r20 = true;//const %20 = true : bool
            var r21 = true;//const %21 = true : bool
            var r22 = true;//const %22 = true : bool
            var r23 = true;//const %23 = true : bool
            var r24 = true;//const %24 = true : bool
            var r25 = false;//const %25 = false : bool
            var r26 = [r19, r20, r21, r22, r23, r24, r25];
            if(r0.length ==  r26.length){
               var listComp = true;
               for(var i = 0; i<r0.length;i++){
                  if(r0[i]  !=  r26[i]){
                     listCompFail = false;
                  }
               }
               if(listComp){//ifeq %0, %26 goto label1309 : [bool]
                  control_flow_pc = 1309;
                  control_flow_repeat = true;
                  continue outer;
               }
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1309:
            var r27 = play(r0);//invoke %27 = (%0) BoolList_Valid_2:play : function([bool]) -> [bool]
            var r0 = r27;//assign %0 = %27  : [bool]
            var r28 = false;//const %28 = false : bool
            var r29 = false;//const %29 = false : bool
            var r30 = true;//const %30 = true : bool
            var r31 = true;//const %31 = true : bool
            var r32 = true;//const %32 = true : bool
            var r33 = false;//const %33 = false : bool
            var r34 = false;//const %34 = false : bool
            var r35 = [r28, r29, r30, r31, r32, r33, r34];
            if(r0.length ==  r35.length){
               var listComp = true;
               for(var i = 0; i<r0.length;i++){
                  if(r0[i]  !=  r35[i]){
                     listCompFail = false;
                  }
               }
               if(listComp){//ifeq %0, %35 goto label1310 : [bool]
                  control_flow_pc = 1310;
                  control_flow_repeat = true;
                  continue outer;
               }
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1310:
            var r36 = play(r0);//invoke %36 = (%0) BoolList_Valid_2:play : function([bool]) -> [bool]
            var r0 = r36;//assign %0 = %36  : [bool]
            var r37 = false;//const %37 = false : bool
            var r38 = false;//const %38 = false : bool
            var r39 = false;//const %39 = false : bool
            var r40 = true;//const %40 = true : bool
            var r41 = false;//const %41 = false : bool
            var r42 = false;//const %42 = false : bool
            var r43 = false;//const %43 = false : bool
            var r44 = [r37, r38, r39, r40, r41, r42, r43];
            if(r0.length ==  r44.length){
               var listComp = true;
               for(var i = 0; i<r0.length;i++){
                  if(r0[i]  !=  r44[i]){
                     listCompFail = false;
                  }
               }
               if(listComp){//ifeq %0, %44 goto label1311 : [bool]
                  control_flow_pc = 1311;
                  control_flow_repeat = true;
                  continue outer;
               }
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1311:
            var r45 = play(r0);//invoke %45 = (%0) BoolList_Valid_2:play : function([bool]) -> [bool]
            var r0 = r45;//assign %0 = %45  : [bool]
            var r46 = false;//const %46 = false : bool
            var r47 = false;//const %47 = false : bool
            var r48 = false;//const %48 = false : bool
            var r49 = false;//const %49 = false : bool
            var r50 = false;//const %50 = false : bool
            var r51 = false;//const %51 = false : bool
            var r52 = false;//const %52 = false : bool
            var r53 = [r46, r47, r48, r49, r50, r51, r52];
            if(r0.length ==  r53.length){
               var listComp = true;
               for(var i = 0; i<r0.length;i++){
                  if(r0[i]  !=  r53[i]){
                     listCompFail = false;
                  }
               }
               if(listComp){//ifeq %0, %53 goto label1312 : [bool]
                  control_flow_pc = 1312;
                  control_flow_repeat = true;
                  continue outer;
               }
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1312:
      }
   }
}

test();
