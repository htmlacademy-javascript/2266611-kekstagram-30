# Kekstagram

Simple Instagram-like app, where users have the option to upload their photos after pre-editing and applying filters and can view photos of other users, mark them as liked and comment on them

<p align="center"><img width="869" alt="Browser Mockup." src="/kekstagram-preview.png"></p>

### Directory structure

    ├── js
    │   ├── posts                      # viewing photos on the website
    │   │   ├── data.js                  # uploading posts from the server
    │   │   ├── filter.js                # posts filtering
    │   │   ├── modal.js                 # full-size photo viewing mode
    │   │   └── thumbnails.js            # displaying uploaded posts as photo thumbnails
    │   ├── server
    │   │   └── api.js
    │   ├── upload                     # uploading a new photo and filling in information about it
    │   │   ├── effect.js                # applying an effect to a photo
    │   │   ├── form.js                  # sending form data to the server
    │   │   ├── scale.js                 # photo scaling
    │   │   └── validate.js              # validation of post's hashtags and comment
    │   ├── utils
    │   │   ├── alerts.js
    │   │   └── utils.js
    │   └── main.js
    └── index.html

### Modules

```javascript
// js/main.js

import {initPosts} from './posts/data.js';
import {initFormAction} from './upload/form.js';

initPosts();
initFormAction();
```
<p align="center"><img width="600" alt="Modules scheme." src="/modules.png"></p>

### Technologies

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

- DOM Manipulation: create, change and remove elements from a web document
- Event handling: event phases and delegation, keyboard accessibility
- Integrating external APIs, third-party libraries
- Interacting with a server: HTTP requests and responses
- Array Manipulation: sorting and filtering
