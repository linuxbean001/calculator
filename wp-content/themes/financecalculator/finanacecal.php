<?php
/*
Template Name: Finance Calculator
*/
?>
<html lang="en"><head>

<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<title>Bank Street Scholarship Eligibility Calculators</title>


<link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/css/bootstrap.min.css">

<link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/css/all.css">

<link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/css/my_font.css">

<link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/css/style.css">
</head>
<style>
.form-group.form-group.d-flex.align-items-center.justify-content-center.mt-1.mb-0 {
    display: flex;
}
</style>
<body class="" style="">

<header>

<div class="nav-menu">
<div class="container">
<div class="row">
<div class="col-md-12">
<nav class="navbar navbar-expand-lg navbar-light">
<a class="navbar-brand" href="#">Financing your Bank Street Education</a>
<button class="navbar-toggler navbar-toggler_second" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
<i class="fas fa-bars"></i>

</button>
<div class="collapse navbar-collapse" id="navbarSupportedContent">
<ul class="navbar-nav ml-auto">


<li class="nav-item active">
<a class="nav-link " href="#">Apply</a>
</li>
</ul>
</div>
</nav>
</div>
</div>
</div>
</div>

<div class="main-title__alt header__bg">
<div class="container">
<div class="row justify-content-center">
<div class="col-md-11 col-lg-11">
<div class="hero-title  text-center">
<p style="margin-bottom:0"><img src="<?php echo get_template_directory_uri(); ?>/images/congra.png" class="img-fluid" style="width:75%"></p>
<h3>Based on their information you entered you may be eligible for grants from Bank Street  <span>worth up to 30% of your tuition.</span> </h3>

<p>According to the financial profile you provided you may qualify for need-based aid provided by Bank Street. These scholarships can reduce your tuition as much as the percentage provided above. These are funds that you will not be obligated to repay. </p>
<p>To obtain a final estimate of your financial aid package, <a href="#">complete an application </a> to Bank Street and submit your <a href="#">FASFA form</a>. Make sure to include the Bank Street code on your form [INSERT INFO]. The FASFA may also qualify you for up to $20,500 per year in low-interest loans.  </p>

<div class="add-btn pricing-btn_wrap">
<a href="#" data-toggle="modal" data-target="#largeModal" class="btn btn-success">Click here to View Your Financial Plan</a>
</div>

</div>
</div>

</div>
</div>

</div>






<div class="space bg-image">
<div class="container">

<div class="row">
<div class="col-md-12 col-lg-7 ml-auto">
<div class="tuition-title_wrap tuition-title_wrap2 text-center">

<h6><!-- Our advisors are available at <a href="tel:212-652-8722">(212)-652-8722</a> or  <a href="#">finaid@bankstreet.edu</a> to provide you with more information about Bank Street programs and your financial options. <br><a href="#"> Schedule a 1:1 with our team now. -->Our advisors are available at (212)-652-8722 or <a href="#">finaid@bankstreet.edu</a> to provide you with more information about Bank Street programs and your financial options options for financing your education. </h6>


</div>
</div>
</div>









</div>
<div class="banner-img-3">
<img src="<?php echo get_template_directory_uri(); ?>/images/undraw_questions_re_1fy7.svg" width="500" class="img-fluid" alt="#">
</div>

</div>

</header>


<section class="bottom">
<div class="container">

<p>Below we have provided an estimate of your tuition cost after grants/scholarships from Bank Street. You can also estimate your loan amounts and out-of-pocket costs for your selected Bank Street degree. Our financial aid advisors and are here to work with you to develop a more customized plan and to answer any questions you may have. <a href="#">Click here to Schedule a 1:1 conversation today.</a> </p>


</div>




</section>


