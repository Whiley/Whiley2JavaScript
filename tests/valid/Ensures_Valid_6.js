function abs$_9bF5J720WABW2(r0){//function(int) -> int|null
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = new WyJS.Integer(0);
            if(WyJS.lt(r0, r1, false)){
               control_flow_pc = 1836;
               control_flow_repeat = true;
               continue outer;
            }
            return r0;//return %0 : null|int
            control_flow_pc = 1837;
            control_flow_repeat = true;
            continue outer;//goto label1837
         case 1836:
            var r2 = null;
            return r2;//return %2 : null|int
         case 1837:
            return;
      }
   }
}

function test$1A_7VkE(){//method() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = new WyJS.Integer(1);
            var r0 = abs$_9bF5J720WABW2(r1);//invoke %0 = (%1) Ensures_Valid_6:abs : function(int) -> int|null
            var r2 = new WyJS.Integer(1);
            if(WyJS.equals(r0, r2, true)){
               control_flow_pc = 1838;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1838:
            var r4 = new WyJS.Integer(1);
            var r5 = r4.neg();//neg %5 = %4 : int
            var r3 = abs$_9bF5J720WABW2(r5);//invoke %3 = (%5) Ensures_Valid_6:abs : function(int) -> int|null
            var r6 = null;
            if(WyJS.equals(r3, r6, true)){
               control_flow_pc = 1839;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1839:
            return;
      }
   }
}

