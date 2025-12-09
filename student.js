const Student = require('../models/student');

module.exports = async (req, res, next) => {
  try {
    const studentId = req.params.id || req.user.id; // from JWT or request param
    const student = await Student.findById(studentId);

    if (!student) {
      return res.status(404).json({ message: 'Student not found!' });
    }

    // Attach student data for next middleware
    req.student = student;
    next();
  } catch (error) {
    console.error('Student middleware error:', error);
    res.status(500).json({ message: 'Server error validating student.' });
  }
};
