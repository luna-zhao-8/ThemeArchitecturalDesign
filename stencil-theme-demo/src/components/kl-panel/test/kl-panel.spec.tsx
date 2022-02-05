import { newSpecPage } from '@stencil/core/testing';
import { KlPanel } from '../kl-panel';

describe('kl-panel', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [KlPanel],
      html: `<kl-panel></kl-panel>`,
    });
    expect(page.root).toEqualHtml(`
      <kl-panel>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </kl-panel>
    `);
  });
});
