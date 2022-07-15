function program_list_credit(i) 
	{	switch(i){
			case 'Childhood General Education':
				return 45;
				break;
			case 'Childhood Special and General Education Dual Certification':
				return 52;
				break;
			case 'Early Childhood Special and General Education Dual Certification':
				return 50;
				break;		
			case 'Early Childhood General Education':
				return 50;
				break;
			case 'Early Childhood Special Education':
				return 32;
				break;

			case 'Early Childhood and Childhood General Education Dual Certification':
				return 46;
				break;
				}

	}

function full_half(j)
{
	switch(j){
		case 'Full time Student (9 credis or more)':
		return 24;
		break;
		case 'Part Time (5-8 Credits)':
		return 14;
		break;

			}
}

function Tution_cost(p,h)
{
	return{'p':p*1660,'h':h*1660 };
}

function max_Subsidized_loan(scholar,programme,f)
{   
    var progamme_credit=programme*1660;
    console.log('progamme_credit'+progamme_credit);
    var disc_amnt=progamme_credit*(scholar/100);
    console.log('disc_amnt'+disc_amnt);
    var disc_degree_cost = progamme_credit-disc_amnt;
    console.log('disc_degree_cost'+disc_degree_cost);
    var disc_per_credit = (1-(scholar/100))*1660;
    console.log('disc_per_credit'+disc_per_credit);
    var cost_persem=0;
    var credit_peryear=0;
    var year_Tocredit=0;
    var Loan_amnt=0;


     if(f=='Full time Student (9 credis or more)')
    	{cost_persem=disc_per_credit*9;	console.log('cost_persem'+cost_persem);}
    else
    	{cost_persem=disc_per_credit*5;	console.log('cost_persem'+cost_persem);}

    credit_peryear=full_half(f);
    console.log('credit_peryear'+credit_peryear);
    year_Tocredit=Math.ceil(programme/credit_peryear);
    console.log('year_Tocredit'+year_Tocredit);
    Loan_amnt=Math.min(year_Tocredit*20500,disc_degree_cost);
    console.log('Loan_amnt'+Loan_amnt);
    return Loan_amnt;
}


function scholarship(efc)
{	var res=0
	if(efc>=0 && efc<8000)
	{ res=30; }
	else
	if (efc>=8000 && efc<16000) 
	{res=25;}
	else
	if(efc>=16000 && efc<24000)
		{res=20;}
	else
		{res=0;}
	return res;
}


function Family_contribution_income(state,House_size,Income,married_single,age,grade,ABC)
{			
	var fedral_income=0;
	var stat_tax_allowance=0;
	var std_socialSecurity =0;
	var income_protection=0;
	var total_allowance=0;
	var available_income=0;
	var contribution =0;
	var net_worth=0;
	var asset_protection=0;
	var Discretionary_networth=0
	var contribution_assets=0
	var contribution_assets_sum=0;
	var AAI_cont=0;
	var EFC=0;


	if(married_single=='Married')
	{
		fedral_income=calc_fedrealincome(married_single,Income);
		
	}
	else
	{
		fedral_income=calc_fedrealincome(married_single,Income);

	}
	console.log('FEDral imcome'+fedral_income);
	stat_tax_allowance = calc_state_all(Income,ABC,state);
	console.log('stat_tax_allowance'+stat_tax_allowance);
	std_socialSecurity = calc_socialSecurity(Income);
	console.log('std_socialSecurity'+std_socialSecurity);

	income_protection = calc_incomeProtection(married_single,grade,House_size,ABC);
    console.log('income_protection'+income_protection);
	
	total_allowance=stat_tax_allowance+std_socialSecurity+income_protection+fedral_income;
    console.log('total_allowance'+total_allowance);

	available_income = Income - total_allowance;
    console.log('available_income'+available_income);
    
	contribution = calc_contribution(available_income,ABC);
	console.log('contribution'+contribution);
	
	net_worth = calc_networth(Income,ABC);
	console.log('net_worth'+net_worth);

	asset_protection = calc_assetProtection(married_single,age);
    console.log('asset_protection'+asset_protection);

	Discretionary_networth = net_worth-asset_protection;
	console.log('Discretionary_networth'+Discretionary_networth);

	if(ABC=='A')
		{contribution_assets =Math.round(Discretionary_networth*0.20);console.log('contribution_assets'+contribution_assets);}
	else
		{contribution_assets =Math.round( Discretionary_networth*0.07);
		console.log('contribution_assets'+contribution_assets);}
	

	contribution_assets_sum=contribution_assets+available_income;
	console.log('contribution_assets_sum'+contribution_assets_sum);

	AAI_cont = AAI_contribution(contribution_assets_sum,ABC);
	console.log('AAI_cont'+AAI_cont);
	
	if(ABC=='A')
	{EFC=(grade==0)? EFC=contribution_assets_sum:EFC=(contribution_assets_sum/grade);console.log('EFC'+EFC);}
	else
		{	EFC=AAI_cont/grade;}
		//alert(EFC);
		console.log(EFC);
	return EFC;

}

