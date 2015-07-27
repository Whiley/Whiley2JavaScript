function move(r0, r1, r2){//function(int,int,[[ListAssign_Valid_5:nint]]) -> [[ListAssign_Valid_5:nint]]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r5 = r2.getValue(r0);
            var r6 = new WyJS.Integer(1);
            var r7 = r0.add(r6);//add %7 = %0, %6 : int
            var r8 = r5.getValue(r7);
            r4 = r8;//assign %4 = %8  : null|int
            r3 = r4;//assign %3 = %4  : null|int
            var r9 = null;/n            var r10 = new WyJS.Integer(1);
            var r11 = r0.add(r10);//add %11 = %0, %10 : int
            var r12 = null;/n            r2.setValue(r0, r11);//update %2[%0][%11] = %12 : [[null|int]] -> [[null|int]]
            var r13 = new WyJS.Integer(1);
            var r14 = r1.add(r13);//add %14 = %1, %13 : int
            r2.setValue(r1, r14);//update %2[%1][%14] = %3 : [[null|int]] -> [[null|int]]
            return r2;//return %2 : [[null|int]]
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
            var r2 = new WyJS.Integer(1);
            var r3 = new WyJS.Integer(2);
            var r4 = new WyJS.Integer(3);
            var r5 = new WyJS.List([r2, r3, r4], new WyJS.List('int'));
            var r6 = new WyJS.Integer(4);
            var r7 = new WyJS.Integer(5);
            var r8 = new WyJS.Integer(6);
            var r9 = new WyJS.List([r6, r7, r8], new WyJS.List('int'));
            var r10 = new WyJS.Integer(7);
            var r11 = new WyJS.Integer(8);
            var r12 = new WyJS.Integer(9);
            var r13 = new WyJS.List([r10, r11, r12], new WyJS.List('int'));
            var r14 = new WyJS.List([r5, r9, r13], new WyJS.List('[int]'));
            r1 = r14.clone();//assign %1 = %14  : [[int]]
            r0 = r1.clone();//assign %0 = %1  : [[null|int]]
            var r16 = new WyJS.Integer(0);
            var r17 = new WyJS.Integer(1);
            var r15 = move(r16, r17, r0);//invoke %15 = (%16, %17, %0) ListAssign_Valid_5:move : function(int,int,[[ListAssign_Valid_5:nint]]) -> [[ListAssign_Valid_5:nint]]
            r0 = r15.clone();//assign %0 = %15  : [[null|int]]
            var r18 = new WyJS.Integer(1);
            var r19 = null;/n            var r20 = new WyJS.Integer(3);
            var r21 = new WyJS.List([r18, r19, r20], new WyJS.List('null|int'));
            var r22 = new WyJS.Integer(4);
            var r23 = new WyJS.Integer(5);
            var r24 = new WyJS.Integer(2);
            var r25 = new WyJS.List([r22, r23, r24], new WyJS.List('int'));
            var r26 = new WyJS.Integer(7);
            var r27 = new WyJS.Integer(8);
            var r28 = new WyJS.Integer(9);
            var r29 = new WyJS.List([r26, r27, r28], new WyJS.List('int'));
            var r30 = new WyJS.List([r21, r25, r29], new WyJS.List('[null|int]'));
            if(WyJS.equals(r0, r30, true)){
               control_flow_pc = 2384;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2384:
      }
   }
}

