function g$Z9bF1D527oH$4$B1Vu$kC$52$u$7C$T2$r$sA$g1Vk$VC$H2$m$sA$kO$kC$12$uy2(r0){//function(Function_Valid_8:nat[]) -> Function_Valid_8:nat[]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r4 = new WyJS.Integer(0);
            var r5 = r0.length();//lengthof %5 = %0 : int[]
            var r6 = WyJS.ListGen(r4, r5, new WyJS.Type.List(new WyJS.Type.Int()));
            var r3 = r6.clone(new WyJS.Type.Int());//assign %3 = %6  : int[]
            var r1 = r3.clone(new WyJS.Type.Int());//assign %1 = %3  : int[]
            var r8 = new WyJS.Integer(0);
            var r7 = r8;//assign %7 = %8  : int
            var r2 = r7;//assign %2 = %7  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case -2:
            var r12 = r0.length();//lengthof %12 = %0 : int[]
            if(WyJS.gt(r2, r12, true)){
               control_flow_pc = 1928;
               control_flow_repeat = true;
               continue outer;
            }
            var r13 = r0.getValue(r2);
            var r14 = new WyJS.Integer(1);
            if(WyJS.lt(r13, r14, true)){
               control_flow_pc = 1929;
               control_flow_repeat = true;
               break;
            }
            else{
               control_flow_pc = -3;
               control_flow_repeat = true;
               break;
            }
         case -3:
            var r15 = r0.getValue(r2);
            var r16 = r0.getValue(r2);
            r1.setValue(r2, r16);
            control_flow_pc = 1929;
            control_flow_repeat = true;
            break;
         case 1929:
            var r17 = new WyJS.Integer(1);
            var r18 = r2.add(r17);//add %18 = %2, %17 : int
            var r2 = r18;//assign %2 = %18  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case 1928:
            return r1;//return %1 : int[]
            return;
      }
   }
}

function f$Z9bF1D527RWz(r0){//function(int[]) -> int[]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
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
            var r5 = new WyJS.List([r2, r3, r4], new WyJS.Type.List(new WyJS.Type.Int()));
            var r1 = r5.clone(new WyJS.Type.Int());//assign %1 = %5  : int[]
            var r0 = r1.clone(new WyJS.Type.Int());//assign %0 = %1  : int[]
            var r7 = g$Z9bF1D527oH$4$B1Vu$kC$52$u$7C$T2$r$sA$g1Vk$VC$H2$m$sA$kO$kC$12$uy2(r0);//invoke %7 = (%0) Function_Valid_8:g : function(Function_Valid_8:nat[]) -> Function_Valid_8:nat[]
            var r6 = f$Z9bF1D527RWz(r7);//invoke %6 = (%7) Function_Valid_8:f : function(int[]) -> int[]
            var r8 = new WyJS.Integer(0);
            var r9 = new WyJS.Integer(2);
            var r10 = new WyJS.Integer(3);
            var r11 = new WyJS.List([r8, r9, r10], new WyJS.Type.List(new WyJS.Type.Int()));
            if(WyJS.equals(r6, r11, true)){
               control_flow_pc = 1930;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1930:
            return;
      }
   }
}