/* END main */
function AAI_contribution(asset_sum,abc)
    {   var res=0
        if(abc=='A')
        {  res=0; }
    else
        {
            if(asset_sum<3409)
            {res=750;}
            else
            if(asset_sum<17000)
            {
                res = asset_sum*(22/100);
            }else
            if(asset_sum<21400)
            {
                res=3740+(25/100)*(asset_sum-17000);
            }
            else
            if(asset_sum<25700)
            {
                res= 4840+(29/100)*(asset_sum-21400);
            }
            else
            if(asset_sum<30100)
            {
                res=6087+(34/100)*(asset_sum-25700);
            }else
            if(asset_sum<34500)
            {
                res=7583+(40/100)*(asset_sum-30100);
            }
            else
            if(asset_sum>34501)
            {
                res=9343+(47/100)*(asset_sum-34500);
            }

        }
        return res;
    }




function  calc_assetProtection(married,age)
{ 
    //alert(married);
    //alert(age);
    var res=0;
    age = parseInt(age);
    if(married =='Married')
    {
        if(age<=25){  res=0;  }
    }
    else
        if(age<25 || age<=25){  res=0;}
    switch(age*1)
    {
        case 26:
            if(married=="Married")
                {   res=300;} else {res=100;}
            break;
        case 27:
            if(married=="Married")
                {   res=700;} else {res=200;}
            break;
        case 28:
            if(married=="Married")
                {   res=1000;} else {res=300;}
            break;
        case 29:
            if(married=="Married")
                {   res=1300;} else {res=500;}
            break;
        case 30:
            if(married=="Married")
                {   res=1600;}
                 else 
                {res=600;}
            break;
        case 31:
            if(married=="Married")
                {   res=2000;} else {res=700;}
            break;
        case 32:
            if(married=="Married")
                {   res=2300;} else {res=800;}
            break;
        case 33:
            if(married=="Married")
                {   res=2600;} else {res=900;}
            break;
        
        case 34:
            if(married=="Married")
                {   res=2900;} else {res=1000;}
            break;
        case 35:
            if(married=="Married")
                {   res=3300;} else {res=1100;}
            break;
        case 36:
            if(married=="Married")
                {   res=3600;} else {res=1200;}
            break;
        case 37:
            if(married=="Married")
                {   res=3900;} else {res=1400;}
            break;
        case 38:
            if(married=="Married")
                {   res=4200;} else {res=1500;}
            break;
        
        case 39:
            if(married=="Married")
                {   res=4600;} else {res=1600;}
            break;
        case 40:
            if(married=="Married")
                {   res=4900;} else {res=1700;}
            break;
        case 41:
            if(married=="Married")
                {   res=5100;} else {res=1700;}
            break;
        case 42:
            if(married=="Married")
                {   res=5200;} else {res=1700;}
            break;
        case 43:
            if(married=="Married")
                {   res=5300;} else {res=1800;}
            break;
        case 44:
            if(married=="Married")
                {   res=5400;} else {res=1800;}
            break;
        case 45:
            if(married=="Married")
                {   res=5500;} else {res=1900;}
            break;
        case 46:
            if(married=="Married")
                {   res=5700;} else {res=1900;}
            break;
        case 47:
            if(married=="Married")
                {   res=5800;} else {res=1900;}
            break;
        case 48:
            if(married=="Married")
                {   res=6000;} else {res=2000;}
            break;
        case 49:
            if(married=="Married")
                {   res=6100;} else {res=2000;}
            break;
        case 50:
            if(married=="Married")
                {   res=6300;} else {res=2100;}
            break;
        case 51:
            if(married=="Married")
                {   res=6400;} else {res=2100;}
            break;
        case 52:
            if(married=="Married")
                {   res=6600;} else {res=2200;}
            break;
        case 53:
            if(married=="Married")
                {   res=6800;} else {res=2200;}
            break;
        case 54:
            if(married=="Married")
                {   res=6900;} else {res=2300;}
            break;
        case 55:
            if(married=="Married")
                {   res=7100;} else {res=2300;}
            break;
        case 56:
            if(married=="Married")
                {   res=7300;} else {res=2400;}
            break;
        case 57:
            if(married=="Married")
                {   res=7500;} else {res=2500;}
            break;
        case 58:
            if(married=="Married")
                {   res=7700;} else {res=2500;}
            break;
        case 59:
            if(married=="Married")
                {   res=7900;} else {res=2600;}
            break;
        case 60:
            if(married=="Married")
                {   res=8200;} else {res=2700;}
            break;
        case 61:
            if(married=="Married")
                {   res=8400;} else {res=2700;}
            break;
        case 62:
            if(married=="Married")
                {   res=8600;} else {res=2800;}
            break;
        case 63:
            if(married=="Married")
                {   res=8900;} else {res=2900;}
            break;
        case 64:
            if(married=="Married")
                {   res=9200;} else {res=2900;}
            break;
        case 65:
            if(married=="Married")
                {   res=9400;} else {res=3000;}
            break;
        default:
        if(married=="Married")
                {} else {}
            break;

    }
    return res;
}



