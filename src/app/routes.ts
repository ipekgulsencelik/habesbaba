import { Routes } from "@angular/router";

export const routes: Routes = [
    {
        path: "about",
        loadComponent: () => import("./components/about/about/about.component")
            .then(c => c.AboutComponent),
    },
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
        ]
    },
    {
        path: "**",
        loadComponent: () => import("./components/not-found/not-found.component")
            .then(c => c.NotFoundComponent)
    }
]