import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HomeComponent } from './home/home.component';
import { ChatbotComponent } from './pages/chatbot/chatbot.component';
import { PostListPageComponent } from './pages/post-list-page/post-list-page.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PostPageComponent } from './pages/post-page/post-page.component';


export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'login', component: LoginPageComponent},
    {path: 'chatbot', component: ChatbotComponent},
    {path: 'posts', component: PostListPageComponent},
    {path: 'posts/:slug', component: PostPageComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}