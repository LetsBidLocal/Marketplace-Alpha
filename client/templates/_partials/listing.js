Template.listing.helpers({
	listitem : function() {
		listitem = Listings.find().fetch();
		return listitem;
	}
	

});
