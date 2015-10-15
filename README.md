# Backbone.ReactView

A simple Backbone View for rendering React components.

```js
import ReactView from 'backbone.react-view';
import MyReactComponent from './my-react-component';

const reactView = new ReactView({
  component: MyReactComponent
});

reactView.render();
reactView.remove();
```

Marionette example:


```js
import ReactView from 'backbone.react-view';
import {LayoutView} from 'backbone.marionette';
import MyReactComponent from './my-react-component'

export default LayoutView.extend({
  template() {
    return '<div class="my-region"></div>';
  },

  regions: { myRegion: '.my-region' },

  onRender() {
    this.myRegion.show(new ReactView({
      component: MyReactComponent
    }));
  }
});
```