<div class="modal fade" id="largeModal" tabindex="-1" role="dialog" aria-labelledby="basicModal" style="display: none;" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
       <div class="modal-header">
        <h3 class="model-title">Bank Street Scholarship Eligibility Calculator</h3><h3>
          <input type="hidden" id="ajurl" value="<?php echo admin_url('admin-ajax.php'); ?>">   
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">×</span>
        </button>
      </h3></div>
      <div class="modal-body">
       <div class="container" style="padding:0">
   <div class="meteor-learning-widget-progress progress-bars">
                <div class="meteor-learning-widget-progress-step step stp1 active">1</div>
                <div class="meteor-learning-widget-progress-step stp2 step">2</div>
                <div class="meteor-learning-widget-progress-step stp3 step">3</div>
                <div class="meteor-learning-widget-progress-step stp4 step">4</div>
                <div class="meteor-learning-widget-progress-step stp5 step">5</div>
                <div class="meteor-learning-widget-progress-step stp6 step">6</div>
                <div class="meteor-learning-widget-progress-step stp7 step">7</div>
                <div class="meteor-learning-widget-progress-step stp8 step">8</div>
                <div class="meteor-learning-widget-progress-step stp9 step">9</div>
				 <div class="meteor-learning-widget-progress-step stp10 step">10</div>
            </div>
			
			<div class="meteor-learning-widget-body">
                <form class="form-widget">
                    <div class="fieldset active-first step1">
                        <div class="form-row ">
                            <div class="form-row-col">
							<p>This calculator tool will provide you with a personalized estimate of your eligibility for need-based scholarship support for your selected Bank Street graduate program. To start, please provide your contact information below. This will help the admissions and financial aid team follow up with you for further insight into your financial options to be able to afford a Bank Street education. </p>
							<hr>
                                <div class="form-group">
								
								<div class="grid grid-1 grid-md-2 d-flex align-items-center">
                                        <div class="grid-item ">
                                                <label>First Name:</label>
                                    <div class="form-input">
                                        <input type="text" class="form-control firstname">
                                    </div>
                                        </div>
										
                                        <div class="grid-item ">
                                                <label>Last Name:</label>
                                    <div class="form-input">
                                        <input type="text" class="form-control lastname">
                                    </div>
                                        </div>
										
										 <div class="grid-item">
                                                <label>Phone Number:</label>
                                    <div class="form-input" >
                                        <input type="text" id="household_incomedd" name="household_income" class="phone form-control" Placeholder="(xxx)-xxxx-xxxx">
                                    </div>
                                        </div>
										
										 <div class="grid-item">
                                                <label>Email Address</label>
                                    <div class="form-input">
                                        <input type="text" id="household_incomedd" name="household_income" class="form-control email">
                                    </div>
                                        </div>
                                    </div>
								
								
								
								
								
								
								
								
                                   
                                </div>
<!--                                <div class="warning-message">-->
<!--                                    <h6>The selected program does not qualify for the financial aid.</h6>-->
<!--                                    <p>Please choose another program to continue.</p>-->
<!--                                </div>-->
                            </div>
                        </div>
                        <div class="form-row mt-auto">
                            <div class="form-row-col form-row-col-6 ml-auto">
                                <div class="form-group mb-0">
                                    <button type="button" class="btn btn-next btn-dark">Next</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="fieldset step2">
                        <div class="form-row">
                                        <!--<div class="form-row-col">
                                <div class="form-group">
                                    
                                    <div class="select-box-custom">    <div class="select-box-custom-selected" data-toggle="select-box">Chosse from which class</div>    <ul class="select-box-custom-dropdown" style="display: none;">    </ul></div><select id="abc" name="classabc">
                                        <option value="A">B (no dependents other than spouse)</option>
                                        <option value="B">C (dependents)</option>
                                        <option value="C">Combined</option>
                                      
                                    </select>
                                </div>
                            </div>-->
                            
                    
                            <div class="form-row-col">
                                <div class="form-group">
                                    
                                    <div class="select-box-custom">    <div class="select-box-custom-selected" data-toggle="select-box">Childhood General Education</div>    <ul class="select-box-custom-dropdown" style="display: none;">    </ul></div><select id="program" name="program">
									 <option value="Childhood General Education">Childhood General Education</option>
                                        <option value="Childhood Special and General Education Dual Certification">Childhood Special and General Education Dual Certification</option>
                                        <option value="Early Childhood General Leadership">Early Childhood General Leadership</option>
                                        <option value="Early Childhood Special and General Education Dual Certification">Early Childhood Special and General Education Dual Certification</option>
                                        <option value="Early Childhood Special Education">Early Childhood Special Education</option>
                                        <option value="Early Childhood and Childhood General Education Dual Certification">Early Childhood and Childhood General Education Dual Certification</option>
                                      
                                    </select>
									
									<p class=" mt-1">You will be able to change your selection later in thsi process to compare the costs of diggerent programs.</p>
                                </div>
                            </div>
                        </div>
                        <div class="form-row mt-auto">
                            <div class="form-row-col form-row-col-6">
                                <div class="form-group">
                                    <button type="button" class="btn btn-prev btn-gray">Previous</button>
                                </div>
                            </div>
                            <div class="form-row-col form-row-col-6">
                                <div class="form-group">
                                    <button type="button" class="btn btn-next btn-dark">Next</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="fieldset step3">
                        <div class="form-row">
                            <div class="form-row-col">
							
							<div class="grid grid-1 grid-md-2">
							    <input type="hidden" value="" class="jobtime">
                                        <div class="grid-item">
                                            <div class="widget-radio timejob">
                                                <input type="radio" id="full_time" name="half_full" >
                                                <label for="full_time">Full time Student (9 credis or more)</label>
                                            </div>
                                        </div>
                                        <div class="grid-item">
                                            <div class="widget-radio timejob">
                                                <input type="radio" id="half_time" name="half_full" >
                                                <label for="half_time">Part Time (5-8 Credits)</label>
                                            </div>
                                        </div>
                                        <!--<div class="grid-item">
                                            <div class="widget-radio timejob">
                                                <input type="radio" id="less_than_half_time"   name="half_full" >
                                                <label for="less_than_half_time">Less than 5 credits</label>
                                            </div>
                                           <!--  <p class="note">Not eligible for financial aid</p> -->
                                        <!--</div>-->
                                    </div>
									
									<p class=" mt-1"><b>Note</b>: Full time students carry at least 9 credits or 3-5 classes per semester in fall or spring terms. Part-
