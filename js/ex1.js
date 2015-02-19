//global vars
var variables ={
    exTable : function exTable(){
    return(document.getElementsByClassName('task-table')[0]);//основная таблица
},
    DelRow : function DelRow(){
        return(document.getElementById('delRow'));//кнопка удаления строки
},
     DelCol : function DelRow(){
        return(document.getElementById('delCol'));//кнопка удаления столбца
},
    t: function t(){
        return('0');//счетчик setTimeOut
}
};

console.log(variables.exTable().style.borderWidth);

//изменение положения кнопок DEL
function hoverRowCol(event,arg){
    var countTR = variables.exTable().rows.length;
    var rowInd = arg.parentNode.rowIndex;//определение строки
    var colInd = event.srcElement.cellIndex;//определение столбца
        rowIndGL = rowInd;//переназначение глобольной переменной строки на нужное значение
        colIndGL = colInd;//переназначение глобольной переменной столбца на нужное значение
    var countCol = variables.exTable().rows[0].cells.length; 
    var hoverRow = variables.exTable().getElementsByTagName('tr')[rowInd];
    var rowDel = hoverRow.cells[colInd];
    var delHeight = variables.DelRow().offsetHeight;
    var rowY = rowDel.offsetTop;

        variables.DelRow().style.top = delHeight + rowY +'px';
    var colX = rowDel.offsetLeft;
        variables.DelCol().style.left =delHeight + colX +'px';
    
    if  (countTR>1 && countCol>1){
        variables.DelRow().style.display = 'block';
        variables.DelCol().style.display = 'block';
    }else{
        if (countTR>1 && countCol==1){
            variables.DelRow().style.display = 'block';
            variables.DelCol().style.display = 'none';
        };
        if (countTR==1 && countCol>1){
            variables.DelRow().style.display = 'none';
            variables.DelCol().style.display = 'block';
        };
        if (countTR==1 && countCol==1){
            variables.DelRow().style.display = 'none';
            variables.DelCol().style.display = 'none';
        };
    };
    clearTimeout(variables.t);

};


function unHoverRowCol(){
  variables.t = setTimeout(function(){
        variables.DelCol().style.display = 'none';
        variables.DelRow().style.display = 'none';},3000);
};





//добавляем строку + 
function addRow(){
var countTR = variables.exTable().rows.length;
var countColumn = variables.exTable().rows[0].cells.length;//кол-во ячеек в первой строке, то есть столбцов
var newRow = variables.exTable().insertRow(countTR);//вставляем строку

//добавление ячейки BLUE  +
for( i= 0; i<countColumn;i++){
    var newBlueCell = document.createElement('td');
    var newBlueCell = newRow.insertCell(0);
        newBlueCell.classList.add('blueCell');
        newBlueCell.setAttribute('onmouseover','hoverRowCol(event,this)');
        newBlueCell.setAttribute('onmouseout','unHoverRowCol()');
        };   
};


//добавляем стобец + 
function addColumn(){
    var tableRows = variables.exTable().getElementsByTagName('tr');
    var x = variables.exTable().rows[0].cells.length ;
    for (var i = 0; i < tableRows.length; i++){
    var newBlueColumn = tableRows[i].insertCell(x);
        newBlueColumn.classList.add('blueCell');
        newBlueColumn.setAttribute('onmouseover','hoverRowCol(event,this)');
        newBlueColumn.setAttribute('onmouseout','unHoverRowCol()');
    }
};


//удаляем строку
function delRow(arg){
        variables.exTable().deleteRow(rowIndGL);

};

//удаляем столбец
function delColumn(event) {
        var tableRows = variables.exTable().getElementsByTagName('tr').length;
        for(i=0;i<=tableRows-1;i++){            
            variables.exTable().rows[i].deleteCell(colIndGL);
        };   
};

    

    
    
