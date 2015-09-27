function indexOf$a9dF5141KFVY0t1Is2(r0, r1){//function(int[],int) -> int|null
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r4 = new WyJS.Integer(0);
            var r3 = r4;//assign %3 = %4  : int
            var r2 = r3;//assign %2 = %3  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case -2:
            var r6 = r0.length();//lengthof %6 = %0 : int[]
            if(WyJS.gt(r2, r6, true)){
               control_flow_pc = 657;
               control_flow_repeat = true;
               continue outer;
            }
            var r7 = r0.getValue(r2);
            if(WyJS.equals(r7, r1, false)){
               control_flow_pc = 658;
               control_flow_repeat = true;
               break;
            }
            else{
               control_flow_pc = -3;
               control_flow_repeat = true;
               break;
            }
         case -3:
            return r2;//return %2 : null|int
            control_flow_pc = 658;
            control_flow_repeat = true;
            break;
         case 658:
            var r8 = new WyJS.Integer(1);
            var r9 = r2.add(r8);//add %9 = %2, %8 : int
            var r2 = r9;//assign %2 = %9  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case 657:
            var r10 = null;
            return r10;//return %10 : null|int
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
            var r3 = new WyJS.Integer(3);
            var r4 = new WyJS.List([r1, r2, r3], new WyJS.Type.List(new WyJS.Type.Int()));
            var r5 = new WyJS.Integer(1);
            var r0 = indexOf$a9dF5141KFVY0t1Is2(r4, r5);//invoke %0 = (%4, %5) While_Valid_24:indexOf : function(int[],int) -> int|null
            var r6 = new WyJS.Integer(0);
            if(WyJS.equals(r0, r6, true)){
               control_flow_pc = 659;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 659:
            var r8 = new WyJS.Integer(1);
            var r9 = new WyJS.Integer(2);
            var r10 = new WyJS.Integer(3);
            var r11 = new WyJS.List([r8, r9, r10], new WyJS.Type.List(new WyJS.Type.Int()));
            var r12 = new WyJS.Integer(0);
            var r7 = indexOf$a9dF5141KFVY0t1Is2(r11, r12);//invoke %7 = (%11, %12) While_Valid_24:indexOf : function(int[],int) -> int|null
            var r13 = null;
            if(WyJS.equals(r7, r13, true)){
               control_flow_pc = 660;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 660:
            return;
      }
   }
}

