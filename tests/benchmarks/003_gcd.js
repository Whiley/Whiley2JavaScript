function gcd$Y9dFXc_k0$B$$2$n$kM$R5$Y0$O2$i0FN$F631(r0, r1){//function(003_gcd:nat,003_gcd:nat) -> 003_gcd:nat
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r2 = new WyJS.Integer(0);
            if(WyJS.equals(r0, r2, false)){
               control_flow_pc = 7;
               control_flow_repeat = true;
               continue outer;
            }
            return r1;//return %1 : int
         case 7:
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case -2:
            var r4 = new WyJS.Integer(0);
            if(WyJS.equals(r1, r4, true)){
               control_flow_pc = 9;
               control_flow_repeat = true;
               continue outer;
            }
            if(WyJS.lt(r0, r1, true)){
               control_flow_pc = 10;
               control_flow_repeat = true;
               break;
            }
            else{
               control_flow_pc = -3;
               control_flow_repeat = true;
               break;
            }
         case -3:
            var r5 = r0.sub(r1);//sub %5 = %0, %1 : int
            var r0 = r5;//assign %0 = %5  : int
            control_flow_pc = 11;
            control_flow_repeat = true;
            continue outer;//goto label11
            control_flow_pc = 11;
            control_flow_repeat = true;
            break;
         case 10:
            var r6 = r1.sub(r0);//sub %6 = %1, %0 : int
            var r1 = r6;//assign %1 = %6  : int
            control_flow_pc = 11;
            control_flow_repeat = true;
            break;
         case 11:
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case 9:
            return r0;//return %0 : int
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
            var r1 = new WyJS.Integer(2);
            var r2 = new WyJS.Integer(10);
            var r0 = gcd$Y9dFXc_k0$B$$2$n$kM$R5$Y0$O2$i0FN$F631(r1, r2);//invoke %0 = (%1, %2) 003_gcd:gcd : function(003_gcd:nat,003_gcd:nat) -> 003_gcd:nat
            var r3 = new WyJS.Integer(2);
            if(WyJS.equals(r0, r3, true)){
               control_flow_pc = 12;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 12:
            var r5 = new WyJS.Integer(879);
            var r6 = new WyJS.Integer(234);
            var r4 = gcd$Y9dFXc_k0$B$$2$n$kM$R5$Y0$O2$i0FN$F631(r5, r6);//invoke %4 = (%5, %6) 003_gcd:gcd : function(003_gcd:nat,003_gcd:nat) -> 003_gcd:nat
            var r7 = new WyJS.Integer(3);
            if(WyJS.equals(r4, r7, true)){
               control_flow_pc = 13;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 13:
            var r9 = new WyJS.Integer(4314);
            var r10 = new WyJS.Integer(600);
            var r8 = gcd$Y9dFXc_k0$B$$2$n$kM$R5$Y0$O2$i0FN$F631(r9, r10);//invoke %8 = (%9, %10) 003_gcd:gcd : function(003_gcd:nat,003_gcd:nat) -> 003_gcd:nat
            var r11 = new WyJS.Integer(6);
            if(WyJS.equals(r8, r11, true)){
               control_flow_pc = 14;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 14:
            return;
      }
   }
}

