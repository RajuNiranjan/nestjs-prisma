import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeModule } from './employee/employee.module';
import { DatabaseModule } from './database/database.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [EmployeeModule, DatabaseModule, ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
