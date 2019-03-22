$(function(){
  $('li>a').click(function(){
      $('li>a').removeClass('on');
      $(this).addClass('on');
      
  });
});