//jshint -W104
class NPC{
  constructor(alignment, race, name, dialogue, health, damage){
    this.alignment = alignment;
    this.race = race;
    this.name = name;
    this.dialogue = dialogue;
    this.health = health;
    this.damage = damage;
  }
  damage(other){
    console.log(other.name + " took " + this.damage + " damage.");
    other.health=other.health - this.damage;
  }
  talk(other){
    if (this.alignment === other.alignment){
      console.log(this.dialogue);
    }
    else {
      console.log("You cant talk to that cuz it's tryin to kill ya");
    }
  }
}
