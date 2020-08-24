# Different ways of using Bootstrap in projects:

Bootstrap is a free front-end framework for faster and easier web development.
Bootstrap includes HTML and CSS based design templates for typography, forms, buttons, tables, navigation, modals, image carousels and many other,
as well as optional JavaScript plugins.

There are two ways to start using Bootstrap.
You can:

Download Bootstrap from getbootstrap.com
Include Bootstrap from a CDN

1.Download:
If you want to download and host Bootstrap yourself, go to getbootstrap.com, and follow the instructions there.

2.CDN:
If you don't want to download and host Bootstrap yourself, you can include it from a CDN (Content Delivery Network).
MaxCDN provides CDN support for Bootstrap's CSS and JavaScript. You must also include jQuery:
Paste following links to your projects HTML, head part:
CSS:
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
JavaScript:
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
