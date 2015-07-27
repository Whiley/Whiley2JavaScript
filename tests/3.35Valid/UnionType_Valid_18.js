function f(r0){//function(UnionType_Valid_18:tupper) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = r0.fieldLoad("op");//fieldload %1 = %0 op : {int|[int] il,int op}
            return r1;//return %1 : int
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
            var r3 = new WyJS.Integer(1);
            var r4 = new WyJS.Record(["op", "il"], [r2, r3], new WyJS.Type.Record(["op", "il"], '{int il,int op}'));
            r1 = r4;//assign %1 = %4  : {int il,int op}
            r0 = r1;//assign %0 = %1  : {int|[int] il,int op}
            var r5 = f(r0);//invoke %5 = (%0) UnionType_Valid_18:f : function(UnionType_Valid_18:tupper) -> int
            var r6 = new WyJS.Integer(1);
            if(WyJS.equals(r5, r6, true)){
               control_flow_pc = 411;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 411:
      }
   }
}

