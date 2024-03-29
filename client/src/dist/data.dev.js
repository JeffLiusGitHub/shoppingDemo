"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usefulLinkList = exports.announcement = exports.shippingInfo = exports.allData = exports.popularProducts = exports.categories = exports.sliderItems = void 0;
var sliderItems = [{
  id: 1,
  img: 'https://i.pinimg.com/564x/9f/78/60/9f78609be18f29582d455c5f15b4a14f.jpg',
  title: 'SUMMER SALE',
  desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
  bg: 'f5fafd'
}, {
  id: 2,
  img: 'https://i.pinimg.com/564x/a6/1d/b3/a61db3325274970ec81861dfbb9c6b05.jpg',
  title: 'AUTUMN COLLECTION',
  desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
  bg: 'fcf1ed'
}, {
  id: 3,
  img: 'https://img1.theiconic.com.au/gr-cQvIkoXVJG4in_6QOU8kLCXs=/fit-in/406x512/filters:fill(ffffff):quality(90):format(webp)/http%3A%2F%2Fstatic.theiconic.com.au%2Fp%2Ffaithfull-9344-9353251-1.jpg',
  title: 'LOUNGEWEAR LOVE',
  desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
  bg: 'DFDFDF'
}];
exports.sliderItems = sliderItems;
var categories = [{
  id: 1,
  img: '//cdn.shopify.com/s/files/1/2994/5194/files/RT_SRE_2022-02-10_BecBridge_27_1618.jpg?v=1655856511',
  title: 'FEMALE',
  cat: 'female'
}, {
  id: 2,
  img: '//cdn.shopify.com/s/files/1/2994/5194/files/SRE_2022-02-10_BecBridge_39_2135.jpg?v=1652684393',
  title: 'JACKET',
  cat: 'Jacket'
}, {
  id: 3,
  img: '//cdn.shopify.com/s/files/1/2994/5194/files/SRE_2022-02-10_BecBridge_09_0767.jpg?v=1655856739',
  title: 'MALE',
  cat: 'male'
}];
exports.categories = categories;
var popularProducts = [{
  id: 1,
  img: 'https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png'
}, {
  id: 2,
  img: 'https://cdn.shopify.com/s/files/1/0101/4832/products/Angela_Natural_Tee.png?v=1606780388'
}, {
  id: 3,
  img: 'https://www.prada.com/content/dam/pradanux_products/U/UCS/UCS319/1YOTF010O/UCS319_1YOT_F010O_S_182_SLF.png'
}, {
  id: 4,
  img: 'https://www.burdastyle.com/pub/media/catalog/product/cache/7bd3727382ce0a860b68816435d76e26/107/BUS-PAT-BURTE-1320516/1170x1470_BS_2016_05_132_front.png'
}, {
  id: 5,
  img: 'https://images.ctfassets.net/5gvckmvm9289/3BlDoZxSSjqAvv1jBJP7TH/65f9a95484117730ace42abf64e89572/Noissue-x-Creatsy-Tote-Bag-Mockup-Bundle-_4_-2.png'
}, {
  id: 6,
  img: 'https://d3o2e4jr3mxnm3.cloudfront.net/Rocket-Vintage-Chill-Cap_66374_1_lg.png'
}, {
  id: 7,
  img: 'https://www.pngmart.com/files/16/Black-Leather-Jacket-PNG-Photos.png'
}, {
  id: 8,
  img: 'https://www.pngarts.com/files/3/Women-Jacket-PNG-High-Quality-Image.png'
}]; // const shopProduct = [
// 	{
// 		_id: { $oid: '621609e17f69bb94295260f9' },
// 		title: 'clothes',
// 		description: 'clothes',
// 		img: 'https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png',
// 		categories: ['clothes', 'male'],
// 		size: ['S', 'M', 'L'],
// 		color: ['white'],
// 		price: { $numberInt: '20' },
// 		inStock: true,
// 		createdAt: { $date: { $numberLong: '1645611489526' } },
// 		updatedAt: { $date: { $numberLong: '1645611489526' } },
// 		__v: { $numberInt: '0' },
// 	},
// 	{
// 		_id: { $oid: '62160a3b7f69bb94295260fc' },
// 		title: 'clothes with head',
// 		description: 'clothes with head',
// 		img: 'https://img.ltwebstatic.com/images3_pi/2021/07/26/1627274477441d3763ce158b943f2ab54ad5ea4714_thumbnail_900x.webp',
// 		categories: ['clothes', 'female'],
// 		size: ['S', 'M', 'L', 'XS'],
// 		color: ['white'],
// 		price: { $numberInt: '40' },
// 		inStock: true,
// 		createdAt: { $date: { $numberLong: '1645611579249' } },
// 		updatedAt: { $date: { $numberLong: '1645611579249' } },
// 		__v: { $numberInt: '0' },
// 	},
// 	{
// 		_id: { $oid: '62160a897f69bb9429526100' },
// 		title: 'clothes PARADA',
// 		description: 'clothes PARADA',
// 		img: 'https://www.prada.com/content/dam/pradanux_products/U/UCS/UCS319/1YOTF010O/UCS319_1YOT_F010O_S_182_SLF.png',
// 		categories: ['clothes', 'male'],
// 		size: ['M', 'L', 'XS'],
// 		color: ['Red'],
// 		price: { $numberInt: '140' },
// 		inStock: true,
// 		createdAt: { $date: { $numberLong: '1645611657527' } },
// 		updatedAt: { $date: { $numberLong: '1645611657527' } },
// 		__v: { $numberInt: '0' },
// 	},
// 	{
// 		_id: { $oid: '62160c957f69bb9429526108' },
// 		title: 'Green Dress',
// 		description: 'Green Dress',
// 		img: 'https://www.burdastyle.com/pub/media/catalog/product/cache/7bd3727382ce0a860b68816435d76e26/107/BUS-PAT-BURTE-1320516/1170x1470_BS_2016_05_132_front.png',
// 		categories: ['dress', 'female'],
// 		size: ['S', 'M', 'L', 'XS'],
// 		color: ['Green'],
// 		price: { $numberInt: '100' },
// 		inStock: true,
// 		createdAt: { $date: { $numberLong: '1645612181064' } },
// 		updatedAt: { $date: { $numberLong: '1645612181064' } },
// 		__v: { $numberInt: '0' },
// 	},
// 	{
// 		_id: { $oid: '62160cd67f69bb942952610a' },
// 		title: 'Green Bag',
// 		description: 'Green Bag',
// 		img: 'https://images.ctfassets.net/5gvckmvm9289/3BlDoZxSSjqAvv1jBJP7TH/65f9a95484117730ace42abf64e89572/Noissue-x-Creatsy-Tote-Bag-Mockup-Bundle-_4_-2.png',
// 		categories: ['bag', 'female', 'male'],
// 		size: ['M', 'L'],
// 		color: ['Green'],
// 		price: { $numberInt: '30' },
// 		inStock: true,
// 		createdAt: { $date: { $numberLong: '1645612246428' } },
// 		updatedAt: { $date: { $numberLong: '1645612246428' } },
// 		__v: { $numberInt: '0' },
// 	},
// 	{
// 		_id: { $oid: '62160d237f69bb942952610c' },
// 		title: 'Black Cap',
// 		description: 'Black Cap',
// 		img: 'https://d3o2e4jr3mxnm3.cloudfront.net/Rocket-Vintage-Chill-Cap_66374_1_lg.png',
// 		categories: ['cap', 'female', 'male'],
// 		size: ['M', 'L'],
// 		color: ['Black', 'Yellow'],
// 		price: { $numberInt: '50' },
// 		inStock: true,
// 		createdAt: { $date: { $numberLong: '1645612323612' } },
// 		updatedAt: { $date: { $numberLong: '1645612323612' } },
// 		__v: { $numberInt: '0' },
// 	},
// 	{
// 		_id: { $oid: '62160dca7f69bb942952610f' },
// 		title: 'Black Jacket',
// 		description: 'Black Jacket',
// 		img: 'https://www.pngmart.com/files/16/Black-Leather-Jacket-PNG-Photos.png',
// 		categories: ['Jacket', 'male'],
// 		size: ['S', 'M', 'L'],
// 		color: ['Black'],
// 		price: { $numberInt: '250' },
// 		inStock: true,
// 		createdAt: { $date: { $numberLong: '1645612490378' } },
// 		updatedAt: { $date: { $numberLong: '1645612490378' } },
// 		__v: { $numberInt: '0' },
// 	},
// 	{
// 		_id: { $oid: '62160e087f69bb9429526111' },
// 		title: 'Yellow Jacket',
// 		description: 'Yellow Jacket',
// 		img: 'https://www.pngarts.com/files/3/Women-Jacket-PNG-High-Quality-Image.png',
// 		categories: ['Jacket', 'female'],
// 		size: ['S', 'M', 'L'],
// 		color: ['Yellow'],
// 		price: { $numberInt: '350' },
// 		inStock: true,
// 		createdAt: { $date: { $numberLong: '1645612552779' } },
// 		updatedAt: { $date: { $numberLong: '1645612552779' } },
// 		__v: { $numberInt: '0' },
// 	},
// ];

