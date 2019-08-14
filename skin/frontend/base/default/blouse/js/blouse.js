
var array_id = ['#length_hps','#above_bust','#around_bust','#shoulder','#waist','#shoulder_height','#cross_front','#cross_back','#height','#arm_hole','#neck_depth_front','#neck_depth_back','#sleeve_length','#around_arm'];
var array_step3 = ['#review-length_hps','#review-above-waist','#review-around-bust','#review-shoulder','#review-waist','#review-shoulder-id','#review-cross-front','#review-cross-back','#review-height','#review-around-arm','#review-neck-depth-front','#review-neck-depth-back','#review-sleeve-length','#review-bicep'];
var messurement_array = ['#view-1','#view-2','#view-3','#view-4','#view-5','#view-6','#view-7','#view-8','#view-9','#view-10','#view-11','#view-12','#view-13','#view-14']
var array_span = ['13 - 17 inches','32 - 46 inches','32 - 47 inches','27 - 42 inches','26 - 40 inches','14 - 18 inches','12 - 16 inches','13 - 17 inches','8 - 11 inches','14 - 22 inches','7 - 9 inches','8 - 10 inches','3 - 5 inches','11 - 18 inches'];
var array_span_cent = ['34 - 43 cm','81 - 117 cm','82 - 119 cm','70 - 107 cm','66 - 102 cm','35 - 46 cm','32 - 42 cm','34 - 44 cm','22 - 28 cm','35 - 56 cm','18 - 23 cm','22 - 26 cm','8 - 13 cm','28 - 46 cm'];
var span_id = ['#length_hps-id','#above_bust-id','#around_bust-id','#shoulder-id','#waist-id','#shoulder_height-id','#cross_front-id','#cross_back-id','#height-id','#arm_hole-id','#neck_depth_front-id','#neck_depth_back-id','#sleeve_length-id','#around_arm-id'];
//var array_error = ['#error-around-bust','#error-above_waist','#error-shoulder','#error-arm_hole','#error-around_arm'];
var xsmall_array=['14','34','35','30','29','15','13','14','9','16','8','9','3','12'];
var small_array=['15','36','37','32','30','15','14','15','9','17','8','9','4','13'];
var medium_array=['15','38','39','34','32','16','14','15','10','18','9','10','4','14'];
var large_array=['16','40','41','36','34','16','15','16','10','19','9','10','4','15'];
var extra_array=['16','42','43','38','36','17','15','16','10','20','9','10','5','16'];
var xextra_array=['17','44','45','40','38','17','16','17','10','21','9','10','5','17'];
var arrayVar = new Array();
var around_bust_val = '';
var above_waist_val = '';
var shoulder_val = '';
var  arm_hole_val = '';
var around_arm_val = '';
var height_val = '';
var cm_array1 = [34,81,82,70,66,35,32,34,22,35,18,22,8,28];
var cm_array2 = [43,117,119,107,102,46,42,44,28,56,23,26,13,46];
var array1 = [13,32,32,27,26,14,12,13,8,14,7,8,3,11];
var array2 = [17,46,47,42,40,18,16,17,11,22,10,11,5,18];
var curOpenStep = [];
var current_size_in = "inches";
var check_value =  'CUSTOM SIZE';
error_msg = new Array();
error_msg = ['#error-length_hps','#error-above_bust','#error-around-bust','#error-shoulder','#error-waist','#error-shoulder_height','#error-cross_front','#error-cross_back','#error-height','#error-arm_hole','#error-neck_depth_front','#error-neck_depth_back','#error-sleeve_length','#error-around_arm'];
jQuery(document).ready(function () {
    startInitial();
    //save from step1 clicked
    jQuery( "#save_step1" ).click(function() {     
      if(!jQuery("input[name=style]:checked").val()){
        alert('Style not checked');
        return;
      }
      var value = 'CUSTOM SIZE';
      var blouse_type = jQuery("input[type='radio'][name='style']:checked").attr('value2');
      //alert(blouse_type);
      jQuery('#style-name-hidden').val(blouse_type);
      showDivs(["#blouse_box_step2","#blouse_content-step2-id"]);
      hideDivs(["#measurement-size-id","#blouse_box_step1"]);                
      jQuery("input:radio[name='measurement_size'][value='" + value + "']").prop('checked', true);
      jQuery('#blouse_content-step2-id').addClass('active');
	  jQuery('.current-step').removeClass('current-step');
	  jQuery('.blouse_heading-step2').addClass('current-step');
	  
	  
      //alert('class to be added');

      add_span(span_id,array_span);
    });
    //cancel from step 1 clicked
    jQuery( "#cancel_step1" ).click(function() {
      cancelClicked(1);
    });
    var stander_type = 'S';
    jQuery("input[name='measurement_size']").change(function(){
      var blouse_type = jQuery("input[type='radio'][name='measurement_size']:checked").val();
      if (blouse_type=='STANDARD SIZE') {
		  jQuery('#selected_standard').val('XS');
		  //console.log('select');
          current_size_in = 'inches' ;
          jQuery('.show_measurement').text()=='Show measurements in Centimeters';
          for (var i = 0; i < 14; i++) {
            jQuery(error_msg[i]).html('');
            jQuery(array_id[i]).removeAttr("style");
            //highlight_error();
            //console.log("refresh error");
          }
        var stander_type = 'S';
        var value = ['#current-xs','#current-s','#current-m','#current-l','#current-xl','#current-xxl'];
        classAdd(value,array_id);            
        setSize(xsmall_array);
        remove_span(span_id);
        jQuery("#measurement-size-id").show(); 
        check_value  = 'STANDARD SIZE';
      }else {
         check_value  = 'CUSTOM SIZE';
		 jQuery('#selected_standard').val('');
        jQuery("#measurement-size-id").hide();
        if (current_size_in=='centimeter') {
          add_span(span_id,array_span_cent);
        }else{
          add_span(span_id,array_span);
        }
        readonly_remove(array_id);
      }           
    });
    var stander_type = 'XS';
    jQuery('.ssize').click(function(){
      stander_type = jQuery(this).text();
	  jQuery('#selected_standard').val(stander_type);
       addCurrent(jQuery(this).text());
       //console.log(stander_type);
       //console.log("in click function");
    })

    jQuery('.blouse_heading-step1').click(function(){
        if (jQuery('.blouse_box_row').hasClass('active')) {
           hideDivs(curOpenStep);
           showDivs(["#measurement-size-id","#blouse_box_step1"]); 
		   jQuery('.current-step').removeClass('current-step'); 
		   jQuery(this).addClass('current-step');
       }
    })
    jQuery('.blouse_heading-step2').click(function(){
      if (jQuery('#blouse_content-step2-id').hasClass('active')) {
        hideDivs(curOpenStep);
       showDivs(["#blouse_box_step2","#blouse_content-step2-id"]); 
	   jQuery('.current-step').removeClass('current-step');
	   jQuery(this).addClass('current-step');
      }
    })
     jQuery('.blouse_heading-step3').click(function(){
      if (jQuery('#blouse_content-step3-id').hasClass('active')) {
        hideDivs(curOpenStep);
       showDivs(["#blouse_content-step3-id","#blouse_box_step3"]); 
	   jQuery('.current-step').removeClass('current-step');
	   jQuery(this).addClass('current-step');
      }
    })
    jQuery('.seemore').click(function(){
      
      if (jQuery('.seemore').text()=='See More Styles') {
        jQuery('.hidden-image').css('display','block');
        jQuery('.seemore').text('See Less Styles');
        jQuery('.blouse_style').addClass("allproduct");
      }else{
        if (jQuery('.seemore').text()=='See Less Styles') {
          jQuery('.hidden-image').css('display','none');
          jQuery('.seemore').text('See More Styles');
          jQuery('.blouse_style').removeClass("allproduct");
        }
      }
    })
});

