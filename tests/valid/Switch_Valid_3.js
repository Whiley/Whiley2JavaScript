function f$Z9bFaA$0D5Wz(r0){//function(int[]) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r4 = new WyJS.Integer(0);
            var r5 = r0.getValue(r4);
            var r3 = r5;//assign %3 = %5  : int
            var r1 = r3;//assign %1 = %3  : int
            if(WyJS.equals(r1, new WyJS.Integer(78), true)){
               control_flow_pc = 1307;
               control_flow_repeat = true;
               continue outer;
            }
             else if(WyJS.equals(r1, new WyJS.Integer(66), true)){
               control_flow_pc = 1308;
               control_flow_repeat = true;
               continue outer;
            }
             else if(WyJS.equals(r1, new WyJS.Integer(82), true)){
               control_flow_pc = 1309;
               control_flow_repeat = true;
               continue outer;
            }
             else if(WyJS.equals(r1, new WyJS.Integer(81), true)){
               control_flow_pc = 1310;
               control_flow_repeat = true;
               continue outer;
            }
             else if(WyJS.equals(r1, new WyJS.Integer(75), true)){
               control_flow_pc = 1311;
               control_flow_repeat = true;
               continue outer;
            }
            else{
               control_flow_pc = 1306;
               control_flow_repeat = true;
               continue outer;
            }
         case 1307:
            var r7 = new WyJS.Integer(1);
            var r2 = r7;//assign %2 = %7  : int
            control_flow_pc = 1312;
            control_flow_repeat = true;
            continue outer;//goto label1312
         case 1308:
            var r8 = new WyJS.Integer(2);
            var r2 = r8;//assign %2 = %8  : int
            control_flow_pc = 1312;
            control_flow_repeat = true;
            continue outer;//goto label1312
         case 1309:
            var r9 = new WyJS.Integer(3);
            var r2 = r9;//assign %2 = %9  : int
            control_flow_pc = 1312;
            control_flow_repeat = true;
            continue outer;//goto label1312
         case 1310:
            var r10 = new WyJS.Integer(4);
            var r2 = r10;//assign %2 = %10  : int
            control_flow_pc = 1312;
            control_flow_repeat = true;
            continue outer;//goto label1312
         case 1311:
            var r11 = new WyJS.Integer(5);
            var r2 = r11;//assign %2 = %11  : int
            control_flow_pc = 1312;
            control_flow_repeat = true;
            continue outer;//goto label1312
         case 1306:
            var r12 = new WyJS.Integer(6);
            var r2 = r12;//assign %2 = %12  : int
            control_flow_pc = 1312;
            control_flow_repeat = true;
            continue outer;//goto label1312
         case 1312:
            return r2;//return %2 : int
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
            var r1 = new WyJS.Array([new WyJS.Integer(78)], new WyJS.Type.Array(new WyJS.Type.Int()));
            var r0 = f$Z9bFaA$0D5Wz(r1);//invoke %0 = (%1) Switch_Valid_3:f : function(int[]) -> int
            var r2 = new WyJS.Integer(1);
            if(WyJS.equals(r0, r2, true)){
               control_flow_pc = 1313;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1313:
            var r4 = new WyJS.Array([new WyJS.Integer(66)], new WyJS.Type.Array(new WyJS.Type.Int()));
            var r3 = f$Z9bFaA$0D5Wz(r4);//invoke %3 = (%4) Switch_Valid_3:f : function(int[]) -> int
            var r5 = new WyJS.Integer(2);
            if(WyJS.equals(r3, r5, true)){
               control_flow_pc = 1314;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1314:
            var r7 = new WyJS.Array([new WyJS.Integer(82)], new WyJS.Type.Array(new WyJS.Type.Int()));
            var r6 = f$Z9bFaA$0D5Wz(r7);//invoke %6 = (%7) Switch_Valid_3:f : function(int[]) -> int
            var r8 = new WyJS.Integer(3);
            if(WyJS.equals(r6, r8, true)){
               control_flow_pc = 1315;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1315:
            var r10 = new WyJS.Array([new WyJS.Integer(81)], new WyJS.Type.Array(new WyJS.Type.Int()));
            var r9 = f$Z9bFaA$0D5Wz(r10);//invoke %9 = (%10) Switch_Valid_3:f : function(int[]) -> int
            var r11 = new WyJS.Integer(4);
            if(WyJS.equals(r9, r11, true)){
               control_flow_pc = 1316;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1316:
            var r13 = new WyJS.Array([new WyJS.Integer(75)], new WyJS.Type.Array(new WyJS.Type.Int()));
            var r12 = f$Z9bFaA$0D5Wz(r13);//invoke %12 = (%13) Switch_Valid_3:f : function(int[]) -> int
            var r14 = new WyJS.Integer(5);
            if(WyJS.equals(r12, r14, true)){
               control_flow_pc = 1317;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1317:
            var r16 = new WyJS.Array([new WyJS.Integer(101)], new WyJS.Type.Array(new WyJS.Type.Int()));
            var r15 = f$Z9bFaA$0D5Wz(r16);//invoke %15 = (%16) Switch_Valid_3:f : function(int[]) -> int
            var r17 = new WyJS.Integer(6);
            if(WyJS.equals(r15, r17, true)){
               control_flow_pc = 1318;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1318:
            var r19 = new WyJS.Array([new WyJS.Integer(49)], new WyJS.Type.Array(new WyJS.Type.Int()));
            var r18 = f$Z9bFaA$0D5Wz(r19);//invoke %18 = (%19) Switch_Valid_3:f : function(int[]) -> int
            var r20 = new WyJS.Integer(6);
            if(WyJS.equals(r18, r20, true)){
               control_flow_pc = 1319;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1319:
            return;
      }
   }
}

