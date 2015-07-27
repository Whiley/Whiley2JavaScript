function index(r0, r1){//function(Access_Valid_2:liststr,int) -> any
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r2 = r0.getValue(r1);
            return r2;//return %2 : any
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
            var r3 = new WyJS.Integer(1);
            var r4 = new WyJS.Integer(2);
            var r5 = new WyJS.Integer(3);
            var r6 = new WyJS.List([r3, r4, r5]);
            var r2 = r6.clone();//assign %2 = %6  : [int]
            var r0 = r2.clone();//assign %0 = %2  : [int]
            var r8 = new WyJS.Integer(0);
            var r7 = index(r0, r8);//invoke %7 = (%0, %8) Access_Valid_2:index : function(Access_Valid_2:liststr,int) -> any
            var r9 = new WyJS.Integer(1);
            if(WyJS.equals(r7, r9, true)){
               control_flow_pc = 501;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 501:
            var r11 = new WyJS.Integer(1);
            var r10 = index(r0, r11);//invoke %10 = (%0, %11) Access_Valid_2:index : function(Access_Valid_2:liststr,int) -> any
            var r12 = new WyJS.Integer(2);
            if(WyJS.equals(r10, r12, true)){
               control_flow_pc = 502;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 502:
            var r14 = new WyJS.Integer(2);
            var r13 = index(r0, r14);//invoke %13 = (%0, %14) Access_Valid_2:index : function(Access_Valid_2:liststr,int) -> any
            var r15 = new WyJS.Integer(3);
            if(WyJS.equals(r13, r15, true)){
               control_flow_pc = 503;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 503:
            var r17 = new WyJS.List([72,101,108,108,111,32,87,111,114,108,100]);
            var r16 = r17.clone();//assign %16 = %17  : [int+]
            var r1 = r16.clone();//assign %1 = %16  : [int]
            var r19 = new WyJS.Integer(0);
            var r18 = index(r1, r19);//invoke %18 = (%1, %19) Access_Valid_2:index : function(Access_Valid_2:liststr,int) -> any
            var r20 = new WyJS.Integer(72);
            if(WyJS.equals(r18, r20, true)){
               control_flow_pc = 504;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 504:
            var r22 = new WyJS.Integer(1);
            var r21 = index(r1, r22);//invoke %21 = (%1, %22) Access_Valid_2:index : function(Access_Valid_2:liststr,int) -> any
            var r23 = new WyJS.Integer(101);
            if(WyJS.equals(r21, r23, true)){
               control_flow_pc = 505;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 505:
            var r25 = new WyJS.Integer(2);
            var r24 = index(r1, r25);//invoke %24 = (%1, %25) Access_Valid_2:index : function(Access_Valid_2:liststr,int) -> any
            var r26 = new WyJS.Integer(108);
            if(WyJS.equals(r24, r26, true)){
               control_flow_pc = 506;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 506:
      }
   }
}

