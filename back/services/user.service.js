const User = require("../models/User.model");
const tokenService = require("../config/tokens");
const bcrypt = require("bcrypt");

async function registerUser(nameAndLastname, operator, email, password) {
  try {
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      throw new Error("El correo electrónico ya está registrado");
    }

    const user = await User.create({
      nameAndLastname,
      operator,
      email,
      password,
    });
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function findUserByEmail(email) {
  return User.findOne({
    where: { email },
  });
}

async function validateUserPassword(password, secondPassword) {
  return bcrypt.compare(password, secondPassword);
}

function generateToken(payload) {
  return tokenService.generateToken(payload);
}

async function updateUserProfile(userId, profileData) {
  try {
    await User.update(
      {
        nameAndLastname: profileData.nameAndLastname,
        phone: profileData.phone,
        
        email: profileData.email,
      },
      { returning: true, where: { id: userId } }
    );

    const updatedUser = await User.findByPk(userId, {
      attributes: {
        exclude: ["password"],
        include: ["nameAndLastname", "email" ],
      },
    });

    return updatedUser;
  } catch (error) {
    console.error("Error al actualizar el perfil del usuario:", error);
    throw new Error("Error al actualizar el perfil del usuario");
  }
}

module.exports = {
  registerUser,
  findUserByEmail,
  validateUserPassword,
  generateToken,

  updateUserProfile,
};
