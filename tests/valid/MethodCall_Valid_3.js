function get(){//method() -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r0 = new WyJS.Integer(1);
            return r0;//return %0 : int
      }
   }
}

function f(r0){//method(int) -> MethodCall_Valid_3:wmcr6tup
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = get();//invoke %1 = () MethodCall_Valid_3:get : method() -> int
            var r2 = {x: r0, y: r1};//newrecord %2 = (%0, %1) : {int x,int y}
            return r2;//return %2 : {int x,int y}
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
            var r1 = new WyJS.Integer(2);
            var r0 = f(r1);//invoke %0 = (%1) MethodCall_Valid_3:f : method(int) -> MethodCall_Valid_3:wmcr6tup
            var r2 = new WyJS.Integer(2);
            var r3 = new WyJS.Integer(1);
            var r4 = {x: r2, y: r3};//newrecord %4 = (%2, %3) : {int x,int y}
            if(WyJS.equals(r0, r4, true)){
               control_flow_pc = 1119;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1119:
      }
   }
}

