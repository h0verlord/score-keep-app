import {
      Meteor
} from 'meteor/meteor'
import {
      Players
} from '../imports/api/players'

Meteor.startup(() => {
      class Person {
            constructor(name = 'Anonymous', age = 0) {
                  this.name = name
                  this.age = age
            }
            getPersonDescription() {
                  return `${this.name} is ${this.age} year(s) old.`
            }
            getGreeting() {
                  return `Hi, I am ${this.name}.`
            }
      }

      class Employee extends Person {
            constructor(name, age, title) {
                  super(name, age)
                  this.title = title
            }
            hasJob() {
                  return !!this.title;
            }
            getGreeting() {
                  if (this.title) {
                        return `Hi, I am ${this.name} and I work as a ${this.title}`
                  } else {
                        return super.getGreeting()
                  }
            }
      }

      class Programmer extends Person{
            constructor(name, age, usedLanguage = 'assembly'){
                  super(name, age)
                  this.usedLanguage = usedLanguage
            }

            getGreeting(){
                  if(this.usedLanguage){
                        return `Hi, I am ${this.name}. I am a ${this.usedLanguage} developer.`
                  } else{
                        return super.getGreeting()
                  }
            }
      }

      let js = new Programmer('John', 26, 'JS')
      console.log(js.getGreeting())

      let def = new Programmer('Peter', 23)
      console.log(def.getGreeting())


})