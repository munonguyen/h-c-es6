const express = require('express');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(path.join(__dirname)));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// API endpoint for contact form
app.post('/api/contact', (req, res) => {
    const { name, email, subject, message } = req.body;
    
    // Basic validation
    if (!name || !email || !subject || !message) {
        return res.status(400).json({
            success: false,
            message: 'Vui lòng điền đầy đủ thông tin!'
        });
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({
            success: false,
            message: 'Email không hợp lệ!'
        });
    }
    
    // Log the contact form data (in real app, you'd save to database or send email)
    console.log('Thông tin liên hệ mới:');
    console.log(`Tên: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Chủ đề: ${subject}`);
    console.log(`Tin nhắn: ${message}`);
    console.log(`Thời gian: ${new Date().toLocaleString('vi-VN')}`);
    console.log('----------------------------');
    
    // Simulate processing time
    setTimeout(() => {
        res.json({
            success: true,
            message: 'Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất có thể.'
        });
    }, 1000);
});

// API endpoint to get server info
app.get('/api/info', (req, res) => {
    res.json({
        success: true,
        data: {
            serverName: 'Portfolio Web Server',
            version: '1.0.0',
            uptime: process.uptime(),
            timestamp: new Date().toISOString(),
            nodeVersion: process.version,
            environment: process.env.NODE_ENV || 'development'
        }
    });
});

// API endpoint for portfolio projects (mock data)
app.get('/api/portfolio', (req, res) => {
    const projects = [
        {
            id: 1,
            title: 'E-commerce Website',
            description: 'Website thương mại điện tử hoàn chỉnh với giỏ hàng và thanh toán online.',
            technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
            image: '/images/project1.jpg',
            liveUrl: 'https://example-ecommerce.com',
            githubUrl: 'https://github.com/example/ecommerce'
        },
        {
            id: 2,
            title: 'Restaurant Website',
            description: 'Website nhà hàng với menu online và hệ thống đặt bàn.',
            technologies: ['HTML/CSS', 'JavaScript', 'PHP', 'MySQL'],
            image: '/images/project2.jpg',
            liveUrl: 'https://example-restaurant.com',
            githubUrl: 'https://github.com/example/restaurant'
        },
        {
            id: 3,
            title: 'Portfolio Website',
            description: 'Website portfolio cá nhân với thiết kế hiện đại và responsive.',
            technologies: ['Vue.js', 'Sass', 'Firebase'],
            image: '/images/project3.jpg',
            liveUrl: 'https://example-portfolio.com',
            githubUrl: 'https://github.com/example/portfolio'
        }
    ];
    
    res.json({
        success: true,
        data: projects
    });
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'OK',
        timestamp: new Date().toISOString(),
        uptime: process.uptime()
    });
});

// Handle 404 errors
app.use('*', (req, res) => {
    res.status(404).json({
        success: false,
        message: 'Không tìm thấy trang yêu cầu!',
        requestedUrl: req.originalUrl
    });
});

// Error handling middleware
app.use((error, req, res, next) => {
    console.error('Server Error:', error);
    res.status(500).json({
        success: false,
        message: 'Có lỗi xảy ra trên server!',
        error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
});

// Start server
app.listen(PORT, () => {
    console.log('=================================');
    console.log('🚀 Portfolio Web Server Started');
    console.log('=================================');
    console.log(`📍 Server: http://localhost:${PORT}`);
    console.log(`🌟 Environment: ${process.env.NODE_ENV || 'development'}`);
    console.log(`📱 Node Version: ${process.version}`);
    console.log(`⏰ Started at: ${new Date().toLocaleString('vi-VN')}`);
    console.log('=================================');
});

// Graceful shutdown
process.on('SIGTERM', () => {
    console.log('Đang tắt server...');
    process.exit(0);
});

process.on('SIGINT', () => {
    console.log('\nĐang tắt server...');
    process.exit(0);
});
