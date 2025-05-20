INSERT INTO Users (Username, PasswordHash, FullName, Email, Phone, Address, Role)
VALUES
('nguyen01', 'hash1', N'Nguyễn Văn A', 'nguyen01@example.com', '0123456789', N'Hà Nội', 'Customer'),
('nghi02', 'hash2', N'Nghi Thị B', 'nghi02@example.com', '0987654321', N'Hồ Chí Minh', 'Customer'),
('nhu03', 'hash3', N'Như Mai C', 'nhu03@example.com', '0912345678', N'Đà Nẵng', 'Customer'),
('ngoc04', 'hash4', N'Ngọc Hương D', 'ngoc04@example.com', '0934567890', N'Hải Phòng', 'Customer'),
('nam05', 'hash5', N'Nam Phong E', 'nam05@example.com', '0901234567', N'Cần Thơ', 'Customer'),
('nhat06', 'hash6', N'Nhật Quang F', 'nhat06@example.com', '0976543210', N'Hà Nội', 'Customer'),
('nghia07', 'hash7', N'Ngĩa Thành G', 'nghia07@example.com', '0967890123', N'Hồ Chí Minh', 'Customer'),
('nhan08', 'hash8', N'Nhân Đạt H', 'nhan08@example.com', '0954321098', N'Đà Nẵng', 'Customer'),
('nga09', 'hash9', N'Nga Linh I', 'nga09@example.com', '0943210987', N'Hải Phòng', 'Customer'),
('ninh10', 'hash10', N'Ninh Khánh J', 'ninh10@example.com', '0932109876', N'Cần Thơ', 'Customer');

INSERT INTO Categories (CategoryName, Description) VALUES
(N'Điện thoại', N'Các loại điện thoại thông minh và phụ kiện'),
(N'Máy tính xách tay', N'Máy tính xách tay, phụ kiện và thiết bị liên quan'),
(N'Tivi & Âm thanh', N'Tivi, loa, tai nghe và thiết bị âm thanh'),
(N'Máy ảnh & Quay phim', N'Máy ảnh kỹ thuật số, máy quay phim và phụ kiện'),
(N'Đồng hồ', N'Đồng hồ đeo tay thời trang và thông minh'),
(N'Gia dụng', N'Thiết bị gia dụng như tủ lạnh, máy giặt, lò vi sóng'),
(N'Thiết bị văn phòng', N'Thiết bị in ấn, máy tính để bàn, văn phòng phẩm'),
(N'Trò chơi & Đồ chơi', N'Đồ chơi trẻ em, game console và phụ kiện'),
(N'Sách & Văn phòng phẩm', N'Sách, văn phòng phẩm và dụng cụ học tập'),
(N'Thời trang', N'Quần áo, giày dép và phụ kiện thời trang');

