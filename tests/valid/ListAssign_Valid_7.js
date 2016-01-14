function f$_9bF5C930WAklNB(r0){//function(int) -> (int[],int[])
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r4 = new WyJS.Integer(1);
            var r5 = new WyJS.Integer(2);
            var r6 = new WyJS.Integer(64);
            var r7 = new WyJS.List([r4, r5, r6], new WyJS.Type.List(new WyJS.Type.Int()));
            var r3 = r7.clone(new WyJS.Type.Int());//assign %3 = %7  : int[]
            var r1 = r3.clone(new WyJS.Type.Int());//assign %1 = %3  : int[]
            var r8 = r1.clone(new WyJS.Type.Int());//assign %8 = %1  : int[]
            var r2 = r8.clone(new WyJS.Type.Int());//assign %2 = %8  : int[]
            var r9 = r1.length();//lengthof %9 = %1 : int[]
            if(WyJS.equals(r0, r9, true)){
               control_flow_pc = 2375;
               control_flow_repeat = true;
               continue outer;
            }
            var r10 = new WyJS.Integer(3);
            var r11 = new WyJS.Integer(2);
            var r12 = new WyJS.Integer(3);
            r2.setValue(r11, r12);
            control_flow_pc = 2376;
            control_flow_repeat = true;
            continue outer;//goto label2376
         case 2375:
            var r13 = new WyJS.Integer(2);
            r2.setValue(r13, r0);
         case 2376:
            var r14 = new WyJS.Integer(2);
            var r15 = r2.getValue(r14);
            var r16 = r1.length();//lengthof %16 = %1 : int[]
            if(WyJS.equals(r15, r16, true)){
               control_flow_pc = 2377;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2377:
            var r17 = new WyJS.Tuple([r1, r2], new WyJS.Type.Tuple([new WyJS.Type.List(new WyJS.Type.Int()), new WyJS.Type.List(new WyJS.Type.Int())]));
            return r17;//return %17 : (int[],int[])
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
            var r1 = new WyJS.Integer(2);
            var r0 = f$_9bF5C930WAklNB(r1);//invoke %0 = (%1) ListAssign_Valid_7:f : function(int) -> (int[],int[])
            var r2 = new WyJS.Integer(1);
            var r3 = new WyJS.Integer(2);
            var r4 = new WyJS.Integer(64);
            var r5 = new WyJS.List([r2, r3, r4], new WyJS.Type.List(new WyJS.Type.Int()));
            var r6 = new WyJS.Integer(1);
            var r7 = new WyJS.Integer(2);
            var r8 = new WyJS.Integer(3);
            var r9 = new WyJS.List([r6, r7, r8], new WyJS.Type.List(new WyJS.Type.Int()));
            var r10 = new WyJS.Tuple([r5, r9], new WyJS.Type.Tuple([new WyJS.Type.List(new WyJS.Type.Int()), new WyJS.Type.List(new WyJS.Type.Int())]));
            if(WyJS.equals(r0, r10, true)){
               control_flow_pc = 2378;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2378:
            var r12 = new WyJS.Integer(3);
            var r11 = f$_9bF5C930WAklNB(r12);//invoke %11 = (%12) ListAssign_Valid_7:f : function(int) -> (int[],int[])
            var r13 = new WyJS.Integer(1);
            var r14 = new WyJS.Integer(2);
            var r15 = new WyJS.Integer(64);
            var r16 = new WyJS.List([r13, r14, r15], new WyJS.Type.List(new WyJS.Type.Int()));
            var r17 = new WyJS.Integer(1);
            var r18 = new WyJS.Integer(2);
            var r19 = new WyJS.Integer(3);
            var r20 = new WyJS.List([r17, r18, r19], new WyJS.Type.List(new WyJS.Type.Int()));
            var r21 = new WyJS.Tuple([r16, r20], new WyJS.Type.Tuple([new WyJS.Type.List(new WyJS.Type.Int()), new WyJS.Type.List(new WyJS.Type.Int())]));
            if(WyJS.equals(r11, r21, true)){
               control_flow_pc = 2379;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2379:
            return;
      }
   }
}

