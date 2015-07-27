function max(r0, r1){//function(int,int) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            if(WyJS.lt(r0, r1, false)){
               control_flow_pc = 585;
               control_flow_repeat = true;
               continue outer;
            }
            return r0;//return %0 : int
            control_flow_pc = 586;
            control_flow_repeat = true;
            continue outer;//goto label586
         case 585:
            return r1;//return %1 : int
         case 586:
      }
   }
}

function max(r0){//function([int]) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r4 = new WyJS.Integer(0);
            var r5 = r0.getValue(r4);
            r3 = r5;//assign %3 = %5  : int
            r1 = r3;//assign %1 = %3  : int
            var r7 = new WyJS.Integer(0);
            r6 = r7;//assign %6 = %7  : int
            r2 = r6;//assign %2 = %6  : int
            while(true){//loop (%1, %2, %9, %10, %11, %12, %13, %14, %15, %16)
               var r12 = r0.length;//lengthof %12 = %0 : [int]
               if(WyJS.gt(r2, r12, true)){
                  control_flow_pc = 594;
                  control_flow_repeat = true;
                  continue outer;
               }
               var r14 = r0.getValue(r2);
               var r13 = max(r1, r14);//invoke %13 = (%1, %14) While_Valid_22:max : function(int,int) -> int
               r1 = r13;//assign %1 = %13  : int
               var r15 = new WyJS.Integer(1);
               var r16 = r2.add(r15);//add %16 = %2, %15 : int
               r2 = r16;//assign %2 = %16  : int
            }
         case 594:
            return r1;//return %1 : int
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
            var r1 = new WyJS.Integer(1);
            var r2 = new WyJS.Integer(2);
            var r3 = new WyJS.Integer(3);
            var r4 = new WyJS.Integer(4);
            var r5 = new WyJS.Integer(5);
            var r6 = new WyJS.Integer(6);
            var r7 = new WyJS.Integer(7);
            var r8 = new WyJS.Integer(8);
            var r9 = new WyJS.Integer(9);
            var r10 = new WyJS.Integer(10);
            var r11 = new WyJS.List([r1, r2, r3, r4, r5, r6, r7, r8, r9, r10], new WyJS.List('int'));
            var r0 = max(r11);//invoke %0 = (%11) While_Valid_22:max : function([int]) -> int
            var r12 = new WyJS.Integer(10);
            if(WyJS.equals(r0, r12, true)){
               control_flow_pc = 595;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 595:
            var r14 = new WyJS.Integer(8);
            var r15 = r14.neg();//neg %15 = %14 : int
            var r16 = new WyJS.Integer(7);
            var r17 = new WyJS.Integer(9);
            var r18 = new WyJS.Integer(1);
            var r19 = new WyJS.Integer(1);
            var r20 = r19.neg();//neg %20 = %19 : int
            var r21 = new WyJS.Integer(2);
            var r22 = new WyJS.Integer(5);
            var r23 = new WyJS.Integer(6);
            var r24 = new WyJS.Integer(200);
            var r25 = r24.neg();//neg %25 = %24 : int
            var r26 = new WyJS.Integer(4);
            var r27 = new WyJS.List([r15, r16, r17, r18, r20, r21, r22, r23, r25, r26], new WyJS.List('int'));
            var r13 = max(r27);//invoke %13 = (%27) While_Valid_22:max : function([int]) -> int
            var r28 = new WyJS.Integer(9);
            if(WyJS.equals(r13, r28, true)){
               control_flow_pc = 596;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 596:
            var r30 = new WyJS.Integer(1);
            var r31 = new WyJS.List([r30], new WyJS.List('int'));
            var r29 = max(r31);//invoke %29 = (%31) While_Valid_22:max : function([int]) -> int
            var r32 = new WyJS.Integer(1);
            if(WyJS.equals(r29, r32, true)){
               control_flow_pc = 597;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 597:
      }
   }
}

