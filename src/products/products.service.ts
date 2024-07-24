import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class ProductsService {
  constructor(private readonly dataBaseService: DatabaseService) {}
  create(createProductDto: Prisma.ProductCreateInput) {
    return this.dataBaseService.product.create({
      data: createProductDto,
    });
  }

  findAll() {
    return this.dataBaseService.product.findMany();
  }

  findOne(id: string) {
    return this.dataBaseService.product.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: string, updateProductDto: Prisma.ProductUpdateInput) {
    return this.dataBaseService.product.update({
      where: {
        id,
      },
      data: updateProductDto,
    });
  }

  remove(id: string) {
    return this.dataBaseService.product.delete({
      where: {
        id,
      },
    });
  }
}
