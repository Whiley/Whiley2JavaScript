function f(r0){//function(UnionType_Valid_23:IntList) -> UnionType_Valid_23:IntList
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            return r0;//return %0 : {int mode,int op}|{int op,[real] rest}
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
            var r2 = new WyJS.Integer(1);
            var r3 = new WyJS.Real(1.23);
            var r4 = new WyJS.List([r3]);
            var r5 = new WyJS.Record(["op", "rest"], [r2, r4]);
            var r1 = r5;//assign %1 = %5  : {int op,[real] rest}
            var r0 = r1;//assign %0 = %1  : {real|int op,[real] rest}
            var r6 = new WyJS.Integer(0);
            var r7 = new WyJS.Integer(10);
            if(WyJS.equals(r6, r7, false)){
               control_flow_pc = 440;
               control_flow_repeat = true;
               continue outer;
            }
            var r8 = new WyJS.Real(1.23);
            var r9 = new WyJS.Real(1.0);
            var r10 = new WyJS.List([r9]);
            var r11 = new WyJS.Record(["op", "rest"], [r8, r10]);
            var r0 = r11;//assign %0 = %11  : {real op,[real] rest}
         case 440:
            var r12 = new WyJS.Integer(123);
            var r13 = new WyJS.Integer(123);
            r0.setValue("op", r13);//update %0.op = %13 : {int op,[real] rest}|{real op,[real] rest} -> {int op,[real] rest}
            var r14 = f(r0);//invoke %14 = (%0) UnionType_Valid_23:f : function(UnionType_Valid_23:IntList) -> UnionType_Valid_23:IntList
            var r15 = new WyJS.Integer(123);
            var r16 = new WyJS.Real(1.23);
            var r17 = new WyJS.List([r16]);
            var r18 = new WyJS.Record(["op", "rest"], [r15, r17]);
            if(WyJS.equals(r14, r18, true)){
               control_flow_pc = 441;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 441:
      }
   }
}

