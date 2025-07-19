import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';




import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { CustomersModule } from './customers/customers.module';
import { MarketsModule } from './markets/markets.module';
import { AnalyticsModule } from './analytics/analytics.module';
import { ContentModule } from './content/content.module';
import { DiscountsModule } from './discounts/discounts.module';
import { MarketingModule } from './marketing/marketing.module';
@Module({
  imports: [UsersModule,
     ProductsModule,
      OrdersModule,
       CustomersModule,
       MarketsModule,
       AnalyticsModule,
       ContentModule,
       DiscountsModule,
       MarketingModule,
      MongooseModule.forRoot('mongodb://localhost/nest')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
