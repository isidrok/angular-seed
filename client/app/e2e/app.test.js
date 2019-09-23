Feature('App');

Scenario('See the title', (I) => {
  I.amOnPage('/');
  I.see('Foooo', 'h1');
});
