Router.route("/", function () {
  this.render('homeIndex');
}, {
  name: 'homeIndex'
});

Router.route("/listings/:_id", function () {
	var params = this.params;
	var id = params._id;
	this.render('listingpage', {
		data: function () {
			return Listings.findOne({_id: this.params._id});
		}
	});
}, {
	name: 'listingpage'
});

Router.route("/listings", function () {
  this.render('homeListings');
}, {
  name: 'homeListings'
});






Router.route("/create", {
  name: "homeCreateListing"
});

Router.route("/about", {
  name: "homeAbout"
});

