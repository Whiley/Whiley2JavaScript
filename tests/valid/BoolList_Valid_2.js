function play$Z9bF1D527FWz(r0){//function(bool[]) -> bool[]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r3 = r0.clone(new WyJS.Type.Bool());//assign %3 = %0  : bool[]
            var r1 = r3.clone(new WyJS.Type.Bool());//assign %1 = %3  : bool[]
            var r5 = new WyJS.Integer(0);
            var r4 = r5;//assign %4 = %5  : int
            var r2 = r4;//assign %2 = %4  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case -2:
            var r9 = r0.length();//lengthof %9 = %0 : bool[]
            if(WyJS.gt(r2, r9, true)){
               control_flow_pc = 1350;
               control_flow_repeat = true;
               continue outer;
            }
            var r10 = isAlive$_9dF5X1Fs1RB12(r2, r0);//invoke %10 = (%2, %0) BoolList_Valid_2:isAlive : function(int,bool[]) -> bool
            var r11 = true;
            if(r10 === r11){
               control_flow_pc = 1351;
               control_flow_repeat = true;
               break;
            }
            else{
               control_flow_pc = -3;
               control_flow_repeat = true;
               break;
            }
         case -3:
            control_flow_pc = 1352;
            control_flow_repeat = true;
            continue outer;//goto label1352
            control_flow_pc = 1353;
            control_flow_repeat = true;
            break;
         case 1351:
            var r12 = true;
            var r13 = true;
            r1.setValue(r2, r13);
            control_flow_pc = 1353;
            control_flow_repeat = true;
            continue outer;//goto label1353
            control_flow_pc = 1353;
            control_flow_repeat = true;
            break;
         case 1352:
            var r14 = false;
            var r15 = false;
            r1.setValue(r2, r15);
            control_flow_pc = 1353;
            control_flow_repeat = true;
            break;
         case 1353:
            var r16 = new WyJS.Integer(1);
            var r17 = r2.add(r16);//add %17 = %2, %16 : int
            var r2 = r17;//assign %2 = %17  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case 1350:
            return r1;//return %1 : bool[]
            return;
      }
   }
}

function isAlive$_9dF5X1Fs1RB12(r0, r1){//function(int,bool[]) -> bool
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r2 = new WyJS.Integer(0);
            if(WyJS.lt(r0, r2, true)){
               control_flow_pc = 1354;
               control_flow_repeat = true;
               continue outer;
            }
            var r3 = new WyJS.Integer(1);
            var r4 = r0.add(r3);//add %4 = %0, %3 : int
            var r5 = r1.length();//lengthof %5 = %1 : bool[]
            if(WyJS.gt(r4, r5, true)){
               control_flow_pc = 1354;
               control_flow_repeat = true;
               continue outer;
            }
            var r6 = new WyJS.Integer(1);
            var r7 = r0.sub(r6);//sub %7 = %0, %6 : int
            var r8 = r1.getValue(r7);
            var r9 = true;
            if(r8 === r9){
               control_flow_pc = 1355;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 1354;
            control_flow_repeat = true;
            continue outer;//goto label1354
         case 1355:
            var r10 = new WyJS.Integer(1);
            var r11 = r0.add(r10);//add %11 = %0, %10 : int
            var r12 = r1.getValue(r11);
            var r13 = true;
            if(r12 === r13){
               control_flow_pc = 1356;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 1354;
            control_flow_repeat = true;
            continue outer;//goto label1354
         case 1356:
            var r14 = true;
            return r14;//return %14 : bool
            control_flow_pc = 1357;
            control_flow_repeat = true;
            continue outer;//goto label1357
         case 1354:
            var r15 = false;
            return r15;//return %15 : bool
         case 1357:
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
            var r2 = true;
            var r3 = true;
            var r4 = true;
            var r5 = true;
            var r6 = true;
            var r7 = true;
            var r8 = true;
            var r9 = new WyJS.List([r2, r3, r4, r5, r6, r7, r8], new WyJS.Type.List(new WyJS.Type.Bool()));
            var r1 = r9.clone(new WyJS.Type.Bool());//assign %1 = %9  : bool[]
            var r0 = r1.clone(new WyJS.Type.Bool());//assign %0 = %1  : bool[]
            var r10 = true;
            var r11 = true;
            var r12 = true;
            var r13 = true;
            var r14 = true;
            var r15 = true;
            var r16 = true;
            var r17 = new WyJS.List([r10, r11, r12, r13, r14, r15, r16], new WyJS.Type.List(new WyJS.Type.Bool()));
            if(WyJS.equals(r0, r17, true)){
               control_flow_pc = 1358;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1358:
            var r18 = play$Z9bF1D527FWz(r0);//invoke %18 = (%0) BoolList_Valid_2:play : function(bool[]) -> bool[]
            var r0 = r18.clone(new WyJS.Type.Bool());//assign %0 = %18  : bool[]
            var r19 = false;
            var r20 = true;
            var r21 = true;
            var r22 = true;
            var r23 = true;
            var r24 = true;
            var r25 = false;
            var r26 = new WyJS.List([r19, r20, r21, r22, r23, r24, r25], new WyJS.Type.List(new WyJS.Type.Bool()));
            if(WyJS.equals(r0, r26, true)){
               control_flow_pc = 1359;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1359:
            var r27 = play$Z9bF1D527FWz(r0);//invoke %27 = (%0) BoolList_Valid_2:play : function(bool[]) -> bool[]
            var r0 = r27.clone(new WyJS.Type.Bool());//assign %0 = %27  : bool[]
            var r28 = false;
            var r29 = false;
            var r30 = true;
            var r31 = true;
            var r32 = true;
            var r33 = false;
            var r34 = false;
            var r35 = new WyJS.List([r28, r29, r30, r31, r32, r33, r34], new WyJS.Type.List(new WyJS.Type.Bool()));
            if(WyJS.equals(r0, r35, true)){
               control_flow_pc = 1360;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1360:
            var r36 = play$Z9bF1D527FWz(r0);//invoke %36 = (%0) BoolList_Valid_2:play : function(bool[]) -> bool[]
            var r0 = r36.clone(new WyJS.Type.Bool());//assign %0 = %36  : bool[]
            var r37 = false;
            var r38 = false;
            var r39 = false;
            var r40 = true;
            var r41 = false;
            var r42 = false;
            var r43 = false;
            var r44 = new WyJS.List([r37, r38, r39, r40, r41, r42, r43], new WyJS.Type.List(new WyJS.Type.Bool()));
            if(WyJS.equals(r0, r44, true)){
               control_flow_pc = 1361;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1361:
            var r45 = play$Z9bF1D527FWz(r0);//invoke %45 = (%0) BoolList_Valid_2:play : function(bool[]) -> bool[]
            var r0 = r45.clone(new WyJS.Type.Bool());//assign %0 = %45  : bool[]
            var r46 = false;
            var r47 = false;
            var r48 = false;
            var r49 = false;
            var r50 = false;
            var r51 = false;
            var r52 = false;
            var r53 = new WyJS.List([r46, r47, r48, r49, r50, r51, r52], new WyJS.Type.List(new WyJS.Type.Bool()));
            if(WyJS.equals(r0, r53, true)){
               control_flow_pc = 1362;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1362:
            return;
      }
   }
}

