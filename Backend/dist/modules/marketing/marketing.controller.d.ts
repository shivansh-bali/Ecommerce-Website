import { MarketingService } from './marketing.service';
import { CreateMarketingDto } from './dto/create-marketing.dto';
import { UpdateMarketingDto } from './dto/update-marketing.dto';
export declare class MarketingController {
    private readonly marketingService;
    constructor(marketingService: MarketingService);
    create(createMarketingDto: CreateMarketingDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateMarketingDto: UpdateMarketingDto): string;
    remove(id: string): string;
}
