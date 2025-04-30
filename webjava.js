const galleryy = document.querySelector("#gallery");
const search = document.querySelector("#search")

const gallery = [
    {id: 1,src:"https://images.unsplash.com/photo-1619164025195-985d31ae8844?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG" , name:"abcd"},
    {id: 2,src:"https://images.unsplash.com/photo-1619164669943-536b56d813a5?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" , name:"afgh"},
    {id: 3,src:"https://images.unsplash.com/photo-1542871793-fd7e2b3cd0b8?q=80&w=1504&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" , name:"bjkl"},
    {id: 4,src:"https://images.unsplash.com/photo-1513127696622-593a20aec127?q=80&w=1526&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" , name:"bnop"},
    {id: 5,src:"https://images.unsplash.com/photo-1536340314100-5147a6eb2b41?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" , name:"arst"},
    {id: 6,src:"https://images.unsplash.com/photo-1592966719124-2ca2978ba325?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" , name:"cvwx"},
    {id: 7,src:"https://images.unsplash.com/photo-1613408548027-2c365217db6f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" , name:"czab"},
    {id: 8,src:"https://images.unsplash.com/photo-1592289701772-4a4a8949f8ba?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" , name:"cdef"},
    {id: 9,src:"https://images.unsplash.com/photo-1610894666077-a714e5a6aa88?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" , name:"ghij"},
    {id: 10,src:"https://images.unsplash.com/photo-1636262513944-1362edb40902?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" , name:"klmn"},
];

var course = "";
gallery.forEach(function(c){
    course += `<div class="img"> 
                <img src="${c.src}"> 
                <h5>${c.name}</h5> 
            </div>`
});

galleryy.innerHTML = course;

search.addEventListener("input" , function(){
    var matching = gallery.filter(function(ss){
        return ss.name.startsWith(search.value);
    });
    var courses = "";
    matching.forEach(function(e){
        courses += `<div class="img"> 
                    <img src="${e.src}"> 
                    <h5>${e.name}</h5> 
                </div>`
    });
    galleryy.innerHTML = courses;
});