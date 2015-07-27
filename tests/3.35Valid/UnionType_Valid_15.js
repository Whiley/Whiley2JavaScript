function f(r0){//function(UnionType_Valid_15:msgType) -> UnionType_Valid_15:msgType
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            return r0;//return %0 : {[int] data,int op}|{[{int dum}] data,int op}
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
            var r3 = new WyJS.Integer(1);
            var r4 = new WyJS.Integer(2);
            var r5 = new WyJS.Integer(3);
            var r6 = new WyJS.List([r3, r4, r5], new WyJS.List('int'));
            var r7 = new WyJS.Integer(1);
            var r8 = new WyJS.Record(["op", "data"], [r6, r7], new WyJS.Type.Record(["op", "data"], '{[int] data,int op}'));
            r2 = r8;//assign %2 = %8  : {[int] data,int op}
            r0 = r2;//assign %0 = %2  : {[int] data,int op}
            var r9 = f(r0);//invoke %9 = (%0) UnionType_Valid_15:f : function(UnionType_Valid_15:msgType) -> UnionType_Valid_15:msgType
            var r10 = new WyJS.Integer(1);
            var r11 = new WyJS.Integer(2);
            var r12 = new WyJS.Integer(3);
            var r13 = new WyJS.List([r10, r11, r12], new WyJS.List('int'));
            var r14 = new WyJS.Integer(1);
            var r15 = new WyJS.Record(["op", "data"], [r13, r14], new WyJS.Type.Record(["op", "data"], '{[int] data,int op}'));
            if(WyJS.equals(r9, r15, true)){
               control_flow_pc = 401;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 401:
            var r17 = r0.fieldLoad("data");//fieldload %17 = %0 data : {[int] data,int op}
            r16 = r17.clone();//assign %16 = %17  : [int]
            r1 = r16.clone();//assign %1 = %16  : [int]
            var r18 = new WyJS.Integer(1);
            var r19 = new WyJS.Integer(2);
            var r20 = new WyJS.Integer(3);
            var r21 = new WyJS.List([r18, r19, r20], new WyJS.List('int'));
            if(WyJS.equals(r1, r21, true)){
               control_flow_pc = 402;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 402:
      }
   }
}

