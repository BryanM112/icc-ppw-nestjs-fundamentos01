import { Module } from '@nestjs/common';
import { StatusModule } from './status/status.module';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [StatusModule, UsersModule, ProductsModule, AuthModule],
})
export class AppModule {}
