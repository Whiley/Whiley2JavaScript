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
            var r4 = new WyJS.List([r3], new WyJS.List('real'));
            var r5 = new WyJS.Record(["op", "rest"], [r2, r4], new WyJS.Type.Record(["op", "rest"], '{int op,[real] rest}'));
            r1 = r5;//assign %1 = %5  : {int op,[real] rest}
            r0 = r1;//assign %0 = %1  : {int mode,int op}|{int op,[real] rest}
            var r6 = f(r0);//invoke %6 = (%0) UnionType_Valid_12:f : function(UnionType_Valid_12:IntList) -> UnionType_Valid_12:IntList
            var r7 = new WyJS.Integer(1);
            var r8 = new WyJS.Real(1.23);
            var r9 = new WyJS.List([r8], new WyJS.List('real'));
            var r10 = new WyJS.Record(["op", "rest"], [r7, r9], new WyJS.Type.Record(["op", "rest"], '{int op,[real] rest}'));
            if(WyJS.equals(r6, r10, true)){
               control_flow_pc = 388;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 388:
            var r11 = new WyJS.Integer(0);
            var r12 = new WyJS.Integer(123);
            var r13 = new WyJS.Record(["mode", "op"], [r11, r12], new WyJS.Type.Record(["mode", "op"], '{int mode,int op}'));
            r0 = r13;//assign %0 = %13  : {int mode,int op}
            var r14 = g(r0);//invoke %14 = (%0) UnionType_Valid_12:g : function({int mode,int op}) -> UnionType_Valid_12:IntList
            var r15 = new WyJS.Integer(0);
            var r16 = new WyJS.Integer(123);
            var r17 = new WyJS.Record(["mode", "op"], [r15, r16], new WyJS.Type.Record(["mode", "op"], '{int mode,int op}'));
            if(WyJS.equals(r14, r17, true)){
               control_flow_pc = 389;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 389:
      }
   }
}

