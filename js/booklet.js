let currentPage = 0;
const totalPages = 5;

function switchPage(index) {
    currentPage = index;
    updateBooklet();
}

function changePage(direction) {
    currentPage += direction;
    if (currentPage < 0) currentPage = 0;
    if (currentPage >= totalPages) currentPage = totalPages - 1;
    updateBooklet();
}

function updateBooklet() {
    for (let i = 0; i < totalPages; i++) {
        const page = document.getElementById(`page-${i}`);
        const tab = document.querySelectorAll('.header-nav .nav-tab')[i];
        const fileItem = document.querySelectorAll('.file-tree li')[i];

        if (i === currentPage) {
            if (page) page.classList.add('active');
            if (tab) tab.classList.add('active');
            if (fileItem) fileItem.classList.add('active');
        } else {
            if (page) page.classList.remove('active');
            if (tab) tab.classList.remove('active');
            if (fileItem) fileItem.classList.remove('active');
        }
    }

    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const indicator = document.getElementById('page-indicator');

    if (prevBtn) prevBtn.disabled = (currentPage === 0);
    if (nextBtn) nextBtn.disabled = (currentPage === totalPages - 1);
    if (indicator) indicator.innerText = `Section ${currentPage + 1} of ${totalPages}`;
}