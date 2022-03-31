const str =`
010-1234-5678
thececond@gmail.com
https://www.omdbapi.com/?apikey=4a27f4b6&s=frozen
The quick brown fox jumps over the lazy dog.
abbccdddd
hxyps
table
http://localhost:1234/
동해물과_백두산이 마르고 닳도록 하느님이 보우하사 우리 나라만세
d`
//위에 있는 코드를 정규식을 통해 어떤 패턴으로 작성되었는지 구해보자

//생성자 함수형식으로 
//the가 들어간 문자열 찾기
//const regexp = new RegExp('the', '')
//const regexp = new RegExp('the', 'gi')
//console.log(str.match(regexp))

//리터럴 방식
/* const regexp = /the/gi
console.log(str.match(regexp)) */


//jump를 happy로 변경
/* const regexp = /jumps/gi
console.log(regexp.test(str))
strResult = str.replace(regexp, 'happy')
console.log(strResult) */

////====패턴1====////////////////////////////////////////////////////////
//t로 시작하는 문자열 찾기
//주의 앞에 공백있으면 안됨
console.log(
    str.match(/^t/gim) //['t', 'T', 't']
)

//d로 끝나는 문자열 찾기
//g만 입력하면 null이 출력됨, m(멀티라인)추가
console.log(
    str.match(/d$/gm)
)

//. 임이의 문자와 일치
//모든 전체배열이 나타남
console.log(    
    str.match(/./g)
)

//he로 끝나는 문자열 찾기
console.log(    
    str.match(/.he/g) //['the', 'The', 'the']
)

//h로 시작하고 s로 끝나는 문자열 찾기
console.log(
    str.match(/h...s/g) //['https', 'hxyps']
)

//fox와 dog를 |로 찾기
console.log(
    str.match(/fox | dog/g)
)

//http와 https를 ?로 모두 검색
console.log(
    str.match(/https?/g) //['https', 'http']
)

////====패턴2====////////////////////////////////////////////////////////
//연속일치여부
console.log(
    //d가 두개연속 일치
    str.match(/d{2}/g)
)

console.log(
    //d가 2개 이상 4개 이하
    str.match(/d{2,4}/g)
)

////====패턴3====////////////////////////////////////////////////////////
//각 f,o,x
console.log(
    str.match(/[fox]/g)
)

//0에서 9까지 1개이상 연속된 데이터 찾기
console.log(
    str.match(/[0-9]{1,}/g)
)

//가에서 힣까지 2개이상 연속된 데이터 찾기
console.log(
    str.match(/[가-힣]{2,}/g)
)


////====패턴4====////////////////////////////////////////////////////////
//영어의 대문자,소문자,숫자,_까지 모두 검색
console.log(
    str.match(/\w/g)
)

//경계를 모두 출력
//공백, 언더바, @특수기호 
console.log(
    str.match(/\b/g)
)

//경계 활용해서
//f로 시작하고 1개 이상 일치하는 문자 마지막 경계
console.log(
    str.match(/\bf\w{1,}\b/g) //['frozen', 'fox']
)

//숫자중에 1개 이상 연속된 데이터를 출력
console.log(
    str.match(/\d{1,}/g)
)

//공백 s사용
console.log(
    str.match(/\s/g) //모든 공백이 검색되어 출력됨
)

//공백활용
const h = `  the hello  world   !

`
console.log(
    h.replace(/\s/g, '') //모든공백이 삭제되고 thehelloworld!출력     
)

////====패턴5====////////////////////////////////////////////////////////
const email = `
hongteacher@nate.com
`
//메일 주소의 @앞의 문자열만 가져오기
console.log(
    email.match(/.{1,}(?=@)/g)
)

//메일 주소의 @뒤의 문자열만 가져오기
console.log(
    email.match(/(?<=@).{1,}/g)
)

//ctrl+C로 서버 끄기
//.gitignore파일만들어서 불필요한 파일 업로드 안되게 설정
//git status
//git add .
//git commit -m 'Create project