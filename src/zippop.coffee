# Zip Populate
# Populates city/state/country from a Zip Code
# All returned values are optional
#
# Requires: jQuery 1.4+
#
# Usage:
#
#   $('#zip_code_field').zipPop({
#     city: '#city_field',
#     state: '#state_field',
#     country: '#country_field'
#   });
#

$.fn.zipPop = (options) ->
  settings = $.extend {}, $.fn.zipPop.defaults, options

  this.blur ->
    zip = $(this).val()
    return if zip == null or zip.length < 5

    client = new XMLHttpRequest
    client.open "GET", "http://zip.elevenbasetwo.com/v2/US/#{zip}"
    client.onreadystatechange = ->
      return unless client.readyState == 4
      response = JSON.parse(client.responseText)

      $(settings.city).val    response.city
      $(settings.state).val   response.state
      $(settings.country).val response.country

    client.send()

$.fn.zipPop.defaults = {}
