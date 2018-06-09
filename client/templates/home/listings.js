Template.homeListings.helpers({
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
Template.homeListings.helpers({
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

Template.homeListings.events({
    "change #category-select": function (event, template) {
        var category = $(event.currentTarget).val();
        console.log("category : " + category);
        // additional code to do what you want with the category
    }
});
