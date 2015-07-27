function reverse(r0){//function([int]) -> [int]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r5 = new WyJS.Integer(0);
            r4 = r5;//assign %4 = %5  : int
            r1 = r4;//assign %1 = %4  : int
            r6 = r0.clone();//assign %6 = %0  : [int]
            r2 = r6.clone();//assign %2 = %6  : [int]
            while(true){//loop (%0, %1, %7, %8, %9, %10, %11, %12, %13, %14, %15, %16, %17, %18, %19, %20, %21, %22, %23, %24, %25, %26, %27, %28, %29)
               var r20 = r0.length;//lengthof %20 = %0 : [int]
               if(WyJS.gt(r1, r20, true)){
                  control_flow_pc = 818;
                  control_flow_repeat = true;
                  continue outer;
               }
               var r22 = r0.length;//lengthof %22 = %0 : [int]
               var r23 = new WyJS.Integer(1);
               var r24 = r1.add(r23);//add %24 = %1, %23 : int
               var r25 = r22.sub(r24);//sub %25 = %22, %24 : int
               r21 = r25;//assign %21 = %25  : int
               r11 = r21;//assign %11 = %21  : int
               var r26 = r2.getValue(r11);
               var r27 = r2.getValue(r11);
               r0.setValue(r1, r27);//update %0[%1] = %27 : [int] -> [int]
               var r28 = new WyJS.Integer(1);
               var r29 = r1.add(r28);//add %29 = %1, %28 : int
               r1 = r29;//assign %1 = %29  : int
            }
         case 818:
            return r0;//return %0 : [int]
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
            var r1 = new WyJS.List([];
, new WyJS.List('void'));
            var r0 = reverse(r1);//invoke %0 = (%1) While_Valid_42:reverse : function([int]) -> [int]
            var r2 = new WyJS.List([];
, new WyJS.List('void'));
            if(WyJS.equals(r0, r2, true)){
               control_flow_pc = 819;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 819:
            var r4 = new WyJS.Integer(1);
            var r5 = new WyJS.List([r4], new WyJS.List('int'));
            var r3 = reverse(r5);//invoke %3 = (%5) While_Valid_42:reverse : function([int]) -> [int]
            var r6 = new WyJS.Integer(1);
            var r7 = new WyJS.List([r6], new WyJS.List('int'));
            if(WyJS.equals(r3, r7, true)){
               control_flow_pc = 820;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 820:
            var r9 = new WyJS.Integer(1);
            var r10 = new WyJS.Integer(2);
            var r11 = new WyJS.Integer(3);
            var r12 = new WyJS.List([r9, r10, r11], new WyJS.List('int'));
            var r8 = reverse(r12);//invoke %8 = (%12) While_Valid_42:reverse : function([int]) -> [int]
            var r13 = new WyJS.Integer(3);
            var r14 = new WyJS.Integer(2);
            var r15 = new WyJS.Integer(1);
            var r16 = new WyJS.List([r13, r14, r15], new WyJS.List('int'));
            if(WyJS.equals(r8, r16, true)){
               control_flow_pc = 821;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 821:
            var r18 = new WyJS.Integer(1);
            var r19 = new WyJS.Integer(2);
            var r20 = new WyJS.Integer(3);
            var r21 = new WyJS.Integer(4);
            var r22 = new WyJS.Integer(5);
            var r23 = new WyJS.Integer(6);
            var r24 = new WyJS.List([r18, r19, r20, r21, r22, r23], new WyJS.List('int'));
            var r17 = reverse(r24);//invoke %17 = (%24) While_Valid_42:reverse : function([int]) -> [int]
            var r25 = new WyJS.Integer(6);
            var r26 = new WyJS.Integer(5);
            var r27 = new WyJS.Integer(4);
            var r28 = new WyJS.Integer(3);
            var r29 = new WyJS.Integer(2);
            var r30 = new WyJS.Integer(1);
            var r31 = new WyJS.List([r25, r26, r27, r28, r29, r30], new WyJS.List('int'));
            if(WyJS.equals(r17, r31, true)){
               control_flow_pc = 822;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 822:
      }
   }
}

