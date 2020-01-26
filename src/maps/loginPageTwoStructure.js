function signupElements() {
    return {
      email: function() { return $('#email_create') },
      submitCreate: function() { return $('#SubmitCreate') },
      radioGenderMale: function() { return $('#id_gender1') },
      radioGenderFemale: function() { return $('#id_gender2') },
      firstName: function() { return $('#customer_firstname') },
      lastName: function() { return $('#customer_lastname') },
      password: function() { return $('#passwd') },
      dayBirth: function() { return $('#days') },
      monthBirth: function() { return $('#months') },
      yearBirth: function() { return $('#years') },
      subscribeNews: function() { return $('#newsletter') },
      receiveOffers: function() { return $('#optin') },
      companyName: function() { return $('#company') },
      address1: function() { return $('#address1') },
      address2: function() { return $('#address2') },
      city: function() { return $('#city') },
      state: function() { return $('#id_state') },
      country: function() { return $('#id_country') },
      postcode: function() { return $('#postcode') },
      additionalInfo: function() { return $('#other') },
      phone: function() { return $('#phone') },
      mobilePhone: function() { return $('#phone_mobile') },
      submitAccount: function() { return $('#submitAccount') }
    }
}
module.exports = signupElements() ;