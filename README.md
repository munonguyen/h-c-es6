# Portfolio Website

Đây là một website portfolio cá nhân được xây dựng với HTML5, CSS3, JavaScript và Node.js Express server.

## 🚀 Tính năng

- **Responsive Design**: Tương thích với mọi thiết bị (desktop, tablet, mobile)
- **Modern UI/UX**: Giao diện hiện đại và thân thiện với người dùng
- **Smooth Animations**: Hiệu ứng mượt mà và chuyên nghiệp
- **Contact Form**: Form liên hệ với validation
- **Express Server**: Backend server với API endpoints
- **Cross-browser Compatible**: Hỗ trợ tất cả trình duyệt hiện đại

## 📋 Yêu cầu hệ thống

- Node.js (version 14.0.0 trở lên)
- npm hoặc yarn
- Trình duyệt web hiện đại

## ⚡ Cài đặt và chạy

### 1. Clone hoặc tải project

```bash
# Nếu sử dụng Git
git clone <repository-url>
cd portfolio-website

# Hoặc tải và giải nén file zip
```

### 2. Cài đặt dependencies

```bash
npm install
```

### 3. Chạy server

#### Development mode (với nodemon)
```bash
npm run dev
```

#### Production mode
```bash
npm start
```

### 4. Truy cập website

Mở trình duyệt và truy cập: `http://localhost:3000`

## 📁 Cấu trúc project

```
portfolio-website/
├── index.html          # Trang chủ
├── styles.css          # CSS styles
├── script.js           # JavaScript frontend
├── server.js           # Node.js Express server
├── package.json        # NPM configuration
└── README.md          # Documentation
```

## 🛠️ Công nghệ sử dụng

### Frontend
- **HTML5**: Semantic markup
- **CSS3**: Flexbox, Grid, Animations, Media Queries
- **JavaScript ES6+**: DOM manipulation, Event handling, Fetch API
- **Google Fonts**: Typography (Roboto)

### Backend
- **Node.js**: JavaScript runtime
- **Express.js**: Web framework
- **CORS**: Cross-Origin Resource Sharing
- **Morgan**: HTTP request logger

## 📱 Tính năng chi tiết

### 1. Header & Navigation
- Fixed header với transparent effect khi scroll
- Responsive hamburger menu cho mobile
- Smooth scrolling navigation
- Active link highlighting

### 2. Hero Section
- Gradient background với parallax effect
- Typing animation cho title
- Call-to-action buttons
- Responsive layout

### 3. About Section
- Skill bars với animation
- Responsive two-column layout
- Personal information display

### 4. Services Section
- Card-based layout
- Hover animations
- Icon integration
- Service descriptions

### 5. Portfolio Section
- Project showcase
- Technology tags
- Hover effects
- Responsive grid

### 6. Contact Section
- Working contact form
- Form validation
- Social media links
- Contact information

### 7. Backend API
- `/api/contact` - Xử lý form liên hệ
- `/api/portfolio` - Lấy danh sách projects
- `/api/info` - Thông tin server
- `/health` - Health check endpoint

## 🎨 Customization

### Thay đổi màu sắc
Chỉnh sửa các biến CSS trong file `styles.css`:

```css
:root {
  --primary-color: #007bff;
  --secondary-color: #6c757d;
  --success-color: #28a745;
  --danger-color: #dc3545;
}
```

### Thêm sections mới
1. Thêm HTML structure trong `index.html`
2. Thêm CSS styles trong `styles.css`
3. Thêm JavaScript functionality trong `script.js`

### Thêm API endpoints
Chỉnh sửa file `server.js`:

```javascript
app.get('/api/new-endpoint', (req, res) => {
    res.json({ message: 'New endpoint' });
});
```

## 📝 Scripts có sẵn

- `npm start` - Chạy server production
- `npm run dev` - Chạy server development với nodemon
- `npm run build` - Build project (placeholder)

## 🐛 Troubleshooting

### Lỗi thường gặp

1. **Port đã được sử dụng**
   ```
   Error: listen EADDRINUSE: address already in use :::3000
   ```
   Giải pháp: Đổi port trong file `server.js` hoặc kill process đang sử dụng port 3000

2. **Module không tìm thấy**
   ```
   Error: Cannot find module 'express'
   ```
   Giải pháp: Chạy `npm install` để cài đặt dependencies

3. **Không tải được trang**
   Kiểm tra:
   - Server đã chạy chưa
   - Port có đúng không
   - Firewall có block không

## 🌟 Tính năng nâng cao (có thể mở rộng)

- [ ] Database integration (MongoDB/MySQL)
- [ ] User authentication
- [ ] Admin panel
- [ ] Blog system
- [ ] Image upload
- [ ] Email notifications
- [ ] SEO optimization
- [ ] PWA features
- [ ] Docker containerization

## 📄 License

MIT License - xem file LICENSE để biết thêm chi tiết.

## 👤 Author

**Student** - Portfolio Website Project

## 🤝 Contributing

1. Fork project
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## 📞 Support

Nếu gặp vấn đề, hãy tạo issue trên GitHub hoặc liên hệ qua email.

---

**Chúc bạn code vui vẻ! 🚀**
# h-c-es6
