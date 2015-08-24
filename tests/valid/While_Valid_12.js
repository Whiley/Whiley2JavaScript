function add$Z9dFXVYl$1Ms(r0, r1){//function([int],[int]) -> [int]
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
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case -2:
            var r5 = new WyJS.Integer(0);
            if(WyJS.lt(r2, r5, false)){
               control_flow_pc = 555;
               control_flow_repeat = true;
               continue outer;
            }
            var r6 = r0.length();//lengthof %6 = %0 : [int]
            var r7 = r1.length();//lengthof %7 = %1 : [int]
            if(WyJS.equals(r6, r7, true)){
               control_flow_pc = 556;
               control_flow_repeat = true;
               continue outer;
            }
         case 555:
            throw {name: 'Assert Failed', message: 'fail'}
         case 556:
            var r8 = r0.length();//lengthof %8 = %0 : [int]
            if(WyJS.gt(r2, r8, true)){
               control_flow_pc = 557;
               control_flow_repeat = true;
               continue outer;
            }
            var r9 = r0.getValue(r2);
            var r10 = r1.getValue(r2);
            var r11 = r9.add(r10);//add %11 = %9, %10 : int
            var r12 = r0.getValue(r2);
            var r13 = r1.getValue(r2);
            var r14 = r12.add(r13);//add %14 = %12, %13 : int
            r0.setValue(r2, r14);
            var r15 = new WyJS.Integer(1);
            var r16 = r2.add(r15);//add %16 = %2, %15 : int
            var r2 = r16;//assign %2 = %16  : int
         case 557:
            return r0;//return %0 : [int]
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
            var r2 = new WyJS.Integer(2);
            var r3 = new WyJS.Integer(3);
            var r4 = new WyJS.List([r1, r2, r3], new WyJS.Type.List(new WyJS.Type.Int()));
            var r5 = new WyJS.Integer(4);
            var r6 = new WyJS.Integer(5);
            var r7 = new WyJS.Integer(6);
            var r8 = new WyJS.List([r5, r6, r7], new WyJS.Type.List(new WyJS.Type.Int()));
            var r0 = add$Z9dFXVYl$1Ms(r4, r8);//invoke %0 = (%4, %8) While_Valid_12:add : function([int],[int]) -> [int]
            var r9 = new WyJS.Integer(5);
            var r10 = new WyJS.Integer(7);
            var r11 = new WyJS.Integer(9);
            var r12 = new WyJS.List([r9, r10, r11], new WyJS.Type.List(new WyJS.Type.Int()));
            if(WyJS.equals(r0, r12, true)){
               control_flow_pc = 558;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 558:
            var r14 = new WyJS.Integer(1);
            var r15 = new WyJS.List([r14], new WyJS.Type.List(new WyJS.Type.Int()));
            var r16 = new WyJS.Integer(4);
            var r17 = new WyJS.List([r16], new WyJS.Type.List(new WyJS.Type.Int()));
            var r13 = add$Z9dFXVYl$1Ms(r15, r17);//invoke %13 = (%15, %17) While_Valid_12:add : function([int],[int]) -> [int]
            var r18 = new WyJS.Integer(5);
            var r19 = new WyJS.List([r18], new WyJS.Type.List(new WyJS.Type.Int()));
            if(WyJS.equals(r13, r19, true)){
               control_flow_pc = 559;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 559:
            var r21 = new WyJS.List([], new WyJS.Type.List(new WyJS.Type.Void()));
            var r22 = new WyJS.List([], new WyJS.Type.List(new WyJS.Type.Void()));
            var r20 = add$Z9dFXVYl$1Ms(r21, r22);//invoke %20 = (%21, %22) While_Valid_12:add : function([int],[int]) -> [int]
            var r23 = new WyJS.List([], new WyJS.Type.List(new WyJS.Type.Void()));
            if(WyJS.equals(r20, r23, true)){
               control_flow_pc = 560;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 560:
      }
   }
}

