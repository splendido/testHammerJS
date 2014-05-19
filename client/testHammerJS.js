
UI.body.rendered = function(){
  $('body').hammer();
}

/*
Template.hammerDiv.rendered = function() {
  $('#hammerDiv').hammer();
  $('#btn').hammer();
};
*/

Template.hammerDiv.events({
  'doubletap #hammerDiv': function(event) {
    alert("Double Tap!");
  },
  'hold #hammerDiv': function(event) {
    alert("Hold!");
  },
  'pinchin #hammerDiv': function(event) {
    alert("Pinch In!");
  },
  'pinchout #hammerDiv': function(event) {
    alert("Pinch Out!");
  },
  'swiperight #hammerDiv': function(event) {
    alert("Swipe Right!");
  },
  'tap #btn': function(event){
    event.stopPropagation();
    alert("Yeah!");
  }
});
