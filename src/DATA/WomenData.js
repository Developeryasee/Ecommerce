const CategoryData = [{
    categoryName: "Dresses",
    image: "https://img.ltwebstatic.com/images3_pi/2023/02/13/1676253921ad7f5b37bf6569b20501d95235c3f4e4_thumbnail_900x.webp"
},
{
    categoryName: "Tops",
    image: "https://img.ltwebstatic.com/images3_pi/2021/04/08/16178463201a77b79393f2c00b16507f459a07438a_thumbnail_405x552.webp"
},
{
    categoryName: "Jumpsuit",
    image: "https://img.ltwebstatic.com/images3_pi/2023/01/23/16744825306c7749470b421745d81d730220737752_thumbnail_900x.webp"
},
{
    categoryName: "Beachwear",
    image: "https://img.ltwebstatic.com/images3_pi/2023/01/03/1672722463220c99de708dc497bc04eac8101a53d4_thumbnail_405x552.webp"
},
{
    categoryName: "Bottom",
    image: "https://img.ltwebstatic.com/images3_pi/2022/04/13/1649830840fe069cc7a2082bea23c1e84aafa4b09a_thumbnail_900x.webp"
},
{
    categoryName: "Lingerie",
    image: "https://img.ltwebstatic.com/images3_pi/2022/07/22/1658452677f827555ee7c43d41faa173dd94c75d0c_thumbnail_900x.webp"
},
]
const FlashSalesData =
    [{
        id: 1,
        price: 20,
        oldprice: 25,
        TotalSold: "20%",
        name: 'Ditsy Floral Print Butterfly Sleeve Ruffle Hem Dress',
        image: "https://img.ltwebstatic.com/images3_pi/2023/01/14/16736803319ff30851f441aecff5bf29e757daac06_thumbnail_900x.webp"
    },
    {
        id: 2,
        price: 25,
        oldprice: 30,
        TotalSold: "50%",
        name: 'AMZAA EZwear Scoop Neck Asymmetrical Hem Crop Tee',
        image: "https://img.ltwebstatic.com/images3_pi/2023/02/09/16759125148ca00e6a6c08f439ac8c7ce24e5a8c4e_thumbnail_900x.webp"
    },
    {
        id: 3,
        price: 30,
        oldprice: 35,
        TotalSold: "40%",
        name: 'Jacquard Ruffle Hem Cami Dress',
        image: "https://img.ltwebstatic.com/images3_pi/2023/01/06/1673000936d5d546c2d5c8f562847e7d919b481fbb_thumbnail_900x.webp"
    },
    {
        id: 4,
        price: 35,
        oldprice: 40,
        TotalSold: "30%",
        name: 'Ditsy Floral Print Puff Sleeve Knot Side Wrap Dress',
        image: "https://img.ltwebstatic.com/images3_pi/2023/02/13/1676257218d66ae04001d05cd1c3c7e0dab9cc410e_thumbnail_900x.webp"
    },
    {
        id: 5,
        price: 45,
        oldprice: 50,
        TotalSold: "20%",
        name: 'AMZAA PETITE Ditsy Floral Frill Trim Cami Dress',
        image: "https://img.ltwebstatic.com/images3_pi/2023/01/13/167359142197f2caea005c030309010405775f2e57_thumbnail_900x.webp"
    },
    ]

const subCategory = [
    {
        id: 1,
        name: 'NEW IN'
    },
    {
        id: 2,
        name: '#AMZAAss23'
    },
    {
        id: 3,
        name: 'SALE'
    },
    {
        id: 4,
        name: 'CLOTHING'
    },
    {
        id: 6,
        name: 'DRESSES'
    },
    {
        id: 7,
        name: 'TOPS'
    },
    {
        id: 8,
        name: 'BEACHWEAR'
    }, {
        id: 9,
        name: 'LINGERIE & LOUNGE'
    }, {
        id: 10,
        name: 'ACTIVEWEAR'
    }, {
        id: 11,
        name: 'SHOES & ACCESSORIES'
    },
    {
        id: 12,
        name: 'BRANDS'
    },
    {
        id: 13,
        name: 'EXPLORE'
    },

]
const carouselImages = [
    { url: 'https://img.ltwebstatic.com/images3_ach/2023/03/06/16780687085c89751cc55af3b27d774aa17faefa49.gif' },
    { url: 'https://img.ltwebstatic.com/images3_ach/2023/03/10/16784495987d725c227f083652880755696ee6f60b_thumbnail_1920x.webp' },
    { url: 'https://img.ltwebstatic.com/images3_ach/2023/03/06/167807366404fdab00d5a296f4ce2bda030af3c20c_thumbnail_1920x.webp' },
    { url: 'https://img.ltwebstatic.com/images3_ach/2023/03/10/1678449357f6d2ff52985578bcdfd33932d3cae4e1_thumbnail_1920x.webp' },
];
const BrandData=[
    {
        id:1,
        image:'https://img.ltwebstatic.com/images3_ach/2023/03/17/1679044225d7a8d38caa75f43b03cfa1b694ac9de2.gif'
    },
    {
        id:2,
        image:'https://img.ltwebstatic.com/images3_ach/2023/03/17/16790442533ee23a3c21a78478e784dcd547dfa293.gif'
    },
    {
        id:3,
        image:'https://img.ltwebstatic.com/images3_ach/2023/03/10/1678443107794a12d38ec279ec3f662e2df176e46d.gif'
    },
    {
        id:4,
        image:'https://img.ltwebstatic.com/images3_ach/2023/03/10/1678449212e997d4749198a9cb2e50e7e98bfba664_thumbnail_500x.webp'
    },
    {
        id:5,
        image:'https://img.ltwebstatic.com/images3_ach/2023/03/17/1679036849f027470ba40f24289a9abc962d96955d.gif'
    }
];
const Gallery=[
    {
        id:1,
        image:'https://img.ltwebstatic.com/images3_app/2023/02/14/1676338504178bfb097475242ac2af2e4ac4302695_thumbnail_810x.webp'
    },
    {
        id:2,
        image:'https://img.ltwebstatic.com/images3_app/2023/02/14/1676338582e849c6844050ddb91db7dd802cf009a7_thumbnail_810x.webp'
    },
    {
        id:3,
        image:'https://img.ltwebstatic.com/images3_pi/2022/09/17/1663383468cc2ffd4379c2ae4edf06fcacec662a5e_thumbnail_810x.webp'
    },
]

export { CategoryData, FlashSalesData, subCategory, carouselImages,BrandData,Gallery}