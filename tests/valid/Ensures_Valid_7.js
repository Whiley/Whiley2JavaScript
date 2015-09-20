function abs$_9bFaA$0J70CW2(r0){//function(int|null) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            if(WyJS.is(r0, new WyJS.Type.Int())){
               control_flow_pc = 1697;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 1698;
            control_flow_repeat = true;
            continue outer;//goto label1698
         case 1697:
            var r1 = new WyJS.Integer(0);
            if(WyJS.lt(r0, r1, false)){
               control_flow_pc = 1699;
               control_flow_repeat = true;
               continue outer;
            }
            return r0;//return %0 : int
            control_flow_pc = 1700;
            control_flow_repeat = true;
            continue outer;//goto label1700
         case 1699:
            var r2 = r0.neg();//neg %2 = %0 : int
            return r2;//return %2 : int
         case 1700:
            control_flow_pc = 1701;
            control_flow_repeat = true;
            continue outer;//goto label1701
         case 1698:
            var r3 = new WyJS.Integer(0);
            return r3;//return %3 : int
         case 1701:
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
               control_flow_pc = 1702;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1702:
            var r4 = new WyJS.Integer(1);
            var r5 = r4.neg();//neg %5 = %4 : int
            var r3 = abs$_9bFaA$0J70CW2(r5);//invoke %3 = (%5) Ensures_Valid_7:abs : function(int|null) -> int
            var r6 = new WyJS.Integer(1);
            if(WyJS.equals(r3, r6, true)){
               control_flow_pc = 1703;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1703:
            var r8 = null;
            var r7 = abs$_9bFaA$0J70CW2(r8);//invoke %7 = (%8) Ensures_Valid_7:abs : function(int|null) -> int
            var r9 = new WyJS.Integer(0);
            if(WyJS.equals(r7, r9, true)){
               control_flow_pc = 1704;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1704:
            return;
      }
   }
}

