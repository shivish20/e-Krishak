import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherComponent } from './components/weather/weather.component';
import { AddPostComponent } from './pages/admin/add-post/add-post/add-post.component';
import { AddCategoryComponent } from './pages/admin/add_categroy/add-category/add-category.component';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { CategoriesViewComponent } from './pages/admin/categories-view/categories-view.component';
import { ViewPostsComponent } from './pages/admin/view_post/view-posts/view-posts.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome/welcome.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile/profile.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { AdminGuard } from './services/guard/admin.guard';
import { NormalUserGuard } from './services/guard/normal-user.guard';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent,
    pathMatch:'full'
  },
  {
    path:'signup',
    component: SignupComponent,
    pathMatch:'full',
  },
  {
    path:'weather',
    component:WeatherComponent,
    pathMatch:'full'
  },
  {
    path:'admin',
    component:AdminDashboardComponent,
    canActivate:[AdminGuard],
    children:[
      {
        path:'',
        component:WelcomeComponent,
    },
      {
        path:'profile',
        component:ProfileComponent,
    },
    {
      path:'categories',
      component:CategoriesViewComponent,
  },
  {
    path:'add-category',
    component:AddCategoryComponent,
  },
  {
    path:'add-post',
    component:AddPostComponent,
  },
  {
    path:'posts',
    component:ViewPostsComponent,
  }
  ]
    
  },
  {
    path:'normal',
    component:UserDashboardComponent,
    pathMatch:'full',
    canActivate:[NormalUserGuard]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
