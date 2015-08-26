function f$b9dF5X1FVYGWYWt1N3D(r0, r1){//function([int],[real]) -> bool
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r2 = WyJS.cast(new WyJS.Type.List(new WyJS.Type.Real()), r0);
            if(WyJS.equals(r2, r1, false)){
               control_flow_pc = 1922;
               control_flow_repeat = true;
               continue outer;
            }
            var r3 = true;
            return r3;//return %3 : bool
            control_flow_pc = 1923;
            control_flow_repeat = true;
            continue outer;//goto label1923
         case 1922:
            var r4 = false;
            return r4;//return %4 : bool
         case 1923:
            return;
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
            var r2 = new WyJS.Integer(4);
            var r3 = new WyJS.List([r1, r2], new WyJS.Type.List(new WyJS.Type.Int()));
            var r4 = new WyJS.Real(1.0);
            var r5 = new WyJS.Real(4.0);
            var r6 = new WyJS.List([r4, r5], new WyJS.Type.List(new WyJS.Type.Real()));
            var r0 = f$b9dF5X1FVYGWYWt1N3D(r3, r6);//invoke %0 = (%3, %6) ListEquals_Valid_1:f : function([int],[real]) -> bool
            var r7 = true;
            if(r0 === r7){
               control_flow_pc = 1924;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1924:
            var r9 = new WyJS.Integer(1);
            var r10 = new WyJS.Integer(4);
            var r11 = new WyJS.List([r9, r10], new WyJS.Type.List(new WyJS.Type.Int()));
            var r12 = new WyJS.Real(1.0);
            var r13 = new WyJS.Real(4.2);
            var r14 = new WyJS.List([r12, r13], new WyJS.Type.List(new WyJS.Type.Real()));
            var r8 = f$b9dF5X1FVYGWYWt1N3D(r11, r14);//invoke %8 = (%11, %14) ListEquals_Valid_1:f : function([int],[real]) -> bool
            var r15 = false;
            if(r8 === r15){
               control_flow_pc = 1925;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1925:
            var r17 = new WyJS.List([], new WyJS.Type.List(new WyJS.Type.Void()));
            var r18 = new WyJS.List([], new WyJS.Type.List(new WyJS.Type.Void()));
            var r16 = f$b9dF5X1FVYGWYWt1N3D(r17, r18);//invoke %16 = (%17, %18) ListEquals_Valid_1:f : function([int],[real]) -> bool
            var r19 = true;
            if(r16 === r19){
               control_flow_pc = 1926;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1926:
            return;
      }
   }
}

