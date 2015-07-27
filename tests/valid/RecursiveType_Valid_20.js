function f(r0){//function(RecursiveType_Valid_20:posExpr) -> RecursiveType_Valid_20:expr
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r2 = r0;//assign %2 = %0  : X<int|{X lhs,X rhs}>
            var r1 = r2;//assign %1 = %2  : X<int|{X lhs,X rhs}>
            return r1;//return %1 : X<int|{X lhs,X rhs}>
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
            var r5 = new WyJS.Record(["lhs", "rhs"], [r3, r4]);
            var r6 = new WyJS.Integer(1);
            var r7 = new WyJS.Record(["lhs", "rhs"], [r5, r6]);
            var r2 = f(r7);//invoke %2 = (%7) RecursiveType_Valid_20:f : function(RecursiveType_Valid_20:posExpr) -> RecursiveType_Valid_20:expr
            var r1 = r2;//assign %1 = %2  : X<int|{X lhs,X rhs}>
            var r0 = r1;//assign %0 = %1  : X<int|{X lhs,X rhs}>
            var r8 = new WyJS.Integer(1);
            var r9 = new WyJS.Integer(2);
            var r10 = new WyJS.Record(["lhs", "rhs"], [r8, r9]);
            var r11 = new WyJS.Integer(1);
            var r12 = new WyJS.Record(["lhs", "rhs"], [r10, r11]);
            if(WyJS.equals(r0, r12, true)){
               control_flow_pc = 322;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 322:
      }
   }
}

