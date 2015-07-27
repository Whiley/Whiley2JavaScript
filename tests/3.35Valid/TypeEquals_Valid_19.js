function f(r0){//function([[int|real]]) -> [int]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            if(WyJS.is(r0, new WyJS.Type.List(new WyJS.Type.List(new WyJS.Type.Int())))){
               control_flow_pc = 0;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 1;
            control_flow_repeat = true;
            continue outer;//goto label1
         case 0:
            var r1 = r0.length();//lengthof %1 = %0 : [[int]]
            var r2 = new WyJS.Integer(0);
            if(WyJS.lt(r1, r2, true)){
               control_flow_pc = 1;
               control_flow_repeat = true;
               continue outer;
            }
            var r3 = new WyJS.Integer(0);
            var r4 = r0.getValue(r3);
            return r4;//return %4 : [int]
            control_flow_pc = 2;
            control_flow_repeat = true;
            continue outer;//goto label2
         case 1:
            var r5 = new WyJS.Integer(1);
            var r6 = new WyJS.Integer(2);
            var r7 = new WyJS.Integer(3);
            var r8 = new WyJS.List([r5, r6, r7], new WyJS.Type.List(new WyJS.Type.Int()));
            return r8;//return %8 : [int]
         case 2:
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
            var r4 = new WyJS.Integer(4);
            var r5 = new WyJS.Integer(5);
            var r6 = new WyJS.Integer(6);
            var r7 = new WyJS.Integer(7);
            var r8 = new WyJS.List([r1, r2, r3, r4, r5, r6, r7], new WyJS.Type.List(new WyJS.Type.Int()));
            var r9 = new WyJS.List([r8], new WyJS.Type.List(new WyJS.Type.List(new WyJS.Type.Int())));
            var r0 = f(r9);//invoke %0 = (%9) TypeEquals_Valid_19:f : function([[int|real]]) -> [int]
            var r10 = new WyJS.Integer(1);
            var r11 = new WyJS.Integer(2);
            var r12 = new WyJS.Integer(3);
            var r13 = new WyJS.Integer(4);
            var r14 = new WyJS.Integer(5);
            var r15 = new WyJS.Integer(6);
            var r16 = new WyJS.Integer(7);
            var r17 = new WyJS.List([r10, r11, r12, r13, r14, r15, r16], new WyJS.Type.List(new WyJS.Type.Int()));
            if(WyJS.equals(r0, r17, true)){
               control_flow_pc = 3;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 3:
            var r19 = new WyJS.List([], new WyJS.Type.List(new WyJS.Type.Void()));
            var r20 = new WyJS.List([r19], new WyJS.Type.List(new WyJS.Type.List(new WyJS.Type.Void())));
            var r18 = f(r20);//invoke %18 = (%20) TypeEquals_Valid_19:f : function([[int|real]]) -> [int]
            var r21 = new WyJS.List([], new WyJS.Type.List(new WyJS.Type.Void()));
            if(WyJS.equals(r18, r21, true)){
               control_flow_pc = 4;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 4:
            var r23 = new WyJS.Integer(1);
            var r24 = new WyJS.Integer(2);
            var r25 = new WyJS.Real(2.01);
            var r26 = new WyJS.List([r23, r24, r25], new WyJS.Type.List(new WyJS.Type.Union([new WyJS.Type.Int(), new WyJS.Type.Real()])));
            var r27 = new WyJS.List([r26], new WyJS.Type.List(new WyJS.Type.List(new WyJS.Type.Union([new WyJS.Type.Int(), new WyJS.Type.Real()]))));
            var r22 = f(r27);//invoke %22 = (%27) TypeEquals_Valid_19:f : function([[int|real]]) -> [int]
            var r28 = new WyJS.Integer(1);
            var r29 = new WyJS.Integer(2);
            var r30 = new WyJS.Integer(3);
            var r31 = new WyJS.List([r28, r29, r30], new WyJS.Type.List(new WyJS.Type.Int()));
            if(WyJS.equals(r22, r31, true)){
               control_flow_pc = 5;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 5:
            var r33 = new WyJS.Real(1.23);
            var r34 = new WyJS.Integer(2);
            var r35 = new WyJS.Real(2.01);
            var r36 = new WyJS.List([r33, r34, r35], new WyJS.Type.List(new WyJS.Type.Union([new WyJS.Type.Int(), new WyJS.Type.Real()])));
            var r37 = new WyJS.List([r36], new WyJS.Type.List(new WyJS.Type.List(new WyJS.Type.Union([new WyJS.Type.Int(), new WyJS.Type.Real()]))));
            var r32 = f(r37);//invoke %32 = (%37) TypeEquals_Valid_19:f : function([[int|real]]) -> [int]
            var r38 = new WyJS.Integer(1);
            var r39 = new WyJS.Integer(2);
            var r40 = new WyJS.Integer(3);
            var r41 = new WyJS.List([r38, r39, r40], new WyJS.Type.List(new WyJS.Type.Int()));
            if(WyJS.equals(r32, r41, true)){
               control_flow_pc = 6;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 6:
      }
   }
}