exports.popularProducts = popularProducts;
var allData = [{
  _id: '621609e17f69bb94295260f9',
  title: 'clothes',
  description: 'clothes',
  img: 'https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png',
  categories: ['clothes', 'male'],
  size: ['S', 'M', 'L'],
  color: ['white'],
  price: 20,
  inStock: true,
  createdAt: '2022-02-23T10:18:09.526Z',
  updatedAt: '2022-02-23T10:18:09.526Z',
  __v: 0
}, {
  _id: '62160a3b7f69bb94295260fc',
  title: 'white clothes',
  description: 'white clothes',
  img: 'https://www.prada.com/content/dam/pradabkg_products/P/P3H/P3H11/1XV2F0009/P3H11_1XV2_F0009_S_221_SLF.jpg/jcr:content/renditions/cq5dam.web.hebebed.1500.1500.crop.jpg',
  categories: ['clothes', 'female'],
  size: ['S', 'M', 'L', 'XS'],
  color: ['white'],
  price: 40,
  inStock: true,
  createdAt: '2022-02-23T10:19:39.249Z',
  updatedAt: '2022-02-23T10:19:39.249Z',
  __v: 0
}, {
  _id: '62160a897f69bb9429526100',
  title: 'clothes PARADA',
  description: 'clothes PARADA',
  img: 'https://www.prada.com/content/dam/pradanux_products/U/UCS/UCS319/1YOTF010O/UCS319_1YOT_F010O_S_182_SLF.png',
  categories: ['clothes', 'male'],
  size: ['M', 'L', 'XS'],
  color: ['Red'],
  price: 140,
  inStock: true,
  createdAt: '2022-02-23T10:20:57.527Z',
  updatedAt: '2022-02-23T10:20:57.527Z',
  __v: 0
}, {
  _id: '62160c957f69bb9429526108',
  title: 'Green Dress',
  description: 'Green Dress',
  img: 'https://www.burdastyle.com/pub/media/catalog/product/cache/7bd3727382ce0a860b68816435d76e26/107/BUS-PAT-BURTE-1320516/1170x1470_BS_2016_05_132_front.png',
  categories: ['dress', 'female'],
  size: ['S', 'M', 'L', 'XS'],
  color: ['Green'],
  price: 100,
  inStock: true,
  createdAt: '2022-02-23T10:29:41.064Z',
  updatedAt: '2022-02-23T10:29:41.064Z',
  __v: 0
}, {
  _id: '62160cd67f69bb942952610a',
  title: 'Green Bag',
  description: 'Green Bag',
  img: 'https://images.ctfassets.net/5gvckmvm9289/3BlDoZxSSjqAvv1jBJP7TH/65f9a95484117730ace42abf64e89572/Noissue-x-Creatsy-Tote-Bag-Mockup-Bundle-_4_-2.png',
  categories: ['bag', 'female', 'male'],
  size: ['M', 'L'],
  color: ['Green'],
  price: 30,
  inStock: true,
  createdAt: '2022-02-23T10:30:46.428Z',
  updatedAt: '2022-02-23T10:30:46.428Z',
  __v: 0
}, {
  _id: '62160d237f69bb942952610c',
  title: 'Black Cap',
  description: 'Black Cap',
  img: 'https://d3o2e4jr3mxnm3.cloudfront.net/Rocket-Vintage-Chill-Cap_66374_1_lg.png',
  categories: ['cap', 'female', 'male'],
  size: ['M', 'L'],
  color: ['Black', 'Yellow'],
  price: 50,
  inStock: true,
  createdAt: '2022-02-23T10:32:03.612Z',
  updatedAt: '2022-02-23T10:32:03.612Z',
  __v: 0
}, {
  _id: '62160dca7f69bb942952610f',
  title: 'Black Jacket',
  description: 'Black Jacket',
  img: 'https://www.pngmart.com/files/16/Black-Leather-Jacket-PNG-Photos.png',
  categories: ['Jacket', 'male'],
  size: ['S', 'M', 'L'],
  color: ['Black'],
  price: 250,
  inStock: true,
  createdAt: '2022-02-23T10:34:50.378Z',
  updatedAt: '2022-02-23T10:34:50.378Z',
  __v: 0
}, {
  _id: '62160e087f69bb9429526111',
  title: 'Yellow Jacket',
  description: 'Yellow Jacket',
  img: 'https://www.pngarts.com/files/3/Women-Jacket-PNG-High-Quality-Image.png',
  categories: ['Jacket', 'female'],
  size: ['S', 'M', 'L'],
  color: ['Yellow'],
  price: 350,
  inStock: true,
  createdAt: '2022-02-23T10:35:52.779Z',
  updatedAt: '2022-02-23T10:35:52.779Z',
  __v: 0
}];
exports.allData = allData;
var shippingInfo = [{
  title: 'FREE SHIPPING, RETURNS & REFUNDS',
  content: 'Free standard shipping to Australia on orders over $50 or you can choose express shipping for $3.95 AUD on orders over $100 AUD. If you’re not happy with your purchase for any reason you can return your items to us within 30 days of placing your order.'
}, {
  title: 'NEED HELP?',
  content: 'For information about products and online orders, please visit the FAQ section or contact our Client Service. You can also get help by filling out the form in the Contact Us section. Call us at +61 405502802'
}];
exports.shippingInfo = shippingInfo;
var announcement = ['Enjoy complimentary shipping on all orders + free shipping (contacts orders $99+). Code: FRESH12 (see terms)', 'this page cannot do the function due to the backend shut down', 'please do not type your real card information for testing '];
exports.announcement = announcement;
var usefulLinkList = ['Home', 'Cart', 'Man Fashion', 'Woman Fashion', 'Accessories', 'My Account', 'Order Tracking', 'Wishlist', 'Terms'];
exports.usefulLinkList = usefulLinkList;