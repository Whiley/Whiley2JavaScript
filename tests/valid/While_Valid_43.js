function add$Z9dFXWYl$1Ms(r0, r1){//function(int[],int) -> int[]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r5 = new WyJS.Integer(0);
            var r4 = r5;//assign %4 = %5  : int
            var r2 = r4;//assign %2 = %4  : int
            var r6 = r0.clone(new WyJS.Type.Int());//assign %6 = %0  : int[]
            var r3 = r6.clone(new WyJS.Type.Int());//assign %3 = %6  : int[]
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case -2:
            var r15 = r0.length();//lengthof %15 = %0 : int[]
            if(WyJS.gt(r2, r15, true)){
               control_flow_pc = 790;
               control_flow_repeat = true;
               continue outer;
            }
            var r16 = r3.getValue(r2);
            var r17 = r16.add(r1);//add %17 = %16, %1 : int
            var r18 = r3.getValue(r2);
            var r19 = r18.add(r1);//add %19 = %18, %1 : int
            r0.setValue(r2, r19);
            var r20 = new WyJS.Integer(1);
            var r21 = r2.add(r20);//add %21 = %2, %20 : int
            var r2 = r21;//assign %2 = %21  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case 790:
            return r0;//return %0 : int[]
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
            var r2 = new WyJS.Integer(1);
            var r3 = new WyJS.Integer(2);
            var r4 = new WyJS.Integer(3);
            var r5 = new WyJS.Integer(4);
            var r6 = new WyJS.List([r2, r3, r4, r5], new WyJS.Type.List(new WyJS.Type.Int()));
            var r1 = r6.clone(new WyJS.Type.Int());//assign %1 = %6  : int[]
            var r0 = r1.clone(new WyJS.Type.Int());//assign %0 = %1  : int[]
            var r8 = new WyJS.Integer(1);
            var r7 = add$Z9dFXWYl$1Ms(r0, r8);//invoke %7 = (%0, %8) While_Valid_43:add : function(int[],int) -> int[]
            var r9 = new WyJS.Integer(2);
            var r10 = new WyJS.Integer(3);
            var r11 = new WyJS.Integer(4);
            var r12 = new WyJS.Integer(5);
            var r13 = new WyJS.List([r9, r10, r11, r12], new WyJS.Type.List(new WyJS.Type.Int()));
            if(WyJS.equals(r7, r13, true)){
               control_flow_pc = 791;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 791:
            var r15 = new WyJS.Integer(11);
            var r14 = add$Z9dFXWYl$1Ms(r0, r15);//invoke %14 = (%0, %15) While_Valid_43:add : function(int[],int) -> int[]
            var r16 = new WyJS.Integer(12);
            var r17 = new WyJS.Integer(13);
            var r18 = new WyJS.Integer(14);
            var r19 = new WyJS.Integer(15);
            var r20 = new WyJS.List([r16, r17, r18, r19], new WyJS.Type.List(new WyJS.Type.Int()));
            if(WyJS.equals(r14, r20, true)){
               control_flow_pc = 792;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 792:
            return;
      }
   }
}

