function f(r0){//function(UnionType_Valid_4:IntReal) -> UnionType_Valid_4:IntReal
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            return r0;//return %0 : int|real
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
            var r2 = new WyJS.Integer(123);
            var r1 = r2;//assign %1 = %2  : int
            var r0 = r1;//assign %0 = %1  : int|real
            var r3 = f(r0);//invoke %3 = (%0) UnionType_Valid_4:f : function(UnionType_Valid_4:IntReal) -> UnionType_Valid_4:IntReal
            var r4 = new WyJS.Integer(123);
            if(WyJS.equals(r3, r4, true)){
               control_flow_pc = 1947;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1947:
            var r5 = new WyJS.Real(1.234);
            var r0 = r5;//assign %0 = %5  : real
            var r6 = f(r0);//invoke %6 = (%0) UnionType_Valid_4:f : function(UnionType_Valid_4:IntReal) -> UnionType_Valid_4:IntReal
            var r7 = new WyJS.Real(1.234);
            if(WyJS.equals(r6, r7, true)){
               control_flow_pc = 1948;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1948:
      }
   }
}

