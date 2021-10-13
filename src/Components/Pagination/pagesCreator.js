module.exports = {
  createPages: function createPages(numberPages, totalPages, currentPage) {
    if (totalPages > 10) {
      if (currentPage > 5) {
        for (let i = currentPage - 4; i <= currentPage + 5; i++) {
          numberPages.push(i);
          if (i == totalPages) break;
        }
      } else {
        for (let i = 1; i <= 10; i++) {
          numberPages.push(i);
          if (i == totalPages) break;
        }
      }
    } else {
      for (let i = 1; i <= totalPages; i++) {
        numberPages.push(i);
      }
    }
  },
};
