function f(r0){//function(UnionType_Valid_13:msgType) -> UnionType_Valid_13:msgType
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            return r0;//return %0 : {int index}|{[int] data,int op}
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
            var r3 = new WyJS.List([];
, new WyJS.List('void'));
            var r4 = new WyJS.Integer(11);
            var r5 = new WyJS.Record(["op", "data"], [r3, r4], new WyJS.Type.Record(["op", "data"], '{[void] data,int op}'));
            r2 = r5;//assign %2 = %5  : {[void] data,int op}
            r0 = r2;//assign %0 = %2  : {[int] data,int op}
            var r7 = new WyJS.Integer(1);
            var r8 = new WyJS.Record(["index"], [r7], new WyJS.Type.Record(["index"], '{int index}'));
            r6 = r8;//assign %6 = %8  : {int index}
            r1 = r6;//assign %1 = %6  : {int index}
            var r9 = f(r0);//invoke %9 = (%0) UnionType_Valid_13:f : function(UnionType_Valid_13:msgType) -> UnionType_Valid_13:msgType
            var r10 = new WyJS.List([];
, new WyJS.List('void'));
            var r11 = new WyJS.Integer(11);
            var r12 = new WyJS.Record(["op", "data"], [r10, r11], new WyJS.Type.Record(["op", "data"], '{[void] data,int op}'));
            if(WyJS.equals(r9, r12, true)){
               control_flow_pc = 390;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 390:
            var r13 = f(r1);//invoke %13 = (%1) UnionType_Valid_13:f : function(UnionType_Valid_13:msgType) -> UnionType_Valid_13:msgType
            var r14 = new WyJS.Integer(1);
            var r15 = new WyJS.Record(["index"], [r14], new WyJS.Type.Record(["index"], '{int index}'));
            if(WyJS.equals(r13, r15, true)){
               control_flow_pc = 391;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 391:
      }
   }
}

