function add(r0, r1){//function([int],[int]) -> [int]
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
            while(true){//loop (%0, %2, %5, %6, %7, %8, %9, %10, %11, %12, %13, %14, %15, %16)
               var r8 = r0.length;//lengthof %8 = %0 : [int]
               if(WyJS.gt(r2, r8, true)){
                  control_flow_pc = 563;
                  control_flow_repeat = true;
                  continue outer;
               }
               var r9 = r0[r2];
               var r10 = r1[r2];
               var r11 = r9.add(r10);//add %11 = %9, %10 : int
               var r12 = r0[r2];
               var r13 = r1[r2];
               var r14 = r12.add(r13);//add %14 = %12, %13 : int
               r0[r2] = r14;//update %0[%2] = %14 : [int] -> [int]
               var r15 = new WyJS.Integer(1);
               var r16 = r2.add(r15);//add %16 = %2, %15 : int
               var r2 = r16;//assign %2 = %16  : int
            }
         case 563:
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
            var r1 = new WyJS.Integer(1);
            var r2 = new WyJS.Integer(2);
            var r3 = new WyJS.Integer(3);
            var r4 = [r1, r2, r3];
            var r5 = new WyJS.Integer(4);
            var r6 = new WyJS.Integer(5);
            var r7 = new WyJS.Integer(6);
            var r8 = [r5, r6, r7];
            var r0 = add(r4, r8);//invoke %0 = (%4, %8) While_Valid_12:add : function([int],[int]) -> [int]
            var r9 = new WyJS.Integer(5);
            var r10 = new WyJS.Integer(7);
            var r11 = new WyJS.Integer(9);
            var r12 = [r9, r10, r11];
            if(WyJS.equals(r0, r12, true)){
               control_flow_pc = 564;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 564:
            var r14 = new WyJS.Integer(1);
            var r15 = [r14];
            var r16 = new WyJS.Integer(4);
            var r17 = [r16];
            var r13 = add(r15, r17);//invoke %13 = (%15, %17) While_Valid_12:add : function([int],[int]) -> [int]
            var r18 = new WyJS.Integer(5);
            var r19 = [r18];
            if(WyJS.equals(r13, r19, true)){
               control_flow_pc = 565;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 565:
            var r21 = [];
            var r22 = [];
            var r20 = add(r21, r22);//invoke %20 = (%21, %22) While_Valid_12:add : function([int],[int]) -> [int]
            var r23 = [];
            if(WyJS.equals(r20, r23, true)){
               control_flow_pc = 566;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 566:
      }
   }
}

