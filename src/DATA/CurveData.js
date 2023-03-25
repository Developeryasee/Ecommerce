const CategoryData = [{
    categoryName: "Dresses",
    image: "https://img.ltwebstatic.com/images3_pi/2023/01/10/1673337866f38520e835f2caa9cfaec58e60e0ab3b_thumbnail_900x.webp"
},
{
    categoryName: "Tops",
    image: "https://img.ltwebstatic.com/images3_pi/2022/12/26/1672032574250b96010ae0bc68672858db87b7fa8d_thumbnail_900x.webp"
},
{
    categoryName: "Beachwear",
    image: "https://img.ltwebstatic.com/images3_pi/2022/12/07/1670376608ed6423aec08565e8c32fb8b1fca1f3a4_thumbnail_900x.webp"
},
{
    categoryName: "Two-pieces",
    image: "https://img.ltwebstatic.com/images3_pi/2023/01/15/1673764226236728b3f6810b679c89e2f04608ce22_thumbnail_900x.webp"
},
{
    categoryName: "Bottom",
    image: "https://img.ltwebstatic.com/images3_pi/2021/07/15/1626330833f4066360bff68a3868c365250930f7d8_thumbnail_900x.webp"
},
{
    categoryName: "Lingerie",
    image: "https://img.ltwebstatic.com/images3_pi/2022/12/26/16720186063b7c7cef59954f1eddcfcf5d40a41711_thumbnail_900x.webp"
},
]
const FlashSalesData =
    [{
        id: 1,
        price: 25,
        oldprice: 30,
        TotalSold: "70%",
        name: 'Plus Floral Embroidery Mesh Cut Out Frill Trim Teddy Bodysuit',
        image: "https://img.ltwebstatic.com/images3_pi/2022/12/15/16710667486186d23a905d9a3a077932d84ebc5062_thumbnail_900x.webp"
    },
    {
        id: 2,
        price: 30,
        oldprice: 35,
        TotalSold: "65%",
        name: 'AMZAA SXY Plus Tie Dye Off Shoulder Knot Front Dress',
        image: "https://img.ltwebstatic.com/images3_pi/2022/12/14/16710068592e70000fda120553788a548edf2cb25e_thumbnail_900x.webp"
    },
    {
        id: 3,
        price: 30,
        oldprice: 35,
        TotalSold: "40%",
        name: 'Plus Floral Print Frill Trim Tube Top',
        image: "https://img.ltwebstatic.com/images3_pi/2023/02/27/1677472535132479f8050c5b4544f6ac9af6aa362c_thumbnail_900x.webp"
    },
    {
        id: 4,
        price: 40,
        oldprice: 45,
        TotalSold: "80%",
        name: 'Plus Solid Shirred Waist Ruffle Hem Dress',
        image: "https://img.ltwebstatic.com/images3_pi/2021/10/08/163367167237d1349eea5496f6577bae6c71474133_thumbnail_900x.webp"
    },
    {
        id: 5,
        price: 50,
        oldprice: 55,
        TotalSold: "70%",
        name: 'Plus Tie Dye Print Cami Dress',
        image: "https://img.ltwebstatic.com/images3_pi/2023/02/06/16756475037bcd58ac7960179894d4c93f53bd4a5e_thumbnail_900x.webp"
    },
    ]

const subCategory = [
    {
        id: 1,
        name: 'NEW IN'
    },
    {
        id: 2,
        name: 'TRENDS'
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
        name: 'BOTTOMS'
    }, {
        id: 9,
        name: 'BEACHWEAR'
    }, {
        id: 10,
        name: 'LINGERIE & LOUNGE'
    }, {
        id: 11,
        name: 'ACTIVE WEAR'
    },
    {
        id: 12,
        name: 'SHOES & BAGS'
    },
]
const carouselImages = [
    { url: 'https://img.ltwebstatic.com/images3_ach/2023/03/17/1679043607f98d7300f910febef0d029cd1dc95ed4_thumbnail_1920x.webp' },
    { url: 'https://img.ltwebstatic.com/images3_ach/2023/03/17/16790436128ba997e2028d4a02996ace16646cab05_thumbnail_1920x.webp' },
    { url: 'https://img.ltwebstatic.com/images3_ach/2023/03/10/16784495987d725c227f083652880755696ee6f60b_thumbnail_1920x.webp' },
];
const BrandData = [
    {
        id: 1,
        image: 'https://img.ltwebstatic.com/images3_ach/2023/02/02/16753024543f310c4b60dd30af385ba6762f4c69c0_thumbnail_500x.webp'
    },
    {
        id: 2,
        image: 'https://img.ltwebstatic.com/images3_ach/2023/03/12/16786156253ce6b5db2f4063a96a630d2cbde79380.gif'
    },
    {
        id: 3,
        image: 'https://img.ltwebstatic.com/images3_ach/2023/03/12/1678615649e09f80ee5b08283a9ecf50b8ac1108d7_thumbnail_500x.webp'
    },
    {
        id: 4,
        image: 'https://img.ltwebstatic.com/images3_ach/2023/01/14/1673668110333ebf8836b01f9b9ef35d32ec75c167.gif'
    },
    {
        id: 5,
        image: 'https://img.ltwebstatic.com/images3_ach/2023/03/06/167808291115194086b6072e5ef2807b56eb0c2cf7.gif'
    }
];
const Gallery = [
    {
        id: 1,
        image: 'https://img.ltwebstatic.com/images3_pi/2023/03/14/167878483736ac7e28c2f7d44a3659fe491193b3c7.jpg'
    },
    {
        id: 2,
        image: 'https://img.ltwebstatic.com/images3_pi/2022/12/15/1671097782ec26740d4b7718baf09e92eb7dd0b79e.jpg'
    },
    {
        id: 3,
        image: 'https://img.ltwebstatic.com/images3_pi/2022/07/19/16582162579cc571b6f0a03a1cfda6525e0fc0a03e.jpg'
    },
    {
        id: 4,
        image: 'https://img.ltwebstatic.com/images3_pi/2020/02/26/1582695938980b15ee106e2eb4fbe55e256b9aa9a8.jpg'
    }
]

export {CategoryData,FlashSalesData,subCategory,carouselImages,BrandData,Gallery}