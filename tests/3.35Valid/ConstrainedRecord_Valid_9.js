function Matrix(r0, r1, r2){//function(ConstrainedRecord_Valid_9:nat,ConstrainedRecord_Valid_9:nat,[[int]]) -> ConstrainedRecord_Valid_9:Matrix
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r3 = new WyJS.Record(["data", "width", "height"], [r2, r1, r0], new WyJS.Type.Record(["data", "width", "height"], '{[[int]] data,int height,int width}'));
            return r3;//return %3 : {[[int]] data,int height,int width}
      }
   }
}

function run(r0, r1){//function(ConstrainedRecord_Valid_9:Matrix,ConstrainedRecord_Valid_9:Matrix) -> ConstrainedRecord_Valid_9:Matrix
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r9 = new WyJS.List([];
, new WyJS.List('void'));
            r8 = r9.clone();//assign %8 = %9  : [void]
            r2 = r8.clone();//assign %2 = %8  : [[int]]
            var r11 = new WyJS.Integer(0);
            r10 = r11;//assign %10 = %11  : int
            r3 = r10;//assign %3 = %10  : int
            while(true){//loop (%2, %3, %4, %5, %6, %7, %12, %13, %14, %15, %16, %17, %18, %19, %20, %21, %22, %23, %24, %25, %26, %27, %28, %29, %30, %31, %32, %33, %34, %35, %36, %37, %38, %39, %40)
               var r12 = r0.fieldLoad("height");//fieldload %12 = %0 height : {[[int]] data,int height,int width}
               if(WyJS.gt(r3, r12, true)){
                  control_flow_pc = 1386;
                  control_flow_repeat = true;
                  continue outer;
               }
               var r14 = new WyJS.List([];
, new WyJS.List('void'));
               r13 = r14.clone();//assign %13 = %14  : [void]
               r4 = r13.clone();//assign %4 = %13  : [int]
               var r16 = new WyJS.Integer(0);
               r15 = r16;//assign %15 = %16  : int
               r5 = r15;//assign %5 = %15  : int
               while(true){//loop (%4, %5, %6, %7, %17, %18, %19, %20, %21, %22, %23, %24, %25, %26, %27, %28, %29, %30, %31, %32, %33, %34, %35, %36)
                  var r17 = r1.fieldLoad("width");//fieldload %17 = %1 width : {[[int]] data,int height,int width}
                  if(WyJS.gt(r5, r17, true)){
                     control_flow_pc = 1387;
                     control_flow_repeat = true;
                     continue outer;
                  }
                  var r19 = new WyJS.Integer(0);
                  r18 = r19;//assign %18 = %19  : int
                  r6 = r18;//assign %6 = %18  : int
                  var r21 = new WyJS.Integer(0);
                  r20 = r21;//assign %20 = %21  : int
                  r7 = r20;//assign %7 = %20  : int
                  while(true){//loop (%6, %7, %22, %23, %24, %25, %26, %27, %28, %29, %30, %31, %32)
                     var r22 = r0.fieldLoad("width");//fieldload %22 = %0 width : {[[int]] data,int height,int width}
                     if(WyJS.gt(r7, r22, true)){
                        control_flow_pc = 1388;
                        control_flow_repeat = true;
                        continue outer;
                     }
                     var r23 = r0.fieldLoad("data");//fieldload %23 = %0 data : {[[int]] data,int height,int width}
                     var r24 = r23.getValue(r3);
                     var r25 = r24.getValue(r7);
                     var r26 = r1.fieldLoad("data");//fieldload %26 = %1 data : {[[int]] data,int height,int width}
                     var r27 = r26.getValue(r7);
                     var r28 = r27.getValue(r5);
                     var r29 = r25.mul(r28);//mul %29 = %25, %28 : int
                     var r30 = r6.add(r29);//add %30 = %6, %29 : int
                     r6 = r30;//assign %6 = %30  : int
                     var r31 = new WyJS.Integer(1);
                     var r32 = r7.add(r31);//add %32 = %7, %31 : int
                     r7 = r32;//assign %7 = %32  : int
                  }
               }
            }
         case 1386:
            var r42 = r1.fieldLoad("width");//fieldload %42 = %1 width : {[[int]] data,int height,int width}
            var r43 = r0.fieldLoad("height");//fieldload %43 = %0 height : {[[int]] data,int height,int width}
            var r41 = Matrix(r42, r43, r2);//invoke %41 = (%42, %43, %2) ConstrainedRecord_Valid_9:Matrix : function(ConstrainedRecord_Valid_9:nat,ConstrainedRecord_Valid_9:nat,[[int]]) -> ConstrainedRecord_Valid_9:Matrix
            return r41;//return %41 : {[[int]] data,int height,int width}
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
            var r5 = new WyJS.Integer(2);
            var r6 = new WyJS.Integer(2);
            var r7 = new WyJS.Integer(1);
            var r8 = new WyJS.Integer(0);
            var r9 = new WyJS.List([r7, r8], new WyJS.List('int'));
            var r10 = new WyJS.Integer(3);
            var r11 = r10.neg();//neg %11 = %10 : int
            var r12 = new WyJS.Integer(2);
            var r13 = new WyJS.List([r11, r12], new WyJS.List('int'));
            var r14 = new WyJS.List([r9, r13], new WyJS.List('[int]'));
            var r4 = Matrix(r5, r6, r14);//invoke %4 = (%5, %6, %14) ConstrainedRecord_Valid_9:Matrix : function(ConstrainedRecord_Valid_9:nat,ConstrainedRecord_Valid_9:nat,[[int]]) -> ConstrainedRecord_Valid_9:Matrix
            r3 = r4;//assign %3 = %4  : {[[int]] data,int height,int width}
            r0 = r3;//assign %0 = %3  : {[[int]] data,int height,int width}
            var r17 = new WyJS.Integer(2);
            var r18 = new WyJS.Integer(2);
            var r19 = new WyJS.Integer(1);
            var r20 = r19.neg();//neg %20 = %19 : int
            var r21 = new WyJS.Integer(4);
            var r22 = new WyJS.List([r20, r21], new WyJS.List('int'));
            var r23 = new WyJS.Integer(3);
            var r24 = new WyJS.Integer(5);
            var r25 = new WyJS.List([r23, r24], new WyJS.List('int'));
            var r26 = new WyJS.List([r22, r25], new WyJS.List('[int]'));
            var r16 = Matrix(r17, r18, r26);//invoke %16 = (%17, %18, %26) ConstrainedRecord_Valid_9:Matrix : function(ConstrainedRecord_Valid_9:nat,ConstrainedRecord_Valid_9:nat,[[int]]) -> ConstrainedRecord_Valid_9:Matrix
            r15 = r16;//assign %15 = %16  : {[[int]] data,int height,int width}
            r1 = r15;//assign %1 = %15  : {[[int]] data,int height,int width}
            var r28 = run(r0, r1);//invoke %28 = (%0, %1) ConstrainedRecord_Valid_9:run : function(ConstrainedRecord_Valid_9:Matrix,ConstrainedRecord_Valid_9:Matrix) -> ConstrainedRecord_Valid_9:Matrix
            r27 = r28;//assign %27 = %28  : {[[int]] data,int height,int width}
            r2 = r27;//assign %2 = %27  : {[[int]] data,int height,int width}
            var r29 = new WyJS.Integer(1);
            var r30 = r29.neg();//neg %30 = %29 : int
            var r31 = new WyJS.Integer(4);
            var r32 = new WyJS.List([r30, r31], new WyJS.List('int'));
            var r33 = new WyJS.Integer(9);
            var r34 = new WyJS.Integer(2);
            var r35 = r34.neg();//neg %35 = %34 : int
            var r36 = new WyJS.List([r33, r35], new WyJS.List('int'));
            var r37 = new WyJS.List([r32, r36], new WyJS.List('[int]'));
            var r38 = new WyJS.Integer(2);
            var r39 = new WyJS.Integer(2);
            var r40 = new WyJS.Record(["data", "width", "height"], [r37, r38, r39], new WyJS.Type.Record(["data", "width", "height"], '{[[int]] data,int height,int width}'));
            if(WyJS.equals(r2, r40, true)){
               control_flow_pc = 1389;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1389:
            var r42 = new WyJS.Integer(3);
            var r43 = new WyJS.Integer(2);
            var r44 = new WyJS.Integer(1);
            var r45 = new WyJS.Integer(2);
            var r46 = new WyJS.Integer(3);
            var r47 = new WyJS.List([r44, r45, r46], new WyJS.List('int'));
            var r48 = new WyJS.Integer(4);
            var r49 = new WyJS.Integer(5);
            var r50 = new WyJS.Integer(6);
            var r51 = new WyJS.List([r48, r49, r50], new WyJS.List('int'));
            var r52 = new WyJS.List([r47, r51], new WyJS.List('[int]'));
            var r41 = Matrix(r42, r43, r52);//invoke %41 = (%42, %43, %52) ConstrainedRecord_Valid_9:Matrix : function(ConstrainedRecord_Valid_9:nat,ConstrainedRecord_Valid_9:nat,[[int]]) -> ConstrainedRecord_Valid_9:Matrix
            r0 = r41;//assign %0 = %41  : {[[int]] data,int height,int width}
            var r54 = new WyJS.Integer(2);
            var r55 = new WyJS.Integer(3);
            var r56 = new WyJS.Integer(1);
            var r57 = new WyJS.Integer(2);
            var r58 = new WyJS.List([r56, r57], new WyJS.List('int'));
            var r59 = new WyJS.Integer(3);
            var r60 = new WyJS.Integer(4);
            var r61 = new WyJS.List([r59, r60], new WyJS.List('int'));
            var r62 = new WyJS.Integer(5);
            var r63 = new WyJS.Integer(6);
            var r64 = new WyJS.List([r62, r63], new WyJS.List('int'));
            var r65 = new WyJS.List([r58, r61, r64], new WyJS.List('[int]'));
            var r53 = Matrix(r54, r55, r65);//invoke %53 = (%54, %55, %65) ConstrainedRecord_Valid_9:Matrix : function(ConstrainedRecord_Valid_9:nat,ConstrainedRecord_Valid_9:nat,[[int]]) -> ConstrainedRecord_Valid_9:Matrix
            r1 = r53;//assign %1 = %53  : {[[int]] data,int height,int width}
            var r66 = run(r0, r1);//invoke %66 = (%0, %1) ConstrainedRecord_Valid_9:run : function(ConstrainedRecord_Valid_9:Matrix,ConstrainedRecord_Valid_9:Matrix) -> ConstrainedRecord_Valid_9:Matrix
            r2 = r66;//assign %2 = %66  : {[[int]] data,int height,int width}
            var r67 = new WyJS.Integer(22);
            var r68 = new WyJS.Integer(28);
            var r69 = new WyJS.List([r67, r68], new WyJS.List('int'));
            var r70 = new WyJS.Integer(49);
            var r71 = new WyJS.Integer(64);
            var r72 = new WyJS.List([r70, r71], new WyJS.List('int'));
            var r73 = new WyJS.List([r69, r72], new WyJS.List('[int]'));
            var r74 = new WyJS.Integer(2);
            var r75 = new WyJS.Integer(2);
            var r76 = new WyJS.Record(["data", "width", "height"], [r73, r74, r75], new WyJS.Type.Record(["data", "width", "height"], '{[[int]] data,int height,int width}'));
            if(WyJS.equals(r2, r76, true)){
               control_flow_pc = 1390;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1390:
            var r78 = new WyJS.Integer(3);
            var r79 = new WyJS.Integer(2);
            var r80 = new WyJS.Integer(1);
            var r81 = new WyJS.Integer(2);
            var r82 = new WyJS.Integer(3);
            var r83 = new WyJS.List([r80, r81, r82], new WyJS.List('int'));
            var r84 = new WyJS.Integer(4);
            var r85 = new WyJS.Integer(5);
            var r86 = new WyJS.Integer(6);
            var r87 = new WyJS.List([r84, r85, r86], new WyJS.List('int'));
            var r88 = new WyJS.List([r83, r87], new WyJS.List('[int]'));
            var r77 = Matrix(r78, r79, r88);//invoke %77 = (%78, %79, %88) ConstrainedRecord_Valid_9:Matrix : function(ConstrainedRecord_Valid_9:nat,ConstrainedRecord_Valid_9:nat,[[int]]) -> ConstrainedRecord_Valid_9:Matrix
            r0 = r77;//assign %0 = %77  : {[[int]] data,int height,int width}
            var r90 = new WyJS.Integer(4);
            var r91 = new WyJS.Integer(3);
            var r92 = new WyJS.Integer(1);
            var r93 = new WyJS.Integer(2);
            var r94 = new WyJS.Integer(3);
            var r95 = new WyJS.Integer(4);
            var r96 = new WyJS.List([r92, r93, r94, r95], new WyJS.List('int'));
            var r97 = new WyJS.Integer(5);
            var r98 = new WyJS.Integer(6);
            var r99 = new WyJS.Integer(7);
            var r100 = new WyJS.Integer(8);
            var r101 = new WyJS.List([r97, r98, r99, r100], new WyJS.List('int'));
            var r102 = new WyJS.Integer(9);
            var r103 = new WyJS.Integer(10);
            var r104 = new WyJS.Integer(11);
            var r105 = new WyJS.Integer(12);
            var r106 = new WyJS.List([r102, r103, r104, r105], new WyJS.List('int'));
            var r107 = new WyJS.List([r96, r101, r106], new WyJS.List('[int]'));
            var r89 = Matrix(r90, r91, r107);//invoke %89 = (%90, %91, %107) ConstrainedRecord_Valid_9:Matrix : function(ConstrainedRecord_Valid_9:nat,ConstrainedRecord_Valid_9:nat,[[int]]) -> ConstrainedRecord_Valid_9:Matrix
            r1 = r89;//assign %1 = %89  : {[[int]] data,int height,int width}
            var r108 = run(r0, r1);//invoke %108 = (%0, %1) ConstrainedRecord_Valid_9:run : function(ConstrainedRecord_Valid_9:Matrix,ConstrainedRecord_Valid_9:Matrix) -> ConstrainedRecord_Valid_9:Matrix
            r2 = r108;//assign %2 = %108  : {[[int]] data,int height,int width}
            var r109 = new WyJS.Integer(38);
            var r110 = new WyJS.Integer(44);
            var r111 = new WyJS.Integer(50);
            var r112 = new WyJS.Integer(56);
            var r113 = new WyJS.List([r109, r110, r111, r112], new WyJS.List('int'));
            var r114 = new WyJS.Integer(83);
            var r115 = new WyJS.Integer(98);
            var r116 = new WyJS.Integer(113);
            var r117 = new WyJS.Integer(128);
            var r118 = new WyJS.List([r114, r115, r116, r117], new WyJS.List('int'));
            var r119 = new WyJS.List([r113, r118], new WyJS.List('[int]'));
            var r120 = new WyJS.Integer(2);
            var r121 = new WyJS.Integer(4);
            var r122 = new WyJS.Record(["data", "width", "height"], [r119, r120, r121], new WyJS.Type.Record(["data", "width", "height"], '{[[int]] data,int height,int width}'));
            if(WyJS.equals(r2, r122, true)){
               control_flow_pc = 1391;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1391:
      }
   }
}

