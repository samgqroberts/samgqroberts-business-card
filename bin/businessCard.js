"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateCard = void 0;
const nameASCII = `
                                _                            
                               | |                  _        
  ___ _____ ____      ____ ___ | |__  _____  ____ _| |_  ___ 
 /___|____ |    \\    / ___) _ \\|  _ \\| ___ |/ ___|_   _)/___)
|___ / ___ | | | |  | |  | |_| | |_) ) ____| |     | |_|___ |
(___/\\_____|_|_|_|  |_|   \\___/|____/|_____)_|      \\__|___/ 
`;
function generateCard() {
    console.log(nameASCII);
    console.log('Sam Roberts / Software Developer');
    console.log('https://github.com/samgqroberts');
}
exports.generateCard = generateCard;
