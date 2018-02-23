const validate = ()=> {
    let inputField = document.forms['search-form']['search'].value;

    inputField.trim() === '' ? alert('Please Enter a word in the search box') :
    alert(`You want to search for ${inputField}`); 
};

const lucky = ()=> {
    let feeling = document.querySelector('#lucky');
    feeling.onClick = alert("I\'m just gonna blow!!!!!!!!");
}