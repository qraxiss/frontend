import { Accessories, Refill, Home, Clothes, Earn } from '../Components/Images/Icons'

export const items = [
    {
        url: '/category/clothes',
        title: 'Clothes',
        items: [
            {
                title: 'Men',
                url: '/category/men',
                items: [
                    {
                        title: 'Shirts',
                        url: '/category/shirts-men'
                    },
                    {
                        title: 'Hoodies',
                        url: '/category/hoodies-men'
                    },
                    {
                        title: 'Sweatshirts',
                        url: '/category/sweatshirts-men'
                    }
                ]
            },
            {
                title: 'Woman',
                url: '/woman',
                items: [
                    {
                        title: 'Shirts',
                        url: '/category/shirts-woman'
                    },
                    {
                        title: 'Hoodies',
                        url: '/category/hoodies-woman'
                    },
                    {
                        title: 'Sweatshirts',
                        url: '/category/sweatshirts-woman'
                    }
                ]
            }
        ],
        icon: <Clothes className="page-icons" />
    },
    {
        url: '/category/accessories',
        title: 'Accessories',
        items: [
            {
                title: 'Hats',
                url: '/category/hats'
            },
            {
                title: 'Tech Accessories',
                url: '/category/tech'
            },
            {
                title: 'Bags',
                url: '/category/bags'
            }
        ],
        icon: <Accessories className="page-icons" />
    },
    {
        url: '/category/home-and-living',
        title: 'Home & Living',
        items: [
            {
                title: 'Towel',
                url: '/category/towel'
            },
            {
                title: 'Wart Art',
                url: '/category/wall-art'
            },
            {
                title: 'Drinkware & Coasters',
                url: '/category/drinkware-and-coasters'
            }
        ],
        icon: <Home className="page-icons" />
    },
    {
        url: '/category/eco-friendly',
        title: 'Eco Friendly',
        icon: <Refill className="page-icons" />
    },
    {
        url: '/earn',
        title: 'Earn',
        icon: <Earn className="page-icons" />
    }
]
