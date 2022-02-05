import { newSpecPage } from '@stencil/core/testing';
import { KlNearbyToothbrush } from '../kl-nearby-toothbrush';

describe('kl-nearby-toothbrush', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [KlNearbyToothbrush],
      html: `<kl-nearby-toothbrush></kl-nearby-toothbrush>`,
    });
    expect(page.root).toEqualHtml(`
      <kl-nearby-toothbrush>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </kl-nearby-toothbrush>
    `);
  });
});
