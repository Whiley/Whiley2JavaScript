function add$Y9dFXs1Fs2(r0, r1){//function(int,int) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            if(WyJS.equals(r0, r1, false)){
               control_flow_pc = 980;
               control_flow_repeat = true;
               continue outer;
            }
            var r2 = new WyJS.Integer(1);
            return r2;//return %2 : int
            control_flow_pc = 981;
            control_flow_repeat = true;
            continue outer;//goto label981
         case 980:
            var r3 = r0.add(r1);//add %3 = %0, %1 : int
            return r3;//return %3 : int
         case 981:
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
            var r2 = new WyJS.Integer(2);
            var r0 = add$Y9dFXs1Fs2(r1, r2);//invoke %0 = (%1, %2) Ensures_Valid_1:add : function(int,int) -> int
            var r3 = new WyJS.Integer(3);
            if(WyJS.equals(r0, r3, true)){
               control_flow_pc = 982;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 982:
            var r5 = new WyJS.Integer(1);
            var r6 = new WyJS.Integer(1);
            var r4 = add$Y9dFXs1Fs2(r5, r6);//invoke %4 = (%5, %6) Ensures_Valid_1:add : function(int,int) -> int
            var r7 = new WyJS.Integer(1);
            if(WyJS.equals(r4, r7, true)){
               control_flow_pc = 983;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 983:
            return;
      }
   }
}