INSERT INTO Products (CategoryID, ProductName, Description, Price, ImageUrl)
VALUES
(1, N'Điện thoại Nokia 8.3', N'Điện thoại Nokia hỗ trợ 5G với màn hình lớn và camera Zeiss.', 9500.00, 'https://www.pexels.com/photo/black-iphone-6-on-white-table-1704120/'),
(1, N'Điện thoại Nokia 7.2', N'Điện thoại tầm trung với camera ZEISS và pin lâu.', 8500.00, 'https://www.pexels.com/photo/black-iphone-6-on-white-table-1704120/'),
(1, N'Điện thoại Nokia 6.2', N'Điện thoại với màn hình lớn và hiệu năng ổn định.', 7500.00, 'https://www.pexels.com/photo/black-iphone-6-on-white-table-1704120/'),
(1, N'Điện thoại Nokia 5.3', N'Điện thoại với camera AI và pin sử dụng lâu dài.', 6500.00, 'https://www.pexels.com/photo/black-iphone-6-on-white-table-1704120/'),
(1, N'Điện thoại Nokia 4.2', N'Điện thoại giá rẻ với thiết kế đẹp và hiệu năng tốt.', 5500.00, 'https://www.pexels.com/photo/black-iphone-6-on-white-table-1704120/'),
(1, N'Điện thoại Nokia 3.4', N'Điện thoại với màn hình lớn và camera AI.', 4500.00, 'https://www.pexels.com/photo/black-iphone-6-on-white-table-1704120/'),
(1, N'Điện thoại Nokia 2.4', N'Điện thoại giá rẻ với pin lâu và hiệu năng ổn định.', 3500.00, 'https://www.pexels.com/photo/black-iphone-6-on-white-table-1704120/'),
(1, N'Điện thoại Nokia 1.3', N'Điện thoại cơ bản với màn hình lớn và pin bền.', 2500.00, 'https://www.pexels.com/photo/black-iphone-6-on-white-table-1704120/'),
(1, N'Điện thoại Nubia RedMagic 5G', N'Điện thoại chơi game với hiệu năng cao và thiết kế độc đáo.', 12000.00, 'https://www.pexels.com/photo/black-iphone-6-on-white-table-1704120/'),
(1, N'Điện thoại Nothing Phone 1', N'Điện thoại với thiết kế trong suốt và hiệu năng mạnh mẽ.', 10000.00, 'https://www.pexels.com/photo/black-iphone-6-on-white-table-1704120/'),
(1, N'Điện thoại Neffos X20', N'Điện thoại với màn hình lớn và camera kép.', 7000.00, 'https://www.pexels.com/photo/black-iphone-6-on-white-table-1704120/'),
(1, N'Điện thoại Neffos X10', N'Điện thoại với hiệu năng ổn định và thiết kế đẹp.', 6000.00, 'https://www.pexels.com/photo/black-iphone-6-on-white-table-1704120/'),
(1, N'Điện thoại Neffos C9A', N'Điện thoại với màn hình lớn và pin lâu.', 5000.00, 'https://www.pexels.com/photo/black-iphone-6-on-white-table-1704120/'),
(1, N'Điện thoại Neffos C7', N'Điện thoại giá rẻ với thiết kế đẹp và hiệu năng ổn định.', 4000.00, 'https://www.pexels.com/photo/black-iphone-6-on-white-table-1704120/'),
(1, N'Điện thoại Neffos Y5', N'Điện thoại cơ bản với màn hình lớn và pin bền.', 3000.00, 'https://www.pexels.com/photo/black-iphone-6-on-white-table-1704120/'),
(1, N'Điện thoại Neffos Y6', N'Điện thoại với hiệu năng ổn định và thiết kế đẹp.', 3500.00, 'https://www.pexels.com/photo/black-iphone-6-on-white-table-1704120/'),
(1, N'Điện thoại Neffos Y7', N'Điện thoại với màn hình lớn và camera kép.', 4000.00, 'https://www.pexels.com/photo/black-iphone-6-on-white-table-1704120/'),
(1, N'Điện thoại Neffos X1', N'Điện thoại với thiết kế đẹp và hiệu năng ổn định.', 5000.00, 'https://www.pexels.com/photo/black-iphone-6-on-white-table-1704120/'),
(1, N'Điện thoại Neffos X3', N'Điện thoại với màn hình lớn và pin lâu.', 6000.00, 'https://www.pexels.com/photo/black-iphone-6-on-white-table-1704120/'),
(1, N'Điện thoại Neffos X5', N'Điện thoại với hiệu năng cao và thiết kế đẹp.', 7000.00, 'https://www.pexels.com/photo/black-iphone-6-on-white-table-1704120/'),
(1, N'Điện thoại Neffos X7', N'Điện thoại với màn hình lớn và camera AI.', 8000.00, 'https://www.pexels.com/photo/black-iphone-6-on-white-table-1704120/'),
(1, N'Điện thoại Neffos X9', N'Điện thoại với hiệu năng ổn định và thiết kế đẹp.', 9000.00, 'https://www.pexels.com/photo/black-iphone-6-on-white-table-1704120/'),
(1, N'Điện thoại Neffos Y8', N'Điện thoại với màn hình lớn và pin lâu.', 3500.00, 'https://www.pexels.com/photo/black-iphone-6-on-white-table-1704120/'),
(1, N'Điện thoại Neffos Y9', N'Điện thoại với hiệu năng ổn định và thiết kế đẹp.', 4000.00, 'https://www.pexels.com/photo/black-iphone-6-on-white-table-1704120/'),
(1, N'Điện thoại Neffos Z1', N'Điện thoại với màn hình lớn và camera kép.', 5000.00, 'https://www.pexels.com/photo/black-iphone-6-on-white-table-1704120/'),
(1, N'Điện thoại Neffos Z3', N'Điện thoại với hiệu năng cao và thiết kế đẹp.', 6000.00, 'https://www.pexels.com/photo/black-iphone-6-on-white-table-1704120/'),
(1, N'Điện thoại Neffos Z5', N'Điện thoại với màn hình lớn và pin lâu.', 7000.00, 'https://www.pexels.com/photo/black-iphone-6-on-white-table-1704120/'),
(1, N'Điện thoại Neffos Z7', N'Điện thoại với hiệu năng ổn định và thiết kế đẹp.', 8000.00, 'https://www.pexels.com/photo/black-iphone-6-on-white-table-1704120/'),
(1, N'Điện thoại Neffos Z9', N'Điện thoại với màn hình lớn và camera AI.', 9000.00, 'https://www.pexels.com/photo/black-iphone-6-on-white-table-1704120/'),
(1, N'Điện thoại Neffos Z11', N'Điện thoại với hiệu năng cao và thiết kế đẹp.', 10000.00, 'https://www.pexels.com/photo/black-iphone-6-on-white-table-1704120/'),
(1, N'Điện thoại Neffos Z13', N'Điện thoại với màn hình lớn và pin lâu.', 11000.00, 'https://www.pexels.com/photo/black-iphone-6-on-white-table-1704120/'),
(1, N'Điện thoại Neffos Z15', N'Điện thoại với hiệu năng ổn định và thiết kế đẹp.', 12000.00, 'https://www.pexels.com/photo/black-iphone-6-on-white-table-1704120/');

