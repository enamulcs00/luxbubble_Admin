import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
    // {
    //     path: '',
    //     title: 'Personal',
    //     icon: 'mdi mdi-dots-horizontal',
    //     class: 'nav-small-cap',
    //     extralink: true,
    //     submenu: []
    // },
    {
        path: '/dashboard',
        title: 'Dashboard',
        icon: 'mdi mdi-view-dashboard',
        class: '',
        extralink: false,
        submenu: []
    },
    {
        path: '/pages/users',
        title: 'Users',
        icon: 'sl-icon-user',
        class: '',
        extralink: false,
        submenu: []
    },
    {
      path: '/pages/vendors',
      title: 'Services Providers',
      icon: 'icon-Add-UserStar',
      class: '',
      extralink: false,
      submenu: []
    },
    {
      path: '/pages/vendorcategory',
      title: 'Categories',
      icon: 'sl-icon-grid',
      class: '',
      extralink: false,
      submenu: [ ]
    },
//     {
//         path: '',
//         title: 'Vendors',
//         icon: 'icon-Car-Wheel',
//         class: 'has-arrow',
//         extralink: false,
//         submenu: [
//     {
//         path: '/pages/vendors',
//         title: 'Vendors',
//         icon: 'sl-icon-user',
//         class: '',
//         extralink: false,
//         submenu: [ ]
//     },
//     {
//         path: '/pages/vendorbusiness',
//         title: 'Business',
//         icon: 'sl-icon-user',
//         class: '',
//         extralink: false,
//         submenu: [ ]
//     },

