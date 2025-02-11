 
    function isTouchDevice() {
      return true == ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch);
    }
    //const firstbox = document.getElementById("content");
    /* Start Product Listing*/
    [].forEach.call(document.querySelectorAll('.left-links ul li'), function(link) {
      link.addEventListener('mouseover', function(event) {
        var elem = this;
        //console.log(elem.offsetLeft, elem.offsetTop);
        document.getElementById('effect').style.top = elem.offsetTop + 'px';
      },false);
    });
    var leftActiveLink;
    leftActiveLink = document.querySelector('.left-links ul .active');
    function leftMenuOutFn(elem){
      var list = traverseChildren(elem);
      return function onMouseOut(event) {
          var e = event.toElement || event.relatedTarget;
          if (!!~list.indexOf(e)) {
              return;
          }
          if(leftActiveLink){
          document.getElementById('effect').style.top = leftActiveLink.offsetTop + 'px';
        }
    };}
    const productMenu = document.getElementById('effect');    
    function movetoActive(){
      if(leftActiveLink){
        productMenu.style.top = leftActiveLink.offsetTop + 'px';
      }
    }
    movetoActive();
    //using closure to cache all child elements
    const parentOfLeftMenu = document.querySelector('.left-links');
    if(parentOfLeftMenu){
      parentOfLeftMenu.addEventListener('mouseout',leftMenuOutFn(parentOfLeftMenu),true);
    }
    //quick and dirty BFS children traversal, Im sure you could find a better one                                        
    function traverseChildren(elem){
      var children = [];
      var q = [];
      q.push(elem);
      while (q.length>0)
      {
          var elem = q.pop();
          children.push(elem);
          pushAll(elem.children);
      }
          function pushAll(elemArray){
              for(var i=0;i<elemArray.length;i++)
              {
                  q.push(elemArray[i]);
              }          
          }
          return children;
    }
    /* End Product Listing*/
    /* start product left navi*/
    const left_menu = document.querySelector('.left-navi');
    const left_items = document.querySelector('.left-links');
    if(left_menu){
      left_menu.addEventListener('click', function hamburgerClick(){
          if(left_items.classList.contains('opened')){
            left_items.classList.remove('opened');
            left_menu.classList.remove('active');
              //console.log('remove');
          }
          else{
            left_items.classList.add('opened');
            left_menu.classList.add('active');
              //console.log('add');
          }
      });
    }
    function closeNav() {
        if(left_menu){
            left_items.classList.remove('opened');
            left_menu.classList.remove('active');
        }
    }
    document.onclick = function (e) {
      if (e.target.id !== 'mySidebar' && e.target.id !== 'btn_left_navi') {
          if (e.target.offsetParent && e.target.offsetParent.id !== 'mySidebar')
              closeNav()
      }
    }
    /* end product left navi*/
var win_height = window.innerHeight;
/* var final_height=0; 
window.addEventListener("scroll", () => {
  console.log(this.scrollY+' :you passed red box bottom: '+firstbox.scrollHeight);
  final_height = firstbox.scrollHeight - win_height;
  if (this.scrollY >= final_height) {
    console.log(' in ');
  }
});*/
console.log('Load JS');

    function reportWindowSize(){
      const scrollLeftLinks = document.querySelector('.left-links');
      const scrollcontainer = document.querySelector('.category-sub');
      const content = document.querySelector('.content-scroll');
      let isScrolling = false;
      let startPosition = null;
      let startMarginTop = null;
      const scrollSpeed = 2; // Adjust the scroll speed as needed
      setTimeout(function(){
        //console.log('hi');
        if(scrollcontainer){      
          if(isTouchDevice() === true){
            scrollcontainer.classList.add('touchscreen');
          }
          else{ 
            scrollcontainer.classList.remove('touchscreen');
            scrollcontainer.addEventListener('mousemove', handleMouseMove);
            scrollcontainer.addEventListener('mouseenter', handleMouseEnter);
        
            function handleMouseMove(event) {
              if (!isScrolling) {
                startPosition = event.pageY;
                startMarginTop = parseInt(window.getComputedStyle(content).marginTop);
                isScrolling = true;
              }
        
              const distance = event.pageY - startPosition;
              const scrollDistance = distance * scrollSpeed;
              const maxScrollTop = scrollcontainer.clientHeight - content.offsetHeight;
        
              let newMarginTop = startMarginTop - scrollDistance;
              newMarginTop = Math.max(newMarginTop, maxScrollTop); // Limit scroll to scrollcontainer bottom
              newMarginTop = Math.min(newMarginTop, 0); // Limit scroll to scrollcontainer top
        
              content.style.marginTop = `${newMarginTop}px`;
            }
        
            function handleMouseEnter(event) {
              const containerRect = scrollcontainer.getBoundingClientRect();
              const pointerPosition = event.clientY;
              if (pointerPosition > containerRect.bottom) {
                isScrolling = true;
              }
            }
          }
        
          scrollLeftLinks.addEventListener('mouseleave', () => {
            isScrolling = false;
            content.style.marginTop = '0';
          });
        }
      },300)
    }
    reportWindowSize();
    window.onresize = reportWindowSize;
    
    var pagetitle,category_name,flag,listItems,category_id,detail_flag='notDetail'; 
    
    setInterval(function () {    
        pagetitle = document.querySelector('.page-title h1'); 
        if(pagetitle){
          category_name = pagetitle.getAttribute('data-text');
        }
        console.log('getAttribute :'+ category_name);    
        if(flag == category_name)
        {
            console.log('if :'+ flag +' '+category_name);

        }
        else{
            listItems = document.querySelectorAll('.content-scroll ul li');
            listItems.forEach(item => {
                category_id = item.getAttribute('data-category'); 
                if (category_id === category_name) {
                item.classList.add('active');
                leftActiveLink = document.querySelector('.left-links ul .active');
                movetoActive();
                }
                else{
                    item.classList.remove('active');
                }
            });
            flag = category_name;
            console.log('else :'+ flag +' '+category_name);
        }
    }, 2000);
    
    