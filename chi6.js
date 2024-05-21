document.querySelector('.btn-edit').addEventListener('click', function() {
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => input.value = '');
});