//     {
//         path: '/pages/vendorcategory',
//         title: 'Categories',
//         icon: 'sl-icon-user',
//         class: '',
//         extralink: false,
//         submenu: [ ]
//     },
//     {
//         path: '/pages/vendororder',
//         title: 'Orders',
//         icon: 'sl-icon-user',
//         class: '',
//         extralink: false,
//         submenu: [ ]
//     },
// ]
//     },
    // {
    //     path: '',
    //     title: 'Trucks',
    //     icon: 'icon-Car-Wheel',
    //     class: 'has-arropagesw',
    //     extralink: false,
    //     submenu: [
    //         {
    //             path: '/pages/trucks',
    //             title: 'Trucks List',
    //             icon: 'mdi mdi-truck',
    //             class: '',
    //             extralink: false,
    //             submenu: []
    //         },
    //         {
    //             path: '/pages/truckscategory',
    //             title: 'Category',
    //             icon: 'mdi mdi-truck',
    //             class: '',
    //             extralink: false,
    //             submenu: []
    //         },
    //     ]
    // },
    // {
    //     path: '/pages/drivers',
    //     title: 'Drivers',
    //     icon: 'mdi mdi-truck',
    //     class: '',
    //     extralink: false,
    //     submenu: []
    // },
    // {
    //     path: '/pages/foodcategories',
    //     title: 'Food Categories',
    //     icon: 'mdi mdi-bowl',
    //     class: '',
    //     extralink: false,
    //     submenu: []
    // },
    // {
    //   path: '/pages/fooditem',
    //   title: 'Food Items',
    //   icon: 'mdi mdi-bowl',
    //   class: '',
    //   extralink: false,
    //   submenu: []
    //  },
    //  {
    //     path: '/pages/orderlist',
    //     title: 'Order List',
    //     icon: ' far fa-list-alt',
    //     class: '',
    //     extralink: false,
    //     submenu: []
    // },
    {
        path: '/pages/banner',
        title: 'Banner',
        icon: 'far fa-images',
        class: '',
        extralink: false,
        submenu: []
    },
    {
        path: '/pages/rewards',
        title: 'Coupons',
        icon: 'ti-gift',
        class: '',
        extralink: false,
        submenu: []
    },
    // {
    //     path: '/pages/Inventory',
    //     title: 'Inventory',
    //     icon: 'mdi mdi-calendar-text',
    //     class: '',
    //     extralink: false,
    //     submenu: []
    // },
     {
        path: '/pages/revenue',
        title: 'Revenue',
        icon: 'mdi mdi-chart-areaspline',
        class: '',
        extralink: false,
        submenu: []
    },
    {
        path: '/pages/reviews',
        title: 'Reviews',
        icon: 'mdi mdi-account-star-variant',
        class: '',
        extralink: false,
        submenu: []
    },
    // {
    //     path: '/pages/calculator',
    //     title: 'Calculator',
    //     icon: 'mdi mdi-calculator',
    //     class: '',
    //     extralink: false,
    //     submenu: []
    // },
    
    // {
    //     path: '/pages/promocode',
    //     title: 'Promo',
    //     icon: 'fas fa-percent',
    //     class: '',
    //     extralink: false,
    //     submenu: []
    // },
    // {
    //     path: '/pages/notification',
    //     title: 'Broadcast Notification',
    //     icon: 'sl-icon-bell',
    //     class: '',
    //     extralink: false,
    //     submenu: []
    // },
    // {
    //     path: '/pages/analytics',
    //     title: 'Analytics',
    //     icon: 'mdi mdi-chart-arc',
    //     class: '',
    //     extralink: false,
    //     submenu: []
    // },
    // {
    //     path: '/pages/support',
    //     title: 'Support',
    //     icon: 'fas fa-headphones',
    //     class: '',
    //     extralink: false,
    //     submenu: []
    // },
    // {
    //     path: '/pages/geofencelist',
    //     title: 'Geofence',
    //     icon: 'mdi mdi-google-maps',
    //     class: '',
    //     extralink: false,
    //     submenu: []
    // },
    // {
    //     path: '/pages/manage_admin',
    //     title: 'Admin',
    //     icon: 'mdi mdi-chart-arc',
    //     class: '',
    //     extralink: false,
    //     submenu: []
    // },

    // {
    //     path: '',
    //     title: 'Apps',
    //     icon: 'mdi mdi-dots-horizontal',
    //     class: 'nav-small-cap',
    //     extralink: true,
    //     submenu: []
    // },
    // {
    //     path: '/apps/email',
    //     title: 'Email',
    //     icon: 'icon-Mailbox-Empty',
    //     class: '',
    //     extralink: false,
    //     submenu: []
    // },
    // {
    //     path: '',
    //     title: 'Ticket',
    //     icon: 'icon-Ticket',
    //     class: 'has-arrow',
    //     extralink: false,
    //     submenu: [
    //         {
    //             path: '/apps/ticketlist',
    //             title: 'Ticket List',
    //             icon: '',
    //             class: '',
    //             extralink: false,
    //             submenu: []
    //         },
    //         {
    //             path: '/apps/ticketdetails',
    //             title: 'Ticket Details',
    //             icon: '',
    //             class: '',
    //             extralink: false,
    //             submenu: []
    //         }
    //     ]
    // },
    // {
    //     path: '',
    //     title: 'Extra',
    //     icon: 'icon-Sunglasses-Smiley',
    //     class: 'has-arrow',
    //     extralink: false,
    //     submenu: [
    //         {
    //             path: '/apps/chat',
    //             title: 'Chat App',
    //             icon: '',
    //             class: '',
    //             extralink: false,
    //             submenu: []
    //         },
    //         {
    //             path: '/apps/fullcalendar',
    //             title: 'Calendar',
    //             icon: '',
    //             class: '',
    //             extralink: false,
    //             submenu: []
    //         },
    //         {
    //             path: '/apps/taskboard',
    //             title: '',
    //             icon: 'mdi mdi-bulletin-board',
    //             class: '',
    //             extralink: false,
    //             submenu: []
    //         }
    //     ]
    // },
    // {
    //     path: '',
    //     title: 'UI',
    //     icon: 'mdi mdi-dots-horizontal',
    //     class: 'nav-small-cap',
    //     extralink: true,
    //     submenu: []
    // },
    // {
    //     path: '',
    //     title: 'UI Elements',
    //     icon: 'icon-Paint-Brush',
    //     class: 'has-arrow',
    //     extralink: false,
    //     submenu: [
    //         {
    //             path: '/component/accordion',
    //             title: 'Accordion',
    //             icon: '',
    //             class: '',
    //             extralink: false,
    //             submenu: []
    //         },
    //         {
    //             path: '/component/alert',
    //             title: 'Alert',
    //             icon: '',
    //             class: '',
    //             extralink: false,
    //             submenu: []
    //         },
    //         {
    //             path: '/component/carousel',
    //             title: 'Carousel',
    //             icon: '',
    //             class: '',
    //             extralink: false,
    //             submenu: []
    //         },
    //         {
    //             path: '/component/dropdown',
    //             title: 'Dropdown',
    //             icon: '',
    //             class: '',
    //             extralink: false,
    //             submenu: []
    //         },
    //         {
    //             path: '/component/modal',
    //             title: 'Modal',
    //             icon: '',
    //             class: '',
    //             extralink: false,
    //             submenu: []
    //         },
    //         {
    //             path: '/component/pagination',
    //             title: 'Pagination',
    //             icon: '',
    //             class: '',
    //             extralink: false,
    //             submenu: []
    //         },
    //         {
    //             path: '/component/poptool',
    //             title: 'Popover & Tooltip',
    //             icon: '',
    //             class: '',
    //             extralink: false,
    //             submenu: []
    //         },
    //         {
    //             path: '/component/progressbar',
    //             title: 'Progressbar',
    //             icon: '',
    //             class: '',
    //             extralink: false,
    //             submenu: []
    //         },
    //         {
    //             path: '/component/rating',
    //             title: 'Ratings',
    //             icon: '',
    //             class: '',
    //             extralink: false,
    //             submenu: []
    //         },
    //         {
    //             path: '/component/tabs',
    //             title: 'Tabs',
    //             icon: '',
    //             class: '',
    //             extralink: false,
    //             submenu: []
    //         },
    //         {
    //             path: '/component/timepicker',
    //             title: 'Timepicker',
    //             icon: '',
    //             class: '',
    //             extralink: false,
    //             submenu: []
    //         },
    //         {
    //             path: '/component/buttons',
    //             title: 'Button',
    //             icon: '',
    //             class: '',
    //             extralink: false,
    //             submenu: []
    //         },
    //         {
    //             path: '/component/notifier',
    //             title: 'Notifier',
    //             icon: 'mdi mdi-bandcamp',
    //             class: '',
    //             extralink: false,
    //             submenu: []
    //         }
    //     ]
    // },
    // {
    //     path: '',
    //     title: 'Cards',
    //     icon: 'icon-Folder-Add',
    //     class: 'has-arrow',
    //     extralink: false,
    //     submenu: [
    //         {
    //             path: '/cards/basiccards',
    //             title: 'Basic Cards',
    //             icon: '',
    //             class: '',
    //             extralink: false,
    //             submenu: []
    //         },
    //         {
    //             path: '/cards/customcards',
    //             title: 'Custom Cards',
    //             icon: '',
    //             class: '',
    //             extralink: false,
    //             submenu: []
    //         },
    //         {
    //             path: '/cards/weathercards',
    //             title: 'Weather Cards',
    //             icon: '',
    //             class: '',
    //             extralink: false,
    //             submenu: []
    //         }
    //     ]
    // },
    // {
    //     path: '',
    //     title: 'Extra Components',
    //     icon: 'icon-Idea-5',
    //     class: 'has-arrow',
    //     extralink: false,
    //     submenu: [
    //         {
    //             path: '/extra-component/toastr',
    //             title: 'Toastr',
    //             icon: '',
    //             class: '',
    //             extralink: false,
    //             submenu: []
    //         },
    //         {
    //             path: '/extra-component/editor',
    //             title: 'Editor',
    //             icon: '',
    //             class: '',
    //             extralink: false,
    //             submenu: []
    //         },
    //         {
    //             path: '/extra-component/dragndrop',
    //             title: 'Drag n Drop',
    //             icon: '',
    //             class: '',
    //             extralink: false,
    //             submenu: []
    //         }
    //     ]
    // },
    // {
    //     path: '',
    //     title: 'Widgets',
    //     icon: 'icon-Wrench',
    //     class: 'has-arrow',
    //     extralink: false,
    //     submenu: [
    //         {
    //             path: '/widgets/apps',
    //             title: 'Widget Apps',
    //             icon: '',
    //             class: '',
    //             extralink: false,
    //             submenu: []
    //         },
    //         {
    //             path: '/widgets/data',
    //             title: 'Widget Data',
    //             icon: '',
    //             class: '',
    //             extralink: false,
    //             submenu: []
    //         }
    //     ]
    // },
    // {
    //     path: '',
    //     title: 'Forms',
    //     icon: 'mdi mdi-dots-horizontal',
    //     class: 'nav-small-cap',
    //     extralink: true,
    //     submenu: []
    // },
    // {
    //     path: '',
    //     title: 'Form Elements',
    //     icon: 'icon-Receipt-4',
    //     class: 'has-arrow',
    //     extralink: false,
    //     submenu: [
    //         {
    //             path: '/forms/forminputs',
    //             title: 'Form Inputs',
    //             icon: '',
    //             class: '',
    //             extralink: false,
    //             submenu: []
    //         },
    //         {
    //             path: '/forms/inputgroups',
    //             title: 'Input Groups',
    //             icon: '',
    //             class: '',
    //             extralink: false,
    //             submenu: []
    //         },
    //         {
    //             path: '/forms/inputgrid',
    //             title: 'Input Grid',
    //             icon: '',
    //             class: '',
    //             extralink: false,
    //             submenu: []
    //         },
    //         {
    //             path: '/forms/checkboxandradio',
    //             title: 'Checkbox & Radio',
    //             icon: '',
    //             class: '',
    //             extralink: false,
    //             submenu: []
    //         },
    //         {
    //             path: '/forms/multiselect',
    //             title: 'Multiselect',
    //             icon: '',
    //             class: '',
    //             extralink: false,
    //             submenu: []
    //         }
    //     ]
    // },
    // {
    //     path: '',
    //     title: 'Form Layouts',
    //     icon: 'icon-Receipt-2',
    //     class: 'has-arrow',
    //     extralink: false,
    //     submenu: [
    //         {
    //             path: '/forms/formbasic',
    //             title: 'Basic Forms',
    //             icon: '',
    //             class: '',
    //             extralink: false,
    //             submenu: []
    //         },
    //         {
    //             path: '/forms/formhorizontal',
    //             title: 'Horizontal Forms',
    //             icon: '',
    //             class: '',
    //             extralink: false,
    //             submenu: []
    //         },
    //         {
    //             path: '/forms/formactions',
    //             title: 'Form Actions',
    //             icon: '',
    //             class: '',
    //             extralink: false,
    //             submenu: []
    //         },
    //         {
    //             path: '/forms/formrowseparator',
    //             title: 'Row Separator',
    //             icon: '',
    //             class: '',
    //             extralink: false,
    //             submenu: []
    //         },
    //         {
    //             path: '/forms/formstripedrows',
    //             title: 'Striped Rows',
    //             icon: '',
    //             class: '',
    //             extralink: false,
    //             submenu: []
    //         },
    //         {
    //             path: '/forms/formdetail',
    //             title: 'Detail Forms',
    //             icon: '',
    //             class: '',
    //             extralink: false,
    //             submenu: []
    //         }
    //     ]
    // },
    // {
    //     path: '',
    //     title: 'Form Addons',
    //     icon: 'icon-Add',
    //     class: 'has-arrow',
    //     extralink: false,
    //     submenu: [
    //         {
    //             path: '/forms/formvalidation',
    //             title: 'Form Validation',
    //             icon: '',
    //             class: '',
    //             extralink: false,
    //             submenu: []
    //         },
    //         {
    //             path: '/component/typehead',
    //             title: 'Form Typehead',
    //             icon: '',
    //             class: '',
    //             extralink: false,
    //             submenu: []
    //         },
    //         {
    //             path: '/component/datepicker',
    //             title: 'Datepicker',
    //             icon: '',
    //             class: '',
    //             extralink: false,
    //             submenu: []
    //         },
    //         {
    //             path: '/component/language-datepicker',
    //             title: 'Language Datepicker',
    //             icon: '',
    //             class: '',
    //             extralink: false,
    //             submenu: []
    //         },
    //         {
    //             path: '/forms/ngx',
    //             title: 'Form Wizard / Steps',
    //             icon: 'mdi mdi-attachment',
    //             class: '',
    //             extralink: false,
    //             submenu: []
    //         }
    //     ]
    // },
    // {
    //     path: '',
    //     title: 'Tables',
    //     icon: 'mdi mdi-dots-horizontal',
    //     class: 'nav-small-cap',
    //     extralink: true,
    //     submenu: []
    // },
    // {
    //     path: '',
    //     title: 'Bootstrap Tables',
    //     icon: 'mdi mdi-border-none',
    //     class: 'has-arrow',
    //     extralink: false,
    //     submenu: [
    //         {
    //             path: '/tables/basictables',
    //             title: 'Basic Tables',
    //             icon: '',
    //             class: '',
    //             extralink: false,
    //             submenu: []
    //         },
    //         {
    //             path: '/tables/darktables',
    //             title: 'Dark Basic Tables',
    //             icon: '',
    //             class: '',
    //             extralink: false,
    //             submenu: []
    //         },
    //         {
    //             path: '/tables/colortables',
    //             title: 'Colored Tables',
    //             icon: '',
    //             class: '',
    //             extralink: false,
    //             submenu: []
    //         },
    //         {
    //             path: '/tables/tablesizing',
    //             title: 'Table Sizing',
    //             icon: '',
    //             class: '',
    //             extralink: false,
    //             submenu: []
    //         }
    //     ]
    // },
    // {
    //     path: '/tables/datatable',
    //     title: 'Data Tables',
    //     icon: 'mdi mdi-border-vertical',
    //     class: '',
    //     extralink: false,
    //     submenu: []
    // },
    // {
    //     path: '',
    //     title: 'Charts',
    //     icon: 'mdi mdi-dots-horizontal',
    //     class: 'nav-small-cap',
    //     extralink: true,
    //     submenu: []
    // },
    // {
    //     path: '/charts/chartjs',
    //     title: 'Chart Js',
    //    icon: '',
    //      class: '',
    //       extralink: false,
    //       submenu: []
    //   },
    // {
    //     path: '',
    //     title: 'Charts',
    //     icon: 'icon-Pie-Chart',
    //     class: 'has-arrow',
    //     extralink: false,
    //     submenu: [
    //         {
    //             path: '/charts/chartjs',
    //             title: 'Chart Js',
    //             icon: '',
    //             class: '',
    //             extralink: false,
    //             submenu: []
    //         },
    //         {
    //             path: '/charts/chartistjs',
    //             title: 'Chartist Js',
    //             icon: '',
    //             class: '',
    //             extralink: false,
    //             submenu: []
    //         },
    //         {
    //             path: '/charts/ngxchart',
    //             title: 'Ngx Charts',
    //             icon: '',
    //             class: '',
    //             extralink: false,
    //             submenu: []
    //         }
    //     ]
    // },
    // {
    //     path: '',
    //     title: 'Maps',
    //     icon: 'mdi mdi-dots-horizontal',
    //     class: 'nav-small-cap',
    //     extralink: true,
    //     submenu: []
    // },
    // {
    //     path: '/maps/google',
    //     title: 'Google Maps',
    //     icon: 'icon-Location-2',
    //     class: '',
    //     extralink: false,
    //     submenu: []
    // },
    // {
    //     path: '',
    //     title: 'Pages',
    //     icon: 'mdi mdi-dots-horizontal',
    //     class: 'nav-small-cap',
    //     extralink: true,
    //     submenu: []
    // },


    // {
    //     path: '/pages/tours',
    //     title: 'Tours',
    //     icon: 'sl-icon-globe',
    //     class: '',
    //     extralink: false,
    //     submenu: []
    // },

    // {
    //     path: '/pages/destination',
    //     title: 'Destination',
    //     icon: 'sl-icon-map',
    //     class: '',
    //     extralink: false,
    //     submenu: []
    // },
    // {
    //     path: '/pages/hotels',
    //     title: 'Hotels',
    //     icon: 'mdi mdi-hospital-building',
    //     class: '',
    //     extralink: false,
    //     submenu: []
    // },

     {
        path: '',
        title: 'CMS Pages',
        icon: 'icon-Car-Wheel',
        class: 'has-arrow',
        extralink: false,
        submenu: [
            {
                            path: '/pages/about',
                            title: 'About',
                            icon: '',
                            class: '',
                            extralink: false,
                            submenu: []
            },
            {
                path: '/pages/contact',
                title: 'Contact',
                icon: '',
                class: '',
                extralink: false,
                submenu: []
        },
//         {
//             path: '/pages/faq',
//             title: 'Faq',
//             icon: '',
//             class: '',
//             extralink: false,
//             submenu: []
// },
{
    path: '/pages/privacy',
    title: 'Privacy Policy',
    icon: '',
    class: '',
    extralink: false,
    submenu: []
},
{
    path: '/pages/terms',
    title: 'Terms & Conditions',
    icon: '',
    class: '',
    extralink: false,
    submenu: []
},
        ]
    },

    // {
    //     path: '',
    //     title: 'Ecommerce Pages',
    //     icon: 'icon-Shopping-Bag',
    //     class: 'has-arrow',
    //     extralink: false,
    //     submenu: [
    //         {
    //             path: '/ecom/products',
    //             title: 'Products',
    //             icon: '',
    //             class: '',
    //             extralink: false,
    //             submenu: []
    //         },
    //         {
    //             path: '/ecom/cart',
    //             title: 'Cart',
    //             icon: '',
    //             class: '',
    //             extralink: false,
    //             submenu: []
    //         },
    //         {
    //             path: '/ecom/edit',
    //             title: 'Edit Products',
    //             icon: '',
    //             class: '',
    //             extralink: false,
    //             submenu: []
    //         },
    //         {
    //             path: '/ecom/details',
    //             title: 'Product Details',
    //             icon: '',
    //             class: '',
    //             extralink: false,
    //             submenu: []
    //         },
            // {
            //     path: '/ecom/orders',
            //     title: 'Orders',
            //     icon: '',
            //     class: '',
            //     extralink: false,
            //     submenu: []
            // },
            // {
            //     path: '/ecom/checkout',
            //     title: 'Checkout',
            //     icon: '',
            //     class: '',
            //     extralink: false,
            //     submenu: []
            // }
    //     ]
    // },
    // {
    //     path: '',
    //     title: 'Authentication',
    //     icon: 'icon-Administrator',
    //     class: 'has-arrow',
    //     extralink: false,

    //     submenu: [

    //         {
    //             path: '/authentication/login2',
    //             title: 'Login 2',
    //             icon: '',
    //             class: '',
    //             extralink: false,
    //             submenu: []
    //         },
    //         {
    //             path: '/authentication/signup',
    //             title: 'Register',
    //             icon: '',
    //             class: '',
    //             extralink: false,
    //             submenu: []
    //         },
    //         {
    //             path: '/authentication/signup2',
    //             title: 'Register 2',
    //             icon: '',
    //             class: '',
    //             extralink: false,
    //             submenu: []
    //         },
    //         {
    //             path: '/authentication/404',
    //             title: '404',
    //             icon: '',
    //             class: '',
    //             extralink: false,
    //             submenu: []
    //         },
    //         {
    //             path: '/authentication/lock',
    //             title: 'Lockscreen',
    //             icon: '',
    //             class: '',
    //             extralink: false,
    //             submenu: []
    //         }
        // ],

    //  },
    //  {
    //     path: '/login',
    //     title: 'Login',
    //     icon: '',
    //     class: '',
    //     extralink: false,
    //     submenu: []
    // }
    // {
    //     path: '',
    //     title: 'Pages',
    //     icon: 'icon-Files',
    //     class: 'has-arrow',
    //     extralink: false,
    //     submenu: [
    //         {
    //             path: '/pages/profile',
    //             title: 'Profile',
    //             icon: '',
    //             class: '',
    //             extralink: false,
    //             submenu: []
    //         },
    //         {
    //             path: '/pages/pricing',
    //             title: 'Pricing',
    //             icon: '',
    //             class: '',
    //             extralink: false,
    //             submenu: []
    //         },
    //         {
    //             path: '/pages/invoice',
    //             title: 'Invoice',
    //             icon: '',
    //             class: '',
    //             extralink: false,
    //             submenu: []
    //         },
    //         {
    //             path: '/pages/helperclasses',
    //             title: 'Helper Classes',
    //             icon: '',
    //             class: '',
    //             extralink: false,
    //             submenu: []
    //         },
    //         {
    //             path: '/starter',
    //             title: 'Starter Page',
    //             icon: '',
    //             class: '',
    //             extralink: false,
    //             submenu: []
    //         }
    //     ]
    // },
    // {
    //     path: '',
    //     title: 'Timeline',
    //     icon: 'mdi mdi-apple-safari',
    //     class: 'has-arrow',
    //     extralink: false,
    //     submenu: [
    //         {
    //             path: '/timeline/left',
    //             title: 'Left Timeline',
    //             icon: '',
    //             class: '',
    //             extralink: false,
    //             submenu: []
    //         },
    //         {
    //             path: '/timeline/right',
    //             title: 'Right Timeline',
    //             icon: '',
    //             class: '',
    //             extralink: false,
    //             submenu: []
    //         },
    //         {
    //             path: '/timeline/center',
    //             title: 'Center Timeline',
    //             icon: '',
    //             class: '',
    //             extralink: false,
    //             submenu: []
    //         }
    //     ]
    // },
    // {
    //     path: '',
    //     title: 'Icons',
    //     icon: 'icon-Eyeglasses-Smiley',
    //     class: 'has-arrow',
    //     extralink: false,
    //     submenu: [
    //         {
    //             path: '/icons/fontawesome',
    //             title: 'Fontawesome',
    //             icon: '',
    //             class: '',
    //             extralink: false,
    //             submenu: []
    //         },
    //         {
    //             path: '/icons/simpleline',
    //             title: 'Simple Line Icons',
    //             icon: '',
    //             class: '',
    //             extralink: false,
    //             submenu: []
    //         },
    //         {
    //             path: '/icons/material',
    //             title: 'Material Icons',
    //             icon: '',
    //             class: '',
    //             extralink: false,
    //             submenu: []
    //         },
    //         {
    //             path: '/icons/iconmind',
    //             title: 'Iconmind Icons',
    //             icon: '',
    //             class: '',
    //             extralink: false,
    //             submenu: []
    //         }
    //     ]
    // },
    // {
    //     path: '',
    //     title: 'Menu Levels',
    //     icon: 'mdi mdi-notification-clear-all',
    //     class: 'has-arrow',
    //     extralink: false,
    //     submenu: [
    //         {
    //             path: '',
    //             title: 'Second Level',
    //             icon: '',
    //             class: '',
    //             extralink: true,
    //             submenu: []
    //         },
    //         {
    //             path: '',
    //             title: 'Second Child',
    //             icon: '',
    //             class: 'has-arrow',
    //             extralink: false,
    //             submenu: [
    //                 {
    //                     path: '',
    //                     title: 'Third 1.1',
    //                     icon: '',
    //                     class: '',
    //                     extralink: false,
    //                     submenu: []
    //                 },
    //                 {
    //                     path: '',
    //                     title: 'Third 1.2',
    //                     icon: '',
    //                     class: '',
    //                     extralink: false,
    //                     submenu: []
    //                 }
    //             ]
    //         }
    //     ]
    // }
];
