Template.listrow.helpers({
	listrowitems : function() {
		listitems = Listings.find().fetch();
		return listitems;
	}
	

});