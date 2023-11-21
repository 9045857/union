// метод размещает Hover под иконкой по середине, и не позволяет уйти за границы экрана
export const setTopLeftHover = (iconCoordinates, windowWidth) => {
    const hoverTopCompensation = -1;
    const hoverWidth = 300;

    const iconWidth = iconCoordinates.right - iconCoordinates.left;

    const halfIcon = Math.round(iconWidth / 2);
    const halfHover = Math.round(hoverWidth / 2);

    // console.log('ширина экрана: ' + windowWidth);

    let hoverTop =
        iconCoordinates.bottom - iconCoordinates.top + hoverTopCompensation;

    const distanceToScreenLeft = Math.round(
        iconCoordinates.left +
            (iconCoordinates.right - iconCoordinates.left) / 2
    );

    const distanceToScreenRight = Math.round(
        windowWidth - distanceToScreenLeft
    );

    //hover входит по ширине, ничего делать не нужно
    if (
        distanceToScreenRight >= halfHover &&
        distanceToScreenLeft >= halfHover
    ) {
        const elementStyle = {
            top: `${hoverTop}px`,
            left: `${halfIcon - halfHover}px`,
        };

        return elementStyle;
    }

    //hover вылазит за левый край, сдвигаем, если позволяет правый.
    if (
        distanceToScreenRight < halfHover &&
        distanceToScreenLeft >= halfHover
    ) {
        if (
            distanceToScreenLeft - halfHover >=
            halfHover - distanceToScreenRight
        ) {
            const elementStyle = {
                top: `${hoverTop}px`,
                left: `${
                    halfIcon - halfHover - (halfHover - distanceToScreenRight)
                }px`,
            };

            return elementStyle;
        } else {
            const elementStyle = {
                top: `${hoverTop}px`,
                left: `${
                    halfIcon - halfHover + halfHover - distanceToScreenLeft
                }px`,
            };

            return elementStyle;
        }
    }

    const elementStyle = {
        top: `${hoverTop}px`,
        left: `${halfIcon - halfHover + halfHover - distanceToScreenLeft}px`,
    };

    return elementStyle;
};
