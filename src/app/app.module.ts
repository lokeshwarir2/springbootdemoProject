import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HttpClient, HttpClientModule, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ProductService } from './services/product.service';
import { RouterModule, Routes } from '@angular/router';
import { ProductCategoryMenuComponent } from './components/product-category-menu/product-category-menu.component';
import { SearchComponent } from './components/search/search.component';
import { ProductDataComponent } from './components/product-data/product-data.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CartStatusComponent } from './components/cart-status/cart-status.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { LoginStatusComponent } from './components/login-status/login-status.component';
import { OktaAuthModule,OktaCallbackComponent,OKTA_CONFIG } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';
import myAppConfig from './config/my-app-config';

const oktaConfig=myAppConfig.oidc;
const oktaAuth=new OktaAuth(oktaConfig);

const routes:Routes=[
    {path:'login/callback',component:OktaCallbackComponent},
    {path:'login',component:LoginComponent},
    {path:'checkout',component:CheckoutComponent},
    {path:'cart-details',component:CartDetailsComponent},
    {path:'products/:id',component:ProductDetailsComponent},
    {path:'search/:keyword',component:ProductListComponent},
    {path:"category/:id",component:ProductListComponent},
    {path: 'category', component: ProductListComponent},
    {path: 'products', component: ProductListComponent},  
    {path:"",redirectTo:'/products',pathMatch:'full'},
    {path:"**",redirectTo:'/products',pathMatch:'full'}
]

@NgModule({ declarations: [
        AppComponent,
        ProductListComponent,
        ProductCategoryMenuComponent,
        SearchComponent,
        ProductDataComponent,
        CartStatusComponent,
        CartDetailsComponent,
        CheckoutComponent,
        LoginComponent,
        LoginStatusComponent
    ],
    bootstrap: [AppComponent], imports: [
        RouterModule.forRoot(routes),HttpClientModule,
        BrowserModule,NgbModule,ReactiveFormsModule,OktaAuthModule], providers: [ProductService, {provide:OKTA_CONFIG,useValue:{oktaAuth}}] })
export class AppModule { }