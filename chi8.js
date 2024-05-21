function validateForm() {
    // Lấy các giá trị của các trường cần kiểm tra
    let firstName = document.querySelector('input[name="textFirtname"]').value;
    let lastName = document.querySelector('input[name="texLastname"]').value;
    let phoneNumber = document.querySelector('input[name="texttel"]').value;
    let streetAddress1 = document.querySelector('input[name="textAddress"]').value;
    let country = document.querySelector('select[name="Country"]').value;
    let province = document.querySelector('select[name="province"]').value;
    let postalCode = document.querySelector('input[name="textGender"]').value;
    
    // Kiểm tra các trường bắt buộc
    if (!firstName || !lastName || !phoneNumber || !streetAddress1 || country == 1 || province == 1 || !postalCode) {
        alert('Bạn nhập thiếu thông tin!');
        return false;
    }
    
    alert('Lưu thành công');
    return true;
}