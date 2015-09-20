function f$Y9bFXA$W(r0){//function(int) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            if(WyJS.equals(r0, new WyJS.Integer(1380206665), true)){
               control_flow_pc = 2081;
               control_flow_repeat = true;
               continue outer;
            }
             else if(WyJS.equals(r0, new WyJS.Integer(1145980233), true)){
               control_flow_pc = 2082;
               control_flow_repeat = true;
               continue outer;
            }
             else if(WyJS.equals(r0, new WyJS.Integer(1163152464), true)){
               control_flow_pc = 2083;
               control_flow_repeat = true;
               continue outer;
            }
             else if(WyJS.equals(r0, new WyJS.Integer(1935231088), true)){
               control_flow_pc = 2084;
               control_flow_repeat = true;
               continue outer;
            }
             else if(WyJS.equals(r0, new WyJS.Integer(1162692980), true)){
               control_flow_pc = 2085;
               control_flow_repeat = true;
               continue outer;
            }
            else{
               control_flow_pc = 2080;
               control_flow_repeat = true;
               continue outer;
            }
         case 2081:
            var r1 = new WyJS.Integer(1);
            return r1;//return %1 : int
            control_flow_pc = 2086;
            control_flow_repeat = true;
            continue outer;//goto label2086
         case 2082:
            var r2 = new WyJS.Integer(2);
            return r2;//return %2 : int
            control_flow_pc = 2086;
            control_flow_repeat = true;
            continue outer;//goto label2086
         case 2083:
            var r3 = new WyJS.Integer(3);
            return r3;//return %3 : int
            control_flow_pc = 2086;
            control_flow_repeat = true;
            continue outer;//goto label2086
         case 2084:
            var r4 = new WyJS.Integer(4);
            return r4;//return %4 : int
            control_flow_pc = 2086;
            control_flow_repeat = true;
            continue outer;//goto label2086
         case 2085:
            var r5 = new WyJS.Integer(5);
            return r5;//return %5 : int
            control_flow_pc = 2086;
            control_flow_repeat = true;
            continue outer;//goto label2086
         case 2080:
            var r6 = new WyJS.Integer(6);
            return r6;//return %6 : int
            control_flow_pc = 2086;
            control_flow_repeat = true;
            continue outer;//goto label2086
         case 2086:
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
            var r1 = new WyJS.Integer(1380206665);
            var r0 = f$Y9bFXA$W(r1);//invoke %0 = (%1) Switch_Valid_5:f : function(int) -> int
            var r2 = new WyJS.Integer(1);
            if(WyJS.equals(r0, r2, true)){
               control_flow_pc = 2087;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2087:
            var r4 = new WyJS.Integer(1145980233);
            var r3 = f$Y9bFXA$W(r4);//invoke %3 = (%4) Switch_Valid_5:f : function(int) -> int
            var r5 = new WyJS.Integer(2);
            if(WyJS.equals(r3, r5, true)){
               control_flow_pc = 2088;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2088:
            var r7 = new WyJS.Integer(1163152464);
            var r6 = f$Y9bFXA$W(r7);//invoke %6 = (%7) Switch_Valid_5:f : function(int) -> int
            var r8 = new WyJS.Integer(3);
            if(WyJS.equals(r6, r8, true)){
               control_flow_pc = 2089;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2089:
            var r10 = new WyJS.Integer(1935231088);
            var r9 = f$Y9bFXA$W(r10);//invoke %9 = (%10) Switch_Valid_5:f : function(int) -> int
            var r11 = new WyJS.Integer(4);
            if(WyJS.equals(r9, r11, true)){
               control_flow_pc = 2090;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2090:
            var r13 = new WyJS.Integer(1162692980);
            var r12 = f$Y9bFXA$W(r13);//invoke %12 = (%13) Switch_Valid_5:f : function(int) -> int
            var r14 = new WyJS.Integer(5);
            if(WyJS.equals(r12, r14, true)){
               control_flow_pc = 2091;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2091:
            return;
      }
   }
}

