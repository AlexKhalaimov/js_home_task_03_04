var  htmlDoc = {
    header : 'This is computer knowlege test',
    form : {
        li1 : {
            subheader : 'Question 1',
            label1 : 'Answer 1',
            label2 : 'Answer 2',
            label3 : 'Answer 3',
        },
        li2 : {
            subheader : 'Question 2',
            label1 : 'Answer 1',
            label2 : 'Answer 2',
            label3 : 'Answer 3',
        },
        li3 : {
            subheader : 'Question 3',
            label1 : 'Answer 1',
            label2 : 'Answer 2',
            label3 : 'Answer 3'
        },
        submit : "Check my answers"
    }
};


var htmlPage = '<h1>' + htmlDoc.header + '</h1>'
+ '<form class =  "test" method = "get">'
+ '<ol class= "menu">'
+ '<li><h3>' + htmlDoc.form.li1.subheader + '</h3>'
+ '<label><input type ="radio" name = "question1" value = 1>' +  htmlDoc.form.li1.label1
+ '</label>'
+ '<label><input type = "radio" name = "question1" value = 2>' +  htmlDoc.form.li1.label2
+ '</label>'
+ '<label><input type = "radio" name = "question1" value = 3>' +  htmlDoc.form.li1.label3
+ '</label>'+ '</li>'
+ '<li><h3>' + htmlDoc.form.li2.subheader + '</h3>'
+ '<label><input type = "radio" name = "question2" value = 1>' +  htmlDoc.form.li2.label1
+ '</label>'
+ '<label><input type = "radio" name = "question2" value = 2>' +  htmlDoc.form.li2.label2
+ '</label>'
+ '<label><input type = "radio" name = "question2" value = 3>' +  htmlDoc.form.li2.label3
+ '</label>'+ '</li>'
+ '<li><h3>' + htmlDoc.form.li3.subheader + '</h3>'
+ '<label><input type = "radio" name = "question3" value = 1>' +  htmlDoc.form.li3.label1
+ '</label>'
+ '<label><input type = "radio" name = "question3" value = 2>' +  htmlDoc.form.li3.label2
+ '</label>'
+ '<label><input type = "radio" name = "question3" value = 3>' +  htmlDoc.form.li3.label3
+ '</label>'+ '</li>' + '</ol>'
+ '<input type = "submit" value = " ' + htmlDoc.form.submit + '" ' + 'class = "submit">'
+ '</form>';

var parent = document.body;
var element = document.createElement('div');
element.className = 'wrapper';
element.innerHTML = htmlPage;
parent.appendChild(element);
