;(function() {
  /**
    * First, let's define what
    * the groupings are to be titled,
    * then let's simply list what
    * sponsors belong in each group. -rwp
    */
  var sponsorGroups, htmlAggregate;
  sponsorGroups = {
    group1: {
      displayText: 'Venue Sponsor',
      sponsors: [
        { sponsorName: 'BrowserMedia', imgURL: 'images/RubyNationVenueLogo.png' }
      ]
    },
    group2: {
      displayText: 'Gold Sponsors',
      sponsors: [
        { sponsorName: 'LivingSocial', imgURL: 'images/LSLogo.jpg' },
        { sponsorName: 'CustomInk', imgURL: 'images/custom_ink_logo.png' },
      ]
    },
    group3: {
      displayText: 'Silver Sponsors',
      sponsors: [
        { sponsorName: 'SocialDriver', imgURL: 'images/socialdriver-logo.png' },
        { sponsorName: 'ModCloth', imgURL: 'images/Modcloth-logo.png' },
        { sponsorName: 'Vox Media', imgURL: 'images/Vox-media-logo.jpg' }
      ]
    },
    group4: {
      displayText: 'Bronze Sponsors',
      sponsors: [
        { sponsorName: 'Spree', imgURL: 'images/spree-logo.png' },
        { sponsorName: 'InfernoRed Technology', imgURL: 'images/infernored_logo.jpg' }
      ]
    },
    group5: {
      displayText: 'Swag Sponsors',
      sponsors: [
        { sponsorName: 'stickermule', imgURL: 'images/sticker-mule-logo-thumb-1.png' }
      ]
    },
    group6: {
      displayText: 'Other Sponsors',
      sponsors: [
        { sponsorName: 'RidePost', imgURL: 'https://s3.amazonaws.com/ridepost-dev/logo_w300.png' }
      ]
    }
  };

  /**
    * We'll set this aggregate to an empty string
    * so he can have text added on easily. -rwp
    */
  htmlAggregate = '';

  /**
    * Next, we want to iterate over the object(s)
    * and generate the correct HTML, which is based
    * off of the values in each key: 'value' set
    * of sponsorGroups. Each string of HTML is then
    * concatenated on to the htmlAggregate. -rwp
    */
  for (var key in sponsorGroups) {
    var group = sponsorGroups[key];

    // Generate this sponsor group's sponsors, first. -rwp
    var sponsorsHTML = '';
    for (var i = 0; i < group.sponsors.length; i++) {
      sponsorsHTML += '' +
        '<h1 class="sponsor-content-container pull-left">' +
          '<a href="#" class="sponsor grid_4 alpha" style="background: url('+group.sponsors[i].imgURL+') no-repeat center center;">' +
            group.sponsors[i].sponsorName +
          '</a>' +
        '</h1>';
    };

    /**
      * Then generate the whole sponsor group
      * and append the sponsors' HTML. -rwp
      */
    var html = '' +
      '<article class="sponsor-group">' +
        '<header>' +
          '<h3 class="sponsor-type">'+group.displayText+'</h3>' +
        '</header>' +
        sponsorsHTML +
      '</article>';

    // Append all the HTML to the aggregate! -rwp
    htmlAggregate += html;
  }

  /**
    * Finally, we select the first element with
    * a className of 'sponsors', then we set
    * it's inner HTML to the htmlAggregate string
    * which we added on to a number of times above.
    */
  document.getElementsByClassName('sponsors')[0].innerHTML = htmlAggregate;
})();