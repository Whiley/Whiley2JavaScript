function zeroOut(r0){//function([int]) -> [int]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r4 = new WyJS.Integer(0);
            r3 = r4;//assign %3 = %4  : int
            r1 = r3;//assign %1 = %3  : int
            r5 = r0.clone();//assign %5 = %0  : [int]
            r2 = r5.clone();//assign %2 = %5  : [int]
            while(true){//loop (%0, %1, %6, %7, %8, %9, %11, %12, %13, %14, %15, %16, %17, %18, %19)
               var r15 = r0.length;//lengthof %15 = %0 : [int]
               if(WyJS.gt(r1, r15, true)){
                  control_flow_pc = 805;
                  control_flow_repeat = true;
                  continue outer;
               }
               var r16 = new WyJS.Integer(0);
               var r17 = new WyJS.Integer(0);
               r0.setValue(r1, r17);//update %0[%1] = %17 : [int] -> [int]
               var r18 = new WyJS.Integer(1);
               var r19 = r1.add(r18);//add %19 = %1, %18 : int
               r1 = r19;//assign %1 = %19  : int
            }
         case 805:
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
            var r0 = zeroOut(r1);//invoke %0 = (%1) While_Valid_41:zeroOut : function([int]) -> [int]
            var r2 = new WyJS.List([];
, new WyJS.List('void'));
            if(WyJS.equals(r0, r2, true)){
               control_flow_pc = 806;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 806:
            var r4 = new WyJS.Integer(1);
            var r5 = new WyJS.List([r4], new WyJS.List('int'));
            var r3 = zeroOut(r5);//invoke %3 = (%5) While_Valid_41:zeroOut : function([int]) -> [int]
            var r6 = new WyJS.Integer(0);
            var r7 = new WyJS.List([r6], new WyJS.List('int'));
            if(WyJS.equals(r3, r7, true)){
               control_flow_pc = 807;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 807:
            var r9 = new WyJS.Integer(1);
            var r10 = new WyJS.Integer(2);
            var r11 = new WyJS.List([r9, r10], new WyJS.List('int'));
            var r8 = zeroOut(r11);//invoke %8 = (%11) While_Valid_41:zeroOut : function([int]) -> [int]
            var r12 = new WyJS.Integer(0);
            var r13 = new WyJS.Integer(0);
            var r14 = new WyJS.List([r12, r13], new WyJS.List('int'));
            if(WyJS.equals(r8, r14, true)){
               control_flow_pc = 808;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 808:
            var r16 = new WyJS.Integer(1);
            var r17 = new WyJS.Integer(2);
            var r18 = new WyJS.Integer(3);
            var r19 = new WyJS.List([r16, r17, r18], new WyJS.List('int'));
            var r15 = zeroOut(r19);//invoke %15 = (%19) While_Valid_41:zeroOut : function([int]) -> [int]
            var r20 = new WyJS.Integer(0);
            var r21 = new WyJS.Integer(0);
            var r22 = new WyJS.Integer(0);
            var r23 = new WyJS.List([r20, r21, r22], new WyJS.List('int'));
            if(WyJS.equals(r15, r23, true)){
               control_flow_pc = 809;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 809:
            var r25 = new WyJS.Integer(1);
            var r26 = new WyJS.Integer(2);
            var r27 = new WyJS.Integer(3);
            var r28 = new WyJS.Integer(4);
            var r29 = new WyJS.List([r25, r26, r27, r28], new WyJS.List('int'));
            var r24 = zeroOut(r29);//invoke %24 = (%29) While_Valid_41:zeroOut : function([int]) -> [int]
            var r30 = new WyJS.Integer(0);
            var r31 = new WyJS.Integer(0);
            var r32 = new WyJS.Integer(0);
            var r33 = new WyJS.Integer(0);
            var r34 = new WyJS.List([r30, r31, r32, r33], new WyJS.List('int'));
            if(WyJS.equals(r24, r34, true)){
               control_flow_pc = 810;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 810:
      }
   }
}

