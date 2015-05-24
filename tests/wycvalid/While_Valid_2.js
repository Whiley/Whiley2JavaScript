function binarySearch(r0, r1){//function([int],int) -> bool
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r6 = 0;//const %6 = 0 : int
            var r5 = r6;//assign %5 = %6  : int
            var r2 = r5;//assign %2 = %5  : int
            var r8 = r0.length;
            var r7 = r8;//assign %7 = %8  : int
            var r3 = r7;//assign %3 = %7  : int
            var control_flow_repeat0 = true;
            var control_flow_pc0 = -1;
            outer0:
            while(control_flow_repeat0){
               while(true){
                  control_flow_repeat0 = false
                  switch(control_flow_pc0){
                     case -1 :
                        var r9 = 0;//const %9 = 0 : int
                        if(r9  >  r2){
                           control_flow_pc0 = 8;
                           control_flow_0 = true;
                           continue outer0;
                        }
                        var r10 = r0.length;
                        if(r3  >  r10){
                           control_flow_pc0 = 8;
                           control_flow_0 = true;
                           continue outer0;
                        }
                        if(r2  <=  r3){
                           control_flow_pc0 = 9;
                           control_flow_0 = true;
                           continue outer0;
                        }
                     case 8:
                        throw {name: 'Assert Failed', message: 'fail'}
                     case 9:
                        var r12 = 0;//const %12 = 0 : int
                        var r13 =                         var control_flow_repeat0 = true;
                        var control_flow_pc0 = -1;
                        outer0:
                        while(control_flow_repeat0){
                           while(true){
                              control_flow_repeat0 = false
                              switch(control_flow_pc0){
                                 case -1 :
                                    var r14 = r0[r11];
                                    if(r14  ==  r1){
                                       control_flow_pc0 = 10;
                                       control_flow_0 = true;
                                       continue outer0;
                                    }
                              }
                           }
                        }
                        control_flow_pc = 11;
                        control_flow_repeat = true;
                        continue outer;
                     case 10:
                        throw {name: 'Assert Failed', message: 'fail'}
                     case 11:
                        var r16 = r0.length;
                        var r17 =                         var control_flow_repeat1 = true;
                        var control_flow_pc1 = -1;
                        outer1:
                        while(control_flow_repeat1){
                           while(true){
                              control_flow_repeat1 = false
                              switch(control_flow_pc1){
                                 case -1 :
                                    var r18 = r0[r15];
                                    if(r18  ==  r1){
                                       control_flow_pc1 = 12;
                                       control_flow_1 = true;
                                       continue outer1;
                                    }
                              }
                           }
                        }
                        control_flow_pc = 13;
                        control_flow_repeat = true;
                        continue outer;
                     case 12:
                        throw {name: 'Assert Failed', message: 'fail'}
                     case 13:
                        if(r2  >=  r3){
                           control_flow_pc = 14;
                           control_flow_repeat = true;
                           continue outer;
                        }
                        var r20 = r2 + r3;//add %20 = %2, %3 : int
                        var r21 = 2;//const %21 = 2 : int
                        var r22 = r20 / r21;//div %22 = %20, %21 : int
                        var r19 = r22;//assign %19 = %22  : int
                        var r4 = r19;//assign %4 = %19  : int
                        var r23 = r0[r4];
                        if(r23  >=  r1){
                           control_flow_pc = 15;
                           control_flow_repeat = true;
                           continue outer;
                        }
                        var r24 = 1;//const %24 = 1 : int
                        var r25 = r4 + r24;//add %25 = %4, %24 : int
                        var r2 = r25;//assign %2 = %25  : int
                        control_flow_pc = 16;
                        control_flow_repeat = true;
                        continue outer;
                     case 15:
                        var r26 = r0[r4];
                        if(r26  <=  r1){
                           control_flow_pc = 17;
                           control_flow_repeat = true;
                           continue outer;
                        }
                        var r3 = r4;//assign %3 = %4  : int
                        control_flow_pc = 16;
                        control_flow_repeat = true;
                        continue outer;
                     case 17:
                        var r27 = true;//const %27 = true : bool
                        return r27;//return %27 : bool
                     case 16:
                  }
               }
            }
         case 14:
            var r28 = false;//const %28 = false : bool
            return r28;//return %28 : bool
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
            var r2 = 3;//const %2 = 3 : int
            var r3 = 5;//const %3 = 5 : int
            var r4 = 6;//const %4 = 6 : int
            var r5 = 9;//const %5 = 9 : int
            var r6 = [r2, r3, r4, r5];
            var r1 = r6;//assign %1 = %6  : [int]
            var r0 = r1;//assign %0 = %1  : [int]
            var r8 = 0;//const %8 = 0 : int
            var r7 = binarySearch(r0, r8);
            var r9 = false;//const %9 = false : bool
            if(r7  ==  r9){
               control_flow_pc = 18;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 18:
            var r11 = 1;//const %11 = 1 : int
            var r10 = binarySearch(r0, r11);
            var r12 = false;//const %12 = false : bool
            if(r10  ==  r12){
               control_flow_pc = 19;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 19:
            var r14 = 2;//const %14 = 2 : int
            var r13 = binarySearch(r0, r14);
            var r15 = false;//const %15 = false : bool
            if(r13  ==  r15){
               control_flow_pc = 20;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 20:
            var r17 = 3;//const %17 = 3 : int
            var r16 = binarySearch(r0, r17);
            var r18 = true;//const %18 = true : bool
            if(r16  ==  r18){
               control_flow_pc = 21;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 21:
            var r20 = 4;//const %20 = 4 : int
            var r19 = binarySearch(r0, r20);
            var r21 = false;//const %21 = false : bool
            if(r19  ==  r21){
               control_flow_pc = 22;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 22:
            var r23 = 5;//const %23 = 5 : int
            var r22 = binarySearch(r0, r23);
            var r24 = true;//const %24 = true : bool
            if(r22  ==  r24){
               control_flow_pc = 23;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 23:
            var r26 = 6;//const %26 = 6 : int
            var r25 = binarySearch(r0, r26);
            var r27 = true;//const %27 = true : bool
            if(r25  ==  r27){
               control_flow_pc = 24;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 24:
            var r29 = 7;//const %29 = 7 : int
            var r28 = binarySearch(r0, r29);
            var r30 = false;//const %30 = false : bool
            if(r28  ==  r30){
               control_flow_pc = 25;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 25:
            var r32 = 8;//const %32 = 8 : int
            var r31 = binarySearch(r0, r32);
            var r33 = false;//const %33 = false : bool
            if(r31  ==  r33){
               control_flow_pc = 26;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 26:
            var r35 = 9;//const %35 = 9 : int
            var r34 = binarySearch(r0, r35);
            var r36 = true;//const %36 = true : bool
            if(r34  ==  r36){
               control_flow_pc = 27;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 27:
            var r38 = 10;//const %38 = 10 : int
            var r37 = binarySearch(r0, r38);
            var r39 = false;//const %39 = false : bool
            if(r37  ==  r39){
               control_flow_pc = 28;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 28:
      }
   }
}

test();
