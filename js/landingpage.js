$(document).ready(function(){
    var winH = $(window).height();
    var sliderH=$(".slider,.carousel-item").height(winH);
/* ------------------------------------------------------ */
    $(".b1").mouseenter(function(){
        
      $(".b2,.b3,.b4,.b5,.b6,.b7,.b8,.b9,.b10,.b11,.b12,.b13,.b14,.b15").hide(1000);  
        
    });
    
   
     $(".b2").mouseenter(function(){
        
      $(".b1,.b3,.b4,.b5,.b6,.b7,.b8,.b9,.b10,.b11,.b12,.b13,.b14,.b15").hide(1000);  
        
    });
     $(".b3").mouseenter(function(){
        
      $(".b2,.b1,.b4,.b5,.b6,.b7,.b8,.b9,.b10,.b11,.b12,.b13,.b14,.b15").hide(1000);  
        
    });
     $(".b4").mouseenter(function(){
        
      $(".b1,.b3,.b2,.b5,.b6,.b7,.b8,.b9,.b10,.b11,.b12,.b13,.b14,.b15").hide(1000);  
        
    });
     $(".b5").mouseenter(function(){
        
      $(".b2,.b3,.b4,.b1,.b6,.b7,.b8,.b9,.b10,.b11,.b12,.b13,.b14,.b15").hide(1000);  
        
    });
     $(".b6").mouseenter(function(){
        
      $(".b1,.b3,.b4,.b5,.b2,.b7,.b8,.b9,.b10,.b11,.b12,.b13,.b14,.b15").hide(1000);  
        
    });
      $(".b7").mouseenter(function(){
        
      $(".b2,.b3,.b4,.b5,.b6,.b1,.b8,.b9,.b10,.b11,.b12,.b13,.b14,.b15").hide(1000);  
        
    });
     $(".b8").mouseenter(function(){
        
      $(".b1,.b3,.b4,.b5,.b6,.b7,.b2,.b9,.b10,.b11,.b12,.b13,.b14,.b15").hide(1000);  
        
    });
     $(".b9").mouseenter(function(){
        
      $(".b2,.b3,.b4,.b5,.b6,.b7,.b8,.b1,.b10,.b11,.b12,.b13,.b14,.b15").hide(1000);  
        
    });
     $(".b10").mouseenter(function(){
        
      $(".b1,.b3,.b4,.b5,.b6,.b7,.b8,.b9,.b2,.b11,.b12,.b13,.b14,.b15").hide(1000);  
        
    });
     $(".b11").mouseenter(function(){
        
      $(".b2,.b3,.b4,.b5,.b6,.b7,.b8,.b9,.b10,.b1,.b12,.b13,.b14,.b15").hide(1000);  
        
    });
     $(".b12").mouseenter(function(){
        
      $(".b1,.b3,.b4,.b5,.b6,.b7,.b8,.b9,.b10,.b11,.b2,.b13,.b14,.b15").hide(1000);  
        
    });
       $(".b13").mouseenter(function(){
        
      $(".b1,.b3,.b4,.b5,.b6,.b7,.b8,.b9,.b10,.b11,.b12,.b2,.b14,.b15").hide(1000);  
        
    });
     $(".b14").mouseenter(function(){
        
      $(".b2,.b3,.b4,.b5,.b6,.b7,.b8,.b9,.b10,.b11,.b12,.b13,.b1,.b15").hide(1000);  
        
    });
     $(".b15").mouseenter(function(){
        
      $(".b1,.b3,.b4,.b5,.b6,.b7,.b8,.b9,.b10,.b11,.b12,.b13,.b14,.b2").hide(1000);  
        
    });
    /*-----------------------------------------------------------------------------*/
    $(".card").mouseenter(function(){
     $(this).animate({
        width:'320px'
    });   
    });
   $(".card").mouseleave(function(){
        $(this).animate({
          width:'300px'
        });
    });
/*---------------------------------------------------------*/
    $(".a1").mouseenter(function(){
	
$(this).css('opacity',1);
$(".a2,.a3,.a4,.a5,.a6,.a7,.a8,.a9,.a10,.a11,.a12,.a13,.a14,.a15").css('opacity',.5);
}); 
     $(".a2").mouseenter(function(){
	
$(this).css('opacity',1);
$(".a1,.a3,.a4,.a5,.a6,.a7,.a8,.a9,.a10,.a11,.a12,.a13,.a14,.a15").css('opacity',.5);
}); 
     $(".a3").mouseenter(function(){
	
$(this).css('opacity',1);
$(".a2,.a1,.a4,.a5,.a6,.a7,.a8,.a9,.a10,.a11,.a12,.a13,.a14,.a15").css('opacity',.5);
}); 
       $(".a4").mouseenter(function(){
	
$(this).css('opacity',1);
$(".a2,.a3,.a1,.a5,.a6,.a7,.a8,.a9,.a10,.a11,.a12,.a13,.a14,.a15").css('opacity',.5);
}); 
     $(".a5").mouseenter(function(){
	
$(this).css('opacity',1);
$(".a2,.a3,.a4,.a1,.a6,.a7,.a8,.a9,.a10,.a11,.a12,.a13,.a14,.a15").css('opacity',.5);
}); 
     $(".a6").mouseenter(function(){
	
$(this).css('opacity',1);
$(".a2,.a3,.a4,.a5,.a1,.a7,.a8,.a9,.a10,.a11,.a12,.a13,.a14,.a15").css('opacity',.5);
}); 
        $(".a7").mouseenter(function(){
	
$(this).css('opacity',1);
$(".a2,.a3,.a4,.a5,.a6,.a1,.a8,.a9,.a10,.a11,.a12,.a13,.a14,.a15").css('opacity',.5);
}); 
     $(".a8").mouseenter(function(){
	
$(this).css('opacity',1);
$(".a2,.a3,.a4,.a5,.a6,.a7,.a1,.a9,.a10,.a11,.a12,.a13,.a14,.a15").css('opacity',.5);
}); 
     $(".a9").mouseenter(function(){
	
$(this).css('opacity',1);
$(".a2,.a3,.a4,.a5,.a6,.a7,.a8,.a1,.a10,.a11,.a12,.a13,.a14,.a15").css('opacity',.5);
}); 
        $(".a10").mouseenter(function(){
	
$(this).css('opacity',1);
$(".a2,.a3,.a4,.a5,.a6,.a7,.a8,.a9,.a1,.a11,.a12,.a13,.a14,.a15").css('opacity',.5);
}); 
     $(".a11").mouseenter(function(){
	
$(this).css('opacity',1);
$(".a2,.a3,.a4,.a5,.a6,.a7,.a8,.a9,.a10,.a1,.a12,.a13,.a14,.a15").css('opacity',.5);
}); 
     $(".a12").mouseenter(function(){
	
$(this).css('opacity',1);
$(".a2,.a3,.a4,.a5,.a6,.a7,.a8,.a9,.a10,.a11,.a1,.a13,.a14,.a15").css('opacity',.5);
}); 
        $(".a13").mouseenter(function(){
	
$(this).css('opacity',1);
$(".a2,.a3,.a4,.a5,.a6,.a7,.a8,.a9,.a10,.a11,.a12,.a1,.a14,.a15").css('opacity',.5);
}); 
     $(".a14").mouseenter(function(){
	
$(this).css('opacity',1);
$(".a2,.a3,.a4,.a5,.a6,.a7,.a8,.a9,.a10,.a11,.a12,.a13,.a1,.a15").css('opacity',.5);
}); 
     $(".a15").mouseenter(function(){
	
$(this).css('opacity',1);
$(".a2,.a3,.a4,.a5,.a6,.a7,.a8,.a9,.a10,.a11,.a12,.a13,.a14,.a1").css('opacity',.5);
}); 
});
