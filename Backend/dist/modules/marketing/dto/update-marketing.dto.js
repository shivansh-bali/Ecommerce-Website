"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMarketingDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_marketing_dto_1 = require("./create-marketing.dto");
class UpdateMarketingDto extends (0, mapped_types_1.PartialType)(create_marketing_dto_1.CreateMarketingDto) {
}
exports.UpdateMarketingDto = UpdateMarketingDto;
//# sourceMappingURL=update-marketing.dto.js.map