import { CreateMarketingDto } from './dto/create-marketing.dto';
import { UpdateMarketingDto } from './dto/update-marketing.dto';
export declare class MarketingService {
    create(createMarketingDto: CreateMarketingDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateMarketingDto: UpdateMarketingDto): string;
    remove(id: number): string;
}
