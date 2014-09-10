# zipPopulate

A jQuery plugin that populates city, state and country fields from a zip code field.

Will fetch on blur

## Usage

Relies on the API at [Ziptastic](http://getziptastic.com). If you don't want to rely on a third-party, you can run your own API server. The source can be found at the [Ziptastic Github Repo](https://github.com/daspecster/ziptastic). Just pass in the API address to `apiEndPoint` in the plugin options (default is `http://zip.getziptastic.com/v2/US/`)


```html
<p>
<label for="zip_code">Zip Code</label>
<input type="text" name="zip_code" id="zipCodeField" />
</p>

<p>
  <label for="city">City</label>
  <input type="text" name="city" id="cityField" />
</p>

<p>
  <label for="state">State</label>
  <input type="text" name="state" id="stateField" />
</p>

<p>
  <label for="country">Country</label>
  <input type="text" name="country" id="countryField" />
</p>

<script>
  $('#zipCodeField').zipPopulate({
    city: "#cityField",
    state: "#stateField",
    country: "#countryField"
  });
</script>
```

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Added some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## License

Licensed under the MIT License.
