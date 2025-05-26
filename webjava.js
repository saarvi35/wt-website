const galleryy = document.querySelector("#card-container");
const search = document.querySelector("#search")

const gallery = [
    {id: 1,src:"course1.jpg" , name:"Complete Blender Creator" , category:"Development" , ratings:"4.5" , desc:"Learn 3D Modelling for Beginners" , stds:"456,123" , price:"$16.00"},
    {id: 2,src:"course2.PNG" , name:"Full Stack Fusion" , category:"Design" , ratings:"3.7" , desc:"Learn 3D Modelling for Beginners" , stds:"845,651" , price:"$20"},
    {id: 3,src:"course3.jpg" , name:"Python Powerhouse" , category:"Development" , ratings:"4.6" , desc:"Learn 3D Modelling for Beginners" , stds:"844,462" , price:"$23"},
    {id: 4,src:"course4.jpg" , name:"Design to Deploy" , category:"UI/UX" , ratings:"4.0" , desc:"Learn 3D Modelling for Beginners" , stds:"842,369" , price:"$15"},
    {id: 5,src:"course5.jpg" , name:"SEO Mastery 2025" , category:"Design" , ratings:"4.5" , desc:"Learn 3D Modelling for Beginners" , stds:"658,647" , price:"$30"},
    {id: 6,src:"course6.jpg" , name:"JavaScript Zero to Hero" , category:"Development" , ratings:"3.9" , desc:"Learn 3D Modelling for Beginners" , stds:"136,899" , price:"$35"},
    {id: 7,src:"course7.jpg" , name:"AI Unlocked" , category:"Design" , ratings:"4.3" , desc:"Learn 3D Modelling for Beginners" , stds:"875,644" , price:"$30"},
    {id: 8,src:"course8.jpg" , name:"Data Wizardry" , category:"U/UX" , ratings:"3.5" , desc:"Learn 3D Modelling for Beginners" , stds:"357,159" , price:"$28"}
];

var course = "";
gallery.forEach(function(c){
    course += `<div class="card">
                <img src="${c.src}" alt="Course Image" class="card-img">
                <div class="card-body">
                    <p class="category">${c.category}</p>
                    <div class="title-rating">
                    <h3 class="title">${c.name}</h3>
                    <span class="rating">★ ${c.ratings}</span>
                    </div>
                    <p class="desc">${c.desc}</p>
                    <div class="card-footer">
                    <span class="students">👤 ${c.stds} students</span>
                    <span class="price">${c.price}</span>
                    </div>
                </div>
                </div>`
});
galleryy.innerHTML = course;


search.addEventListener("input" , function(){
    var matching = gallery.filter(function(output){
        return output.name.startsWith(search.value);
    });
    var courses = "";
    matching.forEach(function(e){
        courses += `<div class="card">
                <img src="${e.src}" alt="Course Image" class="card-img">
                <div class="card-body">
                    <p class="category">${e.category}</p>
                    <div class="title-rating">
                    <h3 class="title">${e.name}</h3>
                    <span class="rating">★ ${e.ratings}</span>
                    </div>
                    <p class="desc">${e.desc}</p>
                    <div class="card-footer">
                    <span class="students">👤 ${e.stds} students</span>
                    <span class="price">${e.price}</span>
                    </div>
                </div>
                </div>`
    });
    galleryy.innerHTML = courses;
});

//   courses
  function playCourse(courseName) {
    alert("Now playing: " + courseName);
    window.open('https://youtu.be/lnYZXAIWU8M' , '_blank');
  }
