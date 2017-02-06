var unitConverter = angular.module("unitConverter", []);



unitConverter.controller('unitConverterController', [

	'$scope',function($scope){

		

		//  conversion rates and UI from http://convert.french-property.co.uk/

		

		var ucc = this;

		

		//attributes

		ucc.lengthValue = 0;

		ucc.lengthValue1 = 0;

		ucc.lengthValue2 = 0;

		

		ucc.IlengthValue = 0;

		ucc.IlengthValue1 = 0;

		ucc.IlengthValue2 = 0;

		

		var in3;

		var ft3;

		var flOz;

		var pt;

		var gal;

		var inch;

		var ft;

		var yd;

		var mile;

		var Nmile;

		var oz;

		var lb;

		var st;

		var ton;

		
//variables for metric
		
		var cm3;
		var dm3;
		var m3;
		var l;
		var hl;
		var mm;
		var cm;
		var m;
		var km;
		var mg;
		var g;
		var kg;
		var t;

		ucc.answer;

		ucc.answer1;

		ucc.answer2;

	//imperial answers
		ucc.Ianswer;

		ucc.Ianswer1;

		ucc.Ianswer2;


// beginning the unit name & code stuff: 

		ucc.metric_volume_units = 

    [

        {
            unit_name: "Cubic Centimeters",
            unit_code: "cm3",
            type: "metric"
        },

        {
            unit_name: "Cubic Decimeters",
            unit_code: "dm3",
            type: "metric"
        },

		{
            unit_name: "Cubic Meters",
            unit_code: "m3",
            type: "metric"
        },

		{

            unit_name: "Litres",

            unit_code: "l",

            type: "metric"

        },

		{

            unit_name: "Hectolitres",

            unit_code: "hl",

            type: "metric"

        }

    ];

    

        ucc.imperial_volume_units = 

    [

            {

            unit_name: "Cubic Inches",

            unit_code: "in3",

            type: "imperial"

        },

        {

            unit_name: "Cubic Feet",

            unit_code: "ft3",

            type: "imperial"

        },

		{

            unit_name: "Fluid Ounces",

            unit_code: "flOz",

            type: "imperial"

        },

		{

            unit_name: "Pints",

            unit_code: "pt",

            type: "imperial"

        },

		{

            unit_name: "Gallons",

            unit_code: "gal",

            type: "imperial"

        }

            ];

            

        ucc.metric_length_units = 

    [

        {

            unit_name: "Millimetres",

            unit_code: "mm",

            type: "metric"

        },

        {

            unit_name: "Centimeters",

            unit_code: "cm",

            type: "metric"

        },

		{

            unit_name: "Meters",

            unit_code: "m",

            type: "metric"

        },

		{

            unit_name: "Kilometer",

            unit_code: "km",

            type: "metric"

        }

    ];    

		

		ucc.imperial_length_units = 

    [

            {

            unit_name: "Inches",

            unit_code: "in",

            type: "imperial"

        },

        {

            unit_name: "Feet",

            unit_code: "ft",

            type: "imperial"

        },

		{

            unit_name: "Yards",

            unit_code: "yd",

            type: "imperial"

        },

		{

            unit_name: "Miles",

            unit_code: "mile",

            type: "imperial"

        },

		{

            unit_name: "Nautical Miles",

            unit_code: "Nmile",

            type: "imperial"

        }

            ];

		

		ucc.metric_mass_units = 

    [

        {

            unit_name: "Milligram",

            unit_code: "mg",

            type: "metric"

        },

        {

            unit_name: "Grams",

            unit_code: "g",

            type: "metric"

        },

		{

            unit_name: "Kilogram",

            unit_code: "kg",

            type: "metric"

        },

		{

            unit_name: "Tonnes",

            unit_code: "t",

            type: "metric"

        }

    ]; 

    

        ucc.imperial_mass_units = 

    [

            {

            unit_name: "Ounces",

            unit_code: "oz",

            type: "imperial"

        },

        {

            unit_name: "Pounds",

            unit_code: "lb",

            type: "imperial"

        },

		{

            unit_name: "Stone",

            unit_code: "st",

            type: "imperial"

        },

		{

            unit_name: "Real Ton",

            unit_code: "ton",

            type: "imperial"

        }

            ];

		

//*****************************************************************************





		ucc.Imetric_volume_units = 

    [

        {

            unit_name: "Cubic Centimeters",

            unit_code: "cm3",

            type: "metric"

        },

        {

            unit_name: "Cubic Decimeters",

            unit_code: "dm3",

            type: "metric"

        },

		{

            unit_name: "Cubic Meters",

            unit_code: "m3",

            type: "metric"

        },

		{
            unit_name: "Litres",
            unit_code: "l",
            type: "metric"
        },

		{
            unit_name: "Hectolitres",
            unit_code: "hl",
            type: "metric"
        }

    ];

        ucc.Iimperial_volume_units = 

    [
            {
            unit_name: "Cubic Inches",
            unit_code: "in3",
            type: "imperial"
        },
        {
            unit_name: "Cubic Feet",
            unit_code: "ft3",
            type: "imperial"
        },

		{
            unit_name: "Fluid Ounces",
            unit_code: "flOz",
            type: "imperial"
        },

		{
            unit_name: "Pints",
            unit_code: "pt",
            type: "imperial"
        },

		{
            unit_name: "Gallons",
            unit_code: "gal",
            type: "imperial"
        }

            ];

		ucc.Imetric_length_units = 

    [
        {
            unit_name: "Millimetres",
            unit_code: "mm",
            type: "metric"
        },

        {
            unit_name: "Centimeters",
            unit_code: "cm",
            type: "metric"
        },

		{
            unit_name: "Meters",
            unit_code: "m",
            type: "metric"
        },

		{
            unit_name: "Kilometer",
            unit_code: "km",
            type: "metric"
        }

    ];    

		ucc.Iimperial_length_units = 

    [
            {
            unit_name: "Inches",
            unit_code: "in",
            type: "imperial"
        },

        {

            unit_name: "Feet",

            unit_code: "ft",

            type: "imperial"

        },

		{

            unit_name: "Yards",

            unit_code: "yd",

            type: "imperial"

        },

		{

            unit_name: "Miles",

            unit_code: "mile",

            type: "imperial"

        },

		{

            unit_name: "Nautical Miles",

            unit_code: "Nmile",

            type: "imperial"

        }

            ];

            

		ucc.Imetric_mass_units = 

    [

        {

            unit_name: "Milligram",

            unit_code: "mg",

            type: "metric"

        },

        {

            unit_name: "Grams",

            unit_code: "g",

            type: "metric"

        },

		{

            unit_name: "Kilogram",

            unit_code: "kg",

            type: "metric"

        },

		{

            unit_name: "Tonnes",

            unit_code: "t",

            type: "metric"

        }

    ]; 

    

        ucc.Iimperial_mass_units = 

    [

            {

            unit_name: "Ounces",

            unit_code: "oz",

            type: "imperial"

        },

        {

            unit_name: "Pounds",

            unit_code: "lb",

            type: "imperial"

        },

		{

            unit_name: "Stone",

            unit_code: "st",

            type: "imperial"

        },

		{

            unit_name: "Real Ton",

            unit_code: "ton",

            type: "imperial"

        }

            ];		





//*****************************************************************************		



		$scope.$watch('ucc.lengthValue', lengthUpdated);

		$scope.$watch('ucc.lengthValue1', lengthUpdated1);

		$scope.$watch('ucc.lengthValue2', lengthUpdated2);

		

//*****************************************************************************		

		

		$scope.$watch('ucc.IlengthValue', IlengthUpdated);

		$scope.$watch('ucc.IlengthValue1', IlengthUpdated1);

		$scope.$watch('ucc.IlengthValue2', IlengthUpdated2);



//*****************************************************************************		



		ucc.selected_metric_volume_unit = ucc.metric_volume_units[0];

		ucc.selected_imperial_volume_unit = ucc.imperial_volume_units[0];

		

		ucc.selected_metric_length_unit = ucc.metric_length_units[0];

		ucc.selected_imperial_length_unit = ucc.imperial_length_units[0];

		

		ucc.selected_metric_mass_unit = ucc.metric_mass_units[0];

		ucc.selected_imperial_mass_unit = ucc.imperial_mass_units[0];





//*****************************************************************************		





		ucc.Iselected_metric_volume_unit = ucc.Imetric_volume_units[0];

		ucc.Iselected_imperial_volume_unit = ucc.Iimperial_volume_units[0];

		

		ucc.Iselected_metric_length_unit = ucc.Imetric_length_units[0];

		ucc.Iselected_imperial_length_unit = ucc.Iimperial_length_units[0];

		

		ucc.Iselected_metric_mass_unit = ucc.Imetric_mass_units[0];

		ucc.Iselected_imperial_mass_unit = ucc.Iimperial_mass_units[0];



//*****************************************************************************		

		

		ucc.selected_Number = ucc.lengthValue.toString();

		ucc.selected_Number1 = ucc.lengthValue1.toString();

		ucc.selected_Number2 = ucc.lengthValue2.toString();

		

//*****************************************************************************		

		

		ucc.Iselected_Number = ucc.IlengthValue.toString();

		ucc.Iselected_Number1 = ucc.IlengthValue1.toString();

		ucc.Iselected_Number2 = ucc.IlengthValue2.toString();



//*****************************************************************************		



		//behaviors

		

		function lengthUpdated(){

			console.log(ucc.lengthValue);

			ucc.selected_Number = ucc.lengthValue.toString();

			

		}

		

		function lengthUpdated1(){

			console.log(ucc.lengthValue1);

			ucc.selected_Number1 = ucc.lengthValue1.toString();

		}

		

		function lengthUpdated2(){

			console.log(ucc.lengthValue2);

			ucc.selected_Number2 = ucc.lengthValue2.toString();

		}



//*****************************************************************************		

		

		function IlengthUpdated(){

			console.log(ucc.IlengthValue);

			ucc.Iselected_Number = ucc.IlengthValue.toString();

			

		}

		

		function IlengthUpdated1(){

			console.log(ucc.IlengthValue1);

			ucc.Iselected_Number1 = ucc.IlengthValue1.toString();

		}

		

		function IlengthUpdated2(){

			console.log(ucc.IlengthValue2);

			ucc.Iselected_Number2 = ucc.IlengthValue2.toString();

		}

//Volume function
		ucc.showSelectedunitMetric = function(){

			console.log(ucc.selected_metric_volume_unit.unit_name);

		}
	
		ucc.showSelectedunitImperial = function(){

			console.log(ucc.selected_imperial_volume_unit.unit_name);

		}

		ucc.IshowSelectedunitMetric = function(){

			console.log(ucc.Iselected_metric_volume_unit.unit_name);

		}
		
		ucc.IshowSelectedunitImperial = function(){

			console.log(ucc.Iselected_imperial_volume_unit.unit_name);

		}

//function with all if statements to make it work so if blah blah blah then it knows how to convert
		ucc.runApplication = function(){

		    if(ucc.selected_metric_volume_unit.unit_code == "cm3" && ucc.selected_imperial_volume_unit.unit_code == "in3"){
		       ucc.cm3toin3(ucc.lengthValue);
		       ucc.answer = in3;
		    }else if(ucc.selected_metric_volume_unit.unit_code == "dm3" && ucc.selected_imperial_volume_unit.unit_code == "in3"){
		       ucc.dm3toin3(ucc.lengthValue);
		       ucc.answer = in3;
		    }else if(ucc.selected_metric_volume_unit.unit_code == "m3" && ucc.selected_imperial_volume_unit.unit_code == "in3"){
		       ucc.m3toin3(ucc.lengthValue);
		       ucc.answer = in3;
		    }else if(ucc.selected_metric_volume_unit.unit_code == "l" && ucc.selected_imperial_volume_unit.unit_code == "in3"){
		       ucc.ltoin3(ucc.lengthValue);
		       ucc.answer = in3;
		    }else if(ucc.selected_metric_volume_unit.unit_code == "hl" && ucc.selected_imperial_volume_unit.unit_code == "in3"){
		       ucc.hltoin3(ucc.lengthValue);
		       ucc.answer = in3;
	//Now changing all metric to ft3
		    }else if(ucc.selected_metric_volume_unit.unit_code == "dm3" && ucc.selected_imperial_volume_unit.unit_code == "ft3"){
		       ucc.dm3toft3(ucc.lengthValue);
		       ucc.answer = ft3;
		    }else if(ucc.selected_metric_volume_unit.unit_code == "cm3" && ucc.selected_imperial_volume_unit.unit_code == "ft3"){
		       ucc.cm3toft3(ucc.lengthValue);
		       ucc.answer = ft3;
		    }else if(ucc.selected_metric_volume_unit.unit_code == "m3" && ucc.selected_imperial_volume_unit.unit_code == "ft3"){
		       ucc.m3toft3(ucc.lengthValue);
		       ucc.answer = ft3;
		    }else if(ucc.selected_metric_volume_unit.unit_code == "l" && ucc.selected_imperial_volume_unit.unit_code == "ft3"){
		       ucc.ltoft3(ucc.lengthValue);
		       ucc.answer = ft3;
		    }else if(ucc.selected_metric_volume_unit.unit_code == "hl" && ucc.selected_imperial_volume_unit.unit_code == "ft3"){
		       ucc.hltoft3(ucc.lengthValue);
		       ucc.answer = ft3;
//changin all to flOz
		    }else if(ucc.selected_metric_volume_unit.unit_code == "dm3" && ucc.selected_imperial_volume_unit.unit_code == "flOz"){
		       ucc.dm3toflOz(ucc.lengthValue);
		       ucc.answer = flOz;
		    }else if(ucc.selected_metric_volume_unit.unit_code == "cm3" && ucc.selected_imperial_volume_unit.unit_code == "flOz"){
		       ucc.cm3toflOz(ucc.lengthValue);
		       ucc.answer = flOz;
		    }else if(ucc.selected_metric_volume_unit.unit_code == "m3" && ucc.selected_imperial_volume_unit.unit_code == "flOz"){
		       ucc.m3toflOz(ucc.lengthValue);
		       ucc.answer = flOz;
		    }else if(ucc.selected_metric_volume_unit.unit_code == "l" && ucc.selected_imperial_volume_unit.unit_code == "flOz"){
		       ucc.ltoflOz(ucc.lengthValue);
		       ucc.answer = flOz;
		    }else if(ucc.selected_metric_volume_unit.unit_code == "hl" && ucc.selected_imperial_volume_unit.unit_code == "flOz"){
		       ucc.hltoflOz(ucc.lengthValue);
		       ucc.answer = flOz;
//changing all to pint
		    }else if(ucc.selected_metric_volume_unit.unit_code == "dm3" && ucc.selected_imperial_volume_unit.unit_code == "pt"){
		       ucc.dm3topt(ucc.lengthValue);
		       ucc.answer = pt;
		    }else if(ucc.selected_metric_volume_unit.unit_code == "cm3" && ucc.selected_imperial_volume_unit.unit_code == "pt"){
		       ucc.cm3topt(ucc.lengthValue);
		       ucc.answer = pt;
		    }else if(ucc.selected_metric_volume_unit.unit_code == "m3" && ucc.selected_imperial_volume_unit.unit_code == "pt"){
		       ucc.m3topt(ucc.lengthValue);
		       ucc.answer = pt;
		    }else if(ucc.selected_metric_volume_unit.unit_code == "l" && ucc.selected_imperial_volume_unit.unit_code == "pt"){
		       ucc.ltopt(ucc.lengthValue);
		       ucc.answer = pt;
		    }else if(ucc.selected_metric_volume_unit.unit_code == "hl" && ucc.selected_imperial_volume_unit.unit_code == "pt"){
		       ucc.hltopt(ucc.lengthValue);
		       ucc.answer = pt;
//changing all to pint		    
		    }else if(ucc.selected_metric_volume_unit.unit_code == "dm3" && ucc.selected_imperial_volume_unit.unit_code == "gal"){
		       ucc.dm3togal(ucc.lengthValue);
		       ucc.answer = gal;
		    }else if(ucc.selected_metric_volume_unit.unit_code == "cm3" && ucc.selected_imperial_volume_unit.unit_code == "gal"){
		       ucc.cm3togal(ucc.lengthValue);
		       ucc.answer = gal;
		    }else if(ucc.selected_metric_volume_unit.unit_code == "m3" && ucc.selected_imperial_volume_unit.unit_code == "gal"){
		       ucc.m3togal(ucc.lengthValue);
		       ucc.answer = gal;
		    }else if(ucc.selected_metric_volume_unit.unit_code == "l" && ucc.selected_imperial_volume_unit.unit_code == "gal"){
		       ucc.ltogal(ucc.lengthValue);
		       ucc.answer = gal;
		    }else if(ucc.selected_metric_volume_unit.unit_code == "hl" && ucc.selected_imperial_volume_unit.unit_code == "gal"){
		       ucc.hltogal(ucc.lengthValue);
		       ucc.answer = gal;
		    } 

		}
// Function to change length
		ucc.runApplicationLength = function(){
		    if(ucc.selected_metric_length_unit.unit_code == "mm" && ucc.selected_imperial_length_unit.unit_code == "in" ){
		        ucc.mmtoinch(ucc.lengthValue1);
		        ucc.answer1 = inch;
		    }else if(ucc.selected_metric_length_unit.unit_code == "cm" && ucc.selected_imperial_length_unit.unit_code == "in" ){
		        ucc.cmtoinch(ucc.lengthValue1);
		        ucc.answer1 = inch;
		    }else if(ucc.selected_metric_length_unit.unit_code == "m" && ucc.selected_imperial_length_unit.unit_code == "in" ){
		        ucc.mtoinch(ucc.lengthValue1);
		        ucc.answer1 = inch;
		    }else if(ucc.selected_metric_length_unit.unit_code == "km" && ucc.selected_imperial_length_unit.unit_code == "in" ){
		        ucc.kmtoinch(ucc.lengthValue1);
		        ucc.answer1 = inch;
// Changing to ft
		    }else if(ucc.selected_metric_length_unit.unit_code == "mm" && ucc.selected_imperial_length_unit.unit_code == "ft" ){
		        ucc.mmtoft(ucc.lengthValue1);
		        ucc.answer1 = ft;
		    }else if(ucc.selected_metric_length_unit.unit_code == "cm" && ucc.selected_imperial_length_unit.unit_code == "ft" ){
		        ucc.cmtoft(ucc.lengthValue1);
		        ucc.answer1 = ft;
		    }else if(ucc.selected_metric_length_unit.unit_code == "m" && ucc.selected_imperial_length_unit.unit_code == "ft" ){
		        ucc.mtoft(ucc.lengthValue1);
		        ucc.answer1 = ft;
		    }else if(ucc.selected_metric_length_unit.unit_code == "km" && ucc.selected_imperial_length_unit.unit_code == "ft" ){
		        ucc.kmtoft(ucc.lengthValue1);
		        ucc.answer1 = ft;
//Changing to yd
		    }else if(ucc.selected_metric_length_unit.unit_code == "mm" && ucc.selected_imperial_length_unit.unit_code == "yd" ){
		        ucc.mmtoyd(ucc.lengthValue1);
		        ucc.answer1 = yd;
		    }else if(ucc.selected_metric_length_unit.unit_code == "cm" && ucc.selected_imperial_length_unit.unit_code == "yd" ){
		        ucc.cmtoyd(ucc.lengthValue1);
		        ucc.answer1 = yd;
		    }else if(ucc.selected_metric_length_unit.unit_code == "m" && ucc.selected_imperial_length_unit.unit_code == "yd" ){
		        ucc.mtoyd(ucc.lengthValue1);
		        ucc.answer1 = yd;
		    }else if(ucc.selected_metric_length_unit.unit_code == "km" && ucc.selected_imperial_length_unit.unit_code == "yd" ){
		        ucc.kmtoyd(ucc.lengthValue1);
		        ucc.answer1 = yd;
		//changing all to mile
		    }else if(ucc.selected_metric_length_unit.unit_code == "mm" && ucc.selected_imperial_length_unit.unit_code == "mile" ){
		        ucc.mmtomile(ucc.lengthValue1);
		        ucc.answer1 = mile;
		    }else if(ucc.selected_metric_length_unit.unit_code == "cm" && ucc.selected_imperial_length_unit.unit_code == "mile" ){
		        ucc.cmtomile(ucc.lengthValue1);
		        ucc.answer1 = mile;
		    }else if(ucc.selected_metric_length_unit.unit_code == "m" && ucc.selected_imperial_length_unit.unit_code == "mile" ){
		        ucc.mtomile(ucc.lengthValue1);
		        ucc.answer1 = mile;
		    }else if(ucc.selected_metric_length_unit.unit_code == "km" && ucc.selected_imperial_length_unit.unit_code == "mile" ){
		        ucc.kmtomile(ucc.lengthValue1);
		        ucc.answer1 = mile;
//changing all to Nmile
		    }else if(ucc.selected_metric_length_unit.unit_code == "mm" && ucc.selected_imperial_length_unit.unit_code == "Nmile" ){
		        ucc.mmtoNmile(ucc.lengthValue1);
		        ucc.answer1 = Nmile;
		    }else if(ucc.selected_metric_length_unit.unit_code == "cm" && ucc.selected_imperial_length_unit.unit_code == "Nmile" ){
		        ucc.cmtoNmile(ucc.lengthValue1);
		        ucc.answer1 = Nmile;
		    }else if(ucc.selected_metric_length_unit.unit_code == "m" && ucc.selected_imperial_length_unit.unit_code == "Nmile" ){
		        ucc.mtoNmile(ucc.lengthValue1);
		        ucc.answer1 = Nmile;
		    }else if(ucc.selected_metric_length_unit.unit_code == "km" && ucc.selected_imperial_length_unit.unit_code == "Nmile" ){
		        ucc.kmtoNmile(ucc.lengthValue1);
		        ucc.answer1 = Nmile;
		}
		}
// Function for changing mass
		ucc.runApplicationMass = function(){
		    if(ucc.selected_metric_mass_unit.unit_code == "mg" && ucc.selected_imperial_mass_unit.unit_code == "oz" ){
		        ucc.mgtooz(ucc.lengthValue2);
		        ucc.answer2 = oz;
		    }else if(ucc.selected_metric_mass_unit.unit_code == "g" && ucc.selected_imperial_mass_unit.unit_code == "oz" ){
		        ucc.gtooz(ucc.lengthValue2);
		        ucc.answer2 = oz;
		    }else if(ucc.selected_metric_mass_unit.unit_code == "kg" && ucc.selected_imperial_mass_unit.unit_code == "oz" ){
		        ucc.kgtooz(ucc.lengthValue2);
		        ucc.answer2 = oz;
		    }else if(ucc.selected_metric_mass_unit.unit_code == "t" && ucc.selected_imperial_mass_unit.unit_code == "oz" ){
		        ucc.ttooz(ucc.lengthValue2);
		        ucc.answer2 = oz;
//changing to lb
		    }else if(ucc.selected_metric_mass_unit.unit_code == "mg" && ucc.selected_imperial_mass_unit.unit_code == "lb" ){
		        ucc.mgtolb(ucc.lengthValue2);
		        ucc.answer2 = lb;
		    }else if(ucc.selected_metric_mass_unit.unit_code == "g" && ucc.selected_imperial_mass_unit.unit_code == "lb" ){
		        ucc.gtolb(ucc.lengthValue2);
		        ucc.answer2 = lb;
		    }else if(ucc.selected_metric_mass_unit.unit_code == "kg" && ucc.selected_imperial_mass_unit.unit_code == "lb" ){
		        ucc.kgtolb(ucc.lengthValue2);
		        ucc.answer2 = lb;
		    }else if(ucc.selected_metric_mass_unit.unit_code == "t" && ucc.selected_imperial_mass_unit.unit_code == "lb" ){
		        ucc.ttolb(ucc.lengthValue2);
		        ucc.answer2 = lb;
//changing to st
		    }else if(ucc.selected_metric_mass_unit.unit_code == "mg" && ucc.selected_imperial_mass_unit.unit_code == "st" ){
		        ucc.mgtost(ucc.lengthValue2);
		        ucc.answer2 = st;
		    }else if(ucc.selected_metric_mass_unit.unit_code == "g" && ucc.selected_imperial_mass_unit.unit_code == "st" ){
		        ucc.gtost(ucc.lengthValue2);
		        ucc.answer2 = st;
		    }else if(ucc.selected_metric_mass_unit.unit_code == "kg" && ucc.selected_imperial_mass_unit.unit_code == "st" ){
		        ucc.kgtost(ucc.lengthValue2);
		        ucc.answer2 = st;
		    }else if(ucc.selected_metric_mass_unit.unit_code == "t" && ucc.selected_imperial_mass_unit.unit_code == "st" ){
		        ucc.ttost(ucc.lengthValue2);
		        ucc.answer2 = st;
//changing to ton
		    }else if(ucc.selected_metric_mass_unit.unit_code == "mg" && ucc.selected_imperial_mass_unit.unit_code == "ton" ){
		        ucc.mgtoton(ucc.lengthValue2);
		        ucc.answer2 = ton;
		    }else if(ucc.selected_metric_mass_unit.unit_code == "g" && ucc.selected_imperial_mass_unit.unit_code == "ton" ){
		        ucc.gtoton(ucc.lengthValue2);
		        ucc.answer2 = ton;
		    }else if(ucc.selected_metric_mass_unit.unit_code == "kg" && ucc.selected_imperial_mass_unit.unit_code == "ton" ){
		        ucc.kgtoton(ucc.lengthValue2);
		        ucc.answer2 = ton;
		    }else if(ucc.selected_metric_mass_unit.unit_code == "t" && ucc.selected_imperial_mass_unit.unit_code == "ton" ){
		        ucc.ttoton(ucc.lengthValue2);
		        ucc.answer2 = ton;
		    }
		}
	//changing volume
		ucc.IrunApplication = function(){
			 if(ucc.Iselected_metric_volume_unit.unit_code == "cm3" && ucc.Iselected_imperial_volume_unit.unit_code == "in3"){
		       ucc.in3tocm3(ucc.IlengthValue);
		       ucc.Ianswer = cm3;
			 }else if(ucc.Iselected_metric_volume_unit.unit_code == "cm3" && ucc.Iselected_imperial_volume_unit.unit_code == "ft3"){
		       ucc.ft3tocm3(ucc.IlengthValue);
		       ucc.Ianswer = cm3;
			 }else if(ucc.Iselected_metric_volume_unit.unit_code == "cm3" && ucc.Iselected_imperial_volume_unit.unit_code == "flOz"){
		       ucc.flOztocm3(ucc.IlengthValue);
		       ucc.Ianswer = cm3;
			 }else if(ucc.Iselected_metric_volume_unit.unit_code == "cm3" && ucc.Iselected_imperial_volume_unit.unit_code == "pt"){
		       ucc.pttocm3(ucc.IlengthValue);
		       ucc.Ianswer = cm3;
			 }else if(ucc.Iselected_metric_volume_unit.unit_code == "cm3" && ucc.Iselected_imperial_volume_unit.unit_code == "gal"){
		       ucc.galtocm3(ucc.IlengthValue);
		       ucc.Ianswer = cm3;
// changin tactics
			 }else if(ucc.Iselected_metric_volume_unit.unit_code == "dm3" && ucc.Iselected_imperial_volume_unit.unit_code == "in3"){
		       ucc.in3todm3(ucc.IlengthValue);
		       ucc.Ianswer = dm3;
			 }else if(ucc.Iselected_metric_volume_unit.unit_code == "dm3" && ucc.Iselected_imperial_volume_unit.unit_code == "ft3"){
		       ucc.ft3todm3(ucc.IlengthValue);
		       ucc.Ianswer = dm3;
			 }else if(ucc.Iselected_metric_volume_unit.unit_code == "dm3" && ucc.Iselected_imperial_volume_unit.unit_code == "flOz"){
		       ucc.flOztodm3(ucc.IlengthValue);
		       ucc.Ianswer = dm3;
			 }else if(ucc.Iselected_metric_volume_unit.unit_code == "dm3" && ucc.Iselected_imperial_volume_unit.unit_code == "pt"){
		       ucc.pttodm3(ucc.IlengthValue);
		       ucc.Ianswer = dm3;
			 }else if(ucc.Iselected_metric_volume_unit.unit_code == "dm3" && ucc.Iselected_imperial_volume_unit.unit_code == "gal"){
		       ucc.galtodm3(ucc.IlengthValue);
		       ucc.Ianswer = dm3;
			 }else if(ucc.Iselected_metric_volume_unit.unit_code == "m3" && ucc.Iselected_imperial_volume_unit.unit_code == "in3"){
		       ucc.in3tom3(ucc.IlengthValue);
		       ucc.Ianswer = m3;
			 }else if(ucc.Iselected_metric_volume_unit.unit_code == "m3" && ucc.Iselected_imperial_volume_unit.unit_code == "ft3"){
		       ucc.ft3tom3(ucc.IlengthValue);
		       ucc.Ianswer = m3;
			 }else if(ucc.Iselected_metric_volume_unit.unit_code == "m3" && ucc.Iselected_imperial_volume_unit.unit_code == "flOz"){
		       ucc.flOztom3(ucc.IlengthValue);
		       ucc.Ianswer = m3;
			 }else if(ucc.Iselected_metric_volume_unit.unit_code == "m3" && ucc.Iselected_imperial_volume_unit.unit_code == "pt"){
		       ucc.pttom3(ucc.IlengthValue);
		       ucc.Ianswer = m3;
			 }else if(ucc.Iselected_metric_volume_unit.unit_code == "m3" && ucc.Iselected_imperial_volume_unit.unit_code == "gal"){
		       ucc.galtom3(ucc.IlengthValue);
		       ucc.Ianswer = m3;

			 }else if(ucc.Iselected_metric_volume_unit.unit_code == "l" && ucc.Iselected_imperial_volume_unit.unit_code == "in3"){
		       ucc.in3tol(ucc.IlengthValue);
		       ucc.Ianswer = l;
			 }else if(ucc.Iselected_metric_volume_unit.unit_code == "l" && ucc.Iselected_imperial_volume_unit.unit_code == "ft3"){
		       ucc.ft3tol(ucc.IlengthValue);
		       ucc.Ianswer = l;
			 }else if(ucc.Iselected_metric_volume_unit.unit_code == "l" && ucc.Iselected_imperial_volume_unit.unit_code == "flOz"){
		       ucc.flOztol(ucc.IlengthValue);
		       ucc.Ianswer = l;
			 }else if(ucc.Iselected_metric_volume_unit.unit_code == "l" && ucc.Iselected_imperial_volume_unit.unit_code == "pt"){
		       ucc.pttol(ucc.IlengthValue);
		       ucc.Ianswer = l;
			 }else if(ucc.Iselected_metric_volume_unit.unit_code == "l" && ucc.Iselected_imperial_volume_unit.unit_code == "gal"){
		       ucc.galtol(ucc.IlengthValue);
		       ucc.Ianswer = l;

			 }else if(ucc.Iselected_metric_volume_unit.unit_code == "hl" && ucc.Iselected_imperial_volume_unit.unit_code == "in3"){
		       ucc.in3tohl(ucc.IlengthValue);
		       ucc.Ianswer = hl;
			 }else if(ucc.Iselected_metric_volume_unit.unit_code == "hl" && ucc.Iselected_imperial_volume_unit.unit_code == "ft3"){
		       ucc.ft3tohl(ucc.IlengthValue);
		       ucc.Ianswer = hl;
			 }else if(ucc.Iselected_metric_volume_unit.unit_code == "hl" && ucc.Iselected_imperial_volume_unit.unit_code == "flOz"){
		       ucc.flOztohl(ucc.IlengthValue);
		       ucc.Ianswer = hl;
			 }else if(ucc.Iselected_metric_volume_unit.unit_code == "hl" && ucc.Iselected_imperial_volume_unit.unit_code == "pt"){
		       ucc.pttohl(ucc.IlengthValue);
		       ucc.Ianswer = hl;
			 }else if(ucc.Iselected_metric_volume_unit.unit_code == "hl" && ucc.Iselected_imperial_volume_unit.unit_code == "gal"){
		       ucc.galtohl(ucc.IlengthValue);
		       ucc.Ianswer = hl;
			 }
		}

		

		ucc.IrunApplicationLength = function(){
			 if(ucc.Iselected_metric_length_unit.unit_code == "mm" && ucc.Iselected_imperial_length_unit.unit_code == "in"){
		       ucc.intomm(ucc.IlengthValue1);
		       ucc.Ianswer1 = mm;
			 }else if(ucc.Iselected_metric_length_unit.unit_code == "mm" && ucc.Iselected_imperial_length_unit.unit_code == "ft"){
		       ucc.fttomm(ucc.IlengthValue1);
		       ucc.Ianswer1 = mm;
			 }else if(ucc.Iselected_metric_length_unit.unit_code == "mm" && ucc.Iselected_imperial_length_unit.unit_code == "yd"){
		       ucc.ydtomm(ucc.IlengthValue1);
		       ucc.Ianswer1 = mm;
			 }else if(ucc.Iselected_metric_length_unit.unit_code == "mm" && ucc.Iselected_imperial_length_unit.unit_code == "mile"){
		       ucc.miletomm(ucc.IlengthValue1);
		       ucc.Ianswer1 = mm;
			 }else if(ucc.Iselected_metric_length_unit.unit_code == "mm" && ucc.Iselected_imperial_length_unit.unit_code == "Nmile"){
		       ucc.Nmiletomm(ucc.IlengthValue1);
		       ucc.Ianswer1 = mm;

			 }else if(ucc.Iselected_metric_length_unit.unit_code == "cm" && ucc.Iselected_imperial_length_unit.unit_code == "in"){
		       ucc.intocm(ucc.IlengthValue1);
		       ucc.Ianswer1 = cm;
			 }else if(ucc.Iselected_metric_length_unit.unit_code == "cm" && ucc.Iselected_imperial_length_unit.unit_code == "ft"){
		       ucc.fttocm(ucc.IlengthValue1);
		       ucc.Ianswer1 = cm;
			 }else if(ucc.Iselected_metric_length_unit.unit_code == "cm" && ucc.Iselected_imperial_length_unit.unit_code == "yd"){
		       ucc.ydtocm(ucc.IlengthValue1);
		       ucc.Ianswer1 = cm;
			 }else if(ucc.Iselected_metric_length_unit.unit_code == "cm" && ucc.Iselected_imperial_length_unit.unit_code == "mile"){
		       ucc.miletocm(ucc.IlengthValue1);
		       ucc.Ianswer1 = cm;
			 }else if(ucc.Iselected_metric_length_unit.unit_code == "cm" && ucc.Iselected_imperial_length_unit.unit_code == "Nmile"){
		       ucc.Nmiletocm(ucc.IlengthValue1);
		       ucc.Ianswer1 = cm;
			 }else if(ucc.Iselected_metric_length_unit.unit_code == "m" && ucc.Iselected_imperial_length_unit.unit_code == "in"){
		       ucc.intom(ucc.IlengthValue1);
		       ucc.Ianswer1 = m;
			 }else if(ucc.Iselected_metric_length_unit.unit_code == "m" && ucc.Iselected_imperial_length_unit.unit_code == "ft"){
		       ucc.fttom(ucc.IlengthValue1);
		       ucc.Ianswer1 = m;
			 }else if(ucc.Iselected_metric_length_unit.unit_code == "m" && ucc.Iselected_imperial_length_unit.unit_code == "yd"){
		       ucc.ydtom(ucc.IlengthValue1);
		       ucc.Ianswer1 = m;
			 }else if(ucc.Iselected_metric_length_unit.unit_code == "m" && ucc.Iselected_imperial_length_unit.unit_code == "mile"){
		       ucc.miletom(ucc.IlengthValue1);
		       ucc.Ianswer1 = m;
			 }else if(ucc.Iselected_metric_length_unit.unit_code == "m" && ucc.Iselected_imperial_length_unit.unit_code == "Nmile"){
		       ucc.Nmiletom(ucc.IlengthValue1);
		       ucc.Ianswer1 = m;
			 }else if(ucc.Iselected_metric_length_unit.unit_code == "km" && ucc.Iselected_imperial_length_unit.unit_code == "in"){
		       ucc.intokm(ucc.IlengthValue1);
		       ucc.Ianswer1 = km;
			 }else if(ucc.Iselected_metric_length_unit.unit_code == "km" && ucc.Iselected_imperial_length_unit.unit_code == "ft"){
		       ucc.fttokm(ucc.IlengthValue1);
		       ucc.Ianswer1 = km;
			 }else if(ucc.Iselected_metric_length_unit.unit_code == "km" && ucc.Iselected_imperial_length_unit.unit_code == "yd"){
		       ucc.ydtokm(ucc.IlengthValue1);
		       ucc.Ianswer1 = km;
			 }else if(ucc.Iselected_metric_length_unit.unit_code == "km" && ucc.Iselected_imperial_length_unit.unit_code == "mile"){
		       ucc.miletokm(ucc.IlengthValue1);
		       ucc.Ianswer1 = km;

			 }else if(ucc.Iselected_metric_length_unit.unit_code == "km" && ucc.Iselected_imperial_length_unit.unit_code == "Nmile"){

		       ucc.Nmiletokm(ucc.IlengthValue1);

		       ucc.Ianswer1 = km;

			 }
		}
		ucc.IrunApplicationMass = function(){

			 if(ucc.Iselected_metric_mass_unit.unit_code == "mg" && ucc.Iselected_imperial_mass_unit.unit_code == "oz"){

		       ucc.oztomg(ucc.IlengthValue2);

		       ucc.Ianswer2 = mg;

			 }else if(ucc.Iselected_metric_mass_unit.unit_code == "mg" && ucc.Iselected_imperial_mass_unit.unit_code == "lb"){
		       ucc.lbtomg(ucc.IlengthValue2);
		       ucc.Ianswer2 = mg;
			 }else if(ucc.Iselected_metric_mass_unit.unit_code == "mg" && ucc.Iselected_imperial_mass_unit.unit_code == "st"){
		       ucc.sttomg(ucc.IlengthValue2);
		       ucc.Ianswer2 = mg;
			 }else if(ucc.Iselected_metric_mass_unit.unit_code == "mg" && ucc.Iselected_imperial_mass_unit.unit_code == "ton"){
		       ucc.tontomg(ucc.IlengthValue2);
		       ucc.Ianswer2 = mg;
		     }else if(ucc.Iselected_metric_mass_unit.unit_code == "g" && ucc.Iselected_imperial_mass_unit.unit_code == "oz"){
		       ucc.oztog(ucc.IlengthValue2);
		       ucc.Ianswer2 = g;
			 }else if(ucc.Iselected_metric_mass_unit.unit_code == "g" && ucc.Iselected_imperial_mass_unit.unit_code == "lb"){
		       ucc.lbtog(ucc.IlengthValue2);
		       ucc.Ianswer2 = g;
			 }else if(ucc.Iselected_metric_mass_unit.unit_code == "g" && ucc.Iselected_imperial_mass_unit.unit_code == "st"){
		       ucc.sttog(ucc.IlengthValue2);
		       ucc.Ianswer2 = g;
			 }else if(ucc.Iselected_metric_mass_unit.unit_code == "g" && ucc.Iselected_imperial_mass_unit.unit_code == "ton"){
		       ucc.tontog(ucc.IlengthValue2);
		       ucc.Ianswer2 = g;
		     }else if(ucc.Iselected_metric_mass_unit.unit_code == "kg" && ucc.Iselected_imperial_mass_unit.unit_code == "oz"){
		       ucc.oztokg(ucc.IlengthValue2);
		       ucc.Ianswer2 = kg;
			 }else if(ucc.Iselected_metric_mass_unit.unit_code == "kg" && ucc.Iselected_imperial_mass_unit.unit_code == "lb"){
		       ucc.lbtokg(ucc.IlengthValue2);
		       ucc.Ianswer2 = kg;
			 }else if(ucc.Iselected_metric_mass_unit.unit_code == "kg" && ucc.Iselected_imperial_mass_unit.unit_code == "st"){
		       ucc.sttokg(ucc.IlengthValue2);
		       ucc.Ianswer2 = kg;
			 }else if(ucc.Iselected_metric_mass_unit.unit_code == "kg" && ucc.Iselected_imperial_mass_unit.unit_code == "ton"){
		       ucc.tontokg(ucc.IlengthValue2);
		       ucc.Ianswer2 = kg;
		     }else if(ucc.Iselected_metric_mass_unit.unit_code == "t" && ucc.Iselected_imperial_mass_unit.unit_code == "oz"){
		       ucc.oztot(ucc.IlengthValue2);
		       ucc.Ianswer2 = t;
			 }else if(ucc.Iselected_metric_mass_unit.unit_code == "t" && ucc.Iselected_imperial_mass_unit.unit_code == "lb"){
		       ucc.lbtot(ucc.IlengthValue2);
		       ucc.Ianswer2 = t;
			 }else if(ucc.Iselected_metric_mass_unit.unit_code == "t" && ucc.Iselected_imperial_mass_unit.unit_code == "st"){
		       ucc.sttot(ucc.IlengthValue2);
		       ucc.Ianswer2 = t;
			 }else if(ucc.Iselected_metric_mass_unit.unit_code == "t" && ucc.Iselected_imperial_mass_unit.unit_code == "ton"){
		       ucc.tontot(ucc.IlengthValue2);
		       ucc.Ianswer2 = t;
			 }
		}
		//to cm3

		ucc.in3tocm3 = function(in3){
			cm3 = in3 / 0.0610237;
		}
		ucc.ft3tocm3 = function(ft3){
		    cm3 = ft3 / .0000353147;
		}
		ucc.flOztocm3 = function(flOz){
		    cm3 = flOz / 0.033814;
		}
		ucc.pttocm3 = function(pt){
		    cm3 = pt / 0.00211338;
		}
		ucc.galtocm3 = function(gal){
		    cm3 = gal / 0.000264172;
		}
		//to dm3
		ucc.in3todm3 = function(in3){
			dm3 = in3 / 61.0237;
		}
		ucc.ft3todm3 = function(ft3){
			dm3 = ft3 / 0.0353147;
		}
		ucc.flOztodm3 = function(flOz){
			dm3 = flOz / 33.814;
		}
		ucc.pttodm3 = function(pt){
			dm3 = pt / 2.11338;
		}
		ucc.galtodm3 = function(gal){
			dm3 = gal / 0.264172;
		}
		//to m3
		ucc.in3tom3 = function(in3){
			m3 = in3 / 61023.7;
		}
		ucc.ft3tom3 = function(ft3){
			m3 = ft3 / 35.3147;
		}
		ucc.flOztom3 = function(flOz){
			m3 = flOz / 33814;
		}
		ucc.pttom3 = function(pt){
			m3 = pt / 2113.38;
		}
		ucc.galtom3 = function(gal){
			m3 = gal / 264.172;
		}
		//to l
		ucc.in3tol = function(in3){
			l = in3 / 61.0237;
		}
		ucc.ft3tol = function(ft3){
			l = ft3 / 0.0353147;
		}
		ucc.flOztol = function(flOz){
			l = flOz / 33.814;
		}
		ucc.pttol = function(pt){
			l = pt / 2.11338;
		}
		ucc.galtol = function(gal){
			l = gal / 0.264172;
		}
		//to hl
		ucc.in3tohl = function(in3){
			hl = in3 / 6102.37;
		}
		ucc.ft3tohl = function(ft3){
			hl = ft3 / 3.53147;
		}
		ucc.flOztohl = function(flOz){
			hl = flOz / 3381.4;
		}
		ucc.pttohl = function(pt){
			hl = pt / 211.338;
		}
		ucc.galtohl = function(gal){
			hl = gal / 26.4172;
		}
//to mm

		ucc.intomm = function(inch){
			mm = inch / 0.0393701;
		}
		ucc.fttomm = function(ft){
			mm = ft / 0.00328084;
		}
		ucc.ydtomm = function(yd){
			mm = yd / 0.00109361;
		}
		ucc.miletomm = function(mile){
			mm = mile / .000000621371;
		}
		ucc.Nmiletomm = function(Nmile){
			mm = Nmile / .000000539957;
		}
		//to cm
		ucc.intocm = function(inch){
			cm = inch / 0.393701;
		}
		ucc.fttocm = function(ft){
			cm = ft / 0.0328084;
		}
		ucc.ydtocm = function(yd){
			cm = yd / 0.0109361;
		}
		ucc.miletocm = function(mile){
			cm = mile / .00000621371;
		}
		ucc.Nmiletocm = function(Nmile){
			cm = Nmile / .00000539957;
		}	
		//to m

		ucc.intom = function(inch){
			m = inch / 39.3701;
		}
		ucc.fttom = function(ft){
			m = ft / 3.28084;
		}
		ucc.ydtom = function(yd){
			m = yd / 1.09361;
		}
		ucc.miletom = function(mile){
			m = mile / 0.000621371;
		}
		ucc.Nmiletom = function(Nmile){
			m = Nmile / 0.000539957;
		}		
		//to km
		ucc.intokm = function(inch){
			km = inch / 39370.1;
		}
		ucc.fttokm = function(ft){
			km = ft / 3280.84;
		}
		ucc.ydtokm = function(yd){
			km = yd / 1093.61;
		}
		ucc.miletokm = function(mile){
			km = mile / 0.621371;
		}
		ucc.Nmiletokm = function(Nmile){
			km = Nmile / 0.539957;
		}	

		//to mg
		ucc.oztomg = function(oz){
			mg = oz / .000035274;
		}
		ucc.lbtomg = function(lb){
			mg = lb / .00000220462;
		}
		ucc.sttomg = function(st){
			mg = st / .000000157473;
		}
		ucc.tontomg = function(ton){
			mg = ton / .00000000110231;
		}
		//to g
		ucc.oztog = function(oz){
			g = oz / .035274;
		}
		ucc.lbtog = function(lb){
			g = lb / .00220462;
		}
		ucc.sttog = function(st){
			g = st / .000157473;
		}
		ucc.tontog = function(ton){
			g = ton / .00000110231;
		}	
		//to kg

		ucc.oztokg = function(oz){
			kg = oz / 35.274;
		}
		ucc.lbtokg = function(lb){
			kg = lb / 2.20462;
		}
		ucc.sttokg = function(st){
			kg = st / 0.157473;
		}
		ucc.tontokg = function(ton){
			kg = ton / 0.00110231;
		}	

		//to t
		ucc.oztot = function(oz){
			t = oz / 35274;
		}
		ucc.lbtot = function(lb){
			t = lb / 2204.62;
		}
		ucc.sttot = function(st){
			t = st / 157.473;
		}
		ucc.tontot = function(ton){
			t = ton / 1.10231;
		}	

		//to in3
		ucc.cm3toin3 = function(cm3){
		    in3 = cm3 * 0.0610237;
		}
		ucc.dm3toin3 = function(dm3){
		    in3 = dm3 * 61.0237;
		}
		ucc.m3toin3 = function(m3){
		    in3 = m3 * 61023.7;
		}
		ucc.ltoin3 = function(l){
		    in3 = l * 61.0237;
		}
		ucc.hltoin3 = function(hl){
		    in3 = hl * 6102.37;
		}
		//to ft3
		ucc.cm3toft3 = function(cm3){
		    ft3 = cm3 * .0000353147;
		}
		ucc.dm3toft3 = function(dm3){
		    ft3 = dm3 * 0.0353147;
		}
		ucc.m3toft3 = function(m3){
		    ft3 = m3 * 35.3147;
		}
		ucc.ltoft3 = function(l){

		    ft3 = l * 0.0353147;

		}

		ucc.hltoft3 = function(hl){
		    ft3 = hl * 3.53147;
		}
		//to flOz
		ucc.cm3toflOz = function(cm3){
		    flOz = cm3 * 0.033814;
		}
		ucc.dm3toflOz = function(dm3){
		    flOz = dm3 * 33.814;
		}
		ucc.m3toflOz = function(m3){
		    flOz = m3 * 33814;
		}
		ucc.ltoflOz = function(l){
		    flOz = l * 33.814;
		}
		ucc.hltoflOz = function(hl){
		    flOz = hl * 3381.4;
		}
		//to pt
		ucc.cm3topt = function(cm3){
		    pt = cm3 * 0.00211338;
		}
		ucc.dm3topt = function(dm3){
		    pt = dm3 * 2.11338;
		}
		ucc.m3topt = function(m3){
		    pt = m3 * 2113.38;
		}
		ucc.ltopt = function(l){
		    pt = l * 2.11338;
		}
		ucc.hltopt = function(hl){
		    pt = hl * 211.338;
		}
	
		//to gal
		ucc.cm3togal = function(cm3){
		    gal = cm3 * 0.000264172;
		}
		ucc.dm3togal = function(dm3){
		    gal = dm3 * 0.264172;
		}
		ucc.m3togal = function(m3){
		    gal = m3 * 264.172;
		}
		ucc.ltogal = function(l){
		    gal = l * 0.264172;
		}
		ucc.hltogal = function(hl){
		    gal = hl * 26.4172;
		}
		//to in
		ucc.mmtoinch = function(mm){
		    inch = mm * 0.0393701;
		}
		ucc.cmtoinch = function(cm){
		    inch = cm * 0.393701;
		}
		ucc.mtoinch = function(m){
		    inch = m * 39.3701;
		}
		ucc.kmtoinch = function(km){
		    inch = km * 39370.1;
		}
		//to ft

		ucc.mmtoft = function(mm){
		    ft = mm * 0.00328084;
		}
		ucc.cmtoft = function(cm){
		    ft = cm * 0.0328084;
		}
		ucc.mtoft = function(m){
		    ft = m * 3.28084;
		}
		ucc.kmtoft = function(km){
		    ft = km * 3280.84;
		}

		//to yd
		ucc.mmtoyd = function(mm){
		    yd = mm * 0.00109361;
		}
		ucc.cmtoyd = function(cm){
		    yd = cm * 0.0109361;
		}
		ucc.mtoyd = function(m){
		    yd = m * 1.09361;
		}
		ucc.kmtoyd = function(km){
		    yd = km * 1093.61;
		}
		//to mile
		ucc.mmtomile = function(mm){
		    mile = mm * .000000621371;
		}
		ucc.cmtomile = function(cm){
		    mile = cm * .00000621371;
		}
		ucc.mtomile = function(m){
		    mile = m * 0.000621371;
		}
		ucc.kmtomile = function(km){
		    mile = km * 0.621371;
		}
		//to Nmile
		ucc.mmtoNmile = function(mm){
		    Nmile = mm * .000000539957;
		}
		ucc.cmtoNmile = function(cm){
		    Nmile = cm * .00000539957;
		}
		ucc.mtoNmile = function(m){
		    Nmile = m * 0.000539957;
		}
		ucc.kmtoNmile = function(km){
		    Nmile = km * 0.539957;
		}
		//to oz
		ucc.mgtooz = function(mg){
		    oz = mg * .000035274;
		}
		ucc.gtooz = function(g){
		    oz = g * 0.035274;
		}
		ucc.kgtooz = function(kg){
		    oz = kg * 35.274;
		}
		ucc.ttooz = function(t){
		    oz = t * 35274;
		}
		//to lb
		ucc.mgtolb = function(mg){
		    lb = mg * .00000220462;
		}
		ucc.gtolb = function(g){
		    lb = g * 0.00220462;
		}
		ucc.kgtolb = function(kg){
		    lb = kg * 2.20462;
		}
		ucc.ttolb = function(t){
		    lb = t * 2204.62;
		}
		//to st
		ucc.mgtost = function(mg){
		    st = mg * .000000157473;
		}
		ucc.gtost = function(g){
		    st = g * 0.000157473;
		}
		ucc.kgtost = function(kg){
		    st = kg * 0.157473;
		}
		ucc.ttost = function(t){
		    st = t * 157.473;
		}
		
		//to ton
		ucc.mgtoton = function(mg){
		    ton = mg * .00000000110231;
		}
		ucc.gtoton = function(g){
		    ton = g * .00000110231;
		}
		ucc.kgtoton = function(kg){
		    ton = kg * 0.00110231;
		}
		ucc.ttoton = function(t){
		    ton = t * 1.10231;
		}
	}
]);