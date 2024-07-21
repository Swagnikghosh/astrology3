document.getElementById('ast_btn').addEventListener('click', function(e) {
    e.preventDefault();
    var para = document.getElementById('third-para');
    if (para.classList.contains('truncate')) {
        para.classList.remove('truncate');
        para.classList.add('full-text');
        this.textContent = 'Show less';
    } else {
        para.classList.remove('full-text');
        para.classList.add('truncate');
        this.textContent = 'Know more';
    }
});