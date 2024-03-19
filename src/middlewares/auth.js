module.exports = function(req, res, next) {
    const token = req.headers['authorization']; // Token genellikle Authorization header'ında taşınır
    if (!token) {
      return res.status(403).send({ message: 'No token provided.' });
    }
  
    // Burada token'ı doğrulama işlemleri yapılabilir
    // Örneğin, bir veritabanında token'ın geçerliliğini kontrol etmek
  
    next(); // Token geçerliyse, sonraki middleware'e geç
  };
  