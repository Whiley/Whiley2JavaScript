function search(r0, r1){//function([int],int) -> null|While_Valid_26:nat
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r4 = new WyJS.Integer(0);
            var r3 = r4;//assign %3 = %4  : int
            var r2 = r3;//assign %2 = %3  : int
            while(true){//loop (%2, %5, %6, %8, %9, %10, %11, %12, %13, %14)
               var r11 = r0.length;//lengthof %11 = %0 : [int]
               if(WyJS.gt(r2, r11, true)){
                  control_flow_pc = 644;
                  control_flow_repeat = true;
                  continue outer;
               }
               var r12 = r0[r2];
               if(r12  !=  r1){
                  var r13 = new WyJS.Integer(1);
                  var r14 = r2.add(r13);//add %14 = %2, %13 : int
                  var r2 = r14;//assign %2 = %14  : int
                  continue;
               }
               return r2;//return %2 : null|int
               var r13 = new WyJS.Integer(1);
               var r14 = r2.add(r13);//add %14 = %2, %13 : int
               var r2 = r14;//assign %2 = %14  : int
            }
         case 644:
            var r15 = null;/n            return r15;//return %15 : null|int
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
            var r6 = [r2, r3, r4, r5];
            var r1 = r6;//assign %1 = %6  : [int]
            var r0 = r1;//assign %0 = %1  : [int]
            var r8 = new WyJS.Integer(0);
            var r7 = search(r0, r8);//invoke %7 = (%0, %8) While_Valid_26:search : function([int],int) -> null|While_Valid_26:nat
            var r9 = null;/n            if(WyJS.equals(r7, r9, true)){
               control_flow_pc = 646;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 646:
            var r11 = new WyJS.Integer(1);
            var r10 = search(r0, r11);//invoke %10 = (%0, %11) While_Valid_26:search : function([int],int) -> null|While_Valid_26:nat
            var r12 = null;/n            if(WyJS.equals(r10, r12, true)){
               control_flow_pc = 647;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 647:
            var r14 = new WyJS.Integer(2);
            var r13 = search(r0, r14);//invoke %13 = (%0, %14) While_Valid_26:search : function([int],int) -> null|While_Valid_26:nat
            var r15 = null;/n            if(WyJS.equals(r13, r15, true)){
               control_flow_pc = 648;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 648:
            var r17 = new WyJS.Integer(3);
            var r16 = search(r0, r17);//invoke %16 = (%0, %17) While_Valid_26:search : function([int],int) -> null|While_Valid_26:nat
            var r18 = new WyJS.Integer(0);
            if(WyJS.equals(r16, r18, true)){
               control_flow_pc = 649;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 649:
            var r20 = new WyJS.Integer(4);
            var r19 = search(r0, r20);//invoke %19 = (%0, %20) While_Valid_26:search : function([int],int) -> null|While_Valid_26:nat
            var r21 = null;/n            if(WyJS.equals(r19, r21, true)){
               control_flow_pc = 650;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 650:
            var r23 = new WyJS.Integer(5);
            var r22 = search(r0, r23);//invoke %22 = (%0, %23) While_Valid_26:search : function([int],int) -> null|While_Valid_26:nat
            var r24 = new WyJS.Integer(1);
            if(WyJS.equals(r22, r24, true)){
               control_flow_pc = 651;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 651:
            var r26 = new WyJS.Integer(6);
            var r25 = search(r0, r26);//invoke %25 = (%0, %26) While_Valid_26:search : function([int],int) -> null|While_Valid_26:nat
            var r27 = new WyJS.Integer(2);
            if(WyJS.equals(r25, r27, true)){
               control_flow_pc = 652;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 652:
            var r29 = new WyJS.Integer(7);
            var r28 = search(r0, r29);//invoke %28 = (%0, %29) While_Valid_26:search : function([int],int) -> null|While_Valid_26:nat
            var r30 = null;/n            if(WyJS.equals(r28, r30, true)){
               control_flow_pc = 653;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 653:
            var r32 = new WyJS.Integer(8);
            var r31 = search(r0, r32);//invoke %31 = (%0, %32) While_Valid_26:search : function([int],int) -> null|While_Valid_26:nat
            var r33 = null;/n            if(WyJS.equals(r31, r33, true)){
               control_flow_pc = 654;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 654:
            var r35 = new WyJS.Integer(9);
            var r34 = search(r0, r35);//invoke %34 = (%0, %35) While_Valid_26:search : function([int],int) -> null|While_Valid_26:nat
            var r36 = new WyJS.Integer(3);
            if(WyJS.equals(r34, r36, true)){
               control_flow_pc = 655;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 655:
            var r38 = new WyJS.Integer(10);
            var r37 = search(r0, r38);//invoke %37 = (%0, %38) While_Valid_26:search : function([int],int) -> null|While_Valid_26:nat
            var r39 = null;/n            if(WyJS.equals(r37, r39, true)){
               control_flow_pc = 656;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 656:
      }
   }
}

