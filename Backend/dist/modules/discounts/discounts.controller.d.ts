import { DiscountsService } from './discounts.service';
import { CreateDiscountDto } from './dto/create-discount.dto';
import { UpdateDiscountDto } from './dto/update-discount.dto';
export declare class DiscountsController {
    private readonly discountsService;
    constructor(discountsService: DiscountsService);
    create(createDiscountDto: CreateDiscountDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateDiscountDto: UpdateDiscountDto): string;
    remove(id: string): string;
}
