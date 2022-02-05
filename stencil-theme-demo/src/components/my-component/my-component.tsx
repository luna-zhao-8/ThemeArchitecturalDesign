import { Component, Prop, h } from '@stencil/core';

/**
 * @slot - The button's label.
 * @slot - prefix - Used to prepend an icon or similar element to the button.
 * @slot suffix - Used to append an icon or similar element to the button.
 *
 * @csspart - base - the component's container
 * @csspart - prefix
 * @csspart - label
 * @csspart - suffix
 */
@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {

  /** The button's variant */
  @Prop() variant: 'primary' | 'neutral' | 'success' | 'warn' | 'text' = 'primary';

  /** The button's size */
  @Prop() size: 'small' | 'medium' | 'large' = 'medium';

  /** Disables the button */
  @Prop() disabled: boolean = false;

  /** Render a ghost button */
  @Prop() ghost: boolean = false;

  /** Render a circle button */
  @Prop() circle: boolean = false;


  render() {
    return (
      <div
        part="base"
        class={{
          'button': true,
          // 'button--default': this.variant === 'default',
          'button--primary': this.variant === 'primary',
          'button--neutral': this.variant === 'neutral',
          'button--warn': this.variant === 'warn',
          'button--success': this.variant === 'success',
          'button--text': this.variant === 'text',
          'button--small': this.size === 'small',
          'button--medium': this.size === 'medium',
          'button--large': this.size === 'large',
          'button--circle': this.circle,
          'button--disabled': this.disabled,
          'button--ghost': this.ghost,
          'button--standard': !this.ghost,
        }}
      >
        <div part="prefix" class="button__prefix">
          <slot name="prefix"></slot>
        </div>
        <div part="label" class="button__label">
          <slot></slot>
        </div>
        <div part="prefix" class="button__suffix">
          <slot name="suffix"></slot>
        </div>
      </div>
    );
  }
}
