Template.homeCreateListing.events({

	'submit form'(event) {
		event.preventDefault();

		
		title = event.target.title.value;
		description = event.target.description.value;
		startprice = event.target.startprice.value;
		picturemain = "";
		category = event.target.categoryselect.value;
		
			

		Listings.insert({title, description, startprice, picturemain, category, createdAt: new Date()
		
		
		});

},
});

Template.homeCreateListing.helpers({
  items: [
    'Automotive',
    'Vehicles',
    'Passenger Cars',
    'SUV & CUV',
    'Trucks',
    'Vans',
    'Heavy Trucks',
    'Commercial Vehicles'
  ]
});
Template.homeCreateListing.helpers({
    categories: function(){
        return ['Automotive',
        'Vehicles',
        'Passenger Cars',
        'SUV & CUV',
        'Trucks',
        'Vans',
        'Heavy Trucks',
        'Commercial Vehicles']
    }
});

Template.homeCreateListing.events({
    "change #category-select": function (event, template) {
        var category = $(event.currentTarget).val();
        console.log("category : " + category);
        // additional code to do what you want with the category
    }
});