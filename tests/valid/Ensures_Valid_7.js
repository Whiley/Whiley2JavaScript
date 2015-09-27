function abs$_9bFaA$0J70CW2(r0){//function(int|null) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            if(WyJS.is(r0, new WyJS.Type.Int())){
               control_flow_pc = 1894;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 1895;
            control_flow_repeat = true;
            continue outer;//goto label1895
         case 1894:
            var r1 = new WyJS.Integer(0);
            if(WyJS.lt(r0, r1, false)){
               control_flow_pc = 1896;
               control_flow_repeat = true;
               continue outer;
            }
            return r0;//return %0 : int
            control_flow_pc = 1897;
            control_flow_repeat = true;
            continue outer;//goto label1897
         case 1896:
            var r2 = r0.neg();//neg %2 = %0 : int
            return r2;//return %2 : int
         case 1897:
            control_flow_pc = 1898;
            control_flow_repeat = true;
            continue outer;//goto label1898
         case 1895:
            var r3 = new WyJS.Integer(0);
            return r3;//return %3 : int
         case 1898:
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
            var r1 = new WyJS.Integer(1);
            var r0 = abs$_9bFaA$0J70CW2(r1);//invoke %0 = (%1) Ensures_Valid_7:abs : function(int|null) -> int
            var r2 = new WyJS.Integer(1);
            if(WyJS.equals(r0, r2, true)){
               control_flow_pc = 1899;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1899:
            var r4 = new WyJS.Integer(1);
            var r5 = r4.neg();//neg %5 = %4 : int
            var r3 = abs$_9bFaA$0J70CW2(r5);//invoke %3 = (%5) Ensures_Valid_7:abs : function(int|null) -> int
            var r6 = new WyJS.Integer(1);
            if(WyJS.equals(r3, r6, true)){
               control_flow_pc = 1900;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1900:
            var r8 = null;
            var r7 = abs$_9bFaA$0J70CW2(r8);//invoke %7 = (%8) Ensures_Valid_7:abs : function(int|null) -> int
            var r9 = new WyJS.Integer(0);
            if(WyJS.equals(r7, r9, true)){
               control_flow_pc = 1901;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1901:
            return;
      }
   }
}

