function sum$Z9dFas1FVYGs(r0, r1){//function(int[],int) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r2 = r0.length();//lengthof %2 = %0 : int[]
            if(WyJS.equals(r1, r2, false)){
               control_flow_pc = 6;
               control_flow_repeat = true;
               continue outer;
            }
            var r3 = new WyJS.Integer(0);
            return r3;//return %3 : int
            control_flow_pc = 7;
            control_flow_repeat = true;
            continue outer;//goto label7
         case 6:
            var r4 = r0.getValue(r1);
            var r6 = new WyJS.Integer(1);
            var r7 = r1.add(r6);//add %7 = %1, %6 : int
            var r5 = sum$Z9dFas1FVYGs(r0, r7);//invoke %5 = (%0, %7) Main:sum : function(int[],int) -> int
            var r8 = r4.add(r5);//add %8 = %4, %5 : int
            return r8;//return %8 : int
         case 7:
            return;
      }
   }
}

function reverse$Z9bF1D527RWz(r0){//function(int[]) -> int[]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r5 = new WyJS.Integer(0);
            var r4 = r5;//assign %4 = %5  : int
            var r1 = r4;//assign %1 = %4  : int
            var r7 = r0.length();//lengthof %7 = %0 : int[]
            var r6 = r7;//assign %6 = %7  : int
            var r2 = r6;//assign %2 = %6  : int
            var r8 = r0.clone(new WyJS.Type.Int());//assign %8 = %0  : int[]
            var r3 = r8.clone(new WyJS.Type.Int());//assign %3 = %8  : int[]
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case -2:
            if(WyJS.gt(r1, r2, true)){
               control_flow_pc = 14;
               control_flow_repeat = true;
               continue outer;
            }
            var r19 = new WyJS.Integer(1);
            var r20 = r2.sub(r19);//sub %20 = %2, %19 : int
            var r2 = r20;//assign %2 = %20  : int
            var r21 = r0.getValue(r2);
            var r22 = r0.getValue(r2);
            r3.setValue(r1, r22);
            var r23 = r0.getValue(r1);
            var r24 = r0.getValue(r1);
            r3.setValue(r2, r24);
            var r25 = new WyJS.Integer(1);
            var r26 = r1.add(r25);//add %26 = %1, %25 : int
            var r1 = r26;//assign %1 = %26  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case 14:
            return r3;//return %3 : int[]
            return;
      }
   }
}