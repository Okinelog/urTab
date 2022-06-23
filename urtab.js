function urTab(id, activeClassName, orderName){
    Box = document.getElementById(id);
    Headers = Box.children[0].children;
    Bodys = Box.children[1].children;
    for (var i = 0; i < Headers.length; i++) {
        let Header = Headers[i];
        Header.addEventListener("click", TabActiveFunction );
    }
    function TabActiveFunction(Tab){
        let Item = Tab.target;
        let Order = Item.getAttribute(orderName)
        ItemClasserControl(Item);
        for (var i = 0; i < Bodys.length; i++) {
            let Body = Bodys[i];
            let BodyOrder = Body.getAttribute(orderName)
            if(BodyOrder == Order){
                BodyClasserControl(Body);
            }
        }
    }
    function ItemClasserControl(item){
        for (var i = 0; i < Headers.length; i++) {
            let Header = Headers[i];
            Header.classList.remove(activeClassName)
        }
        item.classList.add(activeClassName);
    }
    function BodyClasserControl(body){
        for (var i = 0; i < Bodys.length; i++) {
            let Body = Bodys[i];
            Body.style = "display:none";
        }
        body.style = "display:block";
    }
}