time students take 5-8 credits, or 2-3 classes in the fall or spring semesters. Currently, online
programs are offered on a part time schedule.</p>
							
							
							
							
                                
                            </div>
                        </div>
                        <div class="form-row mt-auto">
                            <div class="form-row-col form-row-col-6">
                                <div class="form-group">
                                    <button type="button" class="btn btn-prev btn-gray">Previous</button>
                                </div>
                            </div>
                            <div class="form-row-col form-row-col-6">
                                <div class="form-group">
                                    <button type="button" class="btn btn-next btn-dark">Next</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="fieldset step4">
                        <div class="form-row">
                            <div class="form-row-col">
							 <div class="form-group">
							      <input type="hidden" value="" class="statustax">
                                    <label class="top-label">What is your tax filing status?</label>
									
									<div class="grid grid-1 grid-md-2">
                                        <div class="grid-item">
                                            <div class="widget-radio taxstatus">
                                                <input type="radio" id="tax_filing_status_single" name="tax_filing_status">
                                                <label for="tax_filing_status_single">Single/Head of Household/Divorced/Widow(er)</label>
                                            </div>
                                        </div>
                                       
										
										<div class="grid-item">
                                            <div class="widget-radio taxstatus">
                                                <input type="radio"  id="tax_filing_status_married" name="tax_filing_status">
                                                <label for="tax_filing_status_married">Married</label>
                                            </div>
                                        </div>
										
										
										
										
										
                                    </div>
									
									
									
                                    
                                </div>
							
                                
                            </div>
                        </div>
                        <div class="form-row mt-auto">
                            <div class="form-row-col form-row-col-6">
                                <div class="form-group">
                                    <button type="button" class="btn btn-prev btn-gray">Previous</button>
                                </div>
                            </div>
                            <div class="form-row-col form-row-col-6">
                                <div class="form-group">
                                    <button type="button" class="btn btn-next btn-dark">Next</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="fieldset step5">
                        <input type="hidden" value="" class="statuscitizenship">
                        <div class="form-row">
                            <div class="form-row-col">
                                <div class="form-group">
                                     <label class="top-label">What is your citizenship status?</label>
                                    <div class="grid grid-1 grid-md-2">
                                        <div class="grid-item">
                                            <div class="widget-radio citizenshipstatus">
                                                <input type="radio" id="us_citizen" name="citizenship">
                                                <label for="us_citizen">US Citizen/Permanent Resident/Eligible Non-Citizen<span data-toggle="tooltip" data-title="Phasellus pulvinar ante tortor, at suscipit nisl rutrum rutrum." data-placement="bottom" style="position: absolute;top: 10px;" data-original-title="" title=""><img alt="US Citizen" src="<?php echo get_template_directory_uri(); ?>/images/icon-question.svg"></span></label>
                                            </div>
                                        </div>
                                        <div class="grid-item">
                                            <div class="widget-radio citizenshipstatus">
                                                <input type="radio" id="eligible_non_citizen" name="citizenship">
                                                <label for="eligible_non_citizen">Non-eligible non-citizen/International Student<span data-toggle="tooltip" data-title="Phasellus pulvinar ante tortor, at suscipit nisl rutrum rutrum." data-placement="bottom" data-original-title="" title=""><img alt="US Citizen" src="<?php echo get_template_directory_uri(); ?>/images/icon-question.svg"></span></label>
                                            </div>
                                        </div>
                                        
                                    </div>
									
									<p class=" mt-1"><b>Note</b>: You must a citizen or non-citizen to qualify for financial aid.</p>
									
                                </div>
                            </div>
                        </div>
                        <div class="form-row mt-auto">
                            <div class="form-row-col form-row-col-6">
                                <div class="form-group">
                                    <button type="button" class="btn btn-prev btn-gray">Previous</button>
                                </div>
                            </div>
                            <div class="form-row-col form-row-col-6">
                                <div class="form-group">
                                    <button type="button" class="btn btn-next btn-dark">Next</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="fieldset step6">
                        <div class="form-row">
                            <div class="form-row-col">
                                <div class="form-group">
                                   <label class="top-label" for="age">What is your age?</label>
                                    <div class="select-box-custom">    <div class="select-box-custom-selected" data-toggle="select-box">16</div><ul class="select-box-custom-dropdown" style="display: none;">   </ul></div><select id="age" name="age">
                                       
                                       <?php for($i=16;$i<71;$i++){?>
                                             <option value="<?php echo $i;?>"><?php echo $i;?></option>
                                       <?php }?>
                                        <!--<option value="18">18</option>
                                        <option value="19">19</option>
                                        <option value="20">20</option>
                                        
                                        <option value="65">65</option>
                                       
                                        <option value="Above 65">Above 65</option>-->
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="form-row mt-auto">
                            <div class="form-row-col form-row-col-6">
                                <div class="form-group">
                                    <button type="button" class="btn btn-prev btn-gray">Previous</button>
                                </div>
                            </div>
                            <div class="form-row-col form-row-col-6">
                                <div class="form-group">
                                    <button type="button" class="btn btn-next btn-dark">Next</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="fieldset step7">
                        <div class="form-row">
                            <div class="form-row-col">
                                 <div class="form-group">
                                   <label class="top-label" for="household_dependents">How many people reside in your household, including yourself?</label>
                                    <div class="select-box-custom">    <div class="select-box-custom-selected" data-toggle="select-box">0</div>    <ul class="select-box-custom-dropdown" style="display: none;">    </ul></div><select id="household_dependents" name="household_dependents">
                                        <option value="0">0</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                      
                                       
                                    </select>
									
									<p class=" mt-1"><b>Note</b>: To determine your household size, include yourself and if married, your spouse, the number of children who will receive more than half of their support from you, and the number of people (not your children or spouse) who live with you and receive more than half of their support from you.</p>
                                </div>
                            </div>
                        </div>
                        <div class="form-row mt-auto">
                            <div class="form-row-col form-row-col-6">
                                <div class="form-group">
                                    <button type="button" class="btn btn-prev btn-gray">Previous</button>
                                </div>
                            </div>
                            <div class="form-row-col form-row-col-6">
                                <div class="form-group">
                                    <button type="button" class="btn btn-next btn-dark">Next</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="fieldset step8">
                        <div class="form-row">
                            <div class="form-row-col">
                                <div class="form-group">
                                   <label class="top-label" for="household_dependents">How many people are attending college or graduate school<br> including yourself?</label>
                                    <div class="select-box-custom">    <div class="select-box-custom-selected" data-toggle="select-box">0</div>    <ul class="select-box-custom-dropdown" style="display: none;">   </ul></div><select id="household_dependentsclg" name="household_dependents">
                                        <option value="0">0</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        
                                      
                                       
                                    </select>
									
									<p class=" mt-1"><b>Note</b>: To determine your household size, include yourself and if married, your spouse, the number of children who will receive more than half of their support from you, and the number of people (not your children or spouse) who live with you and receive more than half of their support from you.</p>
                                </div>
                            </div>
                        </div>
                        <div class="form-row mt-auto">
                            <div class="form-row-col form-row-col-6">
                                <div class="form-group">
                                    <button type="button" class="btn btn-prev btn-gray">Previous</button>
                                </div>
                            </div>
                            <div class="form-row-col form-row-col-6">
                                <div class="form-group">
                                    <button type="button" class="btn btn-next btn-dark">Next</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="fieldset step9">
                        <div class="form-row">
                            <div class="form-row-col">
                                <div class="form-group">
                                    <label class="top-label" for="household_income">What is your estimated total household income?</label>
                                    <div class="form-input" data-prefix="$">
                                        <input type="text" id="household_income" name="household_income" class="form-control">
                                    </div>
									
										<p class=" mt-1"><b>Note</b>: Note: Household income is the total amount of money earned by every member of a single household, before taxes.  </p>
									
									
                                </div>
                            </div>
                        </div>
                        <div class="form-row mt-auto">
                            <div class="form-row-col form-row-col-6">
                                <div class="form-group">
                                    <button type="button" class="btn btn-prev btn-gray">Previous</button>
                                </div>
                            </div>
                            <div class="form-row-col form-row-col-6">
                                <div class="form-group">
                                    <button type="button" class="btn btn-next btn-dark">Next</button>
                                </div>
                            </div>
                        </div>
                    </div>
					
					
                    <div class="fieldset step10">
                        <div class="form-row">
                            <div class="form-row-col">
                                <div class="form-group">
                              <label class="top-label" for="state">What state do you live in?</label>
								<!-- <p class="">The information below will be used to calculate an estimate of your eligibility and an approximation of the percentage of need-based scholarship support that you may be provided by Bank Street.</p>  -->
                                    <div class="select-box-custom">    <div class="select-box-custom-selected" data-toggle="select-box">Select State</div>    <ul class="select-box-custom-dropdown" style="display: none;">    </ul></div><select id="state" name="state">
                                        
                                        <?php
                                               $conn =mysqli_connect('localhost', 'financecal', 'Linux@5455', 'financecalculator');
                                               $sql = "select * from US_STATES";
                                               $res = mysqli_query($conn,$sql);
                                               if (mysqli_num_rows($res) > 0) {
                                               while($row = mysqli_fetch_assoc         ($res)) {?>
                                        <option value="<?php echo $row['STATE_NAME'];?>"><?php echo $row['STATE_NAME'];?></option>
                                        <?php }
                                        } else {
                                        echo "No results found";
                                        }
                                        ?>
                                        <!--<option value="Alabama">Alabama</option>
                                        <option value="Alaska">Alaska</option>
                                        <option value="Arizona">Arizona</option>
                                        <option value="Arkansas">Arkansas</option>-->
                                        
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="form-row mt-auto">
                            <div class="form-row-col form-row-col-6">
                                <div class="form-group">
                                    <button type="button" class="btn btn-prev btn-gray">Back</button>
                                </div>
                            </div>
                            <div class="form-row-col form-row-col-6">
                                <div class="form-group">
                        <button type="button" class="btn btn-next btn-dark">Next</button>
                                </div>
                            </div>
                        </div>
                    </div>
					
					
					<div class="fieldset step11">
                        <div class="form-row">
                            <div class="form-row-col">
                                <div class="form-group">
                              <label class="top-label" for="state">CONFIRM YOUR INFORMATION </label>
								<p class="">The information below will be used to calculate an estimate of your eligibility  for financial aid grants to Bank Street and will provide you with a personalized  accounting   of the ways in which you can finance the cost of your Bank Street education. </p>
                                      
									<div class="form-summary-table">
                                        <!--<div class="form-summary-table-tr">
                                            <div class="form-summary-table-td text-right">
                                                <div class="form-summary-label">Names:</div>
                                        
                                            </div>
                                            <div class="form-summary-table-td">
                                                <div class="form-summary-label nm">Early Childhood Leadership</div>
                                               
                                            </div>
                                        </div>
                                         <div class="form-summary-table-tr">
                                            <div class="form-summary-table-td text-right">
                                                <div class="form-summary-label">Email:</div>
                                        
                                            </div>
                                            <div class="form-summary-table-td">
                                                <div class="form-summary-label em">Early Childhood Leadership</div>
                                               
                                            </div>
                                        </div>

                                         <div class="form-summary-table-tr">
                                            <div class="form-summary-table-td text-right">
                                                <div class="form-summary-label">Phone:</div>
                                        
                                            </div>
                                            <div class="form-summary-table-td">
                                                <div class="form-summary-label ph">Early Childhood Leadership</div>
                                               
                                            </div>
                                        </div>-->


                                        <div class="form-summary-table-tr">
                                            <div class="form-summary-table-td text-right">
                                                <div class="form-summary-label">Program:</div>
                                        
                                            </div>
                                            <div class="form-summary-table-td">
                                                <div class="form-summary-label prog">Early Childhood Leadership</div>
                                               
                                            </div>
                                        </div>
                                        <div class="form-summary-table-tr">
                                            <div class="form-summary-table-td text-right">
                                                <div class="form-summary-label">Program Status:</div>
      
                                            </div>
                                            <div class="form-summary-table-td">
                                                <div class="form-summary-label progstat">Full Time</div>
                       
                                            </div>
                                        </div>
										
										
										
										<div class="form-summary-table-tr">
                                       <div class="form-summary-table-td text-right">
                                                <div class="form-summary-label">Tax Filing Status:</div>
      
                                            </div>
                                            <div class="form-summary-table-td">
                                                <div class="form-summary-label tfstat">Married</div>
                       
                                            </div>
                                        </div>
										
										
										<div class="form-summary-table-tr">
                              <div class="form-summary-table-td text-right">
                                                <div class="form-summary-label">Your Age:</div>
      
                                            </div>
                                            <div class="form-summary-table-td">
                                                <div class="form-summary-label age_d">44</div>
                       
                                            </div>
                                        </div>
										
										
										<div class="form-summary-table-tr">
                                           <div class="form-summary-table-td text-right">
                                                <div class="form-summary-label">Citizenship Status:</div>
      
                                            </div>
                                            <div class="form-summary-table-td">
                                                <div class="form-summary-label citistat">US Citizen</div>
                       
                                            </div>
                                        </div>
										
										
										<div class="form-summary-table-tr">
                                            <div class="form-summary-table-td text-right">
                                                <div class="form-summary-label">Number in Household:</div>
      
                                            </div>
                                            <div class="form-summary-table-td">
                                                <div class="form-summary-label noh">4</div>
                       
                                            </div>
                                        </div>
										
										
										
										<div class="form-summary-table-tr">
                                             <div class="form-summary-table-td text-right">
                                                <div class="form-summary-label">College or graduate school attendees:</div>
      
                                            </div>
                                            <div class="form-summary-table-td">
                                                <div class="form-summary-label cnoh">1</div>
                       
                                            </div>
                                        </div>
										
										<div class="form-summary-table-tr">
                                           <div class="form-summary-table-td text-right">
                                                <div class="form-summary-label">Estimate houshold income:</div>
      
                                            </div>
                                            <div class="form-summary-table-td">
                                                <div class="form-summary-label hincome">$67,000</div>
                       
                                            </div>
                                        </div>
										
										<div class="form-summary-table-tr">
                                             <div class="form-summary-table-td text-right">
                                                <div class="form-summary-label">State of residence:</div>
      
                                            </div>
                                            <div class="form-summary-table-td">
                                                <div class="form-summary-label stated">$67,000</div>
                       
                                            </div>
                                        </div>
										
									
                                      
                                    </div>
								
                                   
                                </div>
                            </div>
                        </div>
                        <div class="form-row mt-auto">
                            <div class="form-row-col form-row-col-6">
                                <div class="form-group">
                                    <button type="button" class="btn btn-prev btn-gray">Back</button>
                                </div>
                            </div>
                            <div class="form-row-col form-row-col-6">
                                <div class="form-group">
                        <button type="button" class="btn btn-next btn-dark">Get Estimate Cost</button>
                                </div>
                            </div>
                        </div>
                    </div>
					
					
					
					<div class="fieldset step12">
					    
					  <!--<div class="form-row">
                    <div class="form-row-col">
                    <div class="form-group">
                    <label class="top-label congratulations" for="state"><b>Congratulations!.</b> Based on the inforamtion that you entered, you may be eligible for<br> grants from Bank Street worth <b>30%</b> of your tution!  </label>
							  <hr>
						<div class="text-center">
						    <h3>Financial Plan</h3>
						       <table class="table table-bordered">
    <thead>
      <tr>
        <th>Fields</th>
        <th>Annual</th>
        <th>Degree Total</th>
      </tr>
    </thead>
    <tbody>
     <tr>
		<td>Credits</td>
		<td id="a1"></td>
		<td id="a2"></td>
	</tr>

 <tr>
		<td>Tution per credit</td>
		<td id="a3"></td>
		<td id="a4"></td>
	</tr>

	 <tr>
		<td>Total Tution cost</td>
		<td id="a5"></td>
		<td id="a6"></td>
	</tr>
	<tr>
		<td>Scholarship %</td>
		<td id="a7"></td>
		<td id="a8"></td>
	</tr>

	<tr>
		<td>Scholarship Amount</td>
		<td id="a9"></td>
		<td id="a10"></td>
	</tr>

	<tr>
		<td>Net cost of Education</td>
		<td id="a11"></td>
		<td id="a12"></td>
	</tr>

	<tr>
		<td>Potential Subidized L</td>
		<td id="a13"></td>
		<td id="a14"></td>
	</tr>

		<tr>
		<td> Potential Direct Out-of-Pocket Cost</td>
		<td id="a15"></td>
		<td id="a16"></td>
	</tr>

	<tr>
		<td>EFC (for reference)</td>
		<td id="a17"></td>
		
	</tr>
    </tbody>
     </table>

	                    <a class="apply-now" href="#">Apply Now</a>
	                </div>	  
					</div>
					</div>
					</div>-->
                        <div class="form-row">
                            <div class="form-row-col">
                                <div class="form-group">
                              <label class="top-label congratulations" for="state"><b>Congratulations!.</b> Based on the inforamtion that you entered, you may be eligible for<br> grants from Bank Street worth <b>30%</b> of your tution!  </label>
							  <hr>
								<p class="">Below we have provided an estimate of your total tuition and out of pocket costs after
