import oneOneRow from './one_one_row/oneOneRow.js';
import oneTwoRow from './one_two_row/oneTwoRow.js';
import oneTreeRow from './one_tree_row/oneTreeRow.js';
import oneFourRow from './one_four_row/oneFourRow.js';

import rowOneCss from './rowOneCss.js';

export default function rowOne() {
    return (`
        ${rowOneCss()}
        <div class="row-one-container">
            <div class="row-one">
                ${oneOneRow()}
                ${oneTwoRow()}
                ${oneTreeRow()}
                ${oneFourRow()}
            </div>
        </div>
    `);
}
