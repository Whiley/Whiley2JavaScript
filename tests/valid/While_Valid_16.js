function inc$Z9bF1D527oHk2$i1$o$7C$N2Vm$sA$g1Vk$VC$H2$m$sA$X0$Q5$R2Vk$Viz(r0){//function(While_Valid_16:nat[]) -> While_Valid_16:nat[]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r3 = new WyJS.Integer(0);
            var r2 = r3;//assign %2 = %3  : int
            var r1 = r2;//assign %1 = %2  : int
            control_flow_pc = -3;
            control_flow_repeat = true;
            break;
         case -3:
            var r10 = r0.length();//lengthof %10 = %0 : int[]
            if(WyJS.gt(r1, r10, true)){
               control_flow_pc = 332;
               control_flow_repeat = true;
               continue outer;
            }
            var r11 = r0.getValue(r1);
            var r12 = new WyJS.Integer(1);
            var r13 = r11.add(r12);//add %13 = %11, %12 : int
            var r14 = r0.getValue(r1);
            var r15 = new WyJS.Integer(1);
            var r16 = r14.add(r15);//add %16 = %14, %15 : int
            r0.setValue(r1, r16);
            var r17 = new WyJS.Integer(1);
            var r18 = r1.add(r17);//add %18 = %1, %17 : int
            var r1 = r18;//assign %1 = %18  : int
            control_flow_pc = -3;
            control_flow_repeat = true;
            break;
         case 332:
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
            var r3 = new WyJS.Integer(3);
            var r4 = new WyJS.Integer(5);
            var r5 = new WyJS.Integer(7);
            var r6 = new WyJS.Integer(9);
            var r7 = new WyJS.Integer(11);
            var r8 = new WyJS.Array([r2, r3, r4, r5, r6, r7], new WyJS.Type.Array(new WyJS.Type.Int()));
            var r1 = r8.clone(new WyJS.Type.Int());//assign %1 = %8  : int[]
            var r0 = r1.clone(new WyJS.Type.Int());//assign %0 = %1  : int[]
            var r9 = inc$Z9bF1D527oHk2$i1$o$7C$N2Vm$sA$g1Vk$VC$H2$m$sA$X0$Q5$R2Vk$Viz(r0);//invoke %9 = (%0) While_Valid_16:inc : function(While_Valid_16:nat[]) -> While_Valid_16:nat[]
            var r0 = r9.clone(new WyJS.Type.Int());//assign %0 = %9  : int[]
            var r10 = new WyJS.Integer(2);
            var r11 = new WyJS.Integer(4);
            var r12 = new WyJS.Integer(6);
            var r13 = new WyJS.Integer(8);
            var r14 = new WyJS.Integer(10);
            var r15 = new WyJS.Integer(12);
            var r16 = new WyJS.Array([r10, r11, r12, r13, r14, r15], new WyJS.Type.Array(new WyJS.Type.Int()));
            if(WyJS.equals(r0, r16, true)){
               control_flow_pc = 333;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 333:
            return;
      }
   }
}

