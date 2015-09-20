function f$Z9bFaA$0D5Wz(r0){//function(int[]) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            if(WyJS.equals(r0, new WyJS.List([], new WyJS.Type.List(new WyJS.Type.Void())), true)){
               control_flow_pc = 1247;
               control_flow_repeat = true;
               continue outer;
            }
             else if(WyJS.equals(r0, new WyJS.List([new WyJS.Integer(1)], new WyJS.Type.List(new WyJS.Type.Int())), true)){
               control_flow_pc = 1248;
               control_flow_repeat = true;
               continue outer;
            }
            else{
               control_flow_pc = 1246;
               control_flow_repeat = true;
               continue outer;
            }
         case 1247:
            var r1 = new WyJS.Integer(0);
            return r1;//return %1 : int
            control_flow_pc = 1246;
            control_flow_repeat = true;
            continue outer;//goto label1246
         case 1248:
            var r2 = new WyJS.Integer(1);
            var r3 = r2.neg();//neg %3 = %2 : int
            return r3;//return %3 : int
            control_flow_pc = 1246;
            control_flow_repeat = true;
            continue outer;//goto label1246
         case 1246:
            var r4 = new WyJS.Integer(10);
            return r4;//return %4 : int
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
            var r1 = new WyJS.Integer(0);
            var r2 = new WyJS.Integer(0);
            var r3 = WyJS.ListGen(r1, r2, new WyJS.Type.List(new WyJS.Type.Int()));
            var r0 = f$Z9bFaA$0D5Wz(r3);//invoke %0 = (%3) Switch_Valid_12:f : function(int[]) -> int
            var r4 = new WyJS.Integer(0);
            if(WyJS.equals(r0, r4, true)){
               control_flow_pc = 1249;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1249:
            var r6 = new WyJS.Integer(1);
            var r7 = new WyJS.List([r6], new WyJS.Type.List(new WyJS.Type.Int()));
            var r5 = f$Z9bFaA$0D5Wz(r7);//invoke %5 = (%7) Switch_Valid_12:f : function(int[]) -> int
            var r8 = new WyJS.Integer(1);
            var r9 = r8.neg();//neg %9 = %8 : int
            if(WyJS.equals(r5, r9, true)){
               control_flow_pc = 1250;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1250:
            var r11 = new WyJS.Integer(3);
            var r12 = new WyJS.List([r11], new WyJS.Type.List(new WyJS.Type.Int()));
            var r10 = f$Z9bFaA$0D5Wz(r12);//invoke %10 = (%12) Switch_Valid_12:f : function(int[]) -> int
            var r13 = new WyJS.Integer(10);
            if(WyJS.equals(r10, r13, true)){
               control_flow_pc = 1251;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1251:
            var r15 = new WyJS.Integer(1);
            var r16 = new WyJS.Integer(2);
            var r17 = new WyJS.Integer(3);
            var r18 = new WyJS.List([r15, r16, r17], new WyJS.Type.List(new WyJS.Type.Int()));
            var r14 = f$Z9bFaA$0D5Wz(r18);//invoke %14 = (%18) Switch_Valid_12:f : function(int[]) -> int
            var r19 = new WyJS.Integer(10);
            if(WyJS.equals(r14, r19, true)){
               control_flow_pc = 1252;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1252:
            return;
      }
   }
}

