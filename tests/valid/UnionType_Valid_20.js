function f(r0){//function(UnionType_Valid_20:byteCode) -> UnionType_Valid_20:byteCode
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            return r0;//return %0 : {int index,int op}|{int offset,int op}
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
            var r3 = new WyJS.Integer(0);
            var r4 = new WyJS.Record(["op", "index"], [r2, r3]);
            var r1 = r4;//assign %1 = %4  : {int index,int op}
            var r0 = r1;//assign %0 = %1  : {int index,int op}
            var r5 = f(r0);//invoke %5 = (%0) UnionType_Valid_20:f : function(UnionType_Valid_20:byteCode) -> UnionType_Valid_20:byteCode
            var r6 = new WyJS.Integer(1);
            var r7 = new WyJS.Integer(0);
            var r8 = new WyJS.Record(["op", "index"], [r6, r7]);
            if(WyJS.equals(r5, r8, true)){
               control_flow_pc = 430;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 430:
      }
   }
}