grants from Bank Street and available federal unsubsidized loans. By varying the field
options on the right, you can estimate the impacts on these amounts for other Bank
Street degrees and for different numbers of years of unsubsidized loans.&nbsp;Our financial aid
advisors are here to work with you to develop a more customized plan and to answer
any questions you may have. <a href="#">CLICK HERE…</a> </p>
                                      
									<div class="grid grid-1 grid-md-2 d-flex align-items-center mt-2">
                                        <div class="grid-item last ">
                                       
									   <div class="form-group form-group align-items-center">
    <label class="mr-2" for="exampleInputName2">Programe</label>
<div class="select-box-custom">    
<div class="select-box-custom-selected prog2" data-toggle="select-box">Early Childhood Leadership</div>    
<ul class="select-box-custom-dropdown" style="display: none;">    
<!--<li class="select-box-custom-option">Early Childhood Leadership</li>-->
</ul></div>
<!--<select id="state" name="state">
<option value="AL">Early Childhood Leadership</option>
</select>-->
  </div>
<div class="form-group form-group d-flex align-items-center justify-content-center mt-1  mb-0">
<div class="form-check mr-3">
      <label class="form-check-label mb-0">
        <input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios1" value="option1">
        Full Time
      </label>
    </div>
    <div class="form-check">
    <label class="form-check-label mb-0">
        <input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2">
       Part Time
      </label>
    </div>
  </div>
  
  <hr>
  <p>This program requires 52 credits to complete. You should complete this
