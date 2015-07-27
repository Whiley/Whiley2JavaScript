function parseTerm(){//function() -> RecursiveType_Valid_16:Expr
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r0 = parseIdentifier();//invoke %0 = () RecursiveType_Valid_16:parseIdentifier : function() -> RecursiveType_Valid_16:Expr
            return r0;//return %0 : X<{[int] err}|{int num}|{X lhs,int op,X rhs}>
      }
   }
}

function parseIdentifier(){//function() -> RecursiveType_Valid_16:Expr
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r0 = new WyJS.List([101,114,114]);
            var r1 = new WyJS.Record(["err"], [r0]);
            return r1;//return %1 : X<{[int] err}|{int num}|{X lhs,int op,X rhs}>
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
            var r2 = parseTerm();//invoke %2 = () RecursiveType_Valid_16:parseTerm : function() -> RecursiveType_Valid_16:Expr
            var r1 = r2;//assign %1 = %2  : X<{[int] err}|{int num}|{X lhs,int op,X rhs}>
            var r0 = r1;//assign %0 = %1  : X<{[int] err}|{int num}|{X lhs,int op,X rhs}>
            var r3 = new WyJS.List([101,114,114]);
            var r4 = new WyJS.Record(["err"], [r3]);
            if(WyJS.equals(r0, r4, true)){
               control_flow_pc = 314;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 314:
      }
   }
}

