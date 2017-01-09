var label = {
    num : 1,
    name : 'answer',
    changeName : function () {
        label.num++;
    }
};
var radio = {
    inputType : 'radio',
    inputName : 'question',
    inputValue :1,
    changeValue : function (){
        radio.inputValue++;
    }
};
var listItem = {
    header : 'Question #',
    num : 1,
    changeHeader : function (){
        listItem.num++;
    }
};
function createForm() {
    var div = document.createElement('div');
    div.className = 'wrapper';
    document.body.appendChild(div);
    var mainHeader = document.createElement('h1');
    mainHeader.innerHTML = 'This is computer knowlege test';
    div.appendChild(mainHeader);
    var form = document.createElement('form');
    form.className = 'test';
    form.method = 'get';
    div.appendChild(form);
    var ol = document.createElement('ol');
    form.appendChild(ol);
    for (var i = 0; i < 3; i++) {
        var listItemTag = document.createElement('li');
        ol.appendChild(listItemTag);
        var listItemHeader = document.createElement('h3');
        listItemHeader.innerHTML = listItem.header + listItem.num;
        listItemTag.appendChild(listItemHeader);
        listItem.changeHeader();
            for (var x = 0; x < 3; x++) {
                var labelTag = document.createElement('label');
                labelTag.innerHTML = label.name + label.num;
                listItemTag.appendChild(labelTag);
                var radioTag = document.createElement('input');
                radioTag.type = radio.inputType;
                radioTag.name = radio.inputName;
                radioTag.value = radio.inputValue;
                labelTag.appendChild(radioTag);
                radio.changeValue();
                label.changeName();
        }
    }

    var submit = document.createElement('input');
    submit.type = 'submit';
    submit.name = 'test';
    submit.value = 'Check my Answers';
    submit.className = 'submit';
    form.appendChild(submit);
}
createForm();
