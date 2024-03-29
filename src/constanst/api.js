const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
// const PRODUCTS_URL = "https://mitienda-enzo.onrender.com/api/products";
// const PRODUCTS_IMG_URL = "https://mitienda-enzo.onrender.com/public";

const PRODUCTS_URL = `${BACKEND_URL}/api/products`;
const PRODUCTS_IMG_URL = `${BACKEND_URL}/public/images`;
const IMAGE_DEFAULT_NAME = "default.jpg";
const MAILER_URL = `${BACKEND_URL}/api/send-mail`;

export {
    BACKEND_URL,
    PRODUCTS_URL,
    PRODUCTS_IMG_URL,
    IMAGE_DEFAULT_NAME,
    MAILER_URL,
};