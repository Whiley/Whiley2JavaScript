function g$Z9bF1D527oH$4$B1Vu$kC$52$u$7C$T2$r$sA$g1Vk$VC$H2$m$sA$kl$kB$Z2$Q$kC$12$uy2(r0){//function([Function_Valid_8:fr6nat]) -> [Function_Valid_8:fr6nat]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r4 = new WyJS.List([], new WyJS.Type.List(new WyJS.Type.Void()));
            var r3 = r4.clone(new WyJS.Type.Void());//assign %3 = %4  : [void]
            var r1 = r3.clone(new WyJS.Type.Int());//assign %1 = %3  : [int]
            var r6 = new WyJS.Integer(0);
            var r5 = r6;//assign %5 = %6  : int
            var r2 = r5;//assign %2 = %5  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case -2:
            var r7 = r0.length();//lengthof %7 = %0 : [int]
            if(WyJS.gt(r2, r7, true)){
               control_flow_pc = 1871;
               control_flow_repeat = true;
               continue outer;
            }
            var r8 = r0.getValue(r2);
            var r9 = new WyJS.Integer(1);
            if(WyJS.lt(r8, r9, true)){
               control_flow_pc = 1872;
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
            var r1 = r12.clone(new WyJS.Type.Int());//assign %1 = %12  : [int]
            control_flow_pc = 1872;
            control_flow_repeat = true;
            break;
         case 1872:
            var r13 = new WyJS.Integer(1);
            var r14 = r2.add(r13);//add %14 = %2, %13 : int
            var r2 = r14;//assign %2 = %14  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case 1871:
            return r1;//return %1 : [int]
            return;
      }
   }
}

function f$Z9bF1D527RWz(r0){//function([int]) -> [int]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            return r0;//return %0 : [int]
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
            var r2 = new WyJS.Integer(1);
            var r3 = new WyJS.Integer(2);
            var r4 = new WyJS.Integer(3);
            var r5 = new WyJS.List([r2, r3, r4], new WyJS.Type.List(new WyJS.Type.Int()));
            var r1 = r5.clone(new WyJS.Type.Int());//assign %1 = %5  : [int]
            var r0 = r1.clone(new WyJS.Type.Int());//assign %0 = %1  : [int]
            var r7 = g$Z9bF1D527oH$4$B1Vu$kC$52$u$7C$T2$r$sA$g1Vk$VC$H2$m$sA$kl$kB$Z2$Q$kC$12$uy2(r0);//invoke %7 = (%0) Function_Valid_8:g : function([Function_Valid_8:fr6nat]) -> [Function_Valid_8:fr6nat]
            var r6 = f$Z9bF1D527RWz(r7);//invoke %6 = (%7) Function_Valid_8:f : function([int]) -> [int]
            var r8 = new WyJS.Integer(2);
            var r9 = new WyJS.Integer(3);
            var r10 = new WyJS.List([r8, r9], new WyJS.Type.List(new WyJS.Type.Int()));
            if(WyJS.equals(r6, r10, true)){
               control_flow_pc = 1873;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1873:
            return;
      }
   }
}

