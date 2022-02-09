
# Theming architectural design


## Design System

UI designers usually provide a set of design tokens to consistent appearance across components. Design tokens offer a high-level way to customise the component library with minimal effort.

Design tokens are accessed through CSS custom properties that are defined in the theme. And because design tokens live at the page level, they’re prefixed like `--kl` to avoid collision with other libraries.

To build up a design system, the first thing we need is to create bare elements. they are the default styles you want globally across the site. Typically, cover things like typography, box-sizing, etc.


## Dark and light theme

All themes are scoped to classes using the `kl-theme-{name}` convention, where `{name}` is in a lowercase value representing the name of the theme. The included light and dark themes use `kl-theme-light` and `kl-theme-dark`.

All selectors must be scoped to the theme’s class to ensure differences from other themes. These selectors or variables should also scope them to `:host` so they can be imported and applied to custom element shadow roots.
