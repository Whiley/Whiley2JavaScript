function test(){//method() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r0 = new WyJS.List([new WyJS.Tuple([new WyJS.Integer(0)], new WyJS.Type.Tuple([new WyJS.Type.Int(), new WyJS.Type.Int()])), new WyJS.Tuple([new WyJS.Integer(1)], new WyJS.Type.Tuple([new WyJS.Type.Int(), new WyJS.Type.Int()])), new WyJS.Tuple([new WyJS.Integer(1)], new WyJS.Type.Tuple([new WyJS.Type.Int(), new WyJS.Type.Int()])), new WyJS.Tuple([new WyJS.Integer(2)], new WyJS.Type.Tuple([new WyJS.Type.Int(), new WyJS.Type.Int()])), new WyJS.Tuple([new WyJS.Integer(2)], new WyJS.Type.Tuple([new WyJS.Type.Int(), new WyJS.Type.Int()])), new WyJS.Tuple([new WyJS.Integer(2)], new WyJS.Type.Tuple([new WyJS.Type.Int(), new WyJS.Type.Int()]))], new WyJS.Type.List(new WyJS.Type.Tuple([new WyJS.Type.Int(), new WyJS.Type.Int()])));
            var r1 = new WyJS.Integer(0);
            var r2 = r0.getValue(r1);
            var r3 = new WyJS.Integer(0);
            var r4 = new WyJS.Integer(0);
            var r5 = new WyJS.Tuple([r3, r4], new WyJS.Type.Tuple([new WyJS.Type.Int(), new WyJS.Type.Int()]));
            if(WyJS.equals(r2, r5, true)){
               control_flow_pc = 83;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 83:
            var r6 = new WyJS.List([new WyJS.Tuple([new WyJS.Integer(0)], new WyJS.Type.Tuple([new WyJS.Type.Int(), new WyJS.Type.Int()])), new WyJS.Tuple([new WyJS.Integer(1)], new WyJS.Type.Tuple([new WyJS.Type.Int(), new WyJS.Type.Int()])), new WyJS.Tuple([new WyJS.Integer(1)], new WyJS.Type.Tuple([new WyJS.Type.Int(), new WyJS.Type.Int()])), new WyJS.Tuple([new WyJS.Integer(2)], new WyJS.Type.Tuple([new WyJS.Type.Int(), new WyJS.Type.Int()])), new WyJS.Tuple([new WyJS.Integer(2)], new WyJS.Type.Tuple([new WyJS.Type.Int(), new WyJS.Type.Int()])), new WyJS.Tuple([new WyJS.Integer(2)], new WyJS.Type.Tuple([new WyJS.Type.Int(), new WyJS.Type.Int()]))], new WyJS.Type.List(new WyJS.Type.Tuple([new WyJS.Type.Int(), new WyJS.Type.Int()])));
            var r7 = new WyJS.Integer(1);
            var r8 = r6.getValue(r7);
            var r9 = new WyJS.Integer(1);
            var r10 = new WyJS.Integer(1);
            var r11 = new WyJS.Tuple([r9, r10], new WyJS.Type.Tuple([new WyJS.Type.Int(), new WyJS.Type.Int()]));
            if(WyJS.equals(r8, r11, true)){
               control_flow_pc = 84;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 84:
            var r12 = new WyJS.List([new WyJS.Tuple([new WyJS.Integer(0)], new WyJS.Type.Tuple([new WyJS.Type.Int(), new WyJS.Type.Int()])), new WyJS.Tuple([new WyJS.Integer(1)], new WyJS.Type.Tuple([new WyJS.Type.Int(), new WyJS.Type.Int()])), new WyJS.Tuple([new WyJS.Integer(1)], new WyJS.Type.Tuple([new WyJS.Type.Int(), new WyJS.Type.Int()])), new WyJS.Tuple([new WyJS.Integer(2)], new WyJS.Type.Tuple([new WyJS.Type.Int(), new WyJS.Type.Int()])), new WyJS.Tuple([new WyJS.Integer(2)], new WyJS.Type.Tuple([new WyJS.Type.Int(), new WyJS.Type.Int()])), new WyJS.Tuple([new WyJS.Integer(2)], new WyJS.Type.Tuple([new WyJS.Type.Int(), new WyJS.Type.Int()]))], new WyJS.Type.List(new WyJS.Type.Tuple([new WyJS.Type.Int(), new WyJS.Type.Int()])));
            var r13 = new WyJS.Integer(2);
            var r14 = r12.getValue(r13);
            var r15 = new WyJS.Integer(0);
            var r16 = new WyJS.Integer(1);
            var r17 = new WyJS.Tuple([r15, r16], new WyJS.Type.Tuple([new WyJS.Type.Int(), new WyJS.Type.Int()]));
            if(WyJS.equals(r14, r17, true)){
               control_flow_pc = 85;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 85:
            var r18 = new WyJS.List([new WyJS.Tuple([new WyJS.Integer(0)], new WyJS.Type.Tuple([new WyJS.Type.Int(), new WyJS.Type.Int()])), new WyJS.Tuple([new WyJS.Integer(1)], new WyJS.Type.Tuple([new WyJS.Type.Int(), new WyJS.Type.Int()])), new WyJS.Tuple([new WyJS.Integer(1)], new WyJS.Type.Tuple([new WyJS.Type.Int(), new WyJS.Type.Int()])), new WyJS.Tuple([new WyJS.Integer(2)], new WyJS.Type.Tuple([new WyJS.Type.Int(), new WyJS.Type.Int()])), new WyJS.Tuple([new WyJS.Integer(2)], new WyJS.Type.Tuple([new WyJS.Type.Int(), new WyJS.Type.Int()])), new WyJS.Tuple([new WyJS.Integer(2)], new WyJS.Type.Tuple([new WyJS.Type.Int(), new WyJS.Type.Int()]))], new WyJS.Type.List(new WyJS.Type.Tuple([new WyJS.Type.Int(), new WyJS.Type.Int()])));
            var r19 = new WyJS.Integer(3);
            var r20 = r18.getValue(r19);
            var r21 = new WyJS.Integer(2);
            var r22 = new WyJS.Integer(2);
            var r23 = new WyJS.Tuple([r21, r22], new WyJS.Type.Tuple([new WyJS.Type.Int(), new WyJS.Type.Int()]));
            if(WyJS.equals(r20, r23, true)){
               control_flow_pc = 86;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 86:
            var r24 = new WyJS.List([new WyJS.Tuple([new WyJS.Integer(0)], new WyJS.Type.Tuple([new WyJS.Type.Int(), new WyJS.Type.Int()])), new WyJS.Tuple([new WyJS.Integer(1)], new WyJS.Type.Tuple([new WyJS.Type.Int(), new WyJS.Type.Int()])), new WyJS.Tuple([new WyJS.Integer(1)], new WyJS.Type.Tuple([new WyJS.Type.Int(), new WyJS.Type.Int()])), new WyJS.Tuple([new WyJS.Integer(2)], new WyJS.Type.Tuple([new WyJS.Type.Int(), new WyJS.Type.Int()])), new WyJS.Tuple([new WyJS.Integer(2)], new WyJS.Type.Tuple([new WyJS.Type.Int(), new WyJS.Type.Int()])), new WyJS.Tuple([new WyJS.Integer(2)], new WyJS.Type.Tuple([new WyJS.Type.Int(), new WyJS.Type.Int()]))], new WyJS.Type.List(new WyJS.Type.Tuple([new WyJS.Type.Int(), new WyJS.Type.Int()])));
            var r25 = new WyJS.Integer(4);
            var r26 = r24.getValue(r25);
            var r27 = new WyJS.Integer(0);
            var r28 = new WyJS.Integer(2);
            var r29 = new WyJS.Tuple([r27, r28], new WyJS.Type.Tuple([new WyJS.Type.Int(), new WyJS.Type.Int()]));
            if(WyJS.equals(r26, r29, true)){
               control_flow_pc = 87;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 87:
            var r30 = new WyJS.List([new WyJS.Tuple([new WyJS.Integer(0)], new WyJS.Type.Tuple([new WyJS.Type.Int(), new WyJS.Type.Int()])), new WyJS.Tuple([new WyJS.Integer(1)], new WyJS.Type.Tuple([new WyJS.Type.Int(), new WyJS.Type.Int()])), new WyJS.Tuple([new WyJS.Integer(1)], new WyJS.Type.Tuple([new WyJS.Type.Int(), new WyJS.Type.Int()])), new WyJS.Tuple([new WyJS.Integer(2)], new WyJS.Type.Tuple([new WyJS.Type.Int(), new WyJS.Type.Int()])), new WyJS.Tuple([new WyJS.Integer(2)], new WyJS.Type.Tuple([new WyJS.Type.Int(), new WyJS.Type.Int()])), new WyJS.Tuple([new WyJS.Integer(2)], new WyJS.Type.Tuple([new WyJS.Type.Int(), new WyJS.Type.Int()]))], new WyJS.Type.List(new WyJS.Type.Tuple([new WyJS.Type.Int(), new WyJS.Type.Int()])));
            var r31 = new WyJS.Integer(5);
            var r32 = r30.getValue(r31);
            var r33 = new WyJS.Integer(2);
            var r34 = new WyJS.Integer(2);
            var r35 = new WyJS.Tuple([r33, r34], new WyJS.Type.Tuple([new WyJS.Type.Int(), new WyJS.Type.Int()]));
            if(WyJS.equals(r32, r35, true)){
               control_flow_pc = 88;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 88:
            return;
      }
   }
}

