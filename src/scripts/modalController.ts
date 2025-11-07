
let modal:HTMLElement | null = null;


export default function setModalContent(element:any){
    if( !modal ){
        modal = document.getElementById('main-modal');
    }
    
    if ( modal?.firstElementChild) {
        modal.firstElementChild.appendChild(element);
        modal.classList.remove('hidden');
    }
}