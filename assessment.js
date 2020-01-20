(function () {
    'use strict';
    const userNameInpugt=document.getElementById('user-name');
    const asswssmentButton=document.getElementById('asswssment');
    const resultDivided=document.getElementById('result-area');
    const tweetDrivided=document.getElementById('tweet-area');
    function removeAllChildren(element){
        while(element.firstChild){
        element.removeChild(element.firstChild);
    }
}
    asswssmentButton.onclick=()=> {
        const userName=userNameInpugt.value;
        if(userName.length===0){
            return;
        }
        while(resultDivided.firstChild){
            resultDivided.removeChild(resultDivided.firstChild);
            userNameInpugt.onkeydown=(event)=>{
                if(event.keyCode===13){
                    asswssmentButton.onclick();
                }
            };
        }
        const header=document.createElement('h3')
        header.innerText='診断結果';
        resultDivided.appendChild(header);

        const paragraph=document.createElement('p');
        const result=asswssment(userName);
        paragraph.innerText=result;
        resultDivided.appendChild(paragraph);

        removeAllChildren(tweetDrivided);
        const anchor=document.createElement('a');
        const hrefValue='https://twitter.com/intent/tweet?button_hashtag=あなたのいいところ&ref_src=twsrc%5Etfw'
        +encodeURIComponent(result);
        anchor.setAttribute('href',hrefValue);
        anchor.className='twitter-hashtag-button';
        anchor.innerText='https://platform.twitter.com/widgets.js';
        tweetDrivided.appendChild(anchor);
        
        twttr.widgets.load();
    };
    const answers = [
        '{userName}のいいところは声です。{userName}の特徴的な声皆を惹きつけ、心に残ります。',
        `{userName}のいいところはまなざしです。{userName}に見つめられた人は、気になって仕方ないでしょう。`,
        '{userName}のいいところは情熱です。{userName}の情熱に周りの人は感化されます。',
        '{userName}のいいところは厳しさです。{userName}の厳しさが物事をいつも成功に導きます。',
        '{userName}のいいところは知識です。博識な{userName}を多くの人が頼りにしています。',
        '{userName}のいいところはユニークさです。{userName}だけのその特徴がみんなを楽しくさせます。',
        '{userName}のいいところは用心深さです。{userName}の洞察に多くの人が助けられます。',
        '{userName}のいいところは見た目です。内側から溢れ出る{userName}の良さにみんなが気を惹かれます。',
        '{userName}のいいところは決断力です。{userName}がする決断にいつも助けられている人がいます。',
        '{userName}のいいところは思いやりです。{userName}に気をかけてもらった多くの人が感謝をしています。',
        '{userName}のいいところは感受性です。{userName}が感じたことにみんなが共感し、わかりあうことができます。',
        '{userName}のいいところは節度です。強引すぎない{userName}の考えにみんなが感謝しています。',
        '{userName}のいいところは好奇心です。新しいことに向かっていく{userName}の心構えが多くの人に魅力的に移ります。',
        '{userName}のいいところは気配りです。{userName}の配慮が多くの人を救っています。',
        '{userName}のいいところはその全てです。ありのままの{userName}自身がいいところなのです。',
        '{userName}のいいところは自制心です。まずいと思った時にしっかりと衝動を抑えられる{userName}がみんなから高く評価されています。'
        '{userName}のいいところは優しさです。{userName}の優しい雰囲気や立ち振る舞いに多くの人が癒やされています。'
    ];
function asswssment(userName){
    let sumOfcharCode=0;
    for(let i=0;i<userName.length;i++){
        sumOfcharCode=sumOfcharCode+userName.charCodeAt(i);
    }
    const index=sumOfcharCode % answers.length;
    let result=answers[index];

    result=result.replace(/{userName}/g,userName);
    return result;
}
})();
