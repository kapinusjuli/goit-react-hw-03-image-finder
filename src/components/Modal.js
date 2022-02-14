// skip the JS file and use basicLightbox as a module:

// const basicLightbox = require('basiclightbox')
// import * as basicLightbox from 'basiclightbox''

// https://github.com/electerious/basicLightbox#requirements

//_____пример
import * as basicLightbox from "basiclightbox";

const instance = basicLightbox.create(`
    <div class="modal">
        <p>
            Your first lightbox with just a few lines of code.
            Yes, it's really that simple.
        </p>
    </div>
`);

instance.show();

//------------задание
<div class="overlay">
  <div class="modal">
    <img src="" alt="" />
  </div>
</div>;
