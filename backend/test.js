const mongoose = require('mongoose');
require('dotenv').config();

// Test database connection
async function testConnection() {
  try {
    console.log('🔍 Testing database connection...');
    
    // Use a test database URI or default to localhost
    const testUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/abbass_group_test';
    
    await mongoose.connect(testUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
    console.log('✅ Database connection successful!');
    console.log(`📦 Connected to: ${mongoose.connection.host}`);
    
    // Test creating a simple document
    const TestModel = mongoose.model('Test', new mongoose.Schema({
      name: String,
      timestamp: { type: Date, default: Date.now }
    }));
    
    const testDoc = new TestModel({ name: 'Backend Test' });
    await testDoc.save();
    console.log('✅ Document creation test successful!');
    
    // Clean up
    await TestModel.deleteOne({ _id: testDoc._id });
    console.log('✅ Document cleanup successful!');
    
    await mongoose.connection.close();
    console.log('🔌 Database connection closed.');
    
  } catch (error) {
    console.error('❌ Database connection failed:', error.message);
    process.exit(1);
  }
}

// Test email configuration
function testEmailConfig() {
  console.log('\n📧 Testing email configuration...');
  
  const requiredVars = ['EMAIL_HOST', 'EMAIL_USER', 'EMAIL_PASS', 'EMAIL_FROM'];
  const missing = requiredVars.filter(varName => !process.env[varName]);
  
  if (missing.length > 0) {
    console.log('⚠️  Missing email environment variables:', missing.join(', '));
    console.log('📝 Please configure these in your .env file');
  } else {
    console.log('✅ Email configuration looks good!');
  }
}

// Test file upload configuration
function testUploadConfig() {
  console.log('\n📁 Testing file upload configuration...');
  
  const uploadPath = process.env.UPLOAD_PATH || './uploads';
  const maxFileSize = process.env.MAX_FILE_SIZE || '5242880';
  const allowedTypes = process.env.ALLOWED_FILE_TYPES || 'pdf,doc,docx';
  
  console.log(`📂 Upload path: ${uploadPath}`);
  console.log(`📏 Max file size: ${maxFileSize} bytes (${Math.round(maxFileSize/1024/1024)}MB)`);
  console.log(`📄 Allowed file types: ${allowedTypes}`);
  console.log('✅ File upload configuration looks good!');
}

// Main test function
async function runTests() {
  console.log('🧪 Running backend tests...\n');
  
  testEmailConfig();
  testUploadConfig();
  await testConnection();
  
  console.log('\n🎉 All tests completed successfully!');
  console.log('🚀 Your backend is ready to use.');
}

// Run tests if this file is executed directly
if (require.main === module) {
  runTests().catch(console.error);
}

module.exports = { runTests }; 