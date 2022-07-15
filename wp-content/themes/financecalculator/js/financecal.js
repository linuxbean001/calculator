var financecal = jQuery.noConflict();
financecal(document).ready(function(){
    var calinfo = {}; 
financecal(document).on('click','.step1 .btn-next',function(){
   var name = '';
   var email= ''; 
   var phone = ''; 
   var lastname = '';
   var fullname = '';
   name  = financecal('.firstname').val();
   lastname  = financecal('.lastname').val();
   phone = financecal('.phone').val();
    email = financecal('.email').val();
 
   if(name == ''){
       financecal('.firstname').css('border','1px solid red');
   }else{
       financecal('.firstname').css('border','1px solid #cfcfcf');
   }
   if(lastname == ''){
       financecal('.lastname').css('border','1px solid red');
   }else{
       financecal('.lastname').css('border','1px solid #cfcfcf');
   }
    if(phone == ''){
       financecal('.phone').css('border','1px solid red');
   }else{
       financecal('.phone').css('border','1px solid #cfcfcf');
   }
   if(email == ''){
       financecal('.email').css('border','1px solid red');
   }else{
        if(!ValidateEmail(email)){
            
           financecal('.email').css('border','1px solid red');
        }else{
            
           financecal('.email').css('border','1px solid #cfcfcf');  
           
        }
       
   }
   
   if(name!='' && lastname!='' && email!='' && phone != '' && ValidateEmail(email)){
       
   
             calinfo.customerinfo = {
                 name:name,
                 lastname:lastname,
                 email:email,
                 phone:phone
             } 
           
       
         
         console.log(calinfo); 
           financecal('.stp2').addClass('active'); 
           financecal('.step1').css({
                  display: 'none',
                  opacity: '0',
            });
            
           financecal('.step2').css({
                  transform: `translate3d(0, 0, 0)`,
                  opacity: '1',
                  display:'flex',
                  positiohn:'relative'
            });         
   }
   
}); 
financecal(document).on('click','.step2 .btn-next',function(){
  var selectedprogram = financecal('#program').val();
  calinfo.program = selectedprogram;
  financecal('.stp3').addClass('active');
 financecal('.step2').css({
                  display: 'none',
                  opacity: '0',
            });
            
           financecal('.step3').css({
                  transform: `translate3d(0, 0, 0)`,
                  opacity: '1',
                  display:'flex',
                  positiohn:'relative'
            });   
    
});  

financecal(document).on('click','.step3 .btn-next',function(){
  var jobtimedata = financecal('.jobtime').val();
  if(jobtimedata != ''){
  calinfo.jobtime =jobtimedata ;
  console.log(calinfo); 
  financecal('.stp4').addClass('active');
 financecal('.step3').css({
                  display: 'none',
                  opacity: '0',
            });
            
           financecal('.step4').css({
                  transform: `translate3d(0, 0, 0)`,
                  opacity: '1',
                  display:'flex',
                  positiohn:'relative'
            });   
  }
});  

financecal(document).on('click','.step4 .btn-next',function(){
  var statustax = financecal('.statustax').val();
  if(statustax != ''){
  calinfo.statustax =statustax ;
  console.log(calinfo); 
  financecal('.stp5').addClass('active');
 financecal('.step4').css({
                  display: 'none',
                  opacity: '0',
            });
            
           financecal('.step5').css({
                  transform: `translate3d(0, 0, 0)`,
                  opacity: '1',
                  display:'flex',
                  positiohn:'relative'
            });   
  }
}); 

financecal(document).on('click','.step5 .btn-next',function(){
  var statuscitizen = financecal('.statuscitizenship').val();
  if(statuscitizen != ''){
  calinfo.statuscitizenship =statuscitizen;
  console.log(calinfo); 
  financecal('.stp6').addClass('active');
 financecal('.step5').css({
                  display: 'none',
                  opacity: '0',
            });
            
           financecal('.step6').css({
                  transform: `translate3d(0, 0, 0)`,
                  opacity: '1',
                  display:'flex',
                  positiohn:'relative'
            });   
  }
}); 


financecal(document).on('click','.step6 .btn-next',function(){
  var age = financecal('#age').val();
  calinfo.age = age;
  console.log(calinfo);
  financecal('.stp7').addClass('active');
 financecal('.step6').css({
                  display: 'none',
                  opacity: '0',
            });
            
           financecal('.step7').css({
                  transform: `translate3d(0, 0, 0)`,
                  opacity: '1',
                  display:'flex',
                  positiohn:'relative'
            });   
    
});


financecal(document).on('click','.step7 .btn-next',function(){
  var household_dependents = financecal('#household_dependents').val();
  calinfo.household_dependents = household_dependents;
  console.log(calinfo);
  financecal('.stp8').addClass('active');
 financecal('.step7').css({
                  display: 'none',
                  opacity: '0',
            });
            
           financecal('.step8').css({
                  transform: `translate3d(0, 0, 0)`,
                  opacity: '1',
                  display:'flex',
                  positiohn:'relative'
            });   
    
});

financecal(document).on('click','.step8 .btn-next',function(){
  var household_dependentsclg = financecal('#household_dependentsclg').val();

  calinfo.household_collage_or_schools = household_dependentsclg;
  console.log(calinfo);
  financecal('.stp9').addClass('active');
 financecal('.step8').css({
                  display: 'none',
                  opacity: '0',
            });
            
           financecal('.step9').css({
                  transform: `translate3d(0, 0, 0)`,
                  opacity: '1',
                  display:'flex',
                  positiohn:'relative'
            });   
    
});


financecal(document).on('click','.step9 .btn-next',function(){
  var household_income = financecal('#household_income').val();
if(household_income!='' && !isNaN(household_income)){
  calinfo.household_income = household_income;
  console.log(calinfo);
  financecal('.stp10').addClass('active');
 financecal('.step9').css({
                  display: 'none',
                  opacity: '0',
            });
            
           financecal('.step10').css({
                  transform: `translate3d(0, 0, 0)`,
                  opacity: '1',
                  display:'flex',
                  positiohn:'relative'
            });  
    } 
    
});

financecal(document).on('click','.step10 .btn-next',function(){
  var state = financecal('#state').val();


  calinfo.state = state;
  console.log(calinfo);
  financecal('.stp10').addClass('active');
  financecal('div.prog').text(calinfo.program);
  financecal('div.progstat').text(calinfo.jobtime);
  financecal('div.tfstat').text(calinfo.statustax);
  financecal('div.age_d').text(calinfo.age);
  financecal('div.citistat').text(calinfo.statuscitizenship);
  financecal('div.noh').text(calinfo.household_dependents);
  financecal('div.cnoh').text(calinfo.household_collage_or_schools);
  financecal('div.hincome').text('$ '+calinfo.household_income);
  financecal('div.stated').text(calinfo.state);
  financecal('div.nm').text(calinfo.customerinfo.name+' '+calinfo.customerinfo.lastname );
  financecal('div.em').text(calinfo.customerinfo.email);
  financecal('div.ph').text(calinfo.customerinfo.phone);
 financecal('div.classabc').text(calinfo.classabc);
 financecal('.step10').css({
                  display: 'none',
                  opacity: '0',
            });
            
           financecal('.step11').css({
                  transform: `translate3d(0, 0, 0)`,
                  opacity: '1',
                  display:'flex',
                  positiohn:'relative'
            });  
     
    
}); 


financecal(document).on('click','.step11 .btn-next',function(){
    
  var  state= calinfo.state;
	var House_size= calinfo.household_dependents;
	var Income= calinfo.household_income;
	var grade= calinfo.household_collage_or_schools;
	var married_single= calinfo.statustax;
	var	f= calinfo.jobtime;
	var age= calinfo.age;
		
	var i=calinfo.program;
	//var abc = document.getElementById('a2').value;
	var ABC='B';
//	alert(ABC);
		
 var efc=Family_contribution_income(state,House_size,Income,married_single,age,grade ,ABC);
    console.log(efc+'EFC');
		
/* CALL THE FUNCTION */
	var	program=program_list_credit(i);
		console.log('programme',program);
	//	alert(program);
	var	halfFull=full_half(f);
	var	total_cost=Tution_cost(program,halfFull);
	var	scholar_amnt=scholarship(efc);

	var	final_calc=max_Subsidized_loan(scholar_amnt,program,f);
	console.log('FINAL CALC'+final_calc);
	
	    financecal('div.prog2').text(calinfo.program);
	    //alert(f);
	    if(f == "Full time Student (9 credis or more)")
	    {
	        jQuery("#optionsRadios1").attr("checked","true");
	        //jQuery("#optionsRadios2").attr("checked","false");
	    }
	     else 
	     {
	         if(f == 'Part Time (5-8 Credits)')
	    {
	        jQuery("#optionsRadios2").attr("checked","true");
	        //jQuery("#optionsRadios1").attr("checked","false");
	    }
	    
	         
	     }
	    
	    document.getElementById('p11').innerHTML=halfFull;
	    
		document.getElementById('a2').innerHTML=program;
		document.getElementById('a1').innerHTML=halfFull;

		document.getElementById('a3').innerHTML='$1660';
		document.getElementById('a4').innerHTML='$1660';

		document.getElementById('a5').innerHTML=total_cost.h;
		document.getElementById('a6').innerHTML=total_cost.p;

		document.getElementById('a7').innerHTML=scholar_amnt+'%';
		document.getElementById('a8').innerHTML=scholar_amnt+'%';

	var	A9=Math.round(total_cost.h*(scholar_amnt/100));
	var	A10=Math.round(total_cost.p*(scholar_amnt/100));
		document.getElementById('a9').innerHTML=A9;
		document.getElementById('a10').innerHTML=A10;

	var	A11=total_cost.h-A9;
	var	A12=total_cost.p-A10;
		document.getElementById('a11').innerHTML=A11;
		document.getElementById('a12').innerHTML=A12;

	var	A13=Math.min(A11,20500);
		document.getElementById('a13').innerHTML=A13;
		document.getElementById('a14').innerHTML=final_calc;

		document.getElementById('a15').innerHTML=A11-A13;
		document.getElementById('a16').innerHTML=A12-final_calc;

		document.getElementById('a17').innerHTML=Math.round(efc);	
//////////

 financecal('.step11').css({
                  display: 'none',
                  opacity: '0',
            });
            
           financecal('.step12').css({
                  transform: `translate3d(0, 0, 0)`,
                  opacity: '1',
                  display:'flex',
                  positiohn:'relative'
            });  
     
    
});

// financecal(document).on('click','.step11 .btn-next',function(){
//       var ajaxurl = financecal('#ajurl').val();
//         financecal.ajax({
//               method:'post',
//               url:ajaxurl,
//               data:{
//                 action:'linux_submit_finance_details',
//                 calinfo:calinfo
//               },
//               success:function(response){
//                 console.log(response);
//               // window.location.href = 'https://odeskthemes.com/58/financecalculator/'; 
//                  financecal('.step11').css({
//                   display: 'none',
//                   opacity: '0',
//             });
                
         
           
//           financecal('.step12').css({
//                   transform: `translate3d(0, 0, 0)`,
//                   opacity: '1',
//                   display:'flex',
//                   positiohn:'relative'
//             });  
//               } 

//         });
//       //  window.location.href = 'https://odeskthemes.com/58/financecalculator/'; 
     
    
// });    

    
financecal(document).on('click','.timejob',function(){
var timecred = '';
timecred = financecal(this).find('label').text();
financecal('.jobtime').val(timecred);
    
});    
financecal(document).on('click','.taxstatus',function(){
var statustx = '';
statustx = financecal(this).find('label').text();
financecal('.statustax').val(statustx);
    
});

financecal(document).on('click','.citizenshipstatus',function(){
var citizenshipstatus = '';
citizenshipstatus = financecal(this).find('label').text();
financecal('.statuscitizenship').val(citizenshipstatus);
    
}); 

financecal(document).on('click','.step2 .btn-prev',function(){

  financecal('.stp2').removeClass('active');
 financecal('.step2').css({
                  display: 'none',
                  opacity: '0',
            });
            
           financecal('.step1').css({
                  transform: `translate3d(0, 0, 0)`,
                  opacity: '1',
                  display:'flex',
                  positiohn:'relative'
            });   
  
});
financecal(document).on('click','.step3 .btn-prev',function(){

  financecal('.stp3').removeClass('active');
 financecal('.step3').css({
                  display: 'none',
                  opacity: '0',
            });
            
           financecal('.step2').css({
                  transform: `translate3d(0, 0, 0)`,
                  opacity: '1',
                  display:'flex',
                  positiohn:'relative'
            });   
  
});

financecal(document).on('click','.step4 .btn-prev',function(){

  financecal('.stp4').removeClass('active');
 financecal('.step4').css({
                  display: 'none',
                  opacity: '0',
            });
            
           financecal('.step3').css({
                  transform: `translate3d(0, 0, 0)`,
                  opacity: '1',
                  display:'flex',
                  positiohn:'relative'
            });   
  
}); 

financecal(document).on('click','.step5 .btn-prev',function(){

  financecal('.stp5').removeClass('active');
 financecal('.step5').css({
                  display: 'none',
                  opacity: '0',
            });
            
           financecal('.step4').css({
                  transform: `translate3d(0, 0, 0)`,
                  opacity: '1',
                  display:'flex',
                  positiohn:'relative'
            });   
  
}); 
financecal(document).on('click','.step6 .btn-prev',function(){

  financecal('.stp6').removeClass('active');
 financecal('.step6').css({
                  display: 'none',
                  opacity: '0',
            });
            
           financecal('.step5').css({
                  transform: `translate3d(0, 0, 0)`,
                  opacity: '1',
                  display:'flex',
                  positiohn:'relative'
            });   
  
}); 
financecal(document).on('click','.step7 .btn-prev',function(){

  financecal('.stp7').removeClass('active');
 financecal('.step7').css({
                  display: 'none',
                  opacity: '0',
            });
            
           financecal('.step6').css({
                  transform: `translate3d(0, 0, 0)`,
                  opacity: '1',
                  display:'flex',
                  positiohn:'relative'
            });   
  
}); 

financecal(document).on('click','.step8 .btn-prev',function(){

  financecal('.stp8').removeClass('active');
 financecal('.step8').css({
                  display: 'none',
                  opacity: '0',
            });
            
           financecal('.step7').css({
                  transform: `translate3d(0, 0, 0)`,
                  opacity: '1',
                  display:'flex',
                  positiohn:'relative'
            });   
  
}); 

financecal(document).on('click','.step9 .btn-prev',function(){

  financecal('.stp9').removeClass('active');
 financecal('.step9').css({
                  display: 'none',
                  opacity: '0',
            });
            
           financecal('.step8').css({
                  transform: `translate3d(0, 0, 0)`,
                  opacity: '1',
                  display:'flex',
                  positiohn:'relative'
            });   
  
}); 

financecal(document).on('click','.step10 .btn-prev',function(){

  financecal('.stp10').removeClass('active');
 financecal('.step10').css({
                  display: 'none',
                  opacity: '0',
            });
            
           financecal('.step9').css({
                  transform: `translate3d(0, 0, 0)`,
                  opacity: '1',
                  display:'flex',
                  positiohn:'relative'
            });   
  
}); 

financecal(document).on('click','.step11 .btn-prev',function(){

  financecal('.stp11').removeClass('active');
 financecal('.step11').css({
                  display: 'none',
                  opacity: '0',
            });
            
           financecal('.step10').css({
                  transform: `translate3d(0, 0, 0)`,
                  opacity: '1',
                  display:'flex',
                  positiohn:'relative'
            });   
  
}); 
    
});

function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}
