function f$3AbFaA$0D5Wz(r0){//method(int[]) -> int
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
            var r7 = r0.getValue(r2);
            var r8 = r1.add(r7);//add %8 = %1, %7 : int
            var r1 = r8;//assign %1 = %8  : int
            var r9 = new WyJS.Integer(1);
            var r10 = r2.add(r9);//add %10 = %2, %9 : int
            var r2 = r10;//assign %2 = %10  : int
            var r12 = new WyJS.Integer(1);
            var r13 = r2.add(r12);//add %13 = %2, %12 : int
            var r14 = r0.length();//lengthof %14 = %0 : int[]
            if(WyJS.gt(r13, r14, true)){
               control_flow_pc = 324;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = -3;
            control_flow_repeat = true;
            break;
         case 324:
            return r1;//return %1 : int
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
            var r2 = new WyJS.Integer(2);
            var r3 = new WyJS.Integer(3);
            var r4 = new WyJS.Array([r1, r2, r3], new WyJS.Type.Array(new WyJS.Type.Int()));
            var r0 = f$3AbFaA$0D5Wz(r4);//invoke %0 = (%4) DoWhile_Valid_1:f : method(int[]) -> int
            var r5 = new WyJS.Integer(3);
            if(WyJS.equals(r0, r5, true)){
               control_flow_pc = 325;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 325:
            var r7 = new WyJS.Integer(1);
            var r8 = new WyJS.Integer(2);
            var r9 = new WyJS.Array([r7, r8], new WyJS.Type.Array(new WyJS.Type.Int()));
            var r6 = f$3AbFaA$0D5Wz(r9);//invoke %6 = (%9) DoWhile_Valid_1:f : method(int[]) -> int
            var r10 = new WyJS.Integer(1);
            if(WyJS.equals(r6, r10, true)){
               control_flow_pc = 326;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 326:
            var r12 = new WyJS.Integer(1);
            var r13 = new WyJS.Integer(2);
            var r14 = new WyJS.Integer(3);
            var r15 = new WyJS.Integer(4);
            var r16 = new WyJS.Integer(5);
            var r17 = new WyJS.Integer(6);
            var r18 = new WyJS.Array([r12, r13, r14, r15, r16, r17], new WyJS.Type.Array(new WyJS.Type.Int()));
            var r11 = f$3AbFaA$0D5Wz(r18);//invoke %11 = (%18) DoWhile_Valid_1:f : method(int[]) -> int
            var r19 = new WyJS.Integer(15);
            if(WyJS.equals(r11, r19, true)){
               control_flow_pc = 327;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 327:
            return;
      }
   }
}

