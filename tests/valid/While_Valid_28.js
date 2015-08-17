function sum$Z9bFaA$0D5Wz(r0){//function([int]) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r4 = new WyJS.Integer(0);
            var r3 = r4;//assign %3 = %4  : int
            var r1 = r3;//assign %1 = %3  : int
            var r6 = new WyJS.Integer(0);
            var r5 = r6;//assign %5 = %6  : int
            var r2 = r5;//assign %2 = %5  : int
            var r7 = new WyJS.Integer(0);
            if(WyJS.gt(r1, r7, true)){
               control_flow_pc = 659;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 659:
            var r8 = r0.getValue(r1);
            var r9 = r2.add(r8);//add %9 = %2, %8 : int
            var r2 = r9;//assign %2 = %9  : int
            var r10 = new WyJS.Integer(1);
            var r11 = r1.add(r10);//add %11 = %1, %10 : int
            var r1 = r11;//assign %1 = %11  : int
            while(true){//loop (%1, %2, %12, %13, %14, %15, %16, %17)
               var r12 = new WyJS.Integer(0);
               if(WyJS.gt(r1, r12, true)){
                  control_flow_pc = 660;
                  control_flow_repeat = true;
                  continue outer;
               }
               throw {name: 'Assert Failed', message: 'fail'}
            case 660:
               var r13 = r0.length();//lengthof %13 = %0 : [int]
               var r14 = r0.getValue(r1);
               var r15 = r2.add(r14);//add %15 = %2, %14 : int
               var r2 = r15;//assign %2 = %15  : int
               var r16 = new WyJS.Integer(1);
               var r17 = r1.add(r16);//add %17 = %1, %16 : int
               var r1 = r17;//assign %1 = %17  : int
            }
         case 661:
            return r2;//return %2 : int
      }
   }
}

function test$1A_7VkE(){//method() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = new WyJS.Integer(1);
            var r2 = new WyJS.List([r1], new WyJS.Type.List(new WyJS.Type.Int()));
            var r0 = sum$Z9bFaA$0D5Wz(r2);//invoke %0 = (%2) While_Valid_28:sum : function([int]) -> int
            var r3 = new WyJS.Integer(1);
            if(WyJS.equals(r0, r3, true)){
               control_flow_pc = 662;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 662:
            var r5 = new WyJS.Integer(1);
            var r6 = new WyJS.Integer(2);
            var r7 = new WyJS.List([r5, r6], new WyJS.Type.List(new WyJS.Type.Int()));
            var r4 = sum$Z9bFaA$0D5Wz(r7);//invoke %4 = (%7) While_Valid_28:sum : function([int]) -> int
            var r8 = new WyJS.Integer(3);
            if(WyJS.equals(r4, r8, true)){
               control_flow_pc = 663;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 663:
            var r10 = new WyJS.Integer(1);
            var r11 = new WyJS.Integer(2);
            var r12 = new WyJS.Integer(3);
            var r13 = new WyJS.List([r10, r11, r12], new WyJS.Type.List(new WyJS.Type.Int()));
            var r9 = sum$Z9bFaA$0D5Wz(r13);//invoke %9 = (%13) While_Valid_28:sum : function([int]) -> int
            var r14 = new WyJS.Integer(6);
            if(WyJS.equals(r9, r14, true)){
               control_flow_pc = 664;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 664:
      }
   }
}

