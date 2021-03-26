const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const AVATAR_CHOOSER = document.querySelector('.ad-form__field input[type=file]');
const AVATAR_PREVIEW = document.querySelector('.ad-form-header__preview img');

const PHOTO_CHOOSER = document.querySelector('.ad-form__upload input[type=file]');
const PHOTO_PREVIEW_WRAPPER = document.querySelector('.ad-form__photo');
const PHOTO_PREVIEW = document.createElement('img');


AVATAR_CHOOSER.addEventListener('change', () => {
  const AVATAR = AVATAR_CHOOSER.files[0];
  const AVATAR_NAME = AVATAR.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => {
    return AVATAR_NAME.endsWith(it);
  });

  if (matches) {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      AVATAR_PREVIEW.src = reader.result;
    });

    reader.readAsDataURL(AVATAR);

  }
})

PHOTO_CHOOSER.addEventListener('change', () =>  {
  const PHOTO = PHOTO_CHOOSER.files[0];
  const PHOTO_NAME = PHOTO.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => {
    return PHOTO_NAME.endsWith(it);
  });

  if (matches) {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      PHOTO_PREVIEW.src = reader.result;
      PHOTO_PREVIEW.width = 70;
      PHOTO_PREVIEW.height = 70;

      PHOTO_PREVIEW_WRAPPER.appendChild(PHOTO_PREVIEW);
    });

    reader.readAsDataURL(PHOTO);

  }
})

