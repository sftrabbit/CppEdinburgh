function shuffle_mentors() {
    var mentors = document.querySelector('.mentors');

    for (var i = mentors.children.length; i >= 0; i--) {
        mentors.appendChild(mentors.children[Math.random() * i | 0]);
    }
}

shuffle_mentors();
