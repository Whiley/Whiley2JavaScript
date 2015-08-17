function abs$_9bFaA$0J70CW2(r0){//function(int|null) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            if(WyJS.is(r0, new WyJS.Type.Int())){
               control_flow_pc = 1832;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 1833;
            control_flow_repeat = true;
            continue outer;//goto label1833
         case 1832:
            var r1 = new WyJS.Integer(0);
            if(WyJS.lt(r0, r1, false)){
               control_flow_pc = 1834;
               control_flow_repeat = true;
               continue outer;
            }
            return r0;//return %0 : int
            control_flow_pc = 1835;
            control_flow_repeat = true;
            continue outer;//goto label1835
         case 1834:
            var r2 = r0.neg();//neg %2 = %0 : int
            return r2;//return %2 : int
         case 1835:
            control_flow_pc = 1836;
            control_flow_repeat = true;
            continue outer;//goto label1836
         case 1833:
            var r3 = new WyJS.Integer(0);
            return r3;//return %3 : int
         case 1836:
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
            var r0 = abs$_9bFaA$0J70CW2(r1);//invoke %0 = (%1) Ensures_Valid_7:abs : function(int|null) -> int
            var r2 = new WyJS.Integer(1);
            if(WyJS.equals(r0, r2, true)){
               control_flow_pc = 1837;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1837:
            var r4 = new WyJS.Integer(1);
            var r5 = r4.neg();//neg %5 = %4 : int
            var r3 = abs$_9bFaA$0J70CW2(r5);//invoke %3 = (%5) Ensures_Valid_7:abs : function(int|null) -> int
            var r6 = new WyJS.Integer(1);
            if(WyJS.equals(r3, r6, true)){
               control_flow_pc = 1838;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1838:
            var r8 = null;/n            var r7 = abs$_9bFaA$0J70CW2(r8);//invoke %7 = (%8) Ensures_Valid_7:abs : function(int|null) -> int
            var r9 = new WyJS.Integer(0);
            if(WyJS.equals(r7, r9, true)){
               control_flow_pc = 1839;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1839:
      }
   }
}

