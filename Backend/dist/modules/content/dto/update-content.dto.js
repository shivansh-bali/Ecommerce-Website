"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateContentDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_content_dto_1 = require("./create-content.dto");
class UpdateContentDto extends (0, mapped_types_1.PartialType)(create_content_dto_1.CreateContentDto) {
}
exports.UpdateContentDto = UpdateContentDto;
//# sourceMappingURL=update-content.dto.js.map