# GLightbox Plugin

Use this package to create custom plugins for GLightbox

## How to use

```bash
npm install glightbox-plugin
```

```javascript
import { GLightboxPlugin } from 'glightbox-plugin';

export default class CustomImageSlide extends GLightboxPlugin {
    name = 'video'; // Unique name for your plugin
    type = 'slide'; // can be slide or theme and so on
    options: ImageOptions;
    defaults: ImageOptions = {
        maxWidth: '100vw',
    };

    constructor(options: Partial<ImageOptions> = {}) {
        super();
        this.options = { ...this.defaults, ...options };
    }
}
```
