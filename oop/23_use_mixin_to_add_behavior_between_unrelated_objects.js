let bird = {
  name: 'Donald',
  numLegs: 2,
};

let boat = {
  name: 'Warrior',
  type: 'race-boat',
};

// Only change code below this line
function glideMixin(obj) {
  obj.glide = function () {
    console.log('Glideee!');
  };
}

glideMixin(bird);
glideMixin(boat);

boat.glide();
bird.glide();