function calc_networth(income,abc)
{	val=0;
	if(abc == 'A')
	{		if(income<=0 && income <5000)
				{val=788;}
       		else
   			 if(income>=5000 && income < 10000)
   			 	{val = 1893;}
    		else
       		 if(income >=10000 && income < 15000)
       		 	{val=2547; }
   			 else
   			 	if(income >=15000 && income <20000)
    			{val = 3059;}
    		else 
    			if(income >=20000 && income < 25000)
    				{val=3494;}
    		else 
    			if(income >=25000 && income<30000)
    				{val=3879;}
    		else 
    			if(income >=30000 && income<35000)
    				{val = 4227;}
    		else
    			if(income >=35000 && income < 40000)
    				{val = 4548;}
    		else 
    			if(income >=40000 && income <45000)
    				{val = 4846;}
    		else
    			if(income>= 45000 && income<50000)
    				{val=5127;}
    		else
    		if (income>=50000 && income<55000)
    		 {val=5392;}
    		else
    		if (income>=55000 && income<60000)
    		 {val=5644;}
    		else
    		if (income>=60000 && income<65000)
    		 {val=5885;}
    		else
    		if (income>=65000 && income<70000)
    		 {val=6116;}
    		else
    		if (income>=70000 && income<75000)
    		 {val=6371;}
    		else
    		if (income>=75000 && income<80000)
    		 {val=6553;}
    		else
    		if (income>=80000 && income<85000)
    		 {val=6760;}
    		else
    		if (income>=85000 && income<90000)
    		 {val=6961;}
    		else
    		if (income>=90000 && income<95000)
    		 {val=7156;}
    		else
    		if (income>=95000 && income<100000)
    		 {val=7346;}
    		else
    		if (income>=100000 && income<105000)
    		 {val=7531;}
    		else
    		if (income>=105000 && income<110000)
    		 {val=7711;}
    		else
    		if (income>=110000 && income<115000)
    		 {val=7886;}
    		else
    		if (income>=115000 && income<120000)
    		 {val=8058;}
    		else
    		if (income>=120000 && income<125000)
    		 {val=8226;}
    		else
    		if (income>=125000 && income<130000)
    		 {val=8391;}
    		else
    		if (income>=130000 && income<135000)
    		 {val=8552;}
    		else
    		if (income>=135000 && income<140000)
    		 {val=8710;}
    		else
    		if (income>=140000 && income<145000)
    		 {val=8865;}
    		else
    		if (income>=145000 && income<150000)
    		 {val=9017;}
    		else
    		if (income>=150000 && income<155000)
    		 {val=9167;}
    		else
    		if (income>=155000 && income<160000)
    		 {val=9314;}
    		else
    		if (income>=160000 && income<165000)
    		 {val=9459;}
    		else
    		if (income>=165000 && income<170000)
    		 {val=9601;}
    		else
    		if (income>=170000 && income<175000)
    		 {val=9742;}
    		else
    		if (income>=175000 && income<180000)
    		 {val=9880;}
    		else
    		if (income>=180000 && income<185000)
    		 {val=10016;}
    		else
    		if (income>=185000 && income<190000)
    		 {val=10150;}
    		else
    		if (income>=190000 && income<195000)
    		 {val=10283;}
    		else
    		if (income>=195000 && income<200000)
    		 {val=10414;}
    		else
    		if (income>=200000 && income<100000000)
    		 {val=10543;}
    		else
    		if (income>=100000000)
    		 {val=10543;}
    		else {val=0;}

			}
		else
		{
			if(income<=0 && income <5000)
				{val=196;}
       		else
   			 if(income>=5000 && income < 10000)
   			 	{val = 672;}
    		else
       		 if(income >=10000 && income < 15000)
       		 	{val=1020; }
   			 else
   			 	if(income >=15000 && income <20000)
    			{val = 1319;}
    		else 
    			if(income >=20000 && income < 25000)
    				{val=1590;}
    		else 
    			if(income >=25000 && income<30000)
    				{val=1842;}
    		else 
    			if(income >=30000 && income<35000)
    				{val = 2078;}
    		else
    			if(income >=35000 && income < 40000)
    				{val = 2303;}
    		else 
    			if(income >=40000 && income <45000)
    				{val = 2518;}
    		else
    			if(income>= 45000 && income<50000)
    				{val=2725;}
    		else
    		if (income>=50000 && income<55000)
    		 {val=2925;}
    		else
    		if (income>=55000 && income<60000)
    		 {val=3119;}
    		else
    		if (income>=60000 && income<65000)
    		 {val=3308;}
    		else
    		if (income>=65000 && income<70000)
    		 {val=3492;}
    		else
    		if (income>=70000 && income<75000)
    		 {val=3671;}
    		else
    		if (income>=75000 && income<80000)
    		 {val=3847;}
    		else
    		if (income>=80000 && income<85000)
    		 {val=4019;}
    		else
    		if (income>=85000 && income<90000)
    		 {val=4188;}
    		else
    		if (income>=90000 && income<95000)
    		 {val=4353;}
    		else
    		if (income>=95000 && income<100000)
    		 {val=4516;}
    		else
    		if (income>=100000 && income<105000)
    		 {val=4677;}
    		else
    		if (income>=105000 && income<110000)
    		 {val=4834;}
    		else
    		if (income>=110000 && income<115000)
    		 {val=4990;}
    		else
    		if (income>=115000 && income<120000)
    		 {val=5143;}
    		else
    		if (income>=120000 && income<125000)
    		 {val=5294;}
    		else
    		if (income>=125000 && income<130000)
    		 {val=5443;}
    		else
    		if (income>=130000 && income<135000)
    		 {val=5591;}
    		else
    		if (income>=135000 && income<140000)
    		 {val=5736;}
    		else
    		if (income>=140000 && income<145000)
    		 {val=5880;}
    		else
    		if (income>=145000 && income<150000)
    		 {val=6023;}
    		else
    		if (income>=150000 && income<155000)
    		 {val=6164;}
    		else
    		if (income>=155000 && income<160000)
    		 {val=6303;}
    		else
    		if (income>=160000 && income<165000)
    		 {val=6441;}
    		else
    		if (income>=165000 && income<170000)
    		 {val=6578;}
    		else
    		if (income>=170000 && income<175000)
    		 {val=6713;}
    		else
    		if (income>=175000 && income<180000)
    		 {val=6847;}
    		else
    		if (income>=180000 && income<185000)
    		 {val=6980;}
    		else
    		if (income>=185000 && income<190000)
    		 {val=7112;}
    		else
    		if (income>=190000 && income<195000)
    		 {val=7243;}
    		else
    		if (income>=195000 && income<200000)
    		 {val=7372;}
    		else
    		if (income>=200000 && income<100000000)
    		 {val=7501;}
    		else
    		if (income>=100000000)
    		 {val=7501;}
    		else {val=0;}


		}
	return val;

}


