function f$2AbFXA$W(r0){//method(int) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            return r0;//return %0 : int
            return;
      }
   }
}

function g$3AbF1D527RWz(r0){//method(int[]) -> int[]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            return r0;//return %0 : int[]
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
            var r2 = new WyJS.Integer(123);
            var r1 = r2;//assign %1 = %2  : int
            var r0 = r1;//assign %0 = %1  : int|int[]
            var r3 = f$2AbFXA$W(r0);//invoke %3 = (%0) UnionType_Valid_17:f : method(int) -> int
            var r4 = new WyJS.Integer(123);
            if(WyJS.equals(r3, r4, true)){
               control_flow_pc = 287;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 287:
            var r5 = new WyJS.Integer(1);
            var r6 = new WyJS.Integer(2);
            var r7 = new WyJS.Integer(3);
            var r8 = new WyJS.Array([r5, r6, r7], new WyJS.Type.Array(new WyJS.Type.Int()));
            var r0 = r8.clone(new WyJS.Type.Int());//assign %0 = %8  : int[]
            var r9 = g$3AbF1D527RWz(r0);//invoke %9 = (%0) UnionType_Valid_17:g : method(int[]) -> int[]
            var r10 = new WyJS.Integer(1);
            var r11 = new WyJS.Integer(2);
            var r12 = new WyJS.Integer(3);
            var r13 = new WyJS.Array([r10, r11, r12], new WyJS.Type.Array(new WyJS.Type.Int()));
            if(WyJS.equals(r9, r13, true)){
               control_flow_pc = 288;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 288:
            return;
      }
   }
}

