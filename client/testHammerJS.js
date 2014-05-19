Template.hammerDiv.rendered = function() {
  $('#hammerDiv').hammer();
  $('#btn').hammer();
};

Template.hammerDiv.events({
  'doubletap #hammerDiv': function(event) {
    alert("Double Tap!");
  },
  'hold #hammerDiv': function(event) {
    alert("Hold!");
  },
  'tap #btn': function(event){
    event.stopPropagation();
    alert("Yeah!");
  }
});
