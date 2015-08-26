function has$_9dF5X1Fs1RB52(r0, r1){//function(int,[int]) -> bool
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r4 = new WyJS.Integer(0);
            var r3 = r4;//assign %3 = %4  : int
            var r2 = r3;//assign %2 = %3  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case -2:
            var r5 = new WyJS.Integer(0);
            if(WyJS.gt(r2, r5, true)){
               control_flow_pc = 2197;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2197:
            return;
            var r6 = r1.length();//lengthof %6 = %1 : [int]
            if(WyJS.gt(r2, r6, true)){
               control_flow_pc = 2198;
               control_flow_repeat = true;
               continue outer;
            }
            var r7 = r1.getValue(r2);
            if(WyJS.equals(r7, r0, false)){
               control_flow_pc = 2199;
               control_flow_repeat = true;
               break;
            }
            else{
               control_flow_pc = -3;
               control_flow_repeat = true;
               break;
            }
         case -3:
            var r8 = true;
            return r8;//return %8 : bool
            control_flow_pc = 2199;
            control_flow_repeat = true;
            break;
         case 2199:
            var r9 = new WyJS.Integer(1);
            var r10 = r2.add(r9);//add %10 = %2, %9 : int
            var r2 = r10;//assign %2 = %10  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case 2198:
            var r11 = false;
            return r11;//return %11 : bool
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
            var r2 = new WyJS.List([new WyJS.Integer(72), new WyJS.Integer(101), new WyJS.Integer(108), new WyJS.Integer(108), new WyJS.Integer(111), new WyJS.Integer(32), new WyJS.Integer(87), new WyJS.Integer(111), new WyJS.Integer(114), new WyJS.Integer(108), new WyJS.Integer(100)], new WyJS.Type.List(new WyJS.Type.Int()));
            var r1 = r2.clone(new WyJS.Type.Int());//assign %1 = %2  : [int+]
            var r0 = r1.clone(new WyJS.Type.Int());//assign %0 = %1  : [int]
            var r4 = new WyJS.Integer(108);
            var r3 = has$_9dF5X1Fs1RB52(r4, r0);//invoke %3 = (%4, %0) String_Valid_2:has : function(int,[int]) -> bool
            var r5 = true;
            if(r3 === r5){
               control_flow_pc = 2200;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2200:
            var r7 = new WyJS.Integer(101);
            var r6 = has$_9dF5X1Fs1RB52(r7, r0);//invoke %6 = (%7, %0) String_Valid_2:has : function(int,[int]) -> bool
            var r8 = true;
            if(r6 === r8){
               control_flow_pc = 2201;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2201:
            var r10 = new WyJS.Integer(104);
            var r9 = has$_9dF5X1Fs1RB52(r10, r0);//invoke %9 = (%10, %0) String_Valid_2:has : function(int,[int]) -> bool
            var r11 = false;
            if(r9 === r11){
               control_flow_pc = 2202;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2202:
            var r13 = new WyJS.Integer(122);
            var r12 = has$_9dF5X1Fs1RB52(r13, r0);//invoke %12 = (%13, %0) String_Valid_2:has : function(int,[int]) -> bool
            var r14 = false;
            if(r12 === r14){
               control_flow_pc = 2203;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2203:
            var r16 = new WyJS.Integer(72);
            var r15 = has$_9dF5X1Fs1RB52(r16, r0);//invoke %15 = (%16, %0) String_Valid_2:has : function(int,[int]) -> bool
            var r17 = true;
            if(r15 === r17){
               control_flow_pc = 2204;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2204:
            return;
      }
   }
}

