const BASIC_HSL_STEP = 20;
const argsToStr = (hue, saturation, lightness) => `hsl(${hue}, ${saturation}%, ${lightness}%)`;

// eslint-disable-next-line import/prefer-default-export
export const getColorsArray = (colorsCount) => {
    const colors = [];
    let offset = 0;

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < colorsCount; i++) {
        if (i * BASIC_HSL_STEP >= 360) {
            offset += 7;
        }

        const basicColor = i * BASIC_HSL_STEP + offset;

        colors.push({
            color: argsToStr(basicColor, 100, 50),
            gradientStart: argsToStr(basicColor, 90, 35),
            gradientEnd: argsToStr(basicColor, 100, 65),
        });
    }

    return colors;
};