INSERT INTO Products (CategoryID, ProductName, Description, Price, ImageUrl)
VALUES
(1, N'Điện thoại Nokia 9 PureView', N'Điện thoại cao cấp với camera 5 ống kính độc đáo.', 13000.00, 'https://images.pexels.com/photos/6078129/pexels-photo-6078129.jpeg'),
(1, N'Điện thoại Nokia 1 Plus', N'Điện thoại phổ thông, nhỏ gọn và dễ sử dụng.', 2200.00, 'https://images.pexels.com/photos/6078129/pexels-photo-6078129.jpeg'),
(1, N'Điện thoại Nokia C1', N'Điện thoại cơ bản dành cho người mới dùng.', 2000.00, 'https://images.pexels.com/photos/6078129/pexels-photo-6078129.jpeg'),
(1, N'Điện thoại Nokia 105', N'Điện thoại cục gạch bền bỉ, pin lâu.', 1500.00, 'https://images.pexels.com/photos/6078129/pexels-photo-6078129.jpeg'),
(1, N'Điện thoại Nubia RedMagic 6', N'Điện thoại chơi game với hiệu năng cực cao.', 14000.00, 'https://images.pexels.com/photos/6078129/pexels-photo-6078129.jpeg'),
(1, N'Điện thoại Nubia Z20', N'Điện thoại màn hình kép độc đáo.', 13500.00, 'https://images.pexels.com/photos/6078129/pexels-photo-6078129.jpeg'),
(1, N'Điện thoại Nubia Play', N'Điện thoại chơi game với thiết kế thời trang.', 12500.00, 'https://images.pexels.com/photos/6078129/pexels-photo-6078129.jpeg'),
(1, N'Điện thoại Nothing Phone 2', N'Phiên bản mới với hiệu năng và thiết kế nâng cấp.', 11000.00, 'https://images.pexels.com/photos/6078129/pexels-photo-6078129.jpeg'),
(1, N'Điện thoại Neffos X30', N'Điện thoại tầm trung với camera sắc nét.', 8000.00, 'https://images.pexels.com/photos/6078129/pexels-photo-6078129.jpeg'),
(1, N'Điện thoại Neffos C30', N'Điện thoại giá rẻ với pin bền.', 4500.00, 'https://images.pexels.com/photos/6078129/pexels-photo-6078129.jpeg'),
(1, N'Điện thoại Neffos Y30', N'Điện thoại phổ thông phù hợp học sinh, sinh viên.', 5000.00, 'https://images.pexels.com/photos/6078129/pexels-photo-6078129.jpeg'),
(1, N'Điện thoại Neffos Y50', N'Điện thoại với thiết kế hiện đại và hiệu năng ổn.', 6000.00, 'https://images.pexels.com/photos/6078129/pexels-photo-6078129.jpeg'),
(1, N'Điện thoại Neffos X50', N'Điện thoại camera kép với pin lớn.', 7000.00, 'https://images.pexels.com/photos/6078129/pexels-photo-6078129.jpeg'),
(1, N'Điện thoại Neffos X70', N'Điện thoại cao cấp với camera AI.', 9000.00, 'https://images.pexels.com/photos/6078129/pexels-photo-6078129.jpeg'),
(1, N'Điện thoại Neffos Z50', N'Điện thoại thiết kế đẹp và hiệu năng ổn.', 8000.00, 'https://images.pexels.com/photos/6078129/pexels-photo-6078129.jpeg'),
(1, N'Điện thoại Neffos Z70', N'Điện thoại cao cấp với màn hình OLED.', 9500.00, 'https://images.pexels.com/photos/6078129/pexels-photo-6078129.jpeg'),
(1, N'Điện thoại Neffos Z90', N'Điện thoại mạnh mẽ với thiết kế sang trọng.', 10000.00, 'https://images.pexels.com/photos/6078129/pexels-photo-6078129.jpeg'),
(1, N'Điện thoại Neffos C50', N'Điện thoại giá rẻ với hiệu năng tốt.', 4000.00, 'https://images.pexels.com/photos/6078129/pexels-photo-6078129.jpeg'),
(1, N'Điện thoại Neffos Y60', N'Điện thoại với pin lớn và thiết kế hiện đại.', 5500.00, 'https://images.pexels.com/photos/6078129/pexels-photo-6078129.jpeg'),
(1, N'Điện thoại Neffos X60', N'Điện thoại camera kép với thiết kế đẹp.', 6500.00, 'https://images.pexels.com/photos/6078129/pexels-photo-6078129.jpeg'),
(1, N'Điện thoại Neffos Z60', N'Điện thoại hiệu năng tốt, phù hợp nhu cầu cơ bản.', 6000.00, 'https://images.pexels.com/photos/6078129/pexels-photo-6078129.jpeg'),
(1, N'Điện thoại Neffos Z80', N'Điện thoại cao cấp với camera sắc nét.', 8500.00, 'https://images.pexels.com/photos/6078129/pexels-photo-6078129.jpeg'),
(1, N'Điện thoại Neffos Z100', N'Điện thoại màn hình lớn, hiệu năng cao.', 9500.00, 'https://images.pexels.com/photos/6078129/pexels-photo-6078129.jpeg'),
(1, N'Điện thoại Nubia RedMagic 7', N'Điện thoại chơi game mạnh mẽ nhất.', 14500.00, 'https://images.pexels.com/photos/6078129/pexels-photo-6078129.jpeg'),
(1, N'Điện thoại Nubia Z30', N'Điện thoại thiết kế sang trọng, hiệu năng mạnh.', 13000.00, 'https://images.pexels.com/photos/6078129/pexels-photo-6078129.jpeg'),
(1, N'Điện thoại Nubia Play 5G', N'Điện thoại chơi game với kết nối 5G.', 13500.00, 'https://images.pexels.com/photos/6078129/pexels-photo-6078129.jpeg'),
(1, N'Điện thoại Nothing Phone 3', N'Phiên bản mới với nhiều nâng cấp về camera và hiệu năng.', 12000.00, 'https://images.pexels.com/photos/6078129/pexels-photo-6078129.jpeg'),
(1, N'Điện thoại Nokia 2720 Flip', N'Điện thoại nắp gập kiểu dáng cổ điển.', 3500.00, 'https://images.pexels.com/photos/6078129/pexels-photo-6078129.jpeg'),
(1, N'Điện thoại Nokia 3310', N'Điện thoại huyền thoại với pin siêu bền.', 2500.00, 'https://images.pexels.com/photos/6078129/pexels-photo-6078129.jpeg'),
(1, N'Điện thoại Nokia 8110', N'Điện thoại nắp trượt với thiết kế độc đáo.', 3000.00, 'https://images.pexels.com/photos/6078129/pexels-photo-6078129.jpeg');

INSERT INTO Products (CategoryID, ProductName, Description, Price, ImageUrl)
VALUES
(2, N'Máy tính xách tay Dell XPS 13', N'Máy tính xách tay cao cấp, hiệu năng mạnh mẽ, thiết kế sang trọng.', 30000.00, 'https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg'),
(2, N'Máy tính xách tay MacBook Pro 16 inch', N'Máy tính Apple với chip M1 Pro, hiệu năng vượt trội cho công việc chuyên nghiệp.', 45000.00, 'https://images.pexels.com/photos/18105/pexels-photo.jpg'),
(2, N'Máy tính xách tay HP Spectre x360', N'Máy tính xách tay đa năng, có thể xoay gập 360 độ, thiết kế mỏng nhẹ.', 28000.00, 'https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg');


INSERT INTO Products (CategoryID, ProductName, Description, Price, ImageUrl)
VALUES
(8, N'Gundam ganu&sheild', N'High quality plastic gundam by BANDAI', 30000.00, 'https://gundamshop.vn/wp-content/uploads/2023/08/GUEST_5ffa34f9-b0b9-418c-b2fe-0623b5e2ac21.jpeg')