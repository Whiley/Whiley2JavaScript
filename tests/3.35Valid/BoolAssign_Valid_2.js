function test(){//method() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r3 = true;
            r2 = r3;//assign %2 = %3  : bool
            r0 = r2;//assign %0 = %2  : bool
            var r5 = false;
            r4 = r5;//assign %4 = %5  : bool
            r1 = r4;//assign %1 = %4  : bool
            var r6 = true;
            if(r0 === r6){
               control_flow_pc = 2006;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 2007;
            control_flow_repeat = true;
            continue outer;//goto label2007
         case 2006:
            var r7 = true;
            if(r0 === r7){
               control_flow_pc = 2008;
               control_flow_repeat = true;
               continue outer;
            }
         case 2007:
            var r8 = false;
            control_flow_pc = 2009;
            control_flow_repeat = true;
            continue outer;//goto label2009
         case 2008:
            var r8 = true;
         case 2009:
            var r9 = true;
            if(r8 === r9){
               control_flow_pc = 2010;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2010:
            var r10 = true;
            if(r0 === r10){
               control_flow_pc = 2011;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 2012;
            control_flow_repeat = true;
            continue outer;//goto label2012
         case 2011:
            var r11 = true;
            if(r1 === r11){
               control_flow_pc = 2013;
               control_flow_repeat = true;
               continue outer;
            }
         case 2012:
            var r12 = false;
            control_flow_pc = 2014;
            control_flow_repeat = true;
            continue outer;//goto label2014
         case 2013:
            var r12 = true;
         case 2014:
            var r13 = false;
            if(r12 === r13){
               control_flow_pc = 2015;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2015:
            var r14 = true;
            if(r1 === r14){
               control_flow_pc = 2016;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 2017;
            control_flow_repeat = true;
            continue outer;//goto label2017
         case 2016:
            var r15 = true;
            if(r0 === r15){
               control_flow_pc = 2018;
               control_flow_repeat = true;
               continue outer;
            }
         case 2017:
            var r16 = false;
            control_flow_pc = 2019;
            control_flow_repeat = true;
            continue outer;//goto label2019
         case 2018:
            var r16 = true;
         case 2019:
            var r17 = false;
            if(r16 === r17){
               control_flow_pc = 2020;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2020:
            var r18 = true;
            if(r1 === r18){
               control_flow_pc = 2021;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 2022;
            control_flow_repeat = true;
            continue outer;//goto label2022
         case 2021:
            var r19 = true;
            if(r1 === r19){
               control_flow_pc = 2023;
               control_flow_repeat = true;
               continue outer;
            }
         case 2022:
            var r20 = false;
            control_flow_pc = 2024;
            control_flow_repeat = true;
            continue outer;//goto label2024
         case 2023:
            var r20 = true;
         case 2024:
            var r21 = false;
            if(r20 === r21){
               control_flow_pc = 2025;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2025:
            var r22 = true;
            if(r1 === r22){
               control_flow_pc = 2026;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 2027;
            control_flow_repeat = true;
            continue outer;//goto label2027
         case 2026:
            throw {name: 'Assert Failed', message: 'fail'}
         case 2027:
            var r23 = true;
            if(r0 === r23){
               control_flow_pc = 2028;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 2029;
            control_flow_repeat = true;
            continue outer;//goto label2029
         case 2028:
            control_flow_pc = 2030;
            control_flow_repeat = true;
            continue outer;//goto label2030
         case 2029:
            throw {name: 'Assert Failed', message: 'fail'}
         case 2030:
      }
   }
}

