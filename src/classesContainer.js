import imageIop from './images/classes/iop.png';
import imageCra from './images/classes/cra.png';
import imageEcaflip from './images/classes/ecaflip.png';
import imageEliotrope from './images/classes/eliotrope.png';
import imageEniripsa from './images/classes/eniripsa.png';
import imageEnutrof from './images/classes/enutrof.png';
import imageFeca from './images/classes/feca.png';
import imageForgelance from './images/classes/forgelance.png';
import imageHuppermage from './images/classes/huppermage.png';
import imageOsamodas from './images/classes/osamodas.png';
import imageOuginak from './images/classes/ouginak.png';
import imagePandawa from './images/classes/pandawa.png';
import imageRoublard from './images/classes/roublard.png';
import imageSacrieur from './images/classes/sacrieur.png';
import imageSadida from './images/classes/sadida.png';
import imageSram from './images/classes/sram.png';
import imageSteamer from './images/classes/steamer.png';
import imageXelor from './images/classes/xelor.png';
import imageZobal from './images/classes/zobal.png';

const classArray = [{ image: imageIop, name: 'Iop' },
                    { image: imageCra, name: 'Cra'},
                    { image: imageEcaflip, name: 'Ecaflip'},
                    { image: imageEliotrope, name: 'Eliotrope'},
                    { image: imageEniripsa, name: 'Eniripsa'},
                    { image: imageEnutrof, name: 'Enutrof'},
                    { image: imageFeca, name: 'Féca'},
                    { image: imageForgelance, name: 'Forgelance'},
                    { image: imageHuppermage, name: 'Huppermage'},
                    { image: imageOsamodas, name: 'Osamodas'},
                    { image: imageOuginak, name: 'Ouginak'},
                    { image: imagePandawa, name: 'Pandawa'},
                    { image: imageRoublard, name: 'Roublard'},
                    { image: imageSacrieur, name: 'Sacrieur'},
                    { image: imageSadida, name: 'Sadida'},
                    { image: imageSram, name: 'Sram'},
                    { image: imageSteamer, name: 'Steamer'},
                    { image: imageXelor, name: 'Xelor'},
                    { image: imageZobal, name: 'Zobal'}];

export function getClassArray() {
    console.log(classArray);
    return classArray;
}