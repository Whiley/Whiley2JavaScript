function f$b9bFaJ533sNJFWJq4a$(r0){//function(int[]) -> !(int|null)
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            return r0;//return %0 : !(null|int)
            return;
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
            var r1 = new WyJS.List([new WyJS.Integer(72), new WyJS.Integer(101), new WyJS.Integer(108), new WyJS.Integer(108), new WyJS.Integer(111), new WyJS.Integer(32), new WyJS.Integer(87), new WyJS.Integer(111), new WyJS.Integer(114), new WyJS.Integer(108), new WyJS.Integer(100)], new WyJS.Type.List(new WyJS.Type.Int()));
            var r0 = f$b9bFaJ533sNJFWJq4a$(r1);//invoke %0 = (%1) NegationType_Valid_4:f : function(int[]) -> !(int|null)
            var r2 = new WyJS.List([new WyJS.Integer(72), new WyJS.Integer(101), new WyJS.Integer(108), new WyJS.Integer(108), new WyJS.Integer(111), new WyJS.Integer(32), new WyJS.Integer(87), new WyJS.Integer(111), new WyJS.Integer(114), new WyJS.Integer(108), new WyJS.Integer(100)], new WyJS.Type.List(new WyJS.Type.Int()));
            if(WyJS.equals(r0, r2, true)){
               control_flow_pc = 1691;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1691:
            return;
      }
   }
}

