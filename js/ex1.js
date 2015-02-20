window.onload = function () {
/**
 * Функция появления и определения положения  кнопок DEL
 * @blueCellsTable - выбираем таблицу
 * @delRowBtn - кнопка удаления строки
 * @delColBtn - кнопка удаления столбца
 * @addRowBtn - кнопка добавления строки
 * @addColBtn - кнопка добавления столбца
 * @unHoverSetTimeoutId - ID таймера на исчезание кнопки DEL
 * @blueCellOnHtml - ячейки для начального AddEventListener
 * @blueCellIncr - инкримент для blueCellOnHtml
 * @blueCellCount - кол-во ячеек в HTML странице
 * @rowIndGL - индекс выбранной строки
 * @colIndGL - индекс выбранного столбца
 */
	var blueCellsTable = document.getElementsByClassName('task-table')[0],
		delRowBtn = document.getElementsByClassName('delRow')[0],
		delColBtn = document.getElementsByClassName('delCol')[0],
		addRowBtn = document.getElementsByClassName('addRow')[0],
		addColBtn = document.getElementsByClassName('addCol')[0],
		unHoverSetTimeoutId,
		blueCellOnHtml = document.getElementsByClassName('blueCell'),
		blueCellIncr,
		blueCellCount = document.getElementsByClassName('blueCell').length,
		rowIndGL,
		colIndGL;
/**
 * Функция появления и определения положения  кнопок DEL
 * @rowInd - определение строки
 * @colInd - определение столбца
 * @rowIndGL - переназначение переменной строки на нужное значение
 * @colIndGL - переназначение переменной столбца на нужное значение
 */
	function hoverRowCol(event) {
		var countTR = blueCellsTable.rows.length,
			rowInd = event.srcElement.parentNode.rowIndex,
			colInd = event.srcElement.cellIndex,
			rowIndGL = rowInd,
			colIndGL = colInd,
			countCol = blueCellsTable.rows[0].cells.length,
			hoverRow = blueCellsTable.getElementsByTagName('tr')[rowInd],
			rowDel = hoverRow.cells[colInd],
			delHeight = delRowBtn.offsetHeight,
			rowY = rowDel.offsetTop,
			colX = rowDel.offsetLeft;
		delRowBtn.style.top = delHeight + rowY + 'px';
		delColBtn.style.left = delHeight + colX + 'px';
		if (countTR > 1 && countCol > 1) {
			delRowBtn.style.display = 'block';
			delColBtn.style.display = 'block';
		} else {
			if (countTR > 1 && countCol == 1) {
				delRowBtn.style.display = 'block';
				delColBtn.style.display = 'none';
			}
			if (countTR == 1 && countCol > 1) {
				delRowBtn.style.display = 'none';
				delColBtn.style.display = 'block';
			}
			if (countTR == 1 && countCol == 1) {
				delRowBtn.style.display = 'none';
				delColBtn.style.display = 'none';
			}
		}
		clearTimeout(unHoverSetTimeoutId);
	}
/**
 * Функция исчезания кнопок DEL
 */
	function unHoverRowCol() {
		unHoverSetTimeoutId = setTimeout( function () {
			delColBtn.style.display = 'none';
			delRowBtn.style.display = 'none';
		}, 3000);
	}
/**
 * Функция добавления строки
 */
	function addRow() {
		var countTR = blueCellsTable.rows.length,
			countColumn = blueCellsTable.rows[0].cells.length,
			newRow = blueCellsTable.insertRow(countTR),
			i;
		for (i = 0; i < countColumn; i++ ) {
			var newBlueCell = document.createElement('td');
				newBlueCell = newRow.insertCell(0);
				newBlueCell.classList.add('blueCell');
				newBlueCell.addEventListener('mouseover',hoverRowCol,false);
				newBlueCell.addEventListener('mouseout',unHoverRowCol,false);
		}
	}
	
/**
 * Функция добавления столбца
 * @newBlueColumn - Добавление новой ячейки в новуб строку
 */
	function addColumn() {
		var tableRows = blueCellsTable.getElementsByTagName('tr'),
			x = blueCellsTable.rows[0].cells.length,
			i;
		for (i = 0; i < tableRows.length; i++) {
		var newBlueColumn = tableRows[i].insertCell(x);
			newBlueColumn.classList.add('blueCell');
			newBlueColumn.addEventListener('mouseover',hoverRowCol,false);
			newBlueColumn.addEventListener('mouseout',unHoverRowCol,false);
		}
	}
	
/**
 * Функция удаления строки
 */
	function delRow(arg) {
			blueCellsTable.deleteRow(rowIndGL);
	}
	
/**
 * Функция удаления столбца
 */
	function delColumn(event) {
			var tableRows = blueCellsTable.getElementsByTagName('tr').length;
			for(var i=0;i<=tableRows-1;i++) {            
				blueCellsTable.rows[i].deleteCell(colIndGL);
			}
	}
/**
 *Назначение функций HTML-элементам по ивентам
 */
	delRowBtn.onclick = delRow;
	delColBtn.onclick = delColumn;
	addColBtn.onclick = addColumn;
	addRowBtn.onclick = addRow;
/**
 *Назначение стартого AddEventListener для ячеек таблицы
 */
	for (blueCellIncr = 0; blueCellIncr < blueCellCount; blueCellIncr++) {
		blueCellOnHtml[blueCellIncr].addEventListener('mouseover', hoverRowCol, false);
		blueCellOnHtml[blueCellIncr].addEventListener('mouseout', unHoverRowCol, false);
		}
}();