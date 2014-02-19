$.fn.zipPop = function(options) {
  var settings;
  settings = $.extend({}, $.fn.zipPop.defaults, options);
  return this.blur(function() {
    var client, zip;
    zip = $(this).val();
    if (zip === null || zip.length < 5) {
      return;
    }
    client = new XMLHttpRequest;
    client.open("GET", "http://zip.elevenbasetwo.com/v2/US/" + zip);
    client.onreadystatechange = function() {
      var response;
      if (client.readyState !== 4) {
        return;
      }
      response = JSON.parse(client.responseText);
      $(settings.city).val(response.city);
      $(settings.state).val(response.state);
      return $(settings.country).val(response.country);
    };
    return client.send();
  });
};

$.fn.zipPop.defaults = {};
