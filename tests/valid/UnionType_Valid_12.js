function f(r0){//function(UnionType_Valid_12:IntList) -> UnionType_Valid_12:IntList
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

function g(r0){//function({int mode,int op}) -> UnionType_Valid_12:IntList
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
            var r4 = [r3];
            var r5 = {op: r2, rest: r4};//newrecord %5 = (%2, %4) : {int op,[real] rest}
            var r1 = r5;//assign %1 = %5  : {int op,[real] rest}
            var r0 = r1;//assign %0 = %1  : {int mode,int op}|{int op,[real] rest}
            var r6 = f(r0);//invoke %6 = (%0) UnionType_Valid_12:f : function(UnionType_Valid_12:IntList) -> UnionType_Valid_12:IntList
            var r7 = new WyJS.Integer(1);
            var r8 = new WyJS.Real(1.23);
            var r9 = [r8];
            var r10 = {op: r7, rest: r9};//newrecord %10 = (%7, %9) : {int op,[real] rest}
            if(WyJS.equals(r6, r10, true)){
               control_flow_pc = 403;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 403:
            var r11 = new WyJS.Integer(0);
            var r12 = new WyJS.Integer(123);
            var r13 = {mode: r11, op: r12};//newrecord %13 = (%11, %12) : {int mode,int op}
            var r0 = r13;//assign %0 = %13  : {int mode,int op}
            var r14 = g(r0);//invoke %14 = (%0) UnionType_Valid_12:g : function({int mode,int op}) -> UnionType_Valid_12:IntList
            var r15 = new WyJS.Integer(0);
            var r16 = new WyJS.Integer(123);
            var r17 = {mode: r15, op: r16};//newrecord %17 = (%15, %16) : {int mode,int op}
            if(WyJS.equals(r14, r17, true)){
               control_flow_pc = 404;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 404:
      }
   }
}

