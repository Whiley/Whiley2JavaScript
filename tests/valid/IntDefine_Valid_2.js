function f(r0){//function(int) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r2 = new WyJS.Integer(2);
            if(WyJS.lt(r0, r2, true)){
               control_flow_pc = 2009;
               control_flow_repeat = true;
               continue outer;
            }
            var r3 = r0;//assign %3 = %0  : int
            var r1 = r3;//assign %1 = %3  : int
            return r1;//return %1 : int
         case 2009:
            var r4 = new WyJS.Integer(0);
            return r4;//return %4 : int
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
            var r0 = f(r1);//invoke %0 = (%1) IntDefine_Valid_2:f : function(int) -> int
            var r2 = new WyJS.Integer(0);
            if(WyJS.equals(r0, r2, true)){
               control_flow_pc = 2010;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2010:
            var r4 = new WyJS.Integer(2);
            var r3 = f(r4);//invoke %3 = (%4) IntDefine_Valid_2:f : function(int) -> int
            var r5 = new WyJS.Integer(0);
            if(WyJS.equals(r3, r5, true)){
               control_flow_pc = 2011;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2011:
            var r7 = new WyJS.Integer(3);
            var r6 = f(r7);//invoke %6 = (%7) IntDefine_Valid_2:f : function(int) -> int
            var r8 = new WyJS.Integer(3);
            if(WyJS.equals(r6, r8, true)){
               control_flow_pc = 2012;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2012:
      }
   }
}

