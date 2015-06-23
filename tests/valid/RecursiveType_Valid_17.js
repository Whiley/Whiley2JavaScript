function parse(r0){//function([int]) -> RecursiveType_Valid_17:Expr
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r4 = new WyJS.Integer(0);
            var r5 = {input: r0, pos: r4};//newrecord %5 = (%0, %4) : {[int] input,int pos}
            var r3 = parseAddSubExpr(r5);//invoke %3 = (%5) RecursiveType_Valid_17:parseAddSubExpr : function(RecursiveType_Valid_17:State) -> {RecursiveType_Valid_17:Expr e,RecursiveType_Valid_17:State st}
            var r2 = r3;//assign %2 = %3  : {X<{[int] err}|{int num}|{X lhs,int op,X rhs}> e,{[int] input,int pos} st}
            var r1 = r2;//assign %1 = %2  : {X<{[int] err}|{int num}|{X lhs,int op,X rhs}> e,{[int] input,int pos} st}
            var r6 = r1.e;//fieldload %6 = %1 e : {X<{[int] err}|{int num}|{X lhs,int op,X rhs}> e,{[int] input,int pos} st}
            return r6;//return %6 : X<{[int] err}|{int num}|{X lhs,int op,X rhs}>
      }
   }
}

function parseAddSubExpr(r0){//function(RecursiveType_Valid_17:State) -> {RecursiveType_Valid_17:Expr e,RecursiveType_Valid_17:State st}
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = new WyJS.Integer(1);
            var r2 = {num: r1};//newrecord %2 = (%1) : {int num}
            var r3 = {st: r2, e: r0};//newrecord %3 = (%2, %0) : {{int num} e,{[int] input,int pos} st}
            return r3;//return %3 : {X<{[int] err}|{int num}|{X lhs,int op,X rhs}> e,{[int] input,int pos} st}
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
            var r3 = new WyJS.List([72,101,108,108,111]);
            var r2 = parse(r3);//invoke %2 = (%3) RecursiveType_Valid_17:parse : function([int]) -> RecursiveType_Valid_17:Expr
            var r1 = r2;//assign %1 = %2  : X<{[int] err}|{int num}|{X lhs,int op,X rhs}>
            var r0 = r1;//assign %0 = %1  : X<{[int] err}|{int num}|{X lhs,int op,X rhs}>
            var r4 = new WyJS.Integer(1);
            var r5 = {num: r4};//newrecord %5 = (%4) : {int num}
            if(WyJS.equals(r0, r5, true)){
               control_flow_pc = 323;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 323:
      }
   }
}

