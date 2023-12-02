# Kekstagram

Simple Instagram-like app, where users have the option to upload their photos after pre-editing and applying filters and can view photos of other users, mark them as liked and comment on them

<p align="center"><img width="869" alt="Browser Mockup." src="/kekstagram-preview.png"></p>

### Directory structure

    ├── js
    │   ├── posts                      # viewing photos on the website
    │       ├── data.js                  # uploading posts from the server
    │       ├── filter.js                # posts filtering
    │       ├── modal.js                 # full-size photo viewing mode
    │       └── thumbnails.js            # displaying uploaded posts as photo thumbnails
    │   ├── server
    │       └── api.js
    │   ├── upload                     # uploading a new photo and filling in information about it
    │       ├── effect.js                # applying an effect to a photo
    │       ├── form.js                  # sending form data to the server
    │       ├── scale.js                 # photo scaling
    │       └── validate.js              # validation of post's hashtags and comment
    │   ├── utils
    │       ├── alerts.js
    │       └── utils.js
    │   ├── main.js
    └── index.html

### Modules

```javascript
// js/main.js

import {initPosts} from './posts/data.js';
import {initFormAction} from './upload/form.js';

initPosts();
initFormAction();
```
<p align="center"><img width="869" alt="Modules scheme." src="/modules.png"></p>
