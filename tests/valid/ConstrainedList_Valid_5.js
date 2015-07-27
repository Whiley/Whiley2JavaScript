function g(r0){//function(int) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = new WyJS.Integer(0);
            if(WyJS.lt(r0, r1, true)){
               control_flow_pc = 1736;
               control_flow_repeat = true;
               continue outer;
            }
            var r2 = new WyJS.Integer(125);
            if(WyJS.lt(r0, r2, false)){
               control_flow_pc = 1737;
               control_flow_repeat = true;
               continue outer;
            }
         case 1736:
            var r3 = new WyJS.Integer(1);
            return r3;//return %3 : int
            control_flow_pc = 1738;
            control_flow_repeat = true;
            continue outer;//goto label1738
         case 1737:
            return r0;//return %0 : int
         case 1738:
      }
   }
}

function f(r0){//function(int) -> [int]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = g(r0);//invoke %1 = (%0) ConstrainedList_Valid_5:g : function(int) -> int
            var r2 = new WyJS.List([r1]);
            return r2;//return %2 : [int]
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
            var r3 = new WyJS.Integer(0);
            var r2 = f(r3);//invoke %2 = (%3) ConstrainedList_Valid_5:f : function(int) -> [int]
            var r1 = r2.clone();//assign %1 = %2  : [int]
            var r0 = r1.clone();//assign %0 = %1  : [int]
            var r4 = new WyJS.Integer(1);
            var r5 = new WyJS.List([r4]);
            if(WyJS.equals(r0, r5, true)){
               control_flow_pc = 1739;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1739:
      }
   }
}