function addCurrent(s)
{
  var value = new Array();
  var size_arr = '';
  switch(s)
  {
     case "XS" :
    value = ['#current-xs','#current-s','#current-m','#current-l','#current-xl','#current-xxl'];
    size_arr = xsmall_array;
    break;
    case "S" :
    value = ['#current-s','#current-xs','#current-m','#current-l','#current-xl','#current-xxl'];
    size_arr = small_array;
    break;
    case "M" :
    value = ['#current-m','#current-s','#current-xs','#current-l','#current-xl','#current-xxl'];
    size_arr = medium_array;
    break;
    case "L" :
    value = ['#current-l','#current-m','#current-s','#current-xs','#current-xl','#current-xxl'];
    size_arr = large_array;
    break;
    case "XL" :
    value = ['#current-xl','#current-xxl','#current-m','#current-l','#current-s','#current-xs'];
    size_arr = extra_array;
    break;
    case "XXL" :
    value = ['#current-xxl','#current-xl','#current-m','#current-l','#current-s','#current-xs'];
    size_arr = xextra_array;
    break;
  }
  classAdd(value,array_id);
  setSize(size_arr);
  jQuery('.show_measurement').html('Show measurements in Centimeters');
  current_size_in = 'inches';
}
function startInitial()//this function will use to reset all and start from scratch
{
  jQuery("#blouse_box_step2").hide();    
  jQuery("#blouse_box_step3").hide();
  jQuery("#myaccount-measurements").hide();
}
function showDivs(params)
{
  if(curOpenStep.length > 1)
  {
    hideDivs(curOpenStep);
  }
  curOpenStep = params;
  for(i=0;i<params.length;i++){
    jQuery(params[i]).show();
  }
}
function hideDivs(params)
{
  for(i=0;i<params.length;i++){
    jQuery(params[i]).hide();
  }
}
function remove_span(span_id) {
  for (var i = 0; i < 14; i++) {            
   jQuery(span_id[i]).text('') ;
   //jQuery('.in-stock span').html("your new string");
  };
}

