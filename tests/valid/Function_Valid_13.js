function f(r0){//function(int) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            return r0;//return %0 : int
      }
   }
}

function Point(r0, r1){//function(int,int) -> Function_Valid_13:Point
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r2 = f(r0);//invoke %2 = (%0) Function_Valid_13:f : function(int) -> int
            var r3 = f(r1);//invoke %3 = (%1) Function_Valid_13:f : function(int) -> int
            if(WyJS.equals(r2, r3, true)){
               control_flow_pc = 268;
               control_flow_repeat = true;
               continue outer;
            }
            var r4 = new WyJS.Record(["x", "y"], [r0, r1]);
            return r4;//return %4 : {int x,int y}
            control_flow_pc = 269;
            control_flow_repeat = true;
            continue outer;//goto label269
         case 268:
            var r5 = new WyJS.Integer(1);
            var r6 = new WyJS.Integer(1);
            var r7 = r6.neg();//neg %7 = %6 : int
            var r8 = new WyJS.Record(["x", "y"], [r5, r7]);
            return r8;//return %8 : {int x,int y}
         case 269:
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
            var r4 = new WyJS.Integer(1);
            var r2 = Point(r3, r4);//invoke %2 = (%3, %4) Function_Valid_13:Point : function(int,int) -> Function_Valid_13:Point
            var r1 = r2;//assign %1 = %2  : {int x,int y}
            var r0 = r1;//assign %0 = %1  : {int x,int y}
            var r5 = new WyJS.Integer(1);
            var r6 = new WyJS.Integer(1);
            var r7 = r6.neg();//neg %7 = %6 : int
            var r8 = new WyJS.Record(["x", "y"], [r5, r7]);
            if(WyJS.equals(r0, r8, true)){
               control_flow_pc = 270;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 270:
            var r10 = new WyJS.Integer(1);
            var r11 = new WyJS.Integer(2);
            var r9 = Point(r10, r11);//invoke %9 = (%10, %11) Function_Valid_13:Point : function(int,int) -> Function_Valid_13:Point
            var r0 = r9;//assign %0 = %9  : {int x,int y}
            var r12 = new WyJS.Integer(1);
            var r13 = new WyJS.Integer(2);
            var r14 = new WyJS.Record(["x", "y"], [r12, r13]);
            if(WyJS.equals(r0, r14, true)){
               control_flow_pc = 271;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 271:
      }
   }
}

