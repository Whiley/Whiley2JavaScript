function gcd$Y9dFXc_$0FI$35$d0VQ2$i0FN$F631(r0, r1){//function(Main:nat,Main:nat) -> Main:nat
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r2 = new WyJS.Integer(0);
            if(WyJS.equals(r0, r2, false)){
               control_flow_pc = 1;
               control_flow_repeat = true;
               continue outer;
            }
            return r1;//return %1 : int
         case 1:
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case -2:
            var r4 = new WyJS.Integer(0);
            if(WyJS.equals(r1, r4, true)){
               control_flow_pc = 3;
               control_flow_repeat = true;
               continue outer;
            }
            if(WyJS.lt(r0, r1, true)){
               control_flow_pc = 4;
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
            control_flow_pc = 5;
            control_flow_repeat = true;
            continue outer;//goto label5
            control_flow_pc = 5;
            control_flow_repeat = true;
            break;
         case 4:
            var r6 = r1.sub(r0);//sub %6 = %1, %0 : int
            var r1 = r6;//assign %1 = %6  : int
            control_flow_pc = 5;
            control_flow_repeat = true;
            break;
         case 5:
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case 3:
            return r0;//return %0 : int
            return;
      }
   }
}