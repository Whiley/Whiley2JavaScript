function g$Z9bF1D527RWz(r0){//function([int]) -> [int]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = new WyJS.Integer(1);
            var r2 = r1.neg();//neg %2 = %1 : int
            var r3 = new WyJS.List([r2], new WyJS.Type.List(new WyJS.Type.Int()));
            var r4 = r0.append(r3);
            return r4;//return %4 : [int]
            return;
      }
   }
}

function f$_9bF5D537oHN4$c1Vw$$D$92VX$7D$e2Vk$VC$a2Vj$k9$12$q$7C$72Vj$N5$ZW$cB$k2$s$FiAw2(r0){//function(TypeEquals_Valid_32:expr) -> [int]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            if(WyJS.is(r0, new WyJS.Type.List(new WyJS.Type.Int()))){
               control_flow_pc = 1025;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 1026;
            control_flow_repeat = true;
            continue outer;//goto label1026
         case 1025:
            var r3 = g$Z9bF1D527RWz(r0);//invoke %3 = (%0) TypeEquals_Valid_32:g : function([int]) -> [int]
            var r2 = r3.clone(new WyJS.Type.Int());//assign %2 = %3  : [int]
            var r1 = r2.clone(new WyJS.Type.Int());//assign %1 = %2  : [int]
            return r1;//return %1 : [int]
            control_flow_pc = 1027;
            control_flow_repeat = true;
            continue outer;//goto label1027
         case 1026:
            var r4 = new WyJS.List([], new WyJS.Type.List(new WyJS.Type.Void()));
            return r4;//return %4 : [int]
         case 1027:
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
            var r5 = new WyJS.Integer(4);
            var r6 = new WyJS.List([r2, r3, r4, r5], new WyJS.Type.List(new WyJS.Type.Int()));
            var r1 = r6.clone(new WyJS.Type.Int());//assign %1 = %6  : [int]
            var r0 = r1.clone(new WyJS.Type.Int());//assign %0 = %1  : [int]
            var r7 = f$_9bF5D537oHN4$c1Vw$$D$92VX$7D$e2Vk$VC$a2Vj$k9$12$q$7C$72Vj$N5$ZW$cB$k2$s$FiAw2(r0);//invoke %7 = (%0) TypeEquals_Valid_32:f : function(TypeEquals_Valid_32:expr) -> [int]
            var r8 = new WyJS.Integer(1);
            var r9 = new WyJS.Integer(2);
            var r10 = new WyJS.Integer(3);
            var r11 = new WyJS.Integer(4);
            var r12 = new WyJS.Integer(1);
            var r13 = r12.neg();//neg %13 = %12 : int
            var r14 = new WyJS.List([r8, r9, r10, r11, r13], new WyJS.Type.List(new WyJS.Type.Int()));
            if(WyJS.equals(r7, r14, true)){
               control_flow_pc = 1028;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1028:
            var r16 = false;
            var r15 = f$_9bF5D537oHN4$c1Vw$$D$92VX$7D$e2Vk$VC$a2Vj$k9$12$q$7C$72Vj$N5$ZW$cB$k2$s$FiAw2(r16);//invoke %15 = (%16) TypeEquals_Valid_32:f : function(TypeEquals_Valid_32:expr) -> [int]
            var r17 = new WyJS.List([], new WyJS.Type.List(new WyJS.Type.Void()));
            if(WyJS.equals(r15, r17, true)){
               control_flow_pc = 1029;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1029:
            return;
      }
   }
}

