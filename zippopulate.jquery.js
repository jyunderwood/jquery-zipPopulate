/*
 * zipPopulate
 * Populates city, state and country fields from a zip code field.
 *
 * Copyright (c) 2014 Jonathan Underwood
 *
 * Licensed under the MIT license
 *
 * Version: 1.0.0
 *
 */

;(function($, window, document, undefined) {
  "use strict";

  $.fn.zipPopulate = function(options) {
    var settings = $.extend( {}, $.fn.zipPopulate.defaults, options);

    return this.blur(function() {
      var client, zip;

      zip = $(this).val();
      if (zip === null || zip.length < 5) {
        return;
      }

      client = new XMLHttpRequest;
      client.open("GET", settings.apiEndPoint + zip);
      client.onreadystatechange = function() {
        var response;

        if (client.readyState !== 4) {
          return;
        }

        response = JSON.parse(client.responseText);

        $(settings.city).val(response.city);
        $(settings.state).val(response.state);
        $(settings.country).val(response.country);
      };

      client.send();
    });
  };

  $.fn.zipPopulate.defaults = {
    apiEndPoint: "http://zip.getziptastic.com/v2/US/",
    city: "#cityField",
    state: "#stateField",
    country: "#countryField"
  };
})(jQuery, window, document);