program in 2 years if you attend full time” should emphasize:</p>
  
  <div class="form-group form-group  align-items-center ">
<div class="">
<div class="">

<div class="form-group form-group align-items-center">
<label class="mr-2" for="exampleInputName2">   Number of credits</label>
<div class="select-box-custom">    
<div class="select-box-custom-selected" id="p11" data-toggle="select-box"></div>    
<ul class="select-box-custom-dropdown" style="display: none;">    
<!--<li class="select-box-custom-option">2</li>-->
</ul>
</div>
<!--<select id="state" name="state">
<option value="AL">2</option>
</select>-->
  </div>


    
    </div>
<div>
<div class="form-group form-group align-items-center">
<label class="mr-2" for="exampleInputName2">Number of years</label>
<div class="select-box-custom">    
<div class="select-box-custom-selected" data-toggle="select-box">1</div>    
<ul class="select-box-custom-dropdown" style="display: none;">    
<!--<li class="select-box-custom-option">1</li>-->
</ul>
</div>
<!--<select id="state" name="state">
<option value="AL">1</option>
</select>-->
  </div>







    
    </div>
</div>
	
	<div class="">
	
<div class="form-group form-group align-items-center">
<label class="mr-2" for="exampleInputName2"> Attend full time</label>
<div class="select-box-custom">    
<div class="select-box-custom-selected" data-toggle="select-box">1</div>    
<ul class="select-box-custom-dropdown" style="display: none;">    
<!--<li class="select-box-custom-option">1</li>-->
</ul>
</div>
<!--<select id="state" name="state">
<option value="AL">1</option>
</select>-->
  </div>
	
	
   
    </div>
	
	
  </div>
  
    
	<div class="text-center">
	<a class="apply-now" href="#">Apply Now</a>
	</div>
  
  
  
  
  
  
  
  
  
  
  
  
									   </div>
									   
									   
									   <div class="grid-item">
									   
									   <div class="text-center">
									   <h3>Financial Plan</h3>
									   
									   </div>
									   
									   <div class="form-summary-table form-summary-last">
									       
									       						       <table class="table table-bordered">
    <thead>
      <tr>
        <th>Fields</th>
        <th>Annual</th>
        <th>Degree Total</th>
      </tr>
    </thead>
    <tbody>
     <tr>
		<td>Credits</td>
		<td id="a1"></td>
		<td id="a2"></td>
	</tr>

 <tr>
		<td>Tution per credit</td>
		<td id="a3"></td>
		<td id="a4"></td>
	</tr>

	 <tr>
		<td>Total Tution cost</td>
		<td id="a5"></td>
		<td id="a6"></td>
	</tr>
	<tr>
		<td>Scholarship %</td>
		<td id="a7"></td>
		<td id="a8"></td>
	</tr>

	<tr>
		<td>Scholarship Amount</td>
		<td id="a9"></td>
		<td id="a10"></td>
	</tr>

	<tr>
		<td>Net cost of Education</td>
		<td id="a11"></td>
		<td id="a12"></td>
	</tr>

	<tr>
		<td>Potential Subidized L</td>
		<td id="a13"></td>
		<td id="a14"></td>
	</tr>

		<tr>
		<td> Potential Direct Out-of-Pocket Cost</td>
		<td id="a15"></td>
		<td id="a16"></td>
	</tr>

	<tr>
		<td>EFC (for reference)</td>
		<td id="a17"></td>
		
	</tr>
    </tbody>
     </table>
									       
									       
                                        <!--<div class="form-summary-table-tr">
                                            <div class="form-summary-table-td text-right">
                                                <div class="form-summary-label">Total Tuition for the Program:</div>
                                        
                                            </div>
                                            <div class="form-summary-table-td pl-2">
                                                <div class="form-summary-label">$ 80,000.00</div>
                                               
                                            </div>
                                        </div>
                                        <div class="form-summary-table-tr">
                                            <div class="form-summary-table-td text-right">
                                                <div class="form-summary-label">Est. Amount Covered by Bank Street Grants:</div>
      
                                            </div>
                                           <div class="form-summary-table-td pl-2">
                                                <div class="form-summary-label text-danger">($24,000.00)</div>
                       
                                            </div>
                                        </div>
										
										
										
										<div class="form-summary-table-tr">
                                       <div class="form-summary-table-td text-right">
                                                <div class="form-summary-label">Est. Total Loan Amount</div>
      
                                            </div>
                                            <div class="form-summary-table-td pl-2">
                                                <div class="form-summary-label">$ 41,000.00</div>
                       
                                            </div>
                                        </div>
										
										
										<div class="form-summary-table-tr">
                              <div class="form-summary-table-td text-right">
                                                <div class="form-summary-label">Net Out-of-Pocket Costs Over Life of Program:</div>
      
                                            </div>
                                            <div class="form-summary-table-td pl-2">
                                                <div class="form-summary-label">$ 15,000.00</div>
                       
                                            </div>
                                        </div>-->
										
										
										
										
									
                                      
                                    </div>
									   
									   </div>
									   
									   
									   
									   
									   
									   
									   
									   
									   
									   
                                        </div>
										
                                     
										
									
										
										
                                  
								
                                   
                                </div>
                            </div>
                        </div>
						<hr>
                        <div class="text-center">
						<h4>
						Contact us <a href="#">finaid@bankstreet.edu </a>or <a href="#">(212)-652-8722</a> for more information about Bank Street programs and your financial options.
						
						
						</h4>
						
						</div>
                    </div>
					
					
					
					
                    
                </form>
            </div>
            
            
        </div>
      </div>
      
    </div>
  </div>
</div>



<script src="<?php echo get_template_directory_uri(); ?>/js/jquery-3.4.1.min.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/js/bootstrap.min.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/js/bundle.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/js/financecal.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/js/my.js"></script>
<script>

 $("[data-toggle='tooltip']").tooltip();


</script>
<style>
    div.fieldset{
        position:relative !important;
        
    } 
   
    .form-summary-label {
    word-break: break-word;
} 
</style>




<script>'undefined'=== typeof _trfq || (window._trfq = []);'undefined'=== typeof _trfd && (window._trfd=[]),_trfd.push({'tccl.baseHost':'secureserver.net'}),_trfd.push({'ap':'cpsh'},{'server':'sg2plcpnl0071'},{'id':'8472623'}) // Monitoring performance to make your website faster. If you want to opt-out, please contact web hosting support.</script><script src="https://img1.wsimg.com/tcc/tcc_l.combined.1.0.6.min.js"></script></body></html>