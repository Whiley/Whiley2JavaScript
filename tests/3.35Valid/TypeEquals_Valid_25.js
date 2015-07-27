function evaluate(r0){//function(TypeEquals_Valid_25:Expr) -> TypeEquals_Valid_25:Value
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            if(WyJS.is(r0, new WyJS.Type.Int())){
               control_flow_pc = 2;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 3;
            control_flow_repeat = true;
            continue outer;//goto label3
         case 2:
            return r0;//return %0 : X<int|[X]>
            control_flow_pc = 4;
            control_flow_repeat = true;
            continue outer;//goto label4
         case 3:
            if(WyJS.is(r0, )){
               control_flow_pc = 5;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 6;
            control_flow_repeat = true;
            continue outer;//goto label6
         case 5:
            var r4 = r0.fieldLoad("lhs");//fieldload %4 = %0 lhs : X<{Y<X|int|[Y]|{Y index,Y src}> lhs,int op,Y<X|int|[Y]|{Y index,Y src}> rhs}>
            var r3 = evaluate(r4);//invoke %3 = (%4) TypeEquals_Valid_25:evaluate : function(TypeEquals_Valid_25:Expr) -> TypeEquals_Valid_25:Value
            return r3;//return %3 : X<int|[X]>
            control_flow_pc = 4;
            control_flow_repeat = true;
            continue outer;//goto label4
         case 6:
            if(WyJS.is(r0, new WyJS.Type.List())){
               control_flow_pc = 7;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 8;
            control_flow_repeat = true;
            continue outer;//goto label8
         case 7:
            var r5 = new WyJS.List([], new WyJS.Type.List(new WyJS.Type.Void()));
            return r5;//return %5 : X<int|[X]>
            control_flow_pc = 4;
            control_flow_repeat = true;
            continue outer;//goto label4
         case 8:
            if(WyJS.is(r0, )){
               control_flow_pc = 9;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 10;
            control_flow_repeat = true;
            continue outer;//goto label10
         case 9:
            var r8 = r0.fieldLoad("src");//fieldload %8 = %0 src : X<{Y<X|int|[Y]|{Y lhs,int op,Y rhs}> index,Y<X|int|[Y]|{Y lhs,int op,Y rhs}> src}>
            var r7 = evaluate(r8);//invoke %7 = (%8) TypeEquals_Valid_25:evaluate : function(TypeEquals_Valid_25:Expr) -> TypeEquals_Valid_25:Value
            r6 = r7;//assign %6 = %7  : X<int|[X]>
            r1 = r6;//assign %1 = %6  : X<int|[X]>
            var r11 = r0.fieldLoad("index");//fieldload %11 = %0 index : X<{Y<X|int|[Y]|{Y lhs,int op,Y rhs}> index,Y<X|int|[Y]|{Y lhs,int op,Y rhs}> src}>
            var r10 = evaluate(r11);//invoke %10 = (%11) TypeEquals_Valid_25:evaluate : function(TypeEquals_Valid_25:Expr) -> TypeEquals_Valid_25:Value
            r9 = r10;//assign %9 = %10  : X<int|[X]>
            r2 = r9;//assign %2 = %9  : X<int|[X]>
            if(WyJS.is(r1, new WyJS.Type.List())){
               control_flow_pc = 11;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 12;
            control_flow_repeat = true;
            continue outer;//goto label12
         case 11:
            if(WyJS.is(r2, new WyJS.Type.Int())){
               control_flow_pc = 13;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 12;
            control_flow_repeat = true;
            continue outer;//goto label12
         case 13:
            var r12 = new WyJS.Integer(0);
            if(WyJS.lt(r2, r12, false)){
               control_flow_pc = 12;
               control_flow_repeat = true;
               continue outer;
            }
            var r13 = r1.length();//lengthof %13 = %1 : X<[X|int]>
            if(WyJS.gt(r2, r13, true)){
               control_flow_pc = 12;
               control_flow_repeat = true;
               continue outer;
            }
            var r14 = r1.getValue(r2);
            return r14;//return %14 : X<int|[X]>
            control_flow_pc = 14;
            control_flow_repeat = true;
            continue outer;//goto label14
         case 12:
            var r15 = new WyJS.Integer(0);
            return r15;//return %15 : X<int|[X]>
         case 14:
            control_flow_pc = 4;
            control_flow_repeat = true;
            continue outer;//goto label4
         case 10:
            var r16 = new WyJS.Integer(0);
            return r16;//return %16 : X<int|[X]>
         case 4:
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
            var r3 = new WyJS.Integer(123);
            var r4 = new WyJS.Integer(0);
            var r5 = new WyJS.Integer(1);
            var r6 = new WyJS.Record(["op", "lhs", "rhs"], [r3, r4, r5], new WyJS.Type.Record(["op", "lhs", "rhs"], [new WyJS.Type.Int(), new WyJS.Type.Int(), new WyJS.Type.Int()]));
            r2 = r6;//assign %2 = %6  : {int lhs,int op,int rhs}
            r0 = r2;//assign %0 = %2  : X<int|[X]|{X index,X src}|{X lhs,int op,X rhs}>
            var r8 = evaluate(r0);//invoke %8 = (%0) TypeEquals_Valid_25:evaluate : function(TypeEquals_Valid_25:Expr) -> TypeEquals_Valid_25:Value
            r7 = r8;//assign %7 = %8  : X<int|[X]>
            r1 = r7;//assign %1 = %7  : X<int|[X]>
            var r9 = new WyJS.Integer(123);
            if(WyJS.equals(r1, r9, true)){
               control_flow_pc = 15;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 15:
            var r10 = new WyJS.Integer(1);
            var r11 = new WyJS.List([r10], new WyJS.Type.List(new WyJS.Type.Int()));
            r0 = r11.clone();//assign %0 = %11  : [int]
            var r12 = evaluate(r0);//invoke %12 = (%0) TypeEquals_Valid_25:evaluate : function(TypeEquals_Valid_25:Expr) -> TypeEquals_Valid_25:Value
            var r13 = new WyJS.List([], new WyJS.Type.List(new WyJS.Type.Void()));
            if(WyJS.equals(r12, r13, true)){
               control_flow_pc = 16;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 16:
      }
   }
}

