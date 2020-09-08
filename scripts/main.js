let myImage = document.querySelector('img');

myImage.onclick = function()
{
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/prashant.jpg'){
        myImage.setAttribute('src','images/prashant2.jpg');
    }

    else {myImage.setAttribute('src', 'images/prashant.jpg');}

}
    let myButton = document.querySelector('button');
    let myHeading = document.querySelector('h1');

    function setUserName()
    {
        let myName = prompt('Please Enter your name:');
        if(!myName)
        { setUserName();
        }

        else {
        localStorage.setItem('name',myName);
        myHeading.innerHTML = 'Enjoy the Read,' + myName;
        }
    }

    if (!localStorage.getItem('name')){
        setUserName();
    }

    else {
        let storedName=localStorage.getItem('name');
        myHeading.textContent = 'Enjoy the Read', + storedName;
    }

    myButton.onclick = function(){
        setUserName();
    }

