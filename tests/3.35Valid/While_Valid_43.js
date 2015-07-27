function add(r0, r1){//function([int],int) -> [int]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r5 = new WyJS.Integer(0);
            r4 = r5;//assign %4 = %5  : int
            r2 = r4;//assign %2 = %4  : int
            r6 = r0.clone();//assign %6 = %0  : [int]
            r3 = r6.clone();//assign %3 = %6  : [int]
            while(true){//loop (%0, %2, %7, %8, %9, %10, %12, %13, %14, %15, %16, %17, %18, %19, %20, %21, %22)
               var r16 = r0.length;//lengthof %16 = %0 : [int]
               if(WyJS.gt(r2, r16, true)){
                  control_flow_pc = 828;
                  control_flow_repeat = true;
                  continue outer;
               }
               var r17 = r3.getValue(r2);
               var r18 = r17.add(r1);//add %18 = %17, %1 : int
               var r19 = r3.getValue(r2);
               var r20 = r19.add(r1);//add %20 = %19, %1 : int
               r0.setValue(r2, r20);//update %0[%2] = %20 : [int] -> [int]
               var r21 = new WyJS.Integer(1);
               var r22 = r2.add(r21);//add %22 = %2, %21 : int
               r2 = r22;//assign %2 = %22  : int
            }
         case 828:
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
            var r2 = new WyJS.Integer(1);
            var r3 = new WyJS.Integer(2);
            var r4 = new WyJS.Integer(3);
            var r5 = new WyJS.Integer(4);
            var r6 = new WyJS.List([r2, r3, r4, r5], new WyJS.List('int'));
            r1 = r6.clone();//assign %1 = %6  : [int]
            r0 = r1.clone();//assign %0 = %1  : [int]
            var r8 = new WyJS.Integer(1);
            var r7 = add(r0, r8);//invoke %7 = (%0, %8) While_Valid_43:add : function([int],int) -> [int]
            var r9 = new WyJS.Integer(2);
            var r10 = new WyJS.Integer(3);
            var r11 = new WyJS.Integer(4);
            var r12 = new WyJS.Integer(5);
            var r13 = new WyJS.List([r9, r10, r11, r12], new WyJS.List('int'));
            if(WyJS.equals(r7, r13, true)){
               control_flow_pc = 829;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 829:
            var r15 = new WyJS.Integer(11);
            var r14 = add(r0, r15);//invoke %14 = (%0, %15) While_Valid_43:add : function([int],int) -> [int]
            var r16 = new WyJS.Integer(12);
            var r17 = new WyJS.Integer(13);
            var r18 = new WyJS.Integer(14);
            var r19 = new WyJS.Integer(15);
            var r20 = new WyJS.List([r16, r17, r18, r19], new WyJS.List('int'));
            if(WyJS.equals(r14, r20, true)){
               control_flow_pc = 830;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 830:
      }
   }
}

