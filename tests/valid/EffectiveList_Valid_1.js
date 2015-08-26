function f$Ncm8ZWY001RB9cFgv1IV12(r0){//function([int]) -> [null|bool]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r4 = new WyJS.List([], new WyJS.Type.List(new WyJS.Type.Void()));
            var r3 = r4.clone(new WyJS.Type.Void());//assign %3 = %4  : [void]
            var r1 = r3.clone(new WyJS.Type.Union([new WyJS.Type.Null(), new WyJS.Type.Bool()]));//assign %1 = %3  : [null|bool]
            var r6 = new WyJS.Integer(0);
            var r5 = r6;//assign %5 = %6  : int
            var r2 = r5;//assign %2 = %5  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case -2:
            var r7 = r0.length();//lengthof %7 = %0 : [int]
            if(WyJS.gt(r2, r7, true)){
               control_flow_pc = 1287;
               control_flow_repeat = true;
               continue outer;
            }
            var r8 = r0.getValue(r2);
            var r9 = new WyJS.Integer(0);
            if(WyJS.gt(r8, r9, true)){
               control_flow_pc = 1288;
               control_flow_repeat = true;
               break;
            }
            else{
               control_flow_pc = -3;
               control_flow_repeat = true;
               break;
            }
         case -3:
            var r10 = true;
            var r11 = new WyJS.List([r10], new WyJS.Type.List(new WyJS.Type.Bool()));
            var r12 = r1.append(r11);
            var r1 = r12.clone(new WyJS.Type.Union([new WyJS.Type.Null(), new WyJS.Type.Bool()]));//assign %1 = %12  : [null|bool]
            control_flow_pc = 1289;
            control_flow_repeat = true;
            continue outer;//goto label1289
            control_flow_pc = 1289;
            control_flow_repeat = true;
            break;
         case 1288:
            var r13 = null;
            var r14 = new WyJS.List([r13], new WyJS.Type.List(new WyJS.Type.Null()));
            var r15 = r1.append(r14);
            var r1 = r15.clone(new WyJS.Type.Union([new WyJS.Type.Null(), new WyJS.Type.Bool()]));//assign %1 = %15  : [null|bool]
            control_flow_pc = 1289;
            control_flow_repeat = true;
            break;
         case 1289:
            var r16 = new WyJS.Integer(1);
            var r17 = r2.add(r16);//add %17 = %2, %16 : int
            var r2 = r17;//assign %2 = %17  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case 1287:
            return r1;//return %1 : [null|bool]
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
            var r2 = new WyJS.List([], new WyJS.Type.List(new WyJS.Type.Void()));
            var r1 = r2.clone(new WyJS.Type.Void());//assign %1 = %2  : [void]
            var r0 = r1.clone(new WyJS.Type.Int());//assign %0 = %1  : [int]
            var r3 = f$Ncm8ZWY001RB9cFgv1IV12(r0);//invoke %3 = (%0) EffectiveList_Valid_1:f : function([int]) -> [null|bool]
            var r4 = new WyJS.List([], new WyJS.Type.List(new WyJS.Type.Void()));
            if(WyJS.equals(r3, r4, true)){
               control_flow_pc = 1290;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1290:
            var r5 = new WyJS.Integer(1);
            var r6 = new WyJS.Integer(2);
            var r7 = new WyJS.Integer(3);
            var r8 = new WyJS.Integer(4);
            var r9 = new WyJS.List([r5, r6, r7, r8], new WyJS.Type.List(new WyJS.Type.Int()));
            var r0 = r9.clone(new WyJS.Type.Int());//assign %0 = %9  : [int]
            var r10 = f$Ncm8ZWY001RB9cFgv1IV12(r0);//invoke %10 = (%0) EffectiveList_Valid_1:f : function([int]) -> [null|bool]
            var r11 = null;
            var r12 = null;
            var r13 = null;
            var r14 = null;
            var r15 = new WyJS.List([r11, r12, r13, r14], new WyJS.Type.List(new WyJS.Type.Null()));
            if(WyJS.equals(r10, r15, true)){
               control_flow_pc = 1291;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1291:
            return;
      }
   }
}

