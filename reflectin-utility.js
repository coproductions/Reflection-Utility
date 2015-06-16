function User(){

}

User.prototype.getName = function(){
  return this.name;
}

User.prototype.logIn = function(){
  var password = prompt('please enter your password')
  if(password === this.password){
    console.log('you have successfully logged in')
  }
  else {
    console.log('wrong password')
  }
}

function GroupUser(){

}

GroupUser.prototype = Object.create(User.prototype,{constructor:{value:GroupUser}});

GroupUser.prototype.getNames = function(){
  console.log(this.names)
}

GroupUser.prototype.leaveGroup = function(){
  console.log('you have left the group')
}

function SuperUser(){
}
SuperUser.prototype = Object.create(GroupUser.prototype,{constructor:{value:SuperUser}});

SuperUser.prototype.getPoints = function(){
  console.log(this.points);
}


var superman = new SuperUser();

function reflector(instance){
  var thisPrototype = Object.getPrototypeOf(instance);
  //console.log(thisPrototype)
  if(thisPrototype){
    console.log('Class Name: ',thisPrototype.constructor.name)
    for(key in thisPrototype){
      if(thisPrototype.hasOwnProperty(key)){
        console.log(key,' : ',thisPrototype[key])
      }
    }
    reflector(thisPrototype)
  }
}

reflector(superman)