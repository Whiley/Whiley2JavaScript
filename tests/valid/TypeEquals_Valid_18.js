function f$b9bF5D537klcR0J7ZWGs(r0){//function([int|real]) -> [int]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            if(WyJS.is(r0, new WyJS.Type.List(new WyJS.Type.Int()))){
               control_flow_pc = 936;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 937;
            control_flow_repeat = true;
            continue outer;//goto label937
         case 936:
            return r0;//return %0 : [int]
            control_flow_pc = 938;
            control_flow_repeat = true;
            continue outer;//goto label938
         case 937:
            var r1 = new WyJS.Integer(1);
            var r2 = new WyJS.Integer(2);
            var r3 = new WyJS.Integer(3);
            var r4 = new WyJS.List([r1, r2, r3], new WyJS.Type.List(new WyJS.Type.Int()));
            return r4;//return %4 : [int]
         case 938:
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
            var r4 = new WyJS.Integer(4);
            var r5 = new WyJS.Integer(5);
            var r6 = new WyJS.Integer(6);
            var r7 = new WyJS.Integer(7);
            var r8 = new WyJS.List([r1, r2, r3, r4, r5, r6, r7], new WyJS.Type.List(new WyJS.Type.Int()));
            var r0 = f$b9bF5D537klcR0J7ZWGs(r8);//invoke %0 = (%8) TypeEquals_Valid_18:f : function([int|real]) -> [int]
            var r9 = new WyJS.Integer(1);
            var r10 = new WyJS.Integer(2);
            var r11 = new WyJS.Integer(3);
            var r12 = new WyJS.Integer(4);
            var r13 = new WyJS.Integer(5);
            var r14 = new WyJS.Integer(6);
            var r15 = new WyJS.Integer(7);
            var r16 = new WyJS.List([r9, r10, r11, r12, r13, r14, r15], new WyJS.Type.List(new WyJS.Type.Int()));
            if(WyJS.equals(r0, r16, true)){
               control_flow_pc = 939;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 939:
            var r18 = new WyJS.List([], new WyJS.Type.List(new WyJS.Type.Void()));
            var r17 = f$b9bF5D537klcR0J7ZWGs(r18);//invoke %17 = (%18) TypeEquals_Valid_18:f : function([int|real]) -> [int]
            var r19 = new WyJS.List([], new WyJS.Type.List(new WyJS.Type.Void()));
            if(WyJS.equals(r17, r19, true)){
               control_flow_pc = 940;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 940:
            var r21 = new WyJS.Integer(1);
            var r22 = new WyJS.Integer(2);
            var r23 = new WyJS.Real(2.01);
            var r24 = new WyJS.List([r21, r22, r23], new WyJS.Type.List(new WyJS.Type.Union([new WyJS.Type.Int(), new WyJS.Type.Real()])));
            var r20 = f$b9bF5D537klcR0J7ZWGs(r24);//invoke %20 = (%24) TypeEquals_Valid_18:f : function([int|real]) -> [int]
            var r25 = new WyJS.Integer(1);
            var r26 = new WyJS.Integer(2);
            var r27 = new WyJS.Integer(3);
            var r28 = new WyJS.List([r25, r26, r27], new WyJS.Type.List(new WyJS.Type.Int()));
            if(WyJS.equals(r20, r28, true)){
               control_flow_pc = 941;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 941:
            var r30 = new WyJS.Real(1.23);
            var r31 = new WyJS.Integer(2);
            var r32 = new WyJS.Real(2.01);
            var r33 = new WyJS.List([r30, r31, r32], new WyJS.Type.List(new WyJS.Type.Union([new WyJS.Type.Int(), new WyJS.Type.Real()])));
            var r29 = f$b9bF5D537klcR0J7ZWGs(r33);//invoke %29 = (%33) TypeEquals_Valid_18:f : function([int|real]) -> [int]
            var r34 = new WyJS.Integer(1);
            var r35 = new WyJS.Integer(2);
            var r36 = new WyJS.Integer(3);
            var r37 = new WyJS.List([r34, r35, r36], new WyJS.Type.List(new WyJS.Type.Int()));
            if(WyJS.equals(r29, r37, true)){
               control_flow_pc = 942;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 942:
      }
   }
}

