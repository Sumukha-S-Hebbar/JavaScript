//first thing is we will get the window
console.log(Window);
//then inside the window we will get document
console.log(Window.document);
//we can also give it as 
console.log(document)
//if we want other properties of documents then we can use
console.dir(document)
//we can select the elements in different ways 
document.getElementById()
document.getElementsByClassName()
//while writing html we write calss but it is read as classname by document
//then after getting the element we can get the attributes
document.getElementById().getAttribute()
// document.getElementById().setAttribute(attribute name,attribute value)
//the above thing will overwrite
//there are differneces between innerHTML, innerText, TextContent
//innerHTML will give the tags inside
//innerText will display only the text that is visible
//TextContent will display all the content inisde except tags 
//queryselector
//queryselector all
//.children to get children elements
//.parentElement to get the parent of a child
//.nextElementSibling to get the sibling element

//lets say there is a parent and we want the child nodes list then we can use .childNode

//*****************CREATING AN ELEMENT IN DOM*******************/
//can use .creatElement('the type of element to be created')
const div= document.createElement('div')
//doing the above will just create the element it will not have anything inside it
//to add attributes we can do it in two ways if the attributes are known and available we can
//let us say the element created was div  line 29 to add attributes for it
div.className='some name'
div.id='some id'
//or can use this if the attributes are not known
div.setAttribute('attribute name','attribute value')
/*keep in mind that all of this will overwrite the existing so if we want 
to make changes to the existing then we should store the existing and then concatenate
with the new one*/
/*so inside div if i want to add one more element then i can create that element
and then append that element to the parent*/
//let the new node name be para
div.appendChild(para)

//
    function addLanguage(langName){
        const li = document.createElement('li');
        li.innerHTML = `${langName}`
        document.querySelector('.language').appendChild(li)
    }
    addLanguage("python")
    addLanguage("typescript")
//the above one is not optimized where as the below one is optimized
    function addOptiLanguage(langName){
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(langName))
        document.querySelector('.language').appendChild(li)
    }
    addOptiLanguage('golang')

    //Edit
    const secondLang = document.querySelector("li:nth-child(2)")
    console.log(secondLang);
    //secondLang.innerHTML = "Mojo"
    const newli = document.createElement('li')
    newli.textContent = "Mojo"
    secondLang.replaceWith(newli)

    //edit
    const firstLang = document.querySelector("li:first-child")
    firstLang.outerHTML = '<li>TypeScript</li>'

    //remove
    const lastLang = document.querySelector('li:last-child')
    lastLang.remove()
