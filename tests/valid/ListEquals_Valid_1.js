function f$b9dF5X1FVYGWYWt1N3D(r0, r1){//function(int[],real[]) -> bool
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r2 = WyJS.cast(new WyJS.Type.List(new WyJS.Type.Real()), r0);
            if(WyJS.equals(r2, r1, false)){
               control_flow_pc = 1983;
               control_flow_repeat = true;
               continue outer;
            }
            var r3 = true;
            return r3;//return %3 : bool
            control_flow_pc = 1984;
            control_flow_repeat = true;
            continue outer;//goto label1984
         case 1983:
            var r4 = false;
            return r4;//return %4 : bool
         case 1984:
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
            var r2 = new WyJS.Integer(4);
            var r3 = new WyJS.List([r1, r2], new WyJS.Type.List(new WyJS.Type.Int()));
            var r4 = new WyJS.Real(1.0);
            var r5 = new WyJS.Real(4.0);
            var r6 = new WyJS.List([r4, r5], new WyJS.Type.List(new WyJS.Type.Real()));
            var r0 = f$b9dF5X1FVYGWYWt1N3D(r3, r6);//invoke %0 = (%3, %6) ListEquals_Valid_1:f : function(int[],real[]) -> bool
            var r7 = true;
            if(r0 === r7){
               control_flow_pc = 1985;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1985:
            var r9 = new WyJS.Integer(1);
            var r10 = new WyJS.Integer(4);
            var r11 = new WyJS.List([r9, r10], new WyJS.Type.List(new WyJS.Type.Int()));
            var r12 = new WyJS.Real(1.0);
            var r13 = new WyJS.Real(4.2);
            var r14 = new WyJS.List([r12, r13], new WyJS.Type.List(new WyJS.Type.Real()));
            var r8 = f$b9dF5X1FVYGWYWt1N3D(r11, r14);//invoke %8 = (%11, %14) ListEquals_Valid_1:f : function(int[],real[]) -> bool
            var r15 = false;
            if(r8 === r15){
               control_flow_pc = 1986;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1986:
            var r17 = new WyJS.Integer(0);
            var r18 = new WyJS.Integer(0);
            var r19 = WyJS.ListGen(r17, r18, new WyJS.Type.List(new WyJS.Type.Int()));
            var r20 = new WyJS.Real(0.0);
            var r21 = new WyJS.Integer(0);
            var r22 = WyJS.ListGen(r20, r21, new WyJS.Type.List(new WyJS.Type.Real()));
            var r16 = f$b9dF5X1FVYGWYWt1N3D(r19, r22);//invoke %16 = (%19, %22) ListEquals_Valid_1:f : function(int[],real[]) -> bool
            var r23 = true;
            if(r16 === r23){
               control_flow_pc = 1987;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1987:
            return;
      }
   }
}

