function binarySearch$_9dF5X1FVY0t12(r0, r1){//function(int[],int) -> bool
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r6 = new WyJS.Integer(0);
            var r5 = r6;//assign %5 = %6  : int
            var r2 = r5;//assign %2 = %5  : int
            var r8 = r0.length();//lengthof %8 = %0 : int[]
            var r7 = r8;//assign %7 = %8  : int
            var r3 = r7;//assign %3 = %7  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case -2:
            if(WyJS.gt(r2, r3, true)){
               control_flow_pc = 677;
               control_flow_repeat = true;
               continue outer;
            }
            var r18 = r2.add(r3);//add %18 = %2, %3 : int
            var r19 = new WyJS.Integer(2);
            var r20 = r18.div(r19);//div %20 = %18, %19 : int
            var r17 = r20;//assign %17 = %20  : int
            var r4 = r17;//assign %4 = %17  : int
            var r21 = r0.getValue(r4);
            if(WyJS.gt(r21, r1, true)){
               control_flow_pc = 678;
               control_flow_repeat = true;
               break;
            }
            else{
               control_flow_pc = -3;
               control_flow_repeat = true;
               break;
            }
         case -3:
            var r22 = new WyJS.Integer(1);
            var r23 = r4.add(r22);//add %23 = %4, %22 : int
            var r2 = r23;//assign %2 = %23  : int
            control_flow_pc = 679;
            control_flow_repeat = true;
            continue outer;//goto label679
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case 678:
            var r24 = r0.getValue(r4);
            if(WyJS.lt(r24, r1, true)){
               control_flow_pc = 680;
               control_flow_repeat = true;
               break;
            }
            else{
               control_flow_pc = -4;
               control_flow_repeat = true;
               break;
            }
         case -4:
            var r3 = r4;//assign %3 = %4  : int
            control_flow_pc = 679;
            control_flow_repeat = true;
            continue outer;//goto label679
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case 680:
            var r25 = true;
            return r25;//return %25 : bool
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case 679:
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case 677:
            var r26 = false;
            return r26;//return %26 : bool
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
            var r2 = new WyJS.Integer(3);
            var r3 = new WyJS.Integer(5);
            var r4 = new WyJS.Integer(6);
            var r5 = new WyJS.Integer(9);
            var r6 = new WyJS.Array([r2, r3, r4, r5], new WyJS.Type.Array(new WyJS.Type.Int()));
            var r1 = r6.clone(new WyJS.Type.Int());//assign %1 = %6  : int[]
            var r0 = r1.clone(new WyJS.Type.Int());//assign %0 = %1  : int[]
            var r8 = new WyJS.Integer(0);
            var r7 = binarySearch$_9dF5X1FVY0t12(r0, r8);//invoke %7 = (%0, %8) While_Valid_2:binarySearch : function(int[],int) -> bool
            var r9 = false;
            if(r7 === r9){
               control_flow_pc = 681;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 681:
            var r11 = new WyJS.Integer(1);
            var r10 = binarySearch$_9dF5X1FVY0t12(r0, r11);//invoke %10 = (%0, %11) While_Valid_2:binarySearch : function(int[],int) -> bool
            var r12 = false;
            if(r10 === r12){
               control_flow_pc = 682;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 682:
            var r14 = new WyJS.Integer(2);
            var r13 = binarySearch$_9dF5X1FVY0t12(r0, r14);//invoke %13 = (%0, %14) While_Valid_2:binarySearch : function(int[],int) -> bool
            var r15 = false;
            if(r13 === r15){
               control_flow_pc = 683;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 683:
            var r17 = new WyJS.Integer(3);
            var r16 = binarySearch$_9dF5X1FVY0t12(r0, r17);//invoke %16 = (%0, %17) While_Valid_2:binarySearch : function(int[],int) -> bool
            var r18 = true;
            if(r16 === r18){
               control_flow_pc = 684;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 684:
            var r20 = new WyJS.Integer(4);
            var r19 = binarySearch$_9dF5X1FVY0t12(r0, r20);//invoke %19 = (%0, %20) While_Valid_2:binarySearch : function(int[],int) -> bool
            var r21 = false;
            if(r19 === r21){
               control_flow_pc = 685;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 685:
            var r23 = new WyJS.Integer(5);
            var r22 = binarySearch$_9dF5X1FVY0t12(r0, r23);//invoke %22 = (%0, %23) While_Valid_2:binarySearch : function(int[],int) -> bool
            var r24 = true;
            if(r22 === r24){
               control_flow_pc = 686;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 686:
            var r26 = new WyJS.Integer(6);
            var r25 = binarySearch$_9dF5X1FVY0t12(r0, r26);//invoke %25 = (%0, %26) While_Valid_2:binarySearch : function(int[],int) -> bool
            var r27 = true;
            if(r25 === r27){
               control_flow_pc = 687;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 687:
            var r29 = new WyJS.Integer(7);
            var r28 = binarySearch$_9dF5X1FVY0t12(r0, r29);//invoke %28 = (%0, %29) While_Valid_2:binarySearch : function(int[],int) -> bool
            var r30 = false;
            if(r28 === r30){
               control_flow_pc = 688;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 688:
            var r32 = new WyJS.Integer(8);
            var r31 = binarySearch$_9dF5X1FVY0t12(r0, r32);//invoke %31 = (%0, %32) While_Valid_2:binarySearch : function(int[],int) -> bool
            var r33 = false;
            if(r31 === r33){
               control_flow_pc = 689;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 689:
            var r35 = new WyJS.Integer(9);
            var r34 = binarySearch$_9dF5X1FVY0t12(r0, r35);//invoke %34 = (%0, %35) While_Valid_2:binarySearch : function(int[],int) -> bool
            var r36 = true;
            if(r34 === r36){
               control_flow_pc = 690;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 690:
            var r38 = new WyJS.Integer(10);
            var r37 = binarySearch$_9dF5X1FVY0t12(r0, r38);//invoke %37 = (%0, %38) While_Valid_2:binarySearch : function(int[],int) -> bool
            var r39 = false;
            if(r37 === r39){
               control_flow_pc = 691;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 691:
            return;
      }
   }
}

