function f(r0){//function(UnionType_Valid_10:msgType) -> UnionType_Valid_10:msgType
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
            var r2 = new WyJS.List([];
);
            var r3 = new WyJS.Integer(11);
            var r4 = new WyJS.Record(["op", "data"], [r2, r3]);
            var r1 = r4;//assign %1 = %4  : {[void] data,int op}
            var r0 = r1;//assign %0 = %1  : {[int] data,int op}
            var r5 = f(r0);//invoke %5 = (%0) UnionType_Valid_10:f : function(UnionType_Valid_10:msgType) -> UnionType_Valid_10:msgType
            var r6 = new WyJS.List([];
);
            var r7 = new WyJS.Integer(11);
            var r8 = new WyJS.Record(["op", "data"], [r6, r7]);
            if(WyJS.equals(r5, r8, true)){
               control_flow_pc = 393;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 393:
      }
   }
}

