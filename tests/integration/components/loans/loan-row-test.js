import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('loans/loan-row', 'Integration | Component | loans/loan row', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{loans/loan-row}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#loans/loan-row}}
      template block text
    {{/loans/loan-row}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
