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
            control_flow_pc = -3;
            control_flow_repeat = true;
            break;
         case -3:
            var r9 = r0.length();//lengthof %9 = %0 : int[]
            if(WyJS.gt(r1, r9, true)){
               control_flow_pc = 386;
               control_flow_repeat = true;
               continue outer;
            }
            var r10 = r0.getValue(r1);
            var r11 = r2.add(r10);//add %11 = %2, %10 : int
            var r2 = r11;//assign %2 = %11  : int
            var r12 = new WyJS.Integer(1);
            var r13 = r1.add(r12);//add %13 = %1, %12 : int
            var r1 = r13;//assign %1 = %13  : int
            control_flow_pc = -3;
            control_flow_repeat = true;
            break;
         case 386:
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
            var r1 = new WyJS.Integer(0);
            var r2 = new WyJS.Integer(0);
            var r3 = WyJS.ArrayGen(r1, r2, new WyJS.Type.Array(new WyJS.Type.Int()));
            var r0 = sum$Z9bFaA$0D5Wz(r3);//invoke %0 = (%3) While_Valid_33:sum : function(int[]) -> int
            var r4 = new WyJS.Integer(0);
            if(WyJS.equals(r0, r4, true)){
               control_flow_pc = 387;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 387:
            var r6 = new WyJS.Integer(0);
            var r7 = new WyJS.Array([r6], new WyJS.Type.Array(new WyJS.Type.Int()));
            var r5 = sum$Z9bFaA$0D5Wz(r7);//invoke %5 = (%7) While_Valid_33:sum : function(int[]) -> int
            var r8 = new WyJS.Integer(0);
            if(WyJS.equals(r5, r8, true)){
               control_flow_pc = 388;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 388:
            var r10 = new WyJS.Integer(1);
            var r11 = new WyJS.Array([r10], new WyJS.Type.Array(new WyJS.Type.Int()));
            var r9 = sum$Z9bFaA$0D5Wz(r11);//invoke %9 = (%11) While_Valid_33:sum : function(int[]) -> int
            var r12 = new WyJS.Integer(1);
            if(WyJS.equals(r9, r12, true)){
               control_flow_pc = 389;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 389:
            var r14 = new WyJS.Integer(1);
            var r15 = new WyJS.Integer(2);
            var r16 = new WyJS.Integer(3);
            var r17 = new WyJS.Array([r14, r15, r16], new WyJS.Type.Array(new WyJS.Type.Int()));
            var r13 = sum$Z9bFaA$0D5Wz(r17);//invoke %13 = (%17) While_Valid_33:sum : function(int[]) -> int
            var r18 = new WyJS.Integer(6);
            if(WyJS.equals(r13, r18, true)){
               control_flow_pc = 390;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 390:
            return;
      }
   }
}

