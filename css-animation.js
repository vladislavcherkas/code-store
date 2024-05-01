class X {
    static modify(id, css) {
        `
        .home {
            height: 55px;
        }
        #protection-glass {
            opacity: 0;
        }
        `;
        // Разделить CSS код на таблицы
        const SHEETS = [];
        let sheet = '';
        for (let piece of css) {
            sheet += piece;
            if (piece === '}') {
                SHEETS.push(sheet);
                sheet = '';
            }
        }
        // Обрезка в таблицах лишнего по краям
        for (let sheetIndex in SHEETS) {
            let sheet = SHEETS[sheetIndex];
            if (sheet.startsWith('\n')) {
                sheet = sheet.slice(1);
                SHEETS[sheetIndex] = sheet;
            }
        }
        // Разделение на пары ключ-значение
        for (let sheet of SHEETS) {
            let header = '';
            for (let piece of sheet) {
                if (piece === '{') {
                    break;
                }
                header += piece;
            }
            // Обрезка строк
        }
        if (slice(0, 1) === '.') {

            const ELEMENT = window.document;
        }
        if (slice(0, 1) === '#') {

        }
        const PROPERTY = style.slice(0, style.match(':').index);
        const VALUE = style.slice(style.match(':').index + 2);
        const ELEMENT = window.document.getElementById(id);
        ELEMENT.style[PROPERTY] = VALUE;
    }
}