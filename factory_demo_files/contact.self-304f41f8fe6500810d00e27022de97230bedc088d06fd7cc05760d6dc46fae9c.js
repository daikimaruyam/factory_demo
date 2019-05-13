$(document).ready(function() {

  $('#contact-request').submit(function(e) {
    if (e.preventDefault) e.preventDefault();
    else e.returnValue = false;

    var thisForm = $(this).closest('#contact-request');
    var submitButton = thisForm.find('button[type="submit"]');
    var originalError = thisForm.attr('original-error');
    var formError;

    thisForm.find('.form-error, .form-success').remove();
    submitButton.attr('data-text', submitButton.text());
    thisForm.append('<div class="form-error" style="display: none;">' + thisForm.attr('data-error') + '</div>');
    thisForm.append('<div class="form-success" style="display: none;">' + thisForm.attr('data-success') + '</div>');
    formSuccess = thisForm.find('.form-success');
    formError = thisForm.find('.form-error');

    thisForm.removeClass('attempted-submit');

    formError.fadeOut(200);

    submitButton.html("送信中").attr('disabled', 'disabled');

    jQuery.ajax({
      type: "POST",
      url: "/contact",
      dataType: "json",
      data: thisForm.serialize(),
      success: function(json) {
        submitButton.html(submitButton.attr('data-text')).removeAttr('disabled');
        if(json[0].status.code == "200"){
          thisForm.find('input[type="text"]').val("");
          thisForm.find('input[type="email"]').val("");
          thisForm.find('input[type="tel"]').val("");
          thisForm.find('input[type="checkbox"]').prop("checked",false);
          thisForm.find('textarea').val("");
          thisForm.find('.form-success').fadeIn(1000);
          formError.fadeOut(1000);
          setTimeout(function() {
              formSuccess.fadeOut(500);
          }, 5000);
        }else{
          submitButton.html(submitButton.attr('data-text')).removeAttr('disabled');
          formError.attr('original-error', formError.text());
          error = "送信できませんでした";
          formError.html(error).fadeIn(1000);
          setTimeout(function() {
              formError.fadeOut(500);
          }, 5000);
        }
      }
    });
    return false;
  });

});
