railsgirlsdcsponsors
====================

[Check out the demo here](http://rpearce.github.io/railsgirlsdcsponsors)

# Getting Started
- Just include the following code where you want it!
- Don't forget to include the sponsors.js file, pointing to the correct path, and the relevant CSS files, as well.

```html
<div class="grid_12">
  <section class="sponsors"></section>
  <script async src="js/sponsors.js"></script>
</div>
```

# Info
In order to avoid repetitive code, and to be able to easily add new sponsors and sponsor groups in the future, I added a "sponsors.js" file with comments, which can easily be edited to add/update/remove sponsors and their group types.

## Note
You may have to adjust the image sizes of some of the images, but none of them are over 300px wide.

# Update
I wasn't thinking --- running the JS file live on your site does NOT increase SEO. The bots don't deal with JavaScript, so I would instead use this to generate the HTML on your own browser and then using that raw HTML (with the CSS) and not the JS.