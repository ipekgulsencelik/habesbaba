import { Routes } from "@angular/router";

export const routes: Routes = [
    
    {
        path: "",
        loadComponent: () => import("./components/layout/layout.component")
            .then(c => c.LayoutComponent),
        children: [
            {
                path: "",
                loadComponent: () => import("./components/home/home.component")
                    .then(c => c.HomeComponent),
            },
            {
                path: "about",
                loadComponent: () => import("./components/about/about.component")
                    .then(c => c.AboutComponent),
            },
            {
                path: "shop",
                loadComponent: () => import("./components/contact/contact.component")
                    .then(c => c.ContactComponent),
                    children: [
                        {
                            path: "wishlist",
                            loadComponent: () => import("./components/wishlist/wishlist.component")
                                .then(c => c.WishlistComponent),
                        },
                    ]
            },
            {
                path: "my-account",
                loadComponent: () => import("./components/account/account.component")
                    .then(c => c.AccountComponent),
            },
            {
                path: "wishlist",
                loadComponent: () => import("./components/wishlist/wishlist.component")
                    .then(c => c.WishlistComponent),
            },
            {
                path: "gallery",
                loadComponent: () => import("./components/gallery/gallery.component")
                    .then(c => c.GalleryComponent),
            },
            {
                path: "contact",
                loadComponent: () => import("./components/contact/contact.component")
                    .then(c => c.ContactComponent),
            },
        ]
    },
    {
        path: "**",
        loadComponent: () => import("./components/not-found/not-found.component")
            .then(c => c.NotFoundComponent)
    }
]