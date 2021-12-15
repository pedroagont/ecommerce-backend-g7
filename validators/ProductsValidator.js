// Paquete Celebrate middleware/intermediario para validar las peticiones: https://www.npmjs.com/package/celebrate
// Paquete Joi validación del schema (propiedades): https://joi.dev
const { celebrate, Joi, Segments } = require('celebrate');

const ProductsValidator = celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.number().required(),
    imgUrl: Joi.string()
      .uri()
      .empty('')
      .default(
        'https://www.sengenics.com/wp-content/uploads/2018/04/product-placeholder.jpg'
      ),
    category: Joi.string()
      .valid('men', 'women', 'kids', 'accesories')
      .required()
  })
});

module.exports = ProductsValidator;
