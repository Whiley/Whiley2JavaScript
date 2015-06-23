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
            var r5 = {lhs: r3, rhs: r4};//newrecord %5 = (%3, %4) : {int lhs,int rhs}
            var r6 = new WyJS.Integer(1);
            var r7 = {lhs: r5, rhs: r6};//newrecord %7 = (%5, %6) : {{int lhs,int rhs} lhs,int rhs}
            var r2 = f(r7);//invoke %2 = (%7) RecursiveType_Valid_20:f : function(RecursiveType_Valid_20:posExpr) -> RecursiveType_Valid_20:expr
            var r1 = r2;//assign %1 = %2  : X<int|{X lhs,X rhs}>
            var r0 = r1;//assign %0 = %1  : X<int|{X lhs,X rhs}>
            var r8 = new WyJS.Integer(1);
            var r9 = new WyJS.Integer(2);
            var r10 = {lhs: r8, rhs: r9};//newrecord %10 = (%8, %9) : {int lhs,int rhs}
            var r11 = new WyJS.Integer(1);
            var r12 = {lhs: r10, rhs: r11};//newrecord %12 = (%10, %11) : {{int lhs,int rhs} lhs,int rhs}
            if(WyJS.equals(r0, r12, true)){
               control_flow_pc = 328;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 328:
      }
   }
}

