function max(r0, r1){//function(int,int) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            if(WyJS.lt(r0, r1, false)){
               control_flow_pc = 603;
               control_flow_repeat = true;
               continue outer;
            }
            return r0;//return %0 : int
            control_flow_pc = 604;
            control_flow_repeat = true;
            continue outer;//goto label604
         case 603:
            return r1;//return %1 : int
         case 604:
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
            var r5 = r0[r4];
            var r3 = r5;//assign %3 = %5  : int
            var r1 = r3;//assign %1 = %3  : int
            var r7 = new WyJS.Integer(0);
            var r6 = r7;//assign %6 = %7  : int
            var r2 = r6;//assign %2 = %6  : int
            while(true){//loop (%1, %2, %9, %10, %11, %12, %13, %14, %15, %16)
               var r12 = r0.length;//lengthof %12 = %0 : [int]
               if(WyJS.gt(r2, r12, true)){
                  control_flow_pc = 612;
                  control_flow_repeat = true;
                  continue outer;
               }
               var r14 = r0[r2];
               var r13 = max(r1, r14);//invoke %13 = (%1, %14) While_Valid_22:max : function(int,int) -> int
               var r1 = r13;//assign %1 = %13  : int
               var r15 = new WyJS.Integer(1);
               var r16 = r2.add(r15);//add %16 = %2, %15 : int
               var r2 = r16;//assign %2 = %16  : int
            }
         case 612:
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
            var r11 = [r1, r2, r3, r4, r5, r6, r7, r8, r9, r10];
            var r0 = max(r11);//invoke %0 = (%11) While_Valid_22:max : function([int]) -> int
            var r12 = new WyJS.Integer(10);
            if(WyJS.equals(r0, r12, true)){
               control_flow_pc = 613;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 613:
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
            var r27 = [r15, r16, r17, r18, r20, r21, r22, r23, r25, r26];
            var r13 = max(r27);//invoke %13 = (%27) While_Valid_22:max : function([int]) -> int
            var r28 = new WyJS.Integer(9);
            if(WyJS.equals(r13, r28, true)){
               control_flow_pc = 614;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 614:
            var r30 = new WyJS.Integer(1);
            var r31 = [r30];
            var r29 = max(r31);//invoke %29 = (%31) While_Valid_22:max : function([int]) -> int
            var r32 = new WyJS.Integer(1);
            if(WyJS.equals(r29, r32, true)){
               control_flow_pc = 615;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 615:
      }
   }
}

