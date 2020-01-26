import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | in-element', function(hooks) {
  setupRenderingTest(hooks);
  hooks.beforeEach(function() {
    let destinationElement = document.querySelector('#ember-testing');
    this.set('destinationElement', destinationElement);
  });

  test('it works', async function(assert) {
    await render(hbs`<div>{{#-in-element this.destinationElement insertBefore=null}}Hallo{{/-in-element}}</div>`);

    assert.equal(this.destinationElement.textContent.trim(), 'Hallo');
  });

  test('should work, but fails', async function(assert) {
    await render(hbs`
      <div>
        {{#-in-element this.destinationElement insertBefore=null}}
          Hallo
        {{/-in-element}}
      </div>
    `);

    assert.equal(this.destinationElement.textContent.trim(), 'Hallo');
  });

});
