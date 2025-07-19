import { CreateDiscountDto } from './dto/create-discount.dto';
import { UpdateDiscountDto } from './dto/update-discount.dto';
export declare class DiscountsService {
    create(createDiscountDto: CreateDiscountDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateDiscountDto: UpdateDiscountDto): string;
    remove(id: number): string;
}
