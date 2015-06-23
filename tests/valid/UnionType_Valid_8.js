function f(r0){//function(UnionType_Valid_8:msgType) -> any
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = r0.op;//fieldload %1 = %0 op : {int op,[int] payload}|{int header,int op,[int] rest}
            return r1;//return %1 : any
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
            var r2 = new WyJS.Integer(1);
            var r3 = new WyJS.Integer(2);
            var r4 = new WyJS.Integer(3);
            var r5 = [r2, r3, r4];
            var r6 = {op: r1, payload: r5};//newrecord %6 = (%1, %5) : {int op,[int] payload}
            var r0 = f(r6);//invoke %0 = (%6) UnionType_Valid_8:f : function(UnionType_Valid_8:msgType) -> any
            var r7 = new WyJS.Integer(1);
            if(WyJS.equals(r0, r7, true)){
               control_flow_pc = 1956;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1956:
      }
   }
}

