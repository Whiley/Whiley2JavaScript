function sum$Z9bFaA$0D5Wz(r0){//function(int[]) -> int
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
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case -2:
            var r7 = r0.getValue(r1);
            var r8 = r2.add(r7);//add %8 = %2, %7 : int
            var r2 = r8;//assign %2 = %8  : int
            var r9 = new WyJS.Integer(1);
            var r10 = r1.add(r9);//add %10 = %1, %9 : int
            var r1 = r10;//assign %1 = %10  : int
            var r12 = r0.length();//lengthof %12 = %0 : int[]
            if(WyJS.gt(r1, r12, true)){
               control_flow_pc = 382;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case 382:
            return r2;//return %2 : int
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
            var r1 = new WyJS.Integer(1);
            var r2 = new WyJS.List([r1], new WyJS.Type.List(new WyJS.Type.Int()));
            var r0 = sum$Z9bFaA$0D5Wz(r2);//invoke %0 = (%2) DoWhile_Valid_5:sum : function(int[]) -> int
            var r3 = new WyJS.Integer(1);
            if(WyJS.equals(r0, r3, true)){
               control_flow_pc = 383;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 383:
            var r5 = new WyJS.Integer(1);
            var r6 = new WyJS.Integer(2);
            var r7 = new WyJS.List([r5, r6], new WyJS.Type.List(new WyJS.Type.Int()));
            var r4 = sum$Z9bFaA$0D5Wz(r7);//invoke %4 = (%7) DoWhile_Valid_5:sum : function(int[]) -> int
            var r8 = new WyJS.Integer(3);
            if(WyJS.equals(r4, r8, true)){
               control_flow_pc = 384;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 384:
            var r10 = new WyJS.Integer(1);
            var r11 = new WyJS.Integer(2);
            var r12 = new WyJS.Integer(3);
            var r13 = new WyJS.List([r10, r11, r12], new WyJS.Type.List(new WyJS.Type.Int()));
            var r9 = sum$Z9bFaA$0D5Wz(r13);//invoke %9 = (%13) DoWhile_Valid_5:sum : function(int[]) -> int
            var r14 = new WyJS.Integer(6);
            if(WyJS.equals(r9, r14, true)){
               control_flow_pc = 385;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 385:
            return;
      }
   }
}

