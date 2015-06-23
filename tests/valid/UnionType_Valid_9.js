function f(r0){//function(UnionType_Valid_9:msgType) -> any
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            return r0;//return %0 : any
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
            var r2 = [];
            var r3 = new WyJS.Integer(11);
            var r4 = {op: r2, data: r3};//newrecord %4 = (%2, %3) : {[void] data,int op}
            var r1 = r4;//assign %1 = %4  : {[void] data,int op}
            var r0 = r1;//assign %0 = %1  : {[int] data,int op}
            var r5 = f(r0);//invoke %5 = (%0) UnionType_Valid_9:f : function(UnionType_Valid_9:msgType) -> any
            var r6 = [];
            var r7 = new WyJS.Integer(11);
            var r8 = {op: r6, data: r7};//newrecord %8 = (%6, %7) : {[void] data,int op}
            if(WyJS.equals(r5, r8, true)){
               control_flow_pc = 1958;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1958:
      }
   }
}

