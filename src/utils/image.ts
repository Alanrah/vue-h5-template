export interface ImageInfo {
    width: number;
    height: number;
    size: number;
}

export const imgToBase64 = (img: File) =>
    new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.onload = () => resolve(fileReader);
        fileReader.onerror = reject;
        fileReader.readAsDataURL(img);
    });

export const loadImage = (url: string) =>
    new Promise((resolve, reject) => {
        const image = new Image();
        image.src = url;
        image.onload = () => resolve(image);
        image.onerror = reject;
    });


export function imageValidator(imageInfo: ImageInfo, limit: {width: number, height: number, size: number} = {width: 0, height: 0, size: 50 * 1024 * 1024}) {
    const res = [];
    if (imageInfo.height !== limit.height) {
        res.push('高');
    }
    if (imageInfo.width !== limit.width) {
        res.push('宽');
    }
    if (imageInfo?.size > limit.size) {
        res.push('体积');
    }

    return res;
}