import Kitchen from '../Assets/Svg/kitchen.svg'
import Bed from '../Assets/Svg/bed.svg'
import Dining from '../Assets/Svg/dining.svg'
import Lamp from '../Assets/Svg/lamp.svg'
import Art from '../Assets/Svg/art.svg'
import Storage from '../Assets/Svg/storage.svg'
import Stationery from '../Assets/Svg/stationery.svg'
import Bath from '../Assets/Svg/bath.svg'
import Pet from '../Assets/Svg/pet.svg'
const CategoryData = [{
    categoryName: "Bed",
    image: <Bed />
}, {
    categoryName: "Kitchen",
    image: <Kitchen />
},
{
    categoryName: "Dining",
    image: <Dining />
},
{
    categoryName: "Light",
    image: <Lamp />
},
{
    categoryName: "Art",
    image: <Art />
},
{
    categoryName: "Storage",
    image: <Storage />
},
{
    categoryName: "Pen",
    image: <Stationery />
},
{
    categoryName: "Bath",
    image: <Bath />
},
{
    categoryName: "Pet",
    image: <Pet />
},
]
const FlashSalesData =
    [{
        id: 1,
        price: 10,
        oldprice: 15,
        TotalSold: "20%",
        name: '2pcs Refrigerator Storage',
        image: "https://img.ltwebstatic.com/images3_pi/2022/12/16/167117186883755c626e78c371fc9b26f2447ecc27_thumbnail_900x.webp"
    },
    {
        id: 2,
        price: 20,
        oldprice: 25,
        TotalSold: "50%",
        name: 'BASIC LIVING Exclusive Folding Storage Crate',
        image: "https://img.ltwebstatic.com/images3_pi/2022/05/25/1653477887246c77d508e8b5ef810105a88b74c1ad_thumbnail_900x.webp"
    },
    {
        id: 3,
        price: 35,
        oldprice: 40,
        TotalSold: "40%",
        name: '1pc Striped Pattern Lunch Bag,Trumpet Striped Pattern Lunch Bag',
        image: "https://img.ltwebstatic.com/images3_pi/2020/08/07/15967671887fa387e4ca5eb2be71fb0e4871bc1745_thumbnail_900x.webp"
    },
    {
        id: 4,
        price: 45,
        oldprice: 50,
        TotalSold: "30%",
        name: 'BASIC LIVING 1pc Stackable Desk Drawer Organizer Tray Dividers For Bathroom Vanity Kitchen Office',
        image: "https://img.ltwebstatic.com/images3_pi/2022/07/07/16571769769a9945408aaa4310ddc3a130285efa12_thumbnail_900x.webp"
    },
    {
        id: 5,
        price: 50,
        oldprice: 45,
        TotalSold: "20%",
        name: 'ROMWE Fairycore Butterfly & Letter Graphic Eye Cover',
        image: "https://img.ltwebstatic.com/images3_pi/2023/02/27/1677464235c9a4b63d6cb881373e1b21d8b085a37c.webp"
    },
    ]

const subCategory = [
    {
        id: 1,
        name: 'NEW IN'
    },
    {
        id: 2,
        name: 'HOME TEXTILE'
    },
    {
        id: 3,
        name: 'KITCHEN & DINING'
    },
    {
        id: 4,
        name: 'STORAGE & ORGANIZATION'
    },
    {
        id: 6,
        name: 'EVENT & PARTY SUPPLIES'
    },
    {
        id: 7,
        name: 'HOME DECOR'
    },
    {
        id: 8,
        name: 'BATHROOM CLEANING'
    }, {
        id: 9,
        name: 'OUTDOOR & GARDEN'
    }, {
        id: 10,
        name: 'PET SUPPLIES'
    }, {
        id: 11,
        name: 'OFFICE & SCHOOL SUPPLIES'
    },

]
const carouselImages = [
    { url: 'https://img.ltwebstatic.com/images3_ccc/2023/03/22/1679477225348cd68181f8a79dc7564882d342db1d_thumbnail_1920x.jpg' },
    { url: 'https://img.ltwebstatic.com/images3_ccc/2023/03/24/1679625253caabe46d09e7417f151e949ad6b3d58d_thumbnail_1920x.jpg' },
    { url: 'https://i.ibb.co/GV08J9f/pexels-pixabay-267202.jpg' },
    { url: 'https://i.ibb.co/sK92ZhC/pexels-karolina-grabowska-4210860.jpg' },
];

export { CategoryData, FlashSalesData, subCategory, carouselImages }