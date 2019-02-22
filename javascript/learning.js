//へたなコードの書き方その１．it takes to 1 billion times.
(() => { 
    const han = {firstname: "Han", lastname: "Solo"};
    const luke = {firstname: "Luke", lastname: "Skywalker"};
    const leia = {firstname: "Leia", lastname: "Organa"};
    const obi = {firstname: "Obi", lastname: "Wan"};
    const yoda = {firstname: "", lastname: "Yoda"};
    const people = [
      han, luke, leia, obi, 
      yoda, luke, leia, obi 
    ];
    const getName = (person) => person.lastname;
    console.time("engine");
    for(var i = 0; i < 1000 * 1000 * 1000; i++) { 
      getName(people[i & 7]); 
    }
    console.timeEnd("engine"); 
  })();

  //下手なコードその２　it takes to 8.5seconds.
  (() => {
    const han = {
      firstname: "Han", lastname: "Solo", 
      spacecraft: "Falcon"};
    const luke = {
      firstname: "Luke", lastname: "Skywalker", 
      job: "Jedi"};
    const leia = {
      firstname: "Leia", lastname: "Organa", 
      gender: "female"};
    const obi = {
      firstname: "Obi", lastname: "Wan", 
      retired: true};
    const yoda = {lastname: "Yoda"};
    const people = [
      han, luke, leia, obi, 
      yoda, luke, leia, obi];
    const getName = (person) => person.lastname;
    console.time("engine");
    for(var i = 0; i < 1000 * 1000 * 1000; i++) {
      getName(people[i & 7]);
    }
    console.timeEnd("engine");
  })();

//うまいコードの書き方。
//下手なコードの書き方との違いは、複数のObjectに対して共通のshape一つのみを持たせること。
//具体案はclassとconstructorで実装。そして実際のObjectはnewを使用させて実装する。

(() => {
    class Person {
      constructor({
        firstname = '',
        lastname = '',
        spaceship = '',
        job = '',
        gender = '',
        retired = false
      } = {}) {
        Object.assign(this, {
          firstname,
          lastname,
          spaceship,
          job,
          gender,
          retired
        });
      }
    }
    const han = new Person({
      firstname: 'Han',
      lastname: 'Solo',
      spaceship: 'Falcon'
    });
    const luke = new Person({
      firstname: 'Luke',
      lastname: 'Skywalker',
      job: 'Jedi'
    });
    const leia = new Person({
      firstname: 'Leia',
      lastname: 'Organa',
      gender: 'female'
    });
    const obi = new Person({
      firstname: 'Obi',
      lastname: 'Wan',
      retired: true
    });
    const yoda = new Person({ lastname: 'Yoda' });
    const people = [
      han,
      luke,
      leia,
      obi,
      yoda,
      luke,
      leia,
      obi
    ];
    const getName = person => person.lastname;
    console.time('engine');
    for (var i = 0; i < 1000 * 1000 * 1000; i++) {
      getName(people[i & 7]);
    }
    console.timeEnd('engine');
  })();