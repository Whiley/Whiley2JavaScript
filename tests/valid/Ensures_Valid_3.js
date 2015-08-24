function pred$_9bF59$0D5ZAw2(r0){//function([int]) -> bool
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r4 = new WyJS.List([], new WyJS.Type.List(new WyJS.Type.Void()));
            r3 = r4.clone();//assign %3 = %4  : [void]
            r1 = r3.clone();//assign %1 = %3  : [int]
            var r6 = new WyJS.Integer(0);
            var r5 = r6;//assign %5 = %6  : int
            var r2 = r5;//assign %2 = %5  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case -2:
            var r7 = r0.length();//lengthof %7 = %0 : [int]
            if(WyJS.gt(r2, r7, true)){
               control_flow_pc = 1818;
               control_flow_repeat = true;
               continue outer;
            }
            var r8 = r0.getValue(r2);
            var r9 = new WyJS.Integer(0);
            if(WyJS.gt(r8, r9, true)){
               control_flow_pc = 1819;
               control_flow_repeat = true;
               break;
            }
            else{
               control_flow_pc = -3;
               control_flow_repeat = true;
               break;
            }
         case -3:
            var r10 = r0.getValue(r2);
            var r11 = new WyJS.List([r10], new WyJS.Type.List(new WyJS.Type.Int()));
            var r12 = r1.append(r11);
            r1 = r12.clone();//assign %1 = %12  : [int]
            control_flow_pc = 1819;
            control_flow_repeat = true;
            break;
         case 1819:
            var r13 = new WyJS.Integer(1);
            var r14 = r2.add(r13);//add %14 = %2, %13 : int
            var r2 = r14;//assign %2 = %14  : int
         case 1818:
            var r15 = r1.length();//lengthof %15 = %1 : [int]
            var r16 = new WyJS.Integer(0);
            if(WyJS.equals(r15, r16, true)){
               control_flow_pc = 1820;
               control_flow_repeat = true;
               continue outer;
            }
            var r17 = false;
            control_flow_pc = 1821;
            control_flow_repeat = true;
            continue outer;//goto label1821
         case 1820:
            var r17 = true;
         case 1821:
            return r17;//return %17 : bool
      }
   }
}

function countOver$Z9dFas1FVYGs(r0, r1){//function([int],int) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r5 = new WyJS.List([], new WyJS.Type.List(new WyJS.Type.Void()));
            r4 = r5.clone();//assign %4 = %5  : [void]
            r2 = r4.clone();//assign %2 = %4  : [int]
            var r7 = new WyJS.Integer(0);
            var r6 = r7;//assign %6 = %7  : int
            var r3 = r6;//assign %3 = %6  : int
            control_flow_pc = -4;
            control_flow_repeat = true;
            break;
         case -4:
            var r8 = r0.length();//lengthof %8 = %0 : [int]
            if(WyJS.gt(r3, r8, true)){
               control_flow_pc = 1823;
               control_flow_repeat = true;
               continue outer;
            }
            var r9 = r0.getValue(r3);
            if(WyJS.lt(r9, r1, true)){
               control_flow_pc = 1824;
               control_flow_repeat = true;
               break;
            }
            else{
               control_flow_pc = -5;
               control_flow_repeat = true;
               break;
            }
         case -5:
            var r10 = r0.getValue(r3);
            var r11 = new WyJS.List([r10], new WyJS.Type.List(new WyJS.Type.Int()));
            var r12 = r2.append(r11);
            r2 = r12.clone();//assign %2 = %12  : [int]
            control_flow_pc = 1824;
            control_flow_repeat = true;
            break;
         case 1824:
            var r13 = new WyJS.Integer(1);
            var r14 = r3.add(r13);//add %14 = %3, %13 : int
            var r3 = r14;//assign %3 = %14  : int
         case 1823:
            var r15 = r2.length();//lengthof %15 = %2 : [int]
            return r15;//return %15 : int
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
            var r4 = new WyJS.Integer(1);
            var r5 = new WyJS.Integer(2);
            var r6 = new WyJS.Integer(3);
            var r7 = new WyJS.Integer(4);
            var r8 = new WyJS.List([r4, r5, r6, r7], new WyJS.Type.List(new WyJS.Type.Int()));
            var r9 = new WyJS.Integer(1);
            var r3 = countOver$Z9dFas1FVYGs(r8, r9);//invoke %3 = (%8, %9) Ensures_Valid_3:countOver : function([int],int) -> int
            var r2 = r3;//assign %2 = %3  : int
            var r0 = r2;//assign %0 = %2  : int
            var r12 = new WyJS.Integer(1);
            var r13 = new WyJS.Integer(2);
            var r14 = new WyJS.Integer(3);
            var r15 = new WyJS.Integer(4);
            var r16 = new WyJS.List([r12, r13, r14, r15], new WyJS.Type.List(new WyJS.Type.Int()));
            var r17 = new WyJS.Integer(3);
            var r11 = countOver$Z9dFas1FVYGs(r16, r17);//invoke %11 = (%16, %17) Ensures_Valid_3:countOver : function([int],int) -> int
            var r10 = r11;//assign %10 = %11  : int
            var r1 = r10;//assign %1 = %10  : int
            var r18 = new WyJS.Integer(3);
            if(WyJS.equals(r0, r18, true)){
               control_flow_pc = 1825;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1825:
            var r19 = new WyJS.Integer(1);
            if(WyJS.equals(r1, r19, true)){
               control_flow_pc = 1826;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1826:
      }
   }
}

