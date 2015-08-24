function update$Z9fFXOP8s0$K0$R$F5$W0$S$J5$U0VK$35$g0FP$F5$U0VB3$g0FP$B6$o0WA$(r0, r1, r2){//function(Update_Valid_2:list,int,int) -> Update_Valid_2:list
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            r0.setValue(r1, r2);
            return r0;//return %0 : [int]
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
            var r2 = new WyJS.Integer(49);
            var r3 = new WyJS.Integer(50);
            var r4 = new WyJS.Integer(51);
            var r5 = new WyJS.List([r2, r3, r4], new WyJS.Type.List(new WyJS.Type.Int()));
            r1 = r5.clone();//assign %1 = %5  : [int]
            r0 = r1.clone();//assign %0 = %1  : [int]
            var r7 = new WyJS.Integer(1);
            var r8 = new WyJS.Integer(0);
            var r6 = update$Z9fFXOP8s0$K0$R$F5$W0$S$J5$U0VK$35$g0FP$F5$U0VB3$g0FP$B6$o0WA$(r0, r7, r8);//invoke %6 = (%0, %7, %8) Update_Valid_2:update : function(Update_Valid_2:list,int,int) -> Update_Valid_2:list
            var r9 = new WyJS.Integer(49);
            var r10 = new WyJS.Integer(0);
            var r11 = new WyJS.Integer(51);
            var r12 = new WyJS.List([r9, r10, r11], new WyJS.Type.List(new WyJS.Type.Int()));
            if(WyJS.equals(r6, r12, true)){
               control_flow_pc = 1330;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1330:
            var r14 = new WyJS.Integer(2);
            var r15 = new WyJS.Integer(0);
            var r13 = update$Z9fFXOP8s0$K0$R$F5$W0$S$J5$U0VK$35$g0FP$F5$U0VB3$g0FP$B6$o0WA$(r0, r14, r15);//invoke %13 = (%0, %14, %15) Update_Valid_2:update : function(Update_Valid_2:list,int,int) -> Update_Valid_2:list
            var r16 = new WyJS.Integer(49);
            var r17 = new WyJS.Integer(50);
            var r18 = new WyJS.Integer(0);
            var r19 = new WyJS.List([r16, r17, r18], new WyJS.Type.List(new WyJS.Type.Int()));
            if(WyJS.equals(r13, r19, true)){
               control_flow_pc = 1331;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1331:
            var r20 = new WyJS.List([72,101,108,108,111,32,87,111,114,108,100]);
            r0 = r20.clone();//assign %0 = %20  : [int+]
            var r22 = new WyJS.Integer(1);
            var r23 = new WyJS.Integer(0);
            var r21 = update$Z9fFXOP8s0$K0$R$F5$W0$S$J5$U0VK$35$g0FP$F5$U0VB3$g0FP$B6$o0WA$(r0, r22, r23);//invoke %21 = (%0, %22, %23) Update_Valid_2:update : function(Update_Valid_2:list,int,int) -> Update_Valid_2:list
            var r24 = new WyJS.Integer(72);
            var r25 = new WyJS.Integer(0);
            var r26 = new WyJS.Integer(108);
            var r27 = new WyJS.Integer(108);
            var r28 = new WyJS.Integer(111);
            var r29 = new WyJS.Integer(32);
            var r30 = new WyJS.Integer(87);
            var r31 = new WyJS.Integer(111);
            var r32 = new WyJS.Integer(114);
            var r33 = new WyJS.Integer(108);
            var r34 = new WyJS.Integer(100);
            var r35 = new WyJS.List([r24, r25, r26, r27, r28, r29, r30, r31, r32, r33, r34], new WyJS.Type.List(new WyJS.Type.Int()));
            if(WyJS.equals(r21, r35, true)){
               control_flow_pc = 1332;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1332:
            var r37 = new WyJS.Integer(2);
            var r38 = new WyJS.Integer(0);
            var r36 = update$Z9fFXOP8s0$K0$R$F5$W0$S$J5$U0VK$35$g0FP$F5$U0VB3$g0FP$B6$o0WA$(r0, r37, r38);//invoke %36 = (%0, %37, %38) Update_Valid_2:update : function(Update_Valid_2:list,int,int) -> Update_Valid_2:list
            var r39 = new WyJS.Integer(72);
            var r40 = new WyJS.Integer(101);
            var r41 = new WyJS.Integer(0);
            var r42 = new WyJS.Integer(108);
            var r43 = new WyJS.Integer(111);
            var r44 = new WyJS.Integer(32);
            var r45 = new WyJS.Integer(87);
            var r46 = new WyJS.Integer(111);
            var r47 = new WyJS.Integer(114);
            var r48 = new WyJS.Integer(108);
            var r49 = new WyJS.Integer(100);
            var r50 = new WyJS.List([r39, r40, r41, r42, r43, r44, r45, r46, r47, r48, r49], new WyJS.Type.List(new WyJS.Type.Int()));
            if(WyJS.equals(r36, r50, true)){
               control_flow_pc = 1333;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1333:
      }
   }
}

