export const Tools = {
    processCoords: (x, y) => {
        let _x;
        let _y;

        _y = y - 50;
        _x = x - (window.innerWidth - 1200) / 2
        return `${_x}, ${_y}`;
    }
}