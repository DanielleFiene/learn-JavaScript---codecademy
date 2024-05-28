const menu = {
    _courses: {
      appetizers: [],
      mains:  [],
      desserts: [], 
    },
    //getters
      get appetizers() { 
        return this.appetizers},
      get mains() { 
        return this.mains},
      get desserts() { 
        return this.desserts},
      //get courses
             get courses() { 
                return {
                  appetizers: this._courses.appetizers,
                  mains: this._courses.mains,
                  desserts: this._courses.desserts,
      } 
     },
    //============================================
    //setters
    set appetizers(appetizerIn) { 
        this.appetizers = appetizerIn},
    set mains(mainsIn) { 
        this.mains = mainsIn},
    set desserts(dessertsIn) { 
        this.desserts = dessertsIn},
    
    //============================================
       //Methods
    
    //add new dish
    addDishToCourse(courseName, dishName, dishPrice) {
      const dish = {
        name: dishName,
        price: dishPrice,
      };
      this._courses[courseName].push(dish);
    },
    
    //get a random dish from a course on the menu
    getRandomDishFromCourse(courseName) {
      const dishes = this._courses[courseName];
      const randomIndex = Math.floor(Math.random() * dishes.length);
      //return a dish from 'dishes' by using 'randomIndex'
      return dishes[randomIndex];
    },
    //generate a random meal
    generateRandomMeal(){
      const appetizer = this.getRandomDishFromCourse('appetizers');
      const main = this.getRandomDishFromCourse('mains');
      const dessert = this.getRandomDishFromCourse('desserts');
      const totalPrice = appetizer.price + main.price + dessert.price;
      
      return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name} and the price is $${totalPrice}.`;}
    
  };
  //appetizers
  menu.addDishToCourse('appetizers', 'Carpaccio', 14.25);
  menu.addDishToCourse('appetizers', 'Vitello Tonnato', 12.25);
  menu.addDishToCourse('appetizers', 'Steak Tartare', 20.25);
  //mains
  menu.addDishToCourse('mains', 'Big Steak', 72.50);
  menu.addDishToCourse('mains', 'Ossobuco', 50.25);
  menu.addDishToCourse('mains', 'Sliptong', 40.25);
  //desserts
  menu.addDishToCourse('desserts', 'Creme Brulee', 20.25);
  menu.addDishToCourse('desserts', 'Ice Cream', 14.25);
  menu.addDishToCourse('desserts', 'French Coffee', 8.25);
  
  
  let meal = menu.generateRandomMeal();
  console.log(meal);