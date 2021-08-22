(function () {
  /**
   * Helper object for working with countries data and extracting information.
   * See countries-data.js for format of the countries data set.
   */
  let countries = {
    /**
     * Store all countries from countries-data.js on `countries.all` for convenience.
     */
    all: window.countriesData,

    /**
     * Return an array of all countries, with the Name Object replaced by the
     * appropriate translation, or English if not specified (or unknown).  For
     * example, when language="English", you would process the record for Canada into:
     *
     * {
     *     code: "CA",
     *     continent: "Americas",
     *     areaInKm2: 9984670,
     *     population: 36624199,
     *     capital: "Ottawa",
     *     name: "Canada"
     * }
     *
     * Supported languages include:
     *
     * English, Arabic, Chinese, French, Hindi, Korean, Japanese, Russian
     *
     * Uses `countries.all` as the underlying array of countries to be processed.
     *
     * HINT: make sure you don't overwrite the original name object.
     */
    getByLanguage: function (language) {
      var tempAll = JSON.parse(JSON.stringify(countries.all));

      switch (language) {
        case "English": for (i = 0; i < tempAll.length; i++) {
          tempAll[i].name = countries.all[i].name.English;
        } break;
        case "Arabic": for (i = 0; i < tempAll.length; i++) {
          tempAll[i].name = countries.all[i].name.Arabic;
        } break;
        case "Chinese": for (i = 0; i < tempAll.length; i++) {
          tempAll[i].name = countries.all[i].name.Chinese;
        } break;
        case "French": for (i = 0; i < tempAll.length; i++) {
          tempAll[i].name = countries.all[i].name.French;
        } break;
        case "Hindi": for (i = 0; i < tempAll.length; i++) {
          tempAll[i].name = countries.all[i].name.Hindi;
        } break;
        case "Korean": for (i = 0; i < tempAll.length; i++) {
          tempAll[i].name = countries.all[i].name.Korean;
        } break;
        case "Japanese": for (i = 0; i < tempAll.length; i++) {
          tempAll[i].name = countries.all[i].name.Japanese;
        } break;
        case "Russian": for (i = 0; i < tempAll.length; i++) {
          tempAll[i].name = countries.all[i].name.Russian;
        } break;
      }
      return tempAll;
    },

    /**
     * Return an array of countries with a population greater than or equal to
     * `minPopulation`, and possibly less than equal to `maxPopulation` (if defined)
     * otherwise allow any number greater than `minPopulation`.
     *
     * Uses getByLanguage('English') to get English names for countries.
     *
     * @param {Number} minPopulation - (Required) minimum population value
     * @param {Number} maxPopulation - (Optional) maximum population value
     */
    getByPopulation: function (minPopulation, maxPopulation) {
      var tempAll = JSON.parse(JSON.stringify(countries.getByLanguage("English"))).filter(function (item) {
        if (item.population < maxPopulation && item.population > minPopulation)
          return true;
      });
      return tempAll;
    },

    /**
     * Return an array of countries for the given `continent` with an area
     * greater than or equal to the given `area` in square KM.
     *
     * Uses getByLanguage('English') to get English names for countries.
     *
     * @param {String} continent - (Required) name of the continent (e.g., Europe)
     * @param {Number} minArea - (Required) minimum number of KM2 area
     */
    getByAreaAndContinent: function (continent, minArea) {
      var tempAll = JSON.parse(JSON.stringify(countries.getByLanguage("English"))).filter(function (item) {
        if (item.continent == continent && item.areaInKm2 >= minArea)
          return true;
      });
      return tempAll;
    }
  };

  /**
   * Helper functions for building table elements.
   */
  let tableHelper = {
    /**
     * Clears (any) existing rows from the #table-rows table body
     */
    clearTable: function () {
      document.getElementById('table-rows').innerHTML = "";
    },

    /**
     * Takes a `country.code` (e.g., "CA" for Canada) and returns an <img>
     * element with its `src` property set the appropriate flag image URL
     * for this code, e.g., src="flags/ca.png" for Canada.
     */
    countryCodeToFlagImg: function (countryCode) {
      var img = document.createElement('img');
      img.src = "flags/" + countryCode.toLowerCase() + ".png";
      console.log(img);
      return img;
    },

    /**
     * Takes a single `country` object and converts it to a <tr> with <td>
     * child elements for every column in the row.  The row should match the
     * expected format of the table (i.e., flag, code, country, continent, etc).
     * Return the new <tr>...</tr> row.
     *
     * Use the DOM methods document.createElement(), element.appendChild(), etc
     * to create your <tr> row.
     */
    countryToRow: function (country) {
      var tr = document.createElement('tr');

      var flag = document.createElement('td');
      flag.appendChild(this.countryCodeToFlagImg(country.code));
      var code = document.createElement('td');
      code.innerText = country.code;
      var countryName = document.createElement('td');
      countryName.innerText = country.name;
      var countinent = document.createElement('td');
      countinent.innerText = country.continent;
      var area = document.createElement('td');
      area.innerText = country.areaInKm2;
      var population = document.createElement('td');
      population.innerText = country.population;
      var capital = document.createElement('td');
      capital.innerText = country.capital;

      tr.appendChild(flag);
      tr.appendChild(code);
      tr.appendChild(countryName);
      tr.appendChild(countinent);
      tr.appendChild(area);
      tr.appendChild(population);
      tr.appendChild(capital);




      return tr;

    },

    /**
     * Takes an array of `country` Objects named `countries`, and passes each
     * `country` in the array  to `tableHelper.countryToRow()`.  The resulting
     * rows are then appended to the #table-rows table body element.  Make sure
     * you use `tableHelper.clear()` to remove any existing rows before you do this.
     */
    countriesToTable: function (countries) {



      for (i = 0; i < countries.length; i++) {
        document.getElementById('table-rows').appendChild(tableHelper.countryToRow(countries[i]));
      }

    }
  };

  /**
   * Register click handlers for every menu item in the page.  Use the `countries`
   * and `tableHelper` Objects, and their associated methods, to update/populate
   * the #table-rows table body with the appropriate set of countries, based on the
   * menu item clicked.
   *
   * Make sure you also update the #subtitle heading to properly reflect what
   * is in the table after you populate it. For example: "List of Countries
   * and Dependencies - Population between 1 and 2 million" or "List of Countries
   * and Dependencies - All countries in Asia" etc.
   */
  function setupMenuHandlers() {



    tableHelper.countriesToTable(countries.getByLanguage("English"));
    document.getElementById("menu_americas_1mkm").onclick = function () {
      tableHelper.clearTable();
      tableHelper.countriesToTable(countries.getByAreaAndContinent('Americas', 1000000));
    }
    document.getElementById("menu_asia_all").onclick = function () {
      tableHelper.clearTable();
      tableHelper.countriesToTable(countries.getByAreaAndContinent('Asia', 0));
    }
    document.getElementById("menu_population_100_000_000m").onclick = function () {
      tableHelper.clearTable();
      tableHelper.countriesToTable(countries.getByPopulation(100000000, Number.MAX_SAFE_INTEGER));
    }
    document.getElementById("menu_population_1m_2m").onclick = function () {
      tableHelper.clearTable();
      tableHelper.countriesToTable(countries.getByPopulation(1000000, 2000000));
    }
    document.getElementById('menu_english').onclick = function () {
      tableHelper.clearTable();

      tableHelper.countriesToTable(countries.getByLanguage("English"));
    };
    document.getElementById('menu_arabic').onclick = function () {
      tableHelper.clearTable();
      tableHelper.countriesToTable(countries.getByLanguage("Arabic"));
    };
    document.getElementById('menu_chinese').onclick = function () {
      tableHelper.clearTable();
      tableHelper.countriesToTable(countries.getByLanguage("Chinese"));
    };
    document.getElementById('menu_french').onclick = function () {
      tableHelper.clearTable();
      tableHelper.countriesToTable(countries.getByLanguage("French"));
    };
    document.getElementById('menu_hindi').onclick = function () {
      tableHelper.clearTable();
      tableHelper.countriesToTable(countries.getByLanguage("Hindi"));
    };
    document.getElementById('menu_korean').onclick = function () {
      tableHelper.clearTable();
      tableHelper.countriesToTable(countries.getByLanguage("Korean"));
    };
    document.getElementById('menu_japanese').onclick = function () {
      tableHelper.clearTable();
      tableHelper.countriesToTable(countries.getByLanguage("Japanese"));
    };
    document.getElementById('menu_russian').onclick = function () {
      tableHelper.clearTable();
      tableHelper.countriesToTable(countries.getByLanguage("Russian"));
    };


  }

  // When the page loads, setup all event handlers by calling setup function.
  window.onload = setupMenuHandlers;
})();
