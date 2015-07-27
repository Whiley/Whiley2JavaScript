function binarySearch(r0, r1){//function([int],int) -> bool
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r6 = new WyJS.Integer(0);
            r5 = r6;//assign %5 = %6  : int
            r2 = r5;//assign %2 = %5  : int
            var r8 = r0.length;//lengthof %8 = %0 : [int]
            r7 = r8;//assign %7 = %8  : int
            r3 = r7;//assign %3 = %7  : int
            while(true){//loop (%2, %3, %4, %9, %10, %12, %13, %14, %16, %17, %18, %19, %20, %21, %22, %23, %24, %25, %26, %27)
               if(WyJS.gt(r2, r3, true)){
                  control_flow_pc = 1117;
                  control_flow_repeat = true;
                  continue outer;
               }
               var r20 = r2.add(r3);//add %20 = %2, %3 : int
               var r21 = new WyJS.Integer(2);
               var r22 = r20.div(r21);//div %22 = %20, %21 : int
               r19 = r22;//assign %19 = %22  : int
               r4 = r19;//assign %4 = %19  : int
               var r23 = r0.getValue(r4);
               if(WyJS.gt(r23, r1, true)){
                  var r26 = r0.getValue(r4);
                  if(WyJS.lt(r26, r1, true)){
                     control_flow_pc = 1120;
                     control_flow_repeat = true;
                     continue outer;
                  }
                  r3 = r4;//assign %3 = %4  : int
                  control_flow_pc = 1119;
                  control_flow_repeat = true;
                  continue outer;//goto label1119
               case 1120:
                  continue;
               }
               var r24 = new WyJS.Integer(1);
               var r25 = r4.add(r24);//add %25 = %4, %24 : int
               r2 = r25;//assign %2 = %25  : int
            }
         case 1117:
            var r28 = false;
            return r28;//return %28 : bool
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
            var r2 = new WyJS.Integer(3);
            var r3 = new WyJS.Integer(5);
            var r4 = new WyJS.Integer(6);
            var r5 = new WyJS.Integer(9);
            var r6 = new WyJS.List([r2, r3, r4, r5], new WyJS.List('int'));
            r1 = r6.clone();//assign %1 = %6  : [int]
            r0 = r1.clone();//assign %0 = %1  : [int]
            var r8 = new WyJS.Integer(0);
            var r7 = binarySearch(r0, r8);//invoke %7 = (%0, %8) While_Valid_2:binarySearch : function([int],int) -> bool
            var r9 = false;
            if(r7 === r9){
               control_flow_pc = 1121;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1121:
            var r11 = new WyJS.Integer(1);
            var r10 = binarySearch(r0, r11);//invoke %10 = (%0, %11) While_Valid_2:binarySearch : function([int],int) -> bool
            var r12 = false;
            if(r10 === r12){
               control_flow_pc = 1122;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1122:
            var r14 = new WyJS.Integer(2);
            var r13 = binarySearch(r0, r14);//invoke %13 = (%0, %14) While_Valid_2:binarySearch : function([int],int) -> bool
            var r15 = false;
            if(r13 === r15){
               control_flow_pc = 1123;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1123:
            var r17 = new WyJS.Integer(3);
            var r16 = binarySearch(r0, r17);//invoke %16 = (%0, %17) While_Valid_2:binarySearch : function([int],int) -> bool
            var r18 = true;
            if(r16 === r18){
               control_flow_pc = 1124;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1124:
            var r20 = new WyJS.Integer(4);
            var r19 = binarySearch(r0, r20);//invoke %19 = (%0, %20) While_Valid_2:binarySearch : function([int],int) -> bool
            var r21 = false;
            if(r19 === r21){
               control_flow_pc = 1125;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1125:
            var r23 = new WyJS.Integer(5);
            var r22 = binarySearch(r0, r23);//invoke %22 = (%0, %23) While_Valid_2:binarySearch : function([int],int) -> bool
            var r24 = true;
            if(r22 === r24){
               control_flow_pc = 1126;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1126:
            var r26 = new WyJS.Integer(6);
            var r25 = binarySearch(r0, r26);//invoke %25 = (%0, %26) While_Valid_2:binarySearch : function([int],int) -> bool
            var r27 = true;
            if(r25 === r27){
               control_flow_pc = 1127;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1127:
            var r29 = new WyJS.Integer(7);
            var r28 = binarySearch(r0, r29);//invoke %28 = (%0, %29) While_Valid_2:binarySearch : function([int],int) -> bool
            var r30 = false;
            if(r28 === r30){
               control_flow_pc = 1128;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1128:
            var r32 = new WyJS.Integer(8);
            var r31 = binarySearch(r0, r32);//invoke %31 = (%0, %32) While_Valid_2:binarySearch : function([int],int) -> bool
            var r33 = false;
            if(r31 === r33){
               control_flow_pc = 1129;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1129:
            var r35 = new WyJS.Integer(9);
            var r34 = binarySearch(r0, r35);//invoke %34 = (%0, %35) While_Valid_2:binarySearch : function([int],int) -> bool
            var r36 = true;
            if(r34 === r36){
               control_flow_pc = 1130;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1130:
            var r38 = new WyJS.Integer(10);
            var r37 = binarySearch(r0, r38);//invoke %37 = (%0, %38) While_Valid_2:binarySearch : function([int],int) -> bool
            var r39 = false;
            if(r37 === r39){
               control_flow_pc = 1131;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1131:
      }
   }
}

