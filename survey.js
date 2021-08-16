var surveyArea=document.getElementById("survey")

if(localStorage.getItem('info')===null){
surveyArea.innerHTML=`
<div>
지역을 정하세요!
<select id='area' name='area'>
    <option value='none'>=== 선택 ===</option>
    <option value='1'>서울</option>
    <option value='2'>경기</option>
    <option value='3'>인천</option>
    <option value='4'>부산</option>
    <option value='5'>경남</option>
    <option value='6'>울산</option>
    <option value='7'>경북</option>
    <option value='8'>대구</option>
    <option value='9'>충남</option>
    <option value='10'>대전</option>
    <option value='11'>세종</option>
    <option value='12'>충북</option>
    <option value='13'>강원</option>
    <option value='14'>전남</option>
    <option value='15'>광주</option>
    <option value='16'>전북</option>
    <option value='17'>제주</option>
</select>
<input type='button' value='다음으로' onclick="next_button();" >
</div>`

}else{
    console.log("wow2")
}

function next_button(){
    var selected_index=document.getElementById('area').selectedIndex;
    if(selected_index==0)   alert("지역을 선택하세요!!");
    else{
        surveyArea.innerHTML=`<div>
            대학교를 정하세요!
            <select id='university' name='university'>
                <option value='none'>=== 선택 ===</option>
                <option value='1'>서울</option>
            </select>
            <input type='button' value='결과보기' onclick="next_button1();" >
            </div>`;
        var uniArea=document.getElementById('university')
        
        switch(selected_index){
            

        case 1:
            uniArea.innerHTML=`
            <option value='none'>=== 선택 ===</option>
                <option value='1'>연세대</option>
                <option value='2'>건희대</option>
                <option value='2'>건국대</option>
                `
                break;
        case 2:
            uniArea.innerHTML=`
            <option value='none'>=== 선택 ===</option>
            <option value='1'>가천</option>
                `
        break;
        case 3:
            uniArea.innerHTML=`
            <option value='none'>=== 선택 ===</option>
            <option value='1'>인하대</option>
            `
            break;
        case 4:
            uniArea.innerHTML=`
            <option value='none'>=== 선택 ===</option>
            <option value='1'>부산대</option>
            `
            break;
        case 5:
            uniArea.innerHTML=`
            <option value='none'>=== 선택 ===</option>
            <option value='1'>경상대</option>
                `
        break;
        case 6:
            uniArea.innerHTML=`
            <option value='none'>=== 선택 ===</option>
            <option value='1'>울산대</option>
            `
            break;
        case 7:
            uniArea.innerHTML=`
            <option value='none'>=== 선택 ===</option>
            <option value='1'>영남대</option>
            `
            break;
        case 8:
            uniArea.innerHTML=`
            <option value='none'>=== 선택 ===</option>
            <option value='1'>경북대</option>
            `
            break;
    }
}
}

function next_button1(){
    var selected_index=document.getElementById('university').selectedIndex;
    if(selected_index==0)   alert("대학교를 선택하세요!!");
    else{
        alert("결과출력")
    }
}