function calc_contribution(available_income,abc)
{	res=0;
	if (abc=='A'){res=available_income*0.5; }
		else
			{res=0;}
return res;

}

function calc_incomeProtection(married,grade,housesize,abc)
{	var res=0;
    var val=0;
	if(abc=='A')
	{	
		if(married == 'Married' && grade=='1')
		{
			res=17060;
		}
		else
		{
			res = 10640;
		}
		

	}
	else
	{	
		 if(housesize== 2 && grade==1)
            {res=26940;}
          else
         if(housesize==2 && grade==2) 
            { res= 22340;} 
          else
            if(housesize==3 && grade==1)
                {res=33550;}
        else
            if(housesize==3 && grade==2)
                {res=28960;}
        else 
            if(housesize==3 && grade==3)
                {res=24360;}
        else
            if(housesize==4 && grade==1)
                {res=41420;}
         else
            if(housesize==4 && grade==2)
                {res=36830;}
         else
            if(housesize==4 && grade==3)
                {res=32250;}
         else
            if(housesize==4 && grade==4)
                {res=27630;}
         else
            if(housesize==5 && grade==1)
                {res=48880;}
        else
            if(housesize==5 && grade==2)
                {res=44260;}
         else
            if(housesize==5 && grade==3)
                {res=39680;}
         else
            if(housesize==5 && grade==4)
                {res=35080;}
           else
            if(housesize==5 && grade==5)
                {res=30500;}
        else
            if(housesize==6 && grade==1)
                {res=57560;}
        else
            if(housesize==6 && grade==2)
                {res=52560;}
        else
            if(housesize==6 && grade==3)
                {res=47990;}
       
        else
            if(housesize==6 && grade==4)
                {res=43360;}
         else
            if(housesize==6 && grade==5)
                {res=38790;}
        else 

        {
            console.log("housesize between 1-6 and grade between 1-4");
        }
   } 	

  return res; 
 }