function add_span(span_id,array_span){
  for (var i = 0; i < 14; i++) {            
   jQuery(span_id[i]).text(array_span[i]) ;
   //jQuery('.in-stock span').html("your new string");
  };
}

function readonly_remove(array_id){
  for (var i = 0; i <14; i++) {
    jQuery(array_id[i]).removeAttr('readonly');           
  };
}
function cancelClicked(step)
{
  switch(step)
  {
    case 1:
      hideDivs(["#blouse_box_step2","#blouse_box_step3","#myaccount-measurements"]);    
      //jQuery('input[name="style"]').prop('checked', false);
    break;
    case 2:
    break;
    case 3:
    break;
  }
}
//jQuery and Javascript By Raghawndra Rai     
 
  function classAdd(value,array_id){
    jQuery(value[0]).addClass("current");
    jQuery(value[1]).removeClass('current');
    jQuery(value[2]).removeClass('current');
    jQuery(value[3]).removeClass('current');
    jQuery(value[4]).removeClass('current');
    jQuery(value[5]).removeClass('current');
    for (var i = 0 ; i < 14; i++) {
        jQuery(array_id[i]).attr('readonly', 'true');           
    }
  }

  function setSize(varray){  length_hps  , above_bust       
    jQuery('#length_hps').val(varray[0]);
    jQuery('#above_bust').val(varray[1]);
    jQuery('#around_bust').val(varray[2]);
    jQuery('#shoulder').val(varray[3]);
    jQuery('#waist').val(varray[4]);
    jQuery('#shoulder_height').val(varray[5]);
    jQuery('#cross_front').val(varray[6]);
    jQuery('#cross_back').val(varray[7]);
    jQuery('#height').val(varray[8]);
    jQuery('#arm_hole').val(varray[9]);
    jQuery('#neck_depth_front').val(varray[10]);
    jQuery('#neck_depth_back').val(varray[11]);
    jQuery('#sleeve_length').val(varray[12]);
    jQuery('#around_arm').val(varray[13]);       
   //jQuery('#txtFirstName').val("your name");
  }
    //Validation of step 2 form
  function validation_step2() {
  //console.log("in validation step2");
  arrayVar[0] = jQuery('#length_hps').val();
  arrayVar[1] = jQuery('#above_bust').val();
  arrayVar[2] = jQuery('#around_bust').val();
  arrayVar[3] = jQuery('#shoulder').val();
  arrayVar[4] = jQuery('#waist').val();
  arrayVar[5] = jQuery('#shoulder_height').val();
  arrayVar[6] = jQuery('#cross_front').val();
  arrayVar[7] = jQuery('#cross_back').val();
  arrayVar[8] = jQuery('#height').val();
  arrayVar[9] = jQuery('#arm_hole').val();
  arrayVar[10] = jQuery('#neck_depth_front').val();
  arrayVar[11] = jQuery('#neck_depth_back').val();
  arrayVar[12] = jQuery('#sleeve_length').val();
  arrayVar[13] = jQuery('#around_arm').val();
  
  for (var i = 0; i < 14; i++) {
    jQuery(error_msg[i]).html('');
   jQuery(array_id[i]).removeAttr("style");
    //highlight_error();
    //console.log("refresh error");
  }
  if(arrayVar[0]=='' ){ highlight_error(array_id[0]); if(current_size_in=='inches'){show_error('#error-length_hps', 13, 17); jQuery('.blouse_main').animate({ scrollTop: jQuery(array_id[0]).offset().top }, 1000); }
                                                      else{if(current_size_in=='centimeter'){show_error('#error-length_hps', 34, 43); jQuery('.blouse_main').animate({ scrollTop: jQuery(array_id[0]).offset().top }, 1000); }} return;}
  if(arrayVar[1]=='' ){ highlight_error(array_id[1]); if(current_size_in=='inches'){show_error('#error-above_bust', 32, 46); jQuery('.blouse_main').animate({ scrollTop: jQuery(array_id[1]).offset().top }, 1000); }
                                                      else{if(current_size_in=='centimeter'){show_error('#error-above_bust', 81, 117); jQuery('.blouse_main').animate({ scrollTop: jQuery(array_id[1]).offset().top }, 1000); }} return;}
  if(arrayVar[2]=='' ){ highlight_error(array_id[2]); if(current_size_in=='inches'){show_error('#error-around-bust', 32, 47); jQuery('.blouse_main').animate({ scrollTop: jQuery(array_id[2]).offset().top }, 1000); } 
                                                      else{if(current_size_in=='centimeter'){show_error('#error-around-bust', 82, 119); jQuery('.blouse_main').animate({ scrollTop: jQuery(array_id[2]).offset().top }, 1000); }} return;}
  if(arrayVar[3]=='' ){ highlight_error(array_id[3]); if(current_size_in=='inches'){show_error('#error-shoulder', 27, 42); jQuery('.blouse_main').animate({ scrollTop: jQuery(array_id[3]).offset().top }, 1000); }
                                                      else{if(current_size_in=='centimeter'){show_error('#error-shoulder', 70, 107); jQuery('.blouse_main').animate({ scrollTop: jQuery(array_id[3]).offset().top }, 1000); }} return;}
  if(arrayVar[4]=='' ){ highlight_error(array_id[4]); if(current_size_in=='inches'){show_error('#error-waist', 26, 40); jQuery('.blouse_main').animate({ scrollTop: jQuery(array_id[4]).offset().top }, 1000); }
                                                      else{if(current_size_in=='centimeter'){show_error('#error-waist', 66, 102); jQuery('.blouse_main').animate({ scrollTop: jQuery(array_id[4]).offset().top }, 1000); }} return;}
  if(arrayVar[5]=='' ){ highlight_error(array_id[5]); if(current_size_in=='inches'){show_error('#error-shoulder_height', 14, 18);jQuery('.blouse_main').animate({ scrollTop: jQuery(array_id[5]).offset().top }, 1000);}
                                                      else{if(current_size_in=='centimeter'){show_error('#error-shoulder_height', 35, 44); jQuery('.blouse_main').animate({ scrollTop: jQuery(array_id[5]).offset().top }, 1000); }} return;}
  if(arrayVar[6]=='' ){ highlight_error(array_id[6]); if(current_size_in=='inches'){show_error('#error-cross_front', 12, 16); jQuery('.blouse_main').animate({ scrollTop: jQuery(array_id[6]).offset().top }, 1000); }
                                                      else{if(current_size_in=='centimeter'){show_error('#error-cross_front', 32, 42); jQuery('.blouse_main').animate({ scrollTop: jQuery(array_id[6]).offset().top }, 1000); }} return;}
  if(arrayVar[7]=='' ){ highlight_error(array_id[7]); if(current_size_in=='inches'){show_error('#error-cross_back', 13, 17); jQuery('.blouse_main').animate({ scrollTop: jQuery(array_id[7]).offset().top }, 1000); }
                                                      else{if(current_size_in=='centimeter'){show_error('#error-cross_back', 34, 44); jQuery('.blouse_main').animate({ scrollTop: jQuery(array_id[7]).offset().top }, 1000); }} return;}
  if(arrayVar[8]=='' ){ highlight_error(array_id[8]); if(current_size_in=='inches'){show_error('#error-height', 8, 11); jQuery('.blouse_main').animate({ scrollTop: jQuery(array_id[8]).offset().top }, 1000); }
                                                      else{if(current_size_in=='centimeter'){show_error('#error-height', 22, 27); jQuery('.blouse_main').animate({ scrollTop: jQuery(array_id[8]).offset().top }, 1000); }} return;}
  if(arrayVar[9]=='' ){ highlight_error(array_id[9]); if(current_size_in=='inches'){show_error('#error-arm_hole', 14, 22); jQuery('.blouse_main').animate({ scrollTop: jQuery(array_id[9]).offset().top }, 1000); }
                                                      else{if(current_size_in=='centimeter'){show_error('#error-arm_hole', 35, 54); jQuery('.blouse_main').animate({ scrollTop: jQuery(array_id[9]).offset().top }, 1000); }} return;}
  if(arrayVar[10]=='' ){ highlight_error(array_id[10]); if(current_size_in=='inches'){show_error('#error-neck_depth_front', 7, 9); jQuery('.blouse_main').animate({ scrollTop: jQuery(array_id[10]).offset().top }, 1000); }
                                                        else{if(current_size_in=='centimeter'){show_error('#error-neck_depth_front', 18, 23); jQuery('.blouse_main').animate({ scrollTop: jQuery(array_id[10]).offset().top }, 1000); }} return;}
  if(arrayVar[11]=='' ){ highlight_error(array_id[11]); if(current_size_in=='inches'){show_error('#error-neck_depth_back', 8, 10); jQuery('.blouse_main').animate({ scrollTop: jQuery(array_id[11]).offset().top }, 1000); }
                                                        else{if(current_size_in=='centimeter'){show_error('#error-neck_depth_back', 22, 26); jQuery('.blouse_main').animate({ scrollTop: jQuery(array_id[11]).offset().top }, 1000); }}return;}
  if(arrayVar[12]=='' ){ highlight_error(array_id[12]); if(current_size_in=='inches'){show_error('#error-sleeve_length', 3, 5); jQuery('.blouse_main').animate({ scrollTop: jQuery(array_id[12]).offset().top }, 1000); }
                                                        else{if(current_size_in=='centimeter'){show_error('#error-sleeve_length', 8, 13); jQuery('.blouse_main').animate({ scrollTop: jQuery(array_id[12]).offset().top }, 1000); }} return;}
  if(arrayVar[13]=='' ){ highlight_error(array_id[13]); if(current_size_in=='inches'){show_error('#error-around_arm', 11, 18); jQuery('.blouse_main').animate({ scrollTop: jQuery(array_id[13]).offset().top }, 1000); }
                                                        else{if(current_size_in=='centimeter'){show_error('#error-around_arm', 28, 46); jQuery('.blouse_main').animate({ scrollTop: jQuery(array_id[13]).offset().top }, 1000); }} return;}
  check_value = jQuery("input[type='radio'][name='measurement_size']:checked").val();
    if(check_value=='CUSTOM SIZE'){
		
      var con_val = false;
      for (var i = 0; i < 14; i++) {   

          if (arrayVar[i] != null && arrayVar[i] != '' && arrayVar[i] != NaN ) { 
          if (current_size_in=='inches') {                
            if (arrayVar[i] < array1[i] || arrayVar[i] > array2[i]) {  
                  
                show_error(error_msg[i], array1[i], array2[i]);
                highlight_error(array_id[i]);
                jQuery('.blouse_main').animate({ scrollTop: jQuery(array_id[i]).offset().top }, 1000);
                return;                       
              } else {
                con_val = true;
                } 
            }else if (current_size_in=='centimeter') {                
                if (arrayVar[i] < cm_array1[i] || arrayVar[i] > cm_array2[i]) {  
                    jQuery('.blouse_main').animate({ scrollTop: jQuery(array_id[i]).offset().top }, 1000);   
                    show_error(error_msg[i], cm_array1[i], cm_array2[i]);
                    highlight_error(array_id[i]);
                    return;                       
                  } else {
                    con_val = true;
                    } 
            }              
          }else {
            alert('Please enter the value');
            return false;
          }            
        }
        if (con_val == true) {
          //alert('we are in true part');
          showDivs(["#blouse_box_step3","#blouse_content-step3-id"]);
          hideDivs(["#blouse_box_step2"]);
          jQuery('#blouse_content-step3-id').addClass('active');
          step3_val(array_step3, arrayVar);         
        }
    } else {//not custom size
      showDivs(["#blouse_box_step3","#blouse_content-step3-id"]);
      hideDivs(["#blouse_box_step2"]);
      jQuery('#blouse_content-step3-id').addClass('active');
	  jQuery('.current-step').removeClass('current-step');
	  jQuery('.blouse_heading-step3').addClass('current-step');
	  	  
      step3_val(array_step3, arrayVar);      
      }
  }

  function step3_val(array_step3, arrayVar){
      var img_detail = jQuery("input[name='style']:checked").parent().parent().children('img').clone();            
      jQuery('#img_blouse_right-id').html(img_detail);
      var style_value = jQuery("input[type='radio'][name='style']:checked").val();
      jQuery('#style_name_step3').html(style_value);
      for (var i = 0; i <= array_step3.length - 1; i++) {
        jQuery(array_step3[i]).html(arrayVar[i]+' '+current_size_in);        
      }
  }

    function show_error(id, min, max){
      //alert("we are in show error field");        
      jQuery(id).html('Please enter the values between '+min+' and '+max);
      return;
    }

    function final_step(){
       //Enter Value in hidden inputbox in product View Page
       if (jQuery('#customer_design-name').val()=='') {
        jQuery("#customer_design-name").css("background-color", "#FFFFEE");
        jQuery('#customer-design-error').html('Give a name to your measurement');
        return false;
       }
      array_view = ['#input_length_hps-id','#input_above_waist-id','#input_around_bust-id','#input_shoulder-id','#input_waist-id','#input_shoulder_height-id','#input_cross_front-id','#input_cross_back-id','#input_height-id','#input_around_arm-id','#input_neck_depth_front-id','#input_neck_depth_back-id','#input_sleeve-length-id','#input_bicep-id'];
      var style_value = jQuery("input[type='radio'][name='style']:checked").val(); 
      jQuery('#input_style-id').val(style_value);
      var measurement_value = jQuery("input[type='radio'][name='measurement_size']:checked").val();
	  if(jQuery('#selected_standard').val()!==''){
		  console.log(jQuery('#selected_standard').val());
		  jQuery('#input_measurement_size-id').val(measurement_value+'-'+jQuery('#selected_standard').val());
	  }else{	  
      jQuery('#input_measurement_size-id').val(measurement_value);
	  }
      jQuery(".add-to-cart").addClass("add-margin");
      assign_value(array_view, arrayVar);
      hide_show();
      submitForm();
      reset_form();
    }

    //Function to assign value in product view
    function assign_value(array_view ,arrayVar){
      //console.log('assign start');
      var style_value = jQuery("input[type='radio'][name='style']:checked").val();
      jQuery('#tittle-for-style-id').html(style_value);
      var style_name_original = jQuery('#style-name-hidden').val();
      jQuery('#input_style-id').val(style_name_original);
      var img_detail = jQuery("input[name='style']:checked").parent().parent().children('img').clone();            
      jQuery('#blouse-added-image-id').html(img_detail);
      //new code have to enter   
      jQuery('#customer-blouse-name').val(jQuery('#customer_design-name').val());
      jQuery('#input-special-instruction').val(jQuery('#special-instruction').val());
      for (var i = 0; i < array_view.length; i++) {
        //alert(array_view[i]);
        //alert(arrayVar[i]);
        jQuery(messurement_array[i]).html(arrayVar[i]+' '+current_size_in);
        jQuery(array_view[i]).val(arrayVar[i]);
      }
    }    

  function reset_form(){
      //Resetting the values of form  array_id
      //console.log('in reset form');
      for (var i = 0; i < array_id.length; i++) {
        jQuery(array_id[i]).val('');
      }
      jQuery('#blouse_content-step2-id').removeClass('active');
      jQuery('#blouse_content-step3-id').removeClass('active'); 
      jQuery('input[type=radio][name="measurement_size"][value="CUSTOM SIZE"]').attr('checked','checked');
      jQuery('input[type=radio][name="style"][value="Square Neckline"]').attr('checked','checked');
      current_size_in == 'inches';
  }

  function hide_show(){
      showDivs(["#blouse_box_step1"]);
      hideDivs(["#blouse_box_step2","#blouse_box_step3","#myaccount-measurements"]);
      jQuery("#chk-stitch-blouse").attr("checked", false);
      hideTab();       
        
  }

   //Code To Convert into Cm
  function convertSizeValue(){
    //if (current_size_in == 'inches') 
    if (jQuery('.show_measurement').text()=='Show measurements in Centimeters') {
     
        for (var i = 0; i < array_id.length; i++) {
          jQuery(error_msg[i]).html('');
          jQuery(array_id[i]).removeAttr("style");
          if (jQuery(array_id[i]).val()!='') {
            var inche_value = parseInt(jQuery(array_id[i]).val());
            var cm_value = inche_value/0.39370;
            jQuery(array_id[i]).val(Math.round(cm_value));
            jQuery('.show_measurement').html('Show measurements in inches');
            current_size_in = 'centimeter';
             if (check_value=='CUSTOM SIZE') {
              add_span(span_id,array_span_cent);
            }
          }
        }
      
      //console.log('in cm convertor');
    }else{

    //if (current_size_in == 'centimeter') {
    if (jQuery('.show_measurement').text()=='Show measurements in inches') {
      
      for (var i = 0; i < array_id.length; i++) {
        jQuery(error_msg[i]).html('');
        jQuery(array_id[i]).removeAttr("style");
        if (jQuery(array_id[i]).val()!='') {
            var cm_value = parseInt(jQuery(array_id[i]).val());
            var inche_value = cm_value*0.39370;
            jQuery(array_id[i]).val(Math.round(inche_value));
            jQuery('.show_measurement').html('Show measurements in Centimeters');
            current_size_in = 'inches';
            if (check_value=='CUSTOM SIZE') {
              add_span(span_id,array_span);
            }
          }
        }
      
      //console.log('in inche convertor');
    }
  }
  }
  //Code End Here
  //Code to highlight inputbox when error occure

  function highlight_error(id){
    jQuery(id).attr('style', "border-radius: 5px; border:#FF0000 1px solid;");
  }

 
 