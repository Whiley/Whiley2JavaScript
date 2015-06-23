function binarySearch(r0, r1){//function([int],int) -> bool
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r6 = 0;//const %6 = 0 : int
            var r5 = r6;//assign %5 = %6  : int
            var r2 = r5;//assign %2 = %5  : int
            var r8 = r0.length;//lengthof %8 = %0 : [int]
            var r7 = r8;//assign %7 = %8  : int
            var r3 = r7;//assign %3 = %7  : int
            while(true){//loop (%2, %3, %4, %9, %10, %12, %13, %14, %16, %17, %18, %19, %20, %21, %22, %23, %24, %25, %26, %27)
               if(r2  >=  r3){//ifge %2, %3 goto label1141 : int
                  control_flow_pc = 1141;
                  control_flow_repeat = true;
                  continue outer;
               }
               var r20 = r2 + r3;//add %20 = %2, %3 : int
               var r21 = 2;//const %21 = 2 : int
               var r22 = r20 / r21;//div %22 = %20, %21 : int
               var r19 = r22;//assign %19 = %22  : int
               var r4 = r19;//assign %4 = %19  : int
               var r23 = r0[r4];
               if(r23  >=  r1){
                  var r26 = r0[r4];
                  if(r26  <=  r1){//ifle %26, %1 goto label1144 : int
                     control_flow_pc = 1144;
                     control_flow_repeat = true;
                     continue outer;
                  }
                  var r3 = r4;//assign %3 = %4  : int
                  control_flow_pc = 1143;
                  control_flow_repeat = true;
                  continue outer;//goto label1143
               case 1144:
                  continue;
               }
               var r24 = 1;//const %24 = 1 : int
               var r25 = r4 + r24;//add %25 = %4, %24 : int
               var r2 = r25;//assign %2 = %25  : int
               var r26 = r0[r4];
               if(r26  <=  r1){
                  var r27 = true;//const %27 = true : bool
                  return r27;//return %27 : bool
               case 1143:
                  continue;
               }
               var r3 = r4;//assign %3 = %4  : int
               var r27 = true;//const %27 = true : bool
               return r27;//return %27 : bool
            }
         case 1141:
            var r28 = false;//const %28 = false : bool
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
            var r2 = 3;//const %2 = 3 : int
            var r3 = 5;//const %3 = 5 : int
            var r4 = 6;//const %4 = 6 : int
            var r5 = 9;//const %5 = 9 : int
            var r6 = [r2, r3, r4, r5];
            var r1 = r6;//assign %1 = %6  : [int]
            var r0 = r1;//assign %0 = %1  : [int]
            var r8 = 0;//const %8 = 0 : int
            var r7 = binarySearch(r0, r8);//invoke %7 = (%0, %8) While_Valid_2:binarySearch : function([int],int) -> bool
            var r9 = false;//const %9 = false : bool
            if(r7  ==  r9){//ifeq %7, %9 goto label1145 : bool
               control_flow_pc = 1145;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1145:
            var r11 = 1;//const %11 = 1 : int
            var r10 = binarySearch(r0, r11);//invoke %10 = (%0, %11) While_Valid_2:binarySearch : function([int],int) -> bool
            var r12 = false;//const %12 = false : bool
            if(r10  ==  r12){//ifeq %10, %12 goto label1146 : bool
               control_flow_pc = 1146;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1146:
            var r14 = 2;//const %14 = 2 : int
            var r13 = binarySearch(r0, r14);//invoke %13 = (%0, %14) While_Valid_2:binarySearch : function([int],int) -> bool
            var r15 = false;//const %15 = false : bool
            if(r13  ==  r15){//ifeq %13, %15 goto label1147 : bool
               control_flow_pc = 1147;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1147:
            var r17 = 3;//const %17 = 3 : int
            var r16 = binarySearch(r0, r17);//invoke %16 = (%0, %17) While_Valid_2:binarySearch : function([int],int) -> bool
            var r18 = true;//const %18 = true : bool
            if(r16  ==  r18){//ifeq %16, %18 goto label1148 : bool
               control_flow_pc = 1148;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1148:
            var r20 = 4;//const %20 = 4 : int
            var r19 = binarySearch(r0, r20);//invoke %19 = (%0, %20) While_Valid_2:binarySearch : function([int],int) -> bool
            var r21 = false;//const %21 = false : bool
            if(r19  ==  r21){//ifeq %19, %21 goto label1149 : bool
               control_flow_pc = 1149;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1149:
            var r23 = 5;//const %23 = 5 : int
            var r22 = binarySearch(r0, r23);//invoke %22 = (%0, %23) While_Valid_2:binarySearch : function([int],int) -> bool
            var r24 = true;//const %24 = true : bool
            if(r22  ==  r24){//ifeq %22, %24 goto label1150 : bool
               control_flow_pc = 1150;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1150:
            var r26 = 6;//const %26 = 6 : int
            var r25 = binarySearch(r0, r26);//invoke %25 = (%0, %26) While_Valid_2:binarySearch : function([int],int) -> bool
            var r27 = true;//const %27 = true : bool
            if(r25  ==  r27){//ifeq %25, %27 goto label1151 : bool
               control_flow_pc = 1151;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1151:
            var r29 = 7;//const %29 = 7 : int
            var r28 = binarySearch(r0, r29);//invoke %28 = (%0, %29) While_Valid_2:binarySearch : function([int],int) -> bool
            var r30 = false;//const %30 = false : bool
            if(r28  ==  r30){//ifeq %28, %30 goto label1152 : bool
               control_flow_pc = 1152;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1152:
            var r32 = 8;//const %32 = 8 : int
            var r31 = binarySearch(r0, r32);//invoke %31 = (%0, %32) While_Valid_2:binarySearch : function([int],int) -> bool
            var r33 = false;//const %33 = false : bool
            if(r31  ==  r33){//ifeq %31, %33 goto label1153 : bool
               control_flow_pc = 1153;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1153:
            var r35 = 9;//const %35 = 9 : int
            var r34 = binarySearch(r0, r35);//invoke %34 = (%0, %35) While_Valid_2:binarySearch : function([int],int) -> bool
            var r36 = true;//const %36 = true : bool
            if(r34  ==  r36){//ifeq %34, %36 goto label1154 : bool
               control_flow_pc = 1154;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1154:
            var r38 = 10;//const %38 = 10 : int
            var r37 = binarySearch(r0, r38);//invoke %37 = (%0, %38) While_Valid_2:binarySearch : function([int],int) -> bool
            var r39 = false;//const %39 = false : bool
            if(r37  ==  r39){//ifeq %37, %39 goto label1155 : bool
               control_flow_pc = 1155;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1155:
      }
   }
}

test();