function calc_socialSecurity(income)
{   var res=0;
    if(income>0 && income <= 128400)
    {
        res = income*((7.56)/100);
        console.log(res);
        
    }else
    if (income>128400 &&  income <=200000)
    {
        res = 9823 + (1.45/100) * (income-128400);
        console.log(res);

    }
    else 
    {
        res = 10861*(2.35/100) *(income-200000);
        console.log(res);

    }
return Math.round(res);
}

function calc_state_all(income,abc,state)
{ var stat_tax_allowance=0;

	if(abc=='A')
{

switch (state){
	case 'Alabama' :
	case 'Arizona' :
	case 'American Samoa' :
	case 'Canada and Canadian Provinces' :
	case 'Federated States of Micronesia' :
	case 'Guam' :
	case 'Virgin Islands' :
	case 'Blank or Invalid State' :
	case 'New Mexico' :
	case 'Louisiana' :
	case 'Marshall Islands' :
	case 'Kansas' :
	case 'Other' :
	case 'Mexico':
	case 'Mississippi':
	case 'Northern Mariana Islands':
	case 'Oklahoma':
	case 'Palau':
	case 'Puerto Rico	':
			stat_tax_allowance =income*(2)/100;
			return stat_tax_allowance;
			break;

	case 'Arkansas':
	case 'Colorado':
	case 'Delaware':
	case 'Georgia':
	case 'Idaho':
	case 'Illinois':
	case 'Indiana':
	case 'Iowa':
	case 'Maine':
	case 'Michigan':
	case 'Missouri':
	case 'Montana':
	case 'Nebraska':
	case 'North Carolina':
	case 'Ohio':
	case 'Pennsylvania':
	case 'Rhode Island':
	case 'South Carolina':
	case 'Utah':
	case 'West Virginia':
	case 'Vermont':
	


		stat_tax_allowance =income*(3)/100;
			return stat_tax_allowance;

			break;

	case 'Connecticut ':
	case 'Kentucky':
	case 'Minnesota':
	case 'New Jersey':
	case 'Oregon':
		stat_tax_allowance =income*(5)/100;
			return stat_tax_allowance;

			break;

	case 'California' :
	case 'District of Columbia':
	case 'Maryland':
		stat_tax_allowance =income*(6)/100;
			return stat_tax_allowance;

			break;
    
    case 'Alaska':
		stat_tax_allowance =income*(0);
			return stat_tax_allowance;

			break;

	case 'Hawaii':
	case 'Massachusetts':
	case 'Virginia':
	case 'Wisconsin':
		stat_tax_allowance =income*(4)/100;
			return stat_tax_allowance;

			break;

	case 'New York':
		stat_tax_allowance =income*(7)/100;
			return stat_tax_allowance;

			break;

	case 'Florida':
	case 'Nevada':
	case 'New Hampshire':
	case 'North Dakota':
	case 'South Dakota':
	case 'Tennessee':
	case 'Washington':
	case 'Wyoming	':
		stat_tax_allowance =income*(1)/100;
			return stat_tax_allowance;

			break;
}
}

else{
		if(income<14999)
		{	switch (state)
			{
					case 'Alabama':
					case 'American Samoa':
					case 'Canada and Canadian Provinces':
					case 'Federated States of Micronesia':
					case 'Florida':
					case 'Guam':
					case 'Louisiana':
					case 'Marshall Islands':
					case 'Mexico':
					case 'Texas':
					case 'Virgin Islands':
					case 'Washington	':
					case 'West Virginia':
					case 'Blank or Invalid State':
					case 'Other':
					case 'New Mexico':
					case 'Northern Mariana Islands':
					case 'Oklahoma':
					case 'Palau':
					case 'Puerto Rico':


						stat_tax_allowance =income*(3)/100;
						return stat_tax_allowance;
						break;

					case 'Alaska':
					case 'Nevada':
					case 'North Dakota':
					case 'South Dakota':
					case 'Tennessee':
					case 'Wyoming':
						stat_tax_allowance =income*(2)/100;
						return stat_tax_allowance;
						break;

					case 'Arizona':
					case 'Arkansas':
					case 'Colorado':
					case 'Indiana':
					case 'Kansas':
					case 'New Hampshire':
					case 'South Carolina':
						stat_tax_allowance =income*(4)/100;
						return stat_tax_allowance;
						break;

					case 'Hawaii':
					case 'Idaho':
					case 'Illinois':
					case 'Iowa':
					case 'Delaware':
					case 'Georgia':
					case 'Kentucky':
					case 'Missouri':
					case 'Montana':
					case 'Nebraska':
					case 'North Carolina':
					case 'Ohio':
					case 'Pennsylvania':
					case 'Utah':
					stat_tax_allowance =income*(5)/100;
						return stat_tax_allowance;
						break;

					case 'California':
					case 'Maryland':
					stat_tax_allowance =income*(8)/100;
						return stat_tax_allowance;
						break;

					case 'Connecticut': 
					case 'New Jersey':
					case 'New York':
					stat_tax_allowance =income*(9)/100;
						return stat_tax_allowance;
						break;

					case 'District of Columbia':
					case 'Massachusetts':
					case 'Oregon':
					stat_tax_allowance =income*(7)/100;
						return stat_tax_allowance;
						break;

					case 'Maine':
					case 'Minnesota':
					case 'Rhode Island':
					case 'Vermont':
					case 'Virginia':
					case 'Wisconsin':
					stat_tax_allowance =income*(6)/100;
						return stat_tax_allowance;
						break;
					}
		}
		else
		{	switch(state)
			{	
				case 'Alaska':
				case 'South Dakota':
				case 'Tennessee':
				case 'Wyoming':
				case 'Nevada':
				case 'North Dakota':
				stat_tax_allowance =income*(1)/100;
				return stat_tax_allowance;
				break;

				case 'Alabama':
				case 'American Samoa':
				case 'Canada and Canadian Provinces ':
				case 'Federated States of Micronesia ':
				case 'Florida':
				case 'Guam':
				case 'Louisiana':
				case 'Marshall Islands':
				case 'Mexico':
				case 'Mississippi':
				case 'New Mexico':
				case 'Northern Mariana Islands':
				case 'Oklahoma':
				case 'Palau':
				case 'Texas':
				case 'Puerto Rico':
				case 'Virgin Islands':
				case 'Washington':
				case 'West Virginia':
				case 'Blank or Invalid State':
				case 'Other':
				stat_tax_allowance =income*(2)/100;
				return stat_tax_allowance;

				break;

				case 'Arizona':
				case 'Arkansas':
				case 'Colorado':
				case 'Indiana':
				case 'Kansas':
				case 'Michigan':
				case 'New Hampshire':
				case 'South Carolina':
				stat_tax_allowance =income*(3)/100;
				return stat_tax_allowance;
				break;

				
				case 'Missouri':
				case 'Montana':
				case 'Nebraska':
				case 'North Carolina':
				case 'Ohio':
				case 'Pennsylvania':
				case 'Utah':
				case 'Kentucky':
				case 'Iowa':
				case 'Illinois':
				case 'Idaho':
				case 'Hawaii':
				case 'Georgia':
				case 'Delaware':
			
				stat_tax_allowance =income*(4)/100;
				return stat_tax_allowance;
				break;

				case 'Maine':
				case 'Minnesota':
				case 'Rhode Island' :
				case 'Vermont':
				case 'Virginia':
				case 'Wisconsin':
				stat_tax_allowance =income*(5)/100;
				return stat_tax_allowance;
				break;

				case 'Massachusetts':
				case 'Oregon':
				case 'District of Columbia':
				stat_tax_allowance =income*(6)/100;
				return stat_tax_allowance;
				break;

				case 'California':
				case 'Maryland':
				stat_tax_allowance =income*(7)/100;
				return stat_tax_allowance;
				break;

				case 'Connecticut':
				case 'New Jersey	':
				case 'New York':

				stat_tax_allowance =income*(8)/100;
				return stat_tax_allowance;
				
				break;

			}

		}



}


	
}
/* END  */
function calc_fedrealincome(married,Income)
    {   var income=Income;
        if(married=='Married')
        {   
           var I10=0;
        var I11=19750;
        var I12=80250;
        var I13=171050;
        var I14=326600;
        var I15=414700;
        var I16=622050;
        var I17=100000000000;

           var K11=Math.max( Math.min(income,I11-I10),0);
            var L11=income-K11;
            var Tax_M11 = K11*(10/100);  // 1 
           // document.write(K11+' '+L11+' '+Tax_M11+'<br>');

            var K12=Math.max(Math.min(L11,I12-I11),0);
            var L12=L11-K12;
            var Tax_M12= K12*(12/100); //2
            //document.write(K12+' '+L12+' '+Tax_M12+'<br>');


           var  K13=Math.max(Math.min(L12,I13-I12),0)
            var L13=L12-K13;
           var  Tax_M13= K13*(22/100);  //3
           // document.write(K13+' '+L13+' '+Tax_M13+'<br>');


           var  K14=Math.max(Math.min(L13,I14-I13),0);
            var L14=L13-K14;
           var  Tax_M14=K14*(24/100); //4
            //document.write(K14+' '+L14+' '+Tax_M14+'<br>');


            var K15=Math.max(Math.min(L14,I15-I14),0);
            var L15=L14-K15;
            var Tax_M15=K15*(32/100); //5
            //document.write(K15+' '+L15+' '+Tax_M15+'<br>');


            var K16=Math.max(Math.min(L15,I16-I15),0);
            var L16=L15-K16;
           var  Tax_M16=K16*(35/100);
            //document.write(K16+' '+L16+' '+Tax_M16+'<br>');


            var K17=Math.max(Math.min(L16,I17-I16),0)
            var L17=L16-K17;
            var Tax_M17 =K17*(37/100);
           // document.write(K17+' '+L17+' '+Tax_M17+'<br>');


            var M18_sum=Tax_M11+Tax_M12+Tax_M13+Tax_M14+Tax_M15+Tax_M16+Tax_M17;
            var k18_income=K11+K12+K13+K14+K15+K16+K17;
            //document.write(M18_sum+' '+k18_income);
           return M18_sum;

        }
        else
        {  var C10=0;
           var C11=9875; 
           var C12=40124 ;
           var C13=85525 ;
           var C14=163300 ;
           var C15=207350;
           var C16=518400;
           var C17=100000000000 ;

            var E11=Math.max(Math.min(income,C11-C10),0);
            var F11=income-E11;
            var G11=E11*(10/100); //1

            var E12=Math.max(Math.min(F11,C12-C11),0);
            var F12=F11-E12;
            var G12=E12*(12/100); //2

            var E13=Math.max(Math.min(F12,C13-C12),0);
            var F13=F12-E13;
            var G13=E13*(22/100); //3

            var E14=Math.max(Math.min(F13,C14-C13),0);
            var F14=F13-E14;
            var G14=E14*(24/100); //4

            var E15=Math.max(Math.min(F14,C15-C14),0);
            var F15=F14-E15;
            var G15=E15*(32/100); //5

            var E16=Math.max(Math.min(F15,C16-C15),0);
            var F16=F15-E16;
            var G16=E16*(35/100); //6

            var E17=Math.max(Math.min(F16,C17-C16),0);
            var F17=F17-E17;
            var G17=E17*(37/100); //2

            var G18_sum=G11+G12+G13+G14+G15+G16+G17;
            var E18_sum=E11+E12+E13+E14+E15+E16+E17;
            return Math.round(G18_sum);


        }

    }
function Programme(abc) 
{   var res=0;
    if(abc=='Childhood General Education')
    {
        res=45*1660;
    }
    else
        if(abc=='Childhood Special and General Education Dual Certification')
        {
        res=52*1660;

        }
    else
        if(abc=='Early Childhood Special and General Education Dual Certification ')
        {
        res=50*1660;
            
        }
    else
        if(abc=='Early Childhood and Childhood General Education Dual Certification')
        {
        res=46*1660;
        }
    else
        if(abc=='Early Childhood Special Education ')
        {
           res= 32*1660;
        }
    else
        if(abc=='Early Childhood General Education')
        { 
           res =50*1660; 
        }
    return res;
}	