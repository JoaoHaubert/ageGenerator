function verify(){
    let data = new Date()
    let year = data.getFullYear()
    let fyear = document.getElementById('txtage')
    let res = document.querySelector('div#res')
    if (fyear.value.length == 0 || fyear.value > year){
       window.alert('The value that you put is not correct') 
    } else {
        let fsex = document.getElementsByName('radsex')
        let age = year - Number(fyear.value)
        let gender = ''
        let image = document.createElement('img')
        image.setAttribute('id', 'picture')
        if (fsex[0].checked){
            gender = 'Man'
            if(age >=0 && age < 5){
                //Baby
                image.setAttribute('src','babyMale.png')
            } else if(age < 12){
                //Child
                image.setAttribute('src','childMale.png')
            } else if (age < 18){
                //Teen
                image.setAttribute('src','teenMale.png')
            } else if (age < 40){
                //Adult
                image.setAttribute('src','adultMale.png')
            } else if (age < 55){
                //Elder
                image.setAttribute('src','elderMale.png')
            } else {
                //Elderly
                image.setAttribute('src','eldestMale.png')
            }
            
        } else if (fsex[1].checked){
            gender = 'Woman'
            if(age >=0 && age < 5){
                //Baby
                image.setAttribute('src','babyFemale.png')
            } else if(age < 12){
                //Child
                image.setAttribute('src','childFemale.png')
            } else if (age < 18){
                //Teen
                image.setAttribute('src','teenFemale.png')
            } else if (age < 40){
                //Adult
                image.setAttribute('src', 'adultFemale.png')
            } else if (age < 55){
                //Elder
                image.setAttribute('src', 'elderFemale.png')
            } else {
                //Elderly
                image.setAttribute('src', 'eldestFemale.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `${gender} was detected with ${age} years old.`
        res.appendChild(image)
        
    }
}