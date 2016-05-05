(function($, RD) {

  var fill = function() {
    var $info_identifier_cnpj = $("[name='user[account][subscription_attributes][info_identifier]']");
    var $subscription_contractor_cpf = $('#subscription_contractor_cpf');
    var $user_account_subscription_attributes_info_state = $('#user_account_subscription_attributes_info_state');
    var $user_account_subscription_attributes_info_city = $('#user_account_subscription_attributes_info_city');

    $info_identifier_cnpj.val(RD.cnpj);
    $subscription_contractor_cpf.val(RD.cpf);
    $user_account_subscription_attributes_info_state.val(RD.state);
    $user_account_subscription_attributes_info_city.html("<option value=\"\">Selecione uma cidade</option><option value=\"" + RD.city + "\">" + RD.city + "</option>");
    $user_account_subscription_attributes_info_city.val(RD.city);


    var emails_fields = $("[name*='email']").not('input[type=hidden]');
    emails_fields.each(function() {
      $(this).val(RD.email);
    });

    var passwords_fields = $("[name*='password']").not('input[type=hidden]');
    passwords_fields.each(function() {
      $(this).val(RD.password);
    });

    var name_fields = $("[name*='name']").not('input[type=hidden]');
    name_fields.each(function() {
      $(this).val(RD.name);
    });

    var job_title_fields = $("[name*='job_title']").not('input[type=hidden]');
    job_title_fields.each(function() {
      $(this).val(RD.name);
    });

    var zipcode_fields = $("[name*='zipcode']").not('input[type=hidden]');
    zipcode_fields.each(function() {
      $(this).val(RD.zipcode);
    });

    var site_fields = $("[name*='site']").not('input[type=hidden]');
    site_fields.each(function() {
      $(this).val(RD.site);
    });

    var address_fields = $("[name*='address']").not('input[type=hidden]');
    address_fields.each(function() {
      $(this).val(RD.address);
    });

    $( "#user_account_terms_of_service" ).prop( "checked", true );
  };

  $('.container').last().append(components.div);
  $('#fill_btn').click(fill);

})( jQuery, RD);
