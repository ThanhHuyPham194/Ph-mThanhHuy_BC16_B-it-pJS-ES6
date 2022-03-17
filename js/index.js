



document.querySelector('#signup-form .actions ul li:last-child a').onclick = function(){
    //Dom đến tất cả các thẻ input và select có trên giao diện:
    let arrInput = document.querySelectorAll('.fieldset-content input,.fieldset-content select');
    console.log(arrInput);
    let arrThongTin = [];
    //Duyệt các thẻ input bằng for of:
    for (let input of arrInput) {
        //Mỗi lần lấy ra một thẻ input 
        let {value, id, name } = input;
       arrThongTin = {...arrThongTin,[name]:value}
    }
    //Hiển thị thông tin ra giao diện:
    let htmls = '';
    for(let key in arrThongTin){
        htmls += `
        <div>
            <p>${key}: ${arrThongTin[key]}</p>
        </div>
        `
    }
    document.querySelector('.donate-us').innerHTML = htmls; 

}