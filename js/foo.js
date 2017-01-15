var htmlDoc = {
    header: 'This is computer knowlege test',
    form: {
        li1: {
            subheader: 'Question 1',
            label1: 'Answer 1',
            label2: 'Answer 2',
            label3: 'Answer 3',
        },
        li2: {
            subheader: 'Question 2',
            label1: 'Answer 1',
            label2: 'Answer 2',
            label3: 'Answer 3',
        },
        li3: {
            subheader: 'Question 3',
            label1: 'Answer 1',
            label2: 'Answer 2',
            label3: 'Answer 3'
        },
        submit: "Check my answers"
    }
};


var inputs = {
    inputq1_1: {
        name: 'question1',
        value: 1,
    },
    inputq1_2: {
        name: 'question1',
        value: 2,
    },
    inputq1_3: {
        name: 'question1',
        value: 3,
    },
    inputq2_1: {
        name: 'question2',
        value: 1,
    },
    inputq2_2: {
        type: 'radio',
        name: 'question2',
        value: 2,
    },
    inputq2_3: {
        name: 'question2',
        value: 3,
    },
    inputq3_1: {
        name: 'question3',
        value: 1,
    },
    inputq3_2: {
        name: 'question3',
        value: 2,
    },
    inputq3_3: {
        name: 'question3',
        value: 3,
    }
};
var inputsArr1 = [inputs.inputq1_1, inputs.inputq1_2, inputs.inputq1_3];
var inputsArr2 = [inputs.inputq2_1, inputs.inputq2_2, inputs.inputq2_3];
var inputsArr3 = [inputs.inputq3_1, inputs.inputq3_2, inputs.inputq3_3];
var labelsArr1 = [htmlDoc.form.li1.label1, htmlDoc.form.li1.label2, htmlDoc.form.li1.label3];
var labelsArr2 = [htmlDoc.form.li2.label1, htmlDoc.form.li2.label2, htmlDoc.form.li2.label3];
var labelsArr3 = [htmlDoc.form.li3.label1, htmlDoc.form.li3.label2, htmlDoc.form.li3.label3];
var parent = document.body;


function createWrapper() {
    var wrapper = document.createElement('div');
    var header = document.createElement('h1');
    header.appendChild(document.createTextNode(htmlDoc.header));
    wrapper.className = 'wrapper';
    parent.appendChild(wrapper);
    wrapper.appendChild(header);
    wrapper.appendChild(createForm());

    function createForm() {
        var form = document.createElement('form');
        var buttonSubmit = document.createElement('input');
        form.className = 'test';
        form.method = 'get';
        form.appendChild(createList());
        buttonSubmit.value = htmlDoc.form.submit;
        buttonSubmit.type = 'submit';
        buttonSubmit.className = 'submit';
        form.appendChild(buttonSubmit);

        function createList() {
            var ol = document.createElement('ol');
            var subheader1 = document.createElement('h3');
            var subheader2 = document.createElement('h3');
            var subheader3 = document.createElement('h3');
            var li1 = createInput(inputsArr1, labelsArr1);
            var li2 = createInput(inputsArr2, labelsArr2);
            var li3 = createInput(inputsArr3, labelsArr3);
            var li1txt = subheader1.appendChild(document.createTextNode(htmlDoc.form.li1.subheader));
            var li2txt = subheader2.appendChild(document.createTextNode(htmlDoc.form.li2.subheader));
            var li3txt = subheader3.appendChild(document.createTextNode(htmlDoc.form.li3.subheader));
            li1.insertBefore(subheader1, li1.firstChild);
            li2.insertBefore(subheader2, li2.firstChild);
            li3.insertBefore(subheader3, li3.firstChild);
            ol.appendChild(li1);
            ol.appendChild(li2);
            ol.appendChild(li3);

            function createInput(obj2, obj3) {
                var li = document.createElement('li');

                for (var i = 0; i < obj2.length; i++) {
                    var element = document.createElement('input');
                    var label = document.createElement('label');
                    element.type = 'radio';
                    element.name = obj2[i].name;
                    element.value = obj2[i].value;
                    label.appendChild(element);
                    label.appendChild(document.createTextNode(obj3[i]));
                    li.appendChild(label);
                }
                return li;
            }
            return ol;
        }
        return form;
    }
}
createWrapper();
