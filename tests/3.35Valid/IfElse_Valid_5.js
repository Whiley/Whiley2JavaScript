function getFlag(r0){//function(IfElse_Valid_5:Record) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r3 = r0.fieldLoad("flag");//fieldload %3 = %0 flag : {int flag}
            var r4 = new WyJS.Integer(0);
            if(WyJS.lt(r3, r4, false)){
               control_flow_pc = 246;
               control_flow_repeat = true;
               continue outer;
            }
            var r6 = new WyJS.Integer(1);
            r5 = r6;//assign %5 = %6  : int
            r2 = r5;//assign %2 = %5  : int
            var r7 = r0.fieldLoad("flag");//fieldload %7 = %0 flag : {int flag}
            var r8 = new WyJS.Integer(0);
            if(WyJS.lt(r7, r8, true)){
               control_flow_pc = 247;
               control_flow_repeat = true;
               continue outer;
            }
            return r2;//return %2 : int
         case 247:
            control_flow_pc = 248;
            control_flow_repeat = true;
            continue outer;//goto label248
         case 246:
            var r10 = new WyJS.Integer(0);
            r9 = r10;//assign %9 = %10  : int
            r2 = r9;//assign %2 = %9  : int
            var r11 = new WyJS.Integer(0);
            return r11;//return %11 : int
         case 248:
            var r12 = new WyJS.Integer(1);
            var r13 = r12.neg();//neg %13 = %12 : int
            return r13;//return %13 : int
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
            var r3 = new WyJS.Record(["flag"], [r2], new WyJS.Type.Record(["flag"], '{int flag}'));
            r1 = r3;//assign %1 = %3  : {int flag}
            r0 = r1;//assign %0 = %1  : {int flag}
            var r4 = getFlag(r0);//invoke %4 = (%0) IfElse_Valid_5:getFlag : function(IfElse_Valid_5:Record) -> int
            var r5 = new WyJS.Integer(1);
            if(WyJS.equals(r4, r5, true)){
               control_flow_pc = 249;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 249:
            var r6 = new WyJS.Integer(0);
            var r7 = new WyJS.Record(["flag"], [r6], new WyJS.Type.Record(["flag"], '{int flag}'));
            r0 = r7;//assign %0 = %7  : {int flag}
            var r8 = getFlag(r0);//invoke %8 = (%0) IfElse_Valid_5:getFlag : function(IfElse_Valid_5:Record) -> int
            var r9 = new WyJS.Integer(1);
            var r10 = r9.neg();//neg %10 = %9 : int
            if(WyJS.equals(r8, r10, true)){
               control_flow_pc = 250;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 250:
            var r11 = new WyJS.Integer(1);
            var r12 = r11.neg();//neg %12 = %11 : int
            var r13 = new WyJS.Record(["flag"], [r12], new WyJS.Type.Record(["flag"], '{int flag}'));
            r0 = r13;//assign %0 = %13  : {int flag}
            var r14 = getFlag(r0);//invoke %14 = (%0) IfElse_Valid_5:getFlag : function(IfElse_Valid_5:Record) -> int
            var r15 = new WyJS.Integer(0);
            if(WyJS.equals(r14, r15, true)){
               control_flow_pc = 251;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 251:
      }
   }
}

