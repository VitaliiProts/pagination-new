import { save, load, remove } from '../local-storage';
import { cloneDeep } from 'lodash';

class Columns {
    constructor(gridRefs, gridName, gridColumns) {
        this.gridRefs = gridRefs;
        this.gridName = gridName;
        this.gridColumns = cloneDeep(gridColumns);
    }

    getVisibleColumns() {
        return this.gridColumns.filter((column) => {
            if (column.hideColumn === true) {
                return false;
            } else {
                return true;
            }
            return !hiddenColumns.includes(column.prop);
        });
    }
    
    setColWidth() {
        if (localStorage.getItem('TEST')) {
            this.gridColumns.forEach((arr) => {
                arr.width = JSON.parse(localStorage.getItem('TEST'))
                console.log(arr);
            })
            console.log(this.gridColumns)
        }
        // console.log('MOUNTED');
        // save(`grid-${this.gridName}-col-visible`, ['2323'])
        // const setHiddenColumns = load(`grid-${this.gridName}-col-visible`);
        // const tableWidth = load(`grid-${this.gridName}-col-size`);
        // // hiddenColumns = setHiddenColumns;
        // for (let i = 0; i < this.gridColumns.length; i++) {
        //     this.gridColumns[i].width = tableWidth[i];
        //     // console.log(this.getVisibleColumns()[i])
        // }
        // remove(`grid-${this.gridName}-col-visible`);
    }

    resizeColumn(visibleColumns, slots, scopedSlots) {
        // console.log(visibleColumns);
        // console.log(this.getVisibleColumns())
        const applyTableColWidths = [];
        const applyTableColGroup = this.gridRefs.$el.getElementsByTagName('colgroup')[0];
        const applyTableCol = applyTableColGroup.getElementsByTagName('col');
        let index = slots.expand || scopedSlots.expand ? 1 : 0;
        for (index; index < applyTableCol.length; index++) {
            applyTableColWidths.push(applyTableCol[index].width);
        }
        remove(`grid-${this.gridName}-col-size`);
        save(`grid-${this.gridName}-col-size`, applyTableColWidths);
    }

    showHideColumn(hiddenColumns) {
        console.log('CHANHE CHECKBOX');
        // console.log(this.getVisibleColumns());
        const arr = [];
        const calculateWidthTable = Math.round((this.gridRefs.$el.clientWidth - 50)  / this.getVisibleColumns().length);
        // console.log(filteredEvents);

        this.gridColumns.forEach((column) => {
            column.hideColumn = hiddenColumns.includes(column.prop);
            column.width = undefined;
        });

        // console.log(this.gridColumns);

        for (let i = 0; i < this.getVisibleColumns().length; i++) {
            arr.push(calculateWidthTable);
        }

        for (let i = 0; i < this.gridColumns.length; i++) {
            this.gridColumns[i].width = calculateWidthTable;
            this.gridColumns[i].hiddenColumns = calculateWidthTable;
        }

        save('TEST', arr)

        save(`grid-${this.gridName}-col-size`, arr);
        save(`grid-${this.gridName}-col-visible`, hiddenColumns);
    }

}

export default Columns;