const input_search=document.querySelector('#search')
const pics=document.querySelectorAll('a')

const short_filter_snippet = () => {
   
      for (let i = 0; i < pics.length; i++){
         if (pics[i].dataset.title.includes(input_search.value)) {
            pics[i].style.display = 'initial'
            
         } else {
            pics[i].style.display = 'none'
   
         }
      }
      return short_filter_snippet()
   
}




input_search.addEventListener('keydown', (e) => {
   short_filter_snippet()
   
})
input_search.addEventListener('keyup', (e) => {

short_filter_snippet()
})


