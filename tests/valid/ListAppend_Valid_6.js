function test$b9dF5X1FVYGWYW0Yk4D(r0, r1){//function([real],[int]) -> bool
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r5 = r0.append(r1);
            r4 = r5.clone();//assign %4 = %5  : [int|real]
            r2 = r4.clone();//assign %2 = %4  : [int|real]
            var r7 = new WyJS.Integer(0);
            var r6 = r7;//assign %6 = %7  : int
            var r3 = r6;//assign %3 = %6  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case -2:
            var r8 = r2.length();//lengthof %8 = %2 : [int|real]
            if(WyJS.gt(r3, r8, true)){
               control_flow_pc = 1693;
               control_flow_repeat = true;
               continue outer;
            }
            var r9 = r2.getValue(r3);
            if(WyJS.is(r9, new WyJS.Type.Int())){
               control_flow_pc = 1694;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 1695;
            control_flow_repeat = true;
            continue outer;//goto label1695
            control_flow_pc = 1695;
            control_flow_repeat = true;
            break;
         case 1694:
            var r10 = true;
            return r10;//return %10 : bool
            control_flow_pc = 1695;
            control_flow_repeat = true;
            break;
         case 1695:
            var r11 = new WyJS.Integer(1);
            var r12 = r3.add(r11);//add %12 = %3, %11 : int
            var r3 = r12;//assign %3 = %12  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case 1693:
            var r13 = false;
            return r13;//return %13 : bool
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
            var r3 = new WyJS.Real(1.2);
            var r4 = new WyJS.Real(2.3);
            var r5 = new WyJS.Real(3.4);
            var r6 = new WyJS.List([r3, r4, r5], new WyJS.Type.List(new WyJS.Type.Real()));
            var r7 = new WyJS.Integer(1);
            var r8 = new WyJS.Integer(2);
            var r9 = new WyJS.Integer(3);
            var r10 = new WyJS.Integer(4);
            var r11 = new WyJS.Integer(5);
            var r12 = new WyJS.Integer(6);
            var r13 = new WyJS.Integer(7);
            var r14 = new WyJS.Integer(8);
            var r15 = new WyJS.List([r7, r8, r9, r10, r11, r12, r13, r14], new WyJS.Type.List(new WyJS.Type.Int()));
            var r2 = test$b9dF5X1FVYGWYW0Yk4D(r6, r15);//invoke %2 = (%6, %15) ListAppend_Valid_6:test : function([real],[int]) -> bool
            var r1 = r2;//assign %1 = %2  : bool
            var r0 = r1;//assign %0 = %1  : bool
            var r16 = true;
            if(r0 === r16){
               control_flow_pc = 1696;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1696:
            var r18 = new WyJS.Real(1.2);
            var r19 = new WyJS.Real(2.3);
            var r20 = new WyJS.Real(3.4);
            var r21 = new WyJS.List([r18, r19, r20], new WyJS.Type.List(new WyJS.Type.Real()));
            var r22 = new WyJS.List([], new WyJS.Type.List(new WyJS.Type.Void()));
            var r17 = test$b9dF5X1FVYGWYW0Yk4D(r21, r22);//invoke %17 = (%21, %22) ListAppend_Valid_6:test : function([real],[int]) -> bool
            var r0 = r17;//assign %0 = %17  : bool
            var r23 = false;
            if(r0 === r23){
               control_flow_pc = 1697;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1697:
      }
   }